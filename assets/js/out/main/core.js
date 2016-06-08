// Compiled by ClojureScript 1.7.170 {}
goog.provide('main.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('secretary.core');
goog.require('index.core');
var action__8902__auto___8915 = (function (params__8903__auto__){
if(cljs.core.map_QMARK_.call(null,params__8903__auto__)){
var map__8912 = params__8903__auto__;
var map__8912__$1 = ((((!((map__8912 == null)))?((((map__8912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8912):map__8912);
return om.core.root.call(null,index.core.video,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__8903__auto__)){
var vec__8914 = params__8903__auto__;
return om.core.root.call(null,index.core.video,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__8902__auto___8915);

secretary.core.dispatch_BANG_.call(null,"/");

//# sourceMappingURL=core.js.map