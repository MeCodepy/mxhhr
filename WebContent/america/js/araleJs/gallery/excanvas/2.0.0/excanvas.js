document.createElement("canvas").getContext||!function(){function t(){return this.context_||(this.context_=new x(this))}function e(t,e){var i=Y.call(arguments,2);return function(){return t.apply(e,i.concat(Y.call(arguments)))}}function i(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function r(t,e,i){t.namespaces[e]||t.namespaces.add(e,i,"#default#VML")}function n(t){if(r(t,"g_vml_","urn:schemas-microsoft-com:vml"),r(t,"g_o_","urn:schemas-microsoft-com:office:office"),!t.styleSheets.ex_canvas_){var e=t.createStyleSheet();e.owningElement.id="ex_canvas_",e.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function a(t){var e=t.srcElement;switch(t.propertyName){case"width":e.getContext().clearRect(),e.style.width=e.attributes.width.nodeValue+"px",e.firstChild.style.width=e.clientWidth+"px";break;case"height":e.getContext().clearRect(),e.style.height=e.attributes.height.nodeValue+"px",e.firstChild.style.height=e.clientHeight+"px"}}function s(t){var e=t.srcElement;e.firstChild&&(e.firstChild.style.width=e.clientWidth+"px",e.firstChild.style.height=e.clientHeight+"px")}function o(){return[[1,0,0],[0,1,0],[0,0,1]]}function l(t,e){for(var i=o(),r=0;3>r;r++)for(var n=0;3>n;n++){for(var a=0,s=0;3>s;s++)a+=t[r][s]*e[s][n];i[r][n]=a}return i}function h(t,e){e.fillStyle=t.fillStyle,e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.lineWidth=t.lineWidth,e.miterLimit=t.miterLimit,e.shadowBlur=t.shadowBlur,e.shadowColor=t.shadowColor,e.shadowOffsetX=t.shadowOffsetX,e.shadowOffsetY=t.shadowOffsetY,e.strokeStyle=t.strokeStyle,e.globalAlpha=t.globalAlpha,e.font=t.font,e.textAlign=t.textAlign,e.textBaseline=t.textBaseline,e.arcScaleX_=t.arcScaleX_,e.arcScaleY_=t.arcScaleY_,e.lineScale_=t.lineScale_}function c(t){var e=t.indexOf("(",3),i=t.indexOf(")",e+1),r=t.substring(e+1,i).split(",");return(4!=r.length||"a"!=t.charAt(3))&&(r[3]=1),r}function u(t){return parseFloat(t)/100}function d(t,e,i){return Math.min(i,Math.max(e,t))}function f(t){var e,i,r,n,a,s;if(n=parseFloat(t[0])/360%360,0>n&&n++,a=d(u(t[1]),0,1),s=d(u(t[2]),0,1),0==a)e=i=r=s;else{var o=.5>s?s*(1+a):s+a-s*a,l=2*s-o;e=p(l,o,n+1/3),i=p(l,o,n),r=p(l,o,n-1/3)}return"#"+H[Math.floor(255*e)]+H[Math.floor(255*i)]+H[Math.floor(255*r)]}function p(t,e,i){return 0>i&&i++,i>1&&i--,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+(e-t)*(2/3-i)*6:t}function _(t){if(t in j)return j[t];var e,i=1;if(t=String(t),"#"==t.charAt(0))e=t;else if(/^rgb/.test(t)){for(var r,n=c(t),e="#",a=0;3>a;a++)r=-1!=n[a].indexOf("%")?Math.floor(255*u(n[a])):+n[a],e+=H[d(r,0,255)];i=+n[3]}else if(/^hsl/.test(t)){var n=c(t);e=f(n),i=n[3]}else e=V[t]||t;return j[t]={color:e,alpha:i}}function g(t){if(U[t])return U[t];var e=document.createElement("div"),i=e.style;try{i.font=t}catch(r){}return U[t]={style:i.fontStyle||G.style,variant:i.fontVariant||G.variant,weight:i.fontWeight||G.weight,size:i.fontSize||G.size,family:i.fontFamily||G.family}}function m(t,e){var i={};for(var r in t)i[r]=t[r];var n=parseFloat(e.currentStyle.fontSize),a=parseFloat(t.size);return i.size="number"==typeof t.size?t.size:-1!=t.size.indexOf("px")?a:-1!=t.size.indexOf("em")?n*a:-1!=t.size.indexOf("%")?n/100*a:-1!=t.size.indexOf("pt")?a/.75:n,i.size*=.981,i}function y(t){return t.style+" "+t.variant+" "+t.weight+" "+t.size+"px "+t.family}function F(t){return J[t]||"square"}function x(t){this.m_=o(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*N,this.globalAlpha=1,this.font="10px sans-serif",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=t;var e="width:"+t.clientWidth+"px;height:"+t.clientHeight+"px;overflow:hidden;position:absolute",i=t.ownerDocument.createElement("div");i.style.cssText=e,t.appendChild(i);var r=i.cloneNode(!1);r.style.backgroundColor="red",r.style.filter="alpha(opacity=0)",t.appendChild(r),this.element_=i,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function v(t,e,i,r){t.currentPath_.push({type:"bezierCurveTo",cp1x:e.x,cp1y:e.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),t.currentX_=r.x,t.currentY_=r.y}function E(t,e){var i=_(t.strokeStyle),r=i.color,n=i.alpha*t.globalAlpha,a=t.lineScale_*t.lineWidth;1>a&&(n*=a),e.push("<g_vml_:stroke",' opacity="',n,'"',' joinstyle="',t.lineJoin,'"',' miterlimit="',t.miterLimit,'"',' endcap="',F(t.lineCap),'"',' weight="',a,'px"',' color="',r,'" />')}function A(t,e,i,r){var n=t.fillStyle,a=t.arcScaleX_,s=t.arcScaleY_,o=r.x-i.x,l=r.y-i.y;if(n instanceof D){var h=0,c={x:0,y:0},u=0,d=1;if("gradient"==n.type_){var f=n.x0_/a,p=n.y0_/s,g=n.x1_/a,m=n.y1_/s,y=w(t,f,p),F=w(t,g,m),x=F.x-y.x,v=F.y-y.y;h=180*Math.atan2(x,v)/Math.PI,0>h&&(h+=360),1e-6>h&&(h=0)}else{var y=w(t,n.x0_,n.y0_);c={x:(y.x-i.x)/o,y:(y.y-i.y)/l},o/=a*N,l/=s*N;var E=B.max(o,l);u=2*n.r0_/E,d=2*n.r1_/E-u}var A=n.colors_;A.sort(function(t,e){return t.offset-e.offset});for(var b=A.length,C=A[0].color,k=A[b-1].color,T=A[0].alpha*t.globalAlpha,R=A[b-1].alpha*t.globalAlpha,M=[],I=0;b>I;I++){var O=A[I];M.push(O.offset*d+u+" "+O.color)}e.push('<g_vml_:fill type="',n.type_,'"',' method="none" focus="100%"',' color="',C,'"',' color2="',k,'"',' colors="',M.join(","),'"',' opacity="',R,'"',' g_o_:opacity2="',T,'"',' angle="',h,'"',' focusposition="',c.x,",",c.y,'" />')}else if(n instanceof S){if(o&&l){var P=-i.x,z=-i.y;e.push("<g_vml_:fill",' position="',P/o*a*a,",",z/l*s*s,'"',' type="tile"',' src="',n.src_,'" />')}}else{var L=_(t.fillStyle),Y=L.color,X=L.alpha*t.globalAlpha;e.push('<g_vml_:fill color="',Y,'" opacity="',X,'" />')}}function w(t,e,i){var r=t.m_;return{x:N*(e*r[0][0]+i*r[1][0]+r[2][0])-L,y:N*(e*r[0][1]+i*r[1][1]+r[2][1])-L}}function b(t){return isFinite(t[0][0])&&isFinite(t[0][1])&&isFinite(t[1][0])&&isFinite(t[1][1])&&isFinite(t[2][0])&&isFinite(t[2][1])}function C(t,e,i){if(b(e)&&(t.m_=e,i)){var r=e[0][0]*e[1][1]-e[0][1]*e[1][0];t.lineScale_=z(P(r))}}function D(t){this.type_=t,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function S(t,e){switch(T(t),e){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=e;break;default:k("SYNTAX_ERR")}this.src_=t.src,this.width_=t.width,this.height_=t.height}function k(t){throw new R(t)}function T(t){t&&1==t.nodeType&&"IMG"==t.tagName||k("TYPE_MISMATCH_ERR"),"complete"!=t.readyState&&k("INVALID_STATE_ERR")}function R(t){this.code=this[t],this.message=t+": DOM Exception "+this.code}var B=Math,M=B.round,I=B.sin,O=B.cos,P=B.abs,z=B.sqrt,N=10,L=N/2,Y=(+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1],Array.prototype.slice);n(document);var X={init:function(t){var i=t||document;i.createElement("canvas"),i.attachEvent("onreadystatechange",e(this.init_,this,i))},init_:function(t){for(var e=t.getElementsByTagName("canvas"),i=0;i<e.length;i++)this.initElement(e[i])},initElement:function(e){if(!e.getContext){e.getContext=t,n(e.ownerDocument),e.innerHTML="",e.attachEvent("onpropertychange",a),e.attachEvent("onresize",s);var i=e.attributes;i.width&&i.width.specified?e.style.width=i.width.nodeValue+"px":e.width=e.clientWidth,i.height&&i.height.specified?e.style.height=i.height.nodeValue+"px":e.height=e.clientHeight}return e}};X.init();for(var H=[],W=0;16>W;W++)for(var q=0;16>q;q++)H[16*W+q]=W.toString(16)+q.toString(16);var V={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},j={},G={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"},U={},J={butt:"flat",round:"round"},Z=x.prototype;Z.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},Z.beginPath=function(){this.currentPath_=[]},Z.moveTo=function(t,e){var i=w(this,t,e);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},Z.lineTo=function(t,e){var i=w(this,t,e);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},Z.bezierCurveTo=function(t,e,i,r,n,a){var s=w(this,n,a),o=w(this,t,e),l=w(this,i,r);v(this,o,l,s)},Z.quadraticCurveTo=function(t,e,i,r){var n=w(this,t,e),a=w(this,i,r),s={x:this.currentX_+2/3*(n.x-this.currentX_),y:this.currentY_+2/3*(n.y-this.currentY_)},o={x:s.x+(a.x-this.currentX_)/3,y:s.y+(a.y-this.currentY_)/3};v(this,s,o,a)},Z.arc=function(t,e,i,r,n,a){i*=N;var s=a?"at":"wa",o=t+O(r)*i-L,l=e+I(r)*i-L,h=t+O(n)*i-L,c=e+I(n)*i-L;o!=h||a||(o+=.125);var u=w(this,t,e),d=w(this,o,l),f=w(this,h,c);this.currentPath_.push({type:s,x:u.x,y:u.y,radius:i,xStart:d.x,yStart:d.y,xEnd:f.x,yEnd:f.y})},Z.rect=function(t,e,i,r){this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath()},Z.strokeRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.stroke(),this.currentPath_=n},Z.fillRect=function(t,e,i,r){var n=this.currentPath_;this.beginPath(),this.moveTo(t,e),this.lineTo(t+i,e),this.lineTo(t+i,e+r),this.lineTo(t,e+r),this.closePath(),this.fill(),this.currentPath_=n},Z.createLinearGradient=function(t,e,i,r){var n=new D("gradient");return n.x0_=t,n.y0_=e,n.x1_=i,n.y1_=r,n},Z.createRadialGradient=function(t,e,i,r,n,a){var s=new D("gradientradial");return s.x0_=t,s.y0_=e,s.r0_=i,s.x1_=r,s.y1_=n,s.r1_=a,s},Z.drawImage=function(t){var e,i,r,n,a,s,o,l,h=t.runtimeStyle.width,c=t.runtimeStyle.height;t.runtimeStyle.width="auto",t.runtimeStyle.height="auto";var u=t.width,d=t.height;if(t.runtimeStyle.width=h,t.runtimeStyle.height=c,3==arguments.length)e=arguments[1],i=arguments[2],a=s=0,o=r=u,l=n=d;else if(5==arguments.length)e=arguments[1],i=arguments[2],r=arguments[3],n=arguments[4],a=s=0,o=u,l=d;else{if(9!=arguments.length)throw Error("Invalid number of arguments");a=arguments[1],s=arguments[2],o=arguments[3],l=arguments[4],e=arguments[5],i=arguments[6],r=arguments[7],n=arguments[8]}var f=w(this,e,i),p=[],_=10,g=10;if(p.push(" <g_vml_:group",' coordsize="',N*_,",",N*g,'"',' coordorigin="0,0"',' style="width:',_,"px;height:",g,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var m=[];m.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",M(f.x/N),",","Dy=",M(f.y/N),"");var y=f,F=w(this,e+r,i),x=w(this,e,i+n),v=w(this,e+r,i+n);y.x=B.max(y.x,F.x,x.x,v.x),y.y=B.max(y.y,F.y,x.y,v.y),p.push("padding:0 ",M(y.x/N),"px ",M(y.y/N),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",m.join(""),", sizingmethod='clip');")}else p.push("top:",M(f.y/N),"px;left:",M(f.x/N),"px;");p.push(' ">','<g_vml_:image src="',t.src,'"',' style="width:',N*r,"px;"," height:",N*n,'px"',' cropleft="',a/u,'"',' croptop="',s/d,'"',' cropright="',(u-a-o)/u,'"',' cropbottom="',(d-s-l)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))},Z.stroke=function(t){var e=[],i=10,r=10;e.push("<g_vml_:shape",' filled="',!!t,'"',' style="position:absolute;width:',i,"px;height:",r,'px;"',' coordorigin="0,0"',' coordsize="',N*i,",",N*r,'"',' stroked="',!t,'"',' path="');for(var n={x:null,y:null},a={x:null,y:null},s=0;s<this.currentPath_.length;s++){var o,l=this.currentPath_[s];switch(l.type){case"moveTo":o=l,e.push(" m ",M(l.x),",",M(l.y));break;case"lineTo":e.push(" l ",M(l.x),",",M(l.y));break;case"close":e.push(" x "),l=null;break;case"bezierCurveTo":e.push(" c ",M(l.cp1x),",",M(l.cp1y),",",M(l.cp2x),",",M(l.cp2y),",",M(l.x),",",M(l.y));break;case"at":case"wa":e.push(" ",l.type," ",M(l.x-this.arcScaleX_*l.radius),",",M(l.y-this.arcScaleY_*l.radius)," ",M(l.x+this.arcScaleX_*l.radius),",",M(l.y+this.arcScaleY_*l.radius)," ",M(l.xStart),",",M(l.yStart)," ",M(l.xEnd),",",M(l.yEnd))}l&&((null==n.x||l.x<n.x)&&(n.x=l.x),(null==a.x||l.x>a.x)&&(a.x=l.x),(null==n.y||l.y<n.y)&&(n.y=l.y),(null==a.y||l.y>a.y)&&(a.y=l.y))}e.push(' ">'),t?A(this,e,n,a):E(this,e),e.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",e.join(""))},Z.fill=function(){this.stroke(!0)},Z.closePath=function(){this.currentPath_.push({type:"close"})},Z.save=function(){var t={};h(this,t),this.aStack_.push(t),this.mStack_.push(this.m_),this.m_=l(o(),this.m_)},Z.restore=function(){this.aStack_.length&&(h(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},Z.translate=function(t,e){var i=[[1,0,0],[0,1,0],[t,e,1]];C(this,l(i,this.m_),!1)},Z.rotate=function(t){var e=O(t),i=I(t),r=[[e,i,0],[-i,e,0],[0,0,1]];C(this,l(r,this.m_),!1)},Z.scale=function(t,e){this.arcScaleX_*=t,this.arcScaleY_*=e;var i=[[t,0,0],[0,e,0],[0,0,1]];C(this,l(i,this.m_),!0)},Z.transform=function(t,e,i,r,n,a){var s=[[t,e,0],[i,r,0],[n,a,1]];C(this,l(s,this.m_),!0)},Z.setTransform=function(t,e,i,r,n,a){var s=[[t,e,0],[i,r,0],[n,a,1]];C(this,s,!0)},Z.drawText_=function(t,e,r,n,a){var s=this.m_,o=1e3,l=0,h=o,c={x:0,y:0},u=[],d=m(g(this.font),this.element_),f=y(d),p=this.element_.currentStyle,_=this.textAlign.toLowerCase();switch(_){case"left":case"center":case"right":break;case"end":_="ltr"==p.direction?"right":"left";break;case"start":_="rtl"==p.direction?"right":"left";break;default:_="left"}switch(this.textBaseline){case"hanging":case"top":c.y=d.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":c.y=-d.size/2.25}switch(_){case"right":l=o,h=.05;break;case"center":l=h=o/2}var F=w(this,e+c.x,r+c.y);u.push('<g_vml_:line from="',-l,' 0" to="',h,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!a,'" stroked="',!!a,'" style="position:absolute;width:1px;height:1px;">'),a?E(this,u):A(this,u,{x:-l,y:0},{x:h,y:d.size});var x=s[0][0].toFixed(3)+","+s[1][0].toFixed(3)+","+s[0][1].toFixed(3)+","+s[1][1].toFixed(3)+",0,0",v=M(F.x/N)+","+M(F.y/N);u.push('<g_vml_:skew on="t" matrix="',x,'" ',' offset="',v,'" origin="',l,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',i(t),'" style="v-text-align:',_,";font:",i(f),'" /></g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",u.join(""))},Z.fillText=function(t,e,i,r){this.drawText_(t,e,i,r,!1)},Z.strokeText=function(t,e,i,r){this.drawText_(t,e,i,r,!0)},Z.measureText=function(t){if(!this.textMeasureEl_){var e='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",e),this.textMeasureEl_=this.element_.lastChild}var i=this.element_.ownerDocument;return this.textMeasureEl_.innerHTML="",this.textMeasureEl_.style.font=this.font,this.textMeasureEl_.appendChild(i.createTextNode(t)),{width:this.textMeasureEl_.offsetWidth}},Z.clip=function(){},Z.arcTo=function(){},Z.createPattern=function(t,e){return new S(t,e)},D.prototype.addColorStop=function(t,e){e=_(e),this.colors_.push({offset:t,color:e.color,alpha:e.alpha})};var Q=R.prototype=new Error;Q.INDEX_SIZE_ERR=1,Q.DOMSTRING_SIZE_ERR=2,Q.HIERARCHY_REQUEST_ERR=3,Q.WRONG_DOCUMENT_ERR=4,Q.INVALID_CHARACTER_ERR=5,Q.NO_DATA_ALLOWED_ERR=6,Q.NO_MODIFICATION_ALLOWED_ERR=7,Q.NOT_FOUND_ERR=8,Q.NOT_SUPPORTED_ERR=9,Q.INUSE_ATTRIBUTE_ERR=10,Q.INVALID_STATE_ERR=11,Q.SYNTAX_ERR=12,Q.INVALID_MODIFICATION_ERR=13,Q.NAMESPACE_ERR=14,Q.INVALID_ACCESS_ERR=15,Q.VALIDATION_ERR=16,Q.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=X,CanvasRenderingContext2D=x,CanvasGradient=D,CanvasPattern=S,DOMException=R}();
//# sourceMappingURL=../../../gallery/excanvas/2.0.0/excanvas.js.map