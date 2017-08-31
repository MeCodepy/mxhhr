define("gallery/mustache/0.8.1/mustache-debug",[],function(e,t){!function(e,n){if("object"==typeof t&&t)n(t);else{var r={};n(r),"function"==typeof define&&define.amd?define(r):e.Mustache=r}}(this,function(e){function t(e,t){return y.call(e,t)}function n(e){return!t(d,e)}function r(e){return"function"==typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(e){return String(e).replace(/[&<>"'\/]/g,function(e){return x[e]})}function o(e){if(!m(e)||2!==e.length)throw new Error("Invalid tags: "+e);return[new RegExp(i(e[0])+"\\s*"),new RegExp("\\s*"+i(e[1]))]}function a(t,r){function s(){if(j&&!C)for(;T.length;)delete E[T.pop()];else T=[];j=!1,C=!1}r=r||e.tags,t=t||"","string"==typeof r&&(r=r.split(g));for(var a,l,p,d,y,b,m=o(r),x=new h(t),U=[],E=[],T=[],j=!1,C=!1;!x.eos();){if(a=x.pos,p=x.scanUntil(m[0]))for(var A=0,R=p.length;R>A;++A)d=p.charAt(A),n(d)?T.push(E.length):C=!0,E.push(["text",d,a,a+1]),a+=1,"\n"===d&&s();if(!x.scan(m[0]))break;if(j=!0,l=x.scan(k)||"name",x.scan(f),"="===l?(p=x.scanUntil(w),x.scan(w),x.scanUntil(m[1])):"{"===l?(p=x.scanUntil(new RegExp("\\s*"+i("}"+r[1]))),x.scan(v),x.scanUntil(m[1]),l="&"):p=x.scanUntil(m[1]),!x.scan(m[1]))throw new Error("Unclosed tag at "+x.pos);if(y=[l,p,a,x.pos],E.push(y),"#"===l||"^"===l)U.push(y);else if("/"===l){if(b=U.pop(),!b)throw new Error('Unopened section "'+p+'" at '+a);if(b[1]!==p)throw new Error('Unclosed section "'+b[1]+'" at '+a)}else"name"===l||"{"===l||"&"===l?C=!0:"="===l&&(m=o(r=p.split(g)))}if(b=U.pop())throw new Error('Unclosed section "'+b[1]+'" at '+x.pos);return u(c(E))}function c(e){for(var t,n,r=[],i=0,s=e.length;s>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function u(e){for(var t,n,r=[],i=r,s=[],o=0,a=e.length;a>o;++o)switch(t=e[o],t[0]){case"#":case"^":i.push(t),s.push(t),i=t[4]=[];break;case"/":n=s.pop(),n[5]=t[2],i=s.length>0?s[s.length-1][4]:r;break;default:i.push(t)}return r}function h(e){this.string=e,this.tail=e,this.pos=0}function l(e,t){this.view=null==e?{}:e,this.cache={".":this.view},this.parent=t}function p(){this.cache={}}var f=/\s*/,g=/\s+/,d=/\S/,w=/\s*=/,v=/\s*\}/,k=/#|\^|\/|>|\{|&|=|!/,y=RegExp.prototype.test,b=Object.prototype.toString,m=Array.isArray||function(e){return"[object Array]"===b.call(e)},x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(e){var t=this.tail.match(e);if(t&&0===t.index){var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n}return""},h.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},l.prototype.push=function(e){return new l(e,this)},l.prototype.lookup=function(e){var t;if(e in this.cache)t=this.cache[e];else{for(var n=this;n;){if(e.indexOf(".")>0){t=n.view;for(var i=e.split("."),s=0;null!=t&&s<i.length;)t=t[i[s++]]}else t=n.view[e];if(null!=t)break;n=n.parent}this.cache[e]=t}return r(t)&&(t=t.call(this.view)),t},p.prototype.clearCache=function(){this.cache={}},p.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=a(e,t)),r},p.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof l?t:new l(t);return this.renderTokens(r,i,n,e)},p.prototype.renderTokens=function(t,n,i,s){function o(e){return h.render(e,n,i)}for(var a,c,u="",h=this,l=0,p=t.length;p>l;++l)switch(a=t[l],a[0]){case"#":if(c=n.lookup(a[1]),!c)continue;if(m(c))for(var f=0,g=c.length;g>f;++f)u+=this.renderTokens(a[4],n.push(c[f]),i,s);else if("object"==typeof c||"string"==typeof c)u+=this.renderTokens(a[4],n.push(c),i,s);else if(r(c)){if("string"!=typeof s)throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,s.slice(a[3],a[5]),o),null!=c&&(u+=c)}else u+=this.renderTokens(a[4],n,i,s);break;case"^":c=n.lookup(a[1]),(!c||m(c)&&0===c.length)&&(u+=this.renderTokens(a[4],n,i,s));break;case">":if(!i)continue;c=r(i)?i(a[1]):i[a[1]],null!=c&&(u+=this.renderTokens(this.parse(c),n,i,c));break;case"&":c=n.lookup(a[1]),null!=c&&(u+=c);break;case"name":c=n.lookup(a[1]),null!=c&&(u+=e.escape(c));break;case"text":u+=a[1]}return u},e.name="mustache.js",e.version="0.8.1",e.tags=["{{","}}"];var U=new p;e.clearCache=function(){return U.clearCache()},e.parse=function(e,t){return U.parse(e,t)},e.render=function(e,t,n){return U.render(e,t,n)},e.to_html=function(t,n,i,s){var o=e.render(t,n,i);return r(s)?void s(o):o},e.escape=s,e.Scanner=h,e.Context=l,e.Writer=p})});
//# sourceMappingURL=../../../gallery/mustache/0.8.1/mustache-debug.js.map