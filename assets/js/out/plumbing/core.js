// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args8945 = [];
var len__5729__auto___8954 = arguments.length;
var i__5730__auto___8955 = (0);
while(true){
if((i__5730__auto___8955 < len__5729__auto___8954)){
args8945.push((arguments[i__5730__auto___8955]));

var G__8956 = (i__5730__auto___8955 + (1));
i__5730__auto___8955 = G__8956;
continue;
} else {
}
break;
}

var G__8953 = args8945.length;
switch (G__8953) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args8945.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5748__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq8946){
var G__8947 = cljs.core.first.call(null,seq8946);
var seq8946__$1 = cljs.core.next.call(null,seq8946);
var G__8948 = cljs.core.first.call(null,seq8946__$1);
var seq8946__$2 = cljs.core.next.call(null,seq8946__$1);
var G__8949 = cljs.core.first.call(null,seq8946__$2);
var seq8946__$3 = cljs.core.next.call(null,seq8946__$2);
var G__8950 = cljs.core.first.call(null,seq8946__$3);
var seq8946__$4 = cljs.core.next.call(null,seq8946__$3);
var G__8951 = cljs.core.first.call(null,seq8946__$4);
var seq8946__$5 = cljs.core.next.call(null,seq8946__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__8947,G__8948,G__8949,G__8950,G__8951,seq8946__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__8683__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__8966_8972 = cljs.core.seq.call(null,m);
var chunk__8967_8973 = null;
var count__8968_8974 = (0);
var i__8969_8975 = (0);
while(true){
if((i__8969_8975 < count__8968_8974)){
var vec__8970_8976 = cljs.core._nth.call(null,chunk__8967_8973,i__8969_8975);
var k_8977 = cljs.core.nth.call(null,vec__8970_8976,(0),null);
var v_8978 = cljs.core.nth.call(null,vec__8970_8976,(1),null);
var m8965_8979 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m8965_8979,k_8977,f.call(null,v_8978)));

var G__8980 = seq__8966_8972;
var G__8981 = chunk__8967_8973;
var G__8982 = count__8968_8974;
var G__8983 = (i__8969_8975 + (1));
seq__8966_8972 = G__8980;
chunk__8967_8973 = G__8981;
count__8968_8974 = G__8982;
i__8969_8975 = G__8983;
continue;
} else {
var temp__4425__auto___8984 = cljs.core.seq.call(null,seq__8966_8972);
if(temp__4425__auto___8984){
var seq__8966_8985__$1 = temp__4425__auto___8984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8966_8985__$1)){
var c__5474__auto___8986 = cljs.core.chunk_first.call(null,seq__8966_8985__$1);
var G__8987 = cljs.core.chunk_rest.call(null,seq__8966_8985__$1);
var G__8988 = c__5474__auto___8986;
var G__8989 = cljs.core.count.call(null,c__5474__auto___8986);
var G__8990 = (0);
seq__8966_8972 = G__8987;
chunk__8967_8973 = G__8988;
count__8968_8974 = G__8989;
i__8969_8975 = G__8990;
continue;
} else {
var vec__8971_8991 = cljs.core.first.call(null,seq__8966_8985__$1);
var k_8992 = cljs.core.nth.call(null,vec__8971_8991,(0),null);
var v_8993 = cljs.core.nth.call(null,vec__8971_8991,(1),null);
var m8965_8994 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m8965_8994,k_8992,f.call(null,v_8993)));

var G__8995 = cljs.core.next.call(null,seq__8966_8985__$1);
var G__8996 = null;
var G__8997 = (0);
var G__8998 = (0);
seq__8966_8972 = G__8995;
chunk__8967_8973 = G__8996;
count__8968_8974 = G__8997;
i__8969_8975 = G__8998;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8683__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__8683__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__9007_9013 = cljs.core.seq.call(null,m);
var chunk__9008_9014 = null;
var count__9009_9015 = (0);
var i__9010_9016 = (0);
while(true){
if((i__9010_9016 < count__9009_9015)){
var vec__9011_9017 = cljs.core._nth.call(null,chunk__9008_9014,i__9010_9016);
var k_9018 = cljs.core.nth.call(null,vec__9011_9017,(0),null);
var v_9019 = cljs.core.nth.call(null,vec__9011_9017,(1),null);
var m9006_9020 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9006_9020,f.call(null,k_9018),v_9019));

var G__9021 = seq__9007_9013;
var G__9022 = chunk__9008_9014;
var G__9023 = count__9009_9015;
var G__9024 = (i__9010_9016 + (1));
seq__9007_9013 = G__9021;
chunk__9008_9014 = G__9022;
count__9009_9015 = G__9023;
i__9010_9016 = G__9024;
continue;
} else {
var temp__4425__auto___9025 = cljs.core.seq.call(null,seq__9007_9013);
if(temp__4425__auto___9025){
var seq__9007_9026__$1 = temp__4425__auto___9025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9007_9026__$1)){
var c__5474__auto___9027 = cljs.core.chunk_first.call(null,seq__9007_9026__$1);
var G__9028 = cljs.core.chunk_rest.call(null,seq__9007_9026__$1);
var G__9029 = c__5474__auto___9027;
var G__9030 = cljs.core.count.call(null,c__5474__auto___9027);
var G__9031 = (0);
seq__9007_9013 = G__9028;
chunk__9008_9014 = G__9029;
count__9009_9015 = G__9030;
i__9010_9016 = G__9031;
continue;
} else {
var vec__9012_9032 = cljs.core.first.call(null,seq__9007_9026__$1);
var k_9033 = cljs.core.nth.call(null,vec__9012_9032,(0),null);
var v_9034 = cljs.core.nth.call(null,vec__9012_9032,(1),null);
var m9006_9035 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9006_9035,f.call(null,k_9033),v_9034));

var G__9036 = cljs.core.next.call(null,seq__9007_9026__$1);
var G__9037 = null;
var G__9038 = (0);
var G__9039 = (0);
seq__9007_9013 = G__9036;
chunk__9008_9014 = G__9037;
count__9009_9015 = G__9038;
i__9010_9016 = G__9039;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8683__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__8683__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__9046_9050 = cljs.core.seq.call(null,ks);
var chunk__9047_9051 = null;
var count__9048_9052 = (0);
var i__9049_9053 = (0);
while(true){
if((i__9049_9053 < count__9048_9052)){
var k_9054 = cljs.core._nth.call(null,chunk__9047_9051,i__9049_9053);
var m9045_9055 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9045_9055,k_9054,f.call(null,k_9054)));

var G__9056 = seq__9046_9050;
var G__9057 = chunk__9047_9051;
var G__9058 = count__9048_9052;
var G__9059 = (i__9049_9053 + (1));
seq__9046_9050 = G__9056;
chunk__9047_9051 = G__9057;
count__9048_9052 = G__9058;
i__9049_9053 = G__9059;
continue;
} else {
var temp__4425__auto___9060 = cljs.core.seq.call(null,seq__9046_9050);
if(temp__4425__auto___9060){
var seq__9046_9061__$1 = temp__4425__auto___9060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9046_9061__$1)){
var c__5474__auto___9062 = cljs.core.chunk_first.call(null,seq__9046_9061__$1);
var G__9063 = cljs.core.chunk_rest.call(null,seq__9046_9061__$1);
var G__9064 = c__5474__auto___9062;
var G__9065 = cljs.core.count.call(null,c__5474__auto___9062);
var G__9066 = (0);
seq__9046_9050 = G__9063;
chunk__9047_9051 = G__9064;
count__9048_9052 = G__9065;
i__9049_9053 = G__9066;
continue;
} else {
var k_9067 = cljs.core.first.call(null,seq__9046_9061__$1);
var m9045_9068 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9045_9068,k_9067,f.call(null,k_9067)));

var G__9069 = cljs.core.next.call(null,seq__9046_9061__$1);
var G__9070 = null;
var G__9071 = (0);
var G__9072 = (0);
seq__9046_9050 = G__9069;
chunk__9047_9051 = G__9070;
count__9048_9052 = G__9071;
i__9049_9053 = G__9072;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8683__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__8683__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__9079_9083 = cljs.core.seq.call(null,vs);
var chunk__9080_9084 = null;
var count__9081_9085 = (0);
var i__9082_9086 = (0);
while(true){
if((i__9082_9086 < count__9081_9085)){
var v_9087 = cljs.core._nth.call(null,chunk__9080_9084,i__9082_9086);
var m9078_9088 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9078_9088,f.call(null,v_9087),v_9087));

var G__9089 = seq__9079_9083;
var G__9090 = chunk__9080_9084;
var G__9091 = count__9081_9085;
var G__9092 = (i__9082_9086 + (1));
seq__9079_9083 = G__9089;
chunk__9080_9084 = G__9090;
count__9081_9085 = G__9091;
i__9082_9086 = G__9092;
continue;
} else {
var temp__4425__auto___9093 = cljs.core.seq.call(null,seq__9079_9083);
if(temp__4425__auto___9093){
var seq__9079_9094__$1 = temp__4425__auto___9093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9079_9094__$1)){
var c__5474__auto___9095 = cljs.core.chunk_first.call(null,seq__9079_9094__$1);
var G__9096 = cljs.core.chunk_rest.call(null,seq__9079_9094__$1);
var G__9097 = c__5474__auto___9095;
var G__9098 = cljs.core.count.call(null,c__5474__auto___9095);
var G__9099 = (0);
seq__9079_9083 = G__9096;
chunk__9080_9084 = G__9097;
count__9081_9085 = G__9098;
i__9082_9086 = G__9099;
continue;
} else {
var v_9100 = cljs.core.first.call(null,seq__9079_9094__$1);
var m9078_9101 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9078_9101,f.call(null,v_9100),v_9100));

var G__9102 = cljs.core.next.call(null,seq__9079_9094__$1);
var G__9103 = null;
var G__9104 = (0);
var G__9105 = (0);
seq__9079_9083 = G__9102;
chunk__9080_9084 = G__9103;
count__9081_9085 = G__9104;
i__9082_9086 = G__9105;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8683__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__9106){
var vec__9108 = p__9106;
var k = cljs.core.nth.call(null,vec__9108,(0),null);
var ks = cljs.core.nthnext.call(null,vec__9108,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__4659__auto__ = ks;
if(cljs.core.truth_(and__4659__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__8683__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__9117_9123 = cljs.core.seq.call(null,x);
var chunk__9118_9124 = null;
var count__9119_9125 = (0);
var i__9120_9126 = (0);
while(true){
if((i__9120_9126 < count__9119_9125)){
var vec__9121_9127 = cljs.core._nth.call(null,chunk__9118_9124,i__9120_9126);
var k_9128 = cljs.core.nth.call(null,vec__9121_9127,(0),null);
var v_9129 = cljs.core.nth.call(null,vec__9121_9127,(1),null);
var m9116_9130 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9116_9130,((typeof k_9128 === 'string')?cljs.core.keyword.call(null,k_9128):k_9128),plumbing$core$keywordize_map.call(null,v_9129)));

var G__9131 = seq__9117_9123;
var G__9132 = chunk__9118_9124;
var G__9133 = count__9119_9125;
var G__9134 = (i__9120_9126 + (1));
seq__9117_9123 = G__9131;
chunk__9118_9124 = G__9132;
count__9119_9125 = G__9133;
i__9120_9126 = G__9134;
continue;
} else {
var temp__4425__auto___9135 = cljs.core.seq.call(null,seq__9117_9123);
if(temp__4425__auto___9135){
var seq__9117_9136__$1 = temp__4425__auto___9135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9117_9136__$1)){
var c__5474__auto___9137 = cljs.core.chunk_first.call(null,seq__9117_9136__$1);
var G__9138 = cljs.core.chunk_rest.call(null,seq__9117_9136__$1);
var G__9139 = c__5474__auto___9137;
var G__9140 = cljs.core.count.call(null,c__5474__auto___9137);
var G__9141 = (0);
seq__9117_9123 = G__9138;
chunk__9118_9124 = G__9139;
count__9119_9125 = G__9140;
i__9120_9126 = G__9141;
continue;
} else {
var vec__9122_9142 = cljs.core.first.call(null,seq__9117_9136__$1);
var k_9143 = cljs.core.nth.call(null,vec__9122_9142,(0),null);
var v_9144 = cljs.core.nth.call(null,vec__9122_9142,(1),null);
var m9116_9145 = cljs.core.deref.call(null,m_atom__8683__auto__);
cljs.core.reset_BANG_.call(null,m_atom__8683__auto__,cljs.core.assoc_BANG_.call(null,m9116_9145,((typeof k_9143 === 'string')?cljs.core.keyword.call(null,k_9143):k_9143),plumbing$core$keywordize_map.call(null,v_9144)));

var G__9146 = cljs.core.next.call(null,seq__9117_9136__$1);
var G__9147 = null;
var G__9148 = (0);
var G__9149 = (0);
seq__9117_9123 = G__9146;
chunk__9118_9124 = G__9147;
count__9119_9125 = G__9148;
i__9120_9126 = G__9149;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8683__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__8759__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__8759__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__9150 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__9151 = cljs.core.next.call(null,ks);
m = G__9150;
ks = G__9151;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__5736__auto__ = [];
var len__5729__auto___9162 = arguments.length;
var i__5730__auto___9163 = (0);
while(true){
if((i__5730__auto___9163 < len__5729__auto___9162)){
args__5736__auto__.push((arguments[i__5730__auto___9163]));

var G__9164 = (i__5730__auto___9163 + (1));
i__5730__auto___9163 = G__9164;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4671__auto__ = m;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5443__auto__ = (function plumbing$core$iter__9154(s__9155){
return (new cljs.core.LazySeq(null,(function (){
var s__9155__$1 = s__9155;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9155__$1);
if(temp__4425__auto__){
var s__9155__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9155__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__9155__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__9157 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__9156 = (0);
while(true){
if((i__9156 < size__5442__auto__)){
var vec__9160 = cljs.core._nth.call(null,c__5441__auto__,i__9156);
var k = cljs.core.nth.call(null,vec__9160,(0),null);
var v = cljs.core.nth.call(null,vec__9160,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__9157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__9165 = (i__9156 + (1));
i__9156 = G__9165;
continue;
} else {
var G__9166 = (i__9156 + (1));
i__9156 = G__9166;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9157),plumbing$core$iter__9154.call(null,cljs.core.chunk_rest.call(null,s__9155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9157),null);
}
} else {
var vec__9161 = cljs.core.first.call(null,s__9155__$2);
var k = cljs.core.nth.call(null,vec__9161,(0),null);
var v = cljs.core.nth.call(null,vec__9161,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__9154.call(null,cljs.core.rest.call(null,s__9155__$2)));
} else {
var G__9167 = cljs.core.rest.call(null,s__9155__$2);
s__9155__$1 = G__9167;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq9152){
var G__9153 = cljs.core.first.call(null,seq9152);
var seq9152__$1 = cljs.core.next.call(null,seq9152);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__9153,seq9152__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__5736__auto__ = [];
var len__5729__auto___9172 = arguments.length;
var i__5730__auto___9173 = (0);
while(true){
if((i__5730__auto___9173 < len__5729__auto___9172)){
args__5736__auto__.push((arguments[i__5730__auto___9173]));

var G__9174 = (i__5730__auto___9173 + (1));
i__5730__auto___9173 = G__9174;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq9168){
var G__9169 = cljs.core.first.call(null,seq9168);
var seq9168__$1 = cljs.core.next.call(null,seq9168);
var G__9170 = cljs.core.first.call(null,seq9168__$1);
var seq9168__$2 = cljs.core.next.call(null,seq9168__$1);
var G__9171 = cljs.core.first.call(null,seq9168__$2);
var seq9168__$3 = cljs.core.next.call(null,seq9168__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__9169,G__9170,G__9171,seq9168__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args9175 = [];
var len__5729__auto___9178 = arguments.length;
var i__5730__auto___9179 = (0);
while(true){
if((i__5730__auto___9179 < len__5729__auto___9178)){
args9175.push((arguments[i__5730__auto___9179]));

var G__9180 = (i__5730__auto___9179 + (1));
i__5730__auto___9179 = G__9180;
continue;
} else {
}
break;
}

var G__9177 = args9175.length;
switch (G__9177) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9175.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__5443__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__9186(s__9187){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__9187__$1 = s__9187;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9187__$1);
if(temp__4425__auto__){
var s__9187__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9187__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__9187__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__9189 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__9188 = (0);
while(true){
if((i__9188 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__9188);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__9189,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__9190 = (i__9188 + (1));
i__9188 = G__9190;
continue;
} else {
var G__9191 = (i__9188 + (1));
i__9188 = G__9191;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9189),plumbing$core$distinct_by_$_iter__9186.call(null,cljs.core.chunk_rest.call(null,s__9187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9189),null);
}
} else {
var x = cljs.core.first.call(null,s__9187__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__9186.call(null,cljs.core.rest.call(null,s__9187__$2)));
} else {
var G__9192 = cljs.core.rest.call(null,s__9187__$2);
s__9187__$1 = G__9192;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__5443__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__5736__auto__ = [];
var len__5729__auto___9194 = arguments.length;
var i__5730__auto___9195 = (0);
while(true){
if((i__5730__auto___9195 < len__5729__auto___9194)){
args__5736__auto__.push((arguments[i__5730__auto___9195]));

var G__9196 = (i__5730__auto___9195 + (1));
i__5730__auto___9195 = G__9196;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq9193){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9193));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args9197 = [];
var len__5729__auto___9203 = arguments.length;
var i__5730__auto___9204 = (0);
while(true){
if((i__5730__auto___9204 < len__5729__auto___9203)){
args9197.push((arguments[i__5730__auto___9204]));

var G__9205 = (i__5730__auto___9204 + (1));
i__5730__auto___9204 = G__9205;
continue;
} else {
}
break;
}

var G__9202 = args9197.length;
switch (G__9202) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args9197.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5748__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__9207 = plumbing.core.conj_when.call(null,coll,x);
var G__9208 = cljs.core.first.call(null,xs);
var G__9209 = cljs.core.next.call(null,xs);
coll = G__9207;
x = G__9208;
xs = G__9209;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq9198){
var G__9199 = cljs.core.first.call(null,seq9198);
var seq9198__$1 = cljs.core.next.call(null,seq9198);
var G__9200 = cljs.core.first.call(null,seq9198__$1);
var seq9198__$2 = cljs.core.next.call(null,seq9198__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__9199,G__9200,seq9198__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args9211 = [];
var len__5729__auto___9217 = arguments.length;
var i__5730__auto___9218 = (0);
while(true){
if((i__5730__auto___9218 < len__5729__auto___9217)){
args9211.push((arguments[i__5730__auto___9218]));

var G__9219 = (i__5730__auto___9218 + (1));
i__5730__auto___9218 = G__9219;
continue;
} else {
}
break;
}

var G__9216 = args9211.length;
switch (G__9216) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args9211.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5748__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__9210_SHARP_){
return cljs.core.apply.call(null,f,p1__9210_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq9212){
var G__9213 = cljs.core.first.call(null,seq9212);
var seq9212__$1 = cljs.core.next.call(null,seq9212);
var G__9214 = cljs.core.first.call(null,seq9212__$1);
var seq9212__$2 = cljs.core.next.call(null,seq9212__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9213,G__9214,seq9212__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args9221 = [];
var len__5729__auto___9227 = arguments.length;
var i__5730__auto___9228 = (0);
while(true){
if((i__5730__auto___9228 < len__5729__auto___9227)){
args9221.push((arguments[i__5730__auto___9228]));

var G__9229 = (i__5730__auto___9228 + (1));
i__5730__auto___9228 = G__9229;
continue;
} else {
}
break;
}

var G__9226 = args9221.length;
switch (G__9226) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args9221.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5748__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq9222){
var G__9223 = cljs.core.first.call(null,seq9222);
var seq9222__$1 = cljs.core.next.call(null,seq9222);
var G__9224 = cljs.core.first.call(null,seq9222__$1);
var seq9222__$2 = cljs.core.next.call(null,seq9222__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__9223,G__9224,seq9222__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map