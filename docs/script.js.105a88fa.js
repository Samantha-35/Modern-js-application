parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bQl6":[function(require,module,exports) {
"use strict";function e(e,r,t,n,a,c,o){try{var s=e[c](o),u=s.value}catch(i){return void t(i)}s.done?r(u):Promise.resolve(u).then(n,a)}function r(r){return function(){var t=this,n=arguments;return new Promise(function(a,c){var o=r.apply(t,n);function s(r){e(o,a,c,s,u,"next",r)}function u(r){e(o,a,c,s,u,"throw",r)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchDeleteCharacter=void 0;var t="https://character-database.becode.xyz/characters/",n=function(){var e=r(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t).concat(r),{method:"DELETE"});case 3:Swal.fire("Deleted","The character was deleted","success"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),Swal.fire("Oh no!","there was an error, please try later","error");case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(r){return e.apply(this,arguments)}}();exports.fetchDeleteCharacter=n;
},{}],"sMzJ":[function(require,module,exports) {
"use strict";function e(e,t,r,n,c,o,a){try{var s=e[o](a),u=s.value}catch(i){return void r(i)}s.done?t(u):Promise.resolve(u).then(n,c)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(c,o){var a=t.apply(r,n);function s(t){e(a,c,o,s,u,"next",t)}function u(t){e(a,c,o,s,u,"throw",t)}s(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchGetCharacters=void 0;var r="https://character-database.becode.xyz/characters",n=function(){var e=t(regeneratorRuntime.mark(function e(){var t,n,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.slice(0,4),console.log(c),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(){return e.apply(this,arguments)}}();exports.fetchGetCharacters=n;
},{}],"WQpZ":[function(require,module,exports) {
"use strict";function e(e,t,r,n,a,c,o){try{var i=e[c](o),s=i.value}catch(u){return void r(u)}i.done?t(s):Promise.resolve(s).then(n,a)}function t(t){return function(){var r=this,n=arguments;return new Promise(function(a,c){var o=t.apply(r,n);function i(t){e(o,a,c,i,s,"next",t)}function s(t){e(o,a,c,i,s,"throw",t)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchUpdateCharacter=void 0;var r="https://character-database.becode.xyz/characters/",n=function(){var e=t(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(r).concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:Swal.fire("Nice!","Character updated","success"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),Swal.fire("Oh no!!","Something went wrong, please try again later","error"),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,r){return e.apply(this,arguments)}}();exports.fetchUpdateCharacter=n;
},{}],"Gm3G":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){r(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.setUpdatedCharacter=void 0;var n=function(e,r){var n=r.inputNameModal,o=r.inputShortDescriptionModal,c=r.inputLongDescriptionModal,i=n.value,a=o.value,p=c.value;return t(t({},e),{},{name:i,shortDescription:a,description:p})};exports.setUpdatedCharacter=n;
},{}],"/ocx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cloneGenerator=void 0;var e=function(e,t,r){var o=t.image,n=t.name,c=t.shortDescription,i=t.description,a=e.cloneNode(!0).content;a.querySelector("img").src="data:image/*;base64,".concat(o),a.querySelector("h4").innerHTML=n,a.querySelector("h5").innerHTML=c,a.querySelector("p").innerHTML=i;var u=a.querySelector("button");return u.setAttribute("id","button-".concat(r)),{clone:a,button:u}};exports.cloneGenerator=e;
},{}],"2LM2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setModalValues=void 0;var e=function(e,t,o){var a=document.getElementById("name-modal");a.value=e;var n=document.getElementById("short-description-modal");n.value=t;var d=document.getElementById("long-description-modal");return d.value=o,{inputNameModal:a,inputShortDescriptionModal:n,inputLongDescriptionModal:d}};exports.setModalValues=e;
},{}],"siVJ":[function(require,module,exports) {
"use strict";var e=require("../helpers/fetchDeleteCharacter.js"),t=require("../helpers/fetchGetCharacters.js"),r=require("../helpers/fetchUpdateCharacter.js"),n=require("../helpers/setUpdatedCharacter.js"),a=require("./cloneGenerator.js"),c=require("./setModalValues.js");function o(e,t,r,n,a,c,o){try{var u=e[c](o),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var c=e.apply(t,r);function u(e){o(c,n,a,u,i,"next",e)}function i(e){o(c,n,a,u,i,"throw",e)}u(void 0)})}}var i=document.getElementById("target"),s=document.querySelector("template"),l=function(){var o=u(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,(0,t.fetchGetCharacters)();case 3:o.sent.forEach(function(t,o){var u=(0,a.cloneGenerator)(s,t,o),l=u.clone,d=u.button,h=t.id;d.addEventListener("click",function(){var a=t.name,o=t.shortDescription,u=t.description,i=document.getElementById("delete-button"),s=document.getElementById("button-modal"),l=(0,c.setModalValues)(a,o,u);s.addEventListener("click",function(){var e=(0,n.setUpdatedCharacter)(t,l);(0,r.fetchUpdateCharacter)(e,h)}),i.addEventListener("click",function(){(0,e.fetchDeleteCharacter)(h)})}),i.appendChild(l)}),o.next=10;break;case 7:o.prev=7,o.t0=o.catch(0),console.log(o.t0);case 10:case"end":return o.stop()}},o,null,[[0,7]])}));return function(){return o.apply(this,arguments)}}();l();
},{"../helpers/fetchDeleteCharacter.js":"bQl6","../helpers/fetchGetCharacters.js":"sMzJ","../helpers/fetchUpdateCharacter.js":"WQpZ","../helpers/setUpdatedCharacter.js":"Gm3G","./cloneGenerator.js":"/ocx","./setModalValues.js":"2LM2"}]},{},["siVJ"], null)
//# sourceMappingURL=script.js.105a88fa.js.map