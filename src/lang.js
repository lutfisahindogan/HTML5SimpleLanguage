class langSystem{
	constructor(options = {},callback) {
		this.options = options;
		this.resources = {};
		if (!this.isInitialized) this.init(options,callback);
		
		this.load();
	}

	init(options, callback) {
		if (typeof options === 'function') {
		  callback = options;
		  options = getDefault();
		}
		if (!options) options = getDefault();

		if (!callback) callback = function(){};

		if(!options.localize_json){
			options.localize_json = 'scripts/lang/json/'+options.localize+'.json';
		}
		
		this.resources = this.getFile(options.localize_json);
		return this;
	}

	getFile(url){
		var items = {};
		var xhr = new XMLHttpRequest;
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				 items = JSON.parse(xhr.responseText);
			}
		}
		xhr.open("GET", url,false)
		xhr.send();
		
		return items;
	}
	
	getDefault(){
		return {localize :'tr',localize_json:'json/tr.json'};
	}
	
	load(){
		var elements = document.querySelectorAll('[data-lang-type]');		
		for(var i=0; i < elements.length; i++){
			var currentElement = elements[i];
            var type = currentElement.getAttribute('data-lang-type');			
			if(type == 'html'){
				this.replaceHtmlElement(currentElement);
			}	
			else if(type == 'attr'){
				var attrs = currentElement.getAttribute('data-lang-attr').split(',');
				for(var j=0; j< attrs.length;j++){					
					this.replaceAttrElement(currentElement,attrs[j]);
				}
			}else if(type == 'all'){				
				this.replaceHtmlElement(currentElement);				
				var attrs = currentElement.getAttribute('data-lang-attr').split(',');
				for(var j=0; j< attrs.length;j++){					
					this.replaceAttrElement(currentElement,attrs[j]);
				}
			}
		}
	}
	
	replaceHtmlElement(currentElement){	
		var allHtml = currentElement.innerHTML;
		var startIndex = allHtml.indexOf('{{'); 
		var endIndex = allHtml.indexOf('}}');
		var replaceKey = allHtml.substr(startIndex,endIndex+2);
		var key = allHtml.substr(startIndex+2,endIndex-2);				
		var langKeyValue = this.resources[key];
		if(langKeyValue){
			allHtml = allHtml.replace(replaceKey,langKeyValue);
			currentElement.innerHTML = allHtml;
		}
	}
	
	replaceAttrElement(currentElement,attr){
		var attrText = currentElement.getAttribute(attr);
		var startIndex = attrText.indexOf('{{'); 
		var endIndex = attrText.indexOf('}}');
		var replaceKey = attrText.substr(startIndex,endIndex+2);
		var key = attrText.substr(startIndex+2,endIndex-2);				
		var langKeyValue = this.resources[key];
		if(langKeyValue){
			attrText = attrText.replace(replaceKey,langKeyValue);
			currentElement.setAttribute(attr,attrText);
		}
	}	

    getKey(key) {
        var langKeyValue = this.resources[key];
        if (langKeyValue) {
            return langKeyValue;
        }
        return key;
    }
}