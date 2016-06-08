// Compiled by ClojureScript 1.7.170 {}
goog.provide('index.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('om_tools.core');

var ufv___8877 = schema.utils.use_fn_validation;
var output_schema8864_8878 = schema.core.Any;
var input_schema8865_8879 = cljs.core.PersistentVector.EMPTY;
var input_checker8866_8880 = schema.core.checker.call(null,input_schema8865_8879);
var output_checker8867_8881 = schema.core.checker.call(null,output_schema8864_8878);
/**
 * Inputs: []
 */
index.core.video = ((function (ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function index$core$video(){
var validate__5978__auto__ = ufv___8877.get_cell();
if(cljs.core.truth_(validate__5978__auto__)){
var args__5979__auto___8882 = cljs.core.PersistentVector.EMPTY;
var temp__4425__auto___8883 = input_checker8866_8880.call(null,args__5979__auto___8882);
if(cljs.core.truth_(temp__4425__auto___8883)){
var error__5980__auto___8884 = temp__4425__auto___8883;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__5980__auto___8884)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema8865_8879,new cljs.core.Keyword(null,"value","value",305978217),args__5979__auto___8882,new cljs.core.Keyword(null,"error","error",-978969032),error__5980__auto___8884], null));
} else {
}
} else {
}

var o__5981__auto__ = (function (){while(true){
if(typeof index.core.t_index$core8871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
index.core.t_index$core8871 = (function (ufv__,output_schema8864,input_schema8865,input_checker8866,output_checker8867,video,validate__5978__auto__,meta8872){
this.ufv__ = ufv__;
this.output_schema8864 = output_schema8864;
this.input_schema8865 = input_schema8865;
this.input_checker8866 = input_checker8866;
this.output_checker8867 = output_checker8867;
this.video = video;
this.validate__5978__auto__ = validate__5978__auto__;
this.meta8872 = meta8872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
index.core.t_index$core8871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function (_8873,meta8872__$1){
var self__ = this;
var _8873__$1 = this;
return (new index.core.t_index$core8871(self__.ufv__,self__.output_schema8864,self__.input_schema8865,self__.input_checker8866,self__.output_checker8867,self__.video,self__.validate__5978__auto__,meta8872__$1));
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

index.core.t_index$core8871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function (_8873){
var self__ = this;
var _8873__$1 = this;
return self__.meta8872;
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

index.core.t_index$core8871.prototype.om$core$IDisplayName$ = true;

index.core.t_index$core8871.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function (_){
var self__ = this;
var ___$1 = this;
return "video";
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

index.core.t_index$core8871.prototype.om$core$IRender$ = true;

index.core.t_index$core8871.prototype.om$core$IRender$render$arity$1 = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"front"], null),React.DOM.video(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),"true"], null),React.DOM.source(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"public/logo.mp4",new cljs.core.Keyword(null,"type","type",1174270348),"video/mp4"], null))));
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

index.core.t_index$core8871.getBasis = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema8864","output-schema8864",1174436645,null),new cljs.core.Symbol(null,"input-schema8865","input-schema8865",1007679955,null),new cljs.core.Symbol(null,"input-checker8866","input-checker8866",424646175,null),new cljs.core.Symbol(null,"output-checker8867","output-checker8867",305116165,null),cljs.core.with_meta(new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema8864","output-schema8864",1174436645,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema8865","input-schema8865",1007679955,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: []",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"validate__5978__auto__","validate__5978__auto__",1206526026,null),new cljs.core.Symbol(null,"meta8872","meta8872",810294455,null)], null);
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

index.core.t_index$core8871.cljs$lang$type = true;

index.core.t_index$core8871.cljs$lang$ctorStr = "index.core/t_index$core8871";

index.core.t_index$core8871.cljs$lang$ctorPrWriter = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"index.core/t_index$core8871");
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

index.core.__GT_t_index$core8871 = ((function (validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881){
return (function index$core$video_$___GT_t_index$core8871(ufv____$1,output_schema8864__$1,input_schema8865__$1,input_checker8866__$1,output_checker8867__$1,video__$1,validate__5978__auto____$1,meta8872){
return (new index.core.t_index$core8871(ufv____$1,output_schema8864__$1,input_schema8865__$1,input_checker8866__$1,output_checker8867__$1,video__$1,validate__5978__auto____$1,meta8872));
});})(validate__5978__auto__,ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

}

return (new index.core.t_index$core8871(ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881,index$core$video,validate__5978__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__5978__auto__)){
var temp__4425__auto___8885 = output_checker8867_8881.call(null,o__5981__auto__);
if(cljs.core.truth_(temp__4425__auto___8885)){
var error__5980__auto___8886 = temp__4425__auto___8885;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__5980__auto___8886)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema8864_8878,new cljs.core.Keyword(null,"value","value",305978217),o__5981__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5980__auto___8886], null));
} else {
}
} else {
}

return o__5981__auto__;
});})(ufv___8877,output_schema8864_8878,input_schema8865_8879,input_checker8866_8880,output_checker8867_8881))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,index.core.video),schema.core.make_fn_schema.call(null,output_schema8864_8878,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema8865_8879], null)));

index.core.__GT_video = (function index$core$__GT_video(var_args){
var args8874 = [];
var len__5729__auto___8887 = arguments.length;
var i__5730__auto___8888 = (0);
while(true){
if((i__5730__auto___8888 < len__5729__auto___8887)){
args8874.push((arguments[i__5730__auto___8888]));

var G__8889 = (i__5730__auto___8888 + (1));
i__5730__auto___8888 = G__8889;
continue;
} else {
}
break;
}

var G__8876 = args8874.length;
switch (G__8876) {
case 1:
return index.core.__GT_video.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return index.core.__GT_video.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8874.length)].join('')));

}
});

index.core.__GT_video.cljs$core$IFn$_invoke$arity$1 = (function (cursor__8808__auto__){
return om.core.build.call(null,index.core.video,cursor__8808__auto__);
});

index.core.__GT_video.cljs$core$IFn$_invoke$arity$2 = (function (cursor__8808__auto__,m8863){
return om.core.build.call(null,index.core.video,cursor__8808__auto__,m8863);
});

index.core.__GT_video.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=core.js.map