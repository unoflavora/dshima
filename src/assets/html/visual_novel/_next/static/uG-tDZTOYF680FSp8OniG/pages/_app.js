(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(e,t,n){n("paUU"),e.exports=n("nOHt")},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=u,t.default=void 0;var o=r(n("q1tI")),s=n("g/15");async function a(e){var{Component:t,ctx:n}=e;return{pageProps:await(0,s.loadGetInitialProps)(t,n)}}t.AppInitialProps=s.AppInitialProps;class i extends o.default.Component{componentDidCatch(e,t){throw e}render(){var{router:e,Component:t,pageProps:n,__N_SSG:r,__N_SSP:s}=this.props;return(o.default.createElement(t,Object.assign({},n,r||s?{}:{url:u(e)})))}}function u(e){var{pathname:t,asPath:n,query:r}=e;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:()=>{e.back()},push:(t,n)=>e.push(t,n),pushTo:(t,n)=>{var r=n?t:"",o=n||t;return e.push(r,o)},replace:(t,n)=>e.replace(t,n),replaceTo:(t,n)=>{var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=i,i.origGetInitialProps=a,i.getInitialProps=a},YNMu:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),s=n("8Bbg"),a=n.n(s),i=n("ANjH"),u=n("rePB"),c=o.a.createElement;class l extends r.Component{static getDerivedStateFromError(){return{hasError:!0}}constructor(e){super(e),Object(u.a)(this,"onReloadClick",()=>window.location.reload()),this.state={hasError:!1,error:"",info:""},this.onReloadClick=this.onReloadClick.bind(this)}render(){const{props:e,state:t}=this,{hasError:n,error:r,info:s}=t,{children:a}=e;return n?c("div",null,c("h1",null,"Something went wrong with the course, click reload to refresh the page."),c("details",null,c("summary",null,"Error log"),c("p",null,r)),c("details",null,c("summary",null,"Info log"),c("p",null,s)),c("button",{type:"button",onClick:this.onReloadClick},"Reload")):c(o.a.Fragment,null,a)}}l.defaultProps={children:null};var p=l,d=n("/MKj");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return r=this,o=(e=h(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==f(o)&&"function"!==typeof o?w(r):o,y(w(n),"state",{bootstrapped:!1}),y(w(n),"_unsubscribe",void 0),y(w(n),"handlePersistorState",(function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally((function(){return n.setState({bootstrapped:!0})})):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"===typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}])&&b(n.prototype,r),o&&b(n,o),t}(r.PureComponent);y(O,"defaultProps",{children:null,loading:null});var v=n("fTHX"),x=o.a.createElement,m=e=>t=>x(d.a,{store:v.b},x(O,{loading:null,persistor:v.a},x(e,t))),j=n("FryI"),S=n("J2Gt"),T=n("F5/p"),A=o.a.createElement;var P=e=>t=>{let n=Object.assign({},t);const{0:o,1:s}=Object(r.useState)(null);return Object(r.useEffect)(()=>{(()=>{const e=S.a.get("./static/copywriting.json",T.a.JSON);e.onload=()=>{const{response:t}=e,{selected_language:n,copywriting:r}=t;return s(r[n]||r["en-US"])}})()},[]),A(j.a.Provider,{value:o},o&&A(e,n))},C=n("IYxF"),_=o.a.createElement;var E=e=>t=>{let n=Object.assign({},t);const{0:o,1:s}=Object(r.useState)(null);return Object(r.useEffect)(()=>{(()=>{const e=S.a.get("./static/color.json",T.a.JSON);e.onload=()=>{const{response:t}=e;return s(t)}})()},[]),_(C.a.Provider,{value:o},o&&_(e,n))},B=n("uG2V"),I=o.a.createElement,k=n("UOcf");let L=null,F=null;const N=()=>{L||(L={sfxButtonAnswerTap:new Audio(k.b.buttonAnswerTap),sfxQuestionChange:new Audio(k.b.questionChange),sfxCardPlaced:new Audio(k.b.letterTapIn),sfxLetterTapIn:new Audio(k.b.letterTapIn),sfxLetterTapOut:new Audio(k.b.letterTapOut),sfxAnswerTrue:new Audio(k.b.answerTrue),sfxAnswerFalse:new Audio(k.b.answerFalse),sfxLetterTyping:new Audio(k.b.letterTyping),sfxScoreBarProgress:new Audio(k.b.scoreBarProgress),sfxScoreBarStop:new Audio(k.b.scoreBarStop),sfxCardIn:new Audio(k.b.readCardIn),sfxCardSwipedIn:new Audio(k.b.readCardSwipedIn),sfxCardSwipedOut:new Audio(k.b.readCardSwipedOut),sfxWordsTrue:new Audio(k.b.wordsTrue),sfxLetterTrue:new Audio(k.b.letterTrue),sfxAnswerToggle:new Audio(k.b.answerToggle)},F={choiceExercise:[L.sfxButtonAnswerTap,L.sfxQuestionChange],dnd:[L.sfxCardPlaced,L.sfxAnswerTrue,L.sfxAnswerFalse],essayTyping:[L.sfxLetterTyping,L.sfxButtonAnswerTap],choiceLesson:[L.sfxScoreBarProgress,L.sfxScoreBarStop,L.sfxButtonAnswerTap,L.sfxQuestionChange],read:[L.sfxCardIn,L.sfxCardSwipedIn,L.sfxCardSwipedOut],scrabble:[L.sfxLetterTapIn,L.sfxLetterTapOut,L.sfxWordsTrue,L.sfxLetterTrue],slider:[L.sfxAnswerToggle,L.sfxButtonAnswerTap],swipe:[L.sfxCardSwipedOut,L.sfxAnswerTrue,L.sfxAnswerFalse]})};var U=n("vDqi"),R=n.n(U),q=n("t7Cv"),M=n("tMhQ");const{SET_DATA:D}=M.k,{dispatch:G}=v.b;var J=e=>{G((e=>({type:D,data:e}))(e))},H=o.a.createElement;var Q=e=>t=>{let n=Object.assign({},t);return Object(r.useEffect)(()=>{(async()=>{try{const{data:e}=await R.a.get("".concat(Object(q.b)(),"setting.json"));J(e)}catch{}})()},[]),H(e,n)},X=n("nOHt"),W=n("qeXF"),Y=n("udwc");const V=e=>e.navigateLesson;var z=e=>V(e).isOnCheckPoint;const K=e=>e.setting;var Z=e=>K(e).isBGMPlayInRead,$=o.a.createElement;var ee=e=>t=>{let n=Object.assign({},t);const o=Object(d.d)(Z),s=Object(d.d)(z),[a,i]=Object(Y.a)(new Audio(k.a.vnBgm),!0),u=Object(X.useRouter)();return Object(r.useEffect)(()=>{if(s)return void i();const e=u.pathname.substring(1);e===W.a.Read&&o||e===W.a.VisualNarrative?a(0,!0):i()},[u.pathname,s]),$(e,n)},te=n("Lq7z"),ne=n("a4fB"),re=o.a.createElement;var oe=e=>t=>{let n=Object.assign({},t);const s=Object(d.c)(),{0:a,1:i}=Object(r.useState)(!1);return Object(r.useEffect)(()=>{(async()=>{Object(q.c)();const e=await R.a.get("./static/contents/topic.json");s(Object(ne.a)(e.data));const t=await R.a.get("./static/contents/vn.json"),{data:n}=t;s(Object(te.b)(n.id,0,0,0)),s(Object(te.a)(n)),i(!0)})()},[]),a?re(e,n):re(o.a.Fragment,null)},se=o.a.createElement;class ae extends a.a{componentDidMount(){N()}render(){const{Component:e,pageProps:t}=this.props;return se(p,null,se(e,t))}}t.default=Object(i.c)(m,Q,oe,P,E,e=>t=>{let n=Object.assign({},t);const r=Object(d.d)(e=>e.client),{isLevioPlatform:o=!1}=r;return I(B.a.Provider,{value:o},I(e,n))},ee)(ae)},paUU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])}},[[0,1,2,0,3]]]);