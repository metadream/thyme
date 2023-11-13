import styles from '../styles/upload.css';
import downloadIcon from '../icons/round-download.svg';
import removeIcon from '../icons/round-cross.svg';
import Quick from '../Quick.js';
import { createElement, formatBytes, nanoId } from "../modules/Util.js";
import { Locale } from '../modules/Locale.js';
import { Component } from './Component.js';

/**
 * 上传组件
 * @example <quick-upload multiple="9" maxsize="1024000" accept="image/*" readonly></quick-upload>
 * @example this.entries = [{_id, previewUrl, downloadUrl, originalName}]
 * @example this.onUpload = async function(entry) {}
 * @example this.onRemove = async function(entry) {}
 */
export class Upload extends Component {

    styles = styles;
    template = `
        <div class="upload">
            <div class="upload-chooser">
                <input type="file" accept="{{accept}}"/>
                <a class="chooser">${Locale.get('UPLOAD')}</a>
            </div>
            <div class="upload-list"></div>
        </div>`;

    #uploadCallback;
    #removeCallback;
    #entries;
    #readOnly;
    #maxSize;
    #maxFiles;

    onConnected() {
        this.#entries = [];
        this.#readOnly = this.getBooleanAttribute('readonly');
        this.#maxSize = this.getIntAttribute('maxsize'); // bytes
        this.#maxFiles = this.getIntAttribute('multiple');

        if (this.#readOnly) {
            this.findElement('.upload-chooser').remove();
        } else {
            const $file = this.findElement('input[type="file"]');
            const $chooser = this.findElement('a.chooser');
            $chooser.on('click', () => $file.click());
            $file.on('change', e => this.#upload(e.target.files));

            if (this.#maxFiles > 1) {
                $file.setAttribute('multiple', 'multiple');
            }
        }
    }

    async #upload(files) {
        if (!files || files.length === 0) {
            return;
        }
        if (files.length + this.#entries.length > this.#maxFiles) {
            Quick.warning(Locale.get('MAX_ALLOWED_FILES', { maxFiles: this.#maxFiles }));
            return;
        }
        for (const file of files) {
            if (this.#maxSize > 0 && file.size > this.#maxSize) {
                return Quick.warning(Locale.get('MAX_ALLOWED_SIZE', { maxSize: formatBytes(this.#maxSize) }));
            }
        }
        for (const file of files) {
            const tempUrl = URL.createObjectURL(file);
            const entry = {
                _id: nanoId(),
                originalName: file.name,
                previewUrl: tempUrl,
                downloadUrl: tempUrl,
                file
            };
            if (this.#uploadCallback) {
                await this.#uploadCallback(entry);
                this.#render(entry);
            }
        }
    }

    #render(entry) {
        if (!entry || !entry._id) return;
        const $entry = createElement(`
            <div class="upload-entry" id="_${entry._id}">
                <a class="preview-link" target="_blank" href="${entry.previewUrl}">${entry.originalName}</a>
                <a class="download-icon" href="${entry.downloadUrl}" download="${entry.originalName}">${downloadIcon}</a>
                <a class="remove-icon">${removeIcon}</a>
            </div>
        `);

        const $removeBtn = $entry.querySelector('.remove-icon');
        if (this.#readOnly) {
            $removeBtn.remove();
        } else {
            $removeBtn.on('click', () => this.#remove(entry));
        }

        const $uploadList = this.findElement('.upload-list');
        $uploadList.append($entry);
        this.#entries.push(entry);
    }

    #remove(entry) {
        Quick.confirm(Locale.get('DELETE_PROMPT'), async (_cfm, btn) => {
            if (!entry.file && this.#removeCallback) {
                btn.loadding = true;
                await this.#removeCallback(entry);
                btn.loadding = false;
                Quick.success(Locale.get('DELETE_SUCCESS'));
            }

            const $entry = this.findElement('#_' + entry._id);
            $entry.remove();

            const index = this.#entries.findIndex(v => v._id == entry._id);
            this.#entries.splice(index, 1);
        });
    }

    get entries() {
        return this.#entries;
    }

    set entries(entries) {
        this.#entries.length = 0;
        if (entries && Array.isArray(entries)) {
            entries.forEach(v => this.#render(v));
        }
    }

    set onUpload(callback) {
        this.#uploadCallback = callback;
    }

    set onRemove(callback) {
        this.#removeCallback = callback;
    }

}