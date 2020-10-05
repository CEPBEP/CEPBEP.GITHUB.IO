/*! svg.js v2.3.3 MIT*/;!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t,t.document)}):"object"==typeof exports?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){return t instanceof e}function n(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}function r(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}function o(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function h(t,e,i){if(null==e||null==i){var n=t.bbox();null==e?e=n.width/n.height*i:null==i&&(i=n.height/n.width*e)}return{width:e,height:i}}function u(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function l(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function c(t){return t instanceof v.Matrix||(t=new v.Matrix(t)),t}function f(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function d(t){return t=t.replace(v.regex.whitespace,"").replace(v.regex.matrix,"").split(v.regex.matrixElements),l(v.utils.map(t,function(t){return parseFloat(t)}))}function p(t){for(var e=0,i=t.length,n="";i>e;e++)n+=t[e][0],null!=t[e][1]&&(n+=t[e][1],null!=t[e][2]&&(n+=" ",n+=t[e][2],null!=t[e][3]&&(n+=" ",n+=t[e][3],n+=" ",n+=t[e][4],null!=t[e][5]&&(n+=" ",n+=t[e][5],n+=" ",n+=t[e][6],null!=t[e][7]&&(n+=" ",n+=t[e][7])))));return n+" "}function m(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e]instanceof SVGElement&&m(t.childNodes[e]);return v.adopt(t).id(v.eid(t.nodeName))}function x(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function g(t){var e=t.toString().match(v.regex.reference);return e?e[1]:void 0}var v=this.SVG=function(t){return v.supported?(t=new v.Doc(t),v.parser.draw||v.prepare(),t):void 0};if(v.ns="http://www.w3.org/2000/svg",v.xmlns="http://www.w3.org/2000/xmlns/",v.xlink="http://www.w3.org/1999/xlink",v.svgjs="http://svgjs.com/svgjs",v.supported=function(){return!!e.createElementNS&&!!e.createElementNS(v.ns,"svg").createSVGRect}(),!v.supported)return!1;v.did=1e3,v.eid=function(t){return"Svgjs"+s(t)+v.did++},v.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},v.extend=function(){var t,e,i,n;for(t=[].slice.call(arguments),e=t.pop(),n=t.length-1;n>=0;n--)if(t[n])for(i in e)t[n].prototype[i]=e[i];v.Set&&v.Set.inherit&&v.Set.inherit()},v.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,v.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&v.extend(e,t.extend),t.construct&&v.extend(t.parent||v.Container,t.construct),e},v.adopt=function(t){if(!t)return null;if(t.instance)return t.instance;var e;return e="svg"==t.nodeName?t.parentNode instanceof SVGElement?new v.Nested:new v.Doc:"linearGradient"==t.nodeName?new v.Gradient("linear"):"radialGradient"==t.nodeName?new v.Gradient("radial"):v[s(t.nodeName)]?new(v[s(t.nodeName)]):new v.Element(t),e.type=t.nodeName,e.node=t,t.instance=e,e instanceof v.Doc&&e.namespace().defs(),e.setData(JSON.parse(t.getAttribute("svgjs:data"))||{}),e},v.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new v.Doc(t):new v.Doc(e.documentElement).nested()).size(2,0);v.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"),poly:i.polyline().node,path:i.path().node,"native":v.create("svg")}},v.parser={"native":v.create("svg")},e.addEventListener("DOMContentLoaded",function(){v.parser.draw||v.prepare()},!1),v.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,matrix:/matrix\(|\)/g,matrixElements:/,*\s+|,/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,negExp:/e\-/gi,comma:/,/g,hyphen:/\-/g,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,whitespaces:/\s+/,X:/X/g},v.utils={map:function(t,e){var i,n=t.length,r=[];for(i=0;n>i;i++)r.push(e(t[i]));return r},filter:function(t,e){var i,n=t.length,r=[];for(i=0;n>i;i++)e(t[i])&&r.push(t[i]);return r},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(t){return this.filter(t,function(t){return t instanceof SVGElement})}},v.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},v.Color=function(t){var e;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?v.regex.isRgb.test(t)?(e=v.regex.rgb.exec(t.replace(/\s/g,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):v.regex.isHex.test(t)&&(e=v.regex.hex.exec(a(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b))},v.extend(v.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+o(this.r)+o(this.g)+o(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new v.Color(t),this},at:function(t){return this.destination?(t=0>t?0:t>1?1:t,new v.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),v.Color.test=function(t){return t+="",v.regex.isHex.test(t)||v.regex.isRgb.test(t)},v.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},v.Color.isColor=function(t){return v.Color.isRgb(t)||v.Color.test(t)},v.Array=function(t,e){t=(t||[]).valueOf(),0==t.length&&e&&(t=e.valueOf()),this.value=this.parse(t)},v.extend(v.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];e>t;t++)-1==i.indexOf(this.value[t])&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];i>e;e++)n.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new v.Array(n)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(/\s+/)},reverse:function(){return this.value.reverse(),this}}),v.PointArray=function(t,e){this.constructor.call(this,t,e||[[0,0]])},v.PointArray.prototype=new v.Array,v.extend(v.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];e>t;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];i>e;e++)n.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new v.PointArray(n)},parse:function(t){if(t=t.valueOf(),Array.isArray(t))return t;t=this.split(t);for(var e,i=0,n=t.length,r=[];n>i;i++)e=t[i].split(","),r.push([parseFloat(e[0]),parseFloat(e[1])]);return r},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n=this.value.length-1;n>=0;n--)this.value[n]=[this.value[n][0]+t,this.value[n][1]+e];return this},size:function(t,e){var i,n=this.bbox();for(i=this.value.length-1;i>=0;i--)this.value[i][0]=(this.value[i][0]-n.x)*t/n.width+n.x,this.value[i][1]=(this.value[i][1]-n.y)*e/n.height+n.y;return this},bbox:function(){return v.parser.poly.setAttribute("points",this.toString()),v.parser.poly.getBBox()}}),v.PathArray=function(t,e){this.constructor.call(this,t,e||[["M",0,0]])},v.PathArray.prototype=new v.Array,v.extend(v.PathArray,{toString:function(){return p(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n,r=this.value.length-1;r>=0;r--)n=this.value[r][0],"M"==n||"L"==n||"T"==n?(this.value[r][1]+=t,this.value[r][2]+=e):"H"==n?this.value[r][1]+=t:"V"==n?this.value[r][1]+=e:"C"==n||"S"==n||"Q"==n?(this.value[r][1]+=t,this.value[r][2]+=e,this.value[r][3]+=t,this.value[r][4]+=e,"C"==n&&(this.value[r][5]+=t,this.value[r][6]+=e)):"A"==n&&(this.value[r][6]+=t,this.value[r][7]+=e);return this},size:function(t,e){var i,n,r=this.bbox();for(i=this.value.length-1;i>=0;i--)n=this.value[i][0],"M"==n||"L"==n||"T"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y):"H"==n?this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x:"V"==n?this.value[i][1]=(this.value[i][1]-r.y)*e/r.height+r.y:"C"==n||"S"==n||"Q"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y,this.value[i][3]=(this.value[i][3]-r.x)*t/r.width+r.x,this.value[i][4]=(this.value[i][4]-r.y)*e/r.height+r.y,"C"==n&&(this.value[i][5]=(this.value[i][5]-r.x)*t/r.width+r.x,this.value[i][6]=(this.value[i][6]-r.y)*e/r.height+r.y)):"A"==n&&(this.value[i][1]=this.value[i][1]*t/r.width,this.value[i][2]=this.value[i][2]*e/r.height,this.value[i][6]=(this.value[i][6]-r.x)*t/r.width+r.x,this.value[i][7]=(this.value[i][7]-r.y)*e/r.height+r.y);return this},parse:function(t){if(t instanceof v.PathArray)return t.valueOf();var e,i,n,r,s,a,o=0,h=0,u={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7};if("string"==typeof t){for(t=t.replace(v.regex.negExp,"X").replace(v.regex.pathLetters," $& ").replace(v.regex.hyphen," -").replace(v.regex.comma," ").replace(v.regex.X,"e-").trim().split(v.regex.whitespaces),e=t.length;--e;)if(t[e].indexOf(".")!=t[e].lastIndexOf(".")){var l=t[e].split("."),c=[l.shift(),l.shift()].join(".");t.splice.apply(t,[e,1].concat(c,l.map(function(t){return"."+t})))}}else t=t.reduce(function(t,e){return[].concat.apply(t,e)},[]);var a=[];do{for(v.regex.isPathLetter.test(t[0])?(r=t[0],t.shift()):"M"==r?r="L":"m"==r&&(r="l"),s=[r.toUpperCase()],e=0;e<u[s[0]];++e)s.push(parseFloat(t.shift()));r==s[0]?"M"==r||"L"==r||"C"==r||"Q"==r||"S"==r||"T"==r?(o=s[u[s[0]]-1],h=s[u[s[0]]]):"V"==r?h=s[1]:"H"==r?o=s[1]:"A"==r&&(o=s[6],h=s[7]):"m"==r||"l"==r||"c"==r||"s"==r||"q"==r||"t"==r?(s[1]+=o,s[2]+=h,null!=s[3]&&(s[3]+=o,s[4]+=h),null!=s[5]&&(s[5]+=o,s[6]+=h),o=s[u[s[0]]-1],h=s[u[s[0]]]):"v"==r?(s[1]+=h,h=s[1]):"h"==r?(s[1]+=o,o=s[1]):"a"==r&&(s[6]+=o,s[7]+=h,o=s[6],h=s[7]),"M"==s[0]&&(i=o,n=h),"Z"==s[0]&&(o=i,h=n),a.push(s)}while(t.length);return a},bbox:function(){return v.parser.path.setAttribute("d",this.toString()),v.parser.path.getBBox()}}),v.Number=v.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:0>t?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(v.regex.numberAndUnit),e&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5])):t instanceof v.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return new v.Number(this+new v.Number(t),this.unit)},minus:function(t){return this.plus(-new v.Number(t))},times:function(t){return new v.Number(this*new v.Number(t),this.unit)},divide:function(t){return new v.Number(this/new v.Number(t),this.unit)},to:function(t){var e=new v.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new v.Number(t),this},at:function(t){return this.destination?new v.Number(this.destination).minus(this).times(t).plus(this):this}}}),v.Element=v.invent({create:function(t){this._stroke=v.defaults.attrs.stroke,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=h(this,t,e);return this.width(new v.Number(i.width)).height(new v.Number(i.height))},clone:function(t){var e=m(this.node.cloneNode(!0));return t?t.add(e):this.after(e),e},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(/\s+/)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return v.get(this.attr(t))},parent:function(t){var e=this;if(!e.node.parentNode)return null;if(e=v.adopt(e.node.parentNode),!t)return e;for(;e&&e.node instanceof SVGElement;){if("string"==typeof t?e.matches(t):e instanceof t)return e;e=v.adopt(e.node.parentNode)}},doc:function(){return this instanceof v.Doc?this:this.parent(v.Doc)},parents:function(t){var e=[],i=this;do{if(i=i.parent(t),!i||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return n(this.node,t)},"native":function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof v.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var n=0,r=i.firstChild.childNodes.length;r>n;n++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){var t=this.each?this:this.lines();t.each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return i(this,t)}}}),v.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return-Math.cos(t*Math.PI/2)+1}},v.morph=function(t){return function(e,i){return new v.MorphObj(e,i).at(t)}},v.Situation=v.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new v.Number(t.duration).valueOf(),this.delay=new v.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=!1,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),v.Delay=function(t){this.delay=new v.Number(t).valueOf()},v.FX=v.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0},extend:{animate:function(t,e,i){"object"==typeof t&&(e=t.ease,i=t.delay,t=t.duration);var n=new v.Situation({duration:t||1e3,delay:i||0,ease:v.easing[e||"-"]||e});return this.queue(n),this},delay:function(t){var t=new v.Delay(t);return this.queue(t)},target:function(t){return t&&t instanceof v.Element?(this._target=t,this):this._target},timeToPos:function(t){return(t-this.situation.start)/this.situation.duration},posToTime:function(t){return this.situation.duration*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.situation.start=+new Date+this.situation.delay,this.situation.finish=this.situation.start+this.situation.duration,this.initAnimations(),this.active=!0,this.startAnimFrame()),this},queue:function(t){return("function"==typeof t||t instanceof v.Situation||t instanceof v.Delay)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){if(this.situation&&this.situation.stop&&this.situation.stop(),this.situation=this.situations.shift(),this.situation){var t=function(){this.situation instanceof v.Situation?this.initAnimations().at(0):this.situation instanceof v.Delay?this.dequeue():this.situation.call(this)}.bind(this);this.situation.delay?setTimeout(function(){t()},this.situation.delay):t()}return this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(t in e.animations)"viewbox"==t?e.animations[t]=this.target().viewbox().morph(e.animations[t]):(e.animations[t].value="plot"==t?this.target().array().value:this.target()[t](),e.animations[t].value.value&&(e.animations[t].value=e.animations[t].value.value),e.animations[t].relative&&(e.animations[t].destination.value=e.animations[t].destination.value+e.animations[t].value));for(t in e.attrs)if(e.attrs[t]instanceof v.Color){var i=new v.Color(this.target().attr(t));e.attrs[t].r=i.r,e.attrs[t].g=i.g,e.attrs[t].b=i.b}else e.attrs[t].value=this.target().attr(t);for(t in e.styles)e.styles[t].value=this.target().style(t);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){return this.active||this.start(),e&&this.clearQueue(),this.active=!1,t&&this.situation&&(this.situation.loop=!1,this.situation.loops%2==0&&this.situation.reversing&&(this.situation.reversed=!0),this.at(1)),this.stopAnimFrame(),clearTimeout(this.timeout),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.at(0)}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},at:function(t){return this.pos=t,this.situation.start=+new Date-t*this.situation.duration,this.situation.finish=this.situation.start+this.situation.duration,this.step(!0)},speed:function(t){return this.situation.duration=this.situation.duration*this.pos+(1-this.pos)*this.situation.duration/t,this.situation.finish=this.situation.start+this.situation.duration,this.at(this.pos)},loop:function(t,e){return this.situation.loop=this.situation.loops=t||!0,e&&(this.last().reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),clearTimeout(this.timeout),this},play:function(){return this.paused?(this.paused=!1,this.at(this.pos)):this},reverse:function(t){var e=this.last();return e.reversed="undefined"==typeof t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last(),i=function n(i){i.detail.situation==e&&(t.call(this,e),this.off("finished.fx",n))};return this.target().on("finished.fx",i),this},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,v.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after(function(){this.off("during.fx",i)})},afterAll:function(t){var e=function i(){t.call(this),this.off("allfinished.fx",i)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,v.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)})},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,setTimeout(function(){this.start()}.bind(this),0),this},step:function(t){if(t||(this.pos=this.timeToPos(+new Date)),this.pos>=1&&(this.situation.loop===!0||"number"==typeof this.situation.loop&&--this.situation.loop))return this.situation.reversing&&(this.situation.reversed=!this.situation.reversed),this.at(this.pos-1);this.situation.reversed&&(this.pos=1-this.pos),this.pos>1&&(this.pos=1),this.pos<0&&(this.pos=0);var e=this.situation.ease(this.pos);for(var i in this.situation.once)i>this.lastPos&&e>=i&&(this.situation.once[i].call(this.target(),this.pos,e),delete this.situation.once[i]);return this.active&&this.target().fire("during",{pos:this.pos,eased:e,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.target().off(".fx"),this.active=!1),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=e,this):this},eachAt:function(){var t,e,i=this,n=this.target(),r=this.situation;for(t in r.animations)e=[].concat(r.animations[t]).map(function(t){return t.at?t.at(r.ease(i.pos),i.pos):t}),n[t].apply(n,e);for(t in r.attrs)e=[t].concat(r.attrs[t]).map(function(t){return t.at?t.at(r.ease(i.pos),i.pos):t}),n.attr.apply(n,e);for(t in r.styles)e=[t].concat(r.styles[t]).map(function(t){return t.at?t.at(r.ease(i.pos),i.pos):t}),n.style.apply(n,e);if(r.transforms.length){e=r.initialTransformation;for(t in r.transforms){var s=r.transforms[t];s instanceof v.Matrix?e=s.relative?e.multiply(s.at(r.ease(this.pos))):e.morph(s).at(r.ease(this.pos)):(s.relative||s.undo(e.extract()),e=e.multiply(s.at(r.ease(this.pos))))}n.matrix(e)}return this},once:function(t,e,i){return i||(t=this.situation.ease(t)),this.situation.once[t]=e,this}},parent:v.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new v.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new v.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this}}}),v.MorphObj=v.invent({create:function(t,e){return v.Color.isColor(e)?new v.Color(t).morph(e):v.regex.numberAndUnit.test(e)?new v.Number(t).morph(e):(this.value=0,this.destination=e,void 0)},extend:{at:function(t,e){return 1>e?this.value:this.destination},valueOf:function(){return this.value}}}),v.extend(v.FX,{attr:function(t,e){if("object"==typeof t)for(var i in t)this.attr(i,t[i]);else this.add(t,new v.MorphObj(null,e),"attrs");return this},style:function(t,e){if("object"==typeof t)for(var i in t)this.style(i,t[i]);else this.add(t,new v.MorphObj(null,e),"styles");return this},x:function(t,e){if(this.target()instanceof v.G)return this.transform({x:t},e),this;var i=(new v.Number).morph(t);return i.relative=e,this.add("x",i)},y:function(t,e){if(this.target()instanceof v.G)return this.transform({y:t},e),this;var i=(new v.Number).morph(t);return i.relative=e,this.add("y",i)},cx:function(t){return this.add("cx",(new v.Number).morph(t))},cy:function(t){return this.add("cy",(new v.Number).morph(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){if(this.target()instanceof v.Text)this.attr("font-size",t);else{var i;t&&e||(i=this.target().bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.add("width",(new v.Number).morph(t)).add("height",(new v.Number).morph(e))}return this},plot:function(t){return this.add("plot",this.target().array().morph(t))},leading:function(t){return this.target().leading?this.add("leading",(new v.Number).morph(t)):this},viewbox:function(t,e,i,n){return this.target()instanceof v.Container&&this.add("viewbox",new v.ViewBox(t,e,i,n)),this},update:function(t){if(this.target()instanceof v.Stop){if("number"==typeof t||t instanceof v.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),v.BBox=v.invent({create:function(t){if(t){var i;try{if(!e.documentElement.contains(t.node))throw new Exception("Element not in the dom");i=t.node.getBBox()}catch(n){if(t instanceof v.Shape){var r=t.clone(v.parser.draw).show();i=r.bbox(),r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}this.x=i.x,this.y=i.y,this.width=i.width,this.height=i.height}x(this)},parent:v.Element,construct:{bbox:function(){return new v.BBox(this)}}}),v.TBox=v.invent({create:function(t){if(t){var e=t.ctm().extract(),i=t.bbox();this.width=i.width*e.scaleX,this.height=i.height*e.scaleY,this.x=i.x+e.x,this.y=i.y+e.y}x(this)},parent:v.Element,construct:{tbox:function(){return new v.TBox(this)}}}),v.RBox=v.invent({create:function(e){if(e){var i=e.doc().parent(),n=e.node.getBoundingClientRect(),r=1;for(this.x=n.left,this.y=n.top,this.x-=i.offsetLeft,this.y-=i.offsetTop;i=i.offsetParent;)this.x-=i.offsetLeft,this.y-=i.offsetTop;for(i=e;i.parent&&(i=i.parent());)i.viewbox&&(r*=i.viewbox().zoom,this.x-=i.x()||0,this.y-=i.y()||0);this.width=n.width/=r,this.height=n.height/=r}x(this),this.x+=t.pageXOffset,this.y+=t.pageYOffset},parent:v.Element,construct:{rbox:function(){return new v.RBox(this)}}}),[v.BBox,v.TBox,v.RBox].forEach(function(t){v.extend(t,{merge:function(e){var i=new t;return i.x=Math.min(this.x,e.x),i.y=Math.min(this.y,e.y),i.width=Math.max(this.x+this.width,e.x+e.width)-i.x,i.height=Math.max(this.y+this.height,e.y+e.height)-i.y,x(i)}})}),v.Matrix=v.invent({create:function(t){var e,i=l([1,0,0,1,0,0]);for(t=t instanceof v.Element?t.matrixify():"string"==typeof t?d(t):6==arguments.length?l([].slice.call(arguments)):"object"==typeof t?t:i,e=w.length-1;e>=0;--e)this[w[e]]=t&&"number"==typeof t[w[e]]?t[w[e]]:i[w[e]]},extend:{extract:function(){var t=u(this,0,1),e=u(this,1,0),i=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(i*Math.PI/180)+this.f*Math.sin(i*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(i*Math.PI/180)+this.e*Math.sin(-i*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-i,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new v.Matrix(this)}},clone:function(){return new v.Matrix(this)},morph:function(t){return this.destination=new v.Matrix(t),this},at:function(t){if(!this.destination)return this;var e=new v.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t});if(this.param&&this.param.to){var i={rotation:this.param.from.rotation+(this.param.to.rotation-this.param.from.rotation)*t,cx:this.param.from.cx,cy:this.param.from.cy};e=e.rotate((this.param.to.rotation-2*this.param.from.rotation)*t,i.cx,i.cy),e.param=i}return e},multiply:function(t){return new v.Matrix(this.native().multiply(c(t).native()))},inverse:function(){return new v.Matrix(this.native().inverse())},translate:function(t,e){return new v.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,i,n){return(1==arguments.length||3==arguments.length)&&(e=t),3==arguments.length&&(n=i,i=e),this.around(i,n,new v.Matrix(t,0,0,e,0,0))},rotate:function(t,e,i){return t=v.utils.radians(t),this.around(e,i,new v.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):this.scale(1,-1,0,e)},skew:function(t,e,i,n){return this.around(i,n,this.native().skewX(t||0).skewY(e||0))},skewX:function(t,e,i){return this.around(e,i,this.native().skewX(t||0))},skewY:function(t,e,i){return this.around(e,i,this.native().skewY(t||0))},around:function(t,e,i){return this.multiply(new v.Matrix(1,0,0,1,t||0,e||0)).multiply(i).multiply(new v.Matrix(1,0,0,1,-t||0,-e||0))},"native":function(){for(var t=v.parser.native.createSVGMatrix(),e=w.length-1;e>=0;e--)t[w[e]]=this[w[e]];return t},toString:function(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}},parent:v.Element,construct:{ctm:function(){return new v.Matrix(this.node.getCTM())},screenCTM:function(){return new v.Matrix(this.node.getScreenCTM())}}}),v.Point=v.invent({create:function(t,e){var i,n={x:0,y:0};i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:null!=e?{x:t,y:e}:n,this.x=i.x,this.y=i.y},extend:{clone:function(){return new v.Point(this)},morph:function(t){return this.destination=new v.Point(t),this},at:function(t){if(!this.destination)return this;var e=new v.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t});return e},"native":function(){var t=v.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new v.Point(this.native().matrixTransform(t.native()))}}}),v.extend(v.Element,{point:function(t,e){return new v.Point(t,e).transform(this.screenCTM().inverse())}}),v.extend(v.Element,{attr:function(t,e,i){if(null==t){for(t={},e=this.node.attributes,i=e.length-1;i>=0;i--)t[e[i].nodeName]=v.regex.isNumber.test(e[i].nodeValue)?parseFloat(e[i].nodeValue):e[i].nodeValue;return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return e=this.node.getAttribute(t),null==e?v.defaults.attrs[t]:v.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),("fill"==t||"stroke"==t)&&(v.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof v.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new v.Number(e):v.Color.isColor(e)?e=new v.Color(e):Array.isArray(e)?e=new v.Array(e):e instanceof v.Matrix&&e.param&&(this.param=e.param),"leading"==t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),v.extend(v.Element,{transform:function(t,e){var i,n=this;if("object"!=typeof t)return i=new v.Matrix(n).extract(),"string"==typeof t?i[t]:i;
if(i=new v.Matrix(n),e=!!e||!!t.relative,null!=t.a)i=e?i.multiply(new v.Matrix(t)):new v.Matrix(t);else if(null!=t.rotation)f(t,n),i=e?i.rotate(t.rotation,t.cx,t.cy):i.rotate(t.rotation-i.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(f(t,n),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var r=i.extract();t.scaleX=1*t.scaleX/r.scaleX,t.scaleY=1*t.scaleY/r.scaleY}i=i.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skewX||null!=t.skewY){if(f(t,n),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,!e){var r=i.extract();i=i.multiply((new v.Matrix).skew(r.skewX,r.skewY,t.cx,t.cy).inverse())}i=i.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?i=i.flip(t.flip,null==t.offset?n.bbox()["c"+t.flip]:t.offset):(null!=t.x||null!=t.y)&&(e?i=i.translate(t.x,t.y):(null!=t.x&&(i.e=t.x),null!=t.y&&(i.f=t.y)));return this.attr("transform",i)}}),v.extend(v.FX,{transform:function(t,e){var i,n=this.target();return"object"!=typeof t?(i=new v.Matrix(n).extract(),"string"==typeof t?i[t]:i):(e=!!e||!!t.relative,null!=t.a?i=new v.Matrix(t):null!=t.rotation?(f(t,n),i=new v.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(f(t,n),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,i=new v.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(f(t,n),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,i=new v.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?i=(new v.Matrix).morph((new v.Matrix).flip(t.flip,null==t.offset?n.bbox()["c"+t.flip]:t.offset)):(null!=t.x||null!=t.y)&&(i=new v.Translate(t.x,t.y)),i?(i.relative=e,this.last().transforms.push(i),setTimeout(function(){this.start()}.bind(this),0),this):this)}}),v.extend(v.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){var t=(this.attr("transform")||"").split(/\)\s*/).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(v.regex.matrixElements).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(l(e[1])):t[e[0]].apply(t,e[1])},new v.Matrix);return t},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.rect(1,1),n=i.screenCTM().inverse();return i.remove(),this.addTo(t).untransform().transform(n.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),v.Transformation=v.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.create([].slice.call(arguments));if("object"==typeof t)for(var i=0,n=this.arguments.length;n>i;++i)this[this.arguments[i]]=t[this.arguments[i]];if(Array.isArray(t))for(var i=0,n=this.arguments.length;n>i;++i)this[this.arguments[i]]=t[i];this.inversed=!1,e===!0&&(this.inversed=!0)},extend:{at:function(t){for(var e=[],i=0,n=this.arguments.length;n>i;++i)e.push(this[this.arguments[i]]);var r=this._undo||new v.Matrix;return r=(new v.Matrix).morph(v.Matrix.prototype[this.method].apply(r,e)).at(t),this.inversed?r.inverse():r},undo:function(t){for(var e=0,i=this.arguments.length;i>e;++e)t[this.arguments[e]]="undefined"==typeof this[this.arguments[e]]?0:t[this.arguments[e]];return this._undo=new(v[s(this.method)])(t,!0).at(1),this}}}),v.Translate=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),v.Rotate=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new v.Matrix).rotate((new v.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){this._undo=t}}}),v.Scale=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),v.Skew=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),v.extend(v.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!v.regex.isCss.test(t))return this.node.style[r(t)];t=t.split(";");for(var i=0;i<t.length;i++)e=t[i].split(":"),this.style(e[0].replace(/\s+/g,""),e[1])}else this.node.style[r(t)]=null===e||v.regex.isBlank.test(e)?"":e;return this}}),v.Parent=v.invent({create:function(t){this.constructor.call(this,t)},inherit:v.Element,extend:{children:function(){return v.utils.map(v.utils.filterSVGElements(this.node.childNodes),function(t){return v.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return v.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var i,n,r=this.children();for(i=0,n=r.length;n>i;i++)r[i]instanceof v.Element&&t.apply(r[i],[i,r]),e&&r[i]instanceof v.Container&&r[i].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),v.extend(v.Parent,{ungroup:function(t,e){return 0===e||this instanceof v.Defs?this:(t=t||(this instanceof v.Doc?this:this.parent(v.Parent)),e=e||1/0,this.each(function(){return this instanceof v.Defs?this:this instanceof v.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),v.Container=v.invent({create:function(t){this.constructor.call(this,t)},inherit:v.Parent}),v.ViewBox=v.invent({create:function(t){var e,i,n,r,s,a,o,h,u=[0,0,0,0],l=1,c=1,f=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(t instanceof v.Element){for(o=t,h=t,a=(t.attr("viewBox")||"").match(f),s=t.bbox,n=new v.Number(t.width()),r=new v.Number(t.height());"%"==n.unit;)l*=n.value,n=new v.Number(o instanceof v.Doc?o.parent().offsetWidth:o.parent().width()),o=o.parent();for(;"%"==r.unit;)c*=r.value,r=new v.Number(h instanceof v.Doc?h.parent().offsetHeight:h.parent().height()),h=h.parent();this.x=0,this.y=0,this.width=n*l,this.height=r*c,this.zoom=1,a&&(e=parseFloat(a[0]),i=parseFloat(a[1]),n=parseFloat(a[2]),r=parseFloat(a[3]),this.zoom=this.width/this.height>n/r?this.height/r:this.width/n,this.x=e,this.y=i,this.width=n,this.height=r)}else t="string"==typeof t?t.match(f).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"==typeof t?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):u,this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t){var t=1==arguments.length?[t.x,t.y,t.width,t.height]:[].slice.call(arguments);return this.destination=new v.ViewBox(t),this},at:function(t){return this.destination?new v.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:v.Container,construct:{viewbox:function(t){return 0==arguments.length?new v.ViewBox(this):(t=1==arguments.length?[t.x,t.y,t.width,t.height]:[].slice.call(arguments),this.attr("viewBox",t))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){v.Element.prototype[t]=function(e){var i=this;return this.node["on"+t]="function"==typeof e?function(){return e.apply(i,arguments)}:null,this}}),v.listeners=[],v.handlerMap=[],v.listenerId=0,v.on=function(t,e,i,n){var r=i.bind(n||t.instance||t),s=(v.handlerMap.indexOf(t)+1||v.handlerMap.push(t))-1,a=e.split(".")[0],o=e.split(".")[1]||"*";v.listeners[s]=v.listeners[s]||{},v.listeners[s][a]=v.listeners[s][a]||{},v.listeners[s][a][o]=v.listeners[s][a][o]||{},i._svgjsListenerId||(i._svgjsListenerId=++v.listenerId),v.listeners[s][a][o][i._svgjsListenerId]=r,t.addEventListener(a,r,!1)},v.off=function(t,e,i){var n=v.handlerMap.indexOf(t),r=e&&e.split(".")[0],s=e&&e.split(".")[1];if(-1!=n)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;v.listeners[n][r]&&v.listeners[n][r][s||"*"]&&(t.removeEventListener(r,v.listeners[n][r][s||"*"][i],!1),delete v.listeners[n][r][s||"*"][i])}else if(s&&r){if(v.listeners[n][r]&&v.listeners[n][r][s]){for(i in v.listeners[n][r][s])v.off(t,[r,s].join("."),i);delete v.listeners[n][r][s]}}else if(s)for(e in v.listeners[n])for(namespace in v.listeners[n][e])s===namespace&&v.off(t,[e,s].join("."));else if(r){if(v.listeners[n][r]){for(namespace in v.listeners[n][r])v.off(t,[r,namespace].join("."));delete v.listeners[n][r]}}else{for(e in v.listeners[n])v.off(t,e);delete v.listeners[n]}},v.extend(v.Element,{on:function(t,e,i){return v.on(this.node,t,e,i),this},off:function(t,e){return v.off(this.node,t,e),this},fire:function(t,e){return t instanceof Event?this.node.dispatchEvent(t):this.node.dispatchEvent(new b(t,{detail:e})),this}}),v.Defs=v.invent({create:"defs",inherit:v.Container}),v.G=v.invent({create:"g",inherit:v.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new v.G)}}}),v.extend(v.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof v.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof v.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),v.Mask=v.invent({create:function(){this.constructor.call(this,v.create("mask")),this.targets=[]},inherit:v.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],this.parent().removeElement(this),this}},construct:{mask:function(){return this.defs().put(new v.Mask)}}}),v.extend(v.Element,{maskWith:function(t){return this.masker=t instanceof v.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),v.ClipPath=v.invent({create:function(){this.constructor.call(this,v.create("clipPath")),this.targets=[]},inherit:v.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new v.ClipPath)}}}),v.extend(v.Element,{clipWith:function(t){return this.clipper=t instanceof v.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),v.Gradient=v.invent({create:function(t){this.constructor.call(this,v.create(t+"Gradient")),this.type=t},inherit:v.Container,extend:{at:function(t,e,i){return this.put(new v.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),v.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),v.extend(v.Gradient,v.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new v.Number(t),fy:new v.Number(e)}):this.attr({x1:new v.Number(t),y1:new v.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new v.Number(t),cy:new v.Number(e)}):this.attr({x2:new v.Number(t),y2:new v.Number(e)})}}),v.extend(v.Defs,{gradient:function(t,e){return this.put(new v.Gradient(t)).update(e)}}),v.Stop=v.invent({create:"stop",inherit:v.Element,extend:{update:function(t){return("number"==typeof t||t instanceof v.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new v.Number(t.offset)),this}}}),v.Pattern=v.invent({create:"pattern",inherit:v.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),v.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),v.extend(v.Defs,{pattern:function(t,e,i){return this.put(new v.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),v.Doc=v.invent({create:function(t){t&&(t="string"==typeof t?e.getElementById(t):t,"svg"==t.nodeName?this.constructor.call(this,t):(this.constructor.call(this,v.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:v.Container,extend:{namespace:function(){return this.attr({xmlns:v.ns,version:"1.1"}).attr("xmlns:xlink",v.xlink,v.xmlns).attr("xmlns:svgjs",v.svgjs,v.xmlns)},defs:function(){if(!this._defs){var t;this._defs=(t=this.node.getElementsByTagName("defs")[0])?v.adopt(t):new v.Defs,this.node.appendChild(this._defs.node)}return this._defs},parent:function(){return"#document"==this.node.parentNode.nodeName?null:this.node.parentNode},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this}}}),v.Shape=v.invent({create:function(t){this.constructor.call(this,t)},inherit:v.Element}),v.Bare=v.invent({create:function(t,e){if(this.constructor.call(this,v.create(t)),e)for(var i in e.prototype)"function"==typeof e.prototype[i]&&(this[i]=e.prototype[i])},inherit:v.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),v.extend(v.Parent,{element:function(t,e){return this.put(new v.Bare(t,e))},symbol:function(){return this.defs().element("symbol",v.Container)}}),v.Use=v.invent({create:"use",inherit:v.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,v.xlink)}},construct:{use:function(t,e){return this.put(new v.Use).element(t,e)}}}),v.Rect=v.invent({create:"rect",inherit:v.Shape,construct:{rect:function(t,e){return this.put(new v.Rect).size(t,e)}}}),v.Circle=v.invent({create:"circle",inherit:v.Shape,construct:{circle:function(t){return this.put(new v.Circle).rx(new v.Number(t).divide(2)).move(0,0)}}}),v.extend(v.Circle,v.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),v.Ellipse=v.invent({create:"ellipse",inherit:v.Shape,construct:{ellipse:function(t,e){return this.put(new v.Ellipse).size(t,e).move(0,0)}}}),v.extend(v.Ellipse,v.Rect,v.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),v.extend(v.Circle,v.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new v.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new v.Number(t).divide(2))},size:function(t,e){var i=h(this,t,e);return this.rx(new v.Number(i.width).divide(2)).ry(new v.Number(i.height).divide(2))}}),v.Line=v.invent({create:"line",inherit:v.Shape,extend:{array:function(){return new v.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,n){return t="undefined"!=typeof e?{x1:t,y1:e,x2:i,y2:n}:new v.PointArray(t).toLine(),this.attr(t)},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=h(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,n){return this.put(new v.Line).plot(t,e,i,n)}}}),v.Polyline=v.invent({create:"polyline",inherit:v.Shape,construct:{polyline:function(t){return this.put(new v.Polyline).plot(t)}}}),v.Polygon=v.invent({create:"polygon",inherit:v.Shape,construct:{polygon:function(t){return this.put(new v.Polygon).plot(t)}}}),v.extend(v.Polyline,v.Polygon,{array:function(){return this._array||(this._array=new v.PointArray(this.attr("points")))},plot:function(t){return this.attr("points",this._array=new v.PointArray(t))},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=h(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),v.extend(v.Line,v.Polyline,v.Polygon,{morphArray:v.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),v.Path=v.invent({create:"path",inherit:v.Shape,extend:{morphArray:v.PathArray,array:function(){return this._array||(this._array=new v.PathArray(this.attr("d")))},plot:function(t){return this.attr("d",this._array=new v.PathArray(t))},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=h(this,t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new v.Path).plot(t)}}}),v.Image=v.invent({create:"image",inherit:v.Shape,extend:{load:function(t){if(!t)return this;var i=this,n=e.createElement("img");return n.onload=function(){var e=i.parent(v.Pattern);null!==e&&(0==i.width()&&0==i.height()&&i.size(n.width,n.height),e&&0==e.width()&&0==e.height()&&e.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:n.width,height:n.height,ratio:n.width/n.height,url:t}))},n.onerror=function(t){"function"==typeof i._error&&i._error.call(i,t)},this.attr("href",n.src=this.src=t,v.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new v.Image).load(t).size(e||0,i||e||0)}}}),v.Text=v.invent({create:function(){this.constructor.call(this,v.create("text")),this.dom.leading=new v.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",v.defaults.attrs["font-family"])},inherit:v.Shape,extend:{x:function(t){return null==t?this.attr("x"):(this.textPath||this.lines().each(function(){this.dom.newLined&&this.x(t)}),this.attr("x",t))},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if("undefined"==typeof t){for(var t="",e=this.node.childNodes,i=0,n=e.length;n>i;++i)0!=i&&3!=e[i].nodeType&&1==v.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{t=t.split("\n");for(var i=0,r=t.length;r>i;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new v.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=v.utils.map(v.utils.filterSVGElements(t.childNodes),function(t){return v.adopt(t)});return new v.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,n=this.dom.leading*new v.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(this.textPath||this.attr("x",e.attr("x")),"\n"==this.text()?i+=n:(this.attr("dy",n+i),i=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new v.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new v.Text).text(t)},plain:function(t){return this.put(new v.Text).plain(t)}}}),v.Tspan=v.invent({create:"tspan",inherit:v.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(v.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),v.extend(v.Text,v.Tspan,{plain:function(t){return this._build===!1&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new v.Tspan;return this._build===!1&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),v.TextPath=v.invent({create:"textPath",inherit:v.Parent,parent:v.Text,construct:{path:function(t){for(var e=new v.TextPath,i=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+i,v.xlink),this},plot:function(t){var e=this.track();return e&&e.plot(t),this},track:function(){var t=this.textPath();return t?t.reference("href"):void 0},textPath:function(){return this.node.firstChild&&"textPath"==this.node.firstChild.nodeName?v.adopt(this.node.firstChild):void 0}}}),v.Nested=v.invent({create:function(){this.constructor.call(this,v.create("svg")),this.style("overflow","visible")},inherit:v.Container,construct:{nested:function(){return this.put(new v.Nested)}}}),v.A=v.invent({create:"a",inherit:v.Container,extend:{to:function(t){return this.attr("href",t,v.xlink)},show:function(t){return this.attr("show",t,v.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new v.A).to(t)}}}),v.extend(v.Element,{linkTo:function(t){var e=new v.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),v.Marker=v.invent({create:"marker",inherit:v.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),v.extend(v.Defs,{marker:function(t,e,i){return this.put(new v.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}}),v.extend(v.Line,v.Polyline,v.Polygon,v.Path,{marker:function(t,e,i,n){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof v.Marker?arguments[1]:this.doc().marker(e,i,n),this.attr(r,t)}});var y={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};["fill","stroke"].forEach(function(t){var e,i={};i[t]=function(i){if("string"==typeof i||v.Color.isRgb(i)||i&&"function"==typeof i.fill)this.attr(t,i);else for(e=y[t].length-1;e>=0;e--)null!=i[y[t][e]]&&this.attr(y.prefix(t,y[t][e]),i[y[t][e]]);return this},v.extend(v.Element,v.FX,i)}),v.extend(v.Element,v.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,n){return this.transform({skewX:t,skewY:e,cx:i,cy:n})},scale:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:n})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return this.transform({flip:t,offset:e})},matrix:function(t){return this.attr("transform",new v.Matrix(t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x((this instanceof v.FX?0:this.x())+t,!0)},dy:function(t){return this.y((this instanceof v.FX?0:this.y())+t,!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),v.extend(v.Rect,v.Ellipse,v.Circle,v.Gradient,v.FX,{radius:function(t,e){var i=(this._target||this).type;return"radial"==i||"circle"==i?this.attr("r",new v.Number(t)):this.rx(t).ry(null==e?t:e)}}),v.extend(v.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),v.extend(v.Parent,v.Text,v.FX,{font:function(t){for(var e in t)"leading"==e?this.leading(t[e]):"anchor"==e?this.attr("text-anchor",t[e]):"size"==e||"family"==e||"weight"==e||"stretch"==e||"variant"==e||"style"==e?this.attr("font-"+e,t[e]):this.attr(e,t[e]);return this}}),v.Set=v.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;e>t;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;i>e;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){var t=new v.BBox;if(0==this.members.length)return t;var e=this.members[0].rbox();return t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,this.each(function(){t=t.merge(this.rbox())}),t}},construct:{set:function(t){return new v.Set(t)}}}),v.FX.Set=v.invent({create:function(t){this.set=t}}),v.Set.inherit=function(){var t,e=[];for(var t in v.Shape.prototype)"function"==typeof v.Shape.prototype[t]&&"function"!=typeof v.Set.prototype[t]&&e.push(t);e.forEach(function(t){v.Set.prototype[t]=function(){for(var e=0,i=this.members.length;i>e;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new v.FX.Set(this)):this}}),e=[];for(var t in v.FX.prototype)"function"==typeof v.FX.prototype[t]&&"function"!=typeof v.FX.Set.prototype[t]&&e.push(t);e.forEach(function(t){v.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;i>e;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},v.extend(v.Element,{data:function(t,e,i){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(n){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:i===!0||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),v.extend(v.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),v.get=function(t){var i=e.getElementById(g(t)||t);return v.adopt(i)},v.select=function(t,i){return new v.Set(v.utils.map((i||e).querySelectorAll(t),function(t){return v.adopt(t)}))},v.extend(v.Parent,{select:function(t){return v.select(t,this.node)}});var w="abcdef".split("");if("function"!=typeof b){var b=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=e.createEvent("CustomEvent");return n.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),n};b.prototype=t.Event.prototype,t.CustomEvent=b}return function(e){for(var i=0,n=["moz","webkit"],r=0;r<n.length&&!t.requestAnimationFrame;++r)e.requestAnimationFrame=e[n[r]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[r]+"CancelAnimationFrame"]||e[n[r]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),s=e.setTimeout(function(){t(n+r)},r);return i=n+r,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),v});

// svg.absorb.js 0.1.2 - Copyright (c) 2014 Wout Fierens - Licensed under the MIT license
;
(function () {
	SVG.Absorbee = SVG.invent({create: function (e) {
			this.node = e;
			this.type = e.localName;
			this.node.instance = this
		}, inherit: SVG.Element, construct: {absorb: function (e) {
				if (typeof e === "string") {
					var t, n = document.createElement("div");
					e = e.replace(/\n/, "").replace(/<(\w+)([^<]+?)\/>/g, "<$1$2></$1>");
					n.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + e + "</svg>";
					for (t = n.firstChild.childNodes.length - 1; t >= 0; t--)
						if (n.firstChild.childNodes[t].nodeType == 1)
							this.add(new SVG.Absorbee(n.firstChild.childNodes[t]), 0);
					n = null
				} else {
					this.add(new SVG.Absorbee(e))
				}
				return this
			}}})
}).call(this);
// svg.filter.js 0.4 - Copyright (c) 2013-2014 Wout Fierens - Licensed under the MIT license
;(function(){function t(e){if(Array.isArray(e))e=new SVG.Array(e);return e.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function n(e){if(!Array.isArray(e))return e;for(var t=0,n=e.length,r=[];t<n;t++)r.push(e[t]);return r.join(" ")}SVG.Filter=function(){this.constructor.call(this,SVG.create("filter"))};SVG.Filter.prototype=new SVG.Parent;SVG.extend(SVG.Filter,{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",put:function(e,t){this.add(e,t);return e.attr({"in":this.source,result:e})},blend:function(e,t,n){return this.put(new SVG.BlendEffect).attr({"in":e,in2:t,mode:n||"normal"})},colorMatrix:function(e,n){if(e=="matrix")n=t(n);return this.put(new SVG.ColorMatrixEffect).attr({type:e,values:typeof n=="undefined"?null:n})},convolveMatrix:function(e){e=t(e);return this.put(new SVG.ConvolveMatrixEffect).attr({order:Math.sqrt(e.split(" ").length),kernelMatrix:e})},componentTransfer:function(e){var t=new SVG.ComponentTransferEffect;t.rgb=new SVG.Set;["r","g","b","a"].forEach(function(e){t[e]=(new(SVG["Func"+e.toUpperCase()])).attr("type","identity");t.rgb.add(t[e]);t.node.appendChild(t[e].node)});if(e){if(e.rgb){["r","g","b"].forEach(function(n){t[n].attr(e.rgb)});delete e.rgb}for(var n in e)t[n].attr(e[n])}return this.put(t)},composite:function(e,t,n){return this.put(new SVG.CompositeEffect).attr({"in":e,in2:t,operator:n})},flood:function(e){return this.put(new SVG.FloodEffect).attr({"flood-color":e})},offset:function(e,t){return this.put(new SVG.OffsetEffect).attr({dx:e,dy:t})},image:function(e){return this.put(new SVG.ImageEffect).attr("href",e,SVG.xlink)},merge:function(){},gaussianBlur:function(){return this.put(new SVG.GaussianBlurEffect).attr("stdDeviation",n(Array.prototype.slice.call(arguments)))},toString:function(){return"url(#"+this.attr("id")+")"}});SVG.extend(SVG.Defs,{filter:function(e){var t=this.put(new SVG.Filter);if(typeof e==="function")e.call(t,t);return t}});SVG.extend(SVG.Container,{filter:function(e){return this.defs().filter(e)}});SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(e){this.filterer=e instanceof SVG.Element?e:this.doc().filter(e);this.attr("filter",this.filterer);return this.filterer},unfilter:function(e){if(this.filterer&&e===true)this.filterer.remove();delete this.filterer;return this.attr("filter",null)}});SVG.Effect=function(){};SVG.Effect.prototype=new SVG.Element;SVG.extend(SVG.Effect,{"in":function(e){return this.attr("in",e)},result:function(){return this.attr("id")+"Out"},toString:function(){return this.result()}});var e=["blend","colorMatrix","componentTransfer","composite","convolveMatrix","diffuseLighting","displacementMap","flood","gaussianBlur","image","merge","morphology","offset","specularLighting","tile","turbulence","distantLight","pointLight","spotLight"];e.forEach(function(t){var n=t.charAt(0).toUpperCase()+t.slice(1);SVG[n+"Effect"]=function(){this.constructor.call(this,SVG.create("fe"+n))};SVG[n+"Effect"].prototype=["componentTransfer"].indexOf(n)>-1?new SVG.Parent:new SVG.Effect;e.forEach(function(e){SVG[n+"Effect"].prototype[e]=function(){return this.parent[e].apply(this.parent,arguments).in(this)}})});["r","g","b","a"].forEach(function(e){SVG["Func"+e.toUpperCase()]=function(){this.constructor.call(this,SVG.create("feFunc"+e.toUpperCase()))};SVG["Func"+e.toUpperCase()].prototype=new SVG.Element});SVG.extend(SVG.FloodEffect,{});SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}).call(this);

!function(t,o,r,e,n,p,c,i,u,f){function s(t){return t&&typeof t===o&&!(typeof t.length===r&&!t.propertyIsEnumerable(e))&&t||null}function l(t){return t&&typeof t===o&&typeof t.length===r&&!t.propertyIsEnumerable(e)&&t||null}function y(t){return t&&"function"==typeof t&&t||null}function a(t){return y(t)&&t.prototype&&t===t.prototype.constructor&&t||null}function $(t,o,r,e,n,p){r&&r.hasOwnProperty(t)||(e[t]=o)}function b(t,o,r){if(l(o))for(var e=o.length;--e>=0;)b(t,o[e],r);else{r=r||{constructor:1,$super:1,prototype:1,$superp:1};var n,p,c=a(t),i=a(o),u=t.prototype;if(s(o)||c)for(n in o)$(n,o[n],r,t,c,u);if(i){p=o.prototype;for(n in p)$(n,p[n],r,t,c,u)}c&&i&&b(u,o.prototype,r)}}function g(t){var o,r;Object.freeze(t);for(r in t)o=t[r],t.hasOwnProperty(r)&&"object"==typeof o&&!Object.isFrozen(o)&&g(o)}function O(t,o){o||(o=t,t=0);var r,e,n,p,c,i,u,f,s,l,y,a=0,$={constructor:1,$singleton:1,$static:1,$statics:1,prototype:1,$super:1,$superp:1,main:1,toString:0},b=O.plugins;o=("function"==typeof o?o():o)||{},e=o.hasOwnProperty("constructor")?o.constructor:0,n=o.$singleton,p=o.$statics||o.$static;for(c in b)$[c]=1;for(r=n?function(){}:e?e:function(){},t=!t||t instanceof Array?t:[t],u=t&&t.length,s=t[0],!n&&u&&(l=s.prototype&&s===s.prototype.constructor&&s,l?(y=function(){},y.prototype=l.prototype,y.prototype.constructor=y,r.prototype=new y,r.prototype.constructor=r,l.prototype.constructor=l):r.prototype=s),i=n?r:r.prototype;u>a;){f=t[a++];for(c in f)$[c]||(r[c]=f[c]);if(!n&&0!==a)for(c in f.prototype)$[c]||(i[c]=f.prototype[c])}for(c in o)if(!$[c]){var g=o[c];g&&(g.get||g.set)?(g.enumerable=!0,Object.defineProperty(i,c,g)):i[c]=g}for(c in p)r[c]=p[c];f=t&&s||t,r.$super=f,r.$superp=f&&f.prototype||f;for(c in b)b[c](r,t,o);return"function"==typeof o.main&&o.main.call(r,r),r}O.plugins={$ready:function m(t,o,r,e){for(var n,i,u,f=r.$ready,s=o?o.length:0,l=s,a=s&&o[0].$super;s--;)for(i=0;c>i&&(u=p[i],n=o[s],n===u[0]&&(u[1].call(n,t,o,r),l--),l);i++);a&&m(t,[a],r,!0),!e&&y(f)&&(f.call(t,t,o,r),p.push([t,f]),c++)},$const:function(t,o,r){var e,n=r.$const;for(e in n)Object.defineProperty(t,e,{enumerable:!0,value:n[e]}),"object"!=typeof t[e]||Object.isFrozen(t[e])||g(t[e])}},f={Class:O,extend:b,mapOrNil:s,arrayOrNil:l,functionOrNil:y,classOrNil:a},"undefined"!=typeof module&&module.exports?module.exports=f:(u=t.Class,t.Class=O,t.jsface=f,f.noConflict=function(){t.Class=u})}(this,"object","number","length",Object.prototype.toString,[],0);

function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	negative: function () {
		return new Vector(-this.x, -this.y);
	},
	add: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x + v.x, this.y + v.y);
		else
			return new Vector(this.x + v, this.y + v);
	},
	subtract: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x - v.x, this.y - v.y);
		else
			return new Vector(this.x - v, this.y - v);
	},
	multiply: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x * v.x, this.y * v.y);
		else
			return new Vector(this.x * v, this.y * v);
	},
	divide: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x / v.x, this.y / v.y);
		else
			return new Vector(this.x / v, this.y / v);
	},
	equals: function (v) {
		return this.x == v.x && this.y == v.y;
	},
	dot: function (v) {
		return this.x * v.x + this.y * v.y;
	},
	length: function () {
		return Math.sqrt(this.dot(this));
	},
	unit: function () {
		return this.divide(this.length());
	},
	min: function () {
		return Math.min(this.x, this.y);
	},
	max: function () {
		return Math.max(this.x, this.y);
	},
	angleTo: function (a) {
		return Math.acos(this.dot(a) / (this.length() * a.length()));
	},
	toArray: function (n) {
		return [this.x, this.y].slice(0, n || 2);
	},
	clone: function () {
		return new Vector(this.x, this.y);
	},
	init: function (x, y, z) {
		this.x = x;
		this.y = y;
		return this;
	}
};

Vector.negative = function (a, b) {
	b.x = -a.x;
	b.y = -a.y;
	return b;
};
Vector.add = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x + b.x;
		c.y = a.y + b.y;
	}
	else {
		c.x = a.x + b;
		c.y = a.y + b;
	}
	return c;
};
Vector.subtract = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x - b.x;
		c.y = a.y - b.y;
	}
	else {
		c.x = a.x - b;
		c.y = a.y - b;
	}
	return c;
};
Vector.multiply = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x * b.x;
		c.y = a.y * b.y;
	}
	else {
		c.x = a.x * b;
		c.y = a.y * b;
	}
	return c;
};
Vector.divide = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x / b.x;
		c.y = a.y / b.y;
	}
	else {
		c.x = a.x / b;
		c.y = a.y / b;
	}
	return c;
};

Vector.unit = function (a, b) {
	var length = a.length();
	b.x = a.x / length;
	b.y = a.y / length;
	return b;
};

Vector.min = function (a, b) {
	return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y));
};
Vector.max = function (a, b) {
	return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y));
};
Vector.lerp = function (a, b, fraction) {
	return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function (a) {
	return new Vector(a[0], a[1]);
};
(function () {
	var out$ = typeof exports != 'undefined' && exports || typeof define != 'undefined' && {} || this;

	var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

	function isElement(obj) {
		return obj instanceof HTMLElement || obj instanceof SVGElement;
	}

	function requireDomNode(el) {
		if (!isElement(el)) {
			throw new Error('an HTMLElement or SVGElement is required; got ' + el);
		}
	}

	function isExternal(url) {
		return url && url.lastIndexOf('http', 0) == 0 && url.lastIndexOf(window.location.host) == -1;
	}

	function inlineImages(el, callback) {
		requireDomNode(el);

		var images = el.querySelectorAll('image'),
				left = images.length,
				checkDone = function () {
					if (left === 0) {
						callback();
					}
				};

		checkDone();
		for (var i = 0; i < images.length; i++) {
			(function (image) {
				var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
				if (href) {
					if (isExternal(href.value)) {
						console.warn("Cannot render embedded images linking to external hosts: " + href.value);
						return;
					}
				}
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var img = new Image();
				href = href || image.getAttribute('href');
				if (href) {
					img.src = href;
					img.onload = function () {
						canvas.width = img.width;
						canvas.height = img.height;
						ctx.drawImage(img, 0, 0);
						image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
						left--;
						checkDone();
					}
					img.onerror = function () {
						console.log("Could not load " + href);
						left--;
						checkDone();
					}
				} else {
					left--;
					checkDone();
				}
			})(images[i]);
		}
	}

	function styles(el, selectorRemap) {
		var css = "";
		var sheets = document.styleSheets;
		for (var i = 0; i < sheets.length; i++) {
			try {
				var rules = sheets[i].cssRules;
			} catch (e) {
				console.warn("Stylesheet could not be loaded: " + sheets[i].href);
				continue;
			}

			if (rules != null) {
				for (var j = 0; j < rules.length; j++) {
					var rule = rules[j];
					if (typeof (rule.style) != "undefined") {
						var match, selectorText;

						try {
							selectorText = rule.selectorText;
						} catch (err) {
							console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
						}

						try {
							if (selectorText) {
								match = el.querySelector(selectorText);
							}
						} catch (err) {
							console.warn('Invalid CSS selector "' + selectorText + '"', err);
						}

						if (match) {
							var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
							css += selector + " { " + rule.style.cssText + " }\n";
						} else if (rule.cssText.match(/^@font-face/)) {
							css += rule.cssText + '\n';
						}
					}
				}
			}
		}
		return css;
	}

	function getDimension(el, clone, dim) {
		var v = (el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
				(clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
				el.getBoundingClientRect()[dim] ||
				parseInt(clone.style[dim]) ||
				parseInt(window.getComputedStyle(el).getPropertyValue(dim));
		return (typeof v === 'undefined' || v === null || isNaN(parseFloat(v))) ? 0 : v;
	}

	function reEncode(data) {
		data = encodeURIComponent(data);
		data = data.replace(/%([0-9A-F]{2})/g, function (match, p1) {
			var c = String.fromCharCode('0x' + p1);
			return c === '%' ? '%25' : c;
		});
		return decodeURIComponent(data);
	}

	out$.svgAsDataUri = function (el, options, cb) {
		requireDomNode(el);

		options = options || {};
		options.scale = options.scale || 1;
		var xmlns = "http://www.w3.org/2000/xmlns/";

		inlineImages(el, function () {
			var outer = document.createElement("div");
			var clone = el.cloneNode(true);
			var width, height;
			if (el.tagName == 'svg') {
				width = options.width || getDimension(el, clone, 'width');
				height = options.height || getDimension(el, clone, 'height');
			} else if (el.getBBox) {
				var box = el.getBBox();
				width = box.x + box.width;
				height = box.y + box.height;
				clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

				var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
				svg.appendChild(clone)
				clone = svg;
			} else {
				console.error('Attempted to render non-SVG element', el);
				return;
			}

			clone.setAttribute("version", "1.1");
			if (!clone.getAttribute('xmlns')) {
				clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
			}
			if (!clone.getAttribute('xmlns:xlink')) {
				clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
			}
			clone.setAttribute("width", width * options.scale);
			clone.setAttribute("height", height * options.scale);
			clone.setAttribute("viewBox", [
				options.left || 0,
				options.top || 0,
				width,
				height
			].join(" "));

			outer.appendChild(clone);

			var css = styles(el, options.selectorRemap);
			var s = document.createElement('style');
			s.setAttribute('type', 'text/css');
			s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
			var defs = document.createElement('defs');
			defs.appendChild(s);
			clone.insertBefore(defs, clone.firstChild);

			var svg = doctype + outer.innerHTML;
			var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(svg));
			if (cb) {
				cb(uri);
			}
		});
	}

	out$.svgAsPngUri = function (el, options, cb) {
		requireDomNode(el);

		out$.svgAsDataUri(el, options, function (uri) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement('canvas');
				canvas.width = image.width;
				canvas.height = image.height;
				var context = canvas.getContext('2d');
				if (options && options.backgroundColor) {
					context.fillStyle = options.backgroundColor;
					context.fillRect(0, 0, canvas.width, canvas.height);
				}
				context.drawImage(image, 0, 0);
				var a = document.createElement('a'), png;
				try {
					png = canvas.toDataURL('image/png');
				} catch (e) {
					if ((typeof SecurityError !== 'undefined' && e instanceof SecurityError) || e.name == "SecurityError") {
						console.error("Rendered SVG images cannot be downloaded in this browser.");
						return;
					} else {
						throw e;
					}
				}
				cb(png);
			}
			image.onerror = function (error) {
				console.error('There was an error loading the data URI as an image', error);
			}
			image.src = uri;
		});
	}

	function download(name, uri) {
		var a = document.createElement('a');
		a.download = name;
		a.href = uri;
		document.body.appendChild(a);
		a.addEventListener("click", function (e) {
			a.parentNode.removeChild(a);
		});
		a.click();
	}

	out$.saveSvg = function (el, name, options) {
		requireDomNode(el);

		options = options || {};
		out$.svgAsDataUri(el, options, function (uri) {
			download(name, uri);
		});
	}

	out$.saveSvgAsPng = function (el, name, options) {
		requireDomNode(el);

		options = options || {};
		out$.svgAsPngUri(el, options, function (uri) {
			download(name, uri);
		});
	}

	// if define is defined create as an AMD module
	if (typeof define !== 'undefined') {
		define(function () {
			return out$;
		});
	}
})();
var LinksDrawer = Class({
    allNodes: [],
    constructor: function (drawer) {
        this.controlOffset = 85;
        this.drawer = drawer;
        this.linksGroup = this.drawer.group();
    },
    renderNodes: function (nodes) {
        var draw = this.linksGroup;
        this.allNodes = this.allNodes.concat(nodes);
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].delegateOutput && nodes[i].delegateOutput.link) {
                this.drawPath(draw, nodes[i], nodes[i].delegateOutput, nodes[i].delegateOutput.color);
            }
            for (var j = 0; j < nodes[i].outputs.length; j++) {
                if (nodes[i].outputs[j].links) {
                    var output = nodes[i].outputs[j];
                    var color = VAR_COLORS[output.type.name];
                    for (var k = 0; k < nodes[i].outputs[j].links.length; k++) {
                        if (!nodes[i].outputs[j].drawedLines)
                            nodes[i].outputs[j].drawedLines = [];
                        nodes[i].outputs[j].drawedLines.push(this.drawPath(draw, nodes[i], output, nodes[i].outputs[j].links[k], color));
                    }
                }
            }
        }

        return draw;
    },
    redrawNodes: function (nodes) {
        var affectedOutputs = [];
        var allOutputs = [];
        var nodesInputs = [];
        for (var i = 0; i < this.allNodes.length; i++) {

            var currentNode = this.allNodes[i];
            if (currentNode.outputs && nodes.indexOf(currentNode) === -1) {
                currentNode.outputs.forEach(function (output) {
                    if (output.links && output.links.length > 0)
                        allOutputs.push(output);
                });
            }

        }

        nodes.forEach(function (affNode) {
            if (affNode.inputs && affNode.inputs.length > 0) {
                affNode.inputs.forEach(function (input) {
                    nodesInputs.push(input);
                });
            }

            if (affNode.outputs && affNode.outputs.length > 0) {
                affNode.outputs.forEach(function (output) {
                    affectedOutputs.push(output);
                });
            }
        });

        for (var i = 0; i < allOutputs.length; i++) {
            var currentOutput = allOutputs[i];
            currentOutput.links.forEach(function (link) {
                if (nodesInputs.indexOf(link) !== -1) {
                    affectedOutputs.push(currentOutput);
                }
            });


        }

        var self = this;
        var draw = this.linksGroup;

        affectedOutputs.forEach(function (output) {
            if (output.drawedLines && output.drawedLines.length > 0) {
                output.drawedLines.forEach(function (line) {
                    line.remove();
                });
                output.drawedLines = [];
                if (output.links) {
                    var color = VAR_COLORS[output.type.name];
                    for (var k = 0; k < output.links.length; k++) {
                        output.drawedLines.push(self.drawPath(draw, output.parent, output, output.links[k], color));
                    }
                }
            }
        })
    },
    drawPath: function (draw, node, pin, link, color) {
        var line = draw.group();
        var minOffset = 16;
        var startX = node.x + node.width;
        var startY = pin.center.y + node.y;

        var endX = link.parent.x;
        ;
        var endY = link.center.y + link.parent.y;

        var deltaX = Math.abs(link.center.x + link.parent.x - pin.center.x - node.x);

        var cOffset = (deltaX > this.controlOffset) && this.controlOffset || Math.max(deltaX, minOffset);



        line.path(createSmoothPath(pin.center.x + node.x, pin.center.y + node.y, startX, startY)).stroke({color: color, width: 1}).style('pointer-events', 'none');

        var control1X = pin.center.x + cOffset + node.x;
        var control1Y = pin.center.y + node.y;


        var control2X = link.center.x - cOffset + link.parent.x;
        var control2Y = link.center.y + link.parent.y;





        var path = line.path(createBezierPath(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY));
        path.style('pointer-events', 'none');

        path.stroke({color: color, width: 1});
        path.fill({color: '#000000', opacity: 0});

        //endX+1 - for smooth drawing!!
        line.path(createSmoothPath(endX + 1, endY, link.center.x + link.parent.x, link.center.y + link.parent.y)).stroke({color: color, width: 1}).style('pointer-events', 'none');
        return line;
    }
});
var NodesDrawer = Class({
    dragNode: null,
    selectedNodes: [],
    movingNodes : [],
    constructor: function (drawer, parent) {
        this.drawer = drawer;
        this.parent = parent;
        this.circleRadius = 8.5;
        this.fLetter = this.drawer.defs().path(fSymbol);
        this.eventArrow = this.drawer.defs().path(eventArrow);
        this.pinCircle = this.drawer.defs().circle(this.circleRadius);
        this.pinArrow = this.drawer.defs().polygon([
            [this.circleRadius * 1.5, this.circleRadius / 2],
            [this.circleRadius * 1.2, this.circleRadius / 2 - this.circleRadius / 4],
            [this.circleRadius * 1.2, this.circleRadius / 2 + this.circleRadius / 4],
            [this.circleRadius * 1.5, this.circleRadius / 2]
        ]);
        this.opacityLinearGradient = this.drawer.gradient('linear', function (stop) {
            stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
            stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
            stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
            stop.at({offset: 1, color: '#ffffff', opacity: 1});
        });
        this.opacityLinearGradient.from(0, 1).to(0, 0);
    },
    renderNodes: function (nodes) {
        var draw = this.drawer.group();
        for (var i = 0; i < nodes.length; i++) {
            var currentNode = nodes[i];
            currentNode.calculateWidth();
            currentNode.draw(this);
            var node = currentNode.allNode;
            node.translate(currentNode.x, currentNode.y);
            draw.add(node);
            this.makeUnselectable(currentNode.allNode);
            this.subscribeNode(currentNode);
            currentNode.pins.forEach(function (pin) {
                pin.draw.style('cursor', 'default');
                pin.draw.mouseover(function (e) {
                    if (!this.dragNode)
                        pin.hover.show();
                });
                pin.draw.mouseout(function (e) {
                    pin.hover.hide();
                });
            })
        }

        return draw;
    },
    subscribeNode: function (el) {
        var self = this;
        if (el instanceof CommentNode) {
            //console.log(el);
            el.selectable.mousedown(function (event) {
                if (event.button === 0) {
                    //console.log('SELECTABLE');

                    self.dragNode = el;
                    var delta = self.parent.getCoords(event);
                    self.nodeMouseDownPoint = self.parent.getCoords(event);
                    var sub = delta.subtract(self.parent.origin);
                    self.pointOnNode = new Vector(sub.x - self.dragNode.x * self.parent.currentScale, sub.y - self.dragNode.y * self.parent.currentScale);
                    //console.log(pointOnNode);


                }
                if (event.button === 0) {
                    event.stopPropagation();
                }
            });
        } else {
            el.allNode.mousedown(function (event) {
                if (event.button === 0) {

                    self.dragNode = el;
                    var delta = self.parent.getCoords(event);
                    self.nodeMouseDownPoint = self.parent.getCoords(event);
                    var sub = delta.subtract(self.parent.origin);
                    self.pointOnNode = new Vector(sub.x - self.dragNode.x * self.parent.currentScale, sub.y - self.dragNode.y * self.parent.currentScale);
                    //console.log(pointOnNode);


                }
                if (event.button === 0) {
                    event.stopPropagation();
                }
            });
        }


        if (el instanceof CommentNode) {
            el.selectable.mouseup(function (event) {
                var mouseUpPoint = self.parent.getCoords(event)
                if (event.button === 0) {
                    self.movingNodes = [];
                    if (self.nodeMouseDownPoint.equals(mouseUpPoint))
                    {
                        if (!self.isNodeSelected(el) || event.ctrlKey) {
                            self.selectNode(el, event);
                        } else if (self.selectedNodes.length > 1) {
                            self.selectOneNode(el);
                        }
                    }


                    self.dragNode = null;
                }

            });
        } else {
            el.allNode.mouseup(function (event) {
                var mouseUpPoint = self.parent.getCoords(event)
                if (event.button === 0) {
                    self.movingNodes = [];
                    if (self.nodeMouseDownPoint.equals(mouseUpPoint))
                    {
                        if (!self.isNodeSelected(el) || event.ctrlKey) {
                            self.selectNode(el, event);
                        } else if (self.selectedNodes.length > 1) {
                            self.selectOneNode(el);
                        }
                    }
                    self.dragNode = null;
                }

            });
        }
    },
    makeUnselectable: function (node) {
        if (node.node)
            node = node.node;
        if (node.nodeType === 1) {
            if (node.tagName === "text" || node.tagName === "tspan")
                node.setAttribute("style", node.getAttribute("style") + "; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
        }
        var child = node.firstChild;
        while (child) {
            this.makeUnselectable(child);
            child = child.nextSibling;
        }
    },
    isNodeSelected: function (el) {
        return this.selectedNodes.indexOf(el) !== -1;
    },
    selectAllNodes: function () {
        var self = this;
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.parent.nodesObjects.forEach(function (node) {
            node.hover.show();
            self.selectedNodes.push(node);
        });
        //console.log('len', selectedNodes.length);
    },
    selectOneNode: function (el) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodes[0] = el;
        this.selectedNodes.forEach(function (node) {
            if (node.hover.visible()) {
                node.hover.hide();
            } else {
                node.hover.show();
            }
        })
    },
    selectNodeGroup: function (group) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodes = group;
        this.selectedNodes.forEach(function (node) {
            node.hover.show();
        })
    },
    addNodeGroupToSelect: function (group) {
        var self = this;
        group.forEach(function (node) {
            if (self.selectedNodes.indexOf(node) === -1) {
                self.selectedNodes.push(node);
                node.hover.show();
            }
        });
    },
    selectNode: function (el, event) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });

        if (this.selectedNodes.indexOf(el) === -1) {
            if (event.shiftKey) {
                this.selectedNodes.push(el);
            } else if (event.ctrlKey) {
                this.selectedNodes.push(el);
            } else {
                this.selectedNodes.splice(0, this.selectedNodes.length);
                this.selectedNodes[0] = el;
            }
        } else if (event.ctrlKey) {
            this.selectedNodes.splice(this.selectedNodes.indexOf(el), 1);
        } else {
            this.selectedNodes.splice(this.selectedNodes.indexOf(el), 1);
        }



        this.selectedNodes.forEach(function (node) {
            if (node.hover.visible()) {
                node.hover.hide();
            } else {
                node.hover.show();
            }
        })
    },
    unselectAllNodes: function () {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
    }
});
var InterfaceDrawer = Class({
    constructor: function (drawer) {
        this.drawer = drawer;
        this.scaleLabel = null;
        this.menuRect = null;
        this.selectRect = null;
        this.saveCallback = null;
    },
    setSaveCallback: function (cb) {
        this.saveIcon.click(function (e) {
            cb(e);
        });
    },
    setFullScreenCallback: function (cb) {
        this.fullScreenIcon.click(function (e) {
            cb(e);
        });
    },
    render: function () {
        var draw = this.drawer.group();
        this.scaleLabel = this.drawScaleLabel();
        this.scaleLabel.style('pointer-events', 'none')
        this.menuRect = this.drawMenuRect();
        this.menuRect.style('pointer-events', 'none');
        var self = this;
        this.saveIcon = this.drawSaveIcon();
        this.fullScreenIcon = this.drawFullScreenIcon();

        this.saveIcon.mouseover(function (e) {
            self.saveIcon.hover.show();
        });
        this.saveIcon.mouseout(function (e) {
            self.saveIcon.hover.hide();
        });

        this.fullScreenIcon.mouseover(function (e) {
            self.fullScreenIcon.hover.show();
        });
        this.fullScreenIcon.mouseout(function (e) {
            self.fullScreenIcon.hover.hide();
        });



        draw.add(this.menuRect);
        draw.add(this.scaleLabel);
        draw.add(this.saveIcon);
        draw.add(this.fullScreenIcon);
        return draw;
    },
    drawFullScreenIcon: function () {
        var fullScreenIcon = this.drawer.group();
        var hover = fullScreenIcon.rect(40, 40).radius(4);
        fullScreenIcon.hover = hover;
        hover.hide();
        var icon = fullScreenIcon.image('/images/interface/LV_FullScreen.png', 40, 40);

        hover.fill({color: "#f1b000"});
        fullScreenIcon.translate(60, 0);
        return fullScreenIcon;
    },
    drawSaveIcon: function () {
        var saveIcon = this.drawer.group();
        var hover = saveIcon.rect(40, 40).radius(4);
        saveIcon.hover = hover;
        hover.hide();
        var icon = saveIcon.image('/images/interface/LV_Save.png', 40, 40);

        hover.fill({color: "#f1b000"});
        saveIcon.translate(10, 0);
        return saveIcon;
    },
    setScaleLabelText: function (step) {
        if (step > 0)
            step = "+" + step;
        else if (step === 0)
            step = "1:1"
        this.scaleLabel.text("Zoom {0}".format(step));
    },
    drawMenuRect: function () {
        var rect = this.drawer.rect(this.drawer.width(), 48);
        rect.opacity(0.4);
        rect.backward();
        return rect;
    },
    drawScaleLabel: function () {
        var draw = this.drawer.group();
        var scaleLabel = draw.text("Zoom 1:1");

        scaleLabel.font({
            family: 'Roboto, sans-serif'
            , size: 24
            , anchor: 'end'
            , color: "#7f7f7f"
        });
        scaleLabel.style('font-weight', 'bold');
        scaleLabel.style('-webkit-user-select', 'none');
        scaleLabel.style('-moz-user-select', 'none');
        scaleLabel.style('-ms-user-select', 'none');
        scaleLabel.translate(this.drawer.width() - 5, 0);
        scaleLabel.fill({color: "#7f7f7f"});
        //	scaleLabel.opacity(0.2);

        return scaleLabel;

    },
    drawSelectRect: function (coordsStart, coordsEnd) {
        if (this.selectRect)
            this.selectRect.remove();
        var draw = this.drawer.group();
        this.selectRect = draw.rect(Math.abs(coordsEnd.x - coordsStart.x), Math.abs(coordsEnd.y - coordsStart.y)).fill({opacity: 0}).stroke({color: "#fff", width: 1, dasharray: "10,5"});
        if (coordsStart.x < coordsEnd.x && coordsStart.y < coordsEnd.y) {
            this.selectRect.move(coordsStart.x, coordsStart.y);
        } else if (coordsStart.x < coordsEnd.x && coordsStart.y > coordsEnd.y) {
            this.selectRect.move(coordsStart.x, coordsEnd.y);
        } else if (coordsStart.x > coordsEnd.x && coordsStart.y < coordsEnd.y) {
            this.selectRect.move(coordsEnd.x, coordsStart.y);
        } else {
            this.selectRect.move(coordsEnd.x, coordsEnd.y);
        }
    },
    removeSelectRect: function () {
        if (this.selectRect)
            this.selectRect.remove();
    }
});
var CONFIG = {
    GRID_STEP: 16,
    GRID_COEFF: 3
}

var VAR_TYPES = {
    bool: {code: 0, name: "bool"},
    byte: {code: 1, name: "byte"},
    int: {code: 2, name: "int"},
    float: {code: 3, name: "float"},
    name: {code: 4, name: "name"},
    string: {code: 5, name: "string"},
    text: {code: 6, name: "text"},
    vector: {code: 7, name: "vector"},
    rotator: {code: 8, name: "rotator"},
    transform: {code: 9, name: "transform"},
    actor: {code: 10, name: "actor"},
    event: {code: 11, name: "delegateOut"},
    object: {code: 12, name: "object"},
    class: {code: 13, name: "class"},
    struct: {code: 14, name: "struct"},
    exec: {code: 15, name: "exec"},
    interface: {code: 16, name: "interface"},
    macro: {code: 17, name: "macro"},
    delegate: {code: 18, name: "delegate"},
    wildcard: {code: 19, name: "wildcard"}
};

var ICONS = {
    branch: "icon_Blueprint_Branch_16x.png",
    make_struct: "icon_Blueprint_MakeStruct_16x.png",
    break_struct: "icon_Blueprint_BreakStruct_16x.png",
    event_custom: "icon_Blueprint_CustomEvent_16x.png",
    event: "icon_Blueprint_Event_16x.png",
    for_each: "icon_Blueprint_ForEach_16x.png",
    for_loop: "icon_Blueprint_Loop_16x.png",
    make_array: "icon_Blueprint_MakeArray_16x.png",
    flip_flop: "icon_Blueprint_FlipFlop_16x.png",
    dynamic_cast: "icon_Blueprint_Cast_16x.png",
    timeline: "icon_Blueprint_Timeline_16x.png",
    node: "icon_Blueprint_Node_16x.png",
    message: "MessageIcon.png",
    latent: "LatentIcon.png",
    valid: "icon_Blueprint_IsValid_16x.png",
    select: "icon_Blueprint_Select_16x.png",
    sequence: "icon_Blueprint_Sequence_16x.png",
    macro: "icon_Blueprint_Macro_16x.png",
    keyboard: "icon_Blueprint_KeyboardEvent_16x.png",
    switch_on: "icon_Blueprint_Switch_16x.png",
    mouse : "icon_Blueprint_MouseEvent_16x.png"
}

var FUNCTIONS_MAPPING = {
    K2Node_CallFunction: null,
    K2Node_SpawnActorFromClass: {
        text: "Spawn Actor"
    },
    K2Node_GetInputAxisValue: null,
    K2Node_MakeArray: {
        text: "Make Array"
    },
    K2Node_CreateWidget: {
        text: "Construct"
    },
    K2Node_MakeStruct: {
        text: "Make Struct"
    },
    K2Node_BreakStruct: {
        text: "Break Struct"
    },
    K2Node_LatentOnlineCall: {
        async: true
    },
    K2Node_AsyncAction: {
        async: true
    },
    K2Node_LeaderboardQuery: {
        text: "Read Leaderboard Integer",
        async: true
    },
    K2Node_SwitchInteger: {
        text: "Switch on Int",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchEnum: {
        text: "Switch on Enum",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchString: {
        text: "Switch on String",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_CallParentFunction: {
        morpher: function (obj) {
            obj.name = "Parent: " + obj.name;
            obj.isParent = true;
            return obj;
        }
    },
    K2Node_AddComponent: null,
    K2Node_FormatText: {
        text: "Format Text",
        icon: ICONS["node"],
        morpher: function (obj) {
            obj.isPure = true;
            return obj;
        }
    },
    K2Node_GetInputVectorAxisValue: {
        icon: ICONS["keyboard"],
        morpher: function (obj,node) {
            obj.isPure = true;
            obj.name = "Get "+node.inputAxisKey;
            return obj;
        }
    },
    K2Node_GetDataTableRow : {
        text : "Get Data Table Row"
    }
}

var NAME_MAPPING = {
    "K2_Destroy Actor": "DestroyActor",
    "VSize": "VectorLength",
    "K2_Get Component Location": "GetWorldLocation",
    "K2_Set Actor Relative Location": "SetActorRelativeLocation",
    "K2_Set Relative Location": "SetRelativeLocation",
    "K2_Set Actor Location": "SetActorLocation",
    "K2_Set Actor Relative Rotation": "SetActorRelativeRotation",
    "K2_Set Relative Rotation": "SetRelativeRotation",
    "K2_Set Actor Rotation": "SetActorRotation",
    "K2_Set Timer": "Set Timer by Function Name",
    "K2_Get Actor Location": "GetActorLocation",
    "K2_Get Actor Rotation": "GetActorRotation",
    "RLerp": "Lerp (Rotator)",
    "FTrunc": "Truncate",
    "Conv_Int To Text": "ToText(int)",
    "Conv_Float To Text": "ToText(float)",
    "Conv_Text To String": "ToString(text)",
}

var FUNCTION_NAMES_MAPPING = {
    Array_Set: "Set Array Elem"
}

var ARRAY_FUNCTION_NAMES_MAPPING = {
    Array_Add: {
        text: "Add"
    },
    "Array_Add Unique": {
        text: "AddUnique"
    },
    Array_Append: {
        text: "Append"
    },
    Array_Clear: {
        text: "Clear"
    },
    Array_Contains: {
        text: "Contains"
    },
    Array_Find: {
        text: "Find"
    },
    Array_Get: {
        text: "Get"
    },
    Array_Insert: {
        text: "Insert"
    },
    "Array_Last Index": {
        text: "Last Index"
    },
    Array_Length: {
        text: "Length"
    },
    Array_Remove: {
        text: "Remove Index"
    },
    "Array_Remove Item": {
        text: "Remove"
    },
    Array_Resize: {
        text: "Resize"
    },
    Array_Set: {
        text: "Set Array Elem",
        showHeader: true
    },
    Array_Shuffle: {
        text: "Shuffle"
    }
}

var VAR_COLORS = {
    bool: "#8c0202",
    byte: "#026960",
    int: "#1ed6a4",
    float: "#97ef42",
    name: "#c07bef",
    string: "#ef02c8",
    text: "#d975a0",
    vector: "#efbd22",
    rotator: "#97a9ef",
    transform: "#eb6b02",
    actor: "#02a2e9",
    execFunction: "#5b8fb1",
    execFunctionF: "#79c9ff",
    pureFunction: "#83b47c",
    pureFunctionF: "#aaeea0",
    event: "#8d1313",
    delegate: "#ff3838",
    object: "#0481b7",
    class: "#5501b3",
    struct: "#024bab",
    exec: "#fff",
    interface: "#c9d58f",
    macro: "#b7b4aa",
    wildcard: "#7f7979",
    dynamicCast: "#258489",
    timeline: "#9d7e24",
    parent: "#854613",
    switch_on: "#8f9013"
};


var createBezierPathT = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
    return 'C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};


var fSymbol = "m 0,0 q -0.63477,0 -1.06201,-0.15259 l 0,-1.47705 q 0.37231,0.12818 0.7019,0.12818 0.83008,0 1.04981,-1.0376 l 1.13525,-5.3772 -1.02539,0 0.177,-0.90942 1.15357,-0.48828 0.10986,-0.5127 q 0.25024,-1.15967 0.84228,-1.69067 0.59815,-0.53711 1.67237,-0.53711 0.79956,0 1.43432,0.29907 l -0.48828,1.36719 q -0.42114,-0.18921 -0.81176,-0.18921 -0.34791,0 -0.56153,0.24414 -0.21362,0.24414 -0.28686,0.64087 l -0.0732,0.37842 1.33667,0 -0.29907,1.3977 -1.34277,0 -1.19629,5.65186 q -0.46997,2.2644 -2.46582,2.2644 z"

var eventArrow = "m19.666 0.0000015532c-0.635-0.00071-1.272 0.24199-1.759 0.72851l-17.174 17.13c-0.97546 0.97305-0.97718 2.5424-0.004 3.5176l17.131 17.164c0.97328 0.97523 2.5421 0.97695 3.5176 0.004l17.174-17.131c0.97545-0.97304 0.97718-2.5424 0.004-3.5176l-17.132-17.163c-0.486-0.4881-1.122-0.7322-1.758-0.73291zm-0.972 4.8379c0-1.4496 3.7208 1.7531 7.7668 5.4192s8.417 7.7958 8.417 9.2839c0 1.4882-4.3711 5.2806-8.417 9.1575-4.046 3.8769-7.7668 7.8382-7.7668 5.5456v-9.8848h-8.3514v-4.8184-4.8164h8.3514z";

var checkSymbol = "M 41.272753,92.252341 52.470676,104.29345 71.57596,74.519064"

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

String.prototype.fromCamelCase = function () {
    var newString = '';
    for (var i = 0; i < this.length; i++) {
        newString += this[i];
        if (isLetter(this[i]) && this[i + 1] && isLetter(this[i + 1])) {
            if (this[i].toLowerCase() === this[i] && this[i + 1].toUpperCase() === this[i + 1]) {
                newString += " ";
            }
        }
    }
    return newString.trim();
}

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}


function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}


var createBezierPath = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
    return 'M ' + startX + ',' + startY + ' C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};

var createSmoothPath = function (startX, startY, endX, endY) {
    return 'M ' + startX + ',' + startY + ' S ' + startX + ',' + startY + ' ' + endX + ',' + endY;
};


function intersectNode(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.height * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

function intersectNodeSelectable(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.selectableHeight * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

function inNode(node1, node2) {
    if (node2.x >= node1.x &&
            node2.x + node2.width <= node1.x + node1.width &&
            node2.y >= node1.y &&
            node2.y + node2.height <= node1.height + node1.y) {
        return true;
    } else
        return false;
}


function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for (; i < len; i++) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for (i in obj) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    return obj;
}

var varNodeGlossSize = [64, 28];

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var BPParser = Class({
    constructor: function (text) {
        this.text = text;
        this.txt = this.text.split("\n");
    },
    getObject: function () {

    },
    strToObject: function (str, obj) {
        var retObj = {};
        str = str.replace("Begin Object", "");
        str = str.replace("End Object", "");
        str = str.trim();
        var accum = "";
        var currentProperty = null;
        var currentValue = null;
        var retObj = {};
        for (var i = 0; i <= str.length; i++) {
            if (str[i] === "=") {
                currentProperty = accum;
                retObj[currentProperty] = null;
                accum = "";
            } else if (((i + 1 > str.length) || (str[i] === " ")) && currentProperty) {
                currentValue = accum;
                retObj[currentProperty] = currentValue;

                currentProperty = null;
                currentValue = null;
                accum = "";
            } else {
                accum += str[i];
            }
        }
        return retObj;
    },
    strToObjectParams: function (str, obj) {
        str = str.trim();
        var left = str.substr(0, str.indexOf('='));
        var right = str.substr(str.indexOf('=') + 1);
        if (right[0] === "(") {
            obj[left] = {};
            right = right.replace("(", "");
            right = right.replace(")", "");
            var tArray = right.split(",");
            for (var i = 0; i < tArray.length; i++) {
                var final = tArray[i].trim().split("=");
                obj[left][final[0]] = final[1];
            }

        } else {
            obj[left] = right;
        }

    },
    parseObject: function (lineCounter, stack) {
        if (this.txt[lineCounter].length === 0)
            return lineCounter;
        var obj = this.strToObject(this.txt[lineCounter]);
        stack.push(obj);
        lineCounter++;
        while (lineCounter < this.txt.length) {
            var str = this.txt[lineCounter];
            if (str.indexOf("Begin Object") !== -1) {
                if (!obj.objects) {
                    obj.objects = [];
                }
                lineCounter = this.parseObject(lineCounter, obj.objects);
            } else if (str.indexOf("End Object") !== -1) {
                break;
            } else {
                this.strToObjectParams(str, obj);
            }
            lineCounter++;
        }

        return lineCounter;
    },
    verify: function (txt) {
        var bCount = 0, eCount = 0;
        txt.forEach(function (str) {
            if (str.indexOf("Begin Object") !== -1) {
                bCount++;
            } else if (str.indexOf("End Object") !== -1) {
                eCount++;
            }
        });

        if (eCount === bCount)
            return true;


        return false;

    },
    parseText: function () {
        var txt = this.txt;
        var retObj = {};
        var objects = [];
        var res = 0;
        if (!this.verify(this.txt))
            return null;
        while (res < this.txt.length) {
            res = this.parseObject(res, objects);
            res++;
        }
        var original = objects;
        var work = JSON.parse(JSON.stringify(objects));
        
        for (var i = 0; i < work.length; i++) {
            var currentNode = work[i];
            
            if (currentNode.FunctionReference) {
                currentNode["nodeName"] = currentNode.FunctionReference.MemberName.replace(/["']/g, "");
                currentNode["nodeName"] = currentNode["nodeName"].fromCamelCase();
                if (currentNode.FunctionReference.MemberParent)
                    currentNode["nodeParent"] = currentNode.FunctionReference.MemberParent;
                delete currentNode.FunctionReference;
            } else if (currentNode.ProxyFactoryFunctionName) {
                currentNode["nodeName"] = currentNode.ProxyFactoryFunctionName.replace(/["']/g, "");
                currentNode["nodeName"] = currentNode["nodeName"].fromCamelCase();
                if (currentNode.ProxyClass) {
                    currentNode["nodeName"] += " for ";
                    var forClass = currentNode.ProxyClass.split(".")[1].split("_")[0].fromCamelCase();
                    currentNode["nodeName"] += forClass;
                }

                delete currentNode.ProxyFactoryFunctionName;

            } else if (currentNode.MacroGraphReference) {
                //	console.log(currentNode.MacroGraphReference.MacroGraph);
                var tmp = currentNode.MacroGraphReference.MacroGraph.replace(/["']/g, "");
                if (tmp.split(":").length > 1) {
                    currentNode["nodeName"] = tmp.split(":")[1].fromCamelCase();
                } else {
                    currentNode["nodeName"] = tmp.fromCamelCase();
                }
                delete currentNode.MacroGraphReference;
            } else if (currentNode.EventReference) {
                if (!currentNode.InputAxisName && !currentNode.AxisKey) {
                    if (!currentNode.DelegatePropertyName) {
                        currentNode["nodeName"] = currentNode.EventReference.MemberName.replace(/["']/g, "").replace("Receive", "");
                        currentNode["nodeName"] = "Event " + currentNode["nodeName"];
                    } else {
                        currentNode["nodeName"] = currentNode.DelegatePropertyName.replace(/["']/g, "");
                        if (currentNode.ComponentPropertyName)
                            currentNode["nodeName"] += " (" + currentNode.ComponentPropertyName.replace(/["']/g, "") + ")";
                    }
                } else if (currentNode.InputAxisName) {
                    currentNode["nodeName"] = currentNode.InputAxisName.replace(/["']/g, "");
                    currentNode["nodeName"] = "InputAxis " + currentNode["nodeName"];
                } else if (currentNode.AxisKey) {
                    currentNode["nodeName"] = currentNode.AxisKey.replace(/["']/g, "");
                    currentNode["nodeName"] = "InputAxis " + currentNode["nodeName"];
                }
                delete currentNode.EventReference;
            } else if (currentNode.DelegateReference) {

                currentNode["nodeName"] = "Call " + currentNode.DelegateReference.MemberName.replace(/["']/g, "");
                //console.log(currentNode["nodeName"]);
                //delete currentNode.DelegateReference;
            }

            if (!currentNode["nodeName"] && currentNode.CustomFunctionName) {
                currentNode["nodeName"] = currentNode.CustomFunctionName;
                currentNode.isCustom = true;
            }

            if (currentNode["InputActionName"]) {
                if (currentNode["nodeName"])
                    currentNode["nodeName"] += currentNode["InputActionName"];
                else if (currentNode["Class"]) {
                    currentNode["Class"] += currentNode["InputActionName"].replace(/["']/g, "").fromCamelCase();
                }
            }
            var pinCounter = 0;
            currentNode.pins = [];
            while (currentNode["Pins({0})".format(pinCounter)]) {
                currentNode.pins.push(currentNode["Pins({0})".format(pinCounter)]);
                delete currentNode["Pins({0})".format(pinCounter)];
                pinCounter++;
            }
            if (currentNode.objects) {
                for (var j = currentNode.objects.length - 1; j >= 0; j--) {
                    var item = currentNode.objects[j];
                    if (item.Class)
                        currentNode.objects.splice(j, 1);
                }
            }
            //assert(currentNode.pins.length === currentNode.objects.length,"currentNode.pins.length !== currentNode.objects.length");
            var tmpPins = [];
            for (var j = 0; j < currentNode.pins.length; j++) {
                var currentPin = currentNode.pins[j];
                for (var k = 0; k < currentNode.objects.length; k++) {
                    //HERE PROBLEM!!!
                    //console.log(currentNode.objects[k]);
                    var objName = currentNode.objects[k].Name.replace(/["']/g, "");
                    if (currentPin.indexOf(objName) !== -1) {
                        var newPin = {};
                        newPin = currentNode.objects[k];
                        newPin.pinId = parseInt(currentNode.objects[k].Name.split("_")[1].replace(/["']/g, ""));
                        if (currentNode.objects[k].PinType)
                            newPin.pinType = currentNode.objects[k].PinType.PinCategory;
                        if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.bIsArray) {
                            newPin.isArray = true;
                        }
                        if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.PinSubCategoryObject) {
                            newPin.subType = currentNode.objects[k].PinType.PinSubCategoryObject;
                            if (newPin.subType.indexOf("ScriptStruct") !== -1) {
                                var start_pos = newPin.subType.indexOf('\'') + 1;
                                var end_pos = newPin.subType.indexOf('\'', start_pos);
                                var quotesText = newPin.subType.substring(start_pos, end_pos)
                                var tmp = quotesText.split("/");
                                var subType = tmp[tmp.length - 1];
                                newPin.pinSubType = subType.split(".")[1].toLowerCase();
                            }
                        }
                        if (currentNode.objects[k].PinName) {
                            newPin.pinText = currentNode.objects[k].PinName.replace(/["']/g, "")
                            if (newPin.pinText.indexOf(" ") === -1) {
                                newPin.pinText = newPin.pinText.fromCamelCase();
                            }
                            if (newPin.pinText[0] === "b") {
                                newPin.pinText = newPin.pinText.substr(1, newPin.pinText.length - 1);
                            }
                        } else {
                            newPin.pinText = "";
                        }


                        newPin.isOutput = (currentNode.objects[k].Direction && currentNode.objects[k].Direction === "EGPD_Output") && true || false;
                        newPin.linkedTo = [];
                        pinCounter = 0;
                        while (currentNode.objects[k]["LinkedTo({0})".format(pinCounter)]) {
                            var lTo = currentNode.objects[k]["LinkedTo({0})".format(pinCounter)];
                            var lToA = lTo.split("_");
                            newPin.linkedTo.push(parseInt(lToA[lToA.length - 1]));
                            delete currentNode.objects[k]["LinkedTo({0})".format(pinCounter)];
                            pinCounter++;
                        }



                        delete newPin.Direction;
                        delete newPin.PinName;
                        //delete newPin.Name;
                        delete newPin.PinType;
                        tmpPins.push(newPin);
                        break;
                    }
                }
            }


            currentNode.pins = tmpPins;
            delete currentNode.objects;


            for (var j = 0; j < currentNode.pins.length; j++) {
                var currentPin = currentNode.pins[j];
                for (var k in currentPin) {
                    if (k.length > 1) {
                        var str = currentPin[k];
                        if (str[0] === '"')
                            currentPin[k] = currentPin[k].substr(1, currentPin[k].length - 2)

                        if (k[0].toUpperCase() === k[0]) {
                            var newName = k.substr(0, 1).toLowerCase() + k.substr(1, k.length - 1);
                            currentPin[newName] = currentPin[k];
                            delete currentPin[k];
                        }
                    }
                }
            }

            for (var k in currentNode) {
                if (k.length > 1) {
                    var str = currentNode[k];
                    if (str[0] === '"')
                        currentNode[k] = currentNode[k].substr(1, currentNode[k].length - 2)

                    if (k[0].toUpperCase() === k[0]) {
                        var newName = k.substr(0, 1).toLowerCase() + k.substr(1, k.length - 1);
                        currentNode[newName] = currentNode[k];
                        delete currentNode[k];
                    }
                }
            }

        }
        //console.log(work);
        return work;
    }
});

function BPToNodes(objects, origin) {
    var origin = origin || new Vector(0, 0);
    var minX, minY;
    var newNodes = [];
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].nodePosX && objects[i].nodePosY) {
            minX = objects[i].nodePosX;
            minY = objects[i].nodePosY;
            break;
        }

    }


    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        if (parseInt(curObj.nodePosX) < minX)
            minX = curObj.nodePosX;
        if (parseInt(curObj.nodePosY) < minY)
            minY = curObj.nodePosY;
    }

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        if (!curObj.nodePosY)
            curObj.nodePosY = 0;
        if (!curObj.nodePosX)
            curObj.nodePosX = 0;
        curObj.nodePosY -= minY;
        curObj.nodePosX -= minX;

        curObj.nodePosY += origin.y;
        curObj.nodePosX += origin.x;
    }

    var maxX = 0, maxY = 0;

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];

        if (parseInt(curObj.nodePosY) + parseInt(curObj.nodeHeight) > maxY)
            maxY = parseInt(curObj.nodePosY) + parseInt(curObj.nodeHeight);

        if (parseInt(curObj.nodePosX) + parseInt(curObj.nodeWidth) > maxX)
            maxX = parseInt(curObj.nodePosX) + parseInt(curObj.nodeWidth);
    }

    //console.log(maxX, maxY);



    var links = [];
    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        var x, y;
        var newNode;
        var nN;
        x = curObj.nodePosX;
        y = curObj.nodePosY;
        if (curObj.class && curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
            newNode = {
                name: curObj.nodeComment,
                width: curObj.nodeWidth,
                height: curObj.nodeHeight
            };
            if (curObj.commentColor)
                newNode.commentColor = curObj.commentColor;
            nN = new CommentNode(newNode, x, y);
            newNodes.push(nN);
        }


    }


    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];

        var inputs = [];
        var outputs = [];
        var x, y;
        var newNode;
        var nN;
        x = curObj.nodePosX;
        y = curObj.nodePosY;

        if (curObj.pins.length === 0) {
            //console.log('empty pins');
            continue
        }

        for (var j = 0; j < curObj.pins.length; j++) {
            var curPin = curObj.pins[j];
            var pinType = VAR_TYPES[curPin.pinSubType] && VAR_TYPES[curPin.pinSubType] || VAR_TYPES[curPin.pinType];
            if (curPin.bHidden === "True")
                continue;

            if (curPin.isOutput) {
                for (var k = 0; k < curPin.linkedTo.length; k++) {
                    links.push({from: curPin.pinId, to: curPin.linkedTo[k]})
                }
            }
            var newPin = {
                name: curPin.pinFriendlyName && curPin.pinFriendlyName || curPin.pinText,
                type: pinType,
                id: curPin.pinId
            };

            if (curPin.pinFriendlyName && curPin.pinFriendlyName.indexOf("NSLOCTEXT") !== -1) {
                var tmp = curPin.pinFriendlyName.replace("NSLOCTEXT(", "").replace(")", "");
                var tmpArr = tmp.split(",");
                newPin.name = tmpArr[tmpArr.length - 1].replace(/["']/g, "");
            }

            if (curPin.pinToolTip) {
                newPin.tooltip = curPin.pinToolTip;
            }

            if (curPin.isArray)
                newPin.isArray = true;
            if (curPin.linkedTo.length > 0)
                newPin.linked = true;
            else
                newPin.linked = false;

            if (!newPin.linked && !curPin.isOutput) {
                if (newPin.type === VAR_TYPES["vector"] || newPin.type === VAR_TYPES["rotator"]) {
                    var tmpValue = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    if (tmpValue)
                    {
                        var vect = tmpValue.split(",");
                        for (var z = 0; z < vect.length; z++) {
                            vect[z] = parseFloat(vect[z]).toFixed(1);
                        }
                    } else {
                        vect[0] = 0.0;
                        vect[1] = 0.0;
                        vect[2] = 0.0;
                    }

                    newPin.value = vect;
                } else if (newPin.type === VAR_TYPES["float"] || newPin.type === VAR_TYPES["int"] || newPin.type === VAR_TYPES["byte"]) {
                    newPin.value = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    //newPin.value = parseFloat(newPin.value).toFixed(1);
                } else if (newPin.type === VAR_TYPES["bool"]) {
                    newPin.value = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    if (newPin.value === "true")
                        newPin.value = true;
                    else
                        newPin.value = false;
                    //newPin.value = parseFloat(newPin.value).toFixed(1);
                } else if (newPin.type === VAR_TYPES["actor"] || newPin.type === VAR_TYPES["object"]) {
                    if (curPin.pinText === "self") {
                        newPin.value = "self";
                    }
                }
            }

            if (curPin.isOutput) {
                outputs.push(newPin);
            } else {
                inputs.push(newPin);
            }
        }

        if (!curObj.class || (inputs.length === 0 && outputs.length === 0))
            continue

        if (typeof FUNCTIONS_MAPPING[curObj.class] !== "undefined") {
            var async = false;
            if (FUNCTIONS_MAPPING[curObj.class] !== null) {
                if (FUNCTIONS_MAPPING[curObj.class].text) {
                    curObj.nodeName = FUNCTIONS_MAPPING[curObj.class].text;
                }

                if (FUNCTIONS_MAPPING[curObj.class].async) {
                    async = true;
                }

            }



            newNode = {
                isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            if (FUNCTIONS_MAPPING[curObj.class] !== null) {
                if (FUNCTIONS_MAPPING[curObj.class].async) {
                    newNode.async = true;
                }

                if (FUNCTIONS_MAPPING[curObj.class].icon) {
                    newNode.icon = FUNCTIONS_MAPPING[curObj.class].icon;
                }
                
                 if (FUNCTIONS_MAPPING[curObj.class].morpher) {
                    FUNCTIONS_MAPPING[curObj.class].morpher(newNode,curObj);
                    console.log("After morpher",newNode);
                }

            }

            if (curObj.class.indexOf("K2Node_MakeArray") !== -1)
                newNode.isPure = true;

            if (newNode.name.indexOf("Conv_") !== -1 && newNode.name.indexOf("Int To Text") === -1 && newNode.name.indexOf("Float To Text") === -1) {
                nN = new ConverterNode(newNode, x, y);
            } else {
                nN = new FunctionNode(newNode, x, y);
            }

        } else if (curObj.class.indexOf("K2Node_DynamicCast") !== -1) {
            var tmpArr = curObj.targetType.split(".");
            var name = "Cast to " + tmpArr[tmpArr.length - 1].replace("_C", "").replace(/["']/g, "");
            newNode = {
                name: name,
                inputs: inputs,
                outputs: outputs
            };


            nN = new CastNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Timeline") !== -1) {
            newNode = {
                name: curObj.timelineName,
                inputs: inputs,
                outputs: outputs
            };


            nN = new TimelineNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_CallDelegate") !== -1) {
            // console.log(curObj);
            newNode = {
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };


            nN = new CallDelegateNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_CallArrayFunction") !== -1) {
            newNode = {
                isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };
            if (curObj.nodeName.indexOf("_Set") !== -1) {
                nN = new FunctionNode(newNode, x, y);
            } else {
                nN = new ArrayFunctionNode(newNode, x, y);
            }






        } else if (curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
            continue
        } else if (curObj.class.indexOf("K2Node_MacroInstance") !== -1 || curObj.class.indexOf("K2Node_IfThenElse") !== -1 || curObj.class.indexOf("K2Node_ExecutionSequence") !== -1) {
            if (curObj.class.indexOf("K2Node_IfThenElse") !== -1)
                curObj.nodeName = "Branch"
            else if (curObj.class.indexOf("K2Node_ExecutionSequence") !== -1)
                curObj.nodeName = "Sequence"
            newNode = {
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            nN = new MacroNode(newNode, x, y);

        } else if (curObj.class.indexOf("K2Node_Event") !== -1 || curObj.class.indexOf("K2Node_CustomEvent") !== -1 || curObj.class.indexOf("K2Node_ComponentBoundEvent") !== -1 || curObj.class.indexOf("K2Node_InputTouch") !== -1 || curObj.class.indexOf("K2Node_InputAction") !== -1 || curObj.class.indexOf("K2Node_InputAxisEvent") !== -1 || curObj.class.indexOf("K2Node_InputKey") !== -1) {
            if (curObj.class && curObj.class.indexOf("K2Node") !== -1)
                curObj.class = curObj.class.replace("K2Node_", "");
            curObj.class = curObj.class.fromCamelCase();
            console.log("EVENT", curObj);
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs,
                isCustom: curObj.isCustom
            };

            if (curObj.class === "Input Key") {
                newNode.inputKey = curObj.inputKey;
            }

            nN = new EventNode(newNode, x, y);

        } else if (curObj.class.indexOf("K2Node_VariableGet") !== -1 || curObj.class.indexOf("K2Node_Self") !== -1) {
            newNode = {
                outputs: outputs
            };


            nN = new GetterNode(newNode, x, y);

        } else if (curObj.class.indexOf("Set") !== -1) {
            newNode = {
                outputs: outputs,
                inputs: inputs
            };
            nN = new SetterNode(newNode, x, y);
        } else if (curObj.class.indexOf("Operator") !== -1 || curObj.class.indexOf("K2Node_EnumEquality") !== -1) {
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs
            };
            nN = new BinaryOperatorNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Knot") !== -1) {
            //console.log('KNIT');
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs
            };
            nN = new RerouteNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Select") !== -1) {
            newNode = {
                name: "Select",
                inputs: inputs,
                outputs: outputs
            };
            nN = new SelectNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Composite") !== -1) {
            newNode = {
                name: curObj.boundGraph.replace("EdGraph", "").replace(/["']/g, ""),
                inputs: inputs,
                outputs: outputs
            };
            nN = new CompositeNode(newNode, x, y);
        } else {
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class || curObj.name,
                inputs: inputs,
                outputs: outputs
            };
            if (curObj.class.indexOf("Material") === -1)
                console.log("Unknown Node", curObj);
            nN = new UnknownNode(newNode, x, y);
        }

        newNodes.push(nN);
    }
    //console.log(newNodes);

    for (var i = 0; i < links.length; i++) {
        var curLink = links[i];
        var from = null;
        var to = null;
        var nodeFrom = null;
        //console.log('current link', curLink);
        for (var j = 0; j < newNodes.length; j++) {
            if (newNodes[j].outputs) {
                for (var k = 0; k < newNodes[j].outputs.length; k++) {
                    if (newNodes[j].outputs[k].id === curLink.from) {
                        from = newNodes[j].outputs[k];
                        nodeFrom = newNodes[j];
                        break;
                    }
                }
            }
            if (newNodes[j].inputs) {
                for (var k = 0; k < newNodes[j].inputs.length; k++) {
                    if (newNodes[j].inputs[k].id === curLink.to) {

                        to = newNodes[j].inputs[k];
                        break;
                    }
                }
            }
        }

        nodeFrom.setOutputLink(from, to);

    }

    return newNodes;
}


var AbstractNode = Class({
    constructor: function (x, y) {
        this.x = x;
        this.y = y;

        this.height = 0;

        this.angleRadius = 15;
        this.circleRadius = 8.5;

        this.cellSize = 16;

        this.inputs = [];
        this.outputs = [];

        this.fontSize = 14;
        this.pins = [];
        this.showPinText = true;

        this.width = this.cellSize * this.minCellWidth;
        this.inputOffset = this.cellSize * 0.2;
    },
    draw: function (nodesDrawer) {
        this.nodesDrawer = nodesDrawer;
        this.drawer = nodesDrawer.drawer;

        this.hover = this.drawHover(this.drawer);
        this.hover.hide();
        //this.shadow = this.drawShadow(this.drawer);

        this.nested = this.setSVG(this.drawer);

        this.allNode = this.drawer.group();
        this.allNode.add(this.hover);
        //this.allNode.add(this.shadow);
        this.allNode.add(this.nested);
        if (this instanceof CommentNode) {
            this.selectable.style('cursor', "url('cursors/cursor_grab.png'),pointer");
        } else {
            this.allNode.style('cursor', "url('cursors/cursor_grab.png'),pointer");
        }


    },
    calculateWidth: function () {
        var tmpDraw = SVG('tmpSvgContainer').size(0, 0);
        this.width = this.cellSize * this.minCellWidth;
        this.height = this.cellHeight * this.cellSize;
        if (this.function && this.showHeader) {
            //console.log(this.function);
            var headerTextCheck = tmpDraw.text(this.function.name);
            //console.log(this.function);
            headerTextCheck.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });

            var headerTextWidth = this.getTextElementWidth(headerTextCheck);
            var newWidth = this.nearestCellWidth(headerTextWidth + this.cellSize * 2.5) * this.cellSize;


            if (this.delegateOutput) {
                newWidth += this.cellSize;
            }
            if (newWidth > this.width) {

                this.width = newWidth;
            }

            if (this.function.isCustom) {
                var nodeText = tmpDraw.text(this.customText);
                nodeText.style('font-style', 'italic');
                nodeText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#a1825d"
                });

                headerTextWidth = this.getTextElementWidth(nodeText);
                newWidth = this.nearestCellWidth(headerTextWidth + this.cellSize * 2.5) * this.cellSize;
                if (this.delegateOutput) {
                    newWidth += this.cellSize;
                }
                if (newWidth > this.width) {
                    this.width = newWidth;
                }
            }


        }

        var maxOutSize = 0;
        var maxInSize = 0;

        for (var i = 0; i < this.inputs.length; i++) {
            var tIn = this.inputs[i];

            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    var startPosX = this.cellSize * 2.5;
                    for (var z = 0; z < tIn.value.length; z++) {
                        var text = tmpDraw.text(tIn.value[z]);
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'end'
                        });

                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize, this.cellSize);
                        startPosX = startPosX + rect.width() + this.cellSize * 0.2;
                    }
                    maxInSize = startPosX;

                    this.height += this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"] || tIn.type === VAR_TYPES["int"] || tIn.type === VAR_TYPES["byte"]) {
                    if (tIn.value) {
                        var text = tmpDraw.text(tIn.value);
                        var inputText = tmpDraw.text(tIn.name);
                        inputText.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#ffffff"
                        });
                        var inputTextLength = this.getTextElementWidth(inputText)
                        var startPosX = this.cellSize + this.inputOffset + inputTextLength;

                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});

                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        maxInSize = startPosX + rect.width();
                    }

                } else if (tIn.type === VAR_TYPES["actor"] || tIn.type === VAR_TYPES["object"]) {
                    if (tIn.value) {
                        var text = tmpDraw.text(tIn.value);
                        var inputText = tmpDraw.text(tIn.name);
                        inputText.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#ffffff"
                        });
                        var inputTextLength = this.getTextElementWidth(inputText);
                        var startPosX = this.cellSize + inputTextLength + this.inputOffset;

                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});

                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        maxInSize = startPosX + rect.width();
                    }
                }


            }
        }

        if (this.showPinText) {
            for (var i = 0; i < this.inputs.length; i++) {
                var tIn = this.inputs[i];
                var tInputText = tmpDraw.text(tIn.name);
                tInputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#ffffff"
                });

                var size = this.getTextElementWidth(tInputText);





                if (size > maxInSize)
                    maxInSize = size;
            }


            for (var i = 0; i < this.outputs.length; i++) {
                var tOut = this.outputs[i];
                var tOutText = tmpDraw.text(tOut.name);
                tOutText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#ffffff"
                });

                var size = this.getTextElementWidth(tOutText)
                if (size > maxOutSize)
                    maxOutSize = size;
            }

            var lineWidth = this.cellSize * 1.5 + this.circleRadius * 2 + maxInSize + maxOutSize + this.circleRadius * 2;
            console.log("Line width",lineWidth);
            newWidth = this.nearestCellWidth(lineWidth) * this.cellSize;
            if (newWidth > this.width) {
                this.width = newWidth;
            }
        } else {
            if (maxInSize > this.width) {
                this.width = maxInSize;
            }
        }
        console.log("Drawer width",this.width,this.width/this.cellSize);
        tmpDraw.remove();
    },
    nearestCellWidth: function (width) {
        return Math.ceil(width / this.cellSize);
    },
    setOutputLink: function (from, to) {
        //	console.log(from,to);
        if (from && to) {
            from.linked = true;
            if (!from.links)
                from.links = [];
            from.links.push(to);
            to.linked = true;
        }
    },
    setDelegateOut: function (dest) {
        if (this.delegateOutput) {
            this.delegateOutput.linked = true;
            this.delegateOutput.link = dest;
            dest.linked = true;
        }
    },
    getTextElementWidth: function (element) {
        if (element) {
            return document.getElementById(element.node.id).getBBox().width || 0;
        } else {
            return 0;
        }

    },
    getTextElementHeight: function (element) {
        if (element) {
            return document.getElementById(element.node.id).getBBox().height || 0;
        } else {
            return 0;
        }

    },
    drawShadow: function (drawer) {
        var group = drawer.group();
        var shadow = group.rect(this.width, this.height).radius(this.angleRadius);
        shadow.fill({color: '#f06', opacity: 0.0});
        shadow.stroke({color: '#000', opacity: 0.5, width: 4});
        shadow.filter(function (add) {
            add.gaussianBlur(2);
        });
        shadow.back();
        return group;
    },
    constructArray: function (draw, input, x, y) {
        input.parent = this;
        input.center = {x: x + this.circleRadius / 2, y: y + this.circleRadius / 2};
        var step = this.circleRadius / 3;
        var side = this.circleRadius / 4;
        var arrayPattern = draw.pattern(this.circleRadius, this.circleRadius, function (add) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (i === 1 && j === 1 && !input.linked)
                        continue
                    add.rect(side, side).fill(VAR_COLORS[input.type.name]).translate(i * step + 0.1, j * step + 0.1);
                }
            }
        });
        var aIn = draw.rect(this.circleRadius, this.circleRadius).fill(arrayPattern);
        //aIn.fill({color: "#fff"})
        //if (input.linked)
        //	aIn.fill({color: VAR_COLORS[input.type.name]});
        aIn.translate(x, y);

    },
    constructCircle: function (draw, input, x, y) {
        input.parent = this;
        input.center = {x: x + this.circleRadius / 2, y: y + this.circleRadius / 2};

        if (input.type !== VAR_TYPES.delegate) {
            var pinCircle = draw.use(this.nodesDrawer.pinCircle);
            var color = VAR_COLORS[input.type.name];
            pinCircle.stroke({color: color, width: 2});
            if (input.linked)
                pinCircle.fill({color: color});
            pinCircle.translate(x, y);
            draw.use(this.nodesDrawer.pinArrow).translate(x, y).fill(color).stroke({width: 1, color: color});
        } else {
            var dIn = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS[input.type.name], width: 2});
            if (input.linked)
                dIn.fill({color: VAR_COLORS[input.type.name]});
            dIn.translate(x, y);
        }

    },
    constructExecNode: function (draw, input, x, y) {
        var execNodeRadius = 3;
        var nodeSize = 0.8 * this.cellSize;
        input.parent = this;
        input.center = {x: x + nodeSize / 2, y: y - nodeSize / 2};


        var path = "M 0,{0} C 0,{0} 0,0 {1},0".format(execNodeRadius, execNodeRadius);
        path += "H {1}".format(execNodeRadius, nodeSize / 2);
        path += "L {0},{1}".format(nodeSize, nodeSize / 2);
        path += "L {0},{1}".format(nodeSize / 2, nodeSize);
        path += "h {0}".format(execNodeRadius - nodeSize / 2);
        path += "C {0},{1} 0,{1} 0,{2}".format(execNodeRadius, nodeSize, nodeSize - execNodeRadius);
        path += "v {0}".format(-nodeSize + 2 * execNodeRadius);
        var arrow = draw.path(path);

        var arrowPos = {x: x, y: y - 0.8 * this.cellSize};
        arrow.stroke({color: "#fff", width: 2});
        arrow.fill({color: '#000000', opacity: 0.0});
        arrow.translate(arrowPos.x, arrowPos.y);

        if (input.linked) {
            arrow.fill({color: VAR_COLORS.exec, opacity: 1});
        }

    },
    drawHover: function (drawer) {
        var group = drawer.group();
        var hoverRect = group.rect(this.width, this.height).radius(this.angleRadius);
        hoverRect.fill({color: '#000000', opacity: 0});
        hoverRect.stroke({color: '#f1b000', opacity: 1, width: 8});
        hoverRect.translate(0, 0);
        hoverRect.back();
        return group;
    },
    drawPins: function (draw, newCellOffset, newDrawText) {
        var drawText = true;
        if (newDrawText === false)
            drawText = false;
        var cellOffset = newCellOffset || 2.5;
        if (newCellOffset === 0) {
            cellOffset = 0;
        }
        for (var i = 0; i < this.inputs.length; i++) {
            var tIn = this.inputs[i];
            var circleCenterX = this.cellSize;
            var circleCenterY = cellOffset * this.cellSize;
            var textCenterY = circleCenterY;
            var vectorCenterY = circleCenterY;
            var inputTextLength = 0;
            var pinObj = {};
            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    circleCenterY = (cellOffset + 0.5) * this.cellSize;
                    vectorCenterY = (cellOffset + 1) * this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"]) {
                    //console.log(tIn);
                }
            }
            var pinDraw = draw.group();
            var pinFullLength = 0;
            var pinFullHeight = this.cellSize * 1.1;
            if (tIn.type === VAR_TYPES.exec) {
                this.constructExecNode(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY + 0.8 * this.cellSize / 2);
            } else {
                if (!tIn.isArray)
                    this.constructCircle(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
                else
                    this.constructArray(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
            }
            pinFullLength += this.circleRadius + circleCenterX;
            if (tIn.name !== "execute" && drawText) {
                var inputText = pinDraw.text(tIn.name);

                inputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#ffffff"
                });
                inputText.translate(circleCenterX + this.circleRadius * 1.5, circleCenterY - this.fontSize);
                inputText.fill({color: "#fff"});
                inputTextLength = this.getTextElementWidth(inputText);
                pinFullLength += inputTextLength;
            }


            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    if (inputText)
                        inputText.translate(circleCenterX + this.circleRadius * 1.5, textCenterY - this.fontSize);

                    var startPosX = circleCenterX + this.cellSize * 1.5;
                    pinFullLength += circleCenterX;
                    for (var z = 0; z < tIn.value.length; z++) {
                        var text = pinDraw.text(tIn.value[z]);
                        var labelText;
                        switch (z) {
                            case 0:
                                labelText = "X"
                                break
                            case 1:
                                labelText = "Y"
                                break
                            case 2:
                                labelText = "Z"
                                break
                        }
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'end', color: "#fff"
                        });
                        text.fill({color: "#fff"});

                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);

                        text.translate(startPosX + textWidth + this.cellSize * 0.9, vectorCenterY - this.fontSize);

                        var label = pinDraw.text(labelText);
                        label.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start', color: "#fff"
                        });
                        label.fill({color: "#6f716f"});
                        label.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        startPosX = startPosX + rect.width() + this.cellSize * 0.2;
                        pinFullLength += rect.width() + this.cellSize * 0.2;
                    }
                    pinFullLength -= inputTextLength;
                    cellOffset += 1;
                    pinFullHeight += this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"] || tIn.type === VAR_TYPES["int"] || tIn.type === VAR_TYPES["byte"]) {
                    if (tIn.value) {
                        var text = pinDraw.text(tIn.value);
                        var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;

                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize, anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});

                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);

                        text.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        pinFullLength += rect.width();
                    }
                } else if (tIn.type === VAR_TYPES["bool"]) {
                    var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                    var rect = pinDraw.rect(this.cellSize * 0.8, this.cellSize * 0.8).radius(3);
                    rect.fill({color: "#292b29"});
                    rect.stroke({color: "#fff", width: 2});
                    rect.x(startPosX);
                    rect.cy(vectorCenterY);
                    if (tIn.value === true) {
                        var path = pinDraw.path(checkSymbol);
                        path.center(startPosX + rect.width() / 2, vectorCenterY);
                        path.stroke({color: "#fff", width: 5});
                        path.fill({color: "#fff", opacity: 0})
                        path.scale(0.3, 0.3);
                    }
                    pinFullLength += rect.width();
                } else if (tIn.type === VAR_TYPES["actor"] || tIn.type === VAR_TYPES["object"]) {
                    if (tIn.value) {
                        var text = pinDraw.text(tIn.value);
                        var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;

                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start', color: "#fff"
                        });
                        text.fill({color: "#fff"});

                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);

                        text.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        pinFullLength += rect.width();
                    }

                }
            }

            pinObj.draw = pinDraw;
            var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
            var hoverGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: VAR_COLORS[tIn.type.name], opacity: 0});
                stop.at({offset: 0.1, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
                stop.at({offset: 0.9, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
                stop.at({offset: 1, color: VAR_COLORS[tIn.type.name], opacity: 0});
            });
            hoverRect.fill(hoverGradient)
            hoverRect.x(circleCenterX - this.circleRadius);
            hoverRect.cy(circleCenterY);
            hoverRect.back();
            if (tIn.tooltip) {
                //console.log(tIn.tooltip);
                pinDraw.element('title').words(tIn.tooltip.replace("\\n\\n", "\n\n").replace("\\n", "\n"));
            }
            pinObj.hover = hoverRect;

            hoverRect.hide();
            this.pins.push(pinObj);

            cellOffset += 1.5;
        }
        cellOffset = newCellOffset || 2.5;
        for (var i = 0; i < this.outputs.length; i++) {
            var tOut = this.outputs[i];
            if (tOut.name === "Output Delegate")
                continue
            var circleCenterX = this.width - this.cellSize;
            var circleCenterY = cellOffset * this.cellSize;
            var pinDraw = draw.group();
            var pinFullHeight = this.cellSize * 1.1;
            var pinFullLength = 0;
            if (tOut.type === VAR_TYPES.exec) {
                this.constructExecNode(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY + 0.8 * this.cellSize / 2);
            } else {
                if (!tOut.isArray)
                    this.constructCircle(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
                else
                    this.constructArray(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
            }
            pinFullLength += this.circleRadius + this.cellSize;
            if (tOut.name !== "then" && tOut.name !== "Output_Get" && drawText) {
                var inputText = pinDraw.text(tOut.name);

                inputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'end'
                    , color: "#ffffff"
                });
                inputText.translate(circleCenterX - this.circleRadius, circleCenterY - this.fontSize);
                inputText.fill({color: "#fff"});
                pinFullLength += this.getTextElementWidth(inputText);
            }
            var pinObj = {};
            pinObj.draw = pinDraw;
            var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
            var hoverGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: VAR_COLORS[tOut.type.name], opacity: 0});
                stop.at({offset: 0.1, color: VAR_COLORS[tOut.type.name], opacity: 0.8});
                stop.at({offset: 0.9, color: VAR_COLORS[tOut.type.name], opacity: 0.8});
                stop.at({offset: 1, color: VAR_COLORS[tOut.type.name], opacity: 0});
            });
            hoverRect.fill(hoverGradient)
            hoverRect.x(this.width - pinFullLength - this.circleRadius / 2);
            hoverRect.cy(circleCenterY);
            hoverRect.back();
            pinObj.hover = hoverRect;

            if (tOut.tooltip) {
                pinDraw.element('title').words(tOut.tooltip.replace("\\n\\n", "\n\n").replace("\\n", "\n"));
            }

            hoverRect.hide();
            this.pins.push(pinObj);


            cellOffset += 1.5;
        }
    }
});
var CommentNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		CommentNode.$super.call(this, x, y, drawer);
		this.funcObj = funcObj;
		this.header = funcObj.name;
		this.angleRadius = 0;
		this.headerCellHeight = 2.5;
		this.selectable = null;
	},
	calculateWidth: function () {
		this.width = parseInt(this.funcObj.width);
		this.height = parseInt(this.funcObj.height);
	},
	setSVG: function (drawer) {
		var draw = drawer.group();
                draw.style('mix-blend-mode','exclusion')
		var headerColor = null;
		var opacity = 1;
		if (this.funcObj.commentColor) {
			var cColor = this.funcObj.commentColor;
			headerColor = rgbToHex(parseFloat(cColor.R) * 255, parseFloat(cColor.G)*255, parseFloat(cColor.B)*255);
			opacity = parseFloat(cColor.A);
		}
		else {
			headerColor = '#acacac';
			opacity = 1;
		}

		var header = draw.rect(this.width-this.cellSize/2, this.height-this.cellSize/2).radius(this.angleRadius).fill({color: headerColor, opacity: opacity});
                header.translate(this.cellSize/4,this.cellSize/4)
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize);

		header.clipWith(rect);



		var headerText = draw.text(this.header);

		headerText.font({
			family: 'Roboto'
			, size: 1.3 * this.cellSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.style('pointer-events', 'none');
		headerText.style('text-shadow', '2px 2px 0px rgba(0, 0, 0, 1)');
		headerText.translate(this.cellSize, this.cellSize/4);
		headerText.fill({color: "#fff"});





		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: headerColor, opacity: 0.2});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});


		var selectableRect = draw.rect(this.width, this.headerCellHeight * this.cellSize).fill({color: "#fff", opacity: 0});
		;
		this.selectable = selectableRect;
		this.selectableHeight = this.headerCellHeight * this.cellSize;


		return draw;

	}
});
var FunctionNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 4;
        FunctionNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        //console.log("FUNCTION", funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;
        if (this.function.name.indexOf("_") !== -1 && this.function.name.indexOf("Get") === -1 && this.function.name.indexOf("Conv") === -1 && this.function.name.indexOf("Set") === -1 && this.function.name.indexOf("Add") === -1 && this.function.name.indexOf("K2") === -1 && this.function.name.indexOf("Montage") === -1 && this.function.name.indexOf("Greater_Vector") === -1 && this.function.name.indexOf("Less_Vector") === -1) {
            this.angleRadius = 0;
            this.headerCellHeight = 0;
            this.minCellWidth = 5;
            this.minCellHeight = 4;
            this.showHeader = false;
            this.showPinText = false;
        }

        if (this.function.icon) {
            this.icon = this.function.icon;
        }

        if (this.function.name.indexOf("Make") !== -1 && this.function.name.indexOf("Array") === -1) {
            this.icon = ICONS["make_struct"];
        } else if (this.function.name.indexOf("Break") !== -1) {
            this.icon = ICONS["break_struct"];
        } else if (this.function.name.indexOf("Make Array") !== -1) {
            this.icon = ICONS["make_array"];
        }

        if (this.function.name.indexOf(" for ") !== -1) {
            this.function.name = this.function.name.substring(0, this.function.name.indexOf(" for "));
        }


        if (FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.function.name = FUNCTION_NAMES_MAPPING[this.function.name];
        }


        if (NAME_MAPPING[this.function.name]) {
            this.function.name = NAME_MAPPING[this.function.name];
        }


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = null;




        if (!this.function.isPure) {
            headerColor = VAR_COLORS["execFunction"];
        } else {
            headerColor = VAR_COLORS["pureFunction"];
        }

        if (this.function.isParent) {
            headerColor = VAR_COLORS["parent"];
        }

        if (this.function.color) {
            headerColor = this.function.color;
        }

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        if (this.showHeader) {
            var headerGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: headerColor, opacity: 1});
                stop.at({offset: 1, color: headerColor, opacity: 0});
            });
            headerGradient.from(0, 0).to(1, 0);
            var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
            var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

            header.clipWith(rect)

            var headerText = draw.text(this.function.name);

            headerText.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            headerText.style('font-weight', 'bold');
            headerText.translate(this.cellSize * 2, 0);
            headerText.fill({color: "#fff"});

            if (this.function.name.indexOf("Delay") !== -1 || this.function.async) {
                var latentIcon = draw.image('/icons/{0}'.format(ICONS["latent"]), 32, 32).fill({color: "#fff"});
                this.icon = ICONS["node"];
                latentIcon.center(this.width, 0);
            }


            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }



            this.drawPins(draw);

        } else {
            var text = this.function.name;
            if (text.indexOf("Subtract") !== -1) {
                text = "-"
            } else if (text.indexOf("Add") !== -1) {
                text = "+"
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x"
            } else if (text.indexOf("Percent") !== -1) {
                text = "%"
            } else if (text.indexOf("Divide") !== -1) {
                text = "/"
            } else if (text.indexOf("Dot") !== -1) {
                text = "."
            } else if (text.indexOf("Greater") !== -1) {
                if (text.indexOf("Equal") === -1)
                    text = ">"
                else
                    text = ">="
            } else if (text.indexOf("Less") !== -1) {
                console.log(text);
                if (text.indexOf("Equal") === -1)
                    text = "<"
                else
                    text = "<="
            } else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
                text = "!="
            } else if (text.indexOf("Equal") !== -1) {
                text = "="
            } else if (text.indexOf("Not") !== -1) {
                text = "NOT"
            }

            var textSize = 35;
            var nodeText = draw.text(text.toUpperCase());
            nodeText.translate(this.width / 2, this.height / 2 - textSize);
            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');
            nodeText.font({
                family: 'Roboto, sans-serif'
                , size: textSize
                , anchor: 'middle'
                , color: "#ffffff"
            });
            this.drawPins(draw, 1, false);
        }





        return draw;

    }
});
var GetterNode = Class(AbstractNode, {constructor: function (getterNode, x, y, drawer) {
		GetterNode.$super.call(this, x, y, drawer);
		this.outputs = getterNode.outputs;
		this.minCellWidth = 8;
		this.cellHeight = 2;
		this.width = this.cellSize * this.minCellWidth;
	},
	setSVG: function (drawer) {
		var mainColor = VAR_COLORS[this.outputs[0].type.name];

		var draw = drawer.group();
		var radGradient = draw.gradient('radial', function (stop) {
			stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
			stop.at({offset: 1, color: mainColor, opacity: 0.01});
		});

		radGradient.attr('gradientTransform', 'matrix(1,0,0,1,0,-0.5)');

		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
                
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill(radGradient);
		//mainRect.fill({color: "#fff", opacity: 0});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		/*	var imgColor = hexToRgb(mainColor);
		 var spill = draw.image('/images/varnode/VarNode_color_spill.png', this.width, this.height);
		 spill.filter(function (add) {
		 add.colorMatrix('matrix', [imgColor.r / 255, 0, 0, 0, 0
		 , 0, imgColor.g / 255, 0, 0, 0
		 , 0, 0, imgColor.b / 255, 0, 0
		 , 0, 0, 0, 1.0, 0]);
		 })*/

		this.drawPins(draw, 1);

		return draw;
	}
});
var SetterNode = Class(AbstractNode, {
	constructor: function (setterNode, x, y, drawer) {
		SetterNode.$super.call(this, x, y, drawer);
		this.inputs = setterNode.inputs;
		this.outputs = setterNode.outputs;
		this.minCellWidth = 10;
		this.cellHeight = 5;
		this.showPinText = true;
		this.cellOffset = 0.5;

		this.width = this.cellSize * this.minCellWidth;
		this.headerCellHeight= 1.5;
		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(setterNode.outputs.length, setterNode.inputs.length) + Math.max(setterNode.outputs.length, setterNode.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var draw = drawer.group();

		var mainColor = null;
		this.inputs.forEach(function (item) {
			if (item.type !== VAR_TYPES.exec) {
				mainColor = VAR_COLORS[item.type.name];
				return;
			}
		});


		var radGradient = draw.gradient('radial', function (stop) {
			stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
			stop.at({offset: 1, color: mainColor, opacity: 0});
		});
		radGradient.attr('gradientTransform', 'matrix(1,0,0,0.7,0,-0.3)');
		//radGradient.attr('gradientUnits', 'userSpaceOnUse');


		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill(radGradient);
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});
		this.drawPins(draw);

		var setText = draw.text("SET");
		setText.translate(this.width / 2, 5);
		setText.fill({color: "#fff"});
		setText.style('font-weight', 'bold')
		setText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'middle'
			, color: "#ffffff"
		});

		return draw;
	}
});
var EventNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        EventNode.$super.call(this, x, y, drawer);
        this.function = funcObj;
        this.outputs = funcObj.outputs;
        this.delegateOutput = {};

        //console.log("EVENT", funcObj);

        this.minCellWidth = 6;
        this.minCellHeight = 4;

        this.showHeader = true;

        this.angleRadius = 10;
        this.icon = ICONS["event"];
        this.headerCellHeight = 1.5;
        if (this.function.isCustom === true) {
            this.headerCellHeight = 2.5;
            this.customText = "Custom Event";
            this.icon = ICONS["event_custom"];
        }
        this.cellOffset = 0.5;
        this.width = this.cellSize * this.minCellWidth;
        this.hasDelegateOut = false;

        for (var i = 0; i < this.outputs.length; i++) {
            if (this.outputs[i].name.indexOf("Output Delegate") !== -1) {
                this.hasDelegateOut = true;
                break;
            }
        }

        if (this.function.inputKey) {
            if (this.function.inputKey.indexOf("Mouse") !== -1)
                this.icon = ICONS["mouse"];
            else
                this.icon = ICONS["keyboard"];
            this.function.name = this.function.inputKey;
        }

        if (this.hasDelegateOut)
            this.cellHeight = this.headerCellHeight + this.cellOffset + (funcObj.outputs.length - 1) + (funcObj.outputs.length - 1) * this.cellOffset + this.cellOffset;
        else
            this.cellHeight = this.headerCellHeight + this.cellOffset + (funcObj.outputs.length) + (funcObj.outputs.length) * this.cellOffset + this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = VAR_COLORS["event"];
        var draw = drawer.group();


        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)
        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});

        if (this.function.isCustom) {
            var nodeText = draw.text(this.customText);
            nodeText.translate(this.cellSize * 2, this.fontSize);
            nodeText.fill({color: "#a1825d"});
            nodeText.style('font-style', 'italic');
            nodeText.font({
                family: 'Roboto'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#a1825d"
            });
        }



        var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
        icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);

        if (this.hasDelegateOut) {
            var dOut = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS.delegate, width: 2});
            dOut.translate(this.width - this.cellSize, this.headerCellHeight * this.cellSize / 2 - this.circleRadius / 2);
            if (this.delegateOutput.linked)
                dOut.fill({color: VAR_COLORS.delegateOut});

            this.delegateOutput.color = VAR_COLORS.delegateOut;
            for (var i = 0; i < this.outputs.length; i++) {
                if (this.outputs[i].name.indexOf("Output Delegate") !== -1) {
                    this.outputs[i].center = {x: this.x + this.width - this.cellSize + this.cellSize / 4, y: this.y + this.cellSize / 2 + this.cellSize / 4};
                    break;
                }
            }
            this.delegateOutput.center = {x: this.x + this.width - this.cellSize + this.cellSize / 4, y: this.y + this.cellSize / 2 + this.cellSize / 4};
        }
        if (!this.function.isCustom)
            this.drawPins(draw);
        else
            this.drawPins(draw, 3.5);

        return draw;
    }
});
var ConverterNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		ConverterNode.$super.call(this, x, y, drawer);
		this.function = funcObj;
                
                //console.log("CONVERTER",funcObj);

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;

		this.minCellWidth = 6;
		this.minCellHeight = 4;

		this.angleRadius = 0;

		this.cellOffset = 0.5;
		this.width = this.cellSize * this.minCellWidth;
		this.cellHeight = this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	calculateWidth: function () {
		this.height = this.minCellHeight * this.cellSize;
		this.width = this.cellSize * this.minCellWidth;
	},
	setSVG: function (drawer) {
		var draw = drawer.group();




		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		this.drawPins(draw, 2, false);

		var ellipseWidth = this.circleRadius * 1.5;
		var ellipseHeight = this.circleRadius * 2;
		var ellipse = draw.rect(ellipseWidth, ellipseHeight).radius(6);
		ellipse.translate(this.width / 2 - ellipseWidth / 2, this.height / 2 - ellipseHeight / 2);
		ellipse.fill({color: "#fff", opacity: 0.3});

		return draw;
	}
});
var BinaryOperatorNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		this.minCellWidth = 6;
		this.minCellHeight = 4;
		BinaryOperatorNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;
		//console.log("BINARY OPERATOR",funcObj);



		this.angleRadius = 0;

		this.cellOffset = 0.5;

		this.cellHeight = this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	/*calculateWidth: function () {
		this.height = this.cellHeight * this.cellSize;
		this.width = this.cellSize * this.minCellWidth;
	},*/
	setSVG: function (drawer) {
		var draw = drawer.group();


		var linGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
			stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
			stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
			stop.at({offset: 1, color: '#ffffff', opacity: 1});
		});
		linGradient.from(0, 1).to(0, 0);
		var text = this.function.name;
		if (text.indexOf("Boolean") !== -1) {
			text = text.replace("Boolean", "").toUpperCase();
		}
		else if (text.indexOf("Int") !== -1 || text.indexOf("Float") !== -1 || text.indexOf("Enum") !== -1) {
			if (text.indexOf("And") !== -1) {
				text = "&";
			}
			else if (text.indexOf("Or") !== -1) {
				text = "|";
			}
			else if (text.indexOf("Multiply") !== -1) {
				text = "x";
			}
			else if (text.indexOf("Equality") !== -1) {
				text = "==";
			}
		}

		if (text.indexOf("Add") !== -1) {
			text = "+";
		}



		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(linGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var textSize = 35;
		var nodeText = draw.text(text.toUpperCase());
		nodeText.translate(this.width / 2, this.height / 2 - textSize);
		nodeText.fill({color: "#fff", opacity: 0.3});
		nodeText.style('font-weight', 'bold');
		nodeText.font({
			family: 'Roboto, sans-serif'
			, size: textSize
			, anchor: 'middle'
			, color: "#ffffff"
		});

		this.drawPins(draw, 1, false);

		return draw;
	}
});
var MacroNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		MacroNode.$super.call(this, x, y, drawer);
		this.function = funcObj;
		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;

		this.minCellWidth = 10.5;
		this.minCellHeight = 2;

		this.angleRadius = 10;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;
		this.showHeader = true;
		this.showPinText = true;
                //console.log("MACRO",funcObj);


		if (this.function.name === "Branch") {
			this.icon = ICONS["branch"];
		}
		else if (this.function.name.indexOf("For Each") !== -1) {
			this.icon = ICONS["for_each"];
		}
		else if (this.function.name.indexOf("Flip") !== -1) {
			this.icon = ICONS["flip_flop"];
		}
		else if (this.function.name.indexOf("Valid") !== -1) {
			this.icon = ICONS["valid"];
		}
                else if (this.function.name.indexOf("Sequence") !== -1) {
			this.icon = ICONS["sequence"];
		}
                else if (this.function.name.indexOf("For Loop") !== -1) {
			this.icon = ICONS["for_loop"];
		}
                else {
                    this.icon = ICONS["macro"];
                }

		this.width = this.cellSize * this.minCellWidth;
		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var headerColor = VAR_COLORS["macro"];

		var draw = drawer.group();


		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});



		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 1});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});
		headerGradient.from(0, 0).to(1, 0);
		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

		header.clipWith(rect);
		var headerText = draw.text(this.function.name);

		headerText.font({
			family: 'Roboto, sans-serif'
			, size: this.fontSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.translate(this.cellSize * 2, 0);
		headerText.fill({color: "#fff"});
		//console.log('macro');
		this.drawPins(draw);

		if (this.icon) {
			var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16);
			icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
			/*icon.filter(function (add) {
				add.colorMatrix('matrix', [1.0, 0, 0, 0, 0
							, 0, 0.2, 0, 0, 0
							, 0, 0, 0.2, 0, 0
							, 0, 0, 0, 1.0, 0])
			})*/
		}

		return draw;

	}
});
var RerouteNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		RerouteNode.$super.call(this, x, y, drawer);
		this.function = funcObj;
		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;
		this.minCellWidth = 2.5;
		this.minCellHeight = 1.5;
		this.angleRadius = 8;
		this.cellOffset = 0.5;
		this.width = this.cellSize * this.minCellWidth;
		this.cellHeight = this.cellSize * this.minCellHeight;
	},
	calculateWidth: function () {
		this.height = this.minCellHeight * this.cellSize;
		this.width = this.cellSize * this.minCellWidth;
	},
	drawPins: function (draw) {
		var cellOffset = 0.5;
		var tIn = this.outputs[0];
		var circleCenterX = this.cellSize + this.circleRadius / 2;
		var circleCenterY = cellOffset * this.cellSize;
		var pinObj = {};
		var pinDraw = draw.group();
		var pinFullLength = 0;
		var pinFullHeight = this.cellSize * 1.1;
		this.constructCircle(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
		pinFullLength += this.circleRadius * 2.2;
		pinObj.draw = pinDraw;
		var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
		var hoverGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: VAR_COLORS[tIn.type.name], opacity: 0});
			stop.at({offset: 0.1, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
			stop.at({offset: 0.9, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
			stop.at({offset: 1, color: VAR_COLORS[tIn.type.name], opacity: 0});
		});
		hoverRect.fill(hoverGradient);
		hoverRect.x(circleCenterX - this.circleRadius);
		hoverRect.cy(circleCenterY);
		hoverRect.back();
		pinObj.hover = hoverRect;
		this.inputs[0].parent = this;
		this.inputs[0].center = {x: circleCenterX - this.circleRadius / 2 + this.circleRadius / 2, y: circleCenterY - this.circleRadius / 2 + this.circleRadius / 2};
		hoverRect.hide();
		this.pins.push(pinObj);
	},
	setSVG: function (drawer) {
		var draw = drawer.group();
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0});
		//mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		this.drawPins(draw);
		return draw;
	}
});
var ArrayFunctionNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        ArrayFunctionNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 12;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        if (this.function.isPure || ARRAY_FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.headerCellHeight = 0;
            this.minCellWidth = 5;
            this.minCellHeight = 4;
            if (ARRAY_FUNCTION_NAMES_MAPPING[this.function.name] && !ARRAY_FUNCTION_NAMES_MAPPING[this.function.name].showHeader)
                this.showHeader = false;
            this.showPinText = false;
        }

        //console.log(this.function.name, this.showHeader);

        if (this.function.name.indexOf("Make") !== -1) {
            this.icon = ICONS["make_struct"];
        } else if (this.function.name.indexOf("Break") !== -1) {
            this.icon = ICONS["break_struct"];
        } else {

        }

        if (ARRAY_FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.function.name = ARRAY_FUNCTION_NAMES_MAPPING[this.function.name].text;
        }


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    calculateWidth: function () {
        ArrayFunctionNode.$superp.calculateWidth.call(this);
        if (this.showHeader) {
            return
        }
        var tmpDraw = SVG('tmpSvgContainer').size(0, 0);

        var text = this.function.name;
        var multiline = false;
        if (text.split(" ").length > 1)
            multiline = true;

        var textSize = 30;
        var nodeText;
        if (!multiline) {
            nodeText = tmpDraw.text(text.toUpperCase());
        } else {
            nodeText = tmpDraw.text(function (add) {
                var tmpArr = text.split(" ");
                for (var z = 0; z < tmpArr.length; z++) {
                    add.tspan(tmpArr[z].toUpperCase()).newLine();
                }
            });

        }

        nodeText.style('font-weight', 'bold');
        nodeText.font({
            family: 'Roboto'
            , size: textSize
            , anchor: 'middle'
            , color: "#ffffff"
        });

        var textWidth = this.getTextElementWidth(nodeText);
        var textHeight = this.getTextElementHeight(nodeText);
        this.width += textWidth + 2 * this.cellSize;
        this.width = this.nearestCellWidth(this.width) * this.cellSize;
        this.height = this.nearestCellWidth(this.height) * this.cellSize;

        if (textHeight > this.height) {
            this.height = this.nearestCellWidth(textHeight) * this.cellSize;
        }

        if ((this.inputs.length === 1) && (this.outputs.length === 1)) {
            this.height += this.cellSize;
        }

    },
    setSVG: function (drawer) {
        var headerColor = null;
        if (!this.function.isPure) {
            headerColor = VAR_COLORS["execFunction"];
        } else {
            headerColor = VAR_COLORS["pureFunction"];
        }

        var draw = drawer.group();

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        if (this.showHeader) {
            var headerGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: headerColor, opacity: 1});
                stop.at({offset: 1, color: headerColor, opacity: 0});
            });
            headerGradient.from(0, 0).to(1, 0);
            var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
            var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

            header.clipWith(rect)

            var headerText = draw.text(this.function.name);

            headerText.font({
                family: 'Roboto'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            headerText.style('font-weight', 'bold');
            headerText.translate(this.cellSize * 2, 0);
            headerText.fill({color: "#fff"});
            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }
            this.drawPins(draw);

        } else {
            var text = this.function.name;
            var multiline = false;
            if (text.split(" ").length > 1)
                multiline = true;

            var arrayInput = null;
            this.inputs.forEach(function (item) {
                if (item.isArray)
                    arrayInput = item;
            });

            this.arrayRect = draw.rect(this.height - this.cellSize, this.height - this.cellSize).center(this.width / 2, this.height / 2);
            var side = (this.height - this.cellSize);
            var arrayPattern = draw.pattern(side, side, function (add) {
                add.rect(side, side).fill({color: VAR_COLORS[arrayInput.type.name], opacity: 0.35});
            });

            this.arrayRect.fill(arrayPattern);

            var textSize = 30;
            var nodeText;
            if (!multiline) {
                nodeText = draw.text(text.toUpperCase());
                nodeText.translate(this.width / 2, this.height / 2 - textSize);
                nodeText.font({
                    family: 'Roboto'
                    , size: textSize
                    , anchor: 'middle'
                    , color: "#ffffff"
                });
            } else {
                nodeText = draw.text(function (add) {
                    var tmpArr = text.split(" ");
                    for (var z = 0; z < tmpArr.length; z++) {
                        add.tspan(tmpArr[z].toUpperCase()).newLine();
                    }
                });
                var textHeight = this.getTextElementHeight(nodeText);
                //var textWidth = this.getTextElementWidth(nodeText);
                nodeText.translate(this.width/2, this.height / 2 - textSize - textHeight / 2);
                nodeText.font({
                    family: 'Roboto'
                    , size: textSize
                    , anchor: 'middle'
                    , color: "#ffffff"
                });

            }


            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');



            if ((this.inputs.length === 1) && (this.outputs.length === 1)) {
                this.drawPins(draw, 1.5, false);
            } else {
                this.drawPins(draw, 1, false);
            }






        }

        return draw;

    }
});
var CastNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		this.minCellWidth = 8.5
		this.minCellHeight = 2;
		CastNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;



		this.angleRadius = 10;
		this.showHeader = true;
		this.showPinText = true;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;

		this.icon = ICONS["dynamic_cast"];



		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var headerColor = VAR_COLORS["dynamicCast"];
		;

		var draw = drawer.group();

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});

		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 1});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});
		headerGradient.from(0, 0).to(1, 0);
		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

		header.clipWith(rect)

		var headerText = draw.text(this.function.name);

		headerText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.translate(this.cellSize * 2, 0);
		headerText.fill({color: "#fff"});

		var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
		icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
		this.drawPins(draw);


		return draw;

	}
});
var TimelineNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		this.minCellWidth = 8.5
		this.minCellHeight = 2;
		TimelineNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;



		this.angleRadius = 10;
		this.showHeader = true;
		this.showPinText = true;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;

		this.icon = ICONS["timeline"];



		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var headerColor = VAR_COLORS["timeline"];
		;

		var draw = drawer.group();

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});

		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 1});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});
		headerGradient.from(0, 0).to(1, 0);
		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

		header.clipWith(rect)

		var headerText = draw.text(this.function.name);

		headerText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.translate(this.cellSize * 2, 0);
		headerText.fill({color: "#fff"});

		var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
		icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
		this.drawPins(draw);


		return draw;

	}
});
var CallDelegateNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		this.minCellWidth = 8.5
		this.minCellHeight = 2;
		CallDelegateNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;



		this.angleRadius = 10;
		this.showHeader = true;
		this.showPinText = true;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;

		this.icon = ICONS["node"];



		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var headerColor = VAR_COLORS["execFunction"];
		;

		var draw = drawer.group();

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});

		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 1});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});
		headerGradient.from(0, 0).to(1, 0);
		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

		header.clipWith(rect)

		var headerText = draw.text(this.function.name);

		headerText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.translate(this.cellSize * 2, 0);
		headerText.fill({color: "#fff"});

		var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
		icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);

		var message_icon = draw.image('/icons/{0}'.format(ICONS["message"]), 32, 32).fill({color: "#fff"});
		message_icon.center(this.width, 0);
		this.drawPins(draw);


		return draw;

	}
});
var UnknownNode = Class(AbstractNode, {constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        UnknownNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.name = "Unknown node";//funcObj.name;


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = null;

        headerColor = VAR_COLORS["execFunction"];


        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)

        var headerText = draw.text(this.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});

        this.drawPins(draw);

        return draw;

    }
});
var SelectNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        SelectNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        // console.log(funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.icon = ICONS["select"];



        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = null;





        headerColor = VAR_COLORS["pureFunction"];

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        if (this.showHeader) {
            var headerGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: headerColor, opacity: 1});
                stop.at({offset: 1, color: headerColor, opacity: 0});
            });
            headerGradient.from(0, 0).to(1, 0);
            var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
            var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

            header.clipWith(rect)

            var headerText = draw.text(this.function.name);

            headerText.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            headerText.style('font-weight', 'bold');
            headerText.translate(this.cellSize * 2, 0);
            headerText.fill({color: "#fff"});
            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }

            if (this.function.name.indexOf("Delay") !== -1 || this.function.async) {
                var latentIcon = draw.image('/icons/{0}'.format(ICONS["latent"]), 32, 32).fill({color: "#fff"});
                latentIcon.center(this.width, 0);
            }

            this.drawPins(draw);

        } else {
            var text = this.function.name;
            if (text.indexOf("Subtract") !== -1) {
                text = "-"
            } else if (text.indexOf("Add") !== -1) {
                text = "+"
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x"
            } else if (text.indexOf("Percent") !== -1) {
                text = "%"
            } else if (text.indexOf("Divide") !== -1) {
                text = "/"
            } else if (text.indexOf("Greater") !== -1) {
                text = ">"
            } else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
                text = "!="
            }
            var textSize = 35;
            var nodeText = draw.text(text.toUpperCase());
            nodeText.translate(this.width / 2, this.height / 2 - textSize);
            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');
            nodeText.font({
                family: 'Roboto, sans-serif'
                , size: textSize
                , anchor: 'middle'
                , color: "#ffffff"
            });
            this.drawPins(draw, 1, false);
        }





        return draw;

    }
});
var CompositeNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 4;
        CompositeNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        // console.log(funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 2;
        this.cellOffset = 0.5;

        //console.log(funcObj);

        this.cellHeight = this.headerCellHeight + this.cellOffset * 3 + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = null;





        headerColor = VAR_COLORS["pureFunction"];

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});
        
        
        var opRect = draw.rect(this.width*0.8, this.height*0.8).radius(this.angleRadius);
        opRect.fill({color: "#FFF", opacity: 0.1});
        opRect.translate(this.width/2-this.width*0.4, this.height/2-this.height*0.4);



        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 0.5, 0);
        headerText.fill({color: "#fff"});


        var nodeText = draw.text("Collapsed graph");
        nodeText.translate(this.cellSize * 0.5, this.cellSize);
        nodeText.fill({color: "#9b9c77"});
        nodeText.style('font-style', 'italic');
        nodeText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#9b9c77"
        });

        this.drawPins(draw,this.headerCellHeight+this.cellOffset*2);



        return draw;

    }
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var Grid = Class({
    gridPattern: null,
    constructor: function (drawer, drawerWidth, drawerHeight) {
        var gridStep = CONFIG["GRID_STEP"];
        var gridPattern = null;
        var grid = drawer.group();

        gridPattern = drawer.pattern(gridStep * 8, gridStep * 8, function (add) {
            add.rect(136, 136).fill('#262626');
            for (var i = 1; i < 8; i++) {
                add.line(i * gridStep, 0, i * gridStep, gridStep * 8).stroke({width: 1, color: '#343434'});
                add.line(0, i * gridStep, gridStep * 8, i * gridStep).stroke({width: 1, color: '#343434'});
            }

            add.line(0, 0, 0, gridStep * 8).stroke({width: 1, color: '#161616'});
            add.line(0, 0, gridStep * 8, 0).stroke({width: 1, color: '#161616'});
        });
        grid.rect(drawerWidth, drawerHeight).fill(gridPattern);
        grid.back();
        grid.style('pointer-events', 'none');

        this.gridPattern = gridPattern;
    },
    updatePattern: function (x, y, scale) {
        this.gridPattern.x(x / scale);
        this.gridPattern.y(y / scale);
    },
    updatePatternScale: function (newScale) {
        this.gridPattern.scale(newScale);
    }
});
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});
var BlueprintRenderer = Class({
    drawerHeight: 0,
    drawerWidth: 0,
    svgContainer: null,
    currentScaleStep: 0,
    grid: null,
    currentScale: 1,
    blueprintObjects: [],
    nodesObjects: [],
    mainDrawer: null,
    linksDrawer: null,
    nodesDrawer: null,
    interfaceDrawer: null,
    origin: null,
    config: null,
    layersContainer: null,
    linksLayer: null,
    nodesLayer: null,
    current: null,
    constructor: function (domNodeId) {
        this.mainContainer = document.getElementById(domNodeId);
        var contentEditable = document.createElement("div");
        contentEditable.setAttribute("style", "display:none");
        contentEditable.setAttribute("contenteditable", "")
        this.mainContainer.appendChild(contentEditable);

        var svgContainer = document.createElement("div");
        svgContainer.setAttribute("id", "svgContainer");
        this.mainContainer.appendChild(svgContainer);
        this.svgContainerId = "svgContainer";
        this.svgCointainerNode = svgContainer;



        var tmpSvgContainer = document.createElement("div");
        tmpSvgContainer.setAttribute("id", "tmpSvgContainer");
        this.mainContainer.appendChild(tmpSvgContainer);

        var copyContainer = document.createElement("div");
        copyContainer.setAttribute("id", "copyContainer");
        this.mainContainer.appendChild(copyContainer);

        this.origin = new Vector(0, 0);
    },
    renderFromText: function (bpText) {
        this.parse(bpText);
    },
    renderFromFile: function (bpFileName) {
        var client = new XMLHttpRequest();
        var self = this;
        client.open('GET', bpFileName);
        client.onreadystatechange = function () {
            if (client.readyState === 4 && client.status === 200)
            {
                if (client.responseText)
                    self.parse(client.responseText);
            }
        }
        client.send();
    },
    parse: function (bpText) {
        var parser = new BPParser(bpText);
        this.blueprintObjects = parser.parseText();
        this.draw();
    },
    getCoords: function (e) {
        var can = this.svgCointainerNode;
        var x, y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= can.offsetLeft;
        y -= can.offsetTop;
        return new Vector(x, y);
    },
    draw: function () {
        this.drawerWidth = window.innerWidth;
        this.drawerHeight = window.innerHeight;
        this.mainDrawer = SVG(this.svgContainerId).size(this.drawerWidth, this.drawerHeight).spof();
        this.linksDrawer = new LinksDrawer(this.mainDrawer);
        this.nodesDrawer = new NodesDrawer(this.mainDrawer, this);
        this.interfaceDrawer = new InterfaceDrawer(this.mainDrawer);

        this.nodesObjects = this.nodesObjects.concat(BPToNodes(this.blueprintObjects));
        this.layersContainer = this.mainDrawer.group();
        this.linksLayer = this.layersContainer.group();
        var nodesDraw = this.drawNodes(this.nodesObjects);
        var links = this.linksDrawer.renderNodes(this.nodesObjects);
        links.back();
        this.layersContainer = this.mainDrawer.group();
        this.linksLayer = this.layersContainer.group();
        this.nodesLayer = this.layersContainer.group();
        this.drawGrid();
        this.linksLayer.back();
        this.linksLayer.add(links);
        this.nodesLayer.add(nodesDraw);
        this.interfaceDrawer.render();
        var self = this;
        this.interfaceDrawer.setSaveCallback(function (e) {
            var xmlns = "http://www.w3.org/2000/xmlns/";
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.innerHTML = self.mainDrawer.svg();

            svg.setAttribute("version", "1.1");
            if (!svg.getAttribute('xmlns')) {
                svg.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
            }
            if (!svg.getAttribute('xmlns:xlink')) {
                svg.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
            }
            svgAsDataUri(svg, {}, function (uri) {
                var a = document.createElement('a');
                a.download = "blueprint.svg";
                a.href = uri;
                document.body.appendChild(a);
                a.addEventListener("click", function (e) {
                    a.parentNode.removeChild(a);
                });
                a.click();
            });
        });

        this.interfaceDrawer.setFullScreenCallback(function (e) {
            var elem = document.body; // Make the body go full screen.
            self.requestFullScreen(elem);
        });

        var self = this;
        this.svgCointainerNode.addEventListener('wheel', function (e) {
            self.wheelHandler(e);
        }, false);
        this.svgCointainerNode.addEventListener('contextmenu', function (ev) {
            ev.preventDefault();
            return false;
        }, false);
        this.subscribeMainDrawer();
        this.subscribeDocument();
    },
    subscribeDocument: function () {
        var self = this;
        document.addEventListener('paste', function (e) {
            var pastedText = undefined;
            if (window.clipboardData && window.clipboardData.getData) { // IE
                pastedText = window.clipboardData.getData('Text');
            } else if (e.clipboardData && e.clipboardData.getData) {
                pastedText = e.clipboardData.getData('text/plain');
            }

            var parser = new BPParser(pastedText);
            var newObjects = parser.parseText();
            if (newObjects) {
                var newNodes = BPToNodes(newObjects, self.currentCursorPos);
                self.nodesObjects = self.nodesObjects.concat(newNodes);

                var links = self.linksDrawer.renderNodes(newNodes)
                self.linksLayer.add(links);

                self.nodesLayer.add(self.drawNodes(newNodes));
            } else {
                console.log('Parse error');
            }
            return false; // Prevent the default handler from running.
        });
        document.addEventListener('copy', function (e) {
            return false;
        });

        document.onkeydown = function (evt) {
            evt = evt || window.event;
            console.log(evt.keyCode);
            if (evt.ctrlKey && evt.keyCode === 65) {
                self.nodesDrawer.selectAllNodes();
                evt.preventDefault();
            } else if (evt.ctrlKey && evt.keyCode === 67) {
                document.getElementById('copyContainer').innerHTML = '';
                self.nodesDrawer.selectedNodes.forEach(function (item) {
                    document.getElementById('copyContainer').innerHTML += item.x + ",";
                });
                var doc = document
                        , text = doc.getElementById('copyContainer')
                        , range, selection
                        ;
                if (doc.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(text);
                    range.select();
                } else if (window.getSelection) {
                    selection = window.getSelection();
                    range = document.createRange();
                    range.selectNodeContents(text);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
                document.getElementById('copyContainer').innerHTML = '';
            }
        };
    },
    subscribeMainDrawer: function () {
        var self = this;
        this.mainDrawer.mousedown(function (e) {
            if (e.button === 2) {
                self.interfaceDrawer.removeSelectRect();
                self.rightButtonDown = true;
            } else if (e.button === 0 && !e.shiftKey) {
                self.nodesDrawer.unselectAllNodes();
            } else if (e.button === 1) {
                e.preventDefault();
                return;
            }
            self.clickPoint = self.getCoords(e);
        });
        this.mainDrawer.mouseup(function (e) {
            if (e.button === 1) {
                e.preventDefault();
                return;
            }
            self.rightButtonDown = false;
            self.origin.x = self.layersContainer.x();
            self.origin.y = self.layersContainer.y();
            self.dragStart = false;
            self.clickPoint = null;
            self.interfaceDrawer.removeSelectRect();
        });
        this.mainDrawer.mousemove(function (e) {

            self.currentCursorPos = self.getCoords(e).subtract(self.origin).divide(self.currentScale);
            if (self.rightButtonDown) {
                var delta = self.getCoords(e).subtract(self.clickPoint);
                self.grid.updatePattern(self.origin.x + delta.x, self.origin.y + delta.y, self.currentScale);
                self.layersContainer.move(self.origin.x + delta.x, self.origin.y + delta.y);
            }



            if (self.nodesDrawer.dragNode !== null && (e.button === 0)) {

                var delta = self.getCoords(e);
                if (!self.nodesDrawer.isNodeSelected(self.nodesDrawer.dragNode)) {
                    self.nodesDrawer.selectNode(self.nodesDrawer.dragNode, e);
                }

                var newPos = new Vector(delta.x - self.nodesDrawer.pointOnNode.x - self.origin.x, delta.y - self.nodesDrawer.pointOnNode.y - self.origin.y).divide(self.currentScale);
                newPos = self.getNearestCell(newPos.x, newPos.y)
                var deltaPos = new Vector(newPos.x - self.nodesDrawer.dragNode.allNode.x(), newPos.y - self.nodesDrawer.dragNode.allNode.y());
                self.nodesDrawer.dragNode.allNode.move(newPos.x, newPos.y);
                if (!self.dragStart) {
                    if (self.nodesDrawer.dragNode instanceof CommentNode) {
                        //console.log('is instance');
                        self.nodesObjects.forEach(function (nodeItem) {
                            if (inNode(self.nodesDrawer.dragNode, nodeItem) && nodeItem !== self.nodesDrawer.dragNode && self.nodesDrawer.selectedNodes.indexOf(nodeItem) === -1) {
                                self.nodesDrawer.movingNodes.push(nodeItem);
                            }
                        });
                    }


                    self.nodesDrawer.selectedNodes.forEach(function (node) {
                        if (node instanceof CommentNode && node !== self.nodesDrawer.dragNode) {
                            self.nodesObjects.forEach(function (nodeItem) {
                                if (inNode(node, nodeItem) && nodeItem !== node && self.nodesDrawer.selectedNodes.indexOf(nodeItem) === -1) {
                                    self.nodesDrawer.movingNodes.push(nodeItem);
                                }
                            });
                        }
                    });
                    self.dragStart = true;
                }



                self.nodesDrawer.selectedNodes.forEach(function (node) {
                    if (node !== self.nodesDrawer.dragNode) {
                        node.allNode.dmove(deltaPos.x, deltaPos.y);
                        node.x = node.allNode.x();
                        node.y = node.allNode.y();
                    }
                });
                self.nodesDrawer.movingNodes.forEach(function (node) {
                    if (node !== self.nodesDrawer.dragNode) {
                        node.allNode.dmove(deltaPos.x, deltaPos.y);
                        node.x = node.allNode.x();
                        node.y = node.allNode.y();
                    }
                });
                self.nodesDrawer.dragNode.x = self.nodesDrawer.dragNode.allNode.x();
                self.nodesDrawer.dragNode.y = self.nodesDrawer.dragNode.allNode.y();
                var affectedNodes = self.nodesDrawer.selectedNodes.concat(self.nodesDrawer.movingNodes);
                self.linksDrawer.redrawNodes(affectedNodes);
                // self.linksLayer.add(self.links);
            }
            if (!self.nodesDrawer.dragNode && self.clickPoint && !self.rightButtonDown) {
                var endPoint = self.getCoords(e);
                self.interfaceDrawer.drawSelectRect(self.clickPoint, self.getCoords(e));
                var rect = {};
                rect.x = (self.clickPoint.x < endPoint.x) && self.clickPoint.x || endPoint.x;
                rect.y = (self.clickPoint.y < endPoint.y) && self.clickPoint.y || endPoint.y;
                rect.width = Math.abs(endPoint.x - self.clickPoint.x);
                rect.height = Math.abs(endPoint.y - self.clickPoint.y);
                rect.x -= self.origin.x;
                rect.y -= self.origin.y;
                var group = [];
                self.nodesObjects.forEach(function (nodeItem) {
                    if (nodeItem instanceof CommentNode) {
                        if (intersectNodeSelectable(rect, nodeItem, self.currentScale, self.interfaceDrawer, self.origin)) {
                            group.push(nodeItem);
                        }
                    } else {
                        if (intersectNode(rect, nodeItem, self.currentScale, self.interfaceDrawer, self.origin)) {
                            group.push(nodeItem);
                        }
                    }
                })
                //console.log(group);
                if (!e.shiftKey)
                    self.nodesDrawer.selectNodeGroup(group);
                else {
                    //console.log('add group');
                    self.nodesDrawer.addNodeGroupToSelect(group);
                }

            }

        });
    },
    wheelHandler: function (e) {
        var sign = e.deltaY > 0 && -1 || 1;
        var newScaleStep = this.currentScaleStep + sign;
        if (newScaleStep >= -12 && newScaleStep <= 7) {
            var newScale = this.currentScale + sign * 0.08;
            var point = this.getCoords(e).subtract(this.origin).divide(this.currentScale);
            var deltaScale = newScale - this.currentScale;
            var offsetX = -((point.x) * deltaScale);
            var offsetY = -((point.y) * deltaScale);
            this.layersContainer.scale(newScale);
            this.layersContainer.move(this.origin.x, this.origin.y);
            this.layersContainer.dmove(offsetX, offsetY);
            this.origin.x = this.layersContainer.x();
            this.origin.y = this.layersContainer.y();
            this.currentScaleStep = newScaleStep;
            this.interfaceDrawer.setScaleLabelText(this.currentScaleStep);
            this.currentScale = newScale;
            this.grid.gridPattern.scale(this.currentScale);
            this.grid.updatePattern(this.origin.x, this.origin.y, this.currentScale);
        }
    },
    drawNodes: function (nodes) {
        var nodesDraw = this.nodesDrawer.renderNodes(nodes);
        return nodesDraw;
    },
    drawGrid: function () {
        this.grid = new Grid(this.mainDrawer, this.drawerWidth, this.drawerHeight);
    },
    setupListeners: function () {

    },
    getNearestCell: function (x, y) {
        return new Vector(Math.floor(x / CONFIG["GRID_STEP"]) * CONFIG["GRID_STEP"], Math.floor(y / CONFIG["GRID_STEP"]) * CONFIG["GRID_STEP"]);
    },
    requestFullScreen: function (element) {
        // Supports most browsers and their versions.
        if (this.isFullScreen) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            this.isFullScreen = false;
        } else {
            var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
            this.isFullScreen = true;
            if (requestMethod) { // Native full screen.
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }

    }
});