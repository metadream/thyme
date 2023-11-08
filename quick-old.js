document.head.insertAdjacentHTML('beforeend', `<style>

.quick-loading {
  position: fixed;
  z-index: 5100;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 32px;
  height: 32px;
  margin: auto;
  border-radius: 50%;
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  border-right: 3px solid rgba(255, 255, 255, 0.2);
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  border-left: 3px solid rgba(255, 255, 255, 0.8);
  animation: spin .6s linear infinite;
}
.quick-progress {
  position: fixed;
  z-index: 5100;
  top: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #0c7;
  transition: width .3s linear;
}
.quick-attachment {
  display: flex;
}
.quick-attachment input[type="file"] {
  display: none;
}
.quick-attachment>:first-child {
  margin-right: 10px;
}
.quick-attachment .file-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
}
.quick-attachment .file-list>:not(.loading) {
  background: #eee;
  margin: 3px;
  padding: 2px 8px;
  border-radius: var(--border-radius);
  width: fit-content;
}
.quick-attachment .entry {
  display: flex;
  align-items: center;
}
.quick-attachment .entry>:first-child {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
.quick-attachment .icon {
  display: block;
  cursor: pointer;
  width: 14px;
  height: 14px;
  text-decoration: none;
  margin-left: 5px;
}
</style>`);

// --------------------------------------------------------
// UI组件：居中圆形加载动画
// --------------------------------------------------------

/**
 * @example
 * Quick.loading.start()
 * Quick.loading.done()
 */
Quick.loading = {
    start() {
        if (this.$instance) return;
        this.$instance = Quick.query('<div class="quick-loading"></div>');
        Quick.append(this.$instance);
    },

    done() {
        if (!this.$instance) return;
        this.$instance.remove();
        this.$instance = null;
    }
}

// --------------------------------------------------------
// UI组件：页面顶部细长进度条
// --------------------------------------------------------

/**
 * @example
 * Quick.progress.start()
 * Quick.progress.done()
 */
Quick.progress = {
    start(indeterminate = true) {
        if (this.status) return;

        this.$instance = Quick.query('<div class="quick-progress"></div>');
        Quick.append(this.$instance);
        this._observe();

        if (indeterminate) { // 不确定的结束时间
            this.status = 1;
            this._trickle = setInterval(() => {
                if (this.status < 99) {
                    this.status += Math.round(((100 - this.status) / 3) * Math.random());
                }
            }, 300);
        }
    },

    tick(status) {
        this.status = parseInt(status);
    },

    done() {
        if (!this.status) return;
        this.status = 100;
        clearInterval(this._trickle);

        setTimeout(() => {
            this.status = 0;
            this.$instance.remove();
        }, 300);
    },

    _observe() {
        if (this._observed) return;
        this._observed = true;

        let value = this.status;
        Object.defineProperty(this, 'status', {
            get: () => value,
            set: v => {
                value = v;
                this.$instance.style.width = v + '%';
            }
        });
    }
}

// --------------------------------------------------------
// UI扩展：可增减行表格
// --------------------------------------------------------

/**
 * 可增减行表格
 * 新行自动清空不带 reserved 属性的 input 元素值
 * @param selector 表格元素
 * @param startIndex 起始索引（例如可忽略表头）
 */
Quick.FlexTable = class {
    constructor(selector, startIndex = 0) {
        this.$table = Quick.query(selector);
        this.createHandlers(startIndex);
    }

    createHandlers(startIndex) {
        const rows = Array.from(this.$table.rows);
        rows.forEach((row, index) => {
            // 每行增加第一列用于放置操作图标
            const cell = row.insertCell(0);
            cell.style.overflow = 'initial';
            cell.style.padding = 0;;
            cell.style.width = '50px';
            // 行索引小于起始行不作其他处理
            if (index < startIndex) return;

            // 所有行均设置 +/- 按钮
            const minusIcon = this.createMinusIcon(row);
            minusIcon.style.visibility = 'hidden';
            cell.append(minusIcon);

            const plusIcon = this.createPlusIcon();
            plusIcon.onclick = () => this.addRow(row);
            cell.append(plusIcon);

            // 针对可删除行绑定事件
            const deletable = row.getAttribute('deletable');
            if (deletable == '' || deletable == 'true') {
                minusIcon.style.visibility = 'visible';
                minusIcon.onclick = () => this.removeRow(row);
            }
        })
    }

    addRow(row) {
        // 深度克隆当前行（该方法不会克隆 addEventListener 或 node.onclick 动态绑定的事件）
        const cloneRow = row.cloneNode(true);

        // 清空克隆行中不带 reserved 属性的input字段
        const fields = cloneRow.query('input[type="text"]:not([reserved]),input[type="hidden"]:not([reserved])', true);
        fields.forEach(field => field.value = '');

        // 移除克隆行中带 removed 属性的元素
        const elements = cloneRow.query('[removed]', true);
        elements.forEach(el => el.remove());

        // 克隆行 +/- 按钮重新绑定事件
        const minusIcon = cloneRow.query('div:first-child');
        minusIcon.style.visibility = 'visible';
        minusIcon.onclick = () => this.removeRow(cloneRow);

        const plusIcon = cloneRow.query('div:last-child');
        plusIcon.onclick = () => this.addRow(cloneRow);

        // 在当前行之后插入克隆行
        this.insertAfter(cloneRow, row);
    }

    removeRow(row) {
        this.onRowRemove ? this.onRowRemove(row) : row.remove();
    }

    createPlusIcon() {
        return this.createIcon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24"><path fill="var(--primary-color)" d="M978 162c0-64-52-116-116-116H162C98 46 46 98 46 162v700c0 64 52 116 116 116h700c64 0 116-52 116-116zM768 563H563v205H461V563H256V461h205V256h102v205h205z"/></svg>');
    }

    createMinusIcon() {
        return this.createIcon('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24"><path fill="#999" d="M978 162c0-64-52-116-116-116H162C98 46 46 98 46 162v700c0 64 52 116 116 116h700c64 0 116-52 116-116zM768 563H256V461h512z"/></svg>');
    }

    createIcon(svg) {
        const icon = document.createElement('div');
        icon.style.display = 'inline-flex';
        icon.style.verticalAlign = 'middle';
        icon.style.cursor = 'pointer';
        icon.innerHTML = svg;
        return icon;
    }

    insertAfter(newNode, refNode) {
        refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
    }
}

// --------------------------------------------------------
// UI扩展：附件组件
// --------------------------------------------------------

/**
 * 附件组件
 * @param container {string|Element} 放置位置
 * @param attachments {Array} 附件列表数据
 * - __id, originalName, previewUrl, downloadUrl, file
 * @param options {Object} 配置项
 * - accept {string} 可接受的附件类型
 * - maxSize {number} 最大允许体积（默认10MB）
 * - maxCount {number} 最大允许数量（默认10）
 * - onRemove {AsyncFunction} 删除附件回调（仅当file属性不存在时使用）
 */
Quick.Attachment = class {

    constructor(container, attachments, options) {
        this.attachments = [];
        this.options = options;
        this.editable = !!options;
        this.$wrapper = Quick.query(`<div class="quick-attachment"></div>`);
        Quick.query(container).append(this.$wrapper);

        if (this.editable) {
            const accept = options.accept || '*.*';
            const multiple = options.maxCount > 1 ? 'multiple' : '';
            this.maxSize = options.maxSize || 10;
            this.maxCount = options.maxCount || 10;
            this.onRemove = options.onRemove || async function () { };

            this.$wrapper.append(Quick.query(`<div><input type="file" accept="${accept}" ${multiple}/><a>${Quick.lang.UPLOAD_ATTACHMENT}</a></div>`));
            this.$filer = this.$wrapper.query('input[type="file"]');
            const $trigger = this.$wrapper.query('input[type="file"]+a');
            $trigger.on('click', () => this.$filer.click());
            this.$filer.on('change', e => this.validate(e.target.files));
        }

        this.$fileList = Quick.query(`<div class="file-list"></div>`);
        this.$wrapper.append(this.$fileList);
        for (const entry of attachments) {
            entry.__id = Quick.uuid();
            this.add(entry);
        }
    }

    validate(files) {
        if (!files || files.length === 0) return;
        if (files.length > this.maxCount) {
            return Quick.error(`${Quick.lang.MAX_ALLOWED_COUNT} ${this.maxCount}`);
        }
        for (const file of files) {
            if (file.size > this.maxSize * 1024 * 1024) {
                return Quick.error(`${Quick.lang.MAX_ALLOWED_SIZE} ${this.maxSize}MB`);
            }
        }
        for (const file of files) {
            const tempUrl = URL.createObjectURL(file);
            this.add({
                __id: Quick.uuid(),
                originalName: file.name,
                previewUrl: tempUrl,
                downloadUrl: tempUrl,
                file
            });
        }
    }

    add(entry) {
        const $removeIcon = this.editable ? '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon" id="remove-icon" style="margin-left:3px"><path d="M512 1021.725c-281.076 0-509.725-228.647-509.725-509.725s228.647-509.725 509.725-509.725 509.725 228.647 509.725 509.725-228.647 509.725-509.725 509.725zM512 75.421c-240.736 0-436.579 195.843-436.579 436.579 0 240.699 195.843 436.579 436.579 436.579 240.699 0 436.579-195.879 436.579-436.579 0-240.736-195.879-436.579-436.579-436.579zM563.264 513.566l157.433-155.721c14.308-14.127 14.418-37.173 0.291-51.483-14.127-14.308-37.21-14.418-51.483-0.291l-157.65 155.903-155.248-155.721c-14.236-14.236-37.246-14.308-51.483-0.073-14.236 14.199-14.272 37.246-0.073 51.483l155.029 155.502-156.303 154.628c-14.308 14.163-14.418 37.173-0.291 51.483 7.136 7.209 16.493 10.814 25.887 10.814 9.248 0 18.496-3.532 25.596-10.523l156.522-154.811 157.796 158.306c7.1 7.136 16.42 10.704 25.777 10.704 9.321 0 18.605-3.568 25.705-10.631 14.236-14.199 14.272-37.21 0.073-51.483l-157.578-158.087z" fill="#e6348d"></path></svg>' : '';
        const $entry = Quick.query(`<div class="entry" id="${entry.__id}">
      <a target="_blank" href="${entry.previewUrl}">${entry.originalName}</a>
      <a href="${entry.downloadUrl}" download="${entry.originalName}">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon"><path d="M512 1021.725c-281.076 0-509.725-228.647-509.725-509.725s228.647-509.725 509.725-509.725 509.725 228.647 509.725 509.725-228.647 509.725-509.725 509.725zM512 75.093c-240.917 0-436.907 195.989-436.907 436.907s195.989 436.907 436.907 436.907c240.917 0 436.907-195.989 436.907-436.907 0-240.917-195.989-436.907-436.907-436.907zM719.713 523.541c-14.272-14.346-37.974-14.382-52.283-0.073l-119.021 118.22v-348.907c0-20.207-16.165-36.591-36.409-36.591-20.207 0-36.409 16.384-36.409 36.591v350.8l-119.712-121.388c-14.199-14.346-37.21-14.491-51.555-0.291-14.382 14.236-14.418 37.428-0.219 51.774l181.316 183.246c7.136 7.209 16.603 10.886 26.032 10.886 9.284 0 18.641-3.604 25.741-10.595 0.036-0.073 0.036-0.073 0.073-0.146 0.036 0 0.073 0 0.109-0.073l182.262-181.68c14.308-14.272 14.346-37.465 0.073-51.774z" fill="#0a79ce"></path></svg>
      </a>${$removeIcon}</div>`);

        const $removeBtn = $entry.query('#remove-icon');
        if ($removeBtn) $removeBtn.on('click', () => this.remove(entry));
        this.$fileList.append($entry);
        this.attachments.push(entry);
    }

    remove(entry) {
        Quick.confirm(Quick.lang.DELETE_ATTACHMENT_CONFIRMATION, async (confirm, button) => {
            if (!entry.file && this.options.onRemove) {
                button.disable();
                await this.options.onRemove(entry);
                button.enable();
                Quick.success(Quick.lang.DELETE_ATTACHMENT_SUCCESS);
            }
            confirm.hide();
            const $entry = Quick.query('#' + entry.__id);
            $entry.remove();
            const index = this.attachments.findIndex(v => v.__id == entry.__id);
            this.attachments.splice(index, 1);
        });
    }

    getFiles() {
        const files = [];
        for (const entry of this.attachments) {
            if (entry.file) files.push(entry.file);
        }
        return files;
    }

    getAttachments() {
        return this.attachments;
    }
}
