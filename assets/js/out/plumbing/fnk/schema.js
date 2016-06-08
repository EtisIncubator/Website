// Compiled by ClojureScript 1.7.170 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6803__6804__auto__){
if(!((p1__6803__6804__auto__ == null))){
if((false) || (p1__6803__6804__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__6803__6804__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__6803__6804__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__6803__6804__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__8230_SHARP_){
return (cljs.core.val.call(null,p1__8230_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__8232 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__8232,(0),null);
var v = cljs.core.nth.call(null,vec__8232,(1),null);
var p = vec__8232;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___8238 = schema.utils.use_fn_validation;
var output_schema8233_8239 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema8234_8240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker8235_8241 = schema.core.checker.call(null,input_schema8234_8240);
var output_checker8236_8242 = schema.core.checker.call(null,output_schema8233_8239);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___8238,output_schema8233_8239,input_schema8234_8240,input_checker8235_8241,output_checker8236_8242){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__8237){
var validate__6065__auto__ = ufv___8238.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8243 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8237], null);
var temp__4425__auto___8244 = input_checker8235_8241.call(null,args__6066__auto___8243);
if(cljs.core.truth_(temp__4425__auto___8244)){
var error__6067__auto___8245 = temp__4425__auto___8244;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__6067__auto___8245)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8234_8240,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8243,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8245], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var k = G__8237;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8246 = output_checker8236_8242.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8246)){
var error__6067__auto___8247 = temp__4425__auto___8246;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__6067__auto___8247)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8233_8239,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8247], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8238,output_schema8233_8239,input_schema8234_8240,input_checker8235_8241,output_checker8236_8242))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema8233_8239,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8234_8240], null)));
var ufv___8253 = schema.utils.use_fn_validation;
var output_schema8248_8254 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema8249_8255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker8250_8256 = schema.core.checker.call(null,input_schema8249_8255);
var output_checker8251_8257 = schema.core.checker.call(null,output_schema8248_8254);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___8253,output_schema8248_8254,input_schema8249_8255,input_checker8250_8256,output_checker8251_8257){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__8252){
var validate__6065__auto__ = ufv___8253.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8252], null);
var temp__4425__auto___8259 = input_checker8250_8256.call(null,args__6066__auto___8258);
if(cljs.core.truth_(temp__4425__auto___8259)){
var error__6067__auto___8260 = temp__4425__auto___8259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__6067__auto___8260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8249_8255,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8258,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8260], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var s = G__8252;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8261 = output_checker8251_8257.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8261)){
var error__6067__auto___8262 = temp__4425__auto___8261;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__6067__auto___8262)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8248_8254,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8262], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8253,output_schema8248_8254,input_schema8249_8255,input_checker8250_8256,output_checker8251_8257))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema8248_8254,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8249_8255], null)));
var ufv___8268 = schema.utils.use_fn_validation;
var output_schema8263_8269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema8264_8270 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker8265_8271 = schema.core.checker.call(null,input_schema8264_8270);
var output_checker8266_8272 = schema.core.checker.call(null,output_schema8263_8269);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___8268,output_schema8263_8269,input_schema8264_8270,input_checker8265_8271,output_checker8266_8272){
return (function plumbing$fnk$schema$split_schema_keys(G__8267){
var validate__6065__auto__ = ufv___8268.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8273 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8267], null);
var temp__4425__auto___8274 = input_checker8265_8271.call(null,args__6066__auto___8273);
if(cljs.core.truth_(temp__4425__auto___8274)){
var error__6067__auto___8275 = temp__4425__auto___8274;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__6067__auto___8275)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8264_8270,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8273,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8275], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var s = G__8267;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8276 = output_checker8266_8272.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8276)){
var error__6067__auto___8277 = temp__4425__auto___8276;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__6067__auto___8277)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8263_8269,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8277], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8268,output_schema8263_8269,input_schema8264_8270,input_checker8265_8271,output_checker8266_8272))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema8263_8269,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8264_8270], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__5736__auto__ = [];
var len__5729__auto___8285 = arguments.length;
var i__5730__auto___8286 = (0);
while(true){
if((i__5730__auto___8286 < len__5729__auto___8285)){
args__5736__auto__.push((arguments[i__5730__auto___8286]));

var G__8287 = (i__5730__auto___8286 + (1));
i__5730__auto___8286 = G__8287;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((3) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5737__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__8282){
var vec__8283 = p__8282;
var k = cljs.core.nth.call(null,vec__8283,(0),null);
var v = cljs.core.nth.call(null,vec__8283,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__8284 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__8284,(0),null);
var ov = cljs.core.nth.call(null,vec__8284,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq8278){
var G__8279 = cljs.core.first.call(null,seq8278);
var seq8278__$1 = cljs.core.next.call(null,seq8278);
var G__8280 = cljs.core.first.call(null,seq8278__$1);
var seq8278__$2 = cljs.core.next.call(null,seq8278__$1);
var G__8281 = cljs.core.first.call(null,seq8278__$2);
var seq8278__$3 = cljs.core.next.call(null,seq8278__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__8279,G__8280,G__8281,seq8278__$3);
});
var ufv___8295 = schema.utils.use_fn_validation;
var output_schema8289_8296 = plumbing.fnk.schema.InputSchema;
var input_schema8290_8297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker8291_8298 = schema.core.checker.call(null,input_schema8290_8297);
var output_checker8292_8299 = schema.core.checker.call(null,output_schema8289_8296);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299){
return (function plumbing$fnk$schema$union_input_schemata(G__8293,G__8294){
var validate__6065__auto__ = ufv___8295.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8293,G__8294], null);
var temp__4425__auto___8301 = input_checker8291_8298.call(null,args__6066__auto___8300);
if(cljs.core.truth_(temp__4425__auto___8301)){
var error__6067__auto___8302 = temp__4425__auto___8301;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__6067__auto___8302)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8290_8297,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8300,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8302], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var i1 = G__8293;
var i2 = G__8294;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6065__auto__,ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299){
return (function (p1__8288_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__8288_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__8288_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6065__auto__,ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299))
,((function (validate__6065__auto__,ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__6065__auto__,ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299))
,((function (validate__6065__auto__,ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__4659__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__4659__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__4659__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6065__auto__,ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8303 = output_checker8292_8299.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8303)){
var error__6067__auto___8304 = temp__4425__auto___8303;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__6067__auto___8304)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8289_8296,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8304], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8295,output_schema8289_8296,input_schema8290_8297,input_checker8291_8298,output_checker8292_8299))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema8289_8296,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8290_8297], null)));
var ufv___8310 = schema.utils.use_fn_validation;
var output_schema8305_8311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema8306_8312 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker8307_8313 = schema.core.checker.call(null,input_schema8306_8312);
var output_checker8308_8314 = schema.core.checker.call(null,output_schema8305_8311);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___8310,output_schema8305_8311,input_schema8306_8312,input_checker8307_8313,output_checker8308_8314){
return (function plumbing$fnk$schema$required_toplevel_keys(G__8309){
var validate__6065__auto__ = ufv___8310.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8309], null);
var temp__4425__auto___8316 = input_checker8307_8313.call(null,args__6066__auto___8315);
if(cljs.core.truth_(temp__4425__auto___8316)){
var error__6067__auto___8317 = temp__4425__auto___8316;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__6067__auto___8317)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8306_8312,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8315,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8317], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var input_schema = G__8309;
while(true){
return cljs.core.keep.call(null,((function (validate__6065__auto__,ufv___8310,output_schema8305_8311,input_schema8306_8312,input_checker8307_8313,output_checker8308_8314){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__6065__auto__,ufv___8310,output_schema8305_8311,input_schema8306_8312,input_checker8307_8313,output_checker8308_8314))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8318 = output_checker8308_8314.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8318)){
var error__6067__auto___8319 = temp__4425__auto___8318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__6067__auto___8319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8305_8311,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8319], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8310,output_schema8305_8311,input_schema8306_8312,input_checker8307_8313,output_checker8308_8314))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema8305_8311,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8306_8312], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__8328(s__8329){
return (new cljs.core.LazySeq(null,(function (){
var s__8329__$1 = s__8329;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8329__$1);
if(temp__4425__auto__){
var s__8329__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8329__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__8329__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__8331 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__8330 = (0);
while(true){
if((i__8330 < size__5442__auto__)){
var vec__8334 = cljs.core._nth.call(null,c__5441__auto__,i__8330);
var k = cljs.core.nth.call(null,vec__8334,(0),null);
var v = cljs.core.nth.call(null,vec__8334,(1),null);
cljs.core.chunk_append.call(null,b__8331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__8336 = (i__8330 + (1));
i__8330 = G__8336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8331),plumbing$fnk$schema$guess_expr_output_schema_$_iter__8328.call(null,cljs.core.chunk_rest.call(null,s__8329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8331),null);
}
} else {
var vec__8335 = cljs.core.first.call(null,s__8329__$2);
var k = cljs.core.nth.call(null,vec__8335,(0),null);
var v = cljs.core.nth.call(null,vec__8335,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__8328.call(null,cljs.core.rest.call(null,s__8329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__8345(s__8346){
return (new cljs.core.LazySeq(null,(function (){
var s__8346__$1 = s__8346;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8346__$1);
if(temp__4425__auto__){
var s__8346__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8346__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__8346__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__8348 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__8347 = (0);
while(true){
if((i__8347 < size__5442__auto__)){
var vec__8351 = cljs.core._nth.call(null,c__5441__auto__,i__8347);
var k = cljs.core.nth.call(null,vec__8351,(0),null);
var v = cljs.core.nth.call(null,vec__8351,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4671__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__8348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__8353 = (i__8347 + (1));
i__8347 = G__8353;
continue;
} else {
var G__8354 = (i__8347 + (1));
i__8347 = G__8354;
continue;
}
} else {
var G__8355 = (i__8347 + (1));
i__8347 = G__8355;
continue;
}
} else {
var G__8356 = (i__8347 + (1));
i__8347 = G__8356;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8348),plumbing$fnk$schema$schema_diff_$_iter__8345.call(null,cljs.core.chunk_rest.call(null,s__8346__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8348),null);
}
} else {
var vec__8352 = cljs.core.first.call(null,s__8346__$2);
var k = cljs.core.nth.call(null,vec__8352,(0),null);
var v = cljs.core.nth.call(null,vec__8352,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4671__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__8345.call(null,cljs.core.rest.call(null,s__8346__$2)));
} else {
var G__8357 = cljs.core.rest.call(null,s__8346__$2);
s__8346__$1 = G__8357;
continue;
}
} else {
var G__8358 = cljs.core.rest.call(null,s__8346__$2);
s__8346__$1 = G__8358;
continue;
}
} else {
var G__8359 = cljs.core.rest.call(null,s__8346__$2);
s__8346__$1 = G__8359;
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
return iter__5443__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___8382 = schema.utils.use_fn_validation;
var output_schema8360_8383 = schema.core.Any;
var input_schema8361_8384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker8362_8385 = schema.core.checker.call(null,input_schema8361_8384);
var output_checker8363_8386 = schema.core.checker.call(null,output_schema8360_8383);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___8382,output_schema8360_8383,input_schema8361_8384,input_checker8362_8385,output_checker8363_8386){
return (function plumbing$fnk$schema$compose_schemata(G__8364,G__8365){
var validate__6065__auto__ = true;
if(validate__6065__auto__){
var args__6066__auto___8387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8364,G__8365], null);
var temp__4425__auto___8388 = input_checker8362_8385.call(null,args__6066__auto___8387);
if(cljs.core.truth_(temp__4425__auto___8388)){
var error__6067__auto___8389 = temp__4425__auto___8388;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__6067__auto___8389)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8361_8384,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8387,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8389], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var G__8376 = G__8364;
var vec__8378 = G__8376;
var i2 = cljs.core.nth.call(null,vec__8378,(0),null);
var o2 = cljs.core.nth.call(null,vec__8378,(1),null);
var G__8377 = G__8365;
var vec__8379 = G__8377;
var i1 = cljs.core.nth.call(null,vec__8379,(0),null);
var o1 = cljs.core.nth.call(null,vec__8379,(1),null);
var G__8376__$1 = G__8376;
var G__8377__$1 = G__8377;
while(true){
var vec__8380 = G__8376__$1;
var i2__$1 = cljs.core.nth.call(null,vec__8380,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__8380,(1),null);
var vec__8381 = G__8377__$1;
var i1__$1 = cljs.core.nth.call(null,vec__8381,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__8381,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__6065__auto__){
var temp__4425__auto___8390 = output_checker8363_8386.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8390)){
var error__6067__auto___8391 = temp__4425__auto___8390;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__6067__auto___8391)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8360_8383,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8391], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8382,output_schema8360_8383,input_schema8361_8384,input_checker8362_8385,output_checker8363_8386))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema8360_8383,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8361_8384], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___8470 = schema.utils.use_fn_validation;
var output_schema8392_8471 = schema.core.Any;
var input_schema8393_8472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker8394_8473 = schema.core.checker.call(null,input_schema8393_8472);
var output_checker8395_8474 = schema.core.checker.call(null,output_schema8392_8471);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function plumbing$fnk$schema$split_schema(G__8396,G__8397){
var validate__6065__auto__ = ufv___8470.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8396,G__8397], null);
var temp__4425__auto___8476 = input_checker8394_8473.call(null,args__6066__auto___8475);
if(cljs.core.truth_(temp__4425__auto___8476)){
var error__6067__auto___8477 = temp__4425__auto___8476;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__6067__auto___8477)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8393_8472,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8475,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8477], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var s = G__8396;
var ks = G__8397;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__5443__auto__ = ((function (ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function plumbing$fnk$schema$split_schema_$_iter__8434(s__8435){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function (){
var s__8435__$1 = s__8435;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8435__$1);
if(temp__4425__auto__){
var s__8435__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8435__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__8435__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__8437 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__8436 = (0);
while(true){
if((i__8436 < size__5442__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__5441__auto__,i__8436);
cljs.core.chunk_append.call(null,b__8437,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = ((function (i__8436,in_QMARK_,c__5441__auto__,size__5442__auto__,b__8437,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function plumbing$fnk$schema$split_schema_$_iter__8434_$_iter__8454(s__8455){
return (new cljs.core.LazySeq(null,((function (i__8436,in_QMARK_,c__5441__auto__,size__5442__auto__,b__8437,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function (){
var s__8455__$1 = s__8455;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8455__$1);
if(temp__4425__auto____$1){
var s__8455__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8455__$2)){
var c__5441__auto____$1 = cljs.core.chunk_first.call(null,s__8455__$2);
var size__5442__auto____$1 = cljs.core.count.call(null,c__5441__auto____$1);
var b__8457 = cljs.core.chunk_buffer.call(null,size__5442__auto____$1);
if((function (){var i__8456 = (0);
while(true){
if((i__8456 < size__5442__auto____$1)){
var vec__8460 = cljs.core._nth.call(null,c__5441__auto____$1,i__8456);
var k = cljs.core.nth.call(null,vec__8460,(0),null);
var v = cljs.core.nth.call(null,vec__8460,(1),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4659__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__8478 = (i__8456 + (1));
i__8456 = G__8478;
continue;
} else {
var G__8479 = (i__8456 + (1));
i__8456 = G__8479;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8457),plumbing$fnk$schema$split_schema_$_iter__8434_$_iter__8454.call(null,cljs.core.chunk_rest.call(null,s__8455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8457),null);
}
} else {
var vec__8461 = cljs.core.first.call(null,s__8455__$2);
var k = cljs.core.nth.call(null,vec__8461,(0),null);
var v = cljs.core.nth.call(null,vec__8461,(1),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4659__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__8434_$_iter__8454.call(null,cljs.core.rest.call(null,s__8455__$2)));
} else {
var G__8480 = cljs.core.rest.call(null,s__8455__$2);
s__8455__$1 = G__8480;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__8436,in_QMARK_,c__5441__auto__,size__5442__auto__,b__8437,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
,null,null));
});})(i__8436,in_QMARK_,c__5441__auto__,size__5442__auto__,b__8437,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
;
return iter__5443__auto__.call(null,s);
})()));

var G__8481 = (i__8436 + (1));
i__8436 = G__8481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8437),plumbing$fnk$schema$split_schema_$_iter__8434.call(null,cljs.core.chunk_rest.call(null,s__8435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8437),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__8435__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5443__auto__ = ((function (in_QMARK_,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function plumbing$fnk$schema$split_schema_$_iter__8434_$_iter__8462(s__8463){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474){
return (function (){
var s__8463__$1 = s__8463;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8463__$1);
if(temp__4425__auto____$1){
var s__8463__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8463__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__8463__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__8465 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__8464 = (0);
while(true){
if((i__8464 < size__5442__auto__)){
var vec__8468 = cljs.core._nth.call(null,c__5441__auto__,i__8464);
var k = cljs.core.nth.call(null,vec__8468,(0),null);
var v = cljs.core.nth.call(null,vec__8468,(1),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4659__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__8465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__8482 = (i__8464 + (1));
i__8464 = G__8482;
continue;
} else {
var G__8483 = (i__8464 + (1));
i__8464 = G__8483;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8465),plumbing$fnk$schema$split_schema_$_iter__8434_$_iter__8462.call(null,cljs.core.chunk_rest.call(null,s__8463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8465),null);
}
} else {
var vec__8469 = cljs.core.first.call(null,s__8463__$2);
var k = cljs.core.nth.call(null,vec__8469,(0),null);
var v = cljs.core.nth.call(null,vec__8469,(1),null);
if(cljs.core.truth_((function (){var and__4659__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__4659__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__8434_$_iter__8462.call(null,cljs.core.rest.call(null,s__8463__$2)));
} else {
var G__8484 = cljs.core.rest.call(null,s__8463__$2);
s__8463__$1 = G__8484;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
,null,null));
});})(in_QMARK_,s__8435__$2,temp__4425__auto__,ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
;
return iter__5443__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__8434.call(null,cljs.core.rest.call(null,s__8435__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
,null,null));
});})(ks__$1,validate__6065__auto__,ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
;
return iter__5443__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8485 = output_checker8395_8474.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8485)){
var error__6067__auto___8486 = temp__4425__auto___8485;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__6067__auto___8486)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8392_8471,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8486], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8470,output_schema8392_8471,input_schema8393_8472,input_checker8394_8473,output_checker8395_8474))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema8392_8471,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8393_8472], null)));
var ufv___8517 = schema.utils.use_fn_validation;
var output_schema8487_8518 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema8488_8519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker8489_8520 = schema.core.checker.call(null,input_schema8488_8519);
var output_checker8490_8521 = schema.core.checker.call(null,output_schema8487_8518);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___8517,output_schema8487_8518,input_schema8488_8519,input_checker8489_8520,output_checker8490_8521){
return (function plumbing$fnk$schema$sequence_schemata(G__8491,G__8492){
var validate__6065__auto__ = ufv___8517.get_cell();
if(cljs.core.truth_(validate__6065__auto__)){
var args__6066__auto___8522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__8491,G__8492], null);
var temp__4425__auto___8523 = input_checker8489_8520.call(null,args__6066__auto___8522);
if(cljs.core.truth_(temp__4425__auto___8523)){
var error__6067__auto___8524 = temp__4425__auto___8523;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__6067__auto___8524)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8488_8519,new cljs.core.Keyword(null,"value","value",305978217),args__6066__auto___8522,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8524], null));
} else {
}
} else {
}

var o__6068__auto__ = (function (){var G__8508 = G__8491;
var vec__8510 = G__8508;
var i1 = cljs.core.nth.call(null,vec__8510,(0),null);
var o1 = cljs.core.nth.call(null,vec__8510,(1),null);
var G__8509 = G__8492;
var vec__8511 = G__8509;
var k = cljs.core.nth.call(null,vec__8511,(0),null);
var vec__8512 = cljs.core.nth.call(null,vec__8511,(1),null);
var i2 = cljs.core.nth.call(null,vec__8512,(0),null);
var o2 = cljs.core.nth.call(null,vec__8512,(1),null);
var G__8508__$1 = G__8508;
var G__8509__$1 = G__8509;
while(true){
var vec__8513 = G__8508__$1;
var i1__$1 = cljs.core.nth.call(null,vec__8513,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__8513,(1),null);
var vec__8514 = G__8509__$1;
var k__$1 = cljs.core.nth.call(null,vec__8514,(0),null);
var vec__8515 = cljs.core.nth.call(null,vec__8514,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__8515,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__8515,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__8516 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__8516,(0),null);
var unused = cljs.core.nth.call(null,vec__8516,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__6065__auto__)){
var temp__4425__auto___8525 = output_checker8490_8521.call(null,o__6068__auto__);
if(cljs.core.truth_(temp__4425__auto___8525)){
var error__6067__auto___8526 = temp__4425__auto___8525;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__6067__auto___8526)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8487_8518,new cljs.core.Keyword(null,"value","value",305978217),o__6068__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6067__auto___8526], null));
} else {
}
} else {
}

return o__6068__auto__;
});})(ufv___8517,output_schema8487_8518,input_schema8488_8519,input_checker8489_8520,output_checker8490_8521))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema8487_8518,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8488_8519], null)));

//# sourceMappingURL=schema.js.map