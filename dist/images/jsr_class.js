function JSONscriptRequest(fullUrl){this.fullUrl=fullUrl;this.noCacheIE='&noCacheIE='+(new Date()).getTime();this.headLoc=document.getElementsByTagName("head").item(0);this.scriptId='YJscriptId'+JSONscriptRequest.scriptCounter++;}
JSONscriptRequest.scriptCounter=1;JSONscriptRequest.prototype.buildScriptTag=function(){this.scriptObj=document.createElement("script");this.scriptObj.setAttribute("type","text/javascript");this.scriptObj.setAttribute("src",this.fullUrl+this.noCacheIE);this.scriptObj.setAttribute("id",this.scriptId);}
JSONscriptRequest.prototype.removeScriptTag=function(){this.headLoc.removeChild(this.scriptObj);}
JSONscriptRequest.prototype.addScriptTag=function(){this.headLoc.appendChild(this.scriptObj);}