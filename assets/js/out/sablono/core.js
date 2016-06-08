// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__11688__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11687 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11687,(0),null);
var body = cljs.core.nthnext.call(null,vec__11687,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11689__i = 0, G__11689__a = new Array(arguments.length -  0);
while (G__11689__i < G__11689__a.length) {G__11689__a[G__11689__i] = arguments[G__11689__i + 0]; ++G__11689__i;}
  args = new cljs.core.IndexedSeq(G__11689__a,0);
} 
return G__11688__delegate.call(this,args);};
G__11688.cljs$lang$maxFixedArity = 0;
G__11688.cljs$lang$applyTo = (function (arglist__11690){
var args = cljs.core.seq(arglist__11690);
return G__11688__delegate(args);
});
G__11688.cljs$core$IFn$_invoke$arity$variadic = G__11688__delegate;
return G__11688;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5443__auto__ = (function sablono$core$update_arglists_$_iter__11695(s__11696){
return (new cljs.core.LazySeq(null,(function (){
var s__11696__$1 = s__11696;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11696__$1);
if(temp__4425__auto__){
var s__11696__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11696__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__11696__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__11698 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__11697 = (0);
while(true){
if((i__11697 < size__5442__auto__)){
var args = cljs.core._nth.call(null,c__5441__auto__,i__11697);
cljs.core.chunk_append.call(null,b__11698,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11699 = (i__11697 + (1));
i__11697 = G__11699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11698),sablono$core$update_arglists_$_iter__11695.call(null,cljs.core.chunk_rest.call(null,s__11696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11698),null);
}
} else {
var args = cljs.core.first.call(null,s__11696__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11695.call(null,cljs.core.rest.call(null,s__11696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11705 = arguments.length;
var i__5730__auto___11706 = (0);
while(true){
if((i__5730__auto___11706 < len__5729__auto___11705)){
args__5736__auto__.push((arguments[i__5730__auto___11706]));

var G__11707 = (i__5730__auto___11706 + (1));
i__5730__auto___11706 = G__11707;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5443__auto__ = (function sablono$core$iter__11701(s__11702){
return (new cljs.core.LazySeq(null,(function (){
var s__11702__$1 = s__11702;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11702__$1);
if(temp__4425__auto__){
var s__11702__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11702__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__11702__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__11704 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__11703 = (0);
while(true){
if((i__11703 < size__5442__auto__)){
var style = cljs.core._nth.call(null,c__5441__auto__,i__11703);
cljs.core.chunk_append.call(null,b__11704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11708 = (i__11703 + (1));
i__11703 = G__11708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11704),sablono$core$iter__11701.call(null,cljs.core.chunk_rest.call(null,s__11702__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11704),null);
}
} else {
var style = cljs.core.first.call(null,s__11702__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11701.call(null,cljs.core.rest.call(null,s__11702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq11700){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11700));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to11709 = (function sablono$core$link_to11709(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11712 = arguments.length;
var i__5730__auto___11713 = (0);
while(true){
if((i__5730__auto___11713 < len__5729__auto___11712)){
args__5736__auto__.push((arguments[i__5730__auto___11713]));

var G__11714 = (i__5730__auto___11713 + (1));
i__5730__auto___11713 = G__11714;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return sablono.core.link_to11709.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

sablono.core.link_to11709.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11709.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11709.cljs$lang$applyTo = (function (seq11710){
var G__11711 = cljs.core.first.call(null,seq11710);
var seq11710__$1 = cljs.core.next.call(null,seq11710);
return sablono.core.link_to11709.cljs$core$IFn$_invoke$arity$variadic(G__11711,seq11710__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11709);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11715 = (function sablono$core$mail_to11715(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11720 = arguments.length;
var i__5730__auto___11721 = (0);
while(true){
if((i__5730__auto___11721 < len__5729__auto___11720)){
args__5736__auto__.push((arguments[i__5730__auto___11721]));

var G__11722 = (i__5730__auto___11721 + (1));
i__5730__auto___11721 = G__11722;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11715.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

sablono.core.mail_to11715.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11718){
var vec__11719 = p__11718;
var content = cljs.core.nth.call(null,vec__11719,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4671__auto__ = content;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11715.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11715.cljs$lang$applyTo = (function (seq11716){
var G__11717 = cljs.core.first.call(null,seq11716);
var seq11716__$1 = cljs.core.next.call(null,seq11716);
return sablono.core.mail_to11715.cljs$core$IFn$_invoke$arity$variadic(G__11717,seq11716__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11715);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11723 = (function sablono$core$unordered_list11723(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5443__auto__ = (function sablono$core$unordered_list11723_$_iter__11728(s__11729){
return (new cljs.core.LazySeq(null,(function (){
var s__11729__$1 = s__11729;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11729__$1);
if(temp__4425__auto__){
var s__11729__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11729__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__11729__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__11731 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__11730 = (0);
while(true){
if((i__11730 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__11730);
cljs.core.chunk_append.call(null,b__11731,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11732 = (i__11730 + (1));
i__11730 = G__11732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11731),sablono$core$unordered_list11723_$_iter__11728.call(null,cljs.core.chunk_rest.call(null,s__11729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11731),null);
}
} else {
var x = cljs.core.first.call(null,s__11729__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11723_$_iter__11728.call(null,cljs.core.rest.call(null,s__11729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11723);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11733 = (function sablono$core$ordered_list11733(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5443__auto__ = (function sablono$core$ordered_list11733_$_iter__11738(s__11739){
return (new cljs.core.LazySeq(null,(function (){
var s__11739__$1 = s__11739;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11739__$1);
if(temp__4425__auto__){
var s__11739__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11739__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__11739__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__11741 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__11740 = (0);
while(true){
if((i__11740 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__11740);
cljs.core.chunk_append.call(null,b__11741,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11742 = (i__11740 + (1));
i__11740 = G__11742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11741),sablono$core$ordered_list11733_$_iter__11738.call(null,cljs.core.chunk_rest.call(null,s__11739__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11741),null);
}
} else {
var x = cljs.core.first.call(null,s__11739__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11733_$_iter__11738.call(null,cljs.core.rest.call(null,s__11739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11733);
/**
 * Create an image element.
 */
sablono.core.image11743 = (function sablono$core$image11743(var_args){
var args11744 = [];
var len__5729__auto___11747 = arguments.length;
var i__5730__auto___11748 = (0);
while(true){
if((i__5730__auto___11748 < len__5729__auto___11747)){
args11744.push((arguments[i__5730__auto___11748]));

var G__11749 = (i__5730__auto___11748 + (1));
i__5730__auto___11748 = G__11749;
continue;
} else {
}
break;
}

var G__11746 = args11744.length;
switch (G__11746) {
case 1:
return sablono.core.image11743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11744.length)].join('')));

}
});

sablono.core.image11743.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11743.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11743.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11743);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11751_SHARP_,p2__11752_SHARP_){
return [cljs.core.str(p1__11751_SHARP_),cljs.core.str("["),cljs.core.str(p2__11752_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11753_SHARP_,p2__11754_SHARP_){
return [cljs.core.str(p1__11753_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11754_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4671__auto__ = value;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field11755 = (function sablono$core$color_field11755(var_args){
var args11756 = [];
var len__5729__auto___11823 = arguments.length;
var i__5730__auto___11824 = (0);
while(true){
if((i__5730__auto___11824 < len__5729__auto___11823)){
args11756.push((arguments[i__5730__auto___11824]));

var G__11825 = (i__5730__auto___11824 + (1));
i__5730__auto___11824 = G__11825;
continue;
} else {
}
break;
}

var G__11758 = args11756.length;
switch (G__11758) {
case 1:
return sablono.core.color_field11755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11756.length)].join('')));

}
});

sablono.core.color_field11755.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.color_field11755.call(null,name__11676__auto__,null);
});

sablono.core.color_field11755.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.color_field11755.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11755);

/**
 * Creates a date input field.
 */
sablono.core.date_field11759 = (function sablono$core$date_field11759(var_args){
var args11760 = [];
var len__5729__auto___11827 = arguments.length;
var i__5730__auto___11828 = (0);
while(true){
if((i__5730__auto___11828 < len__5729__auto___11827)){
args11760.push((arguments[i__5730__auto___11828]));

var G__11829 = (i__5730__auto___11828 + (1));
i__5730__auto___11828 = G__11829;
continue;
} else {
}
break;
}

var G__11762 = args11760.length;
switch (G__11762) {
case 1:
return sablono.core.date_field11759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11760.length)].join('')));

}
});

sablono.core.date_field11759.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.date_field11759.call(null,name__11676__auto__,null);
});

sablono.core.date_field11759.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.date_field11759.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11759);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11763 = (function sablono$core$datetime_field11763(var_args){
var args11764 = [];
var len__5729__auto___11831 = arguments.length;
var i__5730__auto___11832 = (0);
while(true){
if((i__5730__auto___11832 < len__5729__auto___11831)){
args11764.push((arguments[i__5730__auto___11832]));

var G__11833 = (i__5730__auto___11832 + (1));
i__5730__auto___11832 = G__11833;
continue;
} else {
}
break;
}

var G__11766 = args11764.length;
switch (G__11766) {
case 1:
return sablono.core.datetime_field11763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11764.length)].join('')));

}
});

sablono.core.datetime_field11763.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.datetime_field11763.call(null,name__11676__auto__,null);
});

sablono.core.datetime_field11763.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.datetime_field11763.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11763);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11767 = (function sablono$core$datetime_local_field11767(var_args){
var args11768 = [];
var len__5729__auto___11835 = arguments.length;
var i__5730__auto___11836 = (0);
while(true){
if((i__5730__auto___11836 < len__5729__auto___11835)){
args11768.push((arguments[i__5730__auto___11836]));

var G__11837 = (i__5730__auto___11836 + (1));
i__5730__auto___11836 = G__11837;
continue;
} else {
}
break;
}

var G__11770 = args11768.length;
switch (G__11770) {
case 1:
return sablono.core.datetime_local_field11767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11768.length)].join('')));

}
});

sablono.core.datetime_local_field11767.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.datetime_local_field11767.call(null,name__11676__auto__,null);
});

sablono.core.datetime_local_field11767.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.datetime_local_field11767.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11767);

/**
 * Creates a email input field.
 */
sablono.core.email_field11771 = (function sablono$core$email_field11771(var_args){
var args11772 = [];
var len__5729__auto___11839 = arguments.length;
var i__5730__auto___11840 = (0);
while(true){
if((i__5730__auto___11840 < len__5729__auto___11839)){
args11772.push((arguments[i__5730__auto___11840]));

var G__11841 = (i__5730__auto___11840 + (1));
i__5730__auto___11840 = G__11841;
continue;
} else {
}
break;
}

var G__11774 = args11772.length;
switch (G__11774) {
case 1:
return sablono.core.email_field11771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11772.length)].join('')));

}
});

sablono.core.email_field11771.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.email_field11771.call(null,name__11676__auto__,null);
});

sablono.core.email_field11771.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.email_field11771.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11771);

/**
 * Creates a file input field.
 */
sablono.core.file_field11775 = (function sablono$core$file_field11775(var_args){
var args11776 = [];
var len__5729__auto___11843 = arguments.length;
var i__5730__auto___11844 = (0);
while(true){
if((i__5730__auto___11844 < len__5729__auto___11843)){
args11776.push((arguments[i__5730__auto___11844]));

var G__11845 = (i__5730__auto___11844 + (1));
i__5730__auto___11844 = G__11845;
continue;
} else {
}
break;
}

var G__11778 = args11776.length;
switch (G__11778) {
case 1:
return sablono.core.file_field11775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11776.length)].join('')));

}
});

sablono.core.file_field11775.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.file_field11775.call(null,name__11676__auto__,null);
});

sablono.core.file_field11775.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.file_field11775.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11775);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11779 = (function sablono$core$hidden_field11779(var_args){
var args11780 = [];
var len__5729__auto___11847 = arguments.length;
var i__5730__auto___11848 = (0);
while(true){
if((i__5730__auto___11848 < len__5729__auto___11847)){
args11780.push((arguments[i__5730__auto___11848]));

var G__11849 = (i__5730__auto___11848 + (1));
i__5730__auto___11848 = G__11849;
continue;
} else {
}
break;
}

var G__11782 = args11780.length;
switch (G__11782) {
case 1:
return sablono.core.hidden_field11779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11780.length)].join('')));

}
});

sablono.core.hidden_field11779.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.hidden_field11779.call(null,name__11676__auto__,null);
});

sablono.core.hidden_field11779.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.hidden_field11779.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11779);

/**
 * Creates a month input field.
 */
sablono.core.month_field11783 = (function sablono$core$month_field11783(var_args){
var args11784 = [];
var len__5729__auto___11851 = arguments.length;
var i__5730__auto___11852 = (0);
while(true){
if((i__5730__auto___11852 < len__5729__auto___11851)){
args11784.push((arguments[i__5730__auto___11852]));

var G__11853 = (i__5730__auto___11852 + (1));
i__5730__auto___11852 = G__11853;
continue;
} else {
}
break;
}

var G__11786 = args11784.length;
switch (G__11786) {
case 1:
return sablono.core.month_field11783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11784.length)].join('')));

}
});

sablono.core.month_field11783.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.month_field11783.call(null,name__11676__auto__,null);
});

sablono.core.month_field11783.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.month_field11783.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11783);

/**
 * Creates a number input field.
 */
sablono.core.number_field11787 = (function sablono$core$number_field11787(var_args){
var args11788 = [];
var len__5729__auto___11855 = arguments.length;
var i__5730__auto___11856 = (0);
while(true){
if((i__5730__auto___11856 < len__5729__auto___11855)){
args11788.push((arguments[i__5730__auto___11856]));

var G__11857 = (i__5730__auto___11856 + (1));
i__5730__auto___11856 = G__11857;
continue;
} else {
}
break;
}

var G__11790 = args11788.length;
switch (G__11790) {
case 1:
return sablono.core.number_field11787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11788.length)].join('')));

}
});

sablono.core.number_field11787.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.number_field11787.call(null,name__11676__auto__,null);
});

sablono.core.number_field11787.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.number_field11787.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11787);

/**
 * Creates a password input field.
 */
sablono.core.password_field11791 = (function sablono$core$password_field11791(var_args){
var args11792 = [];
var len__5729__auto___11859 = arguments.length;
var i__5730__auto___11860 = (0);
while(true){
if((i__5730__auto___11860 < len__5729__auto___11859)){
args11792.push((arguments[i__5730__auto___11860]));

var G__11861 = (i__5730__auto___11860 + (1));
i__5730__auto___11860 = G__11861;
continue;
} else {
}
break;
}

var G__11794 = args11792.length;
switch (G__11794) {
case 1:
return sablono.core.password_field11791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11792.length)].join('')));

}
});

sablono.core.password_field11791.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.password_field11791.call(null,name__11676__auto__,null);
});

sablono.core.password_field11791.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.password_field11791.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11791);

/**
 * Creates a range input field.
 */
sablono.core.range_field11795 = (function sablono$core$range_field11795(var_args){
var args11796 = [];
var len__5729__auto___11863 = arguments.length;
var i__5730__auto___11864 = (0);
while(true){
if((i__5730__auto___11864 < len__5729__auto___11863)){
args11796.push((arguments[i__5730__auto___11864]));

var G__11865 = (i__5730__auto___11864 + (1));
i__5730__auto___11864 = G__11865;
continue;
} else {
}
break;
}

var G__11798 = args11796.length;
switch (G__11798) {
case 1:
return sablono.core.range_field11795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11796.length)].join('')));

}
});

sablono.core.range_field11795.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.range_field11795.call(null,name__11676__auto__,null);
});

sablono.core.range_field11795.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.range_field11795.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11795);

/**
 * Creates a search input field.
 */
sablono.core.search_field11799 = (function sablono$core$search_field11799(var_args){
var args11800 = [];
var len__5729__auto___11867 = arguments.length;
var i__5730__auto___11868 = (0);
while(true){
if((i__5730__auto___11868 < len__5729__auto___11867)){
args11800.push((arguments[i__5730__auto___11868]));

var G__11869 = (i__5730__auto___11868 + (1));
i__5730__auto___11868 = G__11869;
continue;
} else {
}
break;
}

var G__11802 = args11800.length;
switch (G__11802) {
case 1:
return sablono.core.search_field11799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11800.length)].join('')));

}
});

sablono.core.search_field11799.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.search_field11799.call(null,name__11676__auto__,null);
});

sablono.core.search_field11799.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.search_field11799.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11799);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11803 = (function sablono$core$tel_field11803(var_args){
var args11804 = [];
var len__5729__auto___11871 = arguments.length;
var i__5730__auto___11872 = (0);
while(true){
if((i__5730__auto___11872 < len__5729__auto___11871)){
args11804.push((arguments[i__5730__auto___11872]));

var G__11873 = (i__5730__auto___11872 + (1));
i__5730__auto___11872 = G__11873;
continue;
} else {
}
break;
}

var G__11806 = args11804.length;
switch (G__11806) {
case 1:
return sablono.core.tel_field11803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11804.length)].join('')));

}
});

sablono.core.tel_field11803.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.tel_field11803.call(null,name__11676__auto__,null);
});

sablono.core.tel_field11803.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.tel_field11803.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11803);

/**
 * Creates a text input field.
 */
sablono.core.text_field11807 = (function sablono$core$text_field11807(var_args){
var args11808 = [];
var len__5729__auto___11875 = arguments.length;
var i__5730__auto___11876 = (0);
while(true){
if((i__5730__auto___11876 < len__5729__auto___11875)){
args11808.push((arguments[i__5730__auto___11876]));

var G__11877 = (i__5730__auto___11876 + (1));
i__5730__auto___11876 = G__11877;
continue;
} else {
}
break;
}

var G__11810 = args11808.length;
switch (G__11810) {
case 1:
return sablono.core.text_field11807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11808.length)].join('')));

}
});

sablono.core.text_field11807.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.text_field11807.call(null,name__11676__auto__,null);
});

sablono.core.text_field11807.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.text_field11807.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11807);

/**
 * Creates a time input field.
 */
sablono.core.time_field11811 = (function sablono$core$time_field11811(var_args){
var args11812 = [];
var len__5729__auto___11879 = arguments.length;
var i__5730__auto___11880 = (0);
while(true){
if((i__5730__auto___11880 < len__5729__auto___11879)){
args11812.push((arguments[i__5730__auto___11880]));

var G__11881 = (i__5730__auto___11880 + (1));
i__5730__auto___11880 = G__11881;
continue;
} else {
}
break;
}

var G__11814 = args11812.length;
switch (G__11814) {
case 1:
return sablono.core.time_field11811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11812.length)].join('')));

}
});

sablono.core.time_field11811.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.time_field11811.call(null,name__11676__auto__,null);
});

sablono.core.time_field11811.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.time_field11811.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11811);

/**
 * Creates a url input field.
 */
sablono.core.url_field11815 = (function sablono$core$url_field11815(var_args){
var args11816 = [];
var len__5729__auto___11883 = arguments.length;
var i__5730__auto___11884 = (0);
while(true){
if((i__5730__auto___11884 < len__5729__auto___11883)){
args11816.push((arguments[i__5730__auto___11884]));

var G__11885 = (i__5730__auto___11884 + (1));
i__5730__auto___11884 = G__11885;
continue;
} else {
}
break;
}

var G__11818 = args11816.length;
switch (G__11818) {
case 1:
return sablono.core.url_field11815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11816.length)].join('')));

}
});

sablono.core.url_field11815.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.url_field11815.call(null,name__11676__auto__,null);
});

sablono.core.url_field11815.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.url_field11815.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11815);

/**
 * Creates a week input field.
 */
sablono.core.week_field11819 = (function sablono$core$week_field11819(var_args){
var args11820 = [];
var len__5729__auto___11887 = arguments.length;
var i__5730__auto___11888 = (0);
while(true){
if((i__5730__auto___11888 < len__5729__auto___11887)){
args11820.push((arguments[i__5730__auto___11888]));

var G__11889 = (i__5730__auto___11888 + (1));
i__5730__auto___11888 = G__11889;
continue;
} else {
}
break;
}

var G__11822 = args11820.length;
switch (G__11822) {
case 1:
return sablono.core.week_field11819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11820.length)].join('')));

}
});

sablono.core.week_field11819.cljs$core$IFn$_invoke$arity$1 = (function (name__11676__auto__){
return sablono.core.week_field11819.call(null,name__11676__auto__,null);
});

sablono.core.week_field11819.cljs$core$IFn$_invoke$arity$2 = (function (name__11676__auto__,value__11677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11676__auto__,value__11677__auto__);
});

sablono.core.week_field11819.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11819);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11891 = (function sablono$core$check_box11891(var_args){
var args11892 = [];
var len__5729__auto___11895 = arguments.length;
var i__5730__auto___11896 = (0);
while(true){
if((i__5730__auto___11896 < len__5729__auto___11895)){
args11892.push((arguments[i__5730__auto___11896]));

var G__11897 = (i__5730__auto___11896 + (1));
i__5730__auto___11896 = G__11897;
continue;
} else {
}
break;
}

var G__11894 = args11892.length;
switch (G__11894) {
case 1:
return sablono.core.check_box11891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11891.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11892.length)].join('')));

}
});

sablono.core.check_box11891.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11891.call(null,name,null);
});

sablono.core.check_box11891.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11891.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11891.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4671__auto__ = value;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11891.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11891);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11899 = (function sablono$core$radio_button11899(var_args){
var args11900 = [];
var len__5729__auto___11903 = arguments.length;
var i__5730__auto___11904 = (0);
while(true){
if((i__5730__auto___11904 < len__5729__auto___11903)){
args11900.push((arguments[i__5730__auto___11904]));

var G__11905 = (i__5730__auto___11904 + (1));
i__5730__auto___11904 = G__11905;
continue;
} else {
}
break;
}

var G__11902 = args11900.length;
switch (G__11902) {
case 1:
return sablono.core.radio_button11899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11899.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11900.length)].join('')));

}
});

sablono.core.radio_button11899.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11899.call(null,group,null);
});

sablono.core.radio_button11899.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11899.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11899.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4671__auto__ = value;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11899.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11899);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11907 = (function sablono$core$select_options11907(coll){
var iter__5443__auto__ = (function sablono$core$select_options11907_$_iter__11916(s__11917){
return (new cljs.core.LazySeq(null,(function (){
var s__11917__$1 = s__11917;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11917__$1);
if(temp__4425__auto__){
var s__11917__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11917__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__11917__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__11919 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__11918 = (0);
while(true){
if((i__11918 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__11918);
cljs.core.chunk_append.call(null,b__11919,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11922 = x;
var text = cljs.core.nth.call(null,vec__11922,(0),null);
var val = cljs.core.nth.call(null,vec__11922,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11922,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11907.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__11924 = (i__11918 + (1));
i__11918 = G__11924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11919),sablono$core$select_options11907_$_iter__11916.call(null,cljs.core.chunk_rest.call(null,s__11917__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11919),null);
}
} else {
var x = cljs.core.first.call(null,s__11917__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11923 = x;
var text = cljs.core.nth.call(null,vec__11923,(0),null);
var val = cljs.core.nth.call(null,vec__11923,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11923,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11907.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options11907_$_iter__11916.call(null,cljs.core.rest.call(null,s__11917__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11907);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11925 = (function sablono$core$drop_down11925(var_args){
var args11926 = [];
var len__5729__auto___11929 = arguments.length;
var i__5730__auto___11930 = (0);
while(true){
if((i__5730__auto___11930 < len__5729__auto___11929)){
args11926.push((arguments[i__5730__auto___11930]));

var G__11931 = (i__5730__auto___11930 + (1));
i__5730__auto___11930 = G__11931;
continue;
} else {
}
break;
}

var G__11928 = args11926.length;
switch (G__11928) {
case 2:
return sablono.core.drop_down11925.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11925.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11926.length)].join('')));

}
});

sablono.core.drop_down11925.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11925.call(null,name,options,null);
});

sablono.core.drop_down11925.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11925.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11925);
/**
 * Creates a text area element.
 */
sablono.core.text_area11933 = (function sablono$core$text_area11933(var_args){
var args11934 = [];
var len__5729__auto___11937 = arguments.length;
var i__5730__auto___11938 = (0);
while(true){
if((i__5730__auto___11938 < len__5729__auto___11937)){
args11934.push((arguments[i__5730__auto___11938]));

var G__11939 = (i__5730__auto___11938 + (1));
i__5730__auto___11938 = G__11939;
continue;
} else {
}
break;
}

var G__11936 = args11934.length;
switch (G__11936) {
case 1:
return sablono.core.text_area11933.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11934.length)].join('')));

}
});

sablono.core.text_area11933.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11933.call(null,name,null);
});

sablono.core.text_area11933.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4671__auto__ = value;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area11933.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11933);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11941 = (function sablono$core$label11941(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11941);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11942 = (function sablono$core$submit_button11942(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11942);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11943 = (function sablono$core$reset_button11943(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11943);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11944 = (function sablono$core$form_to11944(var_args){
var args__5736__auto__ = [];
var len__5729__auto___11949 = arguments.length;
var i__5730__auto___11950 = (0);
while(true){
if((i__5730__auto___11950 < len__5729__auto___11949)){
args__5736__auto__.push((arguments[i__5730__auto___11950]));

var G__11951 = (i__5730__auto___11950 + (1));
i__5730__auto___11950 = G__11951;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return sablono.core.form_to11944.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

sablono.core.form_to11944.cljs$core$IFn$_invoke$arity$variadic = (function (p__11947,body){
var vec__11948 = p__11947;
var method = cljs.core.nth.call(null,vec__11948,(0),null);
var action = cljs.core.nth.call(null,vec__11948,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to11944.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11944.cljs$lang$applyTo = (function (seq11945){
var G__11946 = cljs.core.first.call(null,seq11945);
var seq11945__$1 = cljs.core.next.call(null,seq11945);
return sablono.core.form_to11944.cljs$core$IFn$_invoke$arity$variadic(G__11946,seq11945__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11944);

//# sourceMappingURL=core.js.map