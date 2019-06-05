(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.Test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A3yHCQAvCeCIBvQCIBuCkAOQCgAOCKhbQCQhfASiVQARiRhuiVQhNhnikiAQhohUgvg4QhKhXgOhZQgFghADgiQAHhUA5hUQBBhiB3hVQFskBH1glQHIghHWCbQCaAyBtA6QCIBJBZBhQBkBuAjCMQAlCWg3B9QgsBkhwBdQgSAPi+CIQh5BXhBBdQhSB0AMB0QANCKCPBqQBlBLC6BE");
	this.shape.setTransform(304.8,177);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6633CC").ss(0.1,1,1).p("A6OjRQgOCuAqCqQAqCrBcCSQBcCRBqAjQBOAbBdgZQBRgWBOg4QCwh/CakmQBSilAphTQBLiUA9hcQAEgGAEgFQCGjGC9h+QDRiLDjgPQDxgPDQCJQDXCNA0DhQAUBWgEBvQgCBAgQCIQgOCDgCBFQgBBvAXBWQAxC9CwB2QCwB2DCgZ");
	this.shape_1.setTransform(228.5,174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334.3,272.3,398.8,209.5);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#006699",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;