(this["webpackJsonphullu-clone"]=this["webpackJsonphullu-clone"]||[]).push([[0],{33:function(e,t,n){e.exports=n(67)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(38),n(8)),l=(n(39),n(40),n(21)),s=n.n(l),m=n(23),u=n.n(m),h=n(24),d=n.n(h),v=n(25),f=n.n(v),p=n(26),E=n.n(p),_=n(27),g=n.n(_);var k=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__icons"},c.a.createElement("div",{className:"header__icon header__icon--active"},c.a.createElement(s.a,null),c.a.createElement("p",null,"Home")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(u.a,null),c.a.createElement("p",null,"Trending")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(d.a,null),c.a.createElement("p",null,"Verified")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(f.a,null),c.a.createElement("p",null,"Collections")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(E.a,null),c.a.createElement("p",null,"Search")),c.a.createElement("div",{className:"header__icon"},c.a.createElement(g.a,null),c.a.createElement("p",null,"Account"))),c.a.createElement("img",{src:"https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png",alt:"logo"}))},y=(n(46),"7d76a8754ea44342c7befaec4c31e658"),w={fetchTrending:"/trending/all/week?api_key=".concat(y,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(y,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(y,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(y,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(y,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(y,"&with_genres=10749"),fetchMystery:"/discover/movie?api_key=".concat(y,"&with_genres=9648"),fetchSciFi:"/discover/movie?api_key=".concat(y,"&with_genres=878"),fetchWestern:"/discover/movie?api_key=".concat(y,"&with_genres=37"),fetchAnimation:"/discover/movie?api_key=".concat(y,"&with_genres=16"),fetchTV:"/discover/movie?api_key=".concat(y,"&with_genres=10770")};var C=function(e){var t=e.setSelectedOption;return c.a.createElement("div",{className:"nav"},c.a.createElement("h2",{onClick:function(){return t(w.fetchTrending)}},"Trending"),c.a.createElement("h2",{onClick:function(){return t(w.fetchTopRated)}},"Top Rated"),c.a.createElement("h2",{onClick:function(){return t(w.fetchActionMovies)}},"Action"),c.a.createElement("h2",{onClick:function(){return t(w.fetchComedyMovies)}},"Comedy"),c.a.createElement("h2",{onClick:function(){return t(w.fetchHorrorMovies)}},"Horror"),c.a.createElement("h2",{onClick:function(){return t(w.fetchRomanceMovies)}},"Romance"),c.a.createElement("h2",{onClick:function(){return t(w.fetchMystery)}},"Mystery"),c.a.createElement("h2",{onClick:function(){return t(w.fetchSciFi)}},"Sci-fi"),c.a.createElement("h2",{onClick:function(){return t(w.fetchWestern)}},"Western"),c.a.createElement("h2",{onClick:function(){return t(w.fetchAnimation)}},"Animation"),c.a.createElement("h2",{onClick:function(){return t(w.fetchTV)}},"Movie"))},b=n(9),M=n.n(b),N=n(28),O=(n(48),n(31)),S=(n(49),n(29)),T=n.n(S),R=n(79),j=Object(a.forwardRef)((function(e,t){var n=e.movie;return c.a.createElement("div",{ref:t,className:"videoCard"},c.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/original/").concat(n.backdrop_path||n.poster_path),alt:"image"}),c.a.createElement(T.a,{line:1,element:"p",truncateText:"    ...........read more",text:n.overview}),c.a.createElement("h2",null,n.title||n.original_name),c.a.createElement("div",{className:"videoCard__stats"},c.a.createElement(R.a,null),c.a.createElement("p",null,n.vote_count),c.a.createElement("p",null,n.release_date||n.first_air_date),console.log(n)))})),A=n(30),x=n.n(A).a.create({baseURL:"https://api.themoviedb.org/3"});var W=function(e){var t=e.selectedOption,n=Object(a.useState)([]),r=Object(o.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(N.a)(M.a.mark((function e(){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t);case 2:return n=e.sent,l(n.data.results),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),c.a.createElement("div",{className:"results"},c.a.createElement(O.a,null,i.map((function(e){return c.a.createElement(j,{key:e.id,movie:e})}))))};var H=function(){var e=Object(a.useState)(w.fetchTrending),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"app"},c.a.createElement(k,null),c.a.createElement(C,{setSelectedOption:r}),c.a.createElement(W,{selectedOption:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.eb964521.chunk.js.map