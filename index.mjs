// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-negative-binomial-cdf@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcinv@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";var a={left:function(t,e,n,i){for(;;){if(0===t||s(t-1,n,i)<e)return t;t-=1}},right:function(t,e,n,i){for(;;)if(s(t+=1,n,i)>=e)return t}};function f(t,o,f){var l,j,h,p,c,v;return n(o)||n(f)||n(t)||o<=0||f<0||f>1||t<0||t>1?NaN:0===t?0:1===t?m:(p=o*(v=1-f)/f,l=1/(h=r(o*v)/f),c=t<.5?-e(2*t)*d:e(2*(1-t))*d,j=i(p+h*(c+l*(c*c-1)/6)),s(j,o,f)>=t?a.left(j,t,o,f):a.right(j,t,o,f))}function l(t,f){var l,j,h,p;return n(t)||n(f)||t<=0||f<0||f>1?o(NaN):(h=t*(p=1-f)/f,j=r(t*p)/f,l=(2/f-1)/j,function(r){var o,p;if(n(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return m;p=r<.5?-e(2*r)*d:e(2*(1-r))*d;return o=i(h+j*(p+l*(p*p-1)/6)),s(o,t,f)>=r?a.left(o,r,t,f):a.right(o,r,t,f)})}t(f,"factory",l);export{f as default,l as factory};
//# sourceMappingURL=index.mjs.map
