"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var h=o(function(W,d){
var m=require('@stdlib/stats-base-dists-negative-binomial-cdf/dist'),N;function O(r,e,a,u){for(;;){if(r===0||m(r-1,a,u)<e)return r;r-=1}}function b(r,e,a,u){for(;;)if(r+=1,m(r,a,u)>=e)return r}N={left:O,right:b};d.exports=N
});var F=o(function(X,x){
var j=require('@stdlib/stats-base-dists-negative-binomial-cdf/dist'),y=require('@stdlib/math-base-special-erfcinv/dist'),g=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-round/dist'),A=require('@stdlib/math-base-special-sqrt/dist'),I=require('@stdlib/constants-float64-sqrt-two/dist'),B=require('@stdlib/constants-float64-pinf/dist'),R=h();function C(r,e,a){var u,v,n,c,i,s,t,f;return g(e)||g(a)||g(r)||e<=0||a<0||a>1||r<0||r>1?NaN:r===0?0:r===1?B:(f=1-a,i=e*f/a,n=A(e*f)/a,u=1/n,r<.5?t=-y(2*r)*I:t=y(2*(1-r))*I,s=t*t,c=t+u*(s-1)/6,v=z(i+n*c),j(v,e,a)>=r?R.left(v,r,e,a):R.right(v,r,e,a))}x.exports=C
});var T=o(function(Y,S){
var D=require('@stdlib/utils-constant-function/dist'),E=require('@stdlib/stats-base-dists-negative-binomial-cdf/dist'),w=require('@stdlib/math-base-special-erfcinv/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),G=require('@stdlib/math-base-special-round/dist'),H=require('@stdlib/math-base-special-sqrt/dist'),P=require('@stdlib/constants-float64-sqrt-two/dist'),J=require('@stdlib/constants-float64-pinf/dist'),Q=h();function K(r,e){var a,u,v,n;if(l(r)||l(e)||r<=0||e<0||e>1)return D(NaN);return n=1-e,v=r*n/e,u=H(r*n)/e,a=(2/e-1)/u,c;function c(i){var s,t,f,q;return l(i)||i<0||i>1?NaN:i===0?0:i===1?J:(i<.5?q=-w(2*i)*P:q=w(2*(1-i))*P,f=q*q,t=q+a*(f-1)/6,s=G(v+u*t),E(s,r,e)>=i?Q.left(s,i,r,e):Q.right(s,i,r,e))}}S.exports=K
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=F(),U=T();M(L,"factory",U);module.exports=L;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
