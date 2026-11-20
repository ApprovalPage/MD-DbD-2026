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


(lib.HEAD3b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzXDcIAAm3MAmvAAAIAAG3g");
	mask.setTransform(220,3.05);

	// TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AhgBbQglgiAAg4QABg4AlgiQAmgjA6AAQA7AAAlAiQAkAjABA3QgBA3glAkQgmAig6AAQg7AAglgigAgbguQgIANAAAcIAAALQAAAdAIAMQAJANASAAQAUAAAIgNQAIgNAAgdIAAgKQAAgdgIgMQgIgNgUAAQgSAAgJANg");
	this.shape.setTransform(319.45,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhYBcQghgigBg5QABg5AigiQAjgiA6AAQAyAAAeAcQAdAaAFAuIhLAAQgCgPgJgJQgKgJgPgBQgSAAgJANQgHANAAAcIAAAIQAAAdAHANQAIAMASAAQAhAAAEgpIBOAAQgCA3ghAcQgeAZg2AAQg5AAgjghg");
	this.shape_1.setTransform(293,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AguB4IAAjvIBdAAIAADvg");
	this.shape_2.setTransform(274.575,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AAeB4IgnhBIgoBBIhPAAIBSh1IhMh6IBjAAIAgA3IAgg3IBQAAIhLBqIBTCFg");
	this.shape_3.setTransform(256.075,1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_4.setTransform(232.475,1.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("ABAB4IAAivIgsCvIg/AAIgrivIAACvIhEAAIAAjvICJAAIATBWIAShWICHAAIAADvg");
	this.shape_5.setTransform(204.575,1.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AAmB4Iglh8IgjB8IhKAAIhAjvIBVAAIAbB2IAhh2IBKAAIAjB1IAZh1IBCAAIhADvg");
	this.shape_6.setTransform(163.75,1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_7.setTransform(135.725,1.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AAgB4IhUiHIAACHIhEAAIAAjvIBmAAIBHBxIAAhxIBEAAIAADvg");
	this.shape_8.setTransform(111.3,1.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_9.setTransform(80.575,1.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161616").s().p("AgrB4IhWjvIBiAAIAuCHIAtiHIBGAAIhYDvg");
	this.shape_10.setTransform(56.825,1.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_11.setTransform(37.075,1.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161616").s().p("AhTBiQgcgYgCgiIBFAAQAIAgAmAAQATAAAAgPQAAgGgOgFIgegIQgngLgTgMQgcgTAAghQAAgmAfgZQAfgYAyAAQAyAAAcAYQAZAWACAlIhEAAQgEgPgHgGQgJgIgSAAQgRAAAAAPQAAAIAOAFIAiAJQAkAJASAMQAbATAAAhQAAAngeAXQgeAXg0AAQg0AAghgbg");
	this.shape_12.setTransform(13.85,1.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3b, new cjs.Rectangle(96,-18.9,248,44), null);


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
	this.shape.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape.setTransform(80.575,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AgrB4IhWjvIBiAAIAuCHIAtiHIBGAAIhYDvg");
	this.shape_1.setTransform(56.825,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_2.setTransform(37.075,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhTBiQgcgYgCgiIBFAAQAIAgAmAAQATAAAAgPQAAgGgOgFIgegIQgngLgTgMQgcgTAAghQAAgmAfgZQAfgYAyAAQAyAAAcAYQAZAWACAlIhEAAQgEgPgHgGQgJgIgSAAQgRAAAAAPQAAAIAOAFIAiAJQAkAJASAMQAbATAAAhQAAAngeAXQgeAXg0AAQg0AAghgbg");
	this.shape_3.setTransform(13.85,1.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(0,-27.4,351.9,54.8), null);


(lib.HEAD2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtDhIAAnBIXbAAIAAHBg");
	mask.setTransform(167,2.55);

	// TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AgvB4IAAhiIhNiNIBoAAIAfBIIAihIIBQAAIhQCNIAABig");
	this.shape.setTransform(221.1,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_1.setTransform(197.525,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAfB4IhTiHIAACHIhEAAIAAjvIBmAAIBHBxIAAhxIBEAAIAADvg");
	this.shape_2.setTransform(173.1,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhgBbQglgiABg4QgBg4AmgiQAmgjA7AAQA6AAAlAiQAkAjABA3QAAA3gnAkQglAig6AAQg7AAglgigAgbguQgIANAAAcIAAALQAAAdAIAMQAJANASAAQAUAAAIgNQAIgNAAgdIAAgKQAAgdgIgMQgIgNgUAAQgSAAgJANg");
	this.shape_3.setTransform(145.65,1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("ABAB4IAAivIgsCvIg/AAIgrivIAACvIhEAAIAAjvICJAAIATBWIAShWICHAAIAADvg");
	this.shape_4.setTransform(114.725,1.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_5.setTransform(80.575,1.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgrB4IhWjvIBiAAIAuCHIAtiHIBGAAIhYDvg");
	this.shape_6.setTransform(56.825,1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_7.setTransform(37.075,1.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AhTBiQgcgYgCgiIBFAAQAIAgAmAAQATAAAAgPQAAgGgOgFIgegIQgngLgTgMQgcgTAAghQAAgmAfgZQAfgYAyAAQAyAAAcAYQAZAWACAlIhEAAQgEgPgHgGQgJgIgSAAQgRAAAAAPQAAAIAOAFIAiAJQAkAJASAMQAbATAAAhQAAAngeAXQgeAXg0AAQg0AAghgbg");
	this.shape_8.setTransform(13.85,1.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2b, new cjs.Rectangle(92,-19.9,150,45), null);


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

	// TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape.setTransform(80.575,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AgrB4IhWjvIBiAAIAuCHIAtiHIBGAAIhYDvg");
	this.shape_1.setTransform(56.825,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_2.setTransform(37.075,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhTBiQgcgYgCgiIBFAAQAIAgAmAAQATAAAAgPQAAgGgOgFIgegIQgngLgTgMQgcgTAAghQAAgmAfgZQAfgYAyAAQAyAAAcAYQAZAWACAlIhEAAQgEgPgHgGQgJgIgSAAQgRAAAAAPQAAAIAOAFIAiAJQAkAJASAMQAbATAAAhQAAAngeAXQgeAXg0AAQg0AAghgbg");
	this.shape_3.setTransform(13.85,1.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,-27.4,351.9,54.8), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq2DmIAAnLIVtAAIAAHLg");
	mask.setTransform(164.5,3.05);

	// TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AAUB4IgBgTQgDgggGgPQgHgUgOAAIgJAAIAABWIhcAAIAAjvIBwAAQA+AAAYASQATAOAAAeQAAAyg/AKQAhADAPAVQANAQAGAkIAEApgAgUgFIAIAAQAegFAAgcQAAgfgiAAIgEAAg");
	this.shape.setTransform(208.575,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_1.setTransform(185.125,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AguB4IAAiwIg3AAIAAg/IDLAAIAAA/Ig3AAIAACwg");
	this.shape_2.setTransform(162.5,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_3.setTransform(142.125,1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAnB4Igmh8IgjB8IhLAAIhAjvIBXAAIAaB2IAgh2IBLAAIAjB1IAZh1IBDAAIhBDvg");
	this.shape_4.setTransform(115.65,1.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape_5.setTransform(80.575,1.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgrB4IhWjvIBiAAIAuCHIAtiHIBGAAIhYDvg");
	this.shape_6.setTransform(56.825,1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_7.setTransform(37.075,1.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AhTBiQgcgYgCgiIBFAAQAIAgAmAAQATAAAAgPQAAgGgOgFIgegIQgngLgTgMQgcgTAAghQAAgmAfgZQAfgYAyAAQAyAAAcAYQAZAWACAlIhEAAQgEgPgHgGQgJgIgSAAQgRAAAAAPQAAAIAOAFIAiAJQAkAJASAMQAbATAAAhQAAAngeAXQgeAXg0AAQg0AAghgbg");
	this.shape_8.setTransform(13.85,1.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(95,-19.9,139,46), null);


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

	// TYPE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161616").s().p("AhjB4IAAjvIDFAAIAAA8IhpAAIAAAdIA4AAIAAA8Ig4AAIAAAcIBrAAIAAA+g");
	this.shape.setTransform(80.575,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AgrB4IhWjvIBiAAIAuCHIAtiHIBGAAIhYDvg");
	this.shape_1.setTransform(56.825,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AAfB4IgPgxIg8AAIgOAxIhGAAIBQjvIBkAAIBNDvgAAGAXIgRg/IgVA/IAmAAg");
	this.shape_2.setTransform(37.075,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhTBiQgcgYgCgiIBFAAQAIAgAmAAQATAAAAgPQAAgGgOgFIgegIQgngLgTgMQgcgTAAghQAAgmAfgZQAfgYAyAAQAyAAAcAYQAZAWACAlIhEAAQgEgPgHgGQgJgIgSAAQgRAAAAAPQAAAIAOAFIAiAJQAkAJASAMQAbATAAAhQAAAngeAXQgeAXg0AAQg0AAghgbg");
	this.shape_3.setTransform(13.85,1.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,-27.4,351.9,54.8), null);


(lib.HEAD0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#161616").s().p("AgYBUIAAg0IAxAAIAAA0gAgYgfIAAg0IAxAAIAAA0g");
	this.shape.setTransform(49.425,16.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AhVBaQgggiAAg4QAAg2AhgiQAggjA1AAQA1AAAgAiQAgAjAAA2QAAA3ggAjQgiAig0AAQg0AAghgigAgyg+QgTAXAAAnIAAABQAAAnATAXQASAVAgAAQAhAAASgVQAUgXgBgnIAAgBQAAgogSgVQgTgXghAAQgfABgTAVg");
	this.shape_1.setTransform(33.2,13.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AgWB4IAAjHIhIAAIAAgoIC9AAIAAAoIhJAAIAADHg");
	this.shape_2.setTransform(12.375,13.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("AhgAqIAvAAQAEAYAOAKQAMAJAZAAQAWAAAMgIQAMgJAAgRQAAgOgSgHQgKgFgfgGQgngIgRgLQgagRAAggQgBggAZgVQAagVAlAAQArAAAZAVQAaAVAEAnIgvAAQgEgrgvAAQgTAAgMAJQgMAJABAPQAAAPATAIQAJADAiAHQAkAHASAMQAZAQAAAgQAAAigXAVQgZAVgpAAQhcAAgMhSg");
	this.shape_3.setTransform(132.4,-17.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AhZB4IAAjvIBRAAQBhAAAABNQAABOhjgBIghAAIAABVgAgrAAIAhAAQAcAAANgKQAMgJAAgXQAAgVgMgKQgNgJgcAAIghAAg");
	this.shape_4.setTransform(111.85,-17.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AgWB4IAAjvIAsAAIAADvg");
	this.shape_5.setTransform(97.75,-17.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AgWB4IAAjIIhIAAIAAgnIC9AAIAAAnIhJAAIAADIg");
	this.shape_6.setTransform(84.325,-17.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AgWB4IAAjIIhIAAIAAgnIC9AAIAAAnIhJAAIAADIg");
	this.shape_7.setTransform(58.375,-17.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AhXB4IAAjvICrAAIAAAnIh/AAIAAA6IBVAAIAAAmIhVAAIAABAICEAAIAAAog");
	this.shape_8.setTransform(37.65,-17.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#161616").s().p("AhPBbQgdggAAg3QAAg6AfgjQAggiAzAAQAqAAAbAWQAbAWAGApIgvAAQgIgsgwgBQgdAAgTAXQgTAXAAAnIAAAEQABAkARAWQASAVAgAAQAYAAAQgOQAPgNACgUIg2AAIAAgmIBkAAIAAB4IgoAAIAAghQgWAlgvAAQgxAAgeghg");
	this.shape_9.setTransform(14,-17.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD0, new cjs.Rectangle(0,-35.5,151.5,71), null);


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
	this.shape.graphics.f("#161616").s().p("AhxCIIAAkPIDgAAIAABEIh2AAIAAAhIA/AAIAABFIg/AAIAAAgIB4AAIAABFg");
	this.shape.setTransform(49.25,16.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161616").s().p("AAXCIIgCgVQgCgkgIgSQgIgVgQgBIgKAAIAABhIhoAAIAAkPIB/AAQBGAAAcAUQAWAQAAAiQAAA5hIAMQAlADARAXQAPATAHApIAEAugAgXgFIAJgBQAjgFgBggQAAgjgmAAIgFAAg");
	this.shape_1.setTransform(22.55,16.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161616").s().p("AhtBoQgqgnAAhAQAAg/ArgoQArgnBDAAQBCAAAqAmQAqAoAAA/QAABAgrAnQgrAnhDAAQhCAAgqgmgAgfg0QgJAOAAAhIAAAMQAAAgAJAPQAKAPAVAAQAWAAAKgPQAJgPAAghIAAgMQAAgggJgOQgKgPgWAAQgVAAgKAPg");
	this.shape_2.setTransform(-7.675,16.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161616").s().p("ABJCIIAAjGIgzDGIhHAAIgxjGIAADGIhOAAIAAkPICcAAIAWBiIAUhiICbAAIAAEPg");
	this.shape_3.setTransform(-42.8,16.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161616").s().p("AAkCIIhfiaIAACaIhOAAIAAkPIB0AAIBRCAIAAiAIBOAAIAAEPg");
	this.shape_4.setTransform(52.725,-17.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#161616").s().p("AAWCIIgBgVQgCgkgIgSQgIgVgQgBIgKAAIAABhIhpAAIAAkPICAAAQBGAAAcAUQAWAQAAAiQAAA5hIAMQAlADARAXQAPATAHApIAFAugAgXgFIAJgBQAigFABggQAAgjgnAAIgFAAg");
	this.shape_5.setTransform(23.6,-17.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161616").s().p("AAjCIIgQg4IhFAAIgQA4IhQAAIBbkPIByAAIBYEPgAAHAbIgThJIgYBJIArAAg");
	this.shape_6.setTransform(-5.425,-17.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161616").s().p("AhxCIIAAkPIDgAAIAABEIh2AAIAAAhIA/AAIAABFIg/AAIAAAgIB4AAIAABFg");
	this.shape_7.setTransform(-32.65,-17.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#161616").s().p("AhkCIIAAkPIBpAAIAADMIBgAAIAABDg");
	this.shape_8.setTransform(-56.475,-17.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CTA_BKGD
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("Aqdn2IU6AAQB9AAAAB9IAALzQAAB9h9AAI06AAQh8AAAAh9IAArzQAAh9B8AAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqdH2Qh8AAAAh7IAAr0QAAh8B8AAIU6AAQB9AAAAB8IAAL0QAAB7h9AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-80.3,-51.2,160.7,102.5), null);


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


// stage content:
(lib.DbDTips728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [155,252];
	// timeline functions:
	this.frame_155 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(155).call(this.frame_155).wait(97).call(this.frame_252).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#171717").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(253));

	// FADE
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(351.95,44.55,1.4807,0.5952,0,0,0,0.1,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(351.95,44.55,1.4807,0.5952,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},246).to({state:[{t:this.instance_1}]},5).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(246).to({_off:false},0).to({_off:true,alpha:1},5).wait(2));

	// LOGO
	this.instance_2 = new lib.LOGO();
	this.instance_2.setTransform(648,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(253));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(505.2,45.15,0.65,0.65,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,y:45.2},2).to({scaleX:0.65,scaleY:0.65,y:45.15},7).wait(100));

	// HEAD0
	this.instance_4 = new lib.HEAD0();
	this.instance_4.setTransform(-134.1,71.5,0.8056,0.8056,0,0,0,6.1,30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:6.9,scaleX:0.8055,x:12.95},6,cjs.Ease.quadOut).wait(240).to({regX:6.1,scaleX:0.8056,x:12.9},0).to({x:14.9,alpha:0},5).wait(2));

	// HEAD3
	this.instance_5 = new lib.HEAD3();
	this.instance_5.setTransform(159.45,65.55,0.8055,0.8056,0,0,0,6.9,30.4);
	this.instance_5.alpha = 0.1016;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({y:95.55,alpha:1},4,cjs.Ease.quadOut).wait(145));

	// HEAD2
	this.instance_6 = new lib.HEAD2();
	this.instance_6.setTransform(159.45,39.55,0.8055,0.8056,0,0,0,6.9,30.4);
	this.instance_6.alpha = 0.1016;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},0).to({y:69.55,alpha:1},4,cjs.Ease.quadOut).wait(185));

	// HEAD1
	this.instance_7 = new lib.HEAD1();
	this.instance_7.setTransform(159.45,13.55,0.8055,0.8056,0,0,0,6.9,30.4);
	this.instance_7.alpha = 0.1016;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({y:43.55,alpha:1},4,cjs.Ease.quadOut).wait(225));

	// HEADb_blocker_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqGJOIAAybIUOAAIAASbg");
	this.shape_1.setTransform(65.2,45.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},121).wait(132));

	// HEADb_blocker
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8E659").s().p("AnLJOIAAybIOXAAIAASbg");
	this.shape_2.setTransform(176,45.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},121).wait(132));

	// HEAD3b
	this.instance_8 = new lib.HEAD3b();
	this.instance_8.setTransform(-40.65,95.55,0.8055,0.8056,0,0,0,5.5,30.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(114).to({_off:false},0).to({regX:6.9,x:159.45},8,cjs.Ease.quadOut).wait(131));

	// HEAD2b
	this.instance_9 = new lib.HEAD2b();
	this.instance_9.setTransform(-40.65,69.55,0.8055,0.8056,0,0,0,5.5,30.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({_off:false},0).to({regX:6.9,x:159.45},8,cjs.Ease.quadOut).wait(171));

	// HEAD1b
	this.instance_10 = new lib.HEAD1b();
	this.instance_10.setTransform(-40.65,43.55,0.8055,0.8056,0,0,0,5.5,30.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({regX:6.9,x:159.45},8,cjs.Ease.quadOut).wait(211));

	// BKGD_DLime
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8E659").s().p("EgutAHCIAAuDMBdbAAAIAAODg");
	this.shape_3.setTransform(429,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(253));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(225,12,503.5,238);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 728,
	height: 90,
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