(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[138],{94184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var u in n)o.call(n,u)&&n[u]&&e.push(u)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},71210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(94941).Z;n(45753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(92648).Z,a=n(17273).Z,i=r(n(67294)),u=n(76273),l=n(22725),f=n(63462),c=n(21018),s=n(57190),d=n(71210),p=n(98684),v={};function y(e,t,n,o){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var h=i.default.forwardRef((function(e,t){var n,r=e.href,h=e.as,m=e.children,g=e.prefetch,b=e.passHref,x=e.replace,C=e.shallow,w=e.scroll,_=e.locale,E=e.onClick,M=e.onMouseEnter,j=e.onTouchStart,L=e.legacyBehavior,O=void 0===L?!0!==Boolean(!1):L,R=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!O||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var k=!1!==g,S=i.default.useContext(f.RouterContext),P=i.default.useContext(c.AppRouterContext);P&&(S=P);var T,N=i.default.useMemo((function(){var e=o(u.resolveHref(S,r,!0),2),t=e[0],n=e[1];return{href:t,as:h?u.resolveHref(S,h):n||t}}),[S,r,h]),A=N.href,I=N.as,q=i.default.useRef(A),B=i.default.useRef(I);O&&(T=i.default.Children.only(n));var Z=O?T&&"object"===typeof T&&T.ref:t,H=o(s.useIntersection({rootMargin:"200px"}),3),U=H[0],z=H[1],D=H[2],K=i.default.useCallback((function(e){B.current===I&&q.current===A||(D(),B.current=I,q.current=A),U(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[I,Z,A,D,U]);i.default.useEffect((function(){var e=z&&k&&u.isLocalURL(A),t="undefined"!==typeof _?_:S&&S.locale,n=v[A+"%"+I+(t?"%"+t:"")];e&&!n&&y(S,A,I,{locale:t})}),[I,A,z,_,k,S]);var F={ref:K,onClick:function(e){O||"function"!==typeof E||E(e),O&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,l,f,c,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:f,scroll:l}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};c?i.default.startTransition(d):d()}}(e,S,A,I,x,C,w,_,Boolean(P),k)},onMouseEnter:function(e){O||"function"!==typeof M||M(e),O&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!k&&P||u.isLocalURL(A)&&y(S,A,I,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof j||j(e),O&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!k&&P||u.isLocalURL(A)&&y(S,A,I,{priority:!0})}};if(!O||b||"a"===T.type&&!("href"in T.props)){var G="undefined"!==typeof _?_:S&&S.locale,X=S&&S.isLocaleDomain&&d.getDomainLocale(I,G,S.locales,S.domainLocales);F.href=X||p.addBasePath(l.addLocale(I,G,S&&S.defaultLocale))}return O?i.default.cloneElement(T,F):i.default.createElement("a",Object.assign({},R,F),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},57190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!i,c=o(r.useState(!1),2),s=c[0],d=c[1],p=o(r.useState(null),2),v=p[0],y=p[1];r.useEffect((function(){if(i){if(f||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=u.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},l.push(n),u.set(n,t),t}(n),r=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(o)}}}),[v,f,n,t,s]);var h=r.useCallback((function(){d(!1)}),[]);return[y,s,h]};var r=n(67294),a=n(9311),i="function"===typeof IntersectionObserver,u=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(92648).Z)(n(67294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var i=o.default.createContext(null);t.GlobalLayoutRouterContext=i;var u=o.default.createContext(null);t.TemplateContext=u},9008:function(e,t,n){e.exports=n(5443)},41664:function(e,t,n){e.exports=n(48418)},97005:function(e,t,n){var o=n(67294);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var a=r(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};!function(e){if(!e||"undefined"===typeof window)return;const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');t.Z=function(e){var t,n,r,u,l=e.style,f=void 0===l?{}:l,c=e.className,s=void 0===c?"":c,d=e.play,p=void 0===d||d,v=e.pauseOnHover,y=void 0!==v&&v,h=e.pauseOnClick,m=void 0!==h&&h,g=e.direction,b=void 0===g?"left":g,x=e.speed,C=void 0===x?20:x,w=e.delay,_=void 0===w?0:w,E=e.loop,M=void 0===E?0:E,j=e.gradient,L=void 0===j||j,O=e.gradientColor,R=void 0===O?[255,255,255]:O,k=e.gradientWidth,S=void 0===k?200:k,P=e.onFinish,T=e.onCycleComplete,N=e.children,A=o.useState(0),I=A[0],q=A[1],B=o.useState(0),Z=B[0],H=B[1],U=o.useState(!1),z=U[0],D=U[1],K=o.useRef(null),F=o.useRef(null);o.useEffect((function(){if(z){var e=function(){F.current&&K.current&&(q(K.current.getBoundingClientRect().width),H(F.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[z]),o.useEffect((function(){D(!0)}),[]);var G="rgba("+R[0]+", "+R[1]+", "+R[2],X=Z<I?I/C:Z/C;return a.default.createElement(o.Fragment,null,z?a.default.createElement("div",{ref:K,style:i(i({},f),(t={},t["--pause-on-hover"]=!p||y?"paused":"running",t["--pause-on-click"]=!p||y&&!m||m?"paused":"running",t)),className:s+" marquee-container"},L&&a.default.createElement("div",{style:(n={},n["--gradient-color"]=G+", 1), "+G+", 0)",n["--gradient-width"]="number"===typeof S?S+"px":S,n),className:"overlay"}),a.default.createElement("div",{ref:F,style:(r={},r["--play"]=p?"running":"paused",r["--direction"]="left"===b?"normal":"reverse",r["--duration"]=X+"s",r["--delay"]=_+"s",r["--iteration-count"]=M?""+M:"infinite",r),className:"marquee",onAnimationIteration:T,onAnimationEnd:P},N),a.default.createElement("div",{style:(u={},u["--play"]=p?"running":"paused",u["--direction"]="left"===b?"normal":"reverse",u["--duration"]=X+"s",u["--delay"]=_+"s",u["--iteration-count"]=M?""+M:"infinite",u),className:"marquee","aria-hidden":"true"},N)):null)}}}]);