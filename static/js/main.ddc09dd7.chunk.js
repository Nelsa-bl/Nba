(this.webpackJsonpnba=this.webpackJsonpnba||[]).push([[0],{26:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(19),i=s.n(n),l=(s(26),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))}),r=s(8),d=s(2),j=s.p+"static/media/nba-logo-75.3bc2d851.png",m=s(0);var o=function(){return Object(m.jsx)("div",{className:"navigation",children:Object(m.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(r.c,{className:"navbar-brand",to:"/",children:Object(m.jsx)("img",{src:j,className:"img-fluid",alt:"Logo"})}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)(r.c,{className:"nav-link",to:"/",children:["Home",Object(m.jsx)("span",{className:"sr-only"})]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.c,{className:"nav-link",to:"/standings",children:"Standings"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.c,{className:"nav-link",to:"/contact",children:"Contact"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.c,{className:"nav-link",to:"/blog",children:"Blog"})})]})})]})})})};var h=s(3),b=s(4),O=s(6),x=s(5),p=s(11),u=s.n(p),v=(s(16),function(e){return Object(m.jsx)("div",{className:"game-overview",children:Object(m.jsx)(r.b,{to:"/blog/".concat(e.game.id),children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-5",children:Object(m.jsxs)("div",{className:"team-away",children:[Object(m.jsx)("div",{className:"team-logo team-logo-".concat(e.game.home_team.name)}),Object(m.jsx)("span",{className:"team-name",children:e.game.home_team.full_name}),Object(m.jsx)("span",{className:"team-score",children:function(){if(0!==e.game.home_team_score)return Object(m.jsx)("span",{children:e.game.home_team_score})}()})]})}),Object(m.jsx)("div",{className:"col-2",children:Object(m.jsx)("div",{className:"at",children:"-"})}),Object(m.jsx)("div",{className:"col-5",children:Object(m.jsxs)("div",{className:"team-home",children:[Object(m.jsx)("span",{className:"team-score",children:function(){if(0!==e.game.visitor_team_score)return Object(m.jsx)("span",{children:e.game.visitor_team_score})}()}),Object(m.jsx)("span",{className:"team-name",children:e.game.visitor_team.full_name}),Object(m.jsx)("div",{className:"team-logo team-logo-".concat(e.game.visitor_team.name)})]})})]})})})}),g=function(e){return Object(m.jsx)("div",{className:"",children:e.yestedaysGames.map((function(e){return Object(m.jsx)(v,{game:e},e.id)}))})},f=function(e){Object(O.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={yestedaysGames:[]},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=u()().subtract(1,"days").format("YYYY-MM-DD");fetch("https://free-nba.p.rapidapi.com/games?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&dates[]=".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({yestedaysGames:t.data})}))}},{key:"render",value:function(){return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)(g,{yestedaysGames:this.state.yestedaysGames})})}}]),s}(a.Component),N=Object(a.memo)(f),y=function(e){return Object(m.jsx)("div",{className:"",children:e.todaysGames.map((function(e){return Object(m.jsx)(v,{game:e},e.id)}))})},w=function(e){Object(O.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={todaysGames:[]},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=u()().format("YYYY-MM-DD");fetch("https://free-nba.p.rapidapi.com/games?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&dates[]=".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({todaysGames:t.data})}))}},{key:"render",value:function(){return Object(m.jsx)(y,{todaysGames:this.state.todaysGames})}}]),s}(a.Component),_=Object(a.memo)(w),k=function(e){return Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("div",{className:"youtube-video",children:Object(m.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(e.video.id.videoId),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(m.jsx)("span",{className:"videoName",children:e.video.snippet.title})]})},D=s(20),S=s.n(D),F=(s(43),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}}),I=function(e){return Object(m.jsx)("div",{className:"carousel-wprapper",children:Object(m.jsx)(S.a,{partialVisible:!0,responsive:F,itemClass:"carousel-item-padding",children:e.gamesRecap.map((function(e){return Object(m.jsx)(k,{video:e},e.id)}))})})},L=function(e){Object(O.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={gamesRecap:[]},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLd4dSmXdrJykO_hgOzbfPw&maxResults=5&order=date&key=AIzaSyAtohTamLAGYD6Qbs6sbd-II6GqfQSR8nU").then((function(e){if(!e.ok)throw Error("Coud not fetch data.");return e.json()})).then((function(t){return e.setState({gamesRecap:t.items})})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){return Object(m.jsx)(I,{gamesRecap:this.state.gamesRecap})}}]),s}(a.Component),C=Object(a.memo)(L);var A=function(){return Object(m.jsxs)("div",{className:"start-page",children:[Object(m.jsxs)("div",{className:"results",children:[Object(m.jsxs)("div",{className:"results-latest",children:[Object(m.jsx)("h5",{children:"Latest Results"}),Object(m.jsx)("span",{className:"game-date",children:"Yesterday"}),Object(m.jsx)(N,{})]}),Object(m.jsxs)("div",{className:"games-upcoming",children:[Object(m.jsx)("h5",{children:"Upcoming Games"}),Object(m.jsx)("span",{className:"game-date",children:"Upcoming"}),Object(m.jsx)(_,{})]})]}),Object(m.jsxs)("div",{className:"video-summery",children:[Object(m.jsx)("h5",{children:"Recap"}),Object(m.jsx)(C,{})]}),Object(m.jsxs)("div",{className:"nba-shows",children:[Object(m.jsx)("h5",{children:"Inside NBA"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("div",{className:"video-palceholder"})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("div",{className:"video-palceholder"})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("div",{className:"video-palceholder"})}),Object(m.jsx)("div",{className:"col-3",children:Object(m.jsx)("div",{className:"video-palceholder"})})]})]})]})},G=s(9),T=function(e){var t=parseInt(e.placment.win)+parseInt(e.placment.loss),s=(100/(parseInt(e.placment.homeWin)+parseInt(e.placment.homeLoss))*parseInt(e.placment.homeWin)/100).toFixed(3),a=(100/(parseInt(e.placment.awayWin)+parseInt(e.placment.awayLoss))*parseInt(e.placment.awayWin)/100).toFixed(3);return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("span",{className:"rank",children:e.placment.confRank})}),Object(m.jsxs)("td",{className:"teamName",children:[Object(m.jsx)("div",{className:"team-logo team-logo-".concat(e.placment.teamSitesOnly.teamNickname)}),Object(m.jsxs)("div",{className:"teamNamePlacement",children:[e.placment.teamSitesOnly.teamName," ",e.placment.teamSitesOnly.teamNickname]})]}),Object(m.jsx)("td",{children:t}),Object(m.jsx)("td",{children:e.placment.win}),Object(m.jsx)("td",{children:e.placment.loss}),Object(m.jsxs)("td",{children:["0",e.placment.winPct]}),Object(m.jsxs)("td",{className:"hideField",children:[e.placment.homeWin,"-",e.placment.homeLoss]}),Object(m.jsx)("td",{className:"hideField",children:s}),Object(m.jsxs)("td",{className:"hideField",children:[e.placment.awayWin,"-",e.placment.awayLoss]}),Object(m.jsx)("td",{className:"hideField",children:a}),Object(m.jsxs)("td",{children:[e.placment.lastTenWin,"-",e.placment.lastTenLoss]})]})},M=s(12),Y=function(e){return Object(m.jsx)("div",{className:"standings east",children:Object(m.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{style:{width:"30px"},children:Object(m.jsx)("span",{className:"conference"})}),Object(m.jsx)("th",{style:{width:"200px",textAlign:"left",paddingLeft:"15px"},children:"Eastern Conference"}),Object(m.jsx)("th",{style:{width:"50px"},children:"Pl"}),Object(m.jsx)("th",{style:{width:"50px"},children:"W"}),Object(m.jsx)("th",{style:{width:"50px"},children:"L"}),Object(m.jsx)("th",{style:{width:"50px"},children:"%"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"HOME"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"%"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"AWAY"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"%"}),Object(m.jsx)("th",{style:{width:"50px"},children:"L-10"})]})}),Object(m.jsx)("tbody",{children:e.standingsTabel.map((function(e){return Object(m.jsx)(T,{placment:e},e.id)}))})]})})},R=function(e){Object(O.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={standingsTabel:[],isSitchOn:!1},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.nba.net/data/10s/prod/v1/current/standings_conference.json").then((function(e){return e.json()})).then((function(t){return e.setState({standingsTabel:t.league.standard.conference.east})}))}},{key:"render",value:function(){return Object(m.jsx)(Y,{standingsTabel:this.state.standingsTabel,isSitchOn:this.state.isSitchOn})}}]),s}(a.Component),W=Object(a.memo)(R),B=function(e){return Object(m.jsx)("div",{className:"standings west",children:Object(m.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{style:{width:"30px"},children:Object(m.jsx)("span",{className:"conference"})}),Object(m.jsx)("th",{style:{width:"200px",textAlign:"left",paddingLeft:"15px"},children:"Eastern Conference"}),Object(m.jsx)("th",{style:{width:"50px"},children:"Pl"}),Object(m.jsx)("th",{style:{width:"50px"},children:"W"}),Object(m.jsx)("th",{style:{width:"50px"},children:"L"}),Object(m.jsx)("th",{style:{width:"50px"},children:"%"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"HOME"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"%"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"AWAY"}),Object(m.jsx)("th",{className:"hideField",style:{width:"50px"},children:"%"}),Object(m.jsx)("th",{style:{width:"50px"},children:"L-10"})]})}),Object(m.jsx)("tbody",{children:e.standingsTabel.map((function(e){return Object(m.jsx)(T,{placment:e},e.id)}))})]})})},E=function(e){Object(O.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={standingsTabel:[],isSitchOn:!1},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.nba.net/data/10s/prod/v1/current/standings_conference.json").then((function(e){return e.json()})).then((function(t){return e.setState({standingsTabel:t.league.standard.conference.west})}))}},{key:"render",value:function(){return Object(m.jsx)(B,{standingsTabel:this.state.standingsTabel,isSitchOn:this.state.isSitchOn})}}]),s}(a.Component),P=Object(a.memo)(E);var U=function(){var e=Object(a.useState)(!1),t=Object(G.a)(e,2),s=t[0],c=t[1];return Object(m.jsxs)("div",{className:"standingsDiv",children:[Object(m.jsxs)("h2",{children:["Standings",Object(m.jsx)("button",{onClick:function(){return c(!s)},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-plus-slash-minus",viewBox:"0 0 16 16",children:Object(m.jsx)("path",{d:"m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"})})})]}),Object(m.jsxs)("div",{className:s?"showAll":"hideAll",children:[Object(m.jsx)(W,{}),Object(m.jsx)(P,{})]})]})};var H=function(){return Object(m.jsx)("div",{className:"contact",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row align-items-center my-5",children:[Object(m.jsx)("div",{className:"col-lg-7",children:Object(m.jsx)("img",{className:"img-fluid rounded mb-4 mb-lg-0",src:"http://placehold.it/900x400",alt:""})}),Object(m.jsxs)("div",{className:"col-lg-5",children:[Object(m.jsx)("h1",{className:"font-weight-light",children:"Contact"}),Object(m.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})]})]})})})};var J=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(d.a,{})})})};var Z=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(r.b,{to:"/blog/this-is-a-post-title",children:Object(m.jsx)(N,{})})})})},z=function(e){return Object(m.jsxs)("div",{className:"list",children:[Object(m.jsx)("span",{className:"min",children:e.detail.min}),Object(m.jsxs)("span",{className:"player",children:[e.detail.player.first_name," ",e.detail.player.last_name]}),Object(m.jsx)("span",{className:"ast",children:e.detail.ast}),Object(m.jsx)("span",{className:"reb",children:e.detail.reb}),Object(m.jsx)("span",{className:"points",children:e.detail.pts})]})},Q=function(e){var t=e.gameDetails.filter((function(e){return e.game.home_team_id===e.team.id})).map((function(e){return e.team.full_name})),s=e.gameDetails.filter((function(e){return e.game.home_team_id===e.team.id})).map((function(e){return e.team.name})),a=e.gameDetails.filter((function(e){return e.game.visitor_team_id===e.team.id})).map((function(e){return e.game.home_team_score})),c=e.gameDetails.filter((function(e){return e.game.visitor_team_id===e.team.id})).map((function(e){return e.team.full_name})),n=e.gameDetails.filter((function(e){return e.game.visitor_team_id===e.team.id})).map((function(e){return e.team.name})),i=e.gameDetails.filter((function(e){return e.game.visitor_team_id===e.team.id})).map((function(e){return e.game.visitor_team_score}));return Object(m.jsx)("div",{id:"GameDetails",className:"gameDetails",hidden:!0,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"sep-bg"}),Object(m.jsx)("div",{className:"seperator",children:"-"}),Object(m.jsxs)("div",{className:"col-6 home-team team-color-".concat(s[1]),children:[Object(m.jsxs)("div",{className:"teamInfo",children:[Object(m.jsx)("div",{className:"team-logo team-logo-".concat(s[1])}),Object(m.jsx)("h2",{children:t[1]}),Object(m.jsx)("span",{children:a[1]})]}),Object(m.jsxs)("div",{className:"list-player-stats",children:[Object(m.jsxs)("div",{className:"list list-placeholder",children:[Object(m.jsx)("span",{className:"min"}),Object(m.jsx)("span",{className:"player"}),Object(m.jsx)("span",{className:"ast",children:"A"}),Object(m.jsx)("span",{className:"reb",children:"R"}),Object(m.jsx)("span",{className:"points",children:"P"})]}),e.gameDetails.filter((function(e){return e.game.home_team_id===e.player.team_id})).sort((function(e,t){return e.pts<t.pts?1:-1})).map((function(e){return Object(m.jsx)(z,{detail:e},e.id)}))]}),Object(m.jsx)("div",{className:"team-logo logo-float team-logo-".concat(s[1])})]}),Object(m.jsxs)("div",{className:"col-6 visitor-team team-color-".concat(n[1]),children:[Object(m.jsxs)("div",{className:"teamInfo",children:[Object(m.jsx)("span",{children:i[1]}),Object(m.jsx)("h2",{children:c[1]}),Object(m.jsx)("div",{className:"team-logo team-logo-".concat(n[1])})]}),Object(m.jsxs)("div",{className:"list-player-stats",children:[Object(m.jsxs)("div",{className:"list list-placeholder",children:[Object(m.jsx)("span",{className:"min"}),Object(m.jsx)("span",{className:"player"}),Object(m.jsx)("span",{className:"ast",children:"A"}),Object(m.jsx)("span",{className:"reb",children:"R"}),Object(m.jsx)("span",{className:"points",children:"P"})]}),e.gameDetails.filter((function(e){return e.game.visitor_team_id===e.player.team_id})).sort((function(e,t){return e.pts<t.pts?1:-1})).map((function(e){return Object(m.jsx)(z,{detail:e},e.id)}))]}),Object(m.jsx)("div",{className:"team-logo logo-float team-logo-".concat(n[1])})]})]})})},V=function(e){Object(O.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={gameDetails:[]},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/"),s=t.pop()||t.pop(),a=document.getElementById("spinner"),c=document.getElementById("GameDetails");fetch("https://free-nba.p.rapidapi.com/stats?rapidapi-key=b37a2b9397msh70d687beabd4d4cp1f7548jsn3c5a4aa1b040&game_ids[]=".concat(s)).then((function(e){return e.json()})).then((function(t){a.setAttribute("hidden",""),c.removeAttribute("hidden"),e.setState({gameDetails:t.data})})),console.log(s)}},{key:"render",value:function(){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(Q,{gameDetails:this.state.gameDetails}),Object(m.jsx)("div",{id:"spinner",className:"spinner-grow text-light",role:"status",children:Object(m.jsx)("img",{src:j,alt:"Nba logo",height:50})})]})}}]),s}(a.Component);var q=function(){var e=Object(d.h)().postSlug;return Object(a.useEffect)((function(){}),[e]),Object(m.jsx)("div",{className:"home",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(V,{})})})};a.Component;i.a.render(Object(m.jsxs)(r.a,{children:[Object(m.jsx)(o,{}),Object(m.jsxs)("div",{className:"bg-wrapper",children:[Object(m.jsx)("div",{className:"video-background",children:Object(m.jsx)("iframe",{title:"nba video bg",src:"https://player.vimeo.com/video/119920294?autoplay=1&loop=1&autopause=0&background=1",width:"1920",height:"100%",frameBorder:"0",allow:"autoplay;",allowFullScreen:!0})}),Object(m.jsx)("div",{className:"content",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"content-box",children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{path:"/",element:Object(m.jsx)(A,{})}),Object(m.jsx)(d.b,{path:"/standings",element:Object(m.jsx)(U,{})}),Object(m.jsx)(d.b,{path:"/contact",element:Object(m.jsx)(H,{})}),Object(m.jsxs)(d.b,{path:"/blog",element:Object(m.jsx)(J,{}),children:[Object(m.jsx)(d.b,{path:"",element:Object(m.jsx)(Z,{})}),Object(m.jsx)(d.b,{path:":postSlug",element:Object(m.jsx)(q,{})})]})]})})})})]})]}),document.getElementById("root")),l()}},[[44,1,2]]]);
//# sourceMappingURL=main.ddc09dd7.chunk.js.map