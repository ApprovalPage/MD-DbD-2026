(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Rectangle_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F3E8").s().p("A2kK6IAA10MAtJAAAIAAV0g");
	this.shape.setTransform(144.475,69.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_4, new cjs.Rectangle(0,0,289,139.7), null);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8E659").s().p("A3bP8IAA/3MAu3AAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-102,300,204);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AASBxIgihWIgOAWIAABAIhZAAIAAjhIBZAAIAABZIA4hZIBPAAIg7BLIBKCWg");
	this.shape.setTransform(75.85,1.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AAdBxIgOguIg4AAIgOAuIhCAAIBLjhIBfAAIBJDhgAAGAWIgQg8IgUA8IAkAAg");
	this.shape_1.setTransform(51.4,1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AhdBxIAAjhIC5AAIAAA4IhiAAIAAAcIA0AAIAAA5Ig0AAIAAAaIBkAAIAAA6g");
	this.shape_2.setTransform(29.85,1.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhTBxIAAjhIBXAAIAACpIBQAAIAAA4g");
	this.shape_3.setTransform(11.1,1.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAdBxIgOguIg4AAIgOAuIhCAAIBLjhIBfAAIBJDhgAAGAWIgQg8IgUA8IAkAAg");
	this.shape_4.setTransform(-15.85,1.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AAcBxIglg9IgmA9IhKAAIBNhuIhIhzIBeAAIAeA0IAfg0IBLAAIhHBkIBPB9g");
	this.shape_5.setTransform(-45.55,1.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgrBxIAAjhIBXAAIAADhg");
	this.shape_6.setTransform(-62.575,1.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AhZBxIAAjhICzAAIAAA6IhbAAIAAAnIA0AAIAAA5Ig0AAIAABHg");
	this.shape_7.setTransform(-76.6,1.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-25.9,231,51.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AASBxIgihWIgOAWIAABAIhZAAIAAjhIBZAAIAABZIA4hZIBPAAIg7BLIBKCWg");
	this.shape.setTransform(75.85,1.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AAdBxIgOguIg4AAIgOAuIhCAAIBLjhIBfAAIBJDhgAAGAWIgQg8IgUA8IAkAAg");
	this.shape_1.setTransform(51.4,1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AhdBxIAAjhIC5AAIAAA4IhiAAIAAAcIA0AAIAAA5Ig0AAIAAAaIBkAAIAAA6g");
	this.shape_2.setTransform(29.85,1.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhTBxIAAjhIBXAAIAACpIBQAAIAAA4g");
	this.shape_3.setTransform(11.1,1.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAdBxIgOguIg4AAIgOAuIhCAAIBLjhIBfAAIBJDhgAAGAWIgQg8IgUA8IAkAAg");
	this.shape_4.setTransform(-15.85,1.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AAcBxIglg9IgmA9IhKAAIBNhuIhIhzIBeAAIAeA0IAfg0IBLAAIhHBkIBPB9g");
	this.shape_5.setTransform(-45.55,1.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgrBxIAAjhIBXAAIAADhg");
	this.shape_6.setTransform(-62.575,1.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AhZBxIAAjhICzAAIAAA6IhbAAIAAAnIA0AAIAAA5Ig0AAIAABHg");
	this.shape_7.setTransform(-76.6,1.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-25.9,231,51.9);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8E659").s().p("A3bP8IAA/3MAu3AAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-102,300,204);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8E659").s().p("A3bP8IAA/3MAu3AAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-102,300,204);


(lib.HEAD2bkgd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8E659").s().p("AwPKPIAA0dMAgfAAAIAAUdg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2bkgd, new cjs.Rectangle(-104,-65.4,208,130.9), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AAVCBIAAh7IgpAAIAAB7IgeAAIAAkBIAeAAIAABvIApAAIAAhvIAeAAIAAEBg");
	this.shape.setTransform(146.25,-6.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AgNCBIAAjoIgcAAIAAgZIBTAAIAAAZIgaAAIAADog");
	this.shape_1.setTransform(135.45,-6.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAfCBIg5iwIACBAIAABwIgcAAIAAkBIAXAAIA6CvIgDhKIAAhlIAbAAIAAEBg");
	this.shape_2.setTransform(124.425,-6.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AgdB7QgLgIgFgRQgFgRAAgaIAAhxQAAgWAFgQQAEgRALgJQALgJAUAAQAPAAALAFQAKAFAFAKQAFAJACAOQACANAAARIAABxQAAAagFARQgEARgLAIQgLAJgTAAQgTAAgLgJgAgPheQgFALABAYIAAByQAAATABALQABAMAGAEQAEAFAIAAQAIAAAEgFQAEgFACgLQACgLAAgTIAAhyQAAgYgEgLQgEgLgMAAQgLAAgFALg");
	this.shape_3.setTransform(111.1,-6.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAwCBIAAhiIADhfIgnDBIgVAAIgojBIACBfIAABiIgaAAIAAkBIAjAAIAnDNIAmjNIAjAAIAAEBg");
	this.shape_4.setTransform(95.75,-6.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AgsCBIA+kBIAbAAIg/EBg");
	this.shape_5.setTransform(81.95,-6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgYB/QgJgHgGgJQgFgLgCgOQgCgOAAgRIAAgZIAdAAIAAAaQAAAaAEAMQAEAMAMAAQAJAAAEgEQAFgEAAgKIABgYQAAgRgFgNQgHgMgKgLIgRgQIgOgRQgHgJgFgLQgEgLAAgPQAAgTAEgPQAEgOALgHQAKgIAUAAQAPAAAKAGQAJAFAFAKQAFAKABAOIABAeIAAAPIgdAAIAAgRIgBgaQgBgLgEgFQgDgFgIAAQgHAAgEADQgFAEgCAHQgDAIABAMQgBAKADAGQADAIAFAFIALANIARATQAOAOAKASQAIARABAYQAAAWgFAPQgEAQgKAHQgLAJgVAAQgOAAgKgFg");
	this.shape_6.setTransform(71.7,-6.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AAfCBIg5iwIACBAIAABwIgcAAIAAkBIAXAAIA6CvIgDhKIAAhlIAbAAIAAEBg");
	this.shape_7.setTransform(59.075,-6.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AgdB7QgLgIgFgRQgFgRAAgaIAAhxQAAgWAFgQQAEgRALgJQAMgJATAAQAQAAAKAFQAKAFAEAKQAGAJACAOQACANAAARIAABxQAAAagEARQgFARgLAIQgLAJgTAAQgTAAgLgJgAgPheQgFALABAYIAAByQAAATABALQABAMAFAEQAFAFAIAAQAIAAAEgFQAEgFACgLQACgLAAgTIAAhyQAAgYgEgLQgEgLgMAAQgLAAgFALg");
	this.shape_8.setTransform(45.75,-6.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AgmCBIAAkBIAeAAIAADoIAvAAIAAAZg");
	this.shape_9.setTransform(35.7,-6.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161616").s().p("AgmCBIAAkBIAfAAIAADoIAuAAIAAAZg");
	this.shape_10.setTransform(26.55,-6.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("AAeCBIgHgxIgtAAIgIAxIgcAAIAnkBIAjAAIArEBgAAUA3IgUiHIgBAAIgSCHIAnAAg");
	this.shape_11.setTransform(14.95,-6.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("AglBxQgMgTAAgqIAAhrQAAgRACgOQADgNAGgLQAFgKALgFQAJgFAPgBQAQABAKAFQAJAGAGAJQAEALACANQABAOABARIAAAVIgdAAIAAgiQgBgSgEgJQgDgKgMABQgMAAgEAKQgFAKAAAcIAABrQAAAeAEANQAEAMAMAAQANAAAEgMQAFgOAAgeIAAghIgVAAIAAgWIAxAAIAACGIgRAAIgDgUQgFALgJAGQgJAGgLgBQgWAAgMgSg");
	this.shape_12.setTransform(2.4,-6.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161616").s().p("Aj0EDQhWhYAAimQAAikBZheQBZhdCfAAQCcAABUBXQBUBYAACnQAACmhWBdQhYBcidAAQifAAhVhYgAgtihQgOAVAAA+IAACcQAAA+AOAVQANAUAjAAQAjAAANgUQAOgWAAg9IAAicQAAg+gOgVQgNgUgjAAQgjAAgNAUg");
	this.shape_13.setTransform(-50.65,-9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#161616").s().p("AkpBqIDMAAQAIBDBGAAQBLAAAAhGIAAgBQAAhIhLAAQghAAgXAPQgHAHgVAVIjEgsIBYlwIHVAAIAACvIk/AAIgZBZQA7gqBeAAQBsAAA8A4QA7A6AABkQAADzkpAAQkqAAAAjqg");
	this.shape_14.setTransform(-116.95,-8.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#161616").s().p("AgdFMIAAmXQhqB0hPAeIAAjBQBXgcBAg+QA9g7AMg8IDNAAIAAKXg");
	this.shape_15.setTransform(-173.25,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-199.5,-86,357.6,145), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AgIBRIAAhEIgchdIATAAIASBCIAAAAIARhCIATAAIgbBdIAABEg");
	this.shape.setTransform(132.575,1.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AATBRIgEgfIgdAAIgEAfIgSAAIAYihIAWAAIAbChgAAMAjIgMhVIgMBVIAYAAg");
	this.shape_1.setTransform(125.675,1.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AgfBRIAAihIAfAAQALAAAIAFQAHAGACAJQADAKAAAOIAABGQAAARgDAKQgDAKgHAFQgIAFgLAAgAgLBCIAJAAQAEAAAEgCQADgDACgGQABgGAAgMIAAhJQABgQgEgGQgDgHgIAAIgJAAg");
	this.shape_2.setTransform(117.85,1.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AATBRIgEgfIgdAAIgEAfIgSAAIAYihIAWAAIAbChgAAMAjIgMhVIgMBVIAYAAg");
	this.shape_3.setTransform(105.925,1.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AgPBQQgGgEgDgHQgEgGgBgJQgBgJAAgLIAAgPIASAAIAAAQQAAARADAHQACAIAHAAQAGAAADgDQACgCABgGIABgQQAAgLgEgHQgEgIgGgHIgLgKIgJgKQgEgGgDgHQgDgHAAgJQAAgMADgJQACgJAHgFQAHgFAMAAQAJAAAGADQAGAEADAGQADAGABAJIABATIAAAKIgSAAIAAgLIgBgRQgBgGgCgDQgDgEgEAAQgEAAgDACQgDADgBAEQgCAFAAAIQAAAGACAEIAFAIIAHAIIALAMQAIAIAGAMQAGALAAAPQAAANgDAKQgDAKgGAFQgHAFgNAAQgJAAgGgDg");
	this.shape_4.setTransform(94.775,1.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AATBRIgjhuIABAoIAABGIgRAAIAAihIANAAIAmBtIgDguIAAg/IARAAIAAChg");
	this.shape_5.setTransform(86.85,1.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgSBOQgHgGgDgKQgDgLAAgQIAAhHQAAgOACgKQAEgLAGgFQAIgGAMAAQAJAAAGADQAHADADAHQADAFACAJIABATIAABHQAAAQgCALQgEAKgGAGQgIAFgMAAQgLAAgHgFgAgJg7QgDAHAAAPIAABIIABATQABAHADADQADADAEAAQAGAAADgDQACgDABgHIABgTIAAhIQAAgPgCgHQgDgHgHAAQgIAAgCAHg");
	this.shape_6.setTransform(78.4,1.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AgXBRIAAihIATAAIAACRIAcAAIAAAQg");
	this.shape_7.setTransform(72.1,1.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AgXBRIAAihIASAAIAACRIAdAAIAAAQg");
	this.shape_8.setTransform(66.35,1.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AATBRIgEgfIgdAAIgEAfIgSAAIAYihIAWAAIAbChgAAMAjIgMhVIgMBVIAYAAg");
	this.shape_9.setTransform(59.025,1.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161616").s().p("AgXBHQgIgLAAgbIAAhDQAAgLACgJQABgIAEgHQAEgGAGgDQAGgEAJAAQAKAAAGAEQAGADAEAGQADAHABAJIABATIAAANIgTAAIAAgVQAAgMgCgGQgCgGgIAAQgHAAgDAHQgDAHAAARIAABDQAAATADAIQACAIAIAAQAIAAACgIQADgIAAgTIAAgVIgNAAIAAgOIAfAAIAABUIgKAAIgDgMQgCAHgGADQgGAEgHAAQgOAAgHgMg");
	this.shape_10.setTransform(51.125,1.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("Ai7BDICBAAQAFAqAsAAQAvAAAAgsIAAgBQAAgtgvAAQgUAAgPAKQgFAEgNANIh7gcIA3jnIEnAAIAABuIjJAAIgPA4QAlgaA7gBQBEAAAmAkQAlAkAAA/QAACZi7AAQi8AAAAiTg");
	this.shape_11.setTransform(22.775,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("Ag/A9QgZgYAAglQAAgkAZgXQAZgXAnAAQAnAAAYAWQAZAYAAAkQAAAlgaAXQgZAXgmAAQgnAAgYgWgAgSgeQgFAIAAAUIAAAGQAAATAFAJQAGAIAMAAQANAAAFgJQAGgJAAgSIAAgHQAAgTgGgIQgFgJgNAAQgMAAgGAJg");
	this.shape_12.setTransform(-15.175,1.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161616").s().p("AgeBQIAAh1IglAAIAAgqICHAAIAAAqIglAAIAAB1g");
	this.shape_13.setTransform(-30.825,1.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#161616").s().p("AhHBQIAAifIBLAAQAkAAAQAOQAQAMAAAbQAAAagSAPQgTARglAAIgGAAIAAAwgAgIABIAEAAQALgBAEgHQADgGAAgNQAAgTgTgBIgDAAg");
	this.shape_14.setTransform(-49.075,1.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#161616").s().p("Ag3BBQgRgQAAgkIAAhdIA+AAIAABfQAAANAEAGQAFAFAKAAQALAAAEgFQAEgEAAgMIAAhiIAtAAIAABiQAAAhgQAPQgRAPgkAAQgpAAgSgQg");
	this.shape_15.setTransform(-64.975,1.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#161616").s().p("AhBBQIAAifICCAAIAAAoIhFAAIAAAUIAlAAIAAAnIglAAIAAATIBGAAIAAApg");
	this.shape_16.setTransform(-84.075,1.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#161616").s().p("AgcBQIg6ifIBCAAIAeBaIAehaIAvAAIg7Cfg");
	this.shape_17.setTransform(-99.85,1.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#161616").s().p("AAUBQIgJghIgoAAIgJAhIgvAAIA1ifIBCAAIA0CfgAAEAQIgLgqIgOAqIAZAAg");
	this.shape_18.setTransform(-114.325,1.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#161616").s().p("Ag2BBQgTgQgCgXIAvAAQAEAWAZgBQANAAAAgJQAAgEgJgDIgUgGQgagHgMgIQgTgMAAgWQAAgaAVgQQAUgQAhAAQAiAAASAQQARAOABAZIguAAQgCgKgFgEQgFgFgNAAQgLAAAAAKQAAAFAKADIAWAHQAYAFAMAJQASALAAAWQAAAbgUAPQgUAPgjAAQgiAAgVgSg");
	this.shape_19.setTransform(-130.125,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-139.2,-47.6,278.5,91.30000000000001), null);


(lib.DbDlogo2linesvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DbD_logo_2line_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AhIBoIAAjPIA/AAQAqAAAUAQQAUAPAAAgQAAAWgJAOQgJANgTAHQgSAGgcAAIgnAAIAABSgAgxADIAnAAQAVAAANgDQANgFAHgJQAGgKAAgQQAAgXgOgLQgOgKgfAAIgoAAg");
	this.shape.setTransform(109.425,38.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("Ag0BeQgWgNgNgYQgMgbAAgeQABggALgXQANgYAXgOQAXgNAdAAQAfABAVAMQAWANANAZQAMAYAAAgQAAAggMAYQgMAYgYANQgWANgeAAQgdAAgXgNgAgnhMQgSALgJATQgKAVAAAZIAAABQAAAbAKATQAJATARALQARALAXgBQAXABASgLQASgLAIgSQAKgTAAgbIAAgCQAAgbgKgSQgJgUgRgLQgRgKgXAAQgXAAgRAKg");
	this.shape_1.setTransform(89.325,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AA1BoIAAgGQgFgngQgWQgRgVghAAIgjAAIAABYIgWAAIAAjPIBGAAQAZAAARAHQARAGAIALQAIAMAAASQAAAXgNAPQgMAOgbAEQATAFALAMQALALAHASQAHAVACAWIABAGIAAACgAg1gCIAqAAQAeAAAOgMQAPgMAAgVQAAgTgNgJQgNgJgaAAIgxAAg");
	this.shape_2.setTransform(70.075,38.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhWBoIAAjPIBEAAQAzAAAbAaQAbAbAAAzQAAA0gcAZQgbAYg1ACgAg/BUIArAAQAbAAATgJQASgJAKgSQAJgSAAgcIAAgCQAAgcgJgTQgIgSgTgJQgQgJgdAAIgtAAg");
	this.shape_3.setTransform(50.9,38.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AgTBoIAAheIhLhxIAtAAIAyBQIAzhQIArAAIhMBxIAABeg");
	this.shape_4.setTransform(25.725,38.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AhRBoIAAjPIBSAAQAWAAASAHQAQAGAIAMQAIANAAASQAAAPgIAKQgHALgPAGQATAFAJANQALAMgBATQABAUgKANQgIANgSAHQgTAHgaAAgAgqBHIAqAAQATAAAKgHQAKgHAAgPQABgPgLgIQgJgHgUAAIgqAAgAgqgTIAnAAQARAAAJgGQAJgHAAgMQABgNgIgHQgGgGgSAAIgrAAg");
	this.shape_5.setTransform(8.7,38.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AhcBoIAAjOIBhAAQAvAAAVAQQAUAQABAkQAAAWgLAQQgKARgWAKQgVALggAAIgJAAIAAA+gAgLABIAFAAQAKAAAGgEQAFgFACgHQACgKAAgJQAAgNgGgGQgHgHgMAAIgFAAg");
	this.shape_6.setTransform(76.65,10.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("Ag8BfQgZgNgPgZQgPgYAAghQAAgeAPgZQAOgYAcgOQAbgOAggBQAjABAYANQAaANAPAZQAQAZgBAfQgBAggOAYQgOAZgcAOQgaAOghgBQghAAgbgNgAgRguQgHAFgDAKQgDAMAAAPIAAAJQAAARADAKQADAJAHAGQAGAFALAAQALAAAHgFQAGgFAEgKQADgLAAgQIAAgKQAAgPgDgLQgEgLgGgEQgHgFgLAAQgLAAgGAFg");
	this.shape_7.setTransform(54.378,10.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AARBoIgBgQQgCgdgGgOQgGgPgMgBIgHAAIAABLIhQAAIAAjOIBhAAQAmgBATAHQATAGAIAMQAHANAAAQQAAAXgOAMQgQAOgYADQATABAMAJQAKAHAHAPQAFAMAEAWIAEAjgAgRgDQAPgBAIgGQAKgIAAgPQAAgNgHgHQgHgHgQAAIgDAAg");
	this.shape_8.setTransform(32.675,10.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AhrBoIAAjOIBmAAQAyAAAfAXQAgAYAAA3QAAA3ghAYQggAZgzAAgAgaA3IAOAAQANAAAIgFQAJgEADgMQADgLAAgWIAAgBQAAgWgDgLQgEgKgIgGQgIgEgNAAIgOAAg");
	this.shape_9.setTransform(10.775,10.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.7,48.7);


(lib.CTAmobile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AAVB+IgBgTQgCgigHgQQgIgUgPgBIgJAAIAABaIhhAAIAAj7IB2AAQBBAAAaATQAUAPAAAfQAAA1hCALQAiADAQAVQANARAHAmIAEArgAgVgFIAIAAQAggFAAgeQAAghgkAAIgEAAg");
	this.shape.setTransform(215.2,15.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhoB+IAAj7IDQAAIAAA/IhvAAIAAAfIA7AAIAAA/Ig7AAIAAAeIBwAAIAABAg");
	this.shape_1.setTransform(191.575,15.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AgxB+IAAi5Ig5AAIAAhCIDWAAIAABCIg7AAIAAC5g");
	this.shape_2.setTransform(168.85,15.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AAhB+IgQg0Ig/AAIgPA0IhKAAIBUj7IBqAAIBRD7gAAHAZIgShDIgXBDIApAAg");
	this.shape_3.setTransform(148.825,15.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAoB+IgniCIglCCIhOAAIhEj7IBbAAIAcB8IAih8IBPAAIAkB7IAbh7IBGAAIhED7g");
	this.shape_4.setTransform(121.175,15.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AhoB+IAAj7IDQAAIAAA/IhvAAIAAAfIA7AAIAAA/Ig7AAIAAAeIBwAAIAABAg");
	this.shape_5.setTransform(85.125,15.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgtB+Ihbj7IBnAAIAwCOIAwiOIBKAAIhcD7g");
	this.shape_6.setTransform(59.975,15.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AAhB+IgQg0Ig/AAIgPA0IhKAAIBUj7IBqAAIBRD7gAAHAZIgShDIgXBDIApAAg");
	this.shape_7.setTransform(39.225,15.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AhXBnQgegZgCgkIBJAAQAHAhAoAAQAVAAAAgOQAAgHgOgFIghgJQgogLgUgNQgfgUAAgjQAAgpAigaQAhgZAzAAQA2AAAeAZQAaAYACAnIhIAAQgEgQgHgHQgJgIgUAAQgTgBAAARQAAAIAQAFQAFADAeAHQAnAJATAOQAcATAAAjQAAAqggAYQgfAYg3AAQg3AAgigdg");
	this.shape_8.setTransform(14.525,15.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AhlBgQgnglAAg7QAAg6AogkQAoglA9AAQA+AAAmAkQAoAkAAA7QAAA6goAlQgoAlg9AAQg+AAgngkgAgcgxQgJAOAAAeIAAALQAAAeAJANQAJAPATAAQAUAAAJgPQAJgNAAgfIAAgKQAAgegJgOQgJgOgUAAQgTAAgJAOg");
	this.shape_9.setTransform(204.45,-12.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161616").s().p("AgxB+IAAi5Ig5AAIAAhCIDWAAIAABCIg7AAIAAC5g");
	this.shape_10.setTransform(180.1,-12.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("AhXBnQgegZgCgkIBJAAQAHAhAoAAQAVAAAAgPQAAgGgOgFIghgJQgogLgUgOQgfgTAAgjQAAgpAigZQAhgaAzAAQA2AAAeAaQAaAWACAoIhIAAQgEgQgHgHQgJgJgUAAQgTABAAAQQAAAIAQAFQAFADAeAHQAnAKATANQAcASAAAkQAAAqggAYQgfAYg3AAQg3AAgigdg");
	this.shape_11.setTransform(150.125,-12.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("AhxB+IAAj7IB3AAQA5AAAaAUQAZAUAAAsQAAApgcAXQgfAcg6AAIgLAAIAABLgAgOACIAHAAQASgCAHgLQAFgJAAgVQAAgggfAAIgGAAg");
	this.shape_12.setTransform(126.475,-12.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161616").s().p("AgwB+IAAj7IBhAAIAAD7g");
	this.shape_13.setTransform(108.675,-12.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#161616").s().p("AgxB+IAAi5Ig5AAIAAhCIDWAAIAABCIg7AAIAAC5g");
	this.shape_14.setTransform(91.55,-12.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#161616").s().p("AgwB+IAAi5Ig7AAIAAhCIDWAAIAABCIg5AAIAAC5g");
	this.shape_15.setTransform(62.8,-12.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#161616").s().p("AhoB+IAAj7IDQAAIAAA/IhvAAIAAAfIA7AAIAAA/Ig7AAIAAAeIBwAAIAABAg");
	this.shape_16.setTransform(40.875,-12.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#161616").s().p("AhjBhQgdgjAAg4QAAhBAjgkQAkgkBBAAQA2AAAfAcQAcAaAFAtIhYAAQgCgdgcAAQgUAAgIARQgJAQAAAiIAAAGQAAA9ApAAQAhAAABgcIgfAAIAAg1IByAAIAACGIhVAAIAAgcQgSAigvAAQgxAAgdgjg");
	this.shape_17.setTransform(15.775,-12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTAmobile, new cjs.Rectangle(0,-42.6,293,85.2), null);


(lib.WaterGallonai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Water_Gallon_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#161616").ss(12).p("AEuCZQAAh2hdi9Qg5hzhlieQgSgcghAAQggAAgSAcQj7GIAAC8QAAB9BYBZQBZBYB8AAQB9AABZhYQBYhZAAh9g");
	this.shape.setTransform(180.425,301.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59C5E6").s().p("AjVFvQhYhZAAh9QAAi8D7mIQASgcAgABQAhgBASAcQBlCeA5BzQBdC9AAB2QAAB9hYBZQhZBYh9AAQh8AAhZhYg");
	this.shape_1.setTransform(180.425,301.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("EgSvAnYQjWAAiXiQQiYiRAAjLIAAjKQgogYgYgpQgXgqAAgwIAAk3QAAgwAXgpQAYgpAogZIAA2SQgogYgYgpQgXgqAAgwIAAk3QAAhBApgyQAogxA+gNQAOgPAUgNITisMIAAmNIgjAAQgjAAgYgZQgZgZAAgiIAAi6QAAhKA1g1QA1g1BKAAIJ3AAQBKAAA1A1QA1A1AABKIAAC6QAAAfgUAXQgUAYgfAFIgvABIAAGNITgMMQAUANAPAPQA+ANAoAxQApAyAABBIAAE3QAAAwgXApQgYApgoAZIAAWSQAoAZAYApQAXApAAAwIAAE3QAAAwgXAqQgYApgoAYIAADKQAADLiYCRQiXCQjWAAgA48fsQAACZB0BuQB1BtCkAAMAlfAAAQCkAAB1htQB0huAAiZIAAiwMgx5AAAgA5nUVIgBABQgTAFgMARQgMAQAAAUIAAE3QAAAUAMAQQAMARATAFIABABQAJACAHAAMAyuAAAQAIAAAJgCIABAAQATgGAMgRQAMgQAAgUIAAk3QAAgUgMgQQgMgQgTgGIgBgBQgJgCgIAAMgytAAAQgIAAgJACgA48SbMAx5AAAIAA1eMgx5AAAgA5ersQgWADgQARQgPASAAAXIAAE3QAAAUAMAQQAMAQATAGIABABQAIACAJAAMAytAAAQAKAAAHgCIABgBQATgGAMgQQAMgQAAgUIAAk3QAAgXgPgSQgQgRgXgDIgEAAMgyzAAAgAkA5GIydLiMAs7AAAIycriIAAnPIoCAAgEgFlglNQgSASAAAYIAACVILvAAIAAiVQAAgYgSgSQgRgSgZAAIp3AAQgYAAgSASg");
	this.shape_2.setTransform(180.425,251.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgE1Aj3Qi8AAiHh/QiHh/AAiyIAAjwQglgLgZggQgYggAAgpIAAk4QAAgoAYghQAZggAlgLIAA3fQglgLgZggQgYghAAgoIAAk4QAAgwAggjQAigjAvgDQAPgUAVgNIT8sdIAAnrIheAAIgEAAIF9AAIAAIJIt/L/QgTANgRAUQgvADghAjQghAjAAAwIAAE4QAABgBDAUIAAXfQhDAUAABgIAAE4QAAApAZAgQAYAgAmALIAADwQAACyCFB/QCDB7C1AEg");
	this.shape_3.setTransform(91.45,268.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADA787").s().p("EgEGAj3QC1gECBh7QCHh/AAiyIAAjwQAmgLAYggQAZggAAgpIAAk4QAAgogZghQgYgggmgLIAA3fQAmgLAYggQAZghAAgoIAAk4QAAgwghgjQghgjgwgDQgPgUgVgNIu6r/IAAoJIFUAAIgDAAIheAAIAAHrIT8MdQAUANAQAUQAwADAgAjQAiAjAAAwIAAE4QgBAogYAhQgYAggnALIAAXfQAnALAYAgQAYAhABAoIAAE4QgBApgYAgQgYAggnALIAADwQABCyiHB/QiGB/i9AAg");
	this.shape_4.setTransform(271.4,268.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFC7A1").s().p("A6lEPIAAodMA1LAAAIAAIdg");
	this.shape_5.setTransform(177.875,403.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CFC7A1").s().p("A6lEPIAAodMA1LAAAIAAIdg");
	this.shape_6.setTransform(177.875,198.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiTCIIAAkOIEnAAIAAEOg");
	this.shape_7.setTransform(151.625,23.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADA787").s().p("AjaCIIAAkOIG1AAIAAEOg");
	this.shape_8.setTransform(199.775,23.35);

	this.instance = new lib.Rectangle_4();
	this.instance.setTransform(165.25,302.25,1,1,0,0,0,144.5,69.9);
	this.instance.alpha = 0.5;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F3E8").s().p("EgSvAmcQi8AAiHh/QiGh/AAiyIAAjxQgmgLgYggQgZggAAgpIAAk3QAAgpAZggQAYggAmgLIAA3gQgmgLgYggQgZggAAgpIAAk3QAAgwAhgjQAhgjAwgDQAPgUAUgNIT+seIAAnqIhfAAQgJAAgIgHQgHgHAAgKIAAi6QAAgxAkgjQAjgkAxAAIJ3AAQAxAAAkAkQAjAjAAAxIAAC6QAAAJgGAGQgGAHgJABIgDABIheAAIAAHqIT9MeQAUAMAQAVQAvADAhAjQAhAjAAAwIAAE3QAAApgYAgQgZAggmALIAAXgQAmALAZAgQAYAgAAApIAAE3QAAApgYAgQgZAggmALIAADxQAACyiGB/QiHB/i8AAg");
	this.shape_9.setTransform(180.425,251.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360.9,504);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.DbDlogo2linesvg("synched",0);
	this.instance.setTransform(44.45,-13.85,1,1,0,0,0,102.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-58.3,-24.3,116.69999999999999,48.7), null);


(lib.GALLON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WaterGallonai("synched",0);
	this.instance.setTransform(0,0.05,1,1,0,0,0,180.4,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GALLON, new cjs.Rectangle(-180.4,-251.9,360.9,503.9), null);


(lib.GALLON5anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GALLON();
	this.instance.setTransform(38.8,0.15,0.0488,0.0488,0,0,0,4.1,3.1);

	this.instance_1 = new lib.GALLON();
	this.instance_1.setTransform(19.5,0.15,0.0488,0.0488,0,0,0,4.1,3.1);

	this.instance_2 = new lib.GALLON();
	this.instance_2.setTransform(0.15,0.15,0.0488,0.0488,0,0,0,4.1,3.1);

	this.instance_3 = new lib.GALLON();
	this.instance_3.setTransform(-19.15,0.15,0.0488,0.0488,0,0,0,5.1,3.1);

	this.instance_4 = new lib.GALLON();
	this.instance_4.setTransform(-38.45,0.15,0.0488,0.0488,0,0,0,3.1,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GALLON5anim, new cjs.Rectangle(-47.4,-12.2,94.8,24.6), null);


(lib.GALLON15anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// a
	this.instance = new lib.GALLON5anim();
	this.instance.setTransform(97.4,99,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:52.4},15,cjs.Ease.quadIn).to({scaleX:1.04,scaleY:1.04,x:47.05},2).to({scaleX:1,scaleY:1,x:52.4},2).wait(235));

	// b
	this.instance_1 = new lib.GALLON5anim();
	this.instance_1.setTransform(150,99,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},15,cjs.Ease.quadIn).to({scaleX:1.04,scaleY:1.04,x:149.95},2).to({scaleX:1,scaleY:1,x:150},2).wait(235));

	// c
	this.instance_2 = new lib.GALLON5anim();
	this.instance_2.setTransform(201.35,99,0.5,0.5,0,0,0,0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:246.35},15,cjs.Ease.quadIn).to({scaleX:1.04,scaleY:1.04,x:251.75},2).to({scaleX:1,scaleY:1,x:246.35},2).wait(235));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,86.2,303.2,25.599999999999994);


// stage content:
(lib.DbDLeak320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [304,350];
	// timeline functions:
	this.frame_304 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}
	this.frame_350 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(304).call(this.frame_304).wait(46).call(this.frame_350).wait(4));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#171717").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},351).wait(3));

	// FADE
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(160,48);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(160,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},344).to({state:[{t:this.instance_1}]},5).to({state:[]},2).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(344).to({_off:false},0).to({_off:true,alpha:1},5).wait(5));

	// LOGO
	this.instance_2 = new lib.LOGO();
	this.instance_2.setTransform(243,24.95,0.73,0.73);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(303).to({_off:false},0).to({_off:true},48).wait(3));

	// CTA
	this.instance_3 = new lib.CTAmobile();
	this.instance_3.setTransform(20.1,24.15,0.65,0.65,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(287).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,y:24.2},2).to({scaleX:0.65,scaleY:0.65,y:24.15},7).to({_off:true},55).wait(3));

	// HEAD2
	this.instance_4 = new lib.HEAD2();
	this.instance_4.setTransform(-98.95,54.35,0.66,0.66,0,0,0,0.1,35.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(230).to({_off:false},0).to({regY:35.4,x:173.7,y:54.25},5).to({scaleX:0.6246,scaleY:0.6246,x:173,y:53},3,cjs.Ease.quadInOut).wait(1).to({regX:-21.7,regY:-9.1,scaleX:0.6511,scaleY:0.6511,x:159.25,y:25},0).wait(1).to({regX:0.1,regY:35.4,scaleX:0.66,scaleY:0.66,x:173.7,y:54.25},0).wait(40).to({x:445.05},6,cjs.Ease.quadIn).to({_off:true},1).wait(67));

	// HEAD2_bkgd
	this.instance_5 = new lib.HEAD2bkgd();
	this.instance_5.setTransform(-194.15,23.8,1.9709,1,0,0,0,0.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).to({x:160.2,y:27},10,cjs.Ease.quadOut).to({_off:true},117).wait(3));

	// gallon_5
	this.instance_6 = new lib.GALLON();
	this.instance_6.setTransform(221.8,25.65,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({_off:false},0).wait(37).to({y:23.25},3).wait(6).to({y:28.05},3,cjs.Ease.quadInOut).to({y:25.65},4,cjs.Ease.quadInOut).wait(2).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:241.15,y:25.75},13,cjs.Ease.quadOut).to({regX:6.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:172.8,y:25.1,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(239));

	// gallon_4
	this.instance_7 = new lib.GALLON();
	this.instance_7.setTransform(192.95,25.65,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).wait(32).to({y:23.25},3).wait(6).to({y:28.05},3,cjs.Ease.quadInOut).to({y:25.65},4,cjs.Ease.quadInOut).wait(5).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:202.65,y:25.75},13,cjs.Ease.quadOut).to({regX:4.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:163.2,y:25.1,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(239));

	// gallon_3
	this.instance_8 = new lib.GALLON();
	this.instance_8.setTransform(164.1,25.65,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).wait(27).to({y:23.25},3).wait(6).to({y:28.05},3,cjs.Ease.quadInOut).to({y:25.65},4,cjs.Ease.quadInOut).wait(8).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:164.15,y:25.75},13,cjs.Ease.quadOut).to({regX:4.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:153.6,y:25.1,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(239));

	// gallon_2
	this.instance_9 = new lib.GALLON();
	this.instance_9.setTransform(135.25,25.65,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({_off:false},0).wait(22).to({y:23.25},3).wait(6).to({y:28.05},3,cjs.Ease.quadInOut).to({y:25.65},4,cjs.Ease.quadInOut).wait(11).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:125.65,y:25.75},13,cjs.Ease.quadOut).to({regX:6.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:144.05,y:25.1,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(239));

	// gallon_1
	this.instance_10 = new lib.GALLON();
	this.instance_10.setTransform(106.4,25.65,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(44).to({_off:false},0).wait(17).to({y:23.25},3).wait(6).to({y:28.05},3,cjs.Ease.quadInOut).to({y:25.65},4,cjs.Ease.quadInOut).wait(14).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:87.15,y:25.75},13,cjs.Ease.quadOut).to({regX:4.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:134.45,y:25.1,alpha:0},10,cjs.Ease.quadInOut).to({_off:true},1).wait(239));

	// GALLON_15_anim
	this.instance_11 = new lib.GALLON15anim();
	this.instance_11.setTransform(10.65,-74);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(177).to({_off:false},0).wait(177));

	// GALLON_15_anim_4
	this.instance_12 = new lib.GALLON15anim();
	this.instance_12.setTransform(10.65,-74);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(178).to({_off:false},0).wait(1).to({y:-100},17,cjs.Ease.quadInOut).wait(158));

	// GALLON_15_anim_3
	this.instance_13 = new lib.GALLON15anim();
	this.instance_13.setTransform(10.65,-74);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(179).to({_off:false},0).wait(1).to({y:-126},17,cjs.Ease.quadInOut).wait(157));

	// GALLON_15_anim_2
	this.instance_14 = new lib.GALLON15anim();
	this.instance_14.setTransform(10.65,-74);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(180).to({_off:false},0).wait(1).to({y:-152},17,cjs.Ease.quadInOut).wait(156));

	// GALLON_15_anim_1
	this.instance_15 = new lib.GALLON15anim();
	this.instance_15.setTransform(10.65,-74);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(181).to({_off:false},0).wait(1).to({y:-178},17,cjs.Ease.quadInOut).wait(155));

	// GALLON_15_anim_6
	this.instance_16 = new lib.GALLON15anim();
	this.instance_16.setTransform(10.65,-74);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(178).to({_off:false},0).wait(1).to({y:-48},17,cjs.Ease.quadInOut).wait(158));

	// GALLON_15_anim_7
	this.instance_17 = new lib.GALLON15anim();
	this.instance_17.setTransform(10.65,-74);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(179).to({_off:false},0).wait(1).to({y:-22},17,cjs.Ease.quadInOut).wait(157));

	// GALLON_15_anim_8
	this.instance_18 = new lib.GALLON15anim();
	this.instance_18.setTransform(10.65,-74);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(180).to({_off:false},0).wait(1).to({y:4},17,cjs.Ease.quadInOut).wait(156));

	// GALLON_15_anim_9
	this.instance_19 = new lib.GALLON15anim();
	this.instance_19.setTransform(10.65,-74);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(181).to({_off:false},0).wait(1).to({y:30},17,cjs.Ease.quadInOut).wait(155));

	// HEAD0
	this.instance_20 = new lib.Tween5("synched",0);
	this.instance_20.setTransform(-88,25);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween6("synched",0);
	this.instance_21.setTransform(160,21.95);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({_off:false},0).to({_off:true,x:160,y:21.95},8,cjs.Ease.quadOut).wait(345));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},8,cjs.Ease.quadOut).wait(27).to({startPosition:0},0).to({x:403},8,cjs.Ease.quadIn).to({_off:true},1).wait(309));

	// HEAD1
	this.instance_22 = new lib.HEAD1();
	this.instance_22.setTransform(-15,101.5,1,1,0,0,0,120,76.9);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(106).to({_off:false},0).to({x:280},8,cjs.Ease.quadOut).wait(55).to({x:569,y:101.85},13,cjs.Ease.quadIn).to({_off:true},5).wait(167));

	// BKGD_DLime
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8E659").s().p("A4/P8IAA/3MAx/AAAIAAf3g");
	this.shape_1.setTransform(160,48);

	this.instance_23 = new lib.Tween3("synched",0);
	this.instance_23.setTransform(160,48,1.0667,1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_23}]},178).to({state:[{t:this.instance_23}]},13).to({state:[]},1).to({state:[]},159).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(178).to({_off:false},0).to({y:302.5},13,cjs.Ease.quadIn).to({_off:true},1).wait(162));

	// BKGD_AWhite
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F3E8").s().p("A4/TiMAAAgnDMAx/AAAMAAAAnDg");
	this.shape_2.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},351).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-239.3,-75,827.5999999999999,479.5);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2F49D00C20C940BA9B927F9153DA0B39'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;