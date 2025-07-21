// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-range-by@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(n,i,o){if(!t(n))throw new TypeError(e("null2O",n));if(!s(i))throw new TypeError(e("null2H",i));return r(n.length,n,1,0,(function(t,s,r,e){return i.call(o,t,s,e)}))}export{n as default};
//# sourceMappingURL=index.mjs.map
