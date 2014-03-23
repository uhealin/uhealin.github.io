/*@version:2.1 @author:zhangbo @email:freeeob@gmail.com GPL2.1*/function AjaxAuthentication(username,password){this.jsjava_class="jsorg.eob.ajax.AjaxAuthentication";this.username=username;this.password=password;};AjaxAuthentication.prototype.getUserName=function(){return this.username;};AjaxAuthentication.prototype.getPassword=function(){return this.password;};function AjaxRequest(){this.jsjava_class="jsorg.eob.ajax.AjaxRequest";this.request=AjaxUtils.getXMLHTTPRequest();this.headers=new Hashtable();};AjaxRequest.prototype.setMethodOnSuccess=function(jsFunc,args){this.jsFunctionOnSuccess=jsFunc;this.jsFunctionArgsOnSuccess=args;};AjaxRequest.prototype.getMethodOnSuccess=function(){return this.jsFunctionOnSuccess;};AjaxRequest.prototype.setMethodOnFailure=function(jsFunc,args){this.jsFunctionOnFailure=jsFunc;this.jsFunctionArgsOnFailure=args;};AjaxRequest.prototype.getMethodOnFailure=function(){return this.jsFunctionOnFailure;};AjaxRequest.prototype.getReadyState=function(){return this.request.readyState;};AjaxRequest.prototype.getResponseBody=function(){return this.request.responseBody;};AjaxRequest.prototype.getResponseStream=function(){return this.request.responseStream;};AjaxRequest.prototype.getResponseText=function(){return this.request.responseText;};AjaxRequest.prototype.getResponseXML=function(){return this.request.responseXML;};AjaxRequest.prototype.getStatus=function(){return this.request.status;};AjaxRequest.prototype.getStatusText=function(){return this.request.statusText;};AjaxRequest.prototype.abort=function(){return this.request.abort();};AjaxRequest.prototype.setRequestMethod=function(reqMethod){this.requestMethod=reqMethod;};AjaxRequest.prototype.setRequestURL=function(reqURL){this.requestURL=reqURL;};AjaxRequest.prototype.setAsync=function(isAsync){this.isAsynchronous=isAsync;};AjaxRequest.prototype.setAuthentication=function(auth){this.authentication=auth;};AjaxRequest.prototype.send=function(data){var ajaxRequest=this;var authUserName="";var authPassword="";if(this.authentication){authUserName=this.authentication.getUserName();authPassword=this.authentication.getPassword();}this.request.open(this.requestMethod,this.requestURL,this.isAsynchronous,authUserName,authPassword);var headerNames=this.headers.keys();for(var i=0;i<headerNames.length;i++){var headerName=headerNames[i];var headerValue=this.headers.get(headerName);this.request.setRequestHeader(headerName,headerValue);}this.request.onreadystatechange=function(){if(!ajaxRequest.jsFunctionOnSuccess){return;}if(ajaxRequest.request.readyState==4){if(ajaxRequest.request.status==200){var args=ajaxRequest.jsFunctionArgsOnSuccess;var argStr="";if(args!=undefined&&args.length){for(var i=0;i<args.length;i++){argStr+="args["+i+"],";}}if(argStr.lastIndexOf(",")==argStr.length-1){argStr=argStr.substring(0,argStr.length-1);}var newStr = "ajaxRequest.jsFunctionOnSuccess("+ argStr+")";eval(newStr);}else{var args=ajaxRequest.jsFunctionArgsOnFailure;var argStr="";if(args!=undefined&&args.length){for(var i=0;i<args.length;i++){argStr+="args["+i+"],";}}if(argStr.lastIndexOf(",")==argStr.length-1){argStr=argStr.substring(0,argStr.length-1);}var newStr = "ajaxRequest.jsFunctionOnFailure("+ argStr+")";eval(newStr);}};};this.request.send(data);};AjaxRequest.prototype.setRequestHeader=function(headerName,headerValue){this.headers.put(headerName,headerValue);};AjaxRequest.prototype.setRequestHeaders=function(headersArray){for(var i=0;i<headersArray.length;i++){var header=headersArray[i];var headerName=header.getName();var headerValue=header.getValue();this.headers.put(headerName,headerValue);}};AjaxRequest.prototype.getResponseHeaderValue=function(headerName){this.request.getResponseHeader(headerName);};AjaxRequest.prototype.getAllResponseHeaders=function(){this.request.getAllResponseHeaders();};function AjaxUtils(){this.jsjava_class="jsorg.eob.ajax.AjaxUtils";};AjaxUtils.getXMLHTTPRequest=function(){var xmlHttpReq;if(BrowserUtils.isIE()){var arr = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.5.0", "Microsoft.XMLHTTP", "MSXML2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP"];for(var i=0;i<arr.length;i++){try{xmlHttpReq = new ActiveXObject(arr[i]);break;}catch(e){}}}else{xmlHttpReq = new XMLHttpRequest();}return xmlHttpReq;};