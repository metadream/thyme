(()=>{"use strict";var n={567:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,"button,a.button {display:inline-flex;position:relative;justify-content:center;align-items:center;-webkit-user-drag:none;-webkit-touch-callout:none;user-select:none;text-decoration:none;vertical-align:middle;font:inherit;white-space:nowrap;cursor:pointer;color:#fff;border:0;outline:0;padding:0 30px;height:40px;font-weight:700;font-size:var(--fontSize,var(--fs));background-color:var(--primaryColor,var(--pc));border-radius:var(--borderRadius,var(--br));transition:opacity .3s;overflow:hidden;}button:disabled,a.button:disabled {opacity:.5;cursor:default;}button.outlined,a.button.outlined {padding:0 28.5px;color:var(--primaryColor,var(--pc));border:1.5px solid currentColor;background-color:#fff;}button.tonal,a.button.tonal {color:var(--primaryColor,var(--pc));background-color:color-mix(in srgb,currentColor 20%,#fff);}button.minor,a.button.minor {--primaryColor:var(--fc);}button.warning,a.button.warning {--primaryColor:var(--wc);}button.danger,a.button.danger {--primaryColor:var(--ec);}button.success,a.button.success {--primaryColor:var(--sc);}.ripple {position:absolute;border-radius:50%;background-color:currentColor;transform:scale(0);opacity:0;width:0;height:0;}.ripple.spread {animation:spread .3s ease-out forwards;}.ripple.fade-out {animation:fadeOut .3s linear forwards;}.loading {position:absolute;width:100%;height:100%;}.loading:before {--circleColor:color-mix(in srgb,currentColor 20%,transparent);}@keyframes spread {from {transform:scale(0);opacity:0.6;}to {transform:scale(1);opacity:0.3;}}@keyframes fadeOut {from {transform:scale(1);opacity:0.3;}to {transform:scale(1);opacity:0;}}",""]),r.locals={};const s=r},545:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,".overlay {background:none;}.calendar {position:absolute;z-index:5001;font-size:13px;color:var(--carbonColor);background-color:#fff;box-shadow:0 0 16px rgb(0 0 0 / 8%);user-select:none;}.calendar-header {display:flex;align-items:center;height:40px;padding:7px;border-bottom:1px solid var(--platColor);}.calendar-title {flex:1;text-align:center;color:var(--primaryColor,var(--pc));font-size:15px;cursor:pointer;}.calendar-body {padding:10px;}table {width:100%;border-collapse:collapse;}tr {border:0;height:auto;}th,td {width:32px;height:32px;text-align:center;}td {padding:3px;}td>div {display:flex;justify-content:center;align-items:center;height:100%;border-radius:3px;cursor:pointer;transition:.3s all;}td>div:hover {background-color:var(--platColor);}td>div.today {color:#fff;background-color:var(--primaryColor,var(--pc));}td>div.curr {color:#fff;background-color:var(--grayColor);}td>div.minor {color:var(--silverColor);}.calendar svg.icon {width:auto;height:100%;padding:6px;cursor:pointer;border-radius:3px;transition:.3s all;}.calendar svg.icon:hover {background-color:var(--platColor);}",""]),r.locals={};const s=r},399:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,'label {display:inline-flex;align-items:center;cursor:pointer;user-select:none;}label.disabled {color:var(--grayColor);cursor:default;}label.disabled input {background-color:var(--silverColor);}input {display:grid;place-content:center;-webkit-appearance:none;appearance:none;outline:0;margin:0;width:16px;height:16px;color:#fff;background-color:#fff;border:1.5px solid var(--primaryColor,var(--pc));border-radius:var(--borderRadius,var(--br));}input::before {content:"";width:10px;height:10px;background-color:#fff;clip-path:polygon(10% 46%,0% 59%,45% 95%,100% 16%,86% 7%,43% 68%);transform:scale(0);transition:.2s transform;}input:checked {background-color:var(--primaryColor,var(--pc));}input:checked::before {transform:scale(1);}input+div {margin-left:5px;}',""]),r.locals={};const s=r},815:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,".dialog {display:none;justify-content:center;align-items:center;-webkit-touch-callout:none;user-select:none;}.dialog-panel {display:flex;flex-direction:column;background-color:#fff;max-width:80%;max-height:80%;min-width:300px;border-radius:var(--borderRadius,var(--br));overflow:hidden;}.dialog-header {display:flex;justify-content:center;align-items:center;height:45px;font-weight:700;background-color:var(--platColor);}.dialog-body {flex:1;overflow-x:hidden;overflow-y:auto;padding:25px;}.dialog-footer {display:flex;}button {position:relative;font:inherit;font-weight:700;outline:0;height:45px;cursor:pointer;background-color:#fff;color:var(--grayColor);border:1px solid transparent;border-top-color:var(--platColor);-webkit-tap-highlight-color:rgba(0,0,0,0);flex:1;}button:not(:first-child) {border-left-color:var(--platColor);}button.primary {color:var(--fontColor,var(--fc));}button:active {background-color:var(--platColor);}button:disabled {cursor:default;background-color:#fff;}.loading {position:absolute;left:0;right:0;top:0;bottom:0;}.fade-in {animation:fadeIn ease .3s forwards;}.fade-out {animation:fadeOut ease .3s forwards;}.scale-in {animation:scaleIn ease .3s forwards;}.scale-out {animation:scaleOut ease .3s forwards;}@keyframes fadeIn {from {opacity:0;}to {opacity:1;}}@keyframes fadeOut {from {opacity:1;}to {opacity:0;}}@keyframes scaleIn {from {transform:scale(0.8);}to {transform:scale(1);}}@keyframes scaleOut {from {transform:scale(1);}to {transform:scale(0.8);}}",""]),r.locals={};const s=r},205:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,".field {display:flex;border-radius:var(--borderRadius,var(--br));border:1px solid var(--silverColor);transition:.3s;}.field:focus-within {border-color:var(--primaryColor,var(--pc));box-shadow:0 0 5px 0 rgb(0 0 0 / 15%);}.field:focus-within>label:after {background-color:var(--primaryColor,var(--pc));}.field:focus-within:has(:invalid) {border-color:var(--warningColor,var(--wc));}.field:has(:required)>label:after {background-color:var(--warningColor,var(--wc));}.field.plain {border-color:transparent;}.field.tonal>label {border-top-left-radius:var(--borderRadius,var(--br));border-bottom-left-radius:var(--borderRadius,var(--br));background-color:var(--platColor);}.field>label {position:relative;display:flex;align-items:baseline;cursor:default;width:30%;padding:7px 20px;white-space:nowrap;overflow:hidden;}.field>label:after {content:'';position:absolute;top:9px;bottom:9px;right:0;width:1px;background-color:var(--silverColor);transition:.3s;}.field-body {display:flex;align-items:center;flex-wrap:wrap;position:relative;overflow:hidden;flex:1;margin:0 10px;}.field-body input {font:inherit;outline:0;border:0;margin:0;padding:0;width:100%;height:100%;}.field-body input.readonly {pointer-events:none;caret-color:transparent;}.field-body input.hidden {position:absolute;opacity:0;width:100%;height:100%;}.field-body input[disabled] {color:var(--grayColor);pointer-events:none;background:transparent;}.field-icon {display:flex;justify-content:center;align-items:baseline;cursor:pointer;outline:0;width:40px;padding:11px;border-top-right-radius:var(--borderRadius,var(--br));border-bottom-right-radius:var(--borderRadius,var(--br));transition:.2s;}.field-icon>*,.loading:before {display:block;width:16px;height:16px;}.tooltip,.tooltip::before {position:absolute;z-index:5001;background:#fef6d5;border:1px solid #666;}.tooltip {padding:5px 10px;margin-top:10px;font-size:14px;border-radius:5px;box-shadow:3px 3px 3px rgb(0 0 0 / 16%);}.tooltip:before {content:'';bottom:100%;left:15%;padding:5px;margin-bottom:-5px;border-width:0 1px 1px 0;transform:rotate(-135deg);}",""]),r.locals={};const s=r},234:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,'*,*:before,*:after {box-sizing:border-box;}:root {--primaryColor:#19c;--minorColor:#999;--lineColor:#ccc;--headingColor:#333;--fontColor:#333;--fontFamily:system-ui,-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;--fontSize:15px;--spacing:15px;--borderRadius:5px;}::placeholder {color:var(--minorColor);}html {font-size:var(--fontSize);}body {margin:0;line-height:1.6;font-family:var(--fontFamily);color:var(--fontColor);}a {cursor:pointer;font:inherit;color:var(--primaryColor);text-decoration:none;}a:hover {text-decoration:underline;}img {max-width:100%;}h1,h2,h3,h4,h5 {font-weight:400;margin:0 0 var(--spacing) 0;}h1,h2,h3 {color:var(--headingColor);}h1 {font-size:3rem;line-height:3.8rem;}h2 {font-size:2.2rem;}h3 {font-size:1.6rem;}h4 {font-size:1.2rem;}h5 {font-size:0.9rem;font-weight:700;color:inherit;}table {--headBgColor:#ddd;}table.list {table-layout:fixed;border-collapse:collapse;border-style:hidden;border-radius:var(--borderRadius);box-shadow:0 0 0 1px var(--lineColor);width:100%;}table.list th,table.list td {height:40px;padding:5px 10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}table.list th {background-color:var(--headBgColor);}table.list td {border-left:1px solid #f3f3f3;border-top:1px solid var(--lineColor);}table.list th:first-child {border-top-left-radius:var(--borderRadius);}table.list th:last-child {border-top-right-radius:var(--borderRadius);}table.list tr:last-child td:first-child {border-bottom-left-radius:var(--borderRadius);}table.list tr:last-child td:last-child {border-bottom-right-radius:var(--borderRadius);}[tooltip] {position:relative;}[tooltip]:before,[tooltip]:after {position:absolute;visibility:hidden;pointer-events:none;opacity:0;bottom:100%;left:50%;transform:translate3d(-50%,-10px,0);transition:opacity .5s;}[tooltip]:hover:before,[tooltip]:hover:after {visibility:visible;opacity:1;}[tooltip]:before {content:\'\';z-index:9001;background-color:transparent;border:6px solid transparent;border-top-color:rgba(0,0,0,0.7);margin-bottom:-12px;}[tooltip]:after {content:attr(tooltip);z-index:9000;margin-right:-300px;padding:6px 10px;font-size:14px;line-height:1.6;border-radius:var(--borderRadius);background-color:rgba(0,0,0,0.7);color:#fff;}',""]),r.locals={};const s=r},336:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,'.select {display:flex;flex-direction:column;position:absolute;user-select:none;z-index:5001;max-height:300px;overflow-x:hidden;overflow-y:auto;background-color:#fff;box-shadow:0 0 16px rgb(0 0 0 / 8%);}.select::-webkit-scrollbar {width:6px;}.select::-webkit-scrollbar-thumb {background-color:var(--platColor);}.select::-webkit-scrollbar-thumb:hover {background-color:var(--silverColor);}.option {display:flex;align-items:center;cursor:pointer;padding:5px 20px 5px 40px;transition:.3s;}.option.disabled {color:var(--grayColor);cursor:default;}.option:not(.disabled):hover {background-color:var(--platColor);}.option.selected::before {content:"";position:absolute;width:14px;height:14px;left:18px;clip-path:polygon(7% 47%,0% 57%,45% 93%,100% 13%,90% 7%,44% 73%);background-color:var(--primaryColor,var(--pc));}.overlay {background:none;}slot {display:none;}',""]),r.locals={};const s=r},738:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,'*,*:before,*:after {box-sizing:border-box;}:host {--pc:#19c;--ec:#e58;--wc:#f80;--sc:#3b6;--fc:#333;--carbonColor:#666;--grayColor:#999;--silverColor:#ccc;--platColor:#eee;--ff:system-ui,-apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;--fs:15px;--br:5px;font-size:var(--fontSize,var(--fs));font-family:var(--fontFamily,var(--ff));color:var(--fontColor,var(--fc));line-height:1.6;}::placeholder {color:var(--grayColor);}svg.icon {width:16px;height:16px;fill:var(--grayColor);}.overlay {position:fixed;z-index:5000;background-color:rgba(0,0,0,0.5);left:0;right:0;top:0;bottom:0;}.loading {display:flex;justify-content:center;align-items:center;background-color:inherit;border-radius:inherit;pointer-events:none;}.loading:before {content:\'\';position:absolute;width:18px;height:18px;border-radius:50%;border-left:2px solid currentColor;border-right:2px solid var(--circleColor,var(--silverColor));border-top:2px solid var(--circleColor,var(--silverColor));border-bottom:2px solid var(--circleColor,var(--silverColor));animation:spin .6s linear infinite;}@keyframes spin {from {transform:rotate(0);}to {transform:rotate(360deg);}}',""]),r.locals={};const s=r},377:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,'.switch {position:relative;display:inline-block;width:37px;height:24px;}.switch input {opacity:0;width:0;height:0;}.switch i {position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;background-color:var(--silverColor);border-radius:26px;transition:.3s;}.switch i:before {position:absolute;content:"";height:14px;width:14px;left:6px;bottom:5px;background-color:#fff;border-radius:50%;transition:.3s;}input:checked+i {background-color:var(--primaryColor,var(--pc));}input:checked+i:before {transform:translateX(12px);height:16px;width:16px;left:4px;bottom:4px;}',""]),r.locals={};const s=r},739:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,"div[contenteditable] {outline:0;padding:5px 0;width:100%;min-height:80px;}slot {display:none;}",""]),r.locals={};const s=r},613:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,".toast {display:flex;justify-content:center;background-color:transparent;height:0;opacity:0;}.toast>div {position:absolute;bottom:0;max-width:80%;padding:6px 15px;border-radius:3px;font-weight:700;color:#fff;background-color:color-mix(in srgb,var(--fontColor) 80%,transparent);}.toast>div.warning {--fontColor:var(--wc);}.toast>div.error {--fontColor:var(--ec);}.toast>div.success {--fontColor:var(--sc);}.bounce-in {animation:bounceIn cubic-bezier(.17,.88,.48,1.5) .3s forwards;}.bounce-out {animation:bounceOut ease-out .3s;}@keyframes bounceIn {from {opacity:0;transform:translateY(0);}to {opacity:1;transform:translateY(120px);}}@keyframes bounceOut {from {opacity:1;transform:translateY(120px);}to {opacity:0;transform:translateY(0);}}",""]),r.locals={};const s=r},383:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,".toptray {display:none;position:fixed;right:30px;bottom:30px;width:40px;height:40px;padding:10px;background-color:#fff;cursor:pointer;color:var(--grayColor);border-radius:var(--borderRadius,var(--br));box-shadow:0 1px 10px 0 rgb(0 0 0 / 20%);}svg.icon {width:auto;height:auto;}",""]),r.locals={};const s=r},862:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),i=e.n(o),a=e(645),r=e.n(a)()(i());r.push([n.id,'.upload-list {display:flex;flex-wrap:wrap;flex:1;margin-top:5px;}.upload-entry {display:flex;margin:0 5px 5px 0;padding:6px 8px;line-height:16px;font-size:14px;border-radius:var(--borderRadius,var(--br));background-color:var(--platColor);}.upload-entry>a {display:flex;align-items:center;text-decoration:none;cursor:pointer;color:var(--carbonColor);}a.download-icon svg.icon {fill:var(--primaryColor,var(--pc));}a.remove-icon svg.icon {fill:var(--errorColor,var(--ec));}a[class$="-icon"] {margin-left:5px;}a:hover {text-decoration:underline;}input[type="file"] {display:none;}',""]),r.locals={};const s=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&r[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},81:n=>{n.exports=function(n){return n[1]}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var o={};(()=>{e.d(o,{Z:()=>V});var n={};e.r(n),e.d(n,{createElement:()=>r,createStyle:()=>s,enhanceElements:()=>l,formatBytes:()=>f,formatDate:()=>v,getScrollPosition:()=>p,isBooleanAttribute:()=>d,nanoId:()=>i,parseBoolean:()=>c,parseInteger:()=>h,registerComponent:()=>a,stringify:()=>g,toDataURI:()=>u});var t=e(234);function i(n=21){return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,t)=>n+((t&=61)<36?t.toString(36):(t-26).toString(36).toUpperCase())),"")}function a(n,t){customElements.define(n,t)}function r(n){if(n){if(0===(n=n.replace(/[\t\r]/gm,"").trim()).indexOf("<")){const t=document.createElement("template");return t.innerHTML=n,t.content.firstElementChild.cloneNode(!0)}return document.createElement(n)}}function s(n){const t=r("style");return t.textContent=n||"",t}function l(){Object.assign(Element.prototype,{query(n){return this.querySelector(n)},queryAll(n){return this.querySelectorAll(n)},on(n,t){"string"==typeof n&&(n=[n]);for(const e of n)this.addEventListener(e,t);return this},off(n,t){"string"==typeof n&&(n=[n]);for(const e of n)this.removeEventListener(e,t);return this},addClass(...n){return this.classList.add(...n),this},removeClass(...n){return this.classList.remove(...n),this},attr(n,t){return null===t?(this.removeAttribute(n),this):void 0===t?(t=this.getAttribute(n),d(n)?c(t):t):d(n)&&!c(t)?this.attr(n,null):(this.setAttribute(n,t),this)},attach(n,t){const e=n.getBoundingClientRect(),o=p();return this.style.left=e.x+o.left+"px",this.style.top=e.y+e.height+o.top+1+"px",t&&(this.style.width=e.width+"px"),this},swap(n){return n&&n.insertAdjacentElement("beforeBegin",this),this},remove(){return this.parentNode&&this.parentNode.removeChild(this)}})}function d(n){return["required","editable","readonly","checked","disabled"].includes(n)}function c(n){return null!==n&&!1!==n&&"null"!==n&&"undefined"!==n&&"false"!==n&&"0"!==n}function h(n){return/^\d+$/.test(n)?parseInt(n):0}function p(){const{body:n,documentElement:t}=document;return{top:n.scrollTop||t.scrollTop,left:n.scrollLeft||t.scrollLeft}}function u(n){return"data:image/svg+xml;base64,"+btoa(n)}function v(n,t,e){const o=e?"getUTC":"get";return t.replace(/yyyy/g,n[o+"FullYear"]()).replace(/yy/g,(""+n[o+"FullYear"]()).slice(-2)).replace(/MM/g,("0"+(n[o+"Month"]()+1)).slice(-2)).replace(/M/g,n[o+"Month"]()+1).replace(/dd/g,("0"+n[o+"Date"]()).slice(-2)).replace(/d/g,n[o+"Date"]()).replace(/hh/g,("0"+n[o+"Hours"]()).slice(-2)).replace(/h/g,n[o+"Hours"]()).replace(/mm/g,("0"+n[o+"Minutes"]()).slice(-2)).replace(/m/g,n[o+"Minutes"]()).replace(/ss/g,("0"+n[o+"Seconds"]()).slice(-2)).replace(/s/g,n[o+"Seconds"]()).replace(/SSS/g,("00"+n[o+"Milliseconds"]()).slice(-3)).replace(/S/g,n[o+"Milliseconds"]())}function f(n){const t=["B","KB","MB","GB","TB","PB","EB","ZB"],e=Math.min(t.length-1,Math.floor(Math.log(n)/Math.log(1024))),o=Math.max(0,e-2);return parseFloat((n/Math.pow(1024,e)).toFixed(o))+t[e]}function g(n){return Object.keys(n).map((t=>t+"="+encodeURI(n[t]))).join("&")}const b={"zh-CN":{OK:"确定",YES:"确定",NO:"取消",MON:"一",TUE:"二",WED:"三",THU:"四",FRI:"五",SAT:"六",SUN:"日",UPLOAD:"上传附件",MAX_ALLOWED_FILES:"最多允许上传 {{maxFiles}} 个文件",MAX_ALLOWED_SIZE:"单文件大小不允许超过 {{maxSize}}",DELETE_PROMPT:"确定删除吗？",DELETE_SUCCESS:"删除成功",UNSUPPORTED_RESPONSE:"不支持的响应类型",NETWORK_ERROR:"网络连接异常"},en:{OK:"OK",YES:"YES",NO:"NO",MON:"MON",TUE:"TUE",WED:"WED",THU:"THU",FRI:"FRI",SAT:"SAT",SUN:"SUN",UPLOAD:"UPLOAD",MAX_ALLOWED_FILES:"Uploaded files is not allowed to exceed {{maxFiles}}",MAX_ALLOWED_SIZE:"Single file size is not allowed to exceed {{maxSize}}",DELETE_PROMPT:"Sure you want to delete?",DELETE_SUCCESS:"Delete succeeded",UNSUPPORTED_RESPONSE:"Unsupported response type",NETWORK_ERROR:"Network connection error"},get(n,t){let e=this[this[navigator.language]?navigator.language:"en"][n];if(t)for(const[n,o]of Object.entries(t))e=e.replace(`{{${n}}}`,o);return e}};class m{static{["get","post","put","patch","delete"].forEach((n=>{this[n]=(t,e)=>this.#n(n.toUpperCase(),t,e)}))}static async#n(n,t,e){const o={method:n,headers:{},body:e};e instanceof FormData||(o.headers["content-type"]="application/json; charset=utf-8",o.body=JSON.stringify(e));try{const n=await fetch(t,o),e=n.headers.get("content-type");let i=null;if(!e||e.includes("text/plain"))i=await n.text();else{if(!e.includes("application/json"))throw new Error(b.get("UNSUPPORTED_RESPONSE"));i=await n.json()}if(!n.ok)throw new Error(i.message);return i}catch(n){throw Thyme.error(n.message||b.get("NETWORK_ERROR")),n}}}class y{static getJsonObject(n){const t=(n="string"==typeof n?document.querySelector(n):n).queryAll('[name]:not([name=""])'),e={};for(const n of t){let{type:t,tagName:o,name:i,value:a,checked:r}=n;if(i=i||n.attr("name"),"checkbox"!==t&&"radio"!==t||r){if("TH-UPLOAD"===o?a=n.entries:"INPUT"===o||"TEXTAREA"===o||o.startsWith("TH-")?"string"==typeof a&&(a=n.value=a.trim()):a="SELECT"===o?n.options[n.selectedIndex].value:n.isContentEditable?n.innerHTML=n.innerHTML.trim():n.textContent=n.textContent.trim(),n.reportValidity&&!n.reportValidity())return;e[i]?e[i]+=","+a:e[i]=a}}return e}static getJsonArray(n){n="string"==typeof n?document.querySelectorAll(n):n;const t=[];for(const e of n){const n=this.getJsonObject(e);if(!n)return;Object.keys(n).length&&t.push(n)}return t}}var x=e(567),w=e(738);class C extends HTMLElement{#t={};static get observedAttributes(){return this.attrs||[]}constructor(){super(),this.#e();const n=this.constructor;this.attachShadow({mode:"open"}),this.addStyle(w.Z+n.styles),this.render(n.template)}attributeChangedCallback(n,t,e){t!==e&&this.onChanged&&this.onChanged(n,e)}connectedCallback(){this.onConnected&&this.onConnected();const n=this.query("slot");n&&n.on("slotchange",(()=>{this.onAssigned&&this.onAssigned(n)}))}render(n){this.shell=r(n),this.shadowRoot.append(this.shell||"")}query(n){return this.shadowRoot.querySelector(n)}queryAll(n){return this.shadowRoot.querySelectorAll(n)}addStyle(n){let t=this.query("style");t||(t=s(),this.shadowRoot.append(t)),t.append(n)}#e(){new Set([...this.constructor.observedAttributes]).forEach((n=>{Object.defineProperty(this,this.#o(n),{set:t=>this.attr(n,t),get:()=>this.attr(n)})}))}#o(n){let t=this.#t[n];if(!t){const e=n.split("-");t=[e.shift(),...e.map((n=>n[0].toUpperCase()+n.slice(1)))].join(""),this.#t[n]=t}return t}}class k extends C{static styles=x.Z;static attrs=["disabled"];#i=["variant","href","target"];onChanged(n,t){const{shell:e}=this;e&&("variant"===n?t&&e.addClass(...t.split(/\s+/)):e.attr(n,t))}onConnected(){this.render(this.attr("href")?'<a class="button" draggable="false"><slot></slot></a>':"<button><slot></slot></button>"),this.#a();const n=this.#i.concat(this.constructor.attrs);for(const t of n)this.onChanged(t,this.attr(t))}set loading(n){if(n=!!n,this.disabled!=n)if(this.disabled=n,n){const n=r('<div class="loading"></div>');this.shell.append(n)}else{const n=this.query(".loading");n&&n.remove()}}#a(){const{shell:n}=this;let t;n.on("mousedown",(()=>{const e=r('<div class="ripple"></div>');n.append(e),t=e,e.end=!1,e.up=!1,e.fadeOut=function(){e.addClass("fade-out"),e.on("animationend",e.remove)};const o=n.getBoundingClientRect(),i=Math.sqrt(o.width**2+o.height**2)+"px";e.style.width=i,e.style.height=i,e.addClass("spread"),e.on("animationend",(()=>{e.end=!0,(e!=t||e.up)&&e.fadeOut()}))})),n.on(["mouseup","mouseleave"],(()=>{t&&(t.up=!0,t.end&&t.fadeOut())}))}}var E=e(545),S=e(205);const M={email:"^\\w+([_\\-+\\.]\\w+)*@\\w+([\\-\\.]\\w+)*\\.([a-zA-Z]{2,})$",url:"^https?:\\/\\/([\\w\\-]+\\.){1,}[a-zA-Z]{2,6}(\\/[\\S]*)?$"};class O extends C{static styles=S.Z;static attrs=["name","value","required","readonly","disabled"];static template='<div class="field"><label></label><div class="field-body"><input/><slot></slot></div></div>';#r=["tonal","plain"];#i=["label","type","step","min","max","minlength","maxlength","placeholder","pattern"];#s=["text","password","email","url","number"];_native=this.#l();onChanged(n,t){switch(n){case"readonly":this._native.mockReadOnly();break;case"value":this._native.value=t;break;default:this._native.attr(n,t)}}onConnected(){this.value=this._native.value;const n=this.attr("variant");this.#r.includes(n)&&this.shell.addClass(n);const t=this.#i.shift(),e=this.attr(t),o=this.query(t);e?o.innerHTML=e:o.remove();for(const n of this.#i){let t=this.attr(n);t&&("type"===n&&(t=this.#s.includes(t)?t:"text","email"!==t&&"url"!==t||this._native.attr("pattern",M[t])),this._native.attr(n,t))}}onAssigned(n){const t=n.assignedElements();t&&t.length&&this._native.mockHide()}#l(){const n=this.query("input");return n.on("change",(n=>this.value=n.target.value)),n.mockHide=()=>{n.addClass("hidden"),n.mockReadOnly()},n.mockReadOnly=()=>{n.addClass("readonly"),n.onkeydown=()=>!1,n.on("compositionend",(()=>n.value=""))},n}#d(){const n=this._native.validity.valid,t=this._native.validationMessage;let e=this.query(".tooltip");return e&&(clearTimeout(e.timer),e.remove()),n||(e=r(`<div class="tooltip">${t}</div>`),e.attach(this._native),this.shadowRoot.append(e),this.focus(),e.timer=setTimeout((()=>{e.remove()}),5e3)),n}reportValidity(){return this.#d()}focus(){this._native.focus()}set icon(n){let t=this.query(".field-icon");t||(t=r('<div class="field-icon"></div>'),t.tabIndex=-1,this.shell.append(t),Object.defineProperty(t,"loading",{set:n=>{n?(t.innerHTML="",t.addClass("loading")):(t.removeClass("loading"),t.innerHTML=t._innerHTML)}}));const e="string"==typeof n?n:n.outerHTML;t.innerHTML=t._innerHTML=e}get icon(){return this.query(".field-icon")}}class R extends O{#c='<div><div class="overlay"></div><div class="calendar"></div></div>';#h;#p;#u;#v;onConnected(){super.onConnected(),this.addStyle(E.Z),this.readonly=!0,this.icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="M744 130h186a47 47 0 0 1 47 47v743a47 47 0 0 1-47 47H94a47 47 0 0 1-47-47V177a47 47 0 0 1 47-47h186V37h93v93h278V37h93zm-93 93H373v93h-93v-93H141v186h742V223H744v93h-93zm232 278H141v373h742z"/></svg>',this.icon.on("click",(()=>this.#f()))}#f(){this.#h=r(this.#c),this.shadowRoot.append(this.#h),this.query(".overlay").on("mousedown",(()=>this.#h.remove())),this.#p=this.query(".calendar"),this.#g(),this.#p.attach(this._native),this.#u=new Date(this._native.value),this.#u=isNaN(this.#u.getTime())?new Date:this.#u,this.#b(this.#u)}#g(){this.#p.on("click",(n=>{const t=n.target;if("TD"===t.parentNode.tagName){const n=new Date(this.#v.year,this.#v.month-1,t.dataset.index);this.value=v(n,"yyyy-MM-dd"),this.#h.remove()}const e=this.#p.query(".calendar-title");if(e.contains(t))return this.#b(this.#u);const o=this.#p.queryAll("svg.icon"),i=o[0],a=o[1],r=o[2],s=o[3],l=new Date(e.innerHTML);if(i.contains(t))l.setFullYear(l.getFullYear()-1);else if(a.contains(t))l.setMonth(l.getMonth()-1);else if(r.contains(t))l.setMonth(l.getMonth()+1);else{if(!s.contains(t))return;l.setFullYear(l.getFullYear()+1)}this.#b(l)}))}#b(n){const t=this.#v=this.#m(n);let e=`<div class="calendar-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="m267 512 311-311-89-90L88 512l401 401 89-90z"/><path d="m605 512 311-311-89-90-401 401 401 401 89-90z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="m430 512 311-311-89-90-401 401 401 401 89-90Z"/></svg><span class="calendar-title">${t.year}-${t.month.toString().padStart(2,0)}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="M594 512 283 201l89-90 401 401-401 401-89-90Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="M757 512 446 201l89-90 401 401-401 401-89-90z"/><path d="M419 512 108 201l89-90 401 401-401 401-89-90z"/></svg></div><div class="calendar-body"><table><thead><tr><th>${b.get("MON")}</th><th>${b.get("TUE")}</th><th>${b.get("WED")}</th><th>${b.get("THU")}</th><th>${b.get("FRI")}</th><th>${b.get("SAT")}</th><th>${b.get("SUN")}</th></tr></thead><tbody>`;const o=new Date;for(let n=0;n<t.days.length;n++){n%7==0&&(e+="<tr>");const i=t.days[n];let a="";t.month!=i.month&&(a="minor"),t.year==this.#u.getFullYear()&&i.month==this.#u.getMonth()+1&&i.day==this.#u.getDate()&&(a="curr"),t.year==o.getFullYear()&&i.month==o.getMonth()+1&&i.day==o.getDate()&&(a="today"),e+='<td><div data-index="'+i.index+'" class="'+a+'">'+i.day+"</div></td>",n%7==6&&(e+="</tr>")}e+="</tbody></table></div>",this.#p.innerHTML=e}#m(n=new Date){const t=n.getFullYear(),e=n.getMonth()+1,o=new Date(t,e-1,1),i=new Date(t,e,0).getDate();let a=o.getDay();0===a&&(a=7);const r=a-1,s=new Date(t,e-1,0).getDate(),l=[];for(let n=0;n<42;n++){const t=n+1-r;let o=t,a=e;t<=0?(a=e-1,o=s+t):t>i&&(a=e+1,o-=i),0===a&&(a=12),a>12&&(a=1),l.push({month:a,day:o,index:t})}return{year:t,month:e,days:l}}}var T=e(399);class _ extends C{static styles=T.Z;static attrs=["name","value","checked","disabled"];static template='<label><input type="checkbox"/><div><slot></slot></div></label>';type="checkbox";#y=this.query("input");onChanged(n,t){this.#y.attr(n,t),"disabled"===n&&this.shell.addClass("disabled")}onConnected(){const n=new Event("change");this.#y.on("change",(t=>{this.checked=t.target.checked,this.dispatchEvent(n)}))}}class D extends O{onConnected(){super.onConnected(),this._native.mockHide()}onAssigned(n){const t=n.assignedElements();this.#x(t);for(const n of t)n.on("change",(()=>this.#x(t)))}#x(n){const t=[];n.filter((n=>n.checked)).forEach((n=>t.push(n.value))),this.value=t.join(",")}}var L=e(815);class A extends C{static styles=L.Z;static template='<div class="overlay dialog"><div class="dialog-panel"><div class="dialog-header"></div><div class="dialog-body"><slot></slot></div><div class="dialog-footer"></div></div></div>';#w=0;#C;onConnected(){const n=this.attr("title"),t=this.query(".dialog-header");n?t.innerHTML=n:t.remove(),document.addEventListener("keyup",(n=>{27===n.keyCode&&this.hide()}))}set buttons(n=[]){const t=this.query(".dialog-footer");for(let e of n){"string"==typeof e&&(e={label:e});const n=r(`<button>${e.label}</button>`);this.#k(n),t.append(n),!0===e.primary&&n.addClass("primary"),n.on("click",(async()=>{e.onclick?(n.loading=!0,await e.onclick.call(this,this),n.loading=!1):this.hide()}))}}open(n=!1){0==this.#w&&(this.#C=n,this.#E("fade-in","scale-in",2))}hide(){2==this.#w&&this.#E("fade-out","scale-out",0)}#E(n,t,e){this.#w=1;const{shell:o}=this;o.addClass(n),2==e&&(o.style.display="flex");const i=this.query(".dialog-panel");i.addClass(t),o.onanimationend=()=>{i.removeClass(t),o.removeClass(n),o.onanimationend=null,this.#w=e,0==e&&(this.#C?this.remove():o.style.display="none")}}#k(n){Object.defineProperty(n,"loading",{set:function(t){if(t=!!t,this.disabled!=t)if(this.disabled=t,t){const n=r('<div class="loading"></div>');this.append(n)}else{const t=n.query(".loading");t&&t.remove()}}})}}var z=e(336);class q extends O{#c='<div><div class="overlay"></div><div class="select"></div></div>';#S;onConnected(){super.onConnected(),this.addStyle(z.Z),this.readonly=!0,this.icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="m512 594 311-311 90 89-401 401-401-401 90-89Z"/></svg>',this.icon.on("click",(()=>this.#f()))}onAssigned(n){this.#S=n.assignedElements();const t=this.#S.find((n=>n.selected));t&&this.#x(t.value,t.label)}#f(){const n=r(this.#c);this.shadowRoot.append(n),this.query(".overlay").on("mousedown",(()=>n.remove()));const t=this.query(".select");t.attach(this._native,!0);for(const e of this.#S){const{label:o,value:i,selected:a,disabled:s}=e,l=r(`<a class="option">${o||"&#160;"}</a>`);t.append(l),a&&l.addClass("selected"),s?l.addClass("disabled"):l.on("click",(()=>{this.#x(i,o),this.#S.forEach((n=>n.selected=!1)),e.selected=!0,n.remove()}))}}#x(n,t){this.value=n,this._native.value=t}}var H=e(377);class F extends C{static styles=H.Z;static attrs=["name","checked"];static template='<label class="switch"><input type="checkbox"/><i></i></label>';#y=this.query("input");onChanged(n,t){this.#y.attr(n,t)}onConnected(){this.value=this.value||0,this.#y.on("change",(n=>{this.checked=n.target.checked}))}get value(){return this.checked?1:0}set value(n){this.checked=!!n}}var U=e(739);class N extends O{#M;onConnected(){super.onConnected(),this.addStyle(U.Z),this._native.mockHide(),this.#M=r('<div contenteditable="plaintext-only"></div>'),this.query(".field-body").append(this.#M),this.#M.on("input",(n=>{this.value=n.target.textContent}))}onAssigned(n){let t="";n.assignedNodes().forEach((n=>t+=n.textContent)),t=t.trim(),this.#M.textContent=t,this.value=t}reportValidity(){const n=super.reportValidity();return n||this.#M.focus(),n}}var Z=e(613);class P extends C{static styles=Z.Z;static attrs=["type"];static template='<div class="overlay toast"><div><slot></slot></div></div>';onChanged(n,t){this.query(".toast>div").addClass(t)}onConnected(){const n=this.query(".toast");n.addClass("bounce-in");const t=h(this.attr("delay"))||3e3;setTimeout((()=>{n.addClass("bounce-out"),n.on("animationend",(()=>this.remove()))}),t)}}var j=e(383);class B extends C{static styles=j.Z;static template='<div class="toptray"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="m512 430 311 311 90-89-401-401-401 401 90 89Z"/></svg></div>';onConnected(){const{shell:n}=this,t=this.attr("x"),e=this.attr("y");let o;t&&(n.style.right=t+"px"),e&&(n.style.bottom=e+"px"),n.onclick=()=>{cancelAnimationFrame(o),o=requestAnimationFrame((function n(){const t=p().top;document.body.scrollTop=document.documentElement.scrollTop=parseInt(t/1.2),t>0?o=requestAnimationFrame(n):cancelAnimationFrame(o)}))},addEventListener("scroll",(()=>{const t=p().top;n.style.display=t>450?"block":"none"}))}}var I=e(862);class $ extends O{#c='<div><input type="file"/><div class="upload-list" tabindex="-1"></div></div>';#O=[];#R;#T;#_;#D;onConnected(){if(super.onConnected(),this.addStyle(I.Z),this._native.mockHide(),this.query(".field-body").append(r(this.#c)),this.#_=this.attr("editable"),this.#_){const n=this.query('input[type="file"]');n.on("change",(n=>this.#L(n.target.files))),this.icon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="M871 923H153V796h718ZM576 294v400H448V294L213 529l-85-86L512 59l384 384-85 86z"/></svg>',this.icon.on("click",(()=>n.click())),this.#D=h(this.attr("multiple")),this.#D>1&&n.attr("multiple",!0);const t=this.attr("accept");t&&n.attr("accept",t)}}async#L(n){if(!n||0===n.length)return;if(n.length+this.#O.length>this.#D)return void V.warning(b.get("MAX_ALLOWED_FILES",{maxFiles:this.#D}));const t=h(this.attr("maxsize"));for(const e of n)if(t>0&&e.size>t)return V.warning(b.get("MAX_ALLOWED_SIZE",{maxSize:f(t)}));for(const t of n){const n=URL.createObjectURL(t),e={_id:i(),originalName:t.name,previewUrl:n,downloadUrl:n,file:t};this.#R&&(this.icon.loading=!0,await this.#R(e),this.icon.loading=!1,this.#b(e))}}#b(n){if(!n||!n._id)return;const t=r(`<div class="upload-entry" id="_${n._id}"><a class="preview-link" target="_blank" href="${n.previewUrl}">${n.originalName}</a><a class="download-icon" href="${n.downloadUrl}" download="${n.originalName}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="M512 1021.7C231 1021.7 2.3 793.1 2.3 512S230.9 2.3 512 2.3s509.7 228.6 509.7 509.7-228.6 509.7-509.7 509.7zm0-946.6C271 75 75 271 75 512s196 437 437 437 437-196 437-437S753 75 512 75zm207.7 448.4a37.2 37.2 0 0 0-52.3 0l-119 118.2v-349a36.4 36.4 0 1 0-72.8 0v350.9L355.9 522.2a36.4 36.4 0 0 0-51.6-.3 36.6 36.6 0 0 0-.2 51.8l181.3 183.2a36.6 36.6 0 0 0 51.8.3v-.1l.2-.1 182.2-181.7a36.6 36.6 0 0 0 .1-51.8z"/></svg></a></div>`);if(this.#_){const e=r('<a class="remove-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon"><path d="M512 1021.7C231 1021.7 2.3 793.1 2.3 512S230.9 2.3 512 2.3s509.7 228.6 509.7 509.7-228.6 509.7-509.7 509.7zm0-946.3A437 437 0 0 0 75.4 512 437 437 0 0 0 512 948.6 437.1 437.1 0 0 0 948.6 512 437 437 0 0 0 512 75.4zm51.3 438.2 157.4-155.8a36.4 36.4 0 1 0-51.2-51.7L512 462 356.6 306.3a36.4 36.4 0 1 0-51.5 51.4l155 155.5-156.3 154.6a36.4 36.4 0 1 0 51.2 51.8l156.5-154.8L669.3 723a36.2 36.2 0 0 0 51.5 0 36.4 36.4 0 0 0 0-51.4L563.3 513.6z"/></svg></a>');e.on("click",(()=>this.#A(n))),t.append(e)}this.query(".upload-list").append(t),this.#O.push(n),this._native.value=this.entries.length||""}#A(n){V.confirm(b.get("DELETE_PROMPT"),(async()=>{!n.file&&this.#T&&(await this.#T(n),V.success(b.get("DELETE_SUCCESS"))),this.query("#_"+n._id).remove();const t=this.#O.findIndex((t=>t._id==n._id));this.#O.splice(t,1),this._native.value=this.entries.length||""}))}get entries(){return this.#O}set entries(n){this.#O.length=0,n&&Array.isArray(n)&&n.forEach((n=>this.#b(n)))}set onUpload(n){this.#R=n}set onRemove(n){this.#T=n}}class Y{static util=n;static http=m;static form=y;static#z;static{l(),document.head.append(s(t.Z)),a("th-button",k),a("th-calendar",R),a("th-checkbox",_),a("th-checkgroup",D),a("th-dialog",A),a("th-field",O),a("th-select",q),a("th-switch",F),a("th-textbox",N),a("th-toast",P),a("th-toptray",B),a("th-upload",$)}static alert(n,t,e){const o=r(`<th-dialog>${n}</th-dialog>`);document.body.append(o);const i=[];e?(i.push({label:b.get("NO")}),i.push({label:b.get("YES")})):i.push({label:b.get("OK")}),Object.assign(i[i.length-1],{primary:!0,onclick:async n=>{t&&await t.call(n,n),n.hide()}}),o.buttons=i,o.open(!0)}static confirm(n,t){this.alert(n,t,!0)}static info(n,t,e){this.#z&&(this.#z.remove(),this.#z=null),this.#z=r(`<th-toast>${n}</th-toast>`),this.#z.attr("type",t),this.#z.attr("delay",e),document.body.append(this.#z)}static error(n){this.info(n,"error",5e3)}static warning(n){this.info(n,"warning",4e3)}static success(n){this.info(n,"success")}}window.Thyme=Y;const V=Y})()})();