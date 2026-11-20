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


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#161616").s().p("Ah3ByQgvgrAAhHQAAhFAwgrQAugrBJAAQBKAAAtAqQAvArAABGQAABFgwAsQguArhKAAQhJAAgtgqgAgig6QgKAQAAAkIAAAOQAAAjAKAQQALAQAXAAQAYAAALgQQAKgRAAgjIAAgOQAAgjgKgQQgLgQgYAAQgXAAgLAQg");
	this.shape.setTransform(112.45,-7.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("Ag5CWIAAjcIhGAAIAAhOID/AAIAABOIhGAAIAADcg");
	this.shape_1.setTransform(83.25,-7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AhnB6QgkgegCgqIBWAAQAJAnAwAAQAYAAAAgRQAAgIgRgGIgmgLQgxgNgXgPQgkgYAAgpQAAgxAngeQAngeA+AAQBAAAAjAeQAfAbACAvIhWAAQgEgTgJgIQgKgKgYAAQgWAAAAATQAAAJASAHIAqAMQAvALAWAPQAhAXAAAqQAAAxglAdQgmAchBAAQhBAAgogig");
	this.shape_2.setTransform(47.375,-7.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AiGCWIAAkqICNAAQBEgBAeAYQAeAYAAA0QAAAxghAbQglAhhFAAIgNAAIAABagAgRACIAIAAQAWgBAIgOQAGgLAAgZQAAglglAAIgHAAg");
	this.shape_3.setTransform(19.275,-7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("Ag5CWIAAkqIB0AAIAAEqg");
	this.shape_4.setTransform(-2,-7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("Ag6CWIAAjcIhFAAIAAhOID/AAIAABOIhGAAIAADcg");
	this.shape_5.setTransform(-22.4,-7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("Ag6CWIAAjcIhEAAIAAhOID9AAIAABOIhFAAIAADcg");
	this.shape_6.setTransform(-56.85,-7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("Ah8CWIAAkqID3AAIAABKIiEAAIAAAlIBGAAIAABLIhGAAIAAAjICFAAIAABNg");
	this.shape_7.setTransform(-83,-7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("Ah2ByQgigoAAhDQAAhOAqgqQAqgrBNAAQBBAAAkAiQAhAfAGA1IhoAAQgDgjghABQgXgBgKAVQgKASAAApIAAAHQAABHAwAAQAnABABghIgkAAIAAg+ICHAAIAACeIhlAAIAAggQgVAog4gBQg6ABgjgrg");
	this.shape_8.setTransform(-112.825,-7.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-146.5,-43.1,293,67.4), null);


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
	this.shape.graphics.f("#161616").s().p("AAVCBIAAh7IgoAAIAAB7IgfAAIAAkBIAfAAIAABvIAoAAIAAhvIAeAAIAAEBg");
	this.shape.setTransform(72.25,84.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AgNCBIAAjoIgcAAIAAgZIBUAAIAAAZIgbAAIAADog");
	this.shape_1.setTransform(61.45,84.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAfCBIg5iwIACBAIAABwIgcAAIAAkBIAXAAIA6CvIgDhKIAAhlIAbAAIAAEBg");
	this.shape_2.setTransform(50.425,84.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AgdB7QgMgIgEgRQgFgRAAgaIAAhxQAAgWAFgQQAEgRALgJQAMgJATAAQAPAAALAFQAJAFAFAKQAGAJACAOQACANAAARIAABxQAAAagEARQgFARgLAIQgLAJgTAAQgTAAgLgJgAgPheQgFALAAAYIAAByQAAATACALQABAMAFAEQAFAFAIAAQAIAAAEgFQAEgFACgLQACgLAAgTIAAhyQAAgYgEgLQgDgLgNAAQgLAAgFALg");
	this.shape_3.setTransform(37.1,84.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAwCBIAAhiIADhfIgoDBIgUAAIgojBIACBfIAABiIgaAAIAAkBIAjAAIAnDNIAljNIAkAAIAAEBg");
	this.shape_4.setTransform(21.75,84.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AgsCBIA/kBIAbAAIhAEBg");
	this.shape_5.setTransform(7.95,84.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgYB/QgKgHgFgJQgFgLgCgOQgCgOAAgRIAAgZIAeAAIAAAaQAAAaADAMQAEAMAMAAQAJAAAEgEQAEgEABgKIABgYQAAgRgFgNQgHgMgKgLIgRgQIgOgRQgHgJgEgLQgFgLgBgPQAAgTAFgPQAEgOAKgHQALgIAUAAQAPAAAKAGQAJAFAFAKQAEAKACAOIABAeIAAAQIgcAAIAAgSIgBgaQgCgLgEgFQgEgFgHAAQgHAAgEADQgFAEgCAHQgCAIAAAMQAAAKACAGQADAIAFAFIALANIARATQAOAOAKARQAIASABAYQgBAWgEAPQgEAQgLAHQgKAJgVAAQgOAAgKgFg");
	this.shape_6.setTransform(-2.3,84.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AAfCBIg5iwIACBAIAABwIgcAAIAAkBIAXAAIA6CvIgDhKIAAhlIAbAAIAAEBg");
	this.shape_7.setTransform(-14.925,84.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AgdB7QgMgIgEgRQgFgRAAgaIAAhxQAAgWAEgQQAFgRALgJQAMgJATAAQAPAAALAFQAJAFAFAKQAGAJACAOQACANAAARIAABxQAAAagEARQgFARgLAIQgLAJgTAAQgTAAgLgJgAgPheQgFALAAAYIAAByQAAATACALQACAMAEAEQAFAFAIAAQAIAAAEgFQAEgFACgLQACgLAAgTIAAhyQAAgYgEgLQgDgLgNAAQgLAAgFALg");
	this.shape_8.setTransform(-28.25,84.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AgmCBIAAkBIAeAAIAADoIAvAAIAAAZg");
	this.shape_9.setTransform(-38.3,84.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161616").s().p("AgmCBIAAkBIAeAAIAADoIAvAAIAAAZg");
	this.shape_10.setTransform(-47.45,84.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("AAfCBIgIgxIgtAAIgIAxIgcAAIAnkBIAjAAIArEBgAAUA3IgUiHIgBAAIgSCHIAnAAg");
	this.shape_11.setTransform(-59.05,84.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("AglBxQgNgTAAgqIAAhrQAAgRADgNQACgOAHgLQAFgKAKgFQALgFAOAAQAQAAAKAFQAJAGAGAJQAFALABAOQACANAAARIAAAVIgeAAIAAgiQAAgSgDgJQgEgKgMABQgMAAgEAKQgFAKAAAcIAABrQAAAeAEANQAEAMAMAAQANAAAEgMQAFgOAAgeIAAghIgVAAIAAgWIAxAAIAACGIgQAAIgFgUQgDALgJAGQgKAGgLgBQgXAAgLgSg");
	this.shape_12.setTransform(-71.6,84.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161616").s().p("Aj0EDQhWhYAAimQAAilBZhdQBZhdCfAAQCcAABUBXQBUBZAACmQAACmhWBdQhYBcidAAQifAAhVhYgAgtihQgOAVAAA+IAACcQAAA+AOAVQANAUAjAAQAjAAANgUQAOgWAAg9IAAicQAAg+gOgVQgNgUgjAAQgjAAgNAUg");
	this.shape_13.setTransform(57.35,33.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#161616").s().p("AkpBqIDMAAQAIBDBGAAQBLAAAAhGIAAgBQAAhIhLAAQghAAgXAPQgHAHgVAVIjEgsIBYlwIHVAAIAACvIk/AAIgZBZQA7gqBeAAQBtAAA7A4QA7A6AABkQAADzkpAAQkqAAAAjqg");
	this.shape_14.setTransform(-8.95,34.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#161616").s().p("AgdFMIAAmXQhqB0hPAeIAAjBQBXgcBAg+QA9g7AMg8IDNAAIAAKXg");
	this.shape_15.setTransform(-65.25,33.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-91.5,-43.1,195,146.9), null);


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
	this.shape.graphics.f("#161616").s().p("AgMCBIAAhtIgtiUIAdAAIAeBpIAAAAIAahpIAfAAIgqCUIAABtg");
	this.shape.setTransform(207.8,104.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AAfCBIgIgxIgtAAIgHAxIgdAAIAnkBIAjAAIArEBgAATA3IgTiHIgBAAIgSCHIAmAAg");
	this.shape_1.setTransform(196.9,104.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AgxCBIAAkBIAwAAQAUAAALAIQALAJAFAPQAEAQAAAWIAABxQAAAagFAQQgFAQgMAIQgLAIgTAAgAgTBoIAQAAQAHAAAFgDQAGgEACgJQADgLAAgSIAAh2QAAgYgGgKQgFgLgMAAIgQAAg");
	this.shape_2.setTransform(184.425,104.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AAfCBIgIgxIgtAAIgIAxIgcAAIAnkBIAjAAIArEBgAAUA3IgUiHIgBAAIgSCHIAnAAg");
	this.shape_3.setTransform(165.5,104.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AgYB/QgJgHgGgKQgFgKgCgOQgCgPAAgQIAAgaIAeAAIAAAaQgBAbAEAMQAEAMAMAAQAJAAAEgEQAFgFAAgIIABgZQAAgRgFgMQgHgNgKgMIgRgQIgOgQQgHgJgFgLQgEgLAAgPQAAgTAEgPQAEgNALgJQAKgHAUAAQAPAAAKAGQAJAFAFAKQAFAKABANIABAfIAAAPIgdAAIAAgRIAAgaQgCgKgEgGQgDgFgIAAQgHAAgEADQgFAEgCAIQgDAHABAMQgBAKADAHQADAGAFAGIALAOIARASQAOAOAKARQAIATABAXQAAAWgFAPQgEAQgKAIQgLAIgVAAQgOAAgKgFg");
	this.shape_4.setTransform(147.75,104.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AAfCBIg5iwIACBAIAABwIgcAAIAAkBIAXAAIA6CvIgDhKIAAhlIAbAAIAAEBg");
	this.shape_5.setTransform(135.125,104.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgdB8QgLgJgFgRQgFgSAAgZIAAhxQAAgWAFgQQAEgRALgJQAMgJATAAQAQAAAKAFQAKAGAEAJQAGAKACANQACAOAAAQIAABxQAAAZgEASQgFARgLAJQgLAIgTAAQgTAAgLgIgAgPheQgFALABAXIAABzQAAATABALQABALAFAFQAFAFAIAAQAIAAAEgFQAEgFACgLQACgLAAgTIAAhzQAAgXgEgLQgEgLgMAAQgLAAgFALg");
	this.shape_6.setTransform(121.8,104.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AgmCBIAAkBIAeAAIAADoIAvAAIAAAZg");
	this.shape_7.setTransform(111.75,104.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AgmCBIAAkBIAfAAIAADoIAuAAIAAAZg");
	this.shape_8.setTransform(102.6,104.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AAfCBIgIgxIgtAAIgIAxIgcAAIAnkBIAjAAIArEBgAAUA3IgUiHIgBAAIgSCHIAnAAg");
	this.shape_9.setTransform(91,104.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161616").s().p("AglBxQgMgSAAgrIAAhrQAAgRACgOQADgOAGgJQAFgLALgFQAJgFAPgBQAQABAKAFQAJAGAGAKQAEAJACAOQABAOABASIAAAUIgdAAIAAgiQgBgTgEgJQgDgJgMAAQgMAAgEALQgFALAAAbIAABrQAAAeAEAMQAEAOAMAAQANAAAEgOQAFgMAAgfIAAghIgVAAIAAgXIAxAAIAACHIgQAAIgEgUQgFALgJAGQgJAGgLgBQgWAAgMgSg");
	this.shape_10.setTransform(78.45,104.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("AkpBqIDMAAQAIBDBGAAQBLAAAAhGIAAgBQAAhIhLAAQghAAgWAPQgIAHgVAVIjEgsIBYlwIHVAAIAACvIk/AAIgZBZQA6gqBfAAQBsAAA8A4QA7A5AABlQAADzkpAAQkqAAAAjqg");
	this.shape_11.setTransform(33.4,86.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("AhlBgQgngkAAg8QAAg6AoglQAngkA/AAQA9AAAmAjQAoAlAAA7QAAA7goAkQgoAlg9AAQg+AAgngkgAgcgxQgJAOAAAeIAAAMQAAAdAJANQAIAOAUABQAVgBAIgOQAJgNAAgfIAAgLQAAgegJgNQgIgOgVABQgUgBgIAOg");
	this.shape_12.setTransform(205.95,30.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161616").s().p("AgxB+IAAi5Ig5AAIAAhCIDWAAIAABCIg7AAIAAC5g");
	this.shape_13.setTransform(181.1,30.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#161616").s().p("AhxB+IAAj7IB3AAQA5AAAaAUQAZAUAAAsQAAApgcAXQgfAcg6AAIgLAAIAABLgAgOACIAHAAQASgCAHgLQAFgJAAgVQAAgggfAAIgGAAg");
	this.shape_14.setTransform(152.125,30.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#161616").s().p("AhYBnQgbgZAAg5IAAiVIBjAAIAACXQgBAWAIAIQAGAIASAAQAQAAAHgHQAGgHABgTIAAicIBIAAIAACcQAAA0gaAZQgbAYg5AAQhCAAgdgag");
	this.shape_15.setTransform(126.85,30.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#161616").s().p("AhoB+IAAj7IDQAAIAAA/IhvAAIAAAfIA7AAIAAA/Ig7AAIAAAeIBwAAIAABAg");
	this.shape_16.setTransform(96.575,30.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#161616").s().p("AgtB+Ihbj7IBnAAIAwCOIAwiOIBKAAIhcD7g");
	this.shape_17.setTransform(71.525,30.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#161616").s().p("AAhB+IgQg0Ig/AAIgPA0IhKAAIBUj7IBqAAIBRD7gAAHAZIgShDIgXBDIApAAg");
	this.shape_18.setTransform(48.475,30.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#161616").s().p("AhXBnQgegZgCgkIBJAAQAHAhAoAAQAVAAAAgOQAAgHgOgGIghgJQgogKgUgNQgfgUAAgjQAAgpAigZQAhgaAzAAQA2AAAeAaQAaAXACAnIhIAAQgEgQgHgHQgJgJgUAAQgTAAAAAQQAAAJAQAGQAFACAeAHQAnAJATANQAcATAAAkQAAAqggAYQgfAYg3AAQg3AAgigdg");
	this.shape_19.setTransform(23.425,30.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,239.9,153.9), null);


(lib.DbDlogohorizsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// DbD_logo_horiz_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AhGBkIAAjHIA+AAQAoAAATAOQAUAPAAAfQAAAWgJANQgJAMgSAIQgTAGgaAAIgmAAIAABOgAgwAEIAmAAQAVAAAMgEQAOgFAFgJQAHgJAAgQQAAgWgOgLQgNgJgeAAIgoAAg");
	this.shape.setTransform(198.55,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AgzBbQgVgMgMgYQgMgXAAggQAAgeAMgYQAMgXAWgNQAWgNAdAAQAeABAUAMQAVAMANAZQAMAYAAAeQAAAfgMAXQgLAYgXANQgYAMgbAAQgeAAgVgNgAgmhJQgRAJgJAUQgKASAAAaIAAABQAAAZAJAUQAJASARALQAQAKAXAAQAXAAAQgKQARgKAJgTQAJgSAAgaIAAgCQAAgZgJgTQgJgTgRgKQgRgKgWAAQgXAAgPAKg");
	this.shape_1.setTransform(179.025,10.4991);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAzBlIAAgGQgFgmgPgVQgQgUggAAIgiAAIAABVIgWAAIAAjJIBEAAQAYAAARAGQARAGAHALQAJANgBAQQAAAWgMAPQgNAOgZAEQARAEAMAMQALALAGASQAHAQADAZIAAAGIAAACgAgzgCIAoAAQAdAAAOgMQAOgMABgUQAAgTgNgIQgLgIgbAAIgvAAg");
	this.shape_2.setTransform(160.3,10.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhTBlIAAjJIBBAAQAzAAAaAZQAZAaAAAxQAAAzgaAYQgaAYg1ACgAg9BRIApAAQAaAAATgIQASgJAJgSQAJgRAAgcIAAgBQAAgcgIgSQgJgSgSgIQgSgJgaAAIgrAAg");
	this.shape_3.setTransform(141.65,10.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AgTBkIAAhaIhIhtIAsAAIAwBNIAyhNIApAAIhJBtIAABag");
	this.shape_4.setTransform(116,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AhOBlIAAjJIBQAAQAWAAAQAGQAOAHAJALQAIANAAARQAAAOgHALQgIAKgOAGQARAFAKAMQAKANAAARQAAATgJAOQgIANgRAGQgSAHgZAAgAgoBFIAoAAQASAAALgHQAJgHAAgPQAAgOgJgIQgKgHgTAAIgoAAgAgogSIAkAAQASAAAIgHQAJgGAAgMQABgNgHgGQgIgGgPAAIgqAAg");
	this.shape_5.setTransform(99.45,10.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AhaBkIAAjHIBeAAQAvAAAUAQQAUAPAAAjQAAAVgKAQQgKARgWAKQgVAJgfABIgIAAIAAA7gAgLABIAFAAQAJAAAHgEQAFgEABgIQACgHAAgLQAAgMgGgHQgGgGgMAAIgFAAg");
	this.shape_6.setTransform(74.525,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("Ag6BdQgZgOgPgXQgOgYAAgfQAAgeAPgZQAOgYAagNQAZgNAhAAQAgAAAZANQAaANAOAYQAPAZgBAdQAAAfgOAYQgOAZgbAMQgbANgeAAQghAAgZgMgAgRgtQgHAGgDAJQgDALAAAQIAAAIQAAARADAJQADAKAHAFQAHAFAKAAQALAAAGgFQAGgEAEgLQADgKAAgQIAAgJQAAgQgDgKQgDgKgHgEQgGgFgLAAQgKAAgHAEg");
	this.shape_7.setTransform(52.8531,10.4991);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AARBlIgBgQQgDgcgFgOQgGgOgLAAIgIAAIAABIIhNAAIAAjJIBeAAQAkAAATAHQATAGAIAMQAHALAAAQQAAAWgOANQgOAMgZAEQATABALAIQAMAJAEAMQAGAMAEAVIADAdIAAAGgAgRgEQAOAAAJgHQAKgHgBgOQABgNgIgHQgHgGgOAAIgEAAg");
	this.shape_8.setTransform(31.75,10.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AhoBkIAAjHIBjAAQAygBAdAYQAfAWAAA2QAAA1ggAYQgfAXgxAAgAgZA1IANAAQANAAAIgEQAIgEADgMQAEgKAAgWIAAgBQAAgSgEgNQgDgMgIgEQgIgFgNAAIgNAAg");
	this.shape_9.setTransform(10.475,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.7,21);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CTA_TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AAWCBIgBgUQgEgigGgRQgIgVgPAAIgJAAIAABcIhkAAIAAkBIB5AAQBDAAAbATQAUAPAAAgQAAA2hEAMQAjADARAWQAOASAGAmIAEAsgAgVgFIAIgBQAhgEAAgfQAAgigmABIgDAAg");
	this.shape.setTransform(103.85,42.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhrCBIAAkBIDVAAIAABAIhxAAIAAAgIA8AAIAABBIg8AAIAAAeIBzAAIAABCg");
	this.shape_1.setTransform(79.05,42.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AgxCBIAAi+Ig9AAIAAhDIDdAAIAABDIg8AAIAAC+g");
	this.shape_2.setTransform(55.8,42.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AAhCBIgQg1IhBAAIgPA1IhMAAIBWkBIBtAAIBUEBgAAHAaIgThGIgXBGIAqAAg");
	this.shape_3.setTransform(34.975,42.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AApCBIgoiFIgmCFIhRAAIhFkBIBdAAIAdB/IAjh/IBRAAIAlB/IAch/IBIAAIhGEBg");
	this.shape_4.setTransform(6.875,42.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AhrCBIAAkBIDVAAIAABAIhxAAIAAAgIA8AAIAABBIg8AAIAAAeIBzAAIAABCg");
	this.shape_5.setTransform(-30.2,42.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AguCBIhekBIBqAAIAyCSIAxiSIBMAAIhfEBg");
	this.shape_6.setTransform(-56.475,42.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AAhCBIgQg1IhBAAIgPA1IhMAAIBWkBIBtAAIBUEBgAAHAaIgThGIgXBGIAqAAg");
	this.shape_7.setTransform(-77.875,42.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AhZBqQgggagBglIBLAAQAHAjAqAAQAUAAAAgPQAAgIgOgFIghgKQgqgKgUgOQgggUAAgkQABgqAhgaQAigbA2ABQA3AAAeAaQAcAYABAoIhLAAQgDgQgIgIQgJgIgUAAQgTAAAAAQQAAAIAPAHIAlAKQAoAJATANQAdAUAAAkQAAArggAZQghAZg4AAQg5gBgigdg");
	this.shape_8.setTransform(-103.4,42.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CTA_BKGD
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#171717").ss(2,1,1).p("AyHjgMAkPAAAQCMAAAACMIAACpQAACMiMAAMgkPAAAQiMAAAAiMIAAipQAAiMCMAAg");
	this.shape_9.setTransform(0.05,41.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F3E8").s().p("AyHDhQiMAAAAiMIAAipQAAiMCMAAMAkPAAAQCMAAAACMIAACpQAACMiMAAg");
	this.shape_10.setTransform(0.05,41.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-146.5,11.1,293,58.99999999999999), null);


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
	this.instance = new lib.DbDlogohorizsvg("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,102.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-102.8,-10.5,205.7,21), null);


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
(lib.DbDLeak300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [191,252];
	// timeline functions:
	this.frame_191 = function() {
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
	this.frame_252 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(61).call(this.frame_252).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#171717").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(253));

	// FADE
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(150,148);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(150,148);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},246).to({state:[{t:this.instance_1}]},5).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246).to({_off:false},0).to({_off:true,alpha:1},5).wait(2));

	// LOGO
	this.instance_2 = new lib.LOGO();
	this.instance_2.setTransform(150,216);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).wait(64));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(154.9,121.8,0.8056,0.8056,0,0,0,6.1,30.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(64));

	// HEAD3
	this.instance_4 = new lib.HEAD3();
	this.instance_4.setTransform(154.9,121.8,0.8056,0.8056,0,0,0,6.1,30.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(189).to({_off:false},0).wait(64));

	// HEAD2
	this.instance_5 = new lib.HEAD2();
	this.instance_5.setTransform(150,114.75,0.5,0.5,0,0,0,0,35.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).to({regX:0.1,scaleX:1.08,scaleY:1.08,x:150.05,y:115,alpha:1},5).to({scaleX:0.9464,scaleY:0.9464,x:150,y:114.95},3,cjs.Ease.quadInOut).wait(1).to({regX:1.8,regY:48.4,scaleX:0.9865,scaleY:0.9865,x:151.7,y:127.9},0).wait(1).to({regX:0,regY:35.3,scaleX:1,scaleY:1,x:150,y:115},0).wait(34).to({regX:0.1,scaleX:2.1486,scaleY:2.1486,x:150.2,y:115.7,alpha:0},6,cjs.Ease.quadIn).wait(65));

	// HEAD2_bkgd
	this.instance_6 = new lib.HEAD2bkgd();
	this.instance_6.setTransform(150,120.75,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(138).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,x:149.95,y:128,alpha:1},5).to({regX:0.1,regY:0.1,scaleX:0.9464,scaleY:0.9464,x:150,y:126.35},3,cjs.Ease.quadInOut).wait(1).to({regX:0,regY:0,scaleX:0.9865,scaleY:0.9865,x:149.9,y:126.7745},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:127},0).wait(34).to({scaleX:2.1486,scaleY:2.1486,y:141.45},6,cjs.Ease.quadIn).wait(65));

	// gallon_5
	this.instance_7 = new lib.GALLON();
	this.instance_7.setTransform(238.7,144.6,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({_off:false},0).wait(37).to({y:142.2},3).wait(6).to({y:147},3,cjs.Ease.quadInOut).to({y:144.6},4,cjs.Ease.quadInOut).wait(2).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:258.05,y:144.7},13,cjs.Ease.quadOut).to({regX:6.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:169.35,y:125.2},10,cjs.Ease.quadInOut).to({_off:true},1).wait(138));

	// gallon_4
	this.instance_8 = new lib.GALLON();
	this.instance_8.setTransform(209.85,144.6,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).wait(32).to({y:142.2},3).wait(6).to({y:147},3,cjs.Ease.quadInOut).to({y:144.6},4,cjs.Ease.quadInOut).wait(5).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:219.55,y:144.7},13,cjs.Ease.quadOut).to({regX:4.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:159.75,y:125.2},10,cjs.Ease.quadInOut).to({_off:true},1).wait(138));

	// gallon_3
	this.instance_9 = new lib.GALLON();
	this.instance_9.setTransform(181,144.6,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).wait(27).to({y:142.2},3).wait(6).to({y:147},3,cjs.Ease.quadInOut).to({y:144.6},4,cjs.Ease.quadInOut).wait(8).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:181.05,y:144.7},13,cjs.Ease.quadOut).to({regX:4.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:150.15,y:125.2},10,cjs.Ease.quadInOut).to({_off:true},1).wait(138));

	// gallon_2
	this.instance_10 = new lib.GALLON();
	this.instance_10.setTransform(152.15,144.6,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(42).to({_off:false},0).wait(22).to({y:142.2},3).wait(6).to({y:147},3,cjs.Ease.quadInOut).to({y:144.6},4,cjs.Ease.quadInOut).wait(11).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:142.55,y:144.7},13,cjs.Ease.quadOut).to({regX:6.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:140.6,y:125.2},10,cjs.Ease.quadInOut).to({_off:true},1).wait(138));

	// gallon_1
	this.instance_11 = new lib.GALLON();
	this.instance_11.setTransform(123.3,144.6,0.073,0.073,0,0,0,1.4,1.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).wait(17).to({y:142.2},3).wait(6).to({y:147},3,cjs.Ease.quadInOut).to({y:144.6},4,cjs.Ease.quadInOut).wait(14).to({regX:1.6,regY:2,scaleX:0.0974,scaleY:0.0974,x:104.05,y:144.7},13,cjs.Ease.quadOut).to({regX:4.2,regY:4.2,scaleX:0.0242,scaleY:0.0242,x:131,y:125.2},10,cjs.Ease.quadInOut).to({_off:true},1).wait(138));

	// GALLON_15_anim
	this.instance_12 = new lib.GALLON15anim();
	this.instance_12.setTransform(0.65,26);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115).to({_off:false},0).wait(138));

	// GALLON_15_anim_4
	this.instance_13 = new lib.GALLON15anim();
	this.instance_13.setTransform(0.65,26);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(116).to({_off:false},0).wait(1).to({y:0},17,cjs.Ease.quadInOut).wait(119));

	// GALLON_15_anim_3
	this.instance_14 = new lib.GALLON15anim();
	this.instance_14.setTransform(0.65,26);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(117).to({_off:false},0).wait(1).to({y:-26},17,cjs.Ease.quadInOut).wait(118));

	// GALLON_15_anim_2
	this.instance_15 = new lib.GALLON15anim();
	this.instance_15.setTransform(0.65,26);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(118).to({_off:false},0).wait(1).to({y:-52},17,cjs.Ease.quadInOut).wait(117));

	// GALLON_15_anim_1
	this.instance_16 = new lib.GALLON15anim();
	this.instance_16.setTransform(0.65,26);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(119).to({_off:false},0).wait(1).to({y:-78},17,cjs.Ease.quadInOut).wait(116));

	// GALLON_15_anim_6
	this.instance_17 = new lib.GALLON15anim();
	this.instance_17.setTransform(0.65,26);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(116).to({_off:false},0).wait(1).to({y:52},17,cjs.Ease.quadInOut).wait(119));

	// GALLON_15_anim_7
	this.instance_18 = new lib.GALLON15anim();
	this.instance_18.setTransform(0.65,26);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(117).to({_off:false},0).wait(1).to({y:78},17,cjs.Ease.quadInOut).wait(118));

	// GALLON_15_anim_8
	this.instance_19 = new lib.GALLON15anim();
	this.instance_19.setTransform(0.65,26);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(118).to({_off:false},0).wait(1).to({y:104},17,cjs.Ease.quadInOut).wait(117));

	// GALLON_15_anim_9
	this.instance_20 = new lib.GALLON15anim();
	this.instance_20.setTransform(0.65,26);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(119).to({_off:false},0).wait(1).to({y:130},17,cjs.Ease.quadInOut).wait(116));

	// a
	this.instance_21 = new lib.GALLON5anim();
	this.instance_21.setTransform(97.4,125.1,0.5,0.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(115).to({_off:false},0).to({scaleX:1,scaleY:1,x:52.4},15,cjs.Ease.quadIn).to({x:51.1},2).to({x:52.4},2).wait(119));

	// b
	this.instance_22 = new lib.GALLON5anim();
	this.instance_22.setTransform(150.05,125.1,0.5,0.5,0,0,0,0.1,0);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(115).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:150},15,cjs.Ease.quadIn).wait(123));

	// c
	this.instance_23 = new lib.GALLON5anim();
	this.instance_23.setTransform(201.35,125.1,0.5,0.5,0,0,0,0.1,0);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(115).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:246.35},15,cjs.Ease.quadIn).to({x:247.75},2).to({x:246.35},2).wait(119));

	// HEAD0
	this.instance_24 = new lib.Tween5("synched",0);
	this.instance_24.setTransform(150,125,5,5);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween6("synched",0);
	this.instance_25.setTransform(150,20.95);

	this.instance_26 = new lib.Tween1("synched",0);
	this.instance_26.setTransform(150,20.95);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween2("synched",0);
	this.instance_27.setTransform(150,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},8).to({state:[{t:this.instance_25}]},18).to({state:[{t:this.instance_25}]},88).to({state:[{t:this.instance_26}]},4).to({state:[{t:this.instance_27}]},13).to({state:[]},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,y:20.95,alpha:1},8).wait(244));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(119).to({_off:false},0).to({_off:true,y:-20},13,cjs.Ease.quadIn).wait(121));

	// HEAD1
	this.instance_28 = new lib.HEAD1();
	this.instance_28.setTransform(157.1,152.5,1,1,0,0,0,120,76.9);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(27).to({_off:false},0).to({alpha:1},8).wait(80).to({y:407},13,cjs.Ease.quadIn).to({_off:true},5).wait(120));

	// BKGD_DLime
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8E659").s().p("A3bP8IAA/3MAu3AAAIAAf3g");
	this.shape_1.setTransform(150,148);

	this.instance_29 = new lib.Tween3("synched",0);
	this.instance_29.setTransform(150,148);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_1}]},27).to({state:[{t:this.shape_1}]},88).to({state:[{t:this.instance_29}]},4).to({state:[{t:this.instance_29}]},13).to({state:[]},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(119).to({_off:false},0).to({y:402.5},13,cjs.Ease.quadIn).to({_off:true},1).wait(120));

	// BKGD_AWhite
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F3E8").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_2.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(253));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-277.5,72.2,1005,432.3);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 300,
	height: 250,
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