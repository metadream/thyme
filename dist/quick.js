(()=>{"use strict";var n={567:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,"button, a.button {display: inline-flex;position: relative;justify-content: center;align-items: center;-webkit-user-drag: none;-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;user-select: none;text-decoration: none;vertical-align: middle;font: inherit;white-space: nowrap;cursor: pointer;color: #fff;border: 0;outline: 0;font-weight: 700;font-size: var(--fontSize, var(--fs));background-color: var(--primaryColor, var(--pc));border-radius: var(--borderRadius, var(--br));padding: 0 30px;height: 40px;transition: opacity .3s;overflow: hidden;}button:disabled, a.button:disabled {opacity: .5;cursor: default;}button.outlined, a.button.outlined {padding: 0 28.5px;color: var(--primaryColor, var(--pc));border: 1.5px solid currentColor;background-color: #fff;}button.tonal, a.button.tonal {color: var(--primaryColor, var(--pc));background-color: color-mix(in srgb, currentColor 20%, transparent);}button.minor, a.button.minor {--primaryColor: var(--fc);}button.warning, a.button.warning {--primaryColor: var(--wc);}button.danger, a.button.danger {--primaryColor: var(--ec);}button.success, a.button.success {--primaryColor: var(--sc);}.ripple {position: absolute;border-radius: 50%;background-color: currentColor;transform: scale(0);opacity: 0;width: 0;height: 0;}.ripple.spread {animation: spread .3s ease-out forwards;}.ripple.fade-out {animation: fadeOut .3s linear forwards;}.loading {position: absolute;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;border-radius: inherit;background-color: inherit;}.loading:before {content: '';position: absolute;width: 18px;height: 18px;border-radius: 50%;--circleColor: color-mix(in srgb, currentColor 20%, transparent);border-top: 2px solid var(--circleColor);border-right: 2px solid var(--circleColor);border-bottom: 2px solid var(--circleColor);border-left: 2px solid currentColor;animation: spin .6s linear infinite;}@keyframes spin {from {transform: rotate(0);}to {transform: rotate(360deg);}}@keyframes spread {from {transform: scale(0);opacity: 0.6;}to {transform: scale(1);opacity: 0.3;}}@keyframes fadeOut {from {transform: scale(1);opacity: 0.3;}to {transform: scale(1);opacity: 0;}}",""]),i.locals={};const s=i},545:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,".calendar {position: absolute;z-index: 5001;font-size: 13px;color: var(--carbonColor);background-color: #fff;box-shadow: 0 0 16px rgb(0 0 0 / 8%);user-select: none;}.calendar-header {display: flex;align-items: center;height: 40px;padding: 5px;border-bottom: 1px solid var(--platColor);}.calendar-title {flex: 1;text-align: center;color: var(--primaryColor, var(--pc));font-size: 15px;cursor: pointer;}.calendar-body {padding: 10px;}table {width: 100%;border-collapse: collapse;}tr {border: 0;height: auto;}th, td {width: 32px;height: 32px;text-align: center;}td {padding: 3px;}td>div {display: flex;justify-content: center;align-items: center;height: 100%;border-radius: 3px;cursor: pointer;transition: .3s all;}td>div:hover {background-color: var(--platColor);}td>div.today {color: #fff;background-color: var(--primaryColor, var(--pc));}td>div.curr {color: #fff;background-color: var(--grayColor);}td>div.minor {color: var(--silverColor);}svg.icon {width: 24px;height: 24px;padding: 5px;cursor: pointer;border-radius: 3px;transition: .3s all;}svg.icon:hover {background-color: var(--platColor);}",""]),i.locals={};const s=i},815:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,".dialog {display: none;justify-content: center;align-items: center;-moz-user-select: none;-webkit-touch-callout: none;-webkit-user-select: none;user-select: none;}.dialog-panel {display: flex;flex-direction: column;background-color: #fff;max-width: 80%;max-height: 80%;min-width: 300px;border-radius: var(--borderRadius, var(--br));overflow: hidden;}.dialog-header {display: flex;justify-content: center;align-items: center;height: 45px;font-weight: 700;background-color: var(--platColor);}.dialog-body {flex: 1;overflow-x: hidden;overflow-y: auto;padding: 25px;}.dialog-footer {display: flex;}button {position: relative;font: inherit;font-weight: 700;outline: 0;height: 45px;cursor: pointer;background-color: #fff;color: var(--grayColor);border: 1px solid transparent;border-top-color: var(--platColor);-webkit-tap-highlight-color: rgba(0, 0, 0, 0);flex: 1;}button:not(:first-child) {border-left-color: var(--platColor);}button.primary {color: var(--fontColor, var(--fc));}button:active {background-color: var(--platColor);}button:disabled {cursor: default;background-color: #fff;}button .loading {position: absolute;left: 0;right: 0;top: 0;bottom: 0;display: flex;justify-content: center;align-items: center;border-radius: inherit;background-color: inherit;}button .loading:before {content: '';position: absolute;width: 18px;height: 18px;border-radius: 50%;border-left: 2px solid currentColor;border-right: 2px solid var(--silverColor);border-top: 2px solid var(--silverColor);border-bottom: 2px solid var(--silverColor);animation: spin .6s linear infinite;}.fade-in {animation: fadeIn ease .3s forwards;}.fade-out {animation: fadeOut ease .3s forwards;}.scale-in {animation: scaleIn ease .3s forwards;}.scale-out {animation: scaleOut ease .3s forwards;}@keyframes spin {from {transform: rotate(0);}to {transform: rotate(360deg);}}@keyframes fadeIn {from {opacity: 0;}to {opacity: 1;}}@keyframes fadeOut {from {opacity: 1;}to {opacity: 0;}}@keyframes scaleIn {from {transform: scale(0.8);}to {transform: scale(1);}}@keyframes scaleOut {from {transform: scale(1);}to {transform: scale(0.8);}}",""]),i.locals={};const s=i},205:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,".field {display: flex;align-items: center;border: 1px solid var(--silverColor);border-radius: var(--borderRadius, var(--br));height: 40px;transition: .3s;}.field:focus-within {border-color: var(--primaryColor, var(--pc));box-shadow: 0 0 5px 0 rgb(0 0 0 / 15%);}.field:focus-within>label:after {background-color: var(--primaryColor, var(--pc));}.field label {position: relative;cursor: default;width: 30%;padding: 0 20px;white-space: nowrap;overflow: hidden;}.field label:after {content: '';position: absolute;top: 2px;bottom: 2px;right: 0;width: 1px;background-color: var(--silverColor);transition: .3s;}.field.required>label:after {background-color: var(--errorColor, var(--ec));}.field input {font: inherit;outline: 0;border: 0;width: 100%;height: 100%;margin: 0 10px;flex: 1;}.field input[disabled] {color: var(--grayColor);background-color: #fff;pointer-events: none;}.icon-trigger {background-repeat: no-repeat;background-size: 16px;background-position: top 49% right 0;cursor: pointer;}",""]),i.locals={};const s=i},234:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,'*, *:before, *:after {box-sizing: border-box;}:root {--primaryColor: #19c;--minorColor: #999;--lineColor: #ccc;--headingColor: #333;--fontColor: #333;--fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;--fontSize: 15px;--spacing: 15px;--borderRadius: 5px;}::placeholder {color: var(--minorColor);}html {font-size: var(--fontSize);}body {margin: 0;line-height: 1.6;font-family: var(--fontFamily);color: var(--fontColor);}a {cursor: pointer;font: inherit;color: var(--primaryColor);text-decoration: none;}a:hover {text-decoration: underline;}img {max-width: 100%;}img.icon, svg.icon {width: 16px;height: 16px;}h1, h2, h3, h4, h5 {font-weight: 400;margin: 0 0 var(--spacing) 0;}h1, h2, h3 {color: var(--headingColor);}h1 {font-size: 3rem;line-height: 3.8rem;}h2 {font-size: 2.2rem;}h3 {font-size: 1.6rem;}h4 {font-size: 1.2rem;}h5 {font-size: 0.9rem;font-weight: 700;color: inherit;}table {--headBgColor: #ddd;}.quick-table-list {table-layout: fixed;border-collapse: collapse;border-style: hidden;border-radius: var(--borderRadius);box-shadow: 0 0 0 1px var(--lineColor);width: 100%;}.quick-table-list th, .quick-table-list td {height: 40px;padding: 5px 10px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}.quick-table-list th {background-color: var(--headBgColor);}.quick-table-list td {border-left: 1px solid #f3f3f3;border-top: 1px solid var(--lineColor);}.quick-table-list th:first-child {border-top-left-radius: var(--borderRadius);}.quick-table-list th:last-child {border-top-right-radius: var(--borderRadius);}.quick-table-list tr:last-child td:first-child {border-bottom-left-radius: var(--borderRadius);}.quick-table-list tr:last-child td:last-child {border-bottom-right-radius: var(--borderRadius);}[quick-tooltip] {position: relative;}[quick-tooltip]:before, [quick-tooltip]:after {position: absolute;visibility: hidden;pointer-events: none;opacity: 0;bottom: 100%;left: 50%;transform: translate3d(-50%, -10px, 0);transition: opacity .5s;}[quick-tooltip]:hover:before, [quick-tooltip]:hover:after {visibility: visible;opacity: 1;}[quick-tooltip]:before {content: \'\';z-index: 9001;background-color: transparent;border: 6px solid transparent;border-top-color: rgba(0, 0, 0, 0.7);margin-bottom: -12px;}[quick-tooltip]:after {content: attr(quick-tooltip);z-index: 9000;margin-right: -300px;padding: 6px 10px;font-size: 14px;line-height: 1.6;border-radius: var(--borderRadius);background-color: rgba(0, 0, 0, 0.7);color: #fff;}',""]),i.locals={};const s=i},336:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,".select {position: relative;-webkit-user-select: none;-moz-user-select: none;user-select: none;}.field {display: flex;align-items: center;cursor: pointer;}.options {display: flex;flex-direction: column;position: absolute;z-index: 5001;width: 100%;max-height: 300px;overflow-x: hidden;overflow-y: auto;background-color: #fff;transform-origin: top;transform: scaleY(0);transition: .2s;opacity: .2;box-shadow: 0 0 16px rgb(0 0 0 / 8%);}.options.dropdown {opacity: 1;transform: scaleY(1);}.options::-webkit-scrollbar {width: 7px;}.options::-webkit-scrollbar-thumb {background-color: var(--silverColor);}.option {cursor: pointer;padding: 5px 20px;transition: .3s;}.option.disabled {color: var(--grayColor);cursor: default;}.option:not(.disabled):hover {background-color: var(--platColor);}.overlay {background: none;}input {flex: 1;outline: 0;border: 0;cursor: pointer;}",""]),i.locals={};const s=i},738:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,'*, *:before, *:after {box-sizing: border-box;}:host {--pc: #19c;--ec: #e58;--wc: #f80;--sc: #3b6;--fc: #333;--carbonColor: #666;--grayColor: #999;--silverColor: #ccc;--platColor: #eee;--ff: system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;--fs: 15px;--br: 5px;font-size: var(--fontSize, var(--fs));font-family: var(--fontFamily, var(--ff));color: var(--fontColor, var(--fc));line-height: 1.6;}svg.icon {width: 16px;height: 16px;}svg.icon path {fill: var(--grayColor);}.overlay {position: fixed;z-index: 5000;background-color: rgba(0, 0, 0, 0.5);left: 0;right: 0;top: 0;bottom: 0;}',""]),i.locals={};const s=i},377:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,'.switch {position: relative;display: inline-block;width: 46px;height: 28px;}.switch input {opacity: 0;width: 0;height: 0;}.switch i {position: absolute;cursor: pointer;top: 0;bottom: 0;left: 0;right: 0;background-color: var(--silverColor);border-radius: 28px;transition: .3s;}.switch i:before {position: absolute;content: "";height: 22px;width: 22px;left: 4px;bottom: 3px;background-color: #fff;border-radius: 50%;transition: .3s;}input:checked+i {background-color: var(--primaryColor, var(--pc));}input:checked+i:before {transform: translateX(16px);}',""]),i.locals={};const s=i},613:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,".toast {display: flex;justify-content: center;background-color: transparent;height: 0;}.toast>div {margin-top: 80px;margin-bottom: auto;max-width: 80%;padding: 6px 15px;border-radius: 3px;font-weight: 700;color: #fff;background-color: color-mix(in srgb, var(--fontColor) 80%, transparent);}.toast>div.warning {--fontColor: var(--wc);}.toast>div.error {--fontColor: var(--ec);}.toast>div.success {--fontColor: var(--sc);}.bounce-in {animation: bounceIn cubic-bezier(.17, .88, .48, 1.5) .3s forwards;}.bounce-out {animation: bounceOut cubic-bezier(.17, .88, .48, 1.5) .3s forwards;}@keyframes bounceIn {from {transform: translateY(-150px);}to {transform: translateY(0);}}@keyframes bounceOut {from {transform: translateY(0);}to {transform: translateY(-150px);}}",""]),i.locals={};const s=i},383:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,".toptray {display: none;position: fixed;right: 30px;bottom: 30px;width: 40px;height: 40px;padding: 10px;background-color: #fff;cursor: pointer;border-radius: var(--borderRadius, var(--br));box-shadow: 0 1px 10px 0 rgb(0 0 0 / 20%);}",""]),i.locals={};const s=i},862:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),a=e(645),i=e.n(a)()(r());i.push([n.id,'.upload {display: flex;}.upload-chooser {margin-right: 20px;}.upload-list {display: flex;flex-wrap: wrap;flex: 1;margin: 0 -5px -5px 0;}.upload-entry {display: flex;margin: 0 5px 5px 0;padding: 3px 8px;border-radius: var(--borderRadius, var(--br));background-color: var(--platColor);}.upload-entry>a {display: flex;align-items: center;margin-left: 5px;color: var(--carbonColor);text-decoration: none;cursor: pointer;}a.chooser {cursor: pointer;color: var(--linkColor, var(--pc));font-weight: 700;}a.chooser:hover, a.preview-link:hover {text-decoration: underline;}a.download-icon svg.icon path {fill: var(--primaryColor, var(--pc));}a.remove-icon svg.icon path {fill: var(--errorColor, var(--ec));}input[type="file"] {display: none;}',""]),i.locals={};const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:n=>{n.exports=function(n){return n[1]}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var o={};(()=>{e.d(o,{Z:()=>N});var n=e(234);function t(n=21){return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,t)=>n+((t&=61)<36?t.toString(36):(t-26).toString(36).toUpperCase())),"")}function r(n){if(n){if(0===(n=n.replace(/[\t\r]/gm,"").trim()).indexOf("<")){const t=document.createElement("template");return t.innerHTML=n,t.content.firstElementChild.cloneNode(!0)}return document.createElement(n)}}function a(n){const t=r("style");return t.textContent=n,t}function i(n,t){customElements.define(n,t)}function s(){return document.body.scrollTop||document.documentElement.scrollTop}function l(n){const t=["B","KB","MB","GB","TB","PB","EB","ZB"],e=Math.min(t.length-1,Math.floor(Math.log(n)/Math.log(1024))),o=Math.max(0,e-2);return parseFloat((n/Math.pow(1024,e)).toFixed(o))+t[e]}const d={"zh-CN":{OK:"确定",YES:"确定",NO:"取消",MON:"一",TUE:"二",WED:"三",THU:"四",FRI:"五",SAT:"六",SUN:"日",EMPTY_OPTION:"<空>",UPLOAD:"上传附件",MAX_ALLOWED_FILES:"最多允许上传 {{maxFiles}} 个文件",MAX_ALLOWED_SIZE:"单文件大小不允许超过 {{maxSize}}",DELETE_PROMPT:"确定删除吗？",DELETE_SUCCESS:"删除成功",INCORRECT_INPUT:"光标处数据有误",UNSUPPORTED_RESPONSE:"不支持的响应类型",NETWORK_ERROR:"网络连接异常"},en:{OK:"OK",YES:"YES",NO:"NO",MON:"MON",TUE:"TUE",WED:"WED",THU:"THU",FRI:"FRI",SAT:"SAT",SUN:"SUN",EMPTY_OPTION:"<Empty>",UPLOAD:"UPLOAD",MAX_ALLOWED_FILES:"Uploaded files is not allowed to exceed {{maxFiles}}",MAX_ALLOWED_SIZE:"Single file size is not allowed to exceed {{maxSize}}",DELETE_PROMPT:"Sure you want to delete?",DELETE_SUCCESS:"Delete succeeded",INCORRECT_INPUT:"The data at the cursor is incorrect",UNSUPPORTED_RESPONSE:"Unsupported response type",NETWORK_ERROR:"Network connection error"},get(n,t){let e=this[this[navigator.language]?navigator.language:"en"][n];if(t)for(const[n,o]of Object.entries(t))e=e.replace(`{{${n}}}`,o);return e}};class c{static get(n){return this.#n("GET",n)}static post(n,t){return this.#n("POST",n,t)}static put(n,t){return this.#n("PUT",n,t)}static patch(n,t){return this.#n("PATCH",n,t)}static delete(n,t){return this.#n("DELETE",n,t)}static async#n(n,t,e){const o={method:n,headers:{},body:e};"[object FormData]"!=Object.prototype.toString.call(e)&&(o.headers["content-type"]="application/json; charset=utf-8",o.body=JSON.stringify(e));try{const n=await fetch(t,o),e=n.headers.get("content-type");let r=null;if(!e||e.includes("text/plain"))r=await n.text();else{if(!e.includes("application/json"))throw new Error(d.get("UNSUPPORTED_RESPONSE"));r=await n.json()}if(!n.ok)throw new Error(r.message);return r}catch(n){Quick.error(n.message||d.get("NETWORK_ERROR"))}}}class p{static getJsonObject(n){const t=(n="string"==typeof n?document.querySelector(n):n).querySelectorAll('[name]:not([name=""])'),e={};for(const n of t){let t="";if(("checkbox"==n.type||"radio"==n.type)&&!n.checked)continue;"INPUT"===n.tagName||"TEXTAREA"===n.tagName||n.tagName.startsWith("QUICK-")?("string"==typeof n.value&&(n.value=n.value.trim()),t=n.value):t="SELECT"===n.tagName?n.options[n.selectedIndex].value:n.isContentEditable?n.innerHTML=n.innerHTML.trim():n.textContent=n.textContent.trim();const o=n.battr("required");if(!this.#t(t,o,n.dataset.rule))return n.focus(),void Quick.error(n.dataset.message||d.get("INCORRECT_INPUT"));const r=n.attr("name");e[r]?e[r]+=","+t:e[r]=t}return e}static getJsonArray(n){const t=[];n="string"==typeof n?document.querySelectorAll(n):n;for(const e of n){const n=this.getJsonObject(e);if(!n)return;0!==Object.keys(n).length&&t.push(n)}return t}static#t(n,t,e){if(t&&!n)return!1;if(!e)return!0;if(!n)return!0;const o=e.match(/^(?<type>[a-z0-9]+)(\((?<min>\-?\d+)(,\s*(?<max>\-?\d+))?\))?$/);if(!o)return!0;const r=o.groups,a=this.#e[r.type];return!a||a(n,r.min,r.max)}static#e={varchar:function(n,t,e){return e||(e=t,t=0),new RegExp("^.{"+t+","+e+"}$").test(n)},integer:function(n,t){return new RegExp("^\\-?\\d{0,"+t+"}$").test(n)},decimal:function(n,t,e){return new RegExp("^\\-?\\d{0,"+t+"}(\\.\\d{0,"+e+"})?$").test(n)},date:function(n){const t=n.match(/^(\d{4})\-(\d{2})\-(\d{2})$/);if(t){const n=new Date(t[1],t[2]-1,t[3]);return n.getFullYear()==t[1]&&n.getMonth()==t[2]-1&&n.getDate()==t[3]}return!1},email:function(n){return/^\w+([_\-+.]\w+)*@\w+([-.]\w+)*\.([a-zA-Z]{2,})$/.test(n)},url:function(n){return/^$|^(https?\:\/\/)?([a-zA-Z0-9\-]+\.){1,}[a-zA-Z]{2,6}(\/[\S]*)?$/.test(n)}}}var h=e(567),u=e(738);class g extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.shadowRoot.append(a(u.Z+this.styles)),this.shadowRoot.append(this.#o()),this.onConnected&&this.onConnected(),this.onRendered&&setTimeout((()=>this.onRendered()))}query(n){return this.internals.querySelector(n)}queryAll(n){return this.internals.querySelectorAll(n)}#o(){const n=this.getAttributeNames();let t=this.template;return n.forEach((n=>t=t.replace(new RegExp("{{\\s*"+n+"\\s*}}","g"),this.attr(n)))),t=t.replace(/\s+\w+\s*=\s*"\s*{{\s*[a-zA-Z0-9\-]+\s*}}\s*"/g,""),this.internals=r(t),this.internals}}class v extends g{styles=h.Z;#r;onConnected(){this.disabled=this.battr("disabled"),this.#a()}get template(){return this.attr("href")?'<a class="button {{class}}" href="{{href}}" target="{{target}}" draggable="false"><slot></slot></a>':'<button class="{{class}}"><slot></slot></button>'}get disabled(){return this.internals.disabled}set disabled(n){this.internals.disabled=n}set loading(n){n=!!n,this.disabled!=n&&(this.disabled=n,n?(this.#r=r('<div class="loading"></div>'),this.internals.append(this.#r)):this.#r&&this.#r.remove())}#a(){const n=this.internals;let t;n.on("mousedown",(()=>{const e=r('<div class="ripple"></div>');n.append(e),t=e,e.end=!1,e.up=!1,e.fadeOut=function(){e.addClass("fade-out"),e.on("animationend",e.remove)};const o=n.getBoundingClientRect(),a=Math.sqrt(o.width**2+o.height**2)+"px";e.style.width=a,e.style.height=a,e.addClass("spread"),e.on("animationend",(()=>{e.end=!0,(e!=t||e.up)&&e.fadeOut()}))})),n.on(["mouseup","mouseleave"],(()=>{t&&(t.up=!0,t.end&&t.fadeOut())}))}}var f=e(545);class m extends g{styles=f.Z;template='<div><div class="overlay" style="background:none"></div><div class="calendar"></div></div>';#i;#s;#l;onConnected(){this.query(".overlay").on("click",(()=>this.remove())),this.#i=this.query(".calendar"),this.#d()}attach(n){const t=n.getBoundingClientRect();this.#i.style.top=t.y+t.height+s()+1+"px",this.#i.style.left=t.x+"px",this.#s=new Date(n.value),this.#s=isNaN(this.#s.getTime())?new Date:this.#s,this.#c(this.#s)}#d(){const n=new Event("selected");this.#i.on("click",(t=>{const e=t.target;if("TD"===e.parentNode.tagName){const t=new Date(this.#l.year,this.#l.month-1,e.dataset.index);this.value=function(n,t,e){const o="get";return"yyyy-MM-dd".replace(/yyyy/g,n[o+"FullYear"]()).replace(/yy/g,(""+n[o+"FullYear"]()).slice(-2)).replace(/MM/g,("0"+(n[o+"Month"]()+1)).slice(-2)).replace(/M/g,n[o+"Month"]()+1).replace(/dd/g,("0"+n[o+"Date"]()).slice(-2)).replace(/d/g,n[o+"Date"]()).replace(/hh/g,("0"+n[o+"Hours"]()).slice(-2)).replace(/h/g,n[o+"Hours"]()).replace(/mm/g,("0"+n[o+"Minutes"]()).slice(-2)).replace(/m/g,n[o+"Minutes"]()).replace(/ss/g,("0"+n[o+"Seconds"]()).slice(-2)).replace(/s/g,n[o+"Seconds"]()).replace(/SSS/g,("00"+n[o+"Milliseconds"]()).slice(-3)).replace(/S/g,n[o+"Milliseconds"]())}(t),this.dispatchEvent(n)}const o=this.query(".calendar-title");if(o.contains(e))return this.#c(this.#s);const r=this.queryAll("svg.icon"),a=r[0],i=r[1],s=r[2],l=r[3],d=new Date(o.innerHTML);if(a.contains(e))d.setFullYear(d.getFullYear()-1);else if(i.contains(e))d.setMonth(d.getMonth()-1);else if(s.contains(e))d.setMonth(d.getMonth()+1);else{if(!l.contains(e))return;d.setFullYear(d.getFullYear()+1)}this.#c(d)}))}#c(n){const t=this.#l=this.#p(n);let e=`<div class="calendar-header"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="m867 956 61-60-391-383 391-382-61-60-451 442Z"/><path d="m548 68 60 60-390 383 390 382-60 60L96 511z"/></svg><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="m707 954 61-59-391-383 391-383-61-59-451 442Z"/></svg><span class="calendar-title">${t.year}-${t.month.toString().padStart(2,0)}</span><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="m317 70-61 59 391 383-391 383 61 59 451-442Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="m157 956-61-60 391-383L96 131l61-60 451 442Z"/><path d="m476 68-60 60 390 383-390 382 60 60 452-442z"/></svg></div><div class="calendar-body"><table><thead><tr><th>${d.get("MON")}</th><th>${d.get("TUE")}</th><th>${d.get("WED")}</th><th>${d.get("THU")}</th><th>${d.get("FRI")}</th><th>${d.get("SAT")}</th><th>${d.get("SUN")}</th></tr></thead><tbody>`;const o=new Date;for(let n=0;n<t.days.length;n++){n%7==0&&(e+="<tr>");const r=t.days[n];let a="";t.month!=r.month&&(a="minor"),t.year==this.#s.getFullYear()&&r.month==this.#s.getMonth()+1&&r.day==this.#s.getDate()&&(a="curr"),t.year==o.getFullYear()&&r.month==o.getMonth()+1&&r.day==o.getDate()&&(a="today"),e+='<td><div data-index="'+r.index+'" class="'+a+'">'+r.day+"</div></td>",n%7==6&&(e+="</tr>")}e+="</tbody></table></div>",this.#i.innerHTML=e}#p(n=new Date){const t=n.getFullYear(),e=n.getMonth()+1,o=new Date(t,e-1,1),r=new Date(t,e,0).getDate();let a=o.getDay();0===a&&(a=7);const i=a-1,s=new Date(t,e-1,0).getDate(),l=[];for(let n=0;n<42;n++){const t=n+1-i;let o=t,a=e;t<=0?(a=e-1,o=s+t):t>r&&(a=e+1,o-=r),0===a&&(a=12),a>12&&(a=1),l.push({month:a,day:o,index:t})}return{year:t,month:e,days:l}}}var b=e(815);class y extends g{styles=b.Z;template='<div class="overlay dialog"><div class="dialog-panel"><div class="dialog-header">{{title}}</div><div class="dialog-body"><slot></slot></div><div class="dialog-footer"></div></div></div>';#h=0;#u;#g;onConnected(){this.#u=this.query(".dialog-panel"),this.attr("title")||this.query(".dialog-header").remove(),document.addEventListener("keyup",(n=>{27===n.keyCode&&this.hide()}))}set buttons(n=[]){const t=this.query(".dialog-footer");for(let e of n){"string"==typeof e&&(e={label:e});const n=r(`<button>${e.label}</button>`);this.#v(n),t.append(n),!0===e.primary&&n.addClass("primary"),n.on("click",(()=>{e.onclick?e.onclick(this,n):this.hide()}))}}open(n=!1){0==this.#h&&(this.#g=n,this.#f("fade-in","scale-in",2))}hide(){2==this.#h&&this.#f("fade-out","scale-out",0)}#f(n,t,e){this.#h=1;const{internals:o}=this;2==e&&(o.style.display="flex"),o.addClass(n),this.#u.addClass(t),o.onanimationend=()=>{this.#u.removeClass(t),o.removeClass(n),o.onanimationend=null,this.#h=e,0==e&&(this.#g?this.remove():o.style.display="none")}}#v(n){Object.defineProperty(n,"loading",{set:function(n){n=!!n,this.disabled!=n&&(this.disabled=n,n?(this._loader=r('<div class="loading"></div>'),this.append(this._loader)):this._loader&&this._loader.remove())}})}}var x=e(205);class w extends g{styles=x.Z;template='<div class="field"><label>{{label}}</label><slot><input type="{{type}}" value="{{value}}"/><i class="icon"></i></slot></div>';#m;onConnected(){const n=this.query("input");this.#m=n,"calendar"==this.attr("type")&&(n.readOnly=!0,n.addClass("icon-trigger"),n.style.backgroundImage=`url(${'<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 16 16"><path d="M10.9 3.2H5.1v1.6H3.9V3.2H1.2v3.2h13.6V3.2h-2.7v1.6h-1.2V3.2zM12.1 2H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.9V.4h1.2V2h5.8V.4h1.2V2zm2.7 5.6H1.2v7.2h13.6V7.6z"/></svg>',"data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 16 16"><path d="M10.9 3.2H5.1v1.6H3.9V3.2H1.2v3.2h13.6V3.2h-2.7v1.6h-1.2V3.2zM12.1 2H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.9V.4h1.2V2h5.8V.4h1.2V2zm2.7 5.6H1.2v7.2h13.6V7.6z"/></svg>')})`,n.on("click",(()=>{const t=r("quick-calendar");this.shadowRoot.append(t),t.attach(n),t.on("selected",(e=>{n.value=e.target.value,t.remove()}))})));const t=this.iattr("maxlength");t>0&&(n.maxLength=t),this.battr("required")&&this.internals.addClass("required"),this.battr("readonly")&&(n.readOnly=!0),this.battr("disabled")&&(n.disabled=!0)}focus(){this.#m.focus()}get value(){return this.#m.value}set value(n){this.#m.value=n}get readOnly(){return this.#m.readOnly}set readOnly(n){this.#m.readOnly=n}get disabled(){return this.#m.disabled}set disabled(n){this.#m.disabled=n}}var C=e(336);class k extends g{styles=C.Z;template='<div class="select"><div class="field"><input type="text" readonly/><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="m954 317-59-61-383 391-383-391-59 61 442 451Z"/></svg></div><div class="options"><slot></slot></div></div>';#b;#y;onRendered(){const n=this.query("slot"),t=n.assignedElements();n.remove(),this.#y=this.query(".options"),this.#c(t),this.query(".field").on("click",(()=>this.#x()))}#c(n){const t=this.query("input");for(const e of n){let{label:n,value:o,disabled:a}=e;n=n||d.get("EMPTY_OPTION");const i=r(`<a class="option">${n}</a>`);this.#y.append(i),a?(i.attr("disabled",!0),i.addClass("disabled")):(new Event("change"),i.on("click",(()=>{console.log("option.value=",{label:n,value:o}),t.value=n,this.#w()})))}}#x(){this.#y.addClass("dropdown"),this.#b=r('<div class="overlay"></div>'),this.#b.on("click",(()=>this.#w())),this.internals.append(this.#b)}#w(){this.#y.removeClass("dropdown"),this.#b.remove()}}var E=e(377);class S extends g{styles=E.Z;template='<label class="switch"><input type="checkbox"/><i></i></label>';#m;onConnected(){this.#m=this.query("input"),this.battr("checked")&&(this.#m.checked=!0);const n=new Event("change");this.#m.on("change",(()=>{this.dispatchEvent(n)}))}get value(){return this.#m.checked?1:0}set value(n){this.#m.checked=!!n}}var O=e(613);class q extends g{styles=O.Z;template='<div class="overlay toast"><div class="{{type}}"><slot></slot></div></div>';onConnected(){const{internals:n}=this;n.addClass("bounce-in");const t=this.iattr("delay")||3e3;setTimeout((()=>{n.addClass("bounce-out"),n.on("animationend",(()=>this.remove()))}),t)}}var T=e(383);class M extends g{styles=T.Z;template='<div class="toptray" style="bottom:{{x}}px;right:{{y}}px"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="m954 707-59 61-383-391-383 391-59-61 442-451z"/></svg></div>';onConnected(){const{internals:n}=this;let t;addEventListener("scroll",(()=>{const t=s();n.style.display=t>450?"block":"none"})),n.onclick=function(){cancelAnimationFrame(t),t=requestAnimationFrame((function n(){const e=s();document.body.scrollTop=document.documentElement.scrollTop=parseInt(e/1.2),e>0?t=requestAnimationFrame(n):cancelAnimationFrame(t)}))}}}var R=e(862);class D extends g{styles=R.Z;template=`<div class="upload"><div class="upload-chooser"><input type="file" accept="{{accept}}"/><a class="chooser">${d.get("UPLOAD")}</a></div><div class="upload-list"></div></div>`;#C;#k;#E;#S;#O;#q;onConnected(){if(this.#E=[],this.#S=this.battr("readonly"),this.#O=this.iattr("maxsize"),this.#q=this.iattr("multiple"),this.#S)this.query(".upload-chooser").remove();else{const n=this.query('input[type="file"]');this.query("a.chooser").on("click",(()=>n.click())),n.on("change",(n=>this.#T(n.target.files))),this.#q>1&&n.attr("multiple","multiple")}}async#T(n){if(n&&0!==n.length)if(n.length+this.#E.length>this.#q)N.warning(d.get("MAX_ALLOWED_FILES",{maxFiles:this.#q}));else{for(const t of n)if(this.#O>0&&t.size>this.#O)return N.warning(d.get("MAX_ALLOWED_SIZE",{maxSize:l(this.#O)}));for(const e of n){const n=URL.createObjectURL(e),o={_id:t(),originalName:e.name,previewUrl:n,downloadUrl:n,file:e};this.#C&&(await this.#C(o),this.#c(o))}}}#c(n){if(!n||!n._id)return;const t=r(`<div class="upload-entry" id="_${n._id}"><a class="preview-link" target="_blank" href="${n.previewUrl}">${n.originalName}</a><a class="download-icon" href="${n.downloadUrl}" download="${n.originalName}"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="M512 1021.7C231 1021.7 2.3 793.1 2.3 512S230.9 2.3 512 2.3s509.7 228.6 509.7 509.7-228.6 509.7-509.7 509.7zm0-946.6C271 75 75 271 75 512s196 437 437 437 437-196 437-437S753 75 512 75zm207.7 448.4a37.2 37.2 0 0 0-52.3 0l-119 118.2v-349a36.4 36.4 0 1 0-72.8 0v350.9L355.9 522.2a36.4 36.4 0 0 0-51.6-.3 36.6 36.6 0 0 0-.2 51.8l181.3 183.2a36.6 36.6 0 0 0 51.8.3v-.1l.2-.1 182.2-181.7a36.6 36.6 0 0 0 .1-51.8z"/></svg></a><a class="remove-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"><path d="M512 1021.7C231 1021.7 2.3 793.1 2.3 512S230.9 2.3 512 2.3s509.7 228.6 509.7 509.7-228.6 509.7-509.7 509.7zm0-946.3A437 437 0 0 0 75.4 512 437 437 0 0 0 512 948.6 437.1 437.1 0 0 0 948.6 512 437 437 0 0 0 512 75.4zm51.3 438.2 157.4-155.8a36.4 36.4 0 1 0-51.2-51.7L512 462 356.6 306.3a36.4 36.4 0 1 0-51.5 51.4l155 155.5-156.3 154.6a36.4 36.4 0 1 0 51.2 51.8l156.5-154.8L669.3 723a36.2 36.2 0 0 0 51.5 0 36.4 36.4 0 0 0 0-51.4L563.3 513.6z"/></svg></a></div>`),e=t.querySelector(".remove-icon");this.#S?e.remove():e.on("click",(()=>this.#M(n))),this.query(".upload-list").append(t),this.#E.push(n)}#M(n){N.confirm(d.get("DELETE_PROMPT"),(async(t,e)=>{!n.file&&this.#k&&(e.loadding=!0,await this.#k(n),e.loadding=!1,N.success(d.get("DELETE_SUCCESS"))),this.query("#_"+n._id).remove();const o=this.#E.findIndex((t=>t._id==n._id));this.#E.splice(o,1)}))}get entries(){return this.#E}set entries(n){this.#E.length=0,n&&Array.isArray(n)&&n.forEach((n=>this.#c(n)))}set onUpload(n){this.#C=n}set onRemove(n){this.#k=n}}class z{static http=c;static form=p;static#R;static{Object.assign(Element.prototype,{on(n,t){"string"==typeof n&&(n=[n]);for(const e of n)this.addEventListener(e,t);return this},off(n,t){"string"==typeof n&&(n=[n]);for(const e of n)this.removeEventListener(e,t);return this},addClass(...n){return this.classList.add(...n),this},removeClass(...n){return this.classList.remove(...n),this},attr(n,t){if(void 0===t)return this.getAttribute(n);null===t&&this.removeAttribute(n),this.setAttribute(n,t)},battr(n){const t=this.attr(n);return null!==t&&"null"!==t&&"undefined"!==t&&"false"!==t&&"0"!==t},iattr(n){const t=this.attr(n);return/^\d+$/.test(t)?parseInt(t):0},remove(){return this.parentNode&&this.parentNode.removeChild(this)},swap(n){return n&&n.insertAdjacentElement("beforeBegin",this),this}}),document.head.append(a(n.Z)),i("quick-button",v),i("quick-calendar",m),i("quick-dialog",y),i("quick-field",w),i("quick-select",k),i("quick-switch",S),i("quick-toast",q),i("quick-toptray",M),i("quick-upload",D)}static alert(n,t,e){const o=r(`<quick-dialog>${n}</quick-dialog>`);document.body.append(o);const a=[];e?(a.push({label:d.get("NO")}),a.push({label:d.get("YES")})):a.push({label:d.get("OK")}),Object.assign(a[a.length-1],{primary:!0,onclick:(n,e)=>{t&&t(n,e),n.hide()}}),o.buttons=a,o.open(!0)}static confirm(n,t){this.alert(n,t,!0)}static info(n,t,e){this.#R&&(this.#R.remove(),this.#R=null),this.#R=r(`<quick-toast type="${t}" delay="${e}">${n}</quick-toast>`),document.body.append(this.#R)}static warning(n){this.info(n,"warning")}static error(n){this.info(n,"error",5e3)}static success(n){this.info(n,"success")}}window.Quick=z;const N=z})()})();