var Je=Object.defineProperty;var Qe=(f,i,s)=>i in f?Je(f,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):f[i]=s;var I=(f,i,s)=>(Qe(f,typeof i!="symbol"?i+"":i,s),s),Ge=(f,i,s)=>{if(!i.has(f))throw TypeError("Cannot "+s)};var t=(f,i,s)=>(Ge(f,i,"read from private field"),s?s.call(f):i.get(f)),h=(f,i,s)=>{if(i.has(f))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(f):i.set(f,s)},y=(f,i,s,g)=>(Ge(f,i,"write to private field"),g?g.call(f,s):i.set(f,s),s),Le=(f,i,s,g)=>({set _(a){y(f,i,a,s)},get _(){return t(f,i,g)}});(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))g(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&g(v)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function g(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const D={fps:30,canvas:{width:400,height:300},video:{width:400,height:300}},he=({context:f})=>({rectangle:({color:i,x:s,y:g,height:a,width:o})=>{f.beginPath(),f.fillStyle=i,f.fillRect(s,g,o,a)},image:({x:i,y:s,height:g,width:a,image:o,destinationX:v,destinationY:p,destinationWidth:M,destinationHeight:m})=>{f.imageSmoothingEnabled=!1,f.drawImage(o,i,s,a,g,v,p,M,m)},text:({color:i,x:s,y:g,text:a,fontSize:o})=>{f.font=`${o} Arial`,f.fillStyle=i,f.fillText(a,s,g)},point:({color:i,radius:s,x:g,y:a})=>{f.beginPath(),f.arc(g,a,s,0,2*Math.PI),f.fillStyle=i,f.fill()}});var V,j,et,X,it,Zt,rt,$t,Pt,vt,wt,dt,kt,nt,te,at,me,ye,ve,we,Ae;class Ke{constructor({context:i,car:s,track:g}){h(this,V,void 0);h(this,j,void 0);h(this,et,void 0);h(this,X,{height:D.canvas.height*.4,color:"#0000A0"});h(this,it,{color:"#020080",size:{min:t(this,X).height*.3,max:t(this,X).height*.9}});h(this,Zt,new Array(D.canvas.height/1.5).fill(""));h(this,rt,Math.round((D.canvas.height-t(this,X).height)/t(this,Zt).length));h(this,$t,new Array(D.canvas.width).fill(""));h(this,Pt,D.canvas.width/t(this,$t).length);h(this,vt,{color:"#555555",width:D.canvas.width*1/2});h(this,wt,{colors:["#058900","#076C02"],frequency:60});h(this,dt,{colors:["#940000","#CECECE"],width:t(this,vt).width*.1,frequency:60});h(this,kt,D.canvas.width);h(this,nt,0);h(this,te,1);h(this,at,0);h(this,me,.4);h(this,ye,i=>{if(!t(this,et)||!t(this,j)||i<=t(this,et).coordinates[t(this,nt)].distance)return;let s=t(this,nt)+1;s>t(this,et).coordinates.length-1&&(s=0,Le(this,te)._++,t(this,j).positionOnTrack=0),y(this,nt,s)});h(this,ve,(i,s)=>{if(!t(this,j))return;const g=Math.abs(i-s)>=.9;t(this,j).isOutOfTrack=g});h(this,we,i=>{let s=0,g=-1;const o=1-g;return s=(i-g)*100/o/100,s});h(this,Ae,i=>{const s=t(this,X).height*.003,g=t(this,we).call(this,i);let a=t(this,it).size.min+g*t(this,X).height,o="up",v=0;t(this,$t).map((p,M)=>{!t(this,V)||(o==="down"?a+=s:a-=s,a>t(this,it).size.max&&(a=t(this,it).size.max,o="up"),a<=t(this,it).size.min&&(a=t(this,it).size.min,o="down"),t(this,V).rectangle({color:t(this,X).color,x:v,y:0,width:t(this,Pt),height:a}),t(this,V).rectangle({color:t(this,it).color,x:v,y:a,width:t(this,Pt),height:t(this,X).height-a}),v=M+t(this,Pt))})});I(this,"render",({deltaTime:i})=>{if(!t(this,j))return;const g=t(this,j).speed/100,a=t(this,j).positionOnTrack,o=t(this,j).position,v=t(this,nt)===0?"#999":t(this,vt).color;t(this,ye).call(this,a),t(this,Ae).call(this,t(this,at)),t(this,Zt).map((p,M)=>{if(!t(this,V)||!t(this,j)||!t(this,et))return;const m=t(this,X).height+M*t(this,rt);let H=M/(D.canvas.height/2);H=.04+H*.8;let Rt=t(this,et).coordinates[t(this,nt)].curvature;Rt=Rt*t(this,me);const le=Rt-t(this,at);y(this,at,t(this,at)+le*i*g/1200),t(this,ve).call(this,o,t(this,at));const ce=.5+t(this,at)*Math.pow(1-H,3),pt=t(this,kt)*ce,ue=t(this,vt).width*H,K={...t(this,vt),x:pt-ue,width:ue,color:v},ht=t(this,dt).width*H,Z={...t(this,dt),color:Math.sin(t(this,dt).frequency*Math.pow(1-H,2)+a*2)>0?t(this,dt).colors[0]:t(this,dt).colors[1],left:{x:pt-K.width-ht},right:{x:pt+K.width},width:ht},Re=t(this,kt)/2-ht,Ee=pt-K.width-ht,mt={...t(this,wt),width:Re,color:Math.sin(t(this,wt).frequency*Math.pow(1-H,2)+a*2)>0?t(this,wt).colors[0]:t(this,wt).colors[1],right:{x:pt+K.width+ht},left:{width:Ee}};t(this,V).rectangle({color:mt.color,x:0,y:m,width:mt.left.width,height:t(this,rt)}),t(this,V).rectangle({color:Z.color,x:Z.left.x,y:m,width:Z.width,height:t(this,rt)}),t(this,V).rectangle({color:K.color,x:K.x,y:m,width:K.width*2,height:t(this,rt)}),t(this,V).rectangle({color:mt.color,x:mt.right.x,y:m,width:t(this,kt)-mt.right.x,height:t(this,rt)}),t(this,V).rectangle({color:Z.color,x:Z.right.x,y:m,width:Z.width,height:t(this,rt)})})});y(this,V,he({context:i})),y(this,j,s),y(this,et,g)}get trackSection(){return t(this,nt)}get curvature(){return t(this,at)}get lap(){return t(this,te)}}V=new WeakMap,j=new WeakMap,et=new WeakMap,X=new WeakMap,it=new WeakMap,Zt=new WeakMap,rt=new WeakMap,$t=new WeakMap,Pt=new WeakMap,vt=new WeakMap,wt=new WeakMap,dt=new WeakMap,kt=new WeakMap,nt=new WeakMap,te=new WeakMap,at=new WeakMap,me=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap,Ae=new WeakMap;const Ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAABmBAMAAACO8FTTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAAAAAAuLjYmJi42Nj46Oj4+Pj4SEhoaGiIeBgYyMjoCAgIPSVNpwAAAAx0Uk5TAP//////////////CcRQJgAAA49JREFUeJzdl79T2zAUx+PSPwBF+cE1SyOHoVslBcIxgWMzF4g9N4V4xuQ4ekwN7R3M3Rh7DNx1Y+afq57107HcrR14gxMrXz/Jenqf+6bV+p8REK6DbPp+Hx8jHd2pR9HJ+t8530NwKRaH9QTZ/Ou9jrveopail/evbRT5vPLrRhwnae5GOovjj1YwDnk92NQKIorqgUd2hikihAydNbTFPRqbOd6EMDCEx8T08FHes/da8FbOAI+KueFDznFgMtAPD8N9dx34sf3wE5sMgRQ4a5ACs1mB5x0grGBW3SW1V4kVxP6wglAsSwwcqtQd8V0smVlBlMaRs1WwC6M4HbkZMAGBqjYICK1kiEJUFJiqMmHa7yM2cjJEnKPVCtPfMjDd2kKcOwJR7v7TE9Z7ienNTSHKbQWY8H6/j81RoEVRcEKdncRkMplws4V8uVyKVVrBixy/LuBciou8fXEEEM8B2oSqiMvmoByxgvIe2SPYQuUT9uhXa2fq23p9ERALGDb0CDBPbGPMaD3BUBJmtSUy7OFFTdFBuw5hVmuE2QjRMcrnTmehozNHsZFROOlp5rbNIo2TUyXYyU9x5EEM31aA6GT5eejrTXYgBe04O6fQCw7nCmgTDYhLcnRCoVfgqV6ez+ET7jUgblk6LVNChiXnE8hQDqg10HZ3Crx4dOffB6goweUQSYG7Blfwhfb+jphL2k2TrI6YxeyTFDDabUCMes1begUsHosRnVt8FS+mX/OSXsXbs5jYrYJtInFyojJg+kNkYDC4pcoN30OTAdFxPCJAFa4IQDkAh0QqQ4BYHPKSKu8kYn6VwOFM4x7dsoiXVDGAAOBYBgVLzsKSKiYAOGxoBIVIFwqqmHONBXBYaBrewFywpTyRqpgvViARIzhRogIuFcQogQMMtIaYwTpigsFrRYzrYRjxMMb1MDtTXnMgwc5ZCRfwMHe9Gaql6ObIAOa+yGlnLQXOD92+Eg18jEP940bqczAI7RrC+B0MzhbqTDY4mDyfqXU0OJh8FilBg4PJInIhBXKGmoNJTtg3JfA7mKRtEOR3MIdIT9GAlx5in6WgwcGkiKkMDXhJkG7eBgeTFPotGhyMEFzoDF4HE6/0qWlwMDHVDoP5HYyooSp3x+tgIrbShwp5HQznhT5RXgcjpjWCwbMsZ9XBON1fGpRnZB2M8jRGIGni8CMYVAUlwwYVj1OO+P5D/Iv4A8FL0be3qqe0AAAAAElFTkSuQmCC",$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAiBAMAAAAaORypAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA9QTFRFAAAAyMjomJi4aGiISEho2ANYBgAAAAV0Uk5TAP////8c0CZSAAAAe0lEQVR4nO2MwRXCIBBEg1KAJBZgggUkO1sAyvRfk7t6MZGTZz77Hsv8eQxDp9NpkPLaFmdJfoURj0vLhytmFyFrWlqFJVV5F8AR/PXETHjhBGZ9Tke/3asQN9tiJrgd/yAmi6X4XtVO1vLtYxVP9fNgpM2+wEKbXfYvLy4MEXjodMHGAAAAAElFTkSuQmCC";var At,bt,ee,ie,re,xt,W,Q,ne,It,P,Mt,be,xe,ot,Lt,Vt,ft,Dt,Me;class ti{constructor({context:i}){h(this,At,void 0);h(this,bt,D.canvas.width*.25);h(this,ee,D.canvas.height*.2);h(this,ie,D.canvas.height-D.canvas.height*.22);h(this,re,.5);h(this,xt,2);h(this,W,0);h(this,Q,0);h(this,ne,0);h(this,It,0);h(this,P,0);h(this,Mt,100);h(this,be,D.canvas.width/2);h(this,xe,D.canvas.width-t(this,bt));h(this,ot,!1);h(this,Lt,null);h(this,Vt,null);h(this,ft,{width:63,height:34,idle:{x:0,y:0},left:{x:0,y:34},right:{x:0,y:68}});h(this,Dt,"idle");I(this,"turnLeft",()=>{if(t(this,P)<=0)return;y(this,Dt,"left");let i=t(this,Q)-t(this,re)*t(this,P)/1e3;i<-1&&(i=-1),y(this,Q,i)});I(this,"turnRight",()=>{if(t(this,P)<=0)return;y(this,Dt,"right");let i=t(this,Q)+t(this,re)*t(this,P)/1e3;i>1&&(i=1),y(this,Q,i)});I(this,"setPosition",i=>{const s=D.canvas.width/2;let g=i,a="left";g>s&&(g-=s,a="right");let o=100*g/s/100;o<-1&&(o=-1),a==="left"&&(o=(1-o)*-1);const v=o-t(this,Q);y(this,Q,t(this,Q)+v)});I(this,"accelerate",i=>{let s=t(this,Mt);if(t(this,ot)&&(s=t(this,Mt)/3),t(this,ot)&&t(this,P)>s)return this.slowDown(i);t(this,xt),t(this,ot);let g=t(this,P)+t(this,xt)*i;g>=t(this,Mt)&&(g=t(this,Mt)),this.speed=g});I(this,"slowDown",i=>{let s=0;const g=t(this,xt)*2;s=t(this,P)-g*i,s<=0&&(s=0),this.speed=s});I(this,"break",i=>{let s=t(this,P)-t(this,xt)*5*i;s<=0&&(s=0),this.speed=s});h(this,Me,()=>t(this,ft)[t(this,Dt)]);I(this,"render",({deltaTime:i,levelCurvature:s})=>{if(!t(this,At)||!t(this,Lt)||!t(this,Vt))return;y(this,W,t(this,Q)-s*3),t(this,W)<-1&&y(this,W,-1),t(this,W)>1&&y(this,W,1);let g=t(this,be)+t(this,xe)*t(this,W)/2-t(this,bt)/2;const a=t(this,Me).call(this);t(this,At).image({image:t(this,Lt),height:t(this,ft).height,width:t(this,ft).width,y:a.y,x:a.x,destinationHeight:t(this,ee),destinationWidth:t(this,bt),destinationX:g,destinationY:t(this,ie)}),t(this,ot)&&t(this,At).image({image:t(this,Vt),height:t(this,ft).height,width:t(this,ft).width,y:a.y,x:a.x,destinationHeight:t(this,ee),destinationWidth:t(this,bt),destinationX:g,destinationY:t(this,ie)});const o=t(this,P)/30*i;t(this,P)>0&&y(this,ne,t(this,ne)+o),y(this,It,t(this,It)+o)});y(this,At,he({context:i}));const s=new Image;s.src=Ze,s.onload=()=>{y(this,Lt,s)};const g=new Image;g.src=$e,g.onload=()=>{y(this,Vt,g)}}get speed(){return t(this,P)}set speed(i){y(this,P,i)}get position(){return t(this,W)}set position(i){y(this,W,i)}get positionOnTrack(){return t(this,It)}set positionOnTrack(i){y(this,It,i)}get distanceTraveled(){return t(this,ne)}get isOutOfTrack(){return t(this,ot)}set isOutOfTrack(i){y(this,ot,i)}set carDirection(i){y(this,Dt,i)}}At=new WeakMap,bt=new WeakMap,ee=new WeakMap,ie=new WeakMap,re=new WeakMap,xt=new WeakMap,W=new WeakMap,Q=new WeakMap,ne=new WeakMap,It=new WeakMap,P=new WeakMap,Mt=new WeakMap,be=new WeakMap,xe=new WeakMap,ot=new WeakMap,Lt=new WeakMap,Vt=new WeakMap,ft=new WeakMap,Dt=new WeakMap,Me=new WeakMap;var z,st,Ft,jt,Ht,Ut,De;class ei{constructor({context:i,car:s,level:g,canvasWidth:a}){h(this,z,void 0);h(this,st,void 0);h(this,Ft,void 0);h(this,jt,0);h(this,Ht,!0);h(this,Ut,0);h(this,De,3);I(this,"render",({deltaTime:i})=>{!t(this,z)||!t(this,st)||!t(this,Ft)||(t(this,z).text({color:"#FFFFFF",text:`Distance Traveled: ${Math.floor(t(this,st).distanceTraveled)}`,y:20,x:10,fontSize:"12px"}),t(this,z).text({color:"#FFFFFF",text:`Position on Level: ${Math.floor(t(this,st).positionOnTrack)}`,y:40,x:10,fontSize:"12px"}),t(this,z).text({color:"#FFFFFF",text:`Speed: ${Math.floor(t(this,st).speed)}`,y:60,x:10,fontSize:"12px"}),t(this,z).text({color:"#FFFFFF",text:`Track section: ${Math.floor(t(this,Ft).trackSection)}`,y:80,x:10,fontSize:"12px"}),t(this,z).text({color:"#FFFFFF",text:`Lap: ${Math.floor(t(this,Ft).lap)}`,y:100,x:10,fontSize:"12px"}),t(this,st).distanceTraveled<=10&&(t(this,Ht)&&(t(this,z).text({color:"#FFFFFF",text:"Use your hands to move!",y:150,x:t(this,jt)/2-110,fontSize:"20px"}),t(this,z).text({color:"#FFFFFF",text:"Close your hands to accelerate!",y:190,x:t(this,jt)/2-140,fontSize:"20px"})),y(this,Ut,t(this,Ut)+i),t(this,Ut)>t(this,De)&&(y(this,Ht,!t(this,Ht)),y(this,Ut,0))))});y(this,z,he({context:i})),y(this,st,s),y(this,Ft,g),y(this,jt,a)}}z=new WeakMap,st=new WeakMap,Ft=new WeakMap,jt=new WeakMap,Ht=new WeakMap,Ut=new WeakMap,De=new WeakMap;const ii={thumb:"rgba(255, 0, 0, 0.2)",index:"rgba(0, 0, 255, 0.2)",middle:"rgba(255, 255, 0, 0.2)",ring:"rgba(0, 255, 0, 0.2)",pinky:"rgba(255, 0, 255, 0.2)",wrist:"rgba(255, 255, 255, 0.2)"},{GestureDescription:ri,Finger:Et,FingerCurl:pe}=window.fp,Kt=new ri("accelerate");Kt.addCurl(Et.Thumb,pe.HalfCurl,1);Kt.addCurl(Et.Thumb,pe.NoCurl,.5);for(let f of[Et.Index,Et.Middle,Et.Ring,Et.Pinky])Kt.addCurl(f,pe.FullCurl,1),Kt.addCurl(f,pe.HalfCurl,.9);const ni=[Kt];var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oi(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Be={exports:{}};(function(f,i){(function(s,g){f.exports=g()})(typeof self<"u"?self:ai,function(){return function(s){var g={};function a(o){if(g[o])return g[o].exports;var v=g[o]={i:o,l:!1,exports:{}};return s[o].call(v.exports,v,v.exports,a),v.l=!0,v.exports}return a.m=s,a.c=g,a.d=function(o,v,p){a.o(o,v)||Object.defineProperty(o,v,{enumerable:!0,get:p})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,v){if(1&v&&(o=a(o)),8&v||4&v&&typeof o=="object"&&o&&o.__esModule)return o;var p=Object.create(null);if(a.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:o}),2&v&&typeof o!="string")for(var M in o)a.d(p,M,function(m){return o[m]}.bind(null,M));return p},a.n=function(o){var v=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(v,"a",v),v},a.o=function(o,v){return Object.prototype.hasOwnProperty.call(o,v)},a.p="",a(a.s=0)}([function(s,g,a){a.r(g);var o={};function v(r){return(v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(r)}a.r(o),a.d(o,"VictoryGesture",function(){return qe}),a.d(o,"ThumbsUpGesture",function(){return Ye});var p={Thumb:0,Index:1,Middle:2,Ring:3,Pinky:4,all:[0,1,2,3,4],nameMapping:{0:"Thumb",1:"Index",2:"Middle",3:"Ring",4:"Pinky"},pointsMapping:{0:[[0,1],[1,2],[2,3],[3,4]],1:[[0,5],[5,6],[6,7],[7,8]],2:[[0,9],[9,10],[10,11],[11,12]],3:[[0,13],[13,14],[14,15],[15,16]],4:[[0,17],[17,18],[18,19],[19,20]]},getName:function(r){return v(this.nameMapping[r])!==void 0&&this.nameMapping[r]},getPoints:function(r){return v(this.pointsMapping[r])!==void 0&&this.pointsMapping[r]}},M={NoCurl:0,HalfCurl:1,FullCurl:2,nameMapping:{0:"No Curl",1:"Half Curl",2:"Full Curl"},getName:function(r){return v(this.nameMapping[r])!==void 0&&this.nameMapping[r]}},m={VerticalUp:0,VerticalDown:1,HorizontalLeft:2,HorizontalRight:3,DiagonalUpRight:4,DiagonalUpLeft:5,DiagonalDownRight:6,DiagonalDownLeft:7,nameMapping:{0:"Vertical Up",1:"Vertical Down",2:"Horizontal Left",3:"Horizontal Right",4:"Diagonal Up Right",5:"Diagonal Up Left",6:"Diagonal Down Right",7:"Diagonal Down Left"},getName:function(r){return v(this.nameMapping[r])!==void 0&&this.nameMapping[r]}};function H(r,c){var n=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=function(l,x){if(!!l){if(typeof l=="string")return Rt(l,x);var b=Object.prototype.toString.call(l).slice(8,-1);if(b==="Object"&&l.constructor&&(b=l.constructor.name),b==="Map"||b==="Set")return Array.from(l);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return Rt(l,x)}}(r))||c&&r&&typeof r.length=="number"){n&&(r=n);var e=0,u=function(){};return{s:u,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(l){throw l},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,A=!0,w=!1;return{s:function(){n=n.call(r)},n:function(){var l=n.next();return A=l.done,l},e:function(l){w=!0,d=l},f:function(){try{A||n.return==null||n.return()}finally{if(w)throw d}}}}function Rt(r,c){(c==null||c>r.length)&&(c=r.length);for(var n=0,e=new Array(c);n<c;n++)e[n]=r[n];return e}function le(r,c){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);c&&(e=e.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),n.push.apply(n,e)}return n}function ce(r){for(var c=1;c<arguments.length;c++){var n=arguments[c]!=null?arguments[c]:{};c%2?le(Object(n),!0).forEach(function(e){pt(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function pt(r,c,n){return c in r?Object.defineProperty(r,c,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[c]=n,r}function ue(r,c){for(var n=0;n<c.length;n++){var e=c[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}var K=function(){function r(e){(function(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.options=ce(ce({},{HALF_CURL_START_LIMIT:60,NO_CURL_START_LIMIT:130,DISTANCE_VOTE_POWER:1.1,SINGLE_ANGLE_VOTE_POWER:.9,TOTAL_ANGLE_VOTE_POWER:1.6}),e)}var c,n;return c=r,(n=[{key:"estimate",value:function(e){var u,d=[],A=[],w=H(p.all);try{for(w.s();!(u=w.n()).done;){var l,x=u.value,b=p.getPoints(x),S=[],F=[],T=H(b);try{for(T.s();!(l=T.n()).done;){var E=l.value,C=e[E[0]],L=e[E[1]],R=this.getSlopes(C,L),U=R[0],q=R[1];S.push(U),F.push(q)}}catch(J){T.e(J)}finally{T.f()}d.push(S),A.push(F)}}catch(J){w.e(J)}finally{w.f()}var yt,lt=[],$=[],N=H(p.all);try{for(N.s();!(yt=N.n()).done;){var Y=yt.value,ct=Y==p.Thumb?1:0,tt=p.getPoints(Y),ut=e[tt[ct][0]],de=e[tt[ct+1][1]],fe=e[tt[3][1]],Qt=this.estimateFingerCurl(ut,de,fe),ge=this.calculateFingerDirection(ut,de,fe,d[Y].slice(ct));lt[Y]=Qt,$[Y]=ge}}catch(J){N.e(J)}finally{N.f()}return{curls:lt,directions:$}}},{key:"getSlopes",value:function(e,u){var d=this.calculateSlope(e[0],e[1],u[0],u[1]);return e.length==2?d:[d,this.calculateSlope(e[1],e[2],u[1],u[2])]}},{key:"angleOrientationAt",value:function(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,d=0,A=0,w=0;return e>=75&&e<=105?d=1*u:e>=25&&e<=155?A=1*u:w=1*u,[d,A,w]}},{key:"estimateFingerCurl",value:function(e,u,d){var A=e[0]-u[0],w=e[0]-d[0],l=u[0]-d[0],x=e[1]-u[1],b=e[1]-d[1],S=u[1]-d[1],F=e[2]-u[2],T=e[2]-d[2],E=u[2]-d[2],C=Math.sqrt(A*A+x*x+F*F),L=Math.sqrt(w*w+b*b+T*T),R=Math.sqrt(l*l+S*S+E*E),U=(R*R+C*C-L*L)/(2*R*C);U>1?U=1:U<-1&&(U=-1);var q=Math.acos(U);return(q=57.2958*q%180)>this.options.NO_CURL_START_LIMIT?M.NoCurl:q>this.options.HALF_CURL_START_LIMIT?M.HalfCurl:M.FullCurl}},{key:"estimateHorizontalDirection",value:function(e,u,d,A){return A==Math.abs(e)?e>0?m.HorizontalLeft:m.HorizontalRight:A==Math.abs(u)?u>0?m.HorizontalLeft:m.HorizontalRight:d>0?m.HorizontalLeft:m.HorizontalRight}},{key:"estimateVerticalDirection",value:function(e,u,d,A){return A==Math.abs(e)?e<0?m.VerticalDown:m.VerticalUp:A==Math.abs(u)?u<0?m.VerticalDown:m.VerticalUp:d<0?m.VerticalDown:m.VerticalUp}},{key:"estimateDiagonalDirection",value:function(e,u,d,A,w,l,x,b){var S=this.estimateVerticalDirection(e,u,d,A),F=this.estimateHorizontalDirection(w,l,x,b);return S==m.VerticalUp?F==m.HorizontalLeft?m.DiagonalUpLeft:m.DiagonalUpRight:F==m.HorizontalLeft?m.DiagonalDownLeft:m.DiagonalDownRight}},{key:"calculateFingerDirection",value:function(e,u,d,A){var w=e[0]-u[0],l=e[0]-d[0],x=u[0]-d[0],b=e[1]-u[1],S=e[1]-d[1],F=u[1]-d[1],T=Math.max(Math.abs(w),Math.abs(l),Math.abs(x)),E=Math.max(Math.abs(b),Math.abs(S),Math.abs(F)),C=0,L=0,R=0,U=E/(T+1e-5);U>1.5?C+=this.options.DISTANCE_VOTE_POWER:U>.66?L+=this.options.DISTANCE_VOTE_POWER:R+=this.options.DISTANCE_VOTE_POWER;var q=Math.sqrt(w*w+b*b),yt=Math.sqrt(l*l+S*S),lt=Math.sqrt(x*x+F*F),$=Math.max(q,yt,lt),N=e[0],Y=e[1],ct=d[0],tt=d[1];$==q?(ct=d[0],tt=d[1]):$==lt&&(N=u[0],Y=u[1]);var ut=[N,Y],de=[ct,tt],fe=this.getSlopes(ut,de),Qt=this.angleOrientationAt(fe,this.options.TOTAL_ANGLE_VOTE_POWER);C+=Qt[0],L+=Qt[1],R+=Qt[2];var ge,J=H(A);try{for(J.s();!(ge=J.n()).done;){var Xe=ge.value,Ie=this.angleOrientationAt(Xe,this.options.SINGLE_ANGLE_VOTE_POWER);C+=Ie[0],L+=Ie[1],R+=Ie[2]}}catch(We){J.e(We)}finally{J.f()}return C==Math.max(C,L,R)?this.estimateVerticalDirection(S,b,F,E):R==Math.max(L,R)?this.estimateHorizontalDirection(l,w,x,T):this.estimateDiagonalDirection(S,b,F,E,l,w,x,T)}},{key:"calculateSlope",value:function(e,u,d,A){var w=(u-A)/(e-d),l=180*Math.atan(w)/Math.PI;return l<=0?l=-l:l>0&&(l=180-l),l}}])&&ue(c.prototype,n),r}();function ht(r,c){var n=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=function(l,x){if(!!l){if(typeof l=="string")return Z(l,x);var b=Object.prototype.toString.call(l).slice(8,-1);if(b==="Object"&&l.constructor&&(b=l.constructor.name),b==="Map"||b==="Set")return Array.from(l);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return Z(l,x)}}(r))||c&&r&&typeof r.length=="number"){n&&(r=n);var e=0,u=function(){};return{s:u,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(l){throw l},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,A=!0,w=!1;return{s:function(){n=n.call(r)},n:function(){var l=n.next();return A=l.done,l},e:function(l){w=!0,d=l},f:function(){try{A||n.return==null||n.return()}finally{if(w)throw d}}}}function Z(r,c){(c==null||c>r.length)&&(c=r.length);for(var n=0,e=new Array(c);n<c;n++)e[n]=r[n];return e}function Re(r,c){if(!(r instanceof c))throw new TypeError("Cannot call a class as a function")}function Ee(r,c){for(var n=0;n<c.length;n++){var e=c[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}var mt=function(){function r(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Re(this,r),this.estimator=new K(u),this.gestures=e}var c,n;return c=r,(n=[{key:"estimate",value:function(e,u){var d,A=[],w=this.estimator.estimate(e),l=[],x=ht(p.all);try{for(x.s();!(d=x.n()).done;){var b=d.value;l.push([p.getName(b),M.getName(w.curls[b]),m.getName(w.directions[b])])}}catch(C){x.e(C)}finally{x.f()}var S,F=ht(this.gestures);try{for(F.s();!(S=F.n()).done;){var T=S.value,E=T.matchAgainst(w.curls,w.directions);E>=u&&A.push({name:T.name,score:E})}}catch(C){F.e(C)}finally{F.f()}return{poseData:l,gestures:A}}}])&&Ee(c.prototype,n),r}();function Ve(r,c){return function(n){if(Array.isArray(n))return n}(r)||function(n,e){var u=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(u!=null){var d,A,w=[],l=!0,x=!1;try{for(u=u.call(n);!(l=(d=u.next()).done)&&(w.push(d.value),!e||w.length!==e);l=!0);}catch(b){x=!0,A=b}finally{try{l||u.return==null||u.return()}finally{if(x)throw A}}return w}}(r,c)||He(r,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function je(r,c){var n=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=He(r))||c&&r&&typeof r.length=="number"){n&&(r=n);var e=0,u=function(){};return{s:u,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(l){throw l},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d,A=!0,w=!1;return{s:function(){n=n.call(r)},n:function(){var l=n.next();return A=l.done,l},e:function(l){w=!0,d=l},f:function(){try{A||n.return==null||n.return()}finally{if(w)throw d}}}}function He(r,c){if(r){if(typeof r=="string")return Ue(r,c);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ue(r,c):void 0}}function Ue(r,c){(c==null||c>r.length)&&(c=r.length);for(var n=0,e=new Array(c);n<c;n++)e[n]=r[n];return e}function _e(r,c){for(var n=0;n<c.length;n++){var e=c[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}var Pe=function(){function r(e){(function(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")})(this,r),this.name=e,this.curls={},this.directions={}}var c,n;return c=r,(n=[{key:"addCurl",value:function(e,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;this.curls[e]===void 0&&(this.curls[e]=[]),this.curls[e].push([u,d])}},{key:"addDirection",value:function(e,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;this.directions[e]===void 0&&(this.directions[e]=[]),this.directions[e].push([u,d])}},{key:"matchAgainst",value:function(e,u){var d=0,A=0;for(var w in e){var l=e[w],x=this.curls[w];if(x!==void 0){A++;var b,S=!1,F=0,T=je(x);try{for(T.s();!(b=T.n()).done;){var E=Ve(b.value,2),C=E[0],L=E[1];if(l==C){d+=L,F=Math.max(F,L),S=!0;break}}}catch(ut){T.e(ut)}finally{T.f()}S||(d-=F)}}for(var R in u){var U=u[R],q=this.directions[R];if(q!==void 0){A++;var yt,lt=!1,$=0,N=je(q);try{for(N.s();!(yt=N.n()).done;){var Y=Ve(yt.value,2),ct=Y[0],tt=Y[1];if(U==ct){d+=tt,$=Math.max($,tt),lt=!0;break}}}catch(ut){N.e(ut)}finally{N.f()}lt||(d-=$)}}return d/A*10}}])&&_e(c.prototype,n),r}(),O=new Pe("victory");O.addDirection(p.Thumb,m.VerticalUp,1),O.addDirection(p.Thumb,m.DiagonalUpLeft,1),O.addDirection(p.Thumb,m.DiagonalUpRight,1),O.addCurl(p.Index,M.NoCurl,1),O.addDirection(p.Index,m.VerticalUp,1),O.addDirection(p.Index,m.DiagonalUpLeft,1),O.addDirection(p.Index,m.DiagonalUpRight,1),O.addDirection(p.Index,m.HorizontalLeft,1),O.addDirection(p.Index,m.HorizontalRight,1),O.addCurl(p.Middle,M.NoCurl,1),O.addDirection(p.Middle,m.VerticalUp,1),O.addDirection(p.Middle,m.DiagonalUpLeft,1),O.addDirection(p.Middle,m.DiagonalUpRight,1),O.addDirection(p.Middle,m.HorizontalLeft,1),O.addDirection(p.Middle,m.HorizontalRight,1),O.addCurl(p.Ring,M.FullCurl,1),O.addCurl(p.Ring,M.HalfCurl,.9),O.addCurl(p.Pinky,M.FullCurl,1),O.addCurl(p.Pinky,M.HalfCurl,.9);var qe=O,_=new Pe("thumbs_up");_.addCurl(p.Thumb,M.NoCurl,1),_.addDirection(p.Thumb,m.VerticalUp,1),_.addDirection(p.Thumb,m.DiagonalUpLeft,.9),_.addDirection(p.Thumb,m.DiagonalUpRight,.9);for(var ke=0,Ne=[p.Index,p.Middle,p.Ring,p.Pinky];ke<Ne.length;ke++){var ze=Ne[ke];_.addCurl(ze,M.FullCurl,1),_.addCurl(ze,M.HalfCurl,.9)}_.addDirection(p.Index,m.DiagonalUpLeft,1),_.addDirection(p.Index,m.HorizontalLeft,1),_.addDirection(p.Index,m.HorizontalRight,1),_.addDirection(p.Index,m.DiagonalUpRight,1);var Ye=_;g.default={GestureEstimator:mt,GestureDescription:Pe,Finger:p,FingerCurl:M,FingerDirection:m,Gestures:o}}]).default})})(Be);const si=oi(Be.exports);var Nt,zt,Gt,Bt,_t,ae,Fe;class hi{constructor({context:i,video:s}){h(this,Nt,void 0);h(this,zt,void 0);h(this,Gt,void 0);h(this,Bt,void 0);h(this,_t,"");h(this,ae,0);h(this,Fe,async()=>window.handPoseDetection.createDetector(window.handPoseDetection.SupportedModels.MediaPipeHands,{runtime:"mediapipe",modelType:"full",maxHands:1,solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915"}));I(this,"start",async()=>{y(this,Bt,new si.GestureEstimator(ni)),y(this,Gt,await t(this,Fe).call(this))});I(this,"getGesture",()=>t(this,_t));I(this,"render",async({})=>{if(!t(this,zt)||!t(this,Nt)||!t(this,Gt)||!t(this,Bt))return;const i=await t(this,Gt).estimateHands(t(this,Nt),{flipHorizontal:!0});for(const s of i){for(const o of s.keypoints){const v=o.name.split("_")[0].toString().toLowerCase(),p=ii[v];v==="wrist"&&y(this,ae,o.x),t(this,zt).point({x:o.x,y:o.y,radius:3,color:p})}const g=s.keypoints3D.map(o=>[o.x,o.y,o.z]),a=t(this,Bt).estimate(g,9);if(a.gestures.length>0){const v=a.gestures.reduce((p,M)=>p.score>M.score?p:M).name;y(this,_t,v)}else y(this,_t,"")}});y(this,zt,he({context:i})),y(this,Nt,s)}get x(){return t(this,ae)}}Nt=new WeakMap,zt=new WeakMap,Gt=new WeakMap,Bt=new WeakMap,_t=new WeakMap,ae=new WeakMap,Fe=new WeakMap;const li={name:"Test track",coordinates:[{curvature:0,distance:5},{curvature:0,distance:20},{curvature:1,distance:100},{curvature:0,distance:150},{curvature:-1,distance:200},{curvature:0,distance:250}]};var Ot,qt,St,oe,Yt,Xt,Tt,k,G,gt,Wt,B,Ct,se,Oe,Se,Te,Jt,Ce;class ci{constructor(i){h(this,Ot,0);h(this,qt,0);h(this,St,D.fps);h(this,oe,t(this,St));h(this,Yt,0);h(this,Xt,1e3/D.fps);h(this,Tt,document.getElementById("canvas"));h(this,k,t(this,Tt).getContext("2d"));h(this,G,void 0);h(this,gt,void 0);h(this,Wt,void 0);h(this,B,void 0);h(this,Ct,void 0);h(this,se,void 0);h(this,Oe,i=>{!t(this,G)||!t(this,B)||(t(this,B).getGesture()==="accelerate"?t(this,G).accelerate(i):t(this,G).slowDown(i))});h(this,Se,()=>{t(this,k).beginPath(),t(this,k).rect(0,0,D.canvas.width,D.canvas.height),t(this,k).fillStyle="black",t(this,k).fill(),t(this,k).shadowBlur=0});h(this,Te,i=>{!t(this,k)||!t(this,gt)||!t(this,G)||!t(this,Wt)||!t(this,Ct)||!t(this,B)||(t(this,Se).call(this),t(this,gt).render({deltaTime:i}),t(this,G).render({deltaTime:i,levelCurvature:t(this,gt).curvature}),t(this,Wt).render({deltaTime:i}),t(this,B).render({deltaTime:i}),t(this,Oe).call(this,i),t(this,G).setPosition(t(this,B).x),t(this,Ct).text({color:"#FFFFFF",text:`FPS: ${t(this,St).toFixed(0)}`,y:20,x:D.canvas.width-50,fontSize:"12px"}),t(this,Ct).text({color:"#FFFFFF",text:`HandPose: ${t(this,B).getGesture()}`,y:20,x:150,fontSize:"12px"}))});h(this,Jt,i=>{if(i<t(this,qt)+1e3/D.fps){requestAnimationFrame(t(this,Jt));return}for(y(this,Ot,t(this,Ot)+(i-t(this,qt))),y(this,qt,i),i>t(this,oe)+1e3&&(y(this,St,.25*t(this,Yt)+.75*t(this,St)),y(this,oe,i),y(this,Yt,0)),Le(this,Yt)._++;t(this,Ot)>=t(this,Xt);)y(this,Ot,t(this,Ot)-t(this,Xt));t(this,Te).call(this,t(this,Ot)/t(this,Xt)),requestAnimationFrame(t(this,Jt))});h(this,Ce,()=>{t(this,Jt).call(this,0)});I(this,"run",async()=>{!t(this,B)||(await t(this,B).start(),t(this,Ce).call(this))});t(this,k).imageSmoothingEnabled=!1,t(this,Tt).width=D.canvas.width,t(this,Tt).height=D.canvas.height,y(this,se,i),y(this,B,new hi({context:t(this,k),video:t(this,se)})),y(this,G,new ti({context:t(this,k)})),y(this,gt,new Ke({context:t(this,k),car:t(this,G),track:li})),y(this,Wt,new ei({context:t(this,k),car:t(this,G),level:t(this,gt),canvasWidth:t(this,Tt).width})),y(this,Ct,he({context:t(this,k)}))}}Ot=new WeakMap,qt=new WeakMap,St=new WeakMap,oe=new WeakMap,Yt=new WeakMap,Xt=new WeakMap,Tt=new WeakMap,k=new WeakMap,G=new WeakMap,gt=new WeakMap,Wt=new WeakMap,B=new WeakMap,Ct=new WeakMap,se=new WeakMap,Oe=new WeakMap,Se=new WeakMap,Te=new WeakMap,Jt=new WeakMap,Ce=new WeakMap;const ui=async(f,i,s)=>{const g={audio:!1,video:{facingMode:"user",width:f,height:i,frameRate:{max:s}}},a=document.getElementById("camera");if(!a)throw new Error("No DOM for camera found!");a.width=f,a.height=i;const o=await navigator.mediaDevices.getUserMedia(g);return a.srcObject=o,new Promise(v=>{a.onloadedmetadata=()=>{v(a)}})};window.onload=function(){ui(D.video.width,D.video.height,D.fps).then(f=>{f.play(),f.addEventListener("loadeddata",()=>{console.log("Camera is ready"),new ci(f).run()})})};
