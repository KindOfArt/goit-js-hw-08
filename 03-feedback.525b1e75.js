var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),l=Object.prototype.toString,c=Math.max,s=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,r,i,a,f,u,l=0,d=!1,g=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(S,t),d?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=i}function S(){var e=m();if(j(e))return O(e);f=setTimeout(S,function(e){var n=t-(e-u);return g?s(n,i-(e-l)):n}(e))}function O(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function x(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(g)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,v(n)&&(d=!!n.leading,i=(g="maxWait"in n)?c(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},x.flush=function(){return void 0===f?a:O(m())},x}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const g={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input[name = email]"),textarea:document.querySelector(".feedback-form textarea")};let p={email:"",message:""};g.form.addEventListener("input",(function(e){p[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(p))})),g.form.addEventListener("submit",(function(e){e.preventDefault(),(0===p.email.length||0===p.message.length)&&alert("All areas must be filled");p.email.length>0&&p.message.length>0&&(console.log(p),g.form.reset(),localStorage.removeItem("feedback-form-state"))})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(p={...e},g.email.value=p.email,g.textarea.value=p.message)}();
//# sourceMappingURL=03-feedback.525b1e75.js.map
