(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n("q1tI")),a=n("lwAK");function l(){let{ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&n}t.isInAmpMode=l,t.useAmp=function(){return l(o.default.useContext(a.AmpStateContext))}},"/a9y":function(e,t,n){"use strict";var r=n("AroE");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),a=r(n("8Kt/")),l={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){var{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}class s extends o.default.Component{render(){var{statusCode:e}=this.props,t=this.props.title||l[e]||"An unexpected error has occurred";return o.default.createElement("div",{style:u.error},o.default.createElement(a.default,null,o.default.createElement("title",null,e,": ",t)),o.default.createElement("div",null,o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?o.default.createElement("h1",{style:u.h1},e):null,o.default.createElement("div",{style:u.desc},o.default.createElement("h2",{style:u.h2},t,"."))))}}t.default=s,s.displayName="ErrorPage",s.getInitialProps=i,s.origGetInitialProps=i;var u={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n("q1tI")),a=r(n("Xuae")),l=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}t.defaultHead=u;const c=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((e,t)=>{const n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){const t=c[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?a=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;n.has(e)?a=!1:(n.add(e),r[t]=n)}}}return a}}()).reverse().map((e,t)=>{const n=e.key||t;return o.default.cloneElement(e,{key:n})})}const f=a.default();function h(e){let{children:t}=e;return o.default.createElement(l.AmpStateContext.Consumer,null,e=>o.default.createElement(i.HeadManagerContext.Consumer,null,n=>o.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)))}h.rewind=f.rewind,t.default=h},Xuae:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("q1tI");t.default=()=>{const e=new Set;let t;function n(n){t=n.props.reduceComponentsToState([...e],n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return class extends r.Component{static rewind(){const n=t;return t=void 0,e.clear(),n}constructor(e){super(e)}componentDidMount(){e.add(this),n(this)}componentDidUpdate(){n(this)}componentWillUnmount(){e.delete(this),n(this)}render(){return null}}}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},nHv3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])}},[["nHv3",1,2,0]]]);