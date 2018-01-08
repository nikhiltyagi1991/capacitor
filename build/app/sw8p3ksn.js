/*! Built with http://stenciljs.com */

App.loadStyles("anchor-link","\nanchor-link.hydrated{visibility:inherit}","app-marked","\napp-marked.hydrated{visibility:inherit}","avc-code-type","\navc-code-type.hydrated{visibility:inherit}","doc-snippet","\ndoc-snippet.hydrated{visibility:inherit}","document-component","document-component ul{-webkit-padding-start:0}document-component ul code,document-component ul li{font-size:16px;margin-left:18px}document-component p a{color:#5eb6fc;text-decoration:none}document-component p code{font-weight:600;font-family:\"Source Code Pro\",monospace;font-size:14px;letter-spacing:-.02em}document-component #introButton{background:#5eb6fc;color:#fff;text-decoration:none;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}document-component #introButton:hover{box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}\ndocument-component.hydrated{visibility:inherit}","plugin-api","plugin-api .avc-code-plugin-index anchor-link{color:#5eb6fc;cursor:pointer}plugin-api .avc-code-plugin-name{display:none}plugin-api .avc-code-method-anchor-point{height:20px}plugin-api .avc-code-method .avc-code-method-header{margin-top:15px}plugin-api .avc-code-method .avc-code-method-comment{margin:20px 0}plugin-api .avc-code-method-signature{font-family:monospace;padding:8px;background-color:#eee;border-radius:3px}plugin-api .avc-code-method-params .avc-code-method-param-info .avc-code-method-param-info-name{font-size:14px;font-weight:700}plugin-api .avc-code-method-params .avc-code-method-param-info .avc-code-type-name,plugin-api .avc-code-method-params .avc-code-method-param-info avc-code-type{margin-left:5px;margin-right:5px;font-style:italic}plugin-api .avc-code-method-params .avc-code-method-param-info .avc-code-method-param-comment{display:inline-block}plugin-api .avc-code-method-params .avc-code-method-returns-label{font-weight:700;font-size:14px;text-transform:lowercase}plugin-api avc-code-type{display:inline-block;color:#4b904b}plugin-api .avc-code-string{color:#4b904b}plugin-api .avc-code-interface-param{margin-left:25px}\nplugin-api.hydrated{visibility:inherit}");
App.loadComponents("sw8p3ksn",function(e,t,n,o){"use strict";class c{handleClick(e){document.location.hash=this.to;let t=document.querySelector("html").scrollTop;window.scrollTo(0,t-60)}render(){return t("div",{onClick:this.handleClick.bind(this)},t("slot",null))}}class s{componentWillLoad(){return this.fetchNewContent()}fetchNewContent(){return fetch(`/avocado/docs-content/${this.doc}`).then(e=>e.text()).then(e=>{this.content=e;const t=document.createElement("div");t.innerHTML=e;const n=t.querySelector("h1");document.title=n&&n.textContent+" - Avocado"||"Avocado",this.isServer||window.requestAnimationFrame(()=>{window.scrollTo(0,0)})})}render(){return t("div",{innerHTML:this.content})}}class i{render(){return this.typeId?t("a",{href:"#"},t("slot",null)):t("slot",null)}}class r{render(){return t("div",{class:"snippet"})}}class l{constructor(){this.pages=[]}render(){return console.log(this.pages),t("div",{class:"wrapper"},t("div",{class:"pull-left"},t("site-menu",null)),t("div",{class:"pull-right"},this.pages.map(e=>t("app-marked",{doc:e}))))}}class d{componentDidLoad(){const e=`api${this.index?"-index":""}.html`;return fetch(`/avocado/docs-content/apis/${this.name}/${e}`).then(e=>e.text()).then(e=>{this.content=e,document.createElement("div").innerHTML=e})}render(){return t("div",null,t("div",{innerHTML:this.content}))}}e["anchor-link"]=c,e["app-marked"]=s,e["avc-code-type"]=i,e["doc-snippet"]=r,e["document-component"]=l,e["plugin-api"]=d},["anchor-link",[["to",1,1,2]],{}],["app-marked",[["content",5,0,1],["doc",1,1,2],["isServer",3,0,1,"isServer"]],{},0,0,[["doc","fetchNewContent"]]],["avc-code-type",[["typeId",1,1,2]],{}],["doc-snippet",0,{}],["document-component",[["pages",1,1,1]],{}],["plugin-api",[["content",5,0,1],["index",1,1,3],["name",1,1,2]],{}]);;