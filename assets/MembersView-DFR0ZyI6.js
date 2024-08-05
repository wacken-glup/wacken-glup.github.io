import{k as _,v as y,_ as C,c as i,a as t,s as u,t as r,F as m,u as k,o as a,x as D,q as M,r as f,y as w,b,m as h,z as B}from"./index-C5C5sEua.js";const q={data(){return{entries:[]}},methods:{render(){var p;let e=new Map;for(let n of((p=this.$client.space)==null?void 0:p.members)||[]){for(let o of n.likes)e.set(o,(e.get(o)||0)+2);for(let o of n.suggestions)e.set(o,(e.get(o)||0)+1)}let s=[];s.push(...e.keys()),s.sort((n,o)=>(e.get(o)||0)-(e.get(n)||0)),this.entries=[];let c=0;for(let n of s)this.entries.push({index:c,entry:this.$client.container.actByUid.value.get(n)}),c++},check(){this.$route.query.dialogMemberCharts&&(async()=>{var e;for(;((e=this.$client.space)==null?void 0:e.loaded)!=!0;)await _(50);this.render()})()}},mounted(){this.check()},watch:{$route(){this.check()}},components:{ActCard:y}},A={class:"surface-container fixed",style:{padding:"0 1rem"}},N=t("i",null,"close",-1),I=[N],V={class:"max"},x={class:"padding"},z=t("div",{class:"space"},null,-1);function F(e,s,c,p,n,o){const g=f("ActCard");return a(),i(m,null,[t("div",{class:u(["overlay",{active:e.$route.query.dialogMemberCharts}]),onClick:s[0]||(s[0]=d=>e.$router.back())},null,2),t("dialog",{class:u([{active:e.$route.query.dialogMemberCharts},"max-s no-padding"])},[t("header",A,[t("nav",null,[t("button",{class:"circle transparent",onClick:s[1]||(s[1]=d=>e.$router.back())},I),t("h5",V,r(e.$t("members.dialog.charts.title")),1)])]),t("div",x,[z,(a(!0),i(m,null,k(n.entries,d=>(a(),D(g,{model:d.entry},{default:M(()=>[t("h6",null,r(d.index+1)+".",1)]),_:2},1032,["model"]))),256))])],2)],64)}const R=C(q,[["render",F]]),T={data(){return{loaded:!1,openDeleteMemberConfirmDialog:!1,currentMember:void 0}},methods:{deleteMember(e,s=!1){if(!s){this.currentMember=e,this.openDeleteMemberConfirmDialog=!0;return}e.delete(),this.$client.space.members=this.$client.space.members.filter(c=>c.id!=e.id)},openDialog(e){this.$router.push({query:{member:e.id}})},openMemberChartsDialog(){this.$router.push({query:{dialogMemberCharts:"true",...this.$route.query}})}},mounted(){(async()=>{var e;for(;((e=this.$client.space)==null?void 0:e.loaded)!=!0;)await _(50);this.loaded=!0})()},components:{AppBar:w,RouteBasedMemberChartsDialog:R}},L=t("i",null,"stars",-1),O=[L],S={key:0,class:"responsive"},E={class:"middle-align center-align",style:{height:"100%"}},P={key:0,class:"center-align",style:{display:"flex","flex-direction":"row","flex-wrap":"wrap",gap:"24px","align-self":"safe center"}},U=["onClick"],W={style:{padding:"40px"}},j={class:"center-align"},G={class:"link small-text"},H={key:0,class:"link small-text"},J=t("br",null,null,-1),K=t("div",{class:"space"},null,-1),Q={class:"center-align"},X=["onClick"],Y=t("i",null,"delete",-1),Z={class:"right-align no-space"},ee=t("div",{class:"space"},null,-1);function te(e,s,c,p,n,o){const g=f("AppBar"),d=f("RouteBasedMemberChartsDialog");return a(),i(m,null,[b(g,{label:e.$t("navigation.members")},{prepend:M(()=>[t("button",{class:"circle transparent",onClick:s[0]||(s[0]=l=>o.openMemberChartsDialog())},O)]),_:1},8,["label"]),n.loaded?(a(),i("main",S,[t("div",E,[e.$client.space!=null?(a(),i("div",P,[(a(!0),i(m,null,k(e.$client.space.members,l=>{var $;return a(),i("div",null,[t("article",{class:"medium middle-align wave wave-medium",onClick:v=>o.openDialog(l),style:{cursor:"pointer"}},[t("div",W,[t("i",{class:u(["extra",[`${l.color}-text`]])},"person",2),t("h5",j,r(l.name),1),t("span",G,r(e.$tc("common.likes",l.likes.length))+" "+r(e.$t("common.and"))+" "+r(e.$tc("common.recommendations",l.suggestions.length)),1),isNaN(l.calculateTasteMatch(e.$client.space.self))?h("",!0):(a(),i("span",H,[J,B(r(e.$t("members.tasteMatch",{n:`${l.calculateTasteMatch(e.$client.space.self).toLocaleString(void 0,{maximumFractionDigits:2})}%`})),1)])),($=e.$client.space.self)!=null&&$.isOwner()&&!l.isOwner()?(a(),i(m,{key:1},[K,t("nav",Q,[t("button",{style:{"z-index":"10"},class:"large error",onClick:v=>{v.stopPropagation(),o.deleteMember(l)}},[Y,t("span",null,r(e.$t("common.delete")),1)],8,X)])],64)):h("",!0)])],8,U)])}),256))])):h("",!0)]),t("div",{class:u(["overlay",{active:n.openDeleteMemberConfirmDialog}]),onClick:s[1]||(s[1]=l=>n.openDeleteMemberConfirmDialog=!1)},null,2),t("dialog",{class:u(["error",{active:n.openDeleteMemberConfirmDialog}])},[t("h5",null,r(e.$t("members.dialog.removeMember.title")),1),t("div",null,r(e.$t("members.dialog.removeMember.message")),1),t("nav",Z,[t("button",{class:"error transparent",onClick:s[2]||(s[2]=l=>n.openDeleteMemberConfirmDialog=!1)},r(e.$t("common.abort")),1),ee,t("button",{class:"error-container no-elevate",onClick:s[3]||(s[3]=l=>{n.openDeleteMemberConfirmDialog=!1,o.deleteMember(n.currentMember,!0)})},r(e.$t("common.confirm")),1)])],2)])):h("",!0),b(d)],64)}const ne=C(T,[["render",te]]);export{ne as default};
