/*
 Highcharts JS v5.0.10 (2017-03-31)
 Gantt series

 (c) 2016 Lars A. V. Cabrera

 --- WORK IN PROGRESS ---

 License: www.highcharts.com/license
*/
(function(n){"object"===typeof module&&module.exports?module.exports=n:n(Highcharts)})(function(n){(function(g){var n=g.dateFormat,r=g.each,t=g.isObject,v=g.pick,m=g.wrap,p=g.Axis,w=g.Chart,u=g.Tick;p.prototype.isOuterAxis=function(){var a=this,e=-1,b=!0;r(this.chart.axes,function(d,f){d.side===a.side&&(d===a?e=f:0<=e&&f>e&&(b=!1))});return b};u.prototype.getLabelWidth=function(){return this.label.getBBox().width};p.prototype.getMaxLabelLength=function(a){var e=this.tickPositions,b=this.ticks,d=0;
if(!this.maxLabelLength||a)r(e,function(a){(a=b[a])&&a.labelLength>d&&(d=a.labelLength)}),this.maxLabelLength=d;return this.maxLabelLength};p.prototype.addTitle=function(){var a=this.chart.renderer,e=this.axisParent,b=this.horiz,d=this.opposite,f=this.options,c=f.title,l;this.showAxis=l=this.hasData()||v(f.showEmpty,!0);f.title="";this.axisTitle||((f=c.textAlign)||(f=(b?{low:"left",middle:"center",high:"right"}:{low:d?"right":"left",middle:"center",high:d?"left":"right"})[c.align]),this.axisTitle=
a.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:f}).addClass("highcharts-axis-title").add(e),this.axisTitle.isNew=!0);this.axisTitle[l?"show":"hide"](!0)};g.dateFormats={W:function(a){a=new Date(a);var e=0===a.getUTCDay()?7:a.getUTCDay(),b=a.getTime(),d=new Date(a.getUTCFullYear(),0,1,-6);a.setDate(a.getUTCDate()+4-e);return 1+Math.floor(Math.floor((b-d)/864E5)/7)},E:function(a){return n("%a",a,!0).charAt(0)}};m(u.prototype,"addLabel",function(a){var e=this.axis,b=void 0!==
e.options.categories,d=e.tickPositions,d=this.pos!==d[d.length-1];(!e.options.grid||b||d)&&a.apply(this)});m(u.prototype,"getLabelPosition",function(a,e,b,d){var f=a.apply(this,Array.prototype.slice.call(arguments,1)),c=this.axis,l=c.options,h=l.tickInterval||1,q,k;l.grid&&(q=l.labels.style.fontSize,k=c.chart.renderer.fontMetrics(q,d),q=k.b,k=k.h,c.horiz&&void 0===l.categories?(l=c.axisGroup.getBBox().height,h=this.pos+h/2,f.x=c.translate(h)+c.left,h=l/2+k/2-Math.abs(k-q),f.y=0===c.side?b-h:b+h):
(void 0===l.categories&&(h=this.pos+h/2,f.y=c.translate(h)+c.top+q/2),h=this.getLabelWidth()/2-c.maxLabelLength/2,f.x=3===c.side?f.x+h:f.x-h));return f});m(p.prototype,"tickSize",function(a){var e=a.apply(this,Array.prototype.slice.call(arguments,1)),b;this.options.grid&&!this.horiz&&(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),this.maxLabelLength||(this.maxLabelLength=this.getMaxLabelLength()),b=this.maxLabelLength+b,e[0]=b);return e});m(p.prototype,"getOffset",function(a){var e=this.chart.axisOffset,
b=this.side,d,f,c=this.options,l=c.title,h=l&&l.text&&!1!==l.enabled;this.options.grid&&t(this.options.title)?(f=this.tickSize("tick")[0],e[b]&&f&&(d=e[b]+f),h&&this.addTitle(),a.apply(this,Array.prototype.slice.call(arguments,1)),e[b]=v(d,e[b]),c.title=l):a.apply(this,Array.prototype.slice.call(arguments,1))});m(p.prototype,"renderUnsquish",function(a){this.options.grid&&(this.labelRotation=0,this.options.labels.rotation=0);a.apply(this)});m(p.prototype,"setOptions",function(a,e){e.grid&&this.horiz&&
(e.startOnTick=!0,e.minPadding=0,e.endOnTick=!0);a.apply(this,Array.prototype.slice.call(arguments,1))});m(p.prototype,"render",function(a){var e=this.options,b,d,f,c,l,h,q=this.chart.renderer;if(e.grid){if(b=2*Math.abs(this.defaultLeftAxisOptions.labels.x),b=this.maxLabelLength+b,d=e.lineWidth,this.rightWall&&this.rightWall.destroy(),a.apply(this),a=this.axisGroup.getBBox(),this.horiz&&(this.rightWall=q.path(["M",a.x+this.width+1,a.y,"L",a.x+this.width+1,a.y+a.height]).attr({stroke:e.tickColor||
"#ccd6eb","stroke-width":e.tickWidth||1,zIndex:7,class:"grid-wall"}).add(this.axisGroup)),this.isOuterAxis()&&this.axisLine&&(this.horiz&&(b=a.height-1),d)){a=this.getLinePath(d);l=a.indexOf("M")+1;h=a.indexOf("L")+1;f=a.indexOf("M")+2;c=a.indexOf("L")+2;if(0===this.side||3===this.side)b=-b;this.horiz?(a[f]+=b,a[c]+=b):(a[l]+=b,a[h]+=b);this.axisLineExtra?this.axisLineExtra.animate({d:a}):this.axisLineExtra=q.path(a).attr({stroke:e.lineColor,"stroke-width":d,zIndex:7}).add(this.axisGroup);this.axisLine[this.showAxis?
"show":"hide"](!0)}}else a.apply(this)});m(w.prototype,"render",function(a){var e=25/11,b,d;r(this.axes,function(a){var c=a.options;c.grid&&(d=c.labels.style.fontSize,b=a.chart.renderer.fontMetrics(d),"datetime"===c.type&&(c.units=[["millisecond",[1]],["second",[1]],["minute",[1]],["hour",[1]],["day",[1]],["week",[1]],["month",[1]],["year",null]]),a.horiz?c.tickLength=c.cellHeight||b.h*e:(c.tickWidth=1,c.lineWidth||(c.lineWidth=1)))});a.apply(this)})})(n);(function(g){var n=g.getOptions().plotOptions,
r=g.seriesTypes.column,t=g.each,v=g.extendClass,m=g.isNumber,p=g.isObject,w=g.merge,u=g.pick,a=g.seriesTypes,e=g.wrap,b=g.Axis,d=g.Point,f=g.Series;n.xrange=w(n.column,{tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'}});a.xrange=v(r,{pointClass:v(d,{getLabelConfig:function(){var a=d.prototype.getLabelConfig.call(this);a.x2=this.x2;a.yCategory=this.yCategory=this.series.yAxis.categories&&this.series.yAxis.categories[this.y];
return a}}),type:"xrange",forceDL:!0,parallelArrays:["x","x2","y"],requireSorting:!1,animate:a.line.prototype.animate,getColumnMetrics:function(){function a(){t(e.series,function(a){var c=a.xAxis;a.xAxis=a.yAxis;a.yAxis=c})}var b,e=this.chart;a();this.yAxis.closestPointRange=1;b=r.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,e,d){b=f.prototype.cropData.call(this,this.x2Data,b,e,d);b.xData=a.slice(b.start,b.end);return b},translate:function(){r.prototype.translate.apply(this,
arguments);var a=this.xAxis,b=this.columnMetrics,e=this.options.minPointLength||0;t(this.points,function(c){var k=c.plotX,d=u(c.x2,c.x+(c.len||0)),d=a.toPixels(d,!0),f=d-k,h;e&&(h=e-f,0>h&&(h=0),k-=h/2,d+=h/2);k=Math.max(k,-10);d=Math.min(Math.max(d,-10),a.len+10);d<k&&(d=k);c.shapeArgs={x:k,y:c.plotY+b.offset,width:d-k,height:b.width};c.tooltipPos[0]+=f/2;c.tooltipPos[1]-=b.width/2;if(d=c.partialFill)p(d)&&(d=d.amount),m(d)||(d=0),k=c.shapeArgs,c.partShapeArgs={x:k.x,y:k.y+1,width:k.width*d,height:k.height-
2}})},drawPoints:function(){var a=this,b=this.chart,d=b.renderer,e=b.pointCount<(a.options.animationLimit||250)?"animate":"attr";t(a.points,function(b){var c=b.graphic,f=b.shapeType,h=b.shapeArgs,g=b.partShapeArgs;if(m(b.plotY)&&null!==b.y)if(c){if(b.graphicOriginal[e](w(h)),g)b.graphicOverlay[e](w(g))}else b.graphic=c=d.g("point").attr({"class":b.getClassName()}).add(b.group||a.group),b.graphicOriginal=d[f](h).addClass("highcharts-partfill-original").add(c),g&&(b.graphicOverlay=d[f](g).addClass("highcharts-partfill-overlay").add(c));
else c&&(b.graphic=c.destroy())})}});e(b.prototype,"getSeriesExtremes",function(a){var b=this.series,c,d;a.call(this);this.isXAxis&&"xrange"===b.type&&(c=u(this.dataMax,Number.MIN_VALUE),t(this.series,function(a){t(a.x2Data||[],function(a){a>c&&(c=a,d=!0)})}),d&&(this.dataMax=c))})})(n)});
