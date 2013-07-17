/**
 * almond 0.0.3 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 *//*jslint strict: false, plusplus: false *//*global setTimeout: false */var requirejs,require,define;(function(a){function g(a,b){if(a&&a.charAt(0)==="."&&b){b=b.split("/"),b=b.slice(0,b.length-1),a=b.concat(a.split("/"));var c,d;for(c=0;d=a[c];c++)if(d===".")a.splice(c,1),c-=1;else if(d===".."){if(c===1&&(a[2]===".."||a[0]===".."))break;c>0&&(a.splice(c-1,2),c-=2)}a=a.join("/")}return a}function h(b,c){return function(){return f.apply(a,d.call(arguments,0).concat([b,c]))}}function i(a){return function(b){return g(b,a)}}function j(a){return function(c){b[a]=c}}function k(d){if(c.hasOwnProperty(d)){var f=c[d];delete c[d],e.apply(a,f)}return b[d]}function l(a,b){var c,d,e=a.indexOf("!");return e!==-1?(c=g(a.slice(0,e),b),a=a.slice(e+1),d=k(c),d&&d.normalize?a=d.normalize(a,i(b)):a=g(a,b)):a=g(a,b),{f:c?c+"!"+a:a,n:a,p:d}}var b={},c={},d=[].slice,e,f;if(typeof define=="function")return;e=function(d,e,f,g){var i=[],m,n,o,p,q,r;g||(g=d);if(typeof f=="function"){!e.length&&f.length&&(e=["require","exports","module"]);for(p=0;p<e.length;p++){r=l(e[p],g),o=r.f;if(o==="require")i[p]=h(d);else if(o==="exports")i[p]=b[d]={},m=!0;else if(o==="module")n=i[p]={id:d,uri:"",exports:b[d]};else if(b.hasOwnProperty(o)||c.hasOwnProperty(o))i[p]=k(o);else{if(!r.p)throw d+" missing "+o;r.p.load(r.n,h(g,!0),j(o),{}),i[p]=b[o]}}q=f.apply(b[d],i),d&&(n&&n.exports!==a?b[d]=n.exports:m||(b[d]=q))}else d&&(b[d]=f)},requirejs=f=function(b,c,d,g){return typeof b=="string"?k(l(b,c).f):(b.splice||(c.splice?(b=c,c=arguments[2]):b=[]),g?e(a,b,c,d):setTimeout(function(){e(a,b,c,d)},15),f)},f.config=function(){return f},require||(require=f),define=function(a,b,d){b.splice||(d=b,b=[]),define.unordered?c[a]=[a,b,d]:e(a,b,d)},define.amd={jQuery:!0}})();
/*! Woodman - v0.1.9 - 2013-05-02 - https://github.com/joshfire/woodman
Copyright 2013 Joshfire; MIT license
Based on log4j v2.0: http://logging.apache.org/log4j/2.x/
Portions adapted from log4javascript: http://log4javascript.org/ (copyright Tim Down, Apache License, Version 2.0) */

/* Browser distribution, AMD module */

define('joshfire-framework/utils/woodmanbase',[],function(){var requirejs,require,define;(function(e){function c(e,t){return f.call(e,t)}function h(e,t){var n,r,i,s,o,a,f,l,c,h,p=t&&t.split("/"),d=u.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(l=0;l<e.length;l+=1){h=e[l];if(h===".")e.splice(l,1),l-=1;else if(h===".."){if(l===1&&(e[2]===".."||e[0]===".."))break;l>0&&(e.splice(l-1,2),l-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(l=n.length;l>0;l-=1){r=n.slice(0,l).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=l;break}}}if(s)break;!a&&v&&v[r]&&(a=v[r],f=l)}!s&&a&&(s=a,o=f),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function p(t,r){return function(){return n.apply(e,l.call(arguments,0).concat([t,r]))}}function d(e){return function(t){return h(t,e)}}function v(e){return function(t){s[e]=t}}function m(n){if(c(o,n)){var r=o[n];delete o[n],a[n]=!0,t.apply(e,r)}if(!c(s,n)&&!c(a,n))throw new Error("No "+n);return s[n]}function g(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function y(e){return function(){return u&&u.config&&u.config[e]||{}}}var t,n,r,i,s={},o={},u={},a={},f=Object.prototype.hasOwnProperty,l=[].slice;r=function(e,t){var n,r=g(e),i=r[0];return e=r[1],i&&(i=h(i,t),n=m(i)),i?n&&n.normalize?e=n.normalize(e,d(t)):e=h(e,t):(e=h(e,t),r=g(e),i=r[0],e=r[1],i&&(n=m(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},i={require:function(e){return p(e)},exports:function(e){var t=s[e];return typeof t!="undefined"?t:s[e]={}},module:function(e){return{id:e,uri:"",exports:s[e],config:y(e)}}},t=function(t,n,u,f){var l,h,d,g,y,b=[],w;f=f||t;if(typeof u=="function"){n=!n.length&&u.length?["require","exports","module"]:n;for(y=0;y<n.length;y+=1){g=r(n[y],f),h=g.f;if(h==="require")b[y]=i.require(t);else if(h==="exports")b[y]=i.exports(t),w=!0;else if(h==="module")l=b[y]=i.module(t);else if(c(s,h)||c(o,h)||c(a,h))b[y]=m(h);else{if(!g.p)throw new Error(t+" missing "+h);g.p.load(g.n,p(f,!0),v(h),{}),b[y]=s[h]}}d=u.apply(s[t],b);if(t)if(l&&l.exports!==e&&l.exports!==s[t])s[t]=l.exports;else if(d!==e||!w)s[t]=d}else t&&(s[t]=u)},requirejs=require=n=function(s,o,a,f,l){return typeof s=="string"?i[s]?i[s](o):m(r(s,o).f):(s.splice||(u=s,o.splice?(s=o,o=a,a=null):s=e),o=o||function(){},typeof a=="function"&&(a=f,f=l),f?t(e,s,o,a):setTimeout(function(){t(e,s,o,a)},15),n)},n.config=function(e){return u=e,n},define=function(e,t,n){t.splice||(n=t,t=[]),!c(s,e)&&!c(o,e)&&(o[e]=[e,t,n])},define.amd={jQuery:!0}})(),define("../deps/almond",function(){}),define("lifecycle",[],function(){var e=function(){this.started=!1};return e.prototype.start=function(e){return e=e||function(){},this.started=!0,e()},e.prototype.stop=function(e){return e=e||function(){},this.started=!1,e()},e.prototype.isStarted=function(){return this.started},e}),define("loglevel",[],function(){var e=["error","warn","info","log","trace"],t=function(t){var n=0,r=e.length;for(n=0;n<r;n++)if(e[n]===t)return n;return-1};return{registerLevel:function(n,r){var i=0;if(t(n)!==-1)throw new Error('Log level "'+n+'" '+"cannot be registered as it already exists");if(r){i=t(r);if(i===-1)throw new Error('The log level "'+r+'" '+"cannot be used as reference level as it does not exist")}e.splice(i,0,n)},isBelow:function(e,n){return e==="off"?!0:e==="all"?n==="all":n==="off"?!1:n==="all"?!0:t(e)<=t(n)}}}),define("logevent",[],function(){var e=function(e,t,n){this.time=new Date,this.loggerName=e,this.level=t,this.message=n};return e.prototype.getLoggerName=function(){return this.loggerName},e.prototype.getLevel=function(){return this.level},e.prototype.getMessage=function(){return this.message},e.prototype.getMillis=function(){return this.time.getTime()},e}),define("logger",["./loglevel","./logevent"],function(e,t){var n=function(e,t){this.name=e,this.loggerContext=t,this.parent=null,this.children=[],this.appenders=[],this.level="inherit",this.additive=!0};return n.prototype.log=function(){this.trace("log",arguments)},n.prototype.info=function(){this.trace("info",arguments)},n.prototype.warn=function(){this.trace("warn",arguments)},n.prototype.error=function(){this.trace("error",arguments)},n.prototype.trace=function(n,r){var i=0,s=[],o=null;if(e.isBelow(n,this.level)){for(i=0;i<r.length;i++)s[i]=r[i];o=new t(this.name,n,s),this.append(o)}},n.prototype.append=function(e){var t=0,n=0;for(t=0,n=this.appenders.length;t<n;t+=1)this.appenders[t].append(e);this.additive&&this.parent&&this.parent.append(e)},n.prototype.reset=function(){this.appenders=[],this.level="inherit",this.additive=!0},n.prototype.initialize=function(e){e=e||{},this.level=typeof e.level!="undefined"?e.level:"inherit",this.additive=typeof e.additivity!="undefined"?e.additivity:!0,this.appenders=e.appenders||[]},n}),define("appender",["./lifecycle","./loglevel"],function(e,t){var n=function(t){t=t||{},e.call(this),this.name=t.name,this.layout=t.layout,this.level=t.level||"all"};return n.prototype=new e,n.prototype.getName=function(){return this.name},n.prototype.append=function(e){if(!this.isStarted())throw new Error('Appender "'+this.name+'" '+"must be started before it may be used");t.isBelow(e.getLevel(),this.level)&&this.doAppend(e)},n.prototype.doAppend=function(){},n.prototype.getLayout=function(){return this.layout},n}),define("layout",[],function(){var e=function(e,t){this.config=e||{},this.loggerContext=t};return e.prototype.toLogEvent=function(e){return e},e.prototype.toMessageString=function(e){var t=e.getMessage();return e.getMillis()+" "+e.getLevel()+" "+e.getLoggerName()+" "+(t.toString?t.toString():String(t))},e}),define("utils",[],function(){var e=Object.prototype.toString,t=Array.isArray||function(t){return e.call(t)==="[object Array]"},n=function(t){return e.call(t)==="[object String]"},r=function(e){return e===Object(e)},i=function(t){return e.call(t)==="[object Function]"},s=function(t){return e.call(t)==="[object Date]"},o={},u=function(e,t,n){if(!e)return;if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t,n);else if(e.length===+e.length){for(var r=0,i=e.length;r<i;r++)if(r in e&&t.call(n,e[r],r,e)===o)return}else for(var s in e)if(e.hasOwnProperty(s)&&t.call(n,e[s],s,e)===o)return},a=function(e,t,n){var r=[];return e?Array.prototype.map&&e.map===Array.prototype.map?e.map(t,n):(u(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),e.length===+e.length&&(r.length=e.length),r):r};return{isArray:t,isString:n,isObject:r,isFunction:i,isDate:s,each:u,map:a}}),define("loggercontext",["./lifecycle","./logger","./appender","./layout","./utils"],function(e,t,n,r,i){var s=function(){e.call(this),this.startTime=new Date,this.rootLogger=new t("[root]",this),this.loggers={},this.appenders={},this.layouts={},this.createdAppenders=[]};return s.prototype=new e,s.prototype.registerAppender=function(e,t){this.appenders[e]=t},s.prototype.registerLayout=function(e,t){this.layouts[e]=t},s.prototype.registerLayout=function(e,t){this.layouts[e]=t},s.prototype.initialize=function(e){e=JSON.parse(JSON.stringify(e||{}));var t=[],n=[],r={};this.reset(),i.isArray(e)?t=e:(e.configuration&&(e=e.configuration),i.isArray(e.loggers)?t=e.loggers:t=i.map(e.loggers,function(e,t){return t==="root"&&(e.root=!0),e}),i.isArray(e.appenders)?n=e.appenders:i.each(e.appenders,function(e,t){i.isArray(e)?(i.each(e,function(e){e.type||(e.type=t)}),n=n.concat(e)):(e.type||(e.type=t),n.push(e))})),i.each(t,function(e){var t=[];e["appender-ref"]&&(i.isArray(e["appender-ref"])?t=i.map(e["appender-ref"],function(e){return e.ref}):t.push(e["appender-ref"].ref),delete e["appender-ref"]),i.isArray(e.appenders)&&i.each(e.appenders,function(e){i.isObject(e)?(n.push(e),t.push(e.name)):t.push(e)}),e.appenders=t}),i.each(n,function(e){var t=this.appenders[e.type],n=null,s=null,o=null;if(!t)throw new Error('Unknown appender type for "'+e.name+'": '+e.type);if(r[e.name])throw new Error('Appender "'+e.name+'" referenced twice in the configuration');e.layout?(n=e.layout,s=this.layouts[n.type]):i.each(this.layouts,function(t,r){e[r]&&(n=e[r],s=t)});if(!s)throw new Error('No proper layout defined for appender "'+e.name+'"');e.layout=new s(n,this),o=new t(e),this.createdAppenders.push(o),r[e.name]=o},this),i.each(t,function(e){var t=null;e.appenders=i.map(e.appenders,function(t){var n=r[t];if(!n)throw new Error('Logger "'+e.name+'" references undefined appender "'+t+'"');return r[t]}),e.root||!e.name?t=this.getLogger():t=this.getLogger(e.name),t.initialize(e)},this),this.propagateLevels()},s.prototype.getLogger=function(e){var n=null,r="",i=0;return e?(n=this.loggers[e],n?n:(n=new t(e,this),i=e.lastIndexOf("."),i!==-1?r=this.getLogger(e.substring(0,i)):r=this.rootLogger,n.parent=r,n.level=r.level,r.children=r.children||[],r.children.push(n),this.loggers[e]=n,n)):this.rootLogger},s.prototype.getStartTime=function(){return this.startTime.getTime()},s.prototype.reset=function(){var e="";for(e in this.loggers)this.loggers[e].reset();this.rootLogger.reset(),this.rootLogger.level="all",this.createdAppenders=[],this.started=!1},s.prototype.propagateLevels=function(){this.rootLogger.level==="inherit"&&(this.rootLogger.level="all"),i.each(this.loggers,function(e){var t=e;while(t.level==="inherit")t=t.parent;e.level=t.level})},s.prototype.start=function(e){e=e||function(){};var t=this,n=this.createdAppenders.length,r=!1,s=function(i){if(r)return;if(i)return r=!0,e(i);n-=1;if(n===0)return t.started=!0,e()};if(!(n>0))return this.started=!0,e();i.each(this.createdAppenders,function(e){e.start(function(e){return s(e)})})},s.prototype.stop=function(e){e=e||function(){};var t=this,n=this.createdAppenders.length,r=!1,s=function(i){if(r)return;if(i)return r=!0,e(i);n-=1;if(n===0)return t.started=!1,e()};if(!(n>0))return this.started=!1,e();i.each(this.createdAppenders,function(e){e.stop(function(e){return s(e)})})},s.prototype.load=function(e,t){this.initialize(e),this.start(t)},s}),define("logmanager",["./loggercontext"],function(e){var t=new e;return{registerAppender:function(e,n){return t.registerAppender(e,n)},registerLayout:function(e,n){return t.registerLayout(e,n)},load:function(e,n){return t.load(e,n)},unload:function(e){return t.stop(e)},initialize:function(e){return t.initialize(e)},start:function(e){return t.start(e)},stop:function(e){return t.stop(e)},getLogger:function(e){return t.getLogger(e)}}}),define("appenders/consoleappender",["../appender"],function(e){var t=function(t){t=t||{},e.call(this,t),this.appendStrings=typeof t.appendStrings!="undefined"?t.appendStrings:!0};return t.prototype=new e,t.prototype.doAppend=function(e){var t=this.getLayout(),n=e.getLevel(),r=null;this.appendStrings?(r=t.toMessageString(e),this.doAppendMessage(n,r)):(e=t.toLogEvent(e),this.doAppendMessage(n,e))},t.prototype.doAppendMessage=function(e,t){if(typeof console=="undefined")return;e==="info"?console.info(t):e==="warn"?console.warn(t):e==="error"?console.error(t):console.log(t)},t});var io="undefined"==typeof module?{}:module.exports;(function(){(function(e,t){var n=e;n.version="0.9.11",n.protocol=1,n.transports=[],n.j=[],n.sockets={},n.connect=function(e,r){var i=n.util.parseUri(e),s,o;t&&t.location&&(i.protocol=i.protocol||t.location.protocol.slice(0,-1),i.host=i.host||(t.document?t.document.domain:t.location.hostname),i.port=i.port||t.location.port),s=n.util.uniqueUri(i);var u={host:i.host,secure:"https"==i.protocol,port:i.port||("https"==i.protocol?443:80),query:i.query||""};n.util.merge(u,r);if(u["force new connection"]||!n.sockets[s])o=new n.Socket(u);return!u["force new connection"]&&o&&(n.sockets[s]=o),o=o||n.sockets[s],o.of(i.path.length>1?i.path:"")}})("object"==typeof module?module.exports:io={},this),function(e,t){var n=e.util={},r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];n.parseUri=function(e){var t=r.exec(e||""),n={},s=14;while(s--)n[i[s]]=t[s]||"";return n},n.uniqueUri=function(e){var n=e.protocol,r=e.host,i=e.port;return"document"in t?(r=r||document.domain,i=i||(n=="https"&&document.location.protocol!=="https:"?443:document.location.port)):(r=r||"localhost",!i&&n=="https"&&(i=443)),(n||"http")+"://"+r+":"+(i||80)},n.query=function(e,t){var r=n.chunkQuery(e||""),i=[];n.merge(r,n.chunkQuery(t||""));for(var s in r)r.hasOwnProperty(s)&&i.push(s+"="+r[s]);return i.length?"?"+i.join("&"):""},n.chunkQuery=function(e){var t={},n=e.split("&"),r=0,i=n.length,s;for(;r<i;++r)s=n[r].split("="),s[0]&&(t[s[0]]=s[1]);return t};var s=!1;n.load=function(e){if("document"in t&&document.readyState==="complete"||s)return e();n.on(t,"load",e,!1)},n.on=function(e,t,n,r){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener&&e.addEventListener(t,n,r)},n.request=function(e){if(e&&"undefined"!=typeof XDomainRequest&&!n.ua.hasCORS)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!e||n.ua.hasCORS))return new XMLHttpRequest;if(!e)try{return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}return null},"undefined"!=typeof window&&n.load(function(){s=!0}),n.defer=function(e){if(!n.ua.webkit||"undefined"!=typeof importScripts)return e();n.load(function(){setTimeout(e,100)})},n.merge=function(t,r,i,s){var o=s||[],u=typeof i=="undefined"?2:i,a;for(a in r)r.hasOwnProperty(a)&&n.indexOf(o,a)<0&&(typeof t[a]!="object"||!u?(t[a]=r[a],o.push(r[a])):n.merge(t[a],r[a],u-1,o));return t},n.mixin=function(e,t){n.merge(e.prototype,t.prototype)},n.inherit=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.isArray=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},n.intersect=function(e,t){var r=[],i=e.length>t.length?e:t,s=e.length>t.length?t:e;for(var o=0,u=s.length;o<u;o++)~n.indexOf(i,s[o])&&r.push(s[o]);return r},n.indexOf=function(e,t,n){for(var r=e.length,n=n<0?n+r<0?0:n+r:n||0;n<r&&e[n]!==t;n++);return r<=n?-1:n},n.toArray=function(e){var t=[];for(var n=0,r=e.length;n<r;n++)t.push(e[n]);return t},n.ua={},n.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var e=new XMLHttpRequest}catch(t){return!1}return e.withCredentials!=undefined}(),n.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),n.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(e,t){function n(){}e.EventEmitter=n,n.prototype.on=function(e,n){return this.$events||(this.$events={}),this.$events[e]?t.util.isArray(this.$events[e])?this.$events[e].push(n):this.$events[e]=[this.$events[e],n]:this.$events[e]=n,this},n.prototype.addListener=n.prototype.on,n.prototype.once=function(e,t){function r(){n.removeListener(e,r),t.apply(this,arguments)}var n=this;return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,n){if(this.$events&&this.$events[e]){var r=this.$events[e];if(t.util.isArray(r)){var i=-1;for(var s=0,o=r.length;s<o;s++)if(r[s]===n||r[s].listener&&r[s].listener===n){i=s;break}if(i<0)return this;r.splice(i,1),r.length||delete this.$events[e]}else(r===n||r.listener&&r.listener===n)&&delete this.$events[e]}return this},n.prototype.removeAllListeners=function(e){return e===undefined?(this.$events={},this):(this.$events&&this.$events[e]&&(this.$events[e]=null),this)},n.prototype.listeners=function(e){return this.$events||(this.$events={}),this.$events[e]||(this.$events[e]=[]),t.util.isArray(this.$events[e])||(this.$events[e]=[this.$events[e]]),this.$events[e]},n.prototype.emit=function(e){if(!this.$events)return!1;var n=this.$events[e];if(!n)return!1;var r=Array.prototype.slice.call(arguments,1);if("function"==typeof n)n.apply(this,r);else{if(!t.util.isArray(n))return!1;var i=n.slice();for(var s=0,o=i.length;s<o;s++)i[s].apply(this,r)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){function f(e){return e<10?"0"+e:e}function date(e,t){return isFinite(e.valueOf())?e.getUTCFullYear()+"-"+f(e.getUTCMonth()+1)+"-"+f(e.getUTCDate())+"T"+f(e.getUTCHours())+":"+f(e.getUTCMinutes())+":"+f(e.getUTCSeconds())+"Z":null}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a instanceof Date&&(a=date(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")},JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,typeof JSON!="undefined"?JSON:undefined),function(e,t){var n=e.parser={},r=n.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],i=n.reasons=["transport not supported","client not handshaken","unauthorized"],s=n.advice=["reconnect"],o=t.JSON,u=t.util.indexOf;n.encodePacket=function(e){var t=u(r,e.type),n=e.id||"",a=e.endpoint||"",f=e.ack,l=null;switch(e.type){case"error":var c=e.reason?u(i,e.reason):"",h=e.advice?u(s,e.advice):"";if(c!==""||h!=="")l=c+(h!==""?"+"+h:"");break;case"message":e.data!==""&&(l=e.data);break;case"event":var p={name:e.name};e.args&&e.args.length&&(p.args=e.args),l=o.stringify(p);break;case"json":l=o.stringify(e.data);break;case"connect":e.qs&&(l=e.qs);break;case"ack":l=e.ackId+(e.args&&e.args.length?"+"+o.stringify(e.args):"")}var d=[t,n+(f=="data"?"+":""),a];return l!==null&&l!==undefined&&d.push(l),d.join(":")},n.encodePayload=function(e){var t="";if(e.length==1)return e[0];for(var n=0,r=e.length;n<r;n++){var i=e[n];t+="�"+i.length+"�"+e[n]}return t};var a=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;n.decodePacket=function(e){var t=e.match(a);if(!t)return{};var n=t[2]||"",e=t[5]||"",u={type:r[t[1]],endpoint:t[4]||""};n&&(u.id=n,t[3]?u.ack="data":u.ack=!0);switch(u.type){case"error":var t=e.split("+");u.reason=i[t[0]]||"",u.advice=s[t[1]]||"";break;case"message":u.data=e||"";break;case"event":try{var f=o.parse(e);u.name=f.name,u.args=f.args}catch(l){}u.args=u.args||[];break;case"json":try{u.data=o.parse(e)}catch(l){}break;case"connect":u.qs=e||"";break;case"ack":var t=e.match(/^([0-9]+)(\+)?(.*)/);if(t){u.ackId=t[1],u.args=[];if(t[3])try{u.args=t[3]?o.parse(t[3]):[]}catch(l){}}break;case"disconnect":case"heartbeat":}return u},n.decodePayload=function(e){if(e.charAt(0)=="�"){var t=[];for(var r=1,i="";r<e.length;r++)e.charAt(r)=="�"?(t.push(n.decodePacket(e.substr(r+1).substr(0,i))),r+=Number(i)+1,i=""):i+=e.charAt(r);return t}return[n.decodePacket(e)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t){function n(e,t){this.socket=e,this.sessid=t}e.Transport=n,t.util.mixin(n,t.EventEmitter),n.prototype.heartbeats=function(){return!0},n.prototype.onData=function(e){this.clearCloseTimeout(),(this.socket.connected||this.socket.connecting||this.socket.reconnecting)&&this.setCloseTimeout();if(e!==""){var n=t.parser.decodePayload(e);if(n&&n.length)for(var r=0,i=n.length;r<i;r++)this.onPacket(n[r])}return this},n.prototype.onPacket=function(e){return this.socket.setHeartbeatTimeout(),e.type=="heartbeat"?this.onHeartbeat():(e.type=="connect"&&e.endpoint==""&&this.onConnect(),e.type=="error"&&e.advice=="reconnect"&&(this.isOpen=!1),this.socket.onPacket(e),this)},n.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var e=this;this.closeTimeout=setTimeout(function(){e.onDisconnect()},this.socket.closeTimeout)}},n.prototype.onDisconnect=function(){return this.isOpen&&this.close(),this.clearTimeouts(),this.socket.onDisconnect(),this},n.prototype.onConnect=function(){return this.socket.onConnect(),this},n.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},n.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},n.prototype.packet=function(e){this.send(t.parser.encodePacket(e))},n.prototype.onHeartbeat=function(e){this.packet({type:"heartbeat"})},n.prototype.onOpen=function(){this.isOpen=!0,this.clearCloseTimeout(),this.socket.onOpen()},n.prototype.onClose=function(){var e=this;this.isOpen=!1,this.socket.onClose(),this.onDisconnect()},n.prototype.prepareUrl=function(){var e=this.socket.options;return this.scheme()+"://"+e.host+":"+e.port+"/"+e.resource+"/"+t.protocol+"/"+this.name+"/"+this.sessid},n.prototype.ready=function(e,t){t.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function r(e){this.options={port:80,secure:!1,document:"document"in n?document:!1,resource:"socket.io",transports:t.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":Infinity,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!1,"auto connect":!0,"flash policy port":10843,manualFlush:!1},t.util.merge(this.options,e),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1;if(this.options["sync disconnect on unload"]&&(!this.isXDomain()||t.util.ua.hasCORS)){var r=this;t.util.on(n,"beforeunload",function(){r.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}function i(){}e.Socket=r,t.util.mixin(r,t.EventEmitter),r.prototype.of=function(e){return this.namespaces[e]||(this.namespaces[e]=new t.SocketNamespace(this,e),e!==""&&this.namespaces[e].packet({type:"connect"})),this.namespaces[e]},r.prototype.publish=function(){this.emit.apply(this,arguments);var e;for(var t in this.namespaces)this.namespaces.hasOwnProperty(t)&&(e=this.of(t),e.$emit.apply(e,arguments))},r.prototype.handshake=function(e){function s(t){t instanceof Error?(n.connecting=!1,n.onError(t.message)):e.apply(null,t.split(":"))}var n=this,r=this.options,o=["http"+(r.secure?"s":"")+":/",r.host+":"+r.port,r.resource,t.protocol,t.util.query(this.options.query,"t="+ +(new Date))].join("/");if(this.isXDomain()&&!t.util.ua.hasCORS){var u=document.getElementsByTagName("script")[0],a=document.createElement("script");a.src=o+"&jsonp="+t.j.length,u.parentNode.insertBefore(a,u),t.j.push(function(e){s(e),a.parentNode.removeChild(a)})}else{var f=t.util.request();f.open("GET",o,!0),this.isXDomain()&&(f.withCredentials=!0),f.onreadystatechange=function(){f.readyState==4&&(f.onreadystatechange=i,f.status==200?s(f.responseText):f.status==403?n.onError(f.responseText):(n.connecting=!1,!n.reconnecting&&n.onError(f.responseText)))},f.send(null)}},r.prototype.getTransport=function(e){var n=e||this.transports,r;for(var i=0,s;s=n[i];i++)if(t.Transport[s]&&t.Transport[s].check(this)&&(!this.isXDomain()||t.Transport[s].xdomainCheck(this)))return new t.Transport[s](this,this.sessionid);return null},r.prototype.connect=function(e){if(this.connecting)return this;var n=this;return n.connecting=!0,this.handshake(function(r,i,s,o){function u(e){n.transport&&n.transport.clearTimeouts(),n.transport=n.getTransport(e);if(!n.transport)return n.publish("connect_failed");n.transport.ready(n,function(){n.connecting=!0,n.publish("connecting",n.transport.name),n.transport.open(),n.options["connect timeout"]&&(n.connectTimeoutTimer=setTimeout(function(){if(!n.connected){n.connecting=!1;if(n.options["try multiple transports"]){var e=n.transports;while(e.length>0&&e.splice(0,1)[0]!=n.transport.name);e.length?u(e):n.publish("connect_failed")}}},n.options["connect timeout"]))})}n.sessionid=r,n.closeTimeout=s*1e3,n.heartbeatTimeout=i*1e3,n.transports||(n.transports=n.origTransports=o?t.util.intersect(o.split(","),n.options.transports):n.options.transports),n.setHeartbeatTimeout(),u(n.transports),n.once("connect",function(){clearTimeout(n.connectTimeoutTimer),e&&typeof e=="function"&&e()})}),this},r.prototype.setHeartbeatTimeout=function(){clearTimeout(this.heartbeatTimeoutTimer);if(this.transport&&!this.transport.heartbeats())return;var e=this;this.heartbeatTimeoutTimer=setTimeout(function(){e.transport.onClose()},this.heartbeatTimeout)},r.prototype.packet=function(e){return this.connected&&!this.doBuffer?this.transport.packet(e):this.buffer.push(e),this},r.prototype.setBuffer=function(e){this.doBuffer=e,!e&&this.connected&&this.buffer.length&&(this.options.manualFlush||this.flushBuffer())},r.prototype.flushBuffer=function(){this.transport.payload(this.buffer),this.buffer=[]},r.prototype.disconnect=function(){if(this.connected||this.connecting)this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted");return this},r.prototype.disconnectSync=function(){var e=t.util.request(),n=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,t.protocol,"",this.sessionid].join("/")+"/?disconnect=1";e.open("GET",n,!1),e.send(null),this.onDisconnect("booted")},r.prototype.isXDomain=function(){var e=n.location.port||("https:"==n.location.protocol?443:80);return this.options.host!==n.location.hostname||this.options.port!=e},r.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},r.prototype.onOpen=function(){this.open=!0},r.prototype.onClose=function(){this.open=!1,clearTimeout(this.heartbeatTimeoutTimer)},r.prototype.onPacket=function(e){this.of(e.endpoint).onPacket(e)},r.prototype.onError=function(e){e&&e.advice&&e.advice==="reconnect"&&(this.connected||this.connecting)&&(this.disconnect(),this.options.reconnect&&this.reconnect()),this.publish("error",e&&e.reason?e.reason:e)},r.prototype.onDisconnect=function(e){var t=this.connected,n=this.connecting;this.connected=!1,this.connecting=!1,this.open=!1;if(t||n)this.transport.close(),this.transport.clearTimeouts(),t&&(this.publish("disconnect",e),"booted"!=e&&this.options.reconnect&&!this.reconnecting&&this.reconnect())},r.prototype.reconnect=function(){function i(){if(e.connected){for(var t in e.namespaces)e.namespaces.hasOwnProperty(t)&&""!==t&&e.namespaces[t].packet({type:"connect"});e.publish("reconnect",e.transport.name,e.reconnectionAttempts)}clearTimeout(e.reconnectionTimer),e.removeListener("connect_failed",s),e.removeListener("connect",s),e.reconnecting=!1,delete e.reconnectionAttempts,delete e.reconnectionDelay,delete e.reconnectionTimer,delete e.redoTransports,e.options["try multiple transports"]=n}function s(){if(!e.reconnecting)return;if(e.connected)return i();if(e.connecting&&e.reconnecting)return e.reconnectionTimer=setTimeout(s,1e3);e.reconnectionAttempts++>=t?e.redoTransports?(e.publish("reconnect_failed"),i()):(e.on("connect_failed",s),e.options["try multiple transports"]=!0,e.transports=e.origTransports,e.transport=e.getTransport(),e.redoTransports=!0,e.connect()):(e.reconnectionDelay<r&&(e.reconnectionDelay*=2),e.connect(),e.publish("reconnecting",e.reconnectionDelay,e.reconnectionAttempts),e.reconnectionTimer=setTimeout(s,e.reconnectionDelay))}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var e=this,t=this.options["max reconnection attempts"],n=this.options["try multiple transports"],r=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(s,this.reconnectionDelay),this.on("connect",s)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(e,t){this.socket=e,this.name=t||"",this.flags={},this.json=new r(this,"json"),this.ackPackets=0,this.acks={}}function r(e,t){this.namespace=e,this.name=t}e.SocketNamespace=n,t.util.mixin(n,t.EventEmitter),n.prototype.$emit=t.EventEmitter.prototype.emit,n.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},n.prototype.packet=function(e){return e.endpoint=this.name,this.socket.packet(e),this.flags={},this},n.prototype.send=function(e,t){var n={type:this.flags.json?"json":"message",data:e};return"function"==typeof t&&(n.id=++this.ackPackets,n.ack=!0,this.acks[n.id]=t),this.packet(n)},n.prototype.emit=function(e){var t=Array.prototype.slice.call(arguments,1),n=t[t.length-1],r={type:"event",name:e};return"function"==typeof n&&(r.id=++this.ackPackets,r.ack="data",this.acks[r.id]=n,t=t.slice(0,t.length-1)),r.args=t,this.packet(r)},n.prototype.disconnect=function(){return this.name===""?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect")),this},n.prototype.onPacket=function(e){function r(){n.packet({type:"ack",args:t.util.toArray(arguments),ackId:e.id})}var n=this;switch(e.type){case"connect":this.$emit("connect");break;case"disconnect":this.name===""?this.socket.onDisconnect(e.reason||"booted"):this.$emit("disconnect",e.reason);break;case"message":case"json":var i=["message",e.data];e.ack=="data"?i.push(r):e.ack&&this.packet({type:"ack",ackId:e.id}),this.$emit.apply(this,i);break;case"event":var i=[e.name].concat(e.args);e.ack=="data"&&i.push(r),this.$emit.apply(this,i);break;case"ack":this.acks[e.ackId]&&(this.acks[e.ackId].apply(this,e.args),delete this.acks[e.ackId]);break;case"error":e.advice?this.socket.onError(e):e.reason=="unauthorized"?this.$emit("connect_failed",e.reason):this.$emit("error",e.reason)}},r.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},r.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function r(e){t.Transport.apply(this,arguments)}e.websocket=r,t.util.inherit(r,t.Transport),r.prototype.name="websocket",r.prototype.open=function(){var e=t.util.query(this.socket.options.query),r=this,i;return i||(i=n.MozWebSocket||n.WebSocket),this.websocket=new i(this.prepareUrl()+e),this.websocket.onopen=function(){r.onOpen(),r.socket.setBuffer(!1)},this.websocket.onmessage=function(e){r.onData(e.data)},this.websocket.onclose=function(){r.onClose(),r.socket.setBuffer(!0)},this.websocket.onerror=function(e){r.onError(e)},this},t.util.ua.iDevice?r.prototype.send=function(e){var t=this;return setTimeout(function(){t.websocket.send(e)},0),this}:r.prototype.send=function(e){return this.websocket.send(e),this},r.prototype.payload=function(e){for(var t=0,n=e.length;t<n;t++)this.packet(e[t]);return this},r.prototype.close=function(){return this.websocket.close(),this},r.prototype.onError=function(e){this.socket.onError(e)},r.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},r.check=function(){return"WebSocket"in n&&!("__addTask"in WebSocket)||"MozWebSocket"in n},r.xdomainCheck=function(){return!0},t.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(){t.Transport.websocket.apply(this,arguments)}e.flashsocket=n,t.util.inherit(n,t.Transport.websocket),n.prototype.name="flashsocket",n.prototype.open=function(){var e=this,n=arguments;return WebSocket.__addTask(function(){t.Transport.websocket.prototype.open.apply(e,n)}),this},n.prototype.send=function(){var e=this,n=arguments;return WebSocket.__addTask(function(){t.Transport.websocket.prototype.send.apply(e,n)}),this},n.prototype.close=function(){return WebSocket.__tasks.length=0,t.Transport.websocket.prototype.close.call(this),this},n.prototype.ready=function(e,r){function i(){var t=e.options,i=t["flash policy port"],o=["http"+(t.secure?"s":"")+":/",t.host+":"+t.port,t.resource,"static/flashsocket","WebSocketMain"+(e.isXDomain()?"Insecure":"")+".swf"];n.loaded||(typeof WEB_SOCKET_SWF_LOCATION=="undefined"&&(WEB_SOCKET_SWF_LOCATION=o.join("/")),i!==843&&WebSocket.loadFlashPolicyFile("xmlsocket://"+t.host+":"+i),WebSocket.__initialize(),n.loaded=!0),r.call(s)}var s=this;if(document.body)return i();t.util.load(i)},n.check=function(){return typeof WebSocket!="undefined"&&"__initialize"in WebSocket&&!!swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},n.xdomainCheck=function(){return!0},typeof window!="undefined"&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),t.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports);if("undefined"!=typeof window)var swfobject=function(){function C(){if(b)return;try{var e=a.getElementsByTagName("body")[0].appendChild(U("span"));e.parentNode.removeChild(e)}catch(t){return}b=!0;var n=c.length;for(var r=0;r<n;r++)c[r]()}function k(e){b?e():c[c.length]=e}function L(t){if(typeof u.addEventListener!=e)u.addEventListener("load",t,!1);else if(typeof a.addEventListener!=e)a.addEventListener("load",t,!1);else if(typeof u.attachEvent!=e)z(u,"onload",t);else if(typeof u.onload=="function"){var n=u.onload;u.onload=function(){n(),t()}}else u.onload=t}function A(){l?O():M()}function O(){var n=a.getElementsByTagName("body")[0],r=U(t);r.setAttribute("type",i);var s=n.appendChild(r);if(s){var o=0;(function(){if(typeof s.GetVariable!=e){var t=s.GetVariable("$version");t&&(t=t.split(" ")[1].split(","),T.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)])}else if(o<10){o++,setTimeout(arguments.callee,10);return}n.removeChild(r),s=null,M()})()}else M()}function M(){var t=h.length;if(t>0)for(var n=0;n<t;n++){var r=h[n].id,i=h[n].callbackFn,s={success:!1,id:r};if(T.pv[0]>0){var o=R(r);if(o)if(W(h[n].swfVersion)&&!(T.wk&&T.wk<312))V(r,!0),i&&(s.success=!0,s.ref=_(r),i(s));else if(h[n].expressInstall&&D()){var u={};u.data=h[n].expressInstall,u.width=o.getAttribute("width")||"0",u.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(u.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(u.align=o.getAttribute("align"));var a={},f=o.getElementsByTagName("param"),l=f.length;for(var c=0;c<l;c++)f[c].getAttribute("name").toLowerCase()!="movie"&&(a[f[c].getAttribute("name")]=f[c].getAttribute("value"));P(u,a,r,i)}else H(o),i&&i(s)}else{V(r,!0);if(i){var p=_(r);p&&typeof p.SetVariable!=e&&(s.success=!0,s.ref=p),i(s)}}}}function _(n){var r=null,i=R(n);if(i&&i.nodeName=="OBJECT")if(typeof i.SetVariable!=e)r=i;else{var s=i.getElementsByTagName(t)[0];s&&(r=s)}return r}function D(){return!w&&W("6.0.65")&&(T.win||T.mac)&&!(T.wk&&T.wk<312)}function P(t,n,r,i){w=!0,g=i||null,y={success:!1,id:r};var o=R(r);if(o){o.nodeName=="OBJECT"?(v=B(o),m=null):(v=o,m=r),t.id=s;if(typeof t.width==e||!/%$/.test(t.width)&&parseInt(t.width,10)<310)t.width="310";if(typeof t.height==e||!/%$/.test(t.height)&&parseInt(t.height,10)<137)t.height="137";a.title=a.title.slice(0,47)+" - Flash Player Installation";var f=T.ie&&T.win?["Active"].concat("").join("X"):"PlugIn",l="MMredirectURL="+u.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+a.title;typeof n.flashvars!=e?n.flashvars+="&"+l:n.flashvars=l;if(T.ie&&T.win&&o.readyState!=4){var c=U("div");r+="SWFObjectNew",c.setAttribute("id",r),o.parentNode.insertBefore(c,o),o.style.display="none",function(){o.readyState==4?o.parentNode.removeChild(o):setTimeout(arguments.callee,10)}()}j(t,n,r)}}function H(e){if(T.ie&&T.win&&e.readyState!=4){var t=U("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(B(e),t),e.style.display="none",function(){e.readyState==4?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(B(e),e)}function B(e){var n=U("div");if(T.win&&T.ie)n.innerHTML=e.innerHTML;else{var r=e.getElementsByTagName(t)[0];if(r){var i=r.childNodes;if(i){var s=i.length;for(var o=0;o<s;o++)(i[o].nodeType!=1||i[o].nodeName!="PARAM")&&i[o].nodeType!=8&&n.appendChild(i[o].cloneNode(!0))}}}return n}function j(n,r,s){var o,u=R(s);if(T.wk&&T.wk<312)return o;if(u){typeof n.id==e&&(n.id=s);if(T.ie&&T.win){var a="";for(var f in n)n[f]!=Object.prototype[f]&&(f.toLowerCase()=="data"?r.movie=n[f]:f.toLowerCase()=="styleclass"?a+=' class="'+n[f]+'"':f.toLowerCase()!="classid"&&(a+=" "+f+'="'+n[f]+'"'));var l="";for(var c in r)r[c]!=Object.prototype[c]&&(l+='<param name="'+c+'" value="'+r[c]+'" />');u.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>",p[p.length]=n.id,o=R(n.id)}else{var h=U(t);h.setAttribute("type",i);for(var d in n)n[d]!=Object.prototype[d]&&(d.toLowerCase()=="styleclass"?h.setAttribute("class",n[d]):d.toLowerCase()!="classid"&&h.setAttribute(d,n[d]));for(var v in r)r[v]!=Object.prototype[v]&&v.toLowerCase()!="movie"&&F(h,v,r[v]);u.parentNode.replaceChild(h,u),o=h}}return o}function F(e,t,n){var r=U("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function I(e){var t=R(e);t&&t.nodeName=="OBJECT"&&(T.ie&&T.win?(t.style.display="none",function(){t.readyState==4?q(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function q(e){var t=R(e);if(t){for(var n in t)typeof t[n]=="function"&&(t[n]=null);t.parentNode.removeChild(t)}}function R(e){var t=null;try{t=a.getElementById(e)}catch(n){}return t}function U(e){return a.createElement(e)}function z(e,t,n){e.attachEvent(t,n),d[d.length]=[e,t,n]}function W(e){var t=T.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function X(n,r,i,s){if(T.ie&&T.mac)return;var o=a.getElementsByTagName("head")[0];if(!o)return;var u=i&&typeof i=="string"?i:"screen";s&&(E=null,S=null);if(!E||S!=u){var f=U("style");f.setAttribute("type","text/css"),f.setAttribute("media",u),E=o.appendChild(f),T.ie&&T.win&&typeof a.styleSheets!=e&&a.styleSheets.length>0&&(E=a.styleSheets[a.styleSheets.length-1]),S=u}T.ie&&T.win?E&&typeof E.addRule==t&&E.addRule(n,r):E&&typeof a.createTextNode!=e&&E.appendChild(a.createTextNode(n+" {"+r+"}"))}function V(e,t){if(!x)return;var n=t?"visible":"hidden";b&&R(e)?R(e).style.visibility=n:X("#"+e,"visibility:"+n)}function $(t){var n=/[\\\"<>\.;]/,r=n.exec(t)!=null;return r&&typeof encodeURIComponent!=e?encodeURIComponent(t):t}var e="undefined",t="object",n="Shockwave Flash",r="ShockwaveFlash.ShockwaveFlash",i="application/x-shockwave-flash",s="SWFObjectExprInst",o="onreadystatechange",u=window,a=document,f=navigator,l=!1,c=[A],h=[],p=[],d=[],v,m,g,y,b=!1,w=!1,E,S,x=!0,T=function(){var s=typeof a.getElementById!=e&&typeof a.getElementsByTagName!=e&&typeof a.createElement!=e,o=f.userAgent.toLowerCase(),c=f.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(o),p=c?/mac/.test(c):/mac/.test(o),d=/webkit/.test(o)?parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,v=!1,m=[0,0,0],g=null;if(typeof f.plugins!=e&&typeof f.plugins[n]==t)g=f.plugins[n].description,g&&(typeof f.mimeTypes==e||!f.mimeTypes[i]||!!f.mimeTypes[i].enabledPlugin)&&(l=!0,v=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),m[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),m[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),m[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof u[["Active"].concat("Object").join("X")]!=e)try{var y=new(window[["Active"].concat("Object").join("X")])(r);y&&(g=y.GetVariable("$version"),g&&(v=!0,g=g.split(" ")[1].split(","),m=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]))}catch(b){}return{w3:s,pv:m,wk:d,ie:v,win:h,mac:p}}(),N=function(){if(!T.w3)return;(typeof a.readyState!=e&&a.readyState=="complete"||typeof a.readyState==e&&(a.getElementsByTagName("body")[0]||a.body))&&C(),b||(typeof a.addEventListener!=e&&a.addEventListener("DOMContentLoaded",C,!1),T.ie&&T.win&&(a.attachEvent(o,function(){a.readyState=="complete"&&(a.detachEvent(o,arguments.callee),C())}),u==top&&function(){if(b)return;try{a.documentElement.doScroll("left")}catch(e){setTimeout(arguments.callee,0);return}C()}()),T.wk&&function(){if(b)return;if(!/loaded|complete/.test(a.readyState)){setTimeout(arguments.callee,0);return}C()}(),L(C))}(),J=function(){T.ie&&T.win&&window.attachEvent("onunload",function(){var e=d.length;for(var t=0;t<e;t++)d[t][0].detachEvent(d[t][1],d[t][2]);var n=p.length;for(var r=0;r<n;r++)I(p[r]);for(var i in T)T[i]=null;T=null;for(var s in swfobject)swfobject[s]=null;swfobject=null})}();return{registerObject:function(e,t,n,r){if(T.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=r,h[h.length]=i,V(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){if(T.w3)return _(e)},embedSWF:function(n,r,i,s,o,u,a,f,l,c){var h={success:!1,id:r};T.w3&&!(T.wk&&T.wk<312)&&n&&r&&i&&s&&o?(V(r,!1),k(function(){i+="",s+="";var p={};if(l&&typeof l===t)for(var d in l)p[d]=l[d];p.data=n,p.width=i,p.height=s;var v={};if(f&&typeof f===t)for(var m in f)v[m]=f[m];if(a&&typeof a===t)for(var g in a)typeof v.flashvars!=e?v.flashvars+="&"+g+"="+a[g]:v.flashvars=g+"="+a[g];if(W(o)){var y=j(p,v,r);p.id==r&&V(r,!0),h.success=!0,h.ref=y}else{if(u&&D()){p.data=u,P(p,v,r,c);return}V(r,!0)}c&&c(h)})):c&&c(h)},switchOffAutoHideShow:function(){x=!1},ua:T,getFlashPlayerVersion:function(){return{major:T.pv[0],minor:T.pv[1],release:T.pv[2]}},hasFlashPlayerVersion:W,createSWF:function(e,t,n){return T.w3?j(e,t,n):undefined},showExpressInstall:function(e,t,n,r){T.w3&&D()&&P(e,t,n,r)},removeSWF:function(e){T.w3&&I(e)},createCSS:function(e,t,n,r){T.w3&&X(e,t,n,r)},addDomLoadEvent:k,addLoadEvent:L,getQueryParamValue:function(e){var t=a.location.search||a.location.hash;if(t){/\?/.test(t)&&(t=t.split("?")[1]);if(e==null)return $(t);var n=t.split("&");for(var r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return $(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(w){var e=R(s);e&&v&&(e.parentNode.replaceChild(v,e),m&&(V(m,!0),T.ie&&T.win&&(v.style.display="block")),g&&g(y)),w=!1}}}}();(function(){if("undefined"==typeof window||window.WebSocket)return;var e=window.console;if(!e||!e.log||!e.error)e={log:function(){},error:function(){}};if(!swfobject.hasFlashPlayerVersion("10.0.0")){e.error("Flash Player >= 10.0.0 is required.");return}location.protocol=="file:"&&e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(e,t,n,r,i){var s=this;s.__id=WebSocket.__nextId++,WebSocket.__instances[s.__id]=s,s.readyState=WebSocket.CONNECTING,s.bufferedAmount=0,s.__events={},t?typeof t=="string"&&(t=[t]):t=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(s.__id,e,t,n||null,r||0,i||null)})},0)},WebSocket.prototype.send=function(e){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var t=WebSocket.__flash.send(this.__id,encodeURIComponent(e));return t<0?!0:(this.bufferedAmount+=t,!1)},WebSocket.prototype.close=function(){if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING)return;this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id)},WebSocket.prototype.addEventListener=function(e,t,n){e in this.__events||(this.__events[e]=[]),this.__events[e].push(t)},WebSocket.prototype.removeEventListener=function(e,t,n){if(!(e in this.__events))return;var r=this.__events[e];for(var i=r.length-1;i>=0;--i)if(r[i]===t){r.splice(i,1);break}},WebSocket.prototype.dispatchEvent=function(e){var t=this.__events[e.type]||[];for(var n=0;n<t.length;++n)t[n](e);var r=this["on"+e.type];r&&r(e)},WebSocket.prototype.__handleEvent=function(e){"readyState"in e&&(this.readyState=e.readyState),"protocol"in e&&(this.protocol=e.protocol);var t;if(e.type=="open"||e.type=="error")t=this.__createSimpleEvent(e.type);else if(e.type=="close")t=this.__createSimpleEvent("close");else{if(e.type!="message")throw"unknown event type: "+e.type;var n=decodeURIComponent(e.message);t=this.__createMessageEvent("message",n)}this.dispatchEvent(t)},WebSocket.prototype.__createSimpleEvent=function(e){if(document.createEvent&&window.Event){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}return{type:e,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(e,t){if(document.createEvent&&window.MessageEvent&&!window.opera){var n=document.createEvent("MessageEvent");return n.initMessageEvent("message",!1,!1,t,null,null,window,null),n}return{type:e,data:t,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(e){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(e)})},WebSocket.__initialize=function(){if(WebSocket.__flash)return;WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation);if(!window.WEB_SOCKET_SWF_LOCATION){e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return}var t=document.createElement("div");t.id="webSocketContainer",t.style.position="absolute",WebSocket.__isFlashLite()?(t.style.left="0px",t.style.top="0px"):(t.style.left="-100px",t.style.top="-100px");var n=document.createElement("div");n.id="webSocketFlash",t.appendChild(n),document.body.appendChild(t),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(t){t.success||e.error("[WebSocket] swfobject.embedSWF failed")})},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var e=0;e<WebSocket.__tasks.length;++e)WebSocket.__tasks[e]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{var t=WebSocket.__flash.receiveEvents();for(var n=0;n<t.length;++n)WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])}catch(r){e.error(r)}},0),!0},WebSocket.__log=function(t){e.log(decodeURIComponent(t))},WebSocket.__error=function(t){e.error(decodeURIComponent(t))},WebSocket.__addTask=function(e){WebSocket.__flash?e():WebSocket.__tasks.push(e)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var e=window.navigator.mimeTypes["application/x-shockwave-flash"];return!e||!e.enabledPlugin||!e.enabledPlugin.filename?!1:e.enabledPlugin.filename.match(/flashlite/i)?!0:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))})(),function(e,t,n){function r(e){if(!e)return;t.Transport.apply(this,arguments),this.sendBuffer=[]}function i(){}e.XHR=r,t.util.inherit(r,t.Transport),r.prototype.open=function(){return this.socket.setBuffer(!1),this.onOpen(),this.get(),this.setCloseTimeout(),this},r.prototype.payload=function(e){var n=[];for(var r=0,i=e.length;r<i;r++)n.push(t.parser.encodePacket(e[r]));this.send(t.parser.encodePayload(n))},r.prototype.send=function(e){return this.post(e),this},r.prototype.post=function(e){function r(){this.readyState==4&&(this.onreadystatechange=i,t.posting=!1,this.status==200?t.socket.setBuffer(!1):t.onClose())}function s(){this.onload=i,t.socket.setBuffer(!1)}var t=this;this.socket.setBuffer(!0),this.sendXHR=this.request("POST"),n.XDomainRequest&&this.sendXHR instanceof XDomainRequest?this.sendXHR.onload=this.sendXHR.onerror=s:this.sendXHR.onreadystatechange=r,this.sendXHR.send(e)},r.prototype.close=function(){return this.onClose(),this},r.prototype.request=function(e){var n=t.util.request(this.socket.isXDomain()),r=t.util.query(this.socket.options.query,"t="+ +(new Date));n.open(e||"GET",this.prepareUrl()+r,!0);if(e=="POST")try{n.setRequestHeader?n.setRequestHeader("Content-type","text/plain;charset=UTF-8"):n.contentType="text/plain"}catch(i){}return n},r.prototype.scheme=function(){return this.socket.options.secure?"https":"http"},r.check=function(e,r){try{var i=t.util.request(r),s=n.XDomainRequest&&i instanceof XDomainRequest,o=e&&e.options&&e.options.secure?"https:":"http:",u=n.location&&o!=n.location.protocol;if(i&&(!s||!u))return!0}catch(a){}return!1},r.xdomainCheck=function(e){return r.check(e,!0)}}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(e){t.Transport.XHR.apply(this,arguments)}e.htmlfile=n,t.util.inherit(n,t.Transport.XHR),n.prototype.name="htmlfile",n.prototype.get=function(){this.doc=new(window[["Active"].concat("Object").join("X")])("htmlfile"),this.doc.open(),this.doc.write("<html></html>"),this.doc.close(),this.doc.parentWindow.s=this;var e=this.doc.createElement("div");e.className="socketio",this.doc.body.appendChild(e),this.iframe=this.doc.createElement("iframe"),e.appendChild(this.iframe);var n=this,r=t.util.query(this.socket.options.query,"t="+ +(new Date));this.iframe.src=this.prepareUrl()+r,t.util.on(window,"unload",function(){n.destroy()})},n.prototype._=function(e,t){this.onData(e);try{var n=t.getElementsByTagName("script")[0];n.parentNode.removeChild(n)}catch(r){}},n.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"}catch(e){}this.doc=null,this.iframe.parentNode.removeChild(this.iframe),this.iframe=null,CollectGarbage()}},n.prototype.close=function(){return this.destroy(),t.Transport.XHR.prototype.close.call(this)},n.check=function(e){if(typeof window!="undefined"&&["Active"].concat("Object").join("X")in window)try{var n=new(window[["Active"].concat("Object").join("X")])("htmlfile");return n&&t.Transport.XHR.check(e)}catch(r){}return!1},n.xdomainCheck=function(){return!1},t.transports.push("htmlfile")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function r(){t.Transport.XHR.apply(this,arguments)}function i(){}e["xhr-polling"]=r,t.util.inherit(r,t.Transport.XHR),t.util.merge(r,t.Transport.XHR),r.prototype.name="xhr-polling",r.prototype.heartbeats=function(){return!1},r.prototype.open=function(){var e=this;return t.Transport.XHR.prototype.open.call(e),!1},r.prototype.get=function(){function t(){this.readyState==4&&(this.onreadystatechange=i,this.status==200?(e.onData(this.responseText),e.get()):e.onClose())}function r(){this.onload=i,this.onerror=i,e.retryCounter=1,e.onData(this.responseText),e.get()}function s(){e.retryCounter++,!e.retryCounter||e.retryCounter>3?e.onClose():e.get()}if(!this.isOpen)return;var e=this;this.xhr=this.request(),n.XDomainRequest&&this.xhr instanceof XDomainRequest?(this.xhr.onload=r,this.xhr.onerror=s):this.xhr.onreadystatechange=t,this.xhr.send(null)},r.prototype.onClose=function(){t.Transport.XHR.prototype.onClose.call(this);if(this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=i;try{this.xhr.abort()}catch(e){}this.xhr=null}},r.prototype.ready=function(e,n){var r=this;t.util.defer(function(){n.call(r)})},t.transports.push("xhr-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t,n){function i(e){t.Transport["xhr-polling"].apply(this,arguments),this.index=t.j.length;var n=this;t.j.push(function(e){n._(e)})}var r=n.document&&"MozAppearance"in n.document.documentElement.style;e["jsonp-polling"]=i,t.util.inherit(i,t.Transport["xhr-polling"]),i.prototype.name="jsonp-polling",i.prototype.post=function(e){function a(){f(),n.socket.setBuffer(!1)}function f(){n.iframe&&n.form.removeChild(n.iframe);try{u=document.createElement('<iframe name="'+n.iframeId+'">')}catch(e){u=document.createElement("iframe"),u.name=n.iframeId}u.id=n.iframeId,n.form.appendChild(u),n.iframe=u}var n=this,r=t.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);if(!this.form){var i=document.createElement("form"),s=document.createElement("textarea"),o=this.iframeId="socketio_iframe_"+this.index,u;i.className="socketio",i.style.position="absolute",i.style.top="0px",i.style.left="0px",i.style.display="none",i.target=o,i.method="POST",i.setAttribute("accept-charset","utf-8"),s.name="d",i.appendChild(s),document.body.appendChild(i),this.form=i,this.area=s}this.form.action=this.prepareUrl()+r,f(),this.area.value=t.JSON.stringify(e);try{this.form.submit()}catch(l){}this.iframe.attachEvent?u.onreadystatechange=function(){n.iframe.readyState=="complete"&&a()}:this.iframe.onload=a,this.socket.setBuffer(!0)},i.prototype.get=function(){var e=this,n=document.createElement("script"),i=t.util.query(this.socket.options.query,"t="+ +(new Date)+"&i="+this.index);this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),n.async=!0,n.src=this.prepareUrl()+i,n.onerror=function(){e.onClose()};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s),this.script=n,r&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},i.prototype._=function(e){return this.onData(e),this.isOpen&&this.get(),this},i.prototype.ready=function(e,n){var i=this;if(!r)return n.call(this);t.util.load(function(){n.call(i)})},i.check=function(){return"document"in n},i.xdomainCheck=function(){return!0},t.transports.push("jsonp-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),typeof define=="function"&&define.amd&&define("appenders/../../deps/socket.io.client.js",[],function(){return io})})(),define("appenders/socketappender",["../appender","../../deps/socket.io.client.js"],function(e,t){var n=function(t){t=t||{},e.call(this,t),this.appendStrings=typeof t.appendStrings!="undefined"?t.appendStrings:!0,this.url=t.url||"http://localhost",this.socket=null};return n.prototype=new e,n.prototype.start=function(e){e=e||function(){};var n=this;if(this.isStarted())return e();this.socket=t.connect(this.url,{"connect timeout":5e3,"max reconnection attempts":5,"try multiple transports":!0,reconnect:!0}),this.socket.on("connect",function(){return n.started=!0,e()}),this.socket.once("connect_failed",function(){return e('No way to establish a socket connection to "'+n.url+'". Ensure the socket server is up and running.')})},n.prototype.stop=function(e){e=e||function(){};var t=this;if(!this.isStarted())return e();if(!this.socket||!this.socket.connected)return this.started=!1,e();this.socket.once("disconnect",function(){return t.started=!1,e()}),this.socket.disconnect()},n.prototype.doAppend=function(e){var t=this.getLayout(),n=e.getLevel(),r=null;this.appendStrings?(r=t.toMessageString(e),this.doAppendMessage(n,r)):(e=t.toLogEvent(e),this.doAppendMessage(n,e))},n.prototype.doAppendMessage=function(e,t){if(typeof console=="undefined")return;this.socket.emit("log",{level:e,message:t})},n}),define("layouts/simpleobjectserializer",["../utils"],function(e){function t(e){var t=String(e);return t.length===1&&(t="0"+t),t}var n=function(r,i){var s=null;return i=typeof i!="undefined"?i:1,typeof r=="undefined"?undefined:e.isString(r)?r:e.isDate(r)?r.getUTCFullYear()+"-"+t(r.getUTCMonth()+1)+"-"+t(r.getUTCDate())+"T"+t(r.getUTCHours())+":"+t(r.getUTCMinutes())+":"+t(r.getUTCSeconds())+"."+String((r.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z":i<=0?"…":(e.isArray(r)?(s=[],e.each(r,function(e){s.push(n(e,i-1))})):e.isObject(r)?(s={},e.each(r,function(e,t){s[t]=n(e,i-1)})):e.isFunction(r)?s="[func]":s=r,s)};return function(e,t,r){var i=n(e,t);return r?JSON.stringify(i):JSON.stringify(i,null,2)}}),define("layouts/jsonlayout",["../layout","./simpleobjectserializer"],function(e,t){var n=function(t,n){t=t||{},e.call(this,t,n),this.compact=t.compact||!1,this.depth=t.depth||2};return n.prototype=new e,n.prototype.toMessageString=function(e){return t(e,this.depth,this.compact)},n}),define("layouts/simpledateformat",[],function(){var e=/('[^']*')|(G+|y+|M+|d+|F+|E+|a+|H+|k+|K+|h+|m+|s+|S+|Z+)|([a-zA-Z]+)|([^a-zA-Z']+)/g,t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=0,i=1,s=2,o=3,u=4,a=5,f={G:r,y:o,M:u,w:s,W:s,D:s,d:s,F:s,E:i,a:r,H:s,k:s,K:s,h:s,m:s,s:s,S:s,Z:a},l=function(e,t){while(e.length<t)e="0"+e;return e},c=function(e,t,n){return t>=4?e:e.substr(0,Math.max(n,t))},h=function(e,t){var n=""+e;return l(n,t)},p=function(e){this.formatString=e};return p.prototype.format=function(p){var d="",v,m=this.formatString;while(v=e.exec(m)){var g=v[1],y=v[2],b=v[3],w=v[4];if(g)g==="''"?d+="'":d+=g.substring(1,g.length-1);else if(!b)if(w)d+=w;else if(y){var E=y.charAt(0),S=y.length,x="";switch(E){case"G":x="AD";break;case"y":x=p.getFullYear();break;case"M":x=p.getMonth();break;case"d":x=p.getDate();break;case"F":x=1+Math.floor((p.getDate()-1)/7);break;case"E":x=n[p.getDay()];break;case"a":x=p.getHours()>=12?"PM":"AM";break;case"H":x=p.getHours();break;case"k":x=p.getHours()||24;break;case"K":x=p.getHours()%12;break;case"h":x=p.getHours()%12||12;break;case"m":x=p.getMinutes();break;case"s":x=p.getSeconds();break;case"S":x=p.getMilliseconds();break;case"Z":x=p.getTimezoneOffset()}switch(f[E]){case r:d+=c(x,S,2);break;case i:d+=c(x,S,3);break;case s:d+=h(x,S);break;case o:if(S<=3){var T=""+x;d+=T.substr(2,2)}else d+=h(x,S);break;case u:S>=3?d+=c(t[x],S,S):d+=h(x+1,S);break;case a:var N=x>0,C=N?"-":"+",k=Math.abs(x),L=""+Math.floor(k/60);L=l(L,2);var A=""+k%60;A=l(A,2),d+=C+L+A}}}return d},p}),define("layouts/patternlayout",["../layout","../utils","./simpledateformat","./simpleobjectserializer"],function(e,t,n,r){var i={absolute:"HH:mm:ss,SSS",compact:"yyyyMMddHHmmssSSS",date:"dd MMM yyyy HH:mm:ss,SSS",iso8601:"yyyy-MM-dd HH:mm:ss,SSS",iso8601_basic:"yyyy-MM-DD HHmmss,SSS"},s={trace:37,log:30,info:36,warn:33,error:31},o=function(t,n){e.call(this,t,n),this.pattern=this.config.pattern||o.DEFAULT_CONVERSION_PATTERN,this.compactObjects=this.config.compactObjects||!1,this.serializeErrorsAsObjects=this.serializeErrorsAsObjects||!1};return o.prototype=new e,o.DEFAULT_CONVERSION_PATTERN="%m%n",o.TTCC_CONVERSION_PATTERN="%r %p %c - %m%n",o.SIMPLE_CONVERSION_PATTERN="%d %p %c - %m%n",o.prototype.toMessageString=function(e){return this.formatLogEvent(e,this.pattern)},o.prototype.formatLogEvent=function(e,o){var u="",a=[],f={matched:"",padding:"",truncation:"",pattern:"",params:"",text:""},l="",c="",h=0,p=[],d="",v=0,m=0,g="",y=null,b=/%(-?[0-9]+)?(\.?[0-9]+)?([cdhmnpr%])(?:\{([^\}]+)\})?|([^%]+)/g;while(a=b.exec(o)){f.matched=a[0],f.padding=a[1],f.truncation=a[2],f.pattern=a[3],f.params=a[4],f.text=a[5],d="";if(f.text){u+=f.text;continue}switch(f.pattern){case"c":c=e.getLoggerName(),f.params?(h=parseInt(f.params,10),p=c.split("."),h>=p.length?d=c:d=p.slice(p.length-h).join(".")):d=c;break;case"d":g=f.params||"ISO8601",g==="ISO8601"?g=i.iso8601:g==="ABSOLUTE"?g=i.absolute:g==="COMPACT"?g=i.compact:g==="DATE"?g=i.date:g==="ISO8601_BASIC"&&(g=i.iso8601_basic),y=new Date(e.getMillis()),d=(new n(g)).format(y);break;case"h":c=f.params||"",d="["+(s[e.getLevel()]||0)+"m"+this.formatLogEvent(e,c)+"[0m";break;case"m":p=t.isArray(e.getMessage())?e.getMessage():[e.getMessage()],l=f.params||" ";for(v=0,m=p.length;v<m;v++)v>0&&(d+=l),t.isString(p[v])?d+=p[v]:p[v]instanceof Error&&!this.serializeErrorsAsObjects?d+=p[v].toString():d+=r(p[v],2,this.compactObjects);break;case"n":d="\n";break;case"p":d=e.getLevel();break;case"r":h=e.getMillis()-this.loggerContext.getStartTime(),d=""+h;break;case"%":d="%";break;default:d=f.matched}f.truncation&&(h=parseInt(f.truncation.substr(1),10),m=d.length,h<m&&(d=d.substring(m-h,m)));if(f.padding)if(f.padding.charAt(0)==="-"){m=parseInt(f.padding.substr(1),10);for(v=d.length;v<m;v++)d+=" "}else{m=parseInt(f.padding,10),c="";for(v=d.length;v<m;v++)c+=" ";d=c+d}u+=d}return u.lastIndexOf("\n")===u.length-1&&(u=u.substring(0,u.length-1)),u},o}),define("woodman-browser",["./logmanager","./appender","./layout","./appenders/consoleappender","./appenders/socketappender","./layouts/jsonlayout","./layouts/patternlayout"],function(e,t,n,r,i,s,o){return e.registerAppender("console",r),e.registerAppender("ConsoleAppender",r),e.registerAppender("socket",i),e.registerAppender("SocketAppender",i),e.registerLayout("default",n),e.registerLayout("json",s),e.registerLayout("JSONLayout",s),e.registerLayout("pattern",o),e.registerLayout("PatternLayout",o),e});var woodman=null;return require(["./woodman-browser"],function(e){woodman=e},null,!0),woodman});
1;/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Wed Jul 20 20:23:43 2011
 */
/**
 * @fileOverview Defines the global Joshfire.framework object exported by the
 * Joshfire framework.
 *
 * The file is a template file that cannot be used directly. It serves as basis
 * for the bootstrap file of each adapter in the framework.
 *
 * To generate the bootstrap files of the different adapters, run the command:
 *  node scripts/bootstraps.js
 *
 * On top of describing the selected adapter, its ancestors and the list of
 * adapted modules that these adapters define, the Joshfire.framework object
 * also sets the base path of the framework used to resolve dependencies in
 * "define" calls. When run client-side, that base path is determined from the
 * script tag that references the bootstrap script in the DOM.
 *
 * Please note that the main script set in the "data-main" attribute cannot be
 * everywhere. In particular:
 * - it must be targeted with a relative path
 * - it must not contain any "../" subpath.
 * These constraints are needed because the location of that script sets the
 * base path of the application for require.js, meaning the real base path used
 * to resolve dependencies. The constraints guarantee that this code can express
 * the path of the framework relative to the location of that main script.
 */

/*global Joshfire:true, module*/

(function() {
  // Create the Joshfire namespace object if it does not already exist
  if (typeof Joshfire === 'undefined') {
    Joshfire = {};
  }

  var JF = {
    /**
     * @lends Joshfire
     */

    /**
     * The version of Joshfire
     * @type {Array}
     */
    version: [0, 9, 3],

    /**
     * DOM Ready util
     * @function
     * @param {Function} callback when finished.
     */
    onReady: function (callback) {
      if (callback) { callback(); }
    },

    /**
     * The current adapter.
     *
     * The <code>bootstraps</code> and <code>optimize</code>
     * <a href="/doc/develop/buildtools">build commands</a> set the property
     * to the appropriate value for each adapter.
     * @type {String}
     */
    adapter: "phone",

    /**
     * The list of adapters the current adapter depends on.
     *
     * The first item in the array is the parent adapter, the second the great
     * parent, and so on. The <a href="/doc/develop/buildtools">build commands</a>
     * use the "dependencies.json" file in each adapter's folder as value for
     * this property.
     * @type {Array}
     */
    adapterDeps: [],

    /**
     * List of modules supported by the current adapter and its dependencies.
     *
     * The <a href="/doc/develop/buildtools">build commands</a> compute that
     * value automatically from the list of JavaScript modules defined in each
     * adapter's folder.
     * @type {Object}
     */
    adapterModules: {
  "android": [
    "dependencies.json",
    "vendor/iscroll"
  ],
  "android-old": [
    "app",
    "dependencies.json",
    "inputs/touch",
    "ui/toolbar",
    "uielements/list",
    "uielements/panel",
    "uielements/video.mediaelement",
    "vendor/iscroll"
  ],
  "browser": [
    "app",
    "inputs/http",
    "inputs/keyboard",
    "inputs/mouse",
    "uielement",
    "uielements/list",
    "uielements/mediacontrols",
    "uielements/page",
    "uielements/panel",
    "uielements/panel.manager",
    "uielements/video.mediaelement",
    "uielements/video.popup",
    "uielements/video.youtube.swf",
    "utils/activitymonitor",
    "utils/datasource",
    "utils/dollar",
    "utils/localstorage",
    "utils/navigation",
    "utils/onready",
    "utils/stresstest"
  ],
  "googletv": [
    "dependencies.json",
    "inputs/keyboard",
    "ui/videoplayer",
    "uielement"
  ],
  "ios": [
    "dependencies.json"
  ],
  "lgtv": [
    "dependencies.json",
    "ui/videoplayer",
    "uielement",
    "utils/dollar"
  ],
  "node": [
    "app.factory",
    "app",
    "class",
    "global.exec",
    "inputs/http",
    "uielements/page",
    "uielements/panel",
    "uielements/panel.manager",
    "uielements/video.mediaelement",
    "utils/datasource",
    "utils/dollar",
    "utils/eventsocket",
    "utils/templatecompiler.cli",
    "utils/templatecompiler",
    "vendor/json2",
    "view"
  ],
  "none": [],
  "philips": [
    "dependencies.json",
    "inputs/remote",
    "ui/videoplayer",
    "uielement",
    "uielements/list",
    "uielements/video.mediaelement",
    "utils/dollar",
    "utils/stresstest"
  ],
  "phone": [
    "collection",
    "ui/toolbar",
    "uielement",
    "utils/dollar",
    "utils/onready"
  ],
  "qt4": [],
  "samsungtv": [
    "dependencies.json",
    "inputs/remote",
    "ui/fadeinpanel",
    "ui/slidepanel",
    "ui/videoplayer",
    "uielement",
    "utils/dollar",
    "utils/onready",
    "utils/widgetapi"
  ],
  "tv": [
    "inputs/remote",
    "ui/cardpanel",
    "ui/grid",
    "ui/horizontallayout",
    "ui/toolbar",
    "ui/verticallist",
    "ui/videoplayer",
    "uielement",
    "utils/dollar",
    "utils/onready"
  ]
},

    /**
     * Debug mode. Will console.log all events
     * @type {boolean}
     */
     debug: false,

    /**
     * Base framework path.
     *
     * The base path is automatically determined from the script tag that
     * references the framework in an HTML file. The code uses the value
     * that may have been set prior to running this code. The optimizer sets
     * the path to the right path beforehand in particular.
     */
    path: (Joshfire.framework || {}).path || ''
  };

  // Try to find the path we were included from.
  // If this fails author will have to set it manually.
  var reAdapter = new RegExp('^(.*)/adapters/' +
    JF.adapter + '/bootstrap\\.js$');
  var scripts = null;
  var match = null;
  var main = '';
  var depth = 0;
  var i = 0;
  var k = 0;
  var prefix = '';
  if (!JF.path && (typeof document !== 'undefined')) {
    scripts = document.getElementsByTagName('script');
    for (i = scripts.length - 1; i >= 0; i--) {
      match = reAdapter.exec(scripts[i].getAttribute('src'));
      if (match) {
        JF.path = match[1];
        if ((JF.path[0] !== '/') && (JF.path.indexOf('//') === -1)) {
          // Relative path. The base folder in require.js is determined
          // by the folder of the main script, which may be different
          // (see above for constraints on the location of data-main script)
          main = scripts[i].getAttribute('data-main');
          if (main) {
            depth = main.split('/').length - 1;
          }
          for (k = 0; k < depth; k++) {
            prefix += '../';
          }
          JF.path = prefix + JF.path;
        }
      }
    }
  }

  if (typeof require !== 'undefined' && require.config) {
    require.config({
      paths: {
        'joshfire-framework': JF.path
      },
      urlArgs: (Joshfire.debug? 'bust=' + (new Date()).getTime() : '')
    });
  }

  // Create the global Joshfire.framework object
  Joshfire.framework = JF;

  // Attach the namespace to the global scope in node.js applications
  if ((typeof module !== 'undefined') && module.exports) {
    module.exports.JoshfireFramework = JF;
  }
}).call(this);
/**
 * @fileOverview Defines the require.js plugin used to reference modules of
 * the Joshfire framework.
 *
 * This plugin responds to dependencies paths such as "joshlib![module]".
 *
 * It cannot be used directly without first setting the right parameters on the
 * global Joshfire.framework object. In particular, the code needs to access:
 * - Joshfire.framework.adapter: the selected adapter
 * - Joshfire.framework.adapterDeps: the list of adapters the selected adapter
 * directly depends on (note the order in the array creates the hierarchy, the
 * first adapter in the array being the direct parent of the selected adapter,
 * the second its great parent and so on)
 * - Joshfire.framework.adapterModules: a table indexed by adapter name that
 * lists the modules defined by each adapter.
 *
 * Given a module name [name], the plugin returns:
 * 1. "joshfire-framework/[xxx]" if [name] is of the form "adapters/none/[xxx]".
 * This use case lets modules depend on their base module without entering an
 * infinite loop where this plugin gets called indefinitely
 *
 * 2. "joshfire-framework/[name]" if [name] starts with "adapters/". This lets
 * modules references other adapters directly.
 *
 * 3. "joshfire-framework/adapters/[xxx]/[name]" if [name] is found in the list
 * of modules of the selected adapter or of one of its direct dependencies.
 *
 * 4. "joshfire-framework/[name]" otherwise, which typically happens for modules
 * that are not overridden in any adapter.
 *
 * For an explanation of require.js plugin functions, see:
 * http://requirejs.org/docs/plugins.html#api
 */
/*global define, Joshfire*/

define('joshlib', {
  normalize: function (name) {
    var path = 'joshfire-framework/';
    var adapters = [Joshfire.framework.adapter].concat(
      Joshfire.framework.adapterDeps);
    var modules = Joshfire.framework.adapterModules;

    if (name.substring(0,14) === 'adapters/none/') {
      // The name targets a base module (through the specific "none" adapter),
      // return the base class
      return path + name.substring(14);
    } else if (name.substring(0,9) === 'adapters/') {
      // The name targets another adapted module
      return path + name;
    }

    // Move up through the hierarchy of adapters created by the selected adapter
    // (starting with the selected adapter itself) and check whether there's an
    // adapted module that matches the requested name each time
    for (var i = 0; i < adapters.length; i++) {
      for (var y = 0; y < modules[adapters[i]].length; y++) {
        if (name === modules[adapters[i]][y]) {
          return path + 'adapters/' + adapters[i] + '/' + name;
        }
      }
    }

    // No adapted module available for this module, use the default one
    return path + name;
  },

  load: function (name, req, load) {
    req([name], function (value) {
      load(value);
    });
  }
});
/**
 * JOSHFIRE: library wrapped in "define" AMD call, code between
 * "Start vanilla" and "End vanilla" is a vanilla copy of Underscore.
 *
 * NB: the library exports itself to a global '_' property.
 */
define('joshfire-framework/vendor/underscore',[], function () {
// Start vanilla Underscore
// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

// Baseline setup
// --------------
(function() {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? null : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return null;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);
// End vanilla Underscore

  // Return global Underscore object
  // (see line 64 and following)
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      return exports;
    }
    return exports._;
  } else {
    return this._;
  }
});

/*!
 * jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Matches dashed string for camelizing
	rdashAlpha = /-([a-z]|[0-9])/ig,
	rmsPrefix = /^-ms-/,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = ( context ? context.ownerDocument || context : document );

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.7.1",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.add( fn );

		return this;
	},

	eq: function( i ) {
		i = +i;
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.fireWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).off( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery.Callbacks( "once memory" );

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	// A crude way of determining if an object is a window
	isWindow: function( obj ) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return ( new Function( "return " + data ) )();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array, i ) {
		var len;

		if ( array ) {
			if ( indexOf ) {
				return indexOf.call( array, elem, i );
			}

			len = array.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in array && array[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, key, value, exec, fn, pass ) {
		var length = elems.length;

		// Setting many attributes
		if ( typeof key === "object" ) {
			for ( var k in key ) {
				jQuery.access( elems, k, key[k], exec, fn, value );
			}
			return elems;
		}

		// Setting one attribute
		if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = !pass && exec && jQuery.isFunction(value);

			for ( var i = 0; i < length; i++ ) {
				fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
			}

			return elems;
		}

		// Getting an attribute
		return length ? fn( elems[0], key ) : undefined;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

return jQuery;

})();


// String to Object flags format cache
var flagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
function createFlags( flags ) {
	var object = flagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( flagsCache[ flags ] || createFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!memory;
			}
		};

	return self;
};




var // Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({

	Deferred: function( func ) {
		var doneList = jQuery.Callbacks( "once memory" ),
			failList = jQuery.Callbacks( "once memory" ),
			progressList = jQuery.Callbacks( "memory" ),
			state = "pending",
			lists = {
				resolve: doneList,
				reject: failList,
				notify: progressList
			},
			promise = {
				done: doneList.add,
				fail: failList.add,
				progress: progressList.add,

				state: function() {
					return state;
				},

				// Deprecated
				isResolved: doneList.fired,
				isRejected: failList.fired,

				then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
					deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
					return this;
				},
				always: function() {
					deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
					return this;
				},
				pipe: function( fnDone, fnFail, fnProgress ) {
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( {
							done: [ fnDone, "resolve" ],
							fail: [ fnFail, "reject" ],
							progress: [ fnProgress, "notify" ]
						}, function( handler, data ) {
							var fn = data[ 0 ],
								action = data[ 1 ],
								returned;
							if ( jQuery.isFunction( fn ) ) {
								deferred[ handler ](function() {
									returned = fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
									}
								});
							} else {
								deferred[ handler ]( newDefer[ action ] );
							}
						});
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					if ( obj == null ) {
						obj = promise;
					} else {
						for ( var key in promise ) {
							obj[ key ] = promise[ key ];
						}
					}
					return obj;
				}
			},
			deferred = promise.promise({}),
			key;

		for ( key in lists ) {
			deferred[ key ] = lists[ key ].fire;
			deferred[ key + "With" ] = lists[ key ].fireWith;
		}

		// Handle state
		deferred.done( function() {
			state = "resolved";
		}, failList.disable, progressList.lock ).fail( function() {
			state = "rejected";
		}, doneList.disable, progressList.lock );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = sliceDeferred.call( arguments, 0 ),
			i = 0,
			length = args.length,
			pValues = new Array( length ),
			count = length,
			pCount = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred(),
			promise = deferred.promise();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					deferred.resolveWith( deferred, args );
				}
			};
		}
		function progressFunc( i ) {
			return function( value ) {
				pValues[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				deferred.notifyWith( promise, pValues );
			};
		}
		if ( length > 1 ) {
			for ( ; i < length; i++ ) {
				if ( args[ i ] && args[ i ].promise && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject, progressFunc(i) );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return promise;
	}
});




jQuery.support = (function() {

	var support,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		fragment,
		tds,
		events,
		eventName,
		i,
		isSupported,
		div = document.createElement( "div" ),
		documentElement = document.documentElement;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute("href") === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Tests for enctype support on a form(#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains its value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");
	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.lastChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	fragment.removeChild( input );
	fragment.appendChild( div );

	div.innerHTML = "";

	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if ( window.getComputedStyle ) {
		marginDiv = document.createElement( "div" );
		marginDiv.style.width = "0";
		marginDiv.style.marginRight = "0";
		div.style.width = "2px";
		div.appendChild( marginDiv );
		support.reliableMarginRight =
			( parseInt( ( window.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
	}

	// Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for( i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	fragment.removeChild( div );

	// Null elements to avoid leaks in IE
	fragment = select = opt = marginDiv = div = input = null;

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, outer, inner, table, td, offsetSupport,
			conMarginTop, ptlm, vb, style, html,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		conMarginTop = 1;
		ptlm = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
		vb = "visibility:hidden;border:0;";
		style = "style='" + ptlm + "border:5px solid #000;padding:0;'";
		html = "<div " + style + "><div></div></div>" +
			"<table " + style + " cellpadding='0' cellspacing='0'>" +
			"<tr><td></td></tr></table>";

		container = document.createElement("div");
		container.style.cssText = vb + "width:0;height:0;position:static;top:0;margin-top:" + conMarginTop + "px";
		body.insertBefore( container, body.firstChild );

		// Construct the test element
		div = document.createElement("div");
		container.appendChild( div );

		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		// (only IE 8 fails this test)
		div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName( "td" );
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Check if empty table cells still have offsetWidth/Height
		// (IE <= 8 fail this test)
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Figure out if the W3C box model works as expected
		div.innerHTML = "";
		div.style.width = div.style.paddingLeft = "1px";
		jQuery.boxModel = support.boxModel = div.offsetWidth === 2;

		if ( typeof div.style.zoom !== "undefined" ) {
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			// (IE < 8 does this)
			div.style.display = "inline";
			div.style.zoom = 1;
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 2 );

			// Check if elements with layout shrink-wrap their children
			// (IE 6 does this)
			div.style.display = "";
			div.innerHTML = "<div style='width:4px;'></div>";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 2 );
		}

		div.style.cssText = ptlm + vb;
		div.innerHTML = html;

		outer = div.firstChild;
		inner = outer.firstChild;
		td = outer.nextSibling.firstChild.firstChild;

		offsetSupport = {
			doesNotAddBorder: ( inner.offsetTop !== 5 ),
			doesAddBorderForTableAndCells: ( td.offsetTop === 5 )
		};

		inner.style.position = "fixed";
		inner.style.top = "20px";

		// safari subtracts parent border width here which is 5px
		offsetSupport.fixedPosition = ( inner.offsetTop === 20 || inner.offsetTop === 15 );
		inner.style.position = inner.style.top = "";

		outer.style.overflow = "hidden";
		outer.style.position = "relative";

		offsetSupport.subtractsBorderForOverflowNotVisible = ( inner.offsetTop === -5 );
		offsetSupport.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== conMarginTop );

		body.removeChild( container );
		div  = container = null;

		jQuery.extend( support, offsetSupport );
	});

	return support;
})();




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var privateCache, thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey,
			isEvents = name === "events";

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!isEvents && !pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = ++jQuery.uuid;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		privateCache = thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Users should not attempt to inspect the internal events object using jQuery.data,
		// it is undocumented and subject to change. But does anyone listen? No.
		if ( isEvents && !thisCache[ name ] ) {
			return privateCache.events;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i, l,

			// Reference to internal data cache key
			internalKey = jQuery.expando,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ internalKey ] : internalKey;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				}

				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		// Ensure that `cache` is not a window object #10080
		if ( jQuery.support.deleteExpando || !cache.setInterval ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the cache and need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ internalKey ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( internalKey );
			} else {
				elem[ internalKey ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var parts, attr, name,
			data = null;

		if ( typeof key === "undefined" ) {
			if ( this.length ) {
				data = jQuery.data( this[0] );

				if ( this[0].nodeType === 1 && !jQuery._data( this[0], "parsedAttrs" ) ) {
					attr = this[0].attributes;
					for ( var i = 0, l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( this[0], name, data[ name ] );
						}
					}
					jQuery._data( this[0], "parsedAttrs", true );
				}
			}

			return data;

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			// Try to fetch any internally stored data first
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
				data = dataAttr( this[0], key, data );
			}

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;

		} else {
			return this.each(function() {
				var self = jQuery( this ),
					args = [ parts[0], value ];

				self.triggerHandler( "setData" + parts[1] + "!", args );
				jQuery.data( this, key, value );
				self.triggerHandler( "changeData" + parts[1] + "!", args );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				jQuery.isNumeric( data ) ? parseFloat( data ) :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery._data( elem, deferDataKey );
	if ( defer &&
		( src === "queue" || !jQuery._data(elem, queueDataKey) ) &&
		( src === "mark" || !jQuery._data(elem, markDataKey) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery._data( elem, queueDataKey ) &&
				!jQuery._data( elem, markDataKey ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.fire();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = ( type || "fx" ) + "mark";
			jQuery._data( elem, type, (jQuery._data( elem, type ) || 0) + 1 );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery._data( elem, key ) || 1) - 1 );
			if ( count ) {
				jQuery._data( elem, key, count );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		var q;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			q = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			hooks = {};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			jQuery._data( elem, type + ".run", hooks );
			fn.call( elem, function() {
				jQuery.dequeue( elem, type );
			}, hooks );
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue " + type + ".run", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function() {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery.Callbacks( "once memory" ), true ) )) {
				count++;
				tmp.add( resolve );
			}
		}
		resolve();
		return defer.promise();
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	nodeHook, boolHook, fixSpecified;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.prop );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, i, l, elem, className, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			classNames = ( value || "" ).split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						className = (" " + elem.className + " ").replace( rclass, " " );
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[ c ] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.nodeName.toLowerCase() ] || jQuery.valHooks[ elem.type ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.nodeName.toLowerCase() ] || jQuery.valHooks[ this.type ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, i, max, option,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				i = one ? index : 0;
				max = one ? index + 1 : options.length;
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},

	attr: function( elem, name, value, pass ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var propName, attrNames, name, l,
			i = 0;

		if ( value && elem.nodeType === 1 ) {
			attrNames = value.toLowerCase().split( rspace );
			l = attrNames.length;

			for ( ; i < l; i++ ) {
				name = attrNames[ i ];

				if ( name ) {
					propName = jQuery.propFix[ name ] || name;

					// See #9699 for explanation of this approach (setting first, then removal)
					jQuery.attr( elem, name, "" );
					elem.removeAttribute( getSetAttribute ? name : propName );

					// Set corresponding property to false for boolean attributes
					if ( rboolean.test( name ) && propName in elem ) {
						elem[ propName ] = false;
					}
				}
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
jQuery.attrHooks.tabindex = jQuery.propHooks.tabIndex;

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode,
			property = jQuery.prop( elem, name );
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	fixSpecified = {
		name: true,
		id: true
	};

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			return ret && ( fixSpecified[ name ] ? ret.nodeValue !== "" : ret.specified ) ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return ( ret.nodeValue = value + "" );
		}
	};

	// Apply the nodeHook to tabindex
	jQuery.attrHooks.tabindex.set = nodeHook.set;

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			if ( value === "" ) {
				value = "false";
			}
			nodeHook.set( elem, value, name );
		}
	};
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = "" + value );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});




var rformElems = /^(?:textarea|input|select)$/i,
	rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/,
	rhoverHack = /\bhover(\.\S+)?\b/,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	quickParse = function( selector ) {
		var quick = rquickIs.exec( selector );
		if ( quick ) {
			//   0  1    2   3
			// [ _, tag, id, class ]
			quick[1] = ( quick[1] || "" ).toLowerCase();
			quick[3] = quick[3] && new RegExp( "(?:^|\\s)" + quick[3] + "(?:\\s|$)" );
		}
		return quick;
	},
	quickIs = function( elem, m ) {
		var attrs = elem.attributes || {};
		return (
			(!m[1] || elem.nodeName.toLowerCase() === m[1]) &&
			(!m[2] || (attrs.id || {}).value === m[2]) &&
			(!m[3] || m[3].test( (attrs[ "class" ] || {}).value ))
		);
	},
	hoverHack = function( events ) {
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	add: function( elem, types, handler, data, selector ) {

		var elemData, eventHandle, events,
			t, tns, type, namespaces, handleObj,
			handleObjIn, quick, handlers, special;

		// Don't attach events to noData or text/comment nodes (allow plain objects tho)
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		events = elemData.events;
		if ( !events ) {
			elemData.events = events = {};
		}
		eventHandle = elemData.handle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = jQuery.trim( hoverHack(types) ).split( " " );
		for ( t = 0; t < types.length; t++ ) {

			tns = rtypenamespace.exec( types[t] ) || [];
			type = tns[1];
			namespaces = ( tns[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: tns[1],
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				quick: quickParse( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			handlers = events[ type ];
			if ( !handlers ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var elemData = jQuery.hasData( elem ) && jQuery._data( elem ),
			t, tns, type, origType, namespaces, origCount,
			j, events, special, handle, eventType, handleObj;

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
		for ( t = 0; t < types.length; t++ ) {
			tns = rtypenamespace.exec( types[t] ) || [];
			type = origType = tns[1];
			namespaces = tns[2];

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector? special.delegateType : special.bindType ) || type;
			eventType = events[ type ] || [];
			origCount = eventType.length;
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;

			// Remove matching events
			for ( j = 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					 ( !handler || handler.guid === handleObj.guid ) &&
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					eventType.splice( j--, 1 );

					if ( handleObj.selector ) {
						eventType.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( eventType.length === 0 && origCount !== eventType.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery.removeData( elem, [ "events", "handle" ], true );
		}
	},

	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Don't do events on text and comment nodes
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
			return;
		}

		// Event object or event type
		var type = event.type || event,
			namespaces = [],
			cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType;

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "!" ) >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf( "." ) >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.isTrigger = true;
		event.exclusive = exclusive;
		event.namespace = namespaces.join( "." );
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

		// Handle a global trigger
		if ( !elem ) {

			// TODO: Stop taunting the data cache; remove global events and always attach to document
			cache = jQuery.cache;
			for ( i in cache ) {
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
				}
			}
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		eventPath = [[ elem, special.bindType || type ]];
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
			old = null;
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push([ cur, bubbleType ]);
				old = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( old && old === elem.ownerDocument ) {
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
			}
		}

		// Fire handlers on the event path
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

			cur = eventPath[i][0];
			event.type = eventPath[i][1];

			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Note that this is a bare JS function and not a jQuery handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				// IE<9 dies on focus/blur to hidden element (#1486)
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					old = elem[ ontype ];

					if ( old ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( old ) {
						elem[ ontype ] = old;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event || window.event );

		var handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
			delegateCount = handlers.delegateCount,
			args = [].slice.call( arguments, 0 ),
			run_all = !event.exclusive && !event.namespace,
			handlerQueue = [],
			i, j, cur, jqcur, ret, selMatch, matched, matches, handleObj, sel, related;

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Determine handlers that should run if there are delegated events
		// Avoid disabled elements in IE (#6911) and non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && !event.target.disabled && !(event.button && event.type === "click") ) {

			// Pregenerate a single jQuery object for reuse with .is()
			jqcur = jQuery(this);
			jqcur.context = this.ownerDocument || this;

			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {
				selMatch = {};
				matches = [];
				jqcur[0] = cur;
				for ( i = 0; i < delegateCount; i++ ) {
					handleObj = handlers[ i ];
					sel = handleObj.selector;

					if ( selMatch[ sel ] === undefined ) {
						selMatch[ sel ] = (
							handleObj.quick ? quickIs( cur, handleObj.quick ) : jqcur.is( sel )
						);
					}
					if ( selMatch[ sel ] ) {
						matches.push( handleObj );
					}
				}
				if ( matches.length ) {
					handlerQueue.push({ elem: cur, matches: matches });
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( handlers.length > delegateCount ) {
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
		}

		// Run delegates first; they may want to stop propagation beneath us
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
			matched = handlerQueue[ i ];
			event.currentTarget = matched.elem;

			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
				handleObj = matched.matches[ j ];

				// Triggered event must either 1) be non-exclusive and have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

					event.data = handleObj.data;
					event.handleObj = handleObj;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		return event.result;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop,
			originalEvent = event,
			fixHook = jQuery.event.fixHooks[ event.type ] || {},
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = jQuery.Event( originalEvent );

		for ( i = copy.length; i; ) {
			prop = copy[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Target should not be a text node (#504, Safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
		if ( event.metaKey === undefined ) {
			event.metaKey = event.ctrlKey;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady
		},

		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},

		focus: {
			delegateType: "focusin"
		},
		blur: {
			delegateType: "focusout"
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		if ( elem.detachEvent ) {
			elem.detachEvent( "on" + type, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj,
				selector = handleObj.selector,
				ret;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !form._submit_attached ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						// If form was submitted by the user, bubble the event up the tree
						if ( this.parentNode && !event.isTrigger ) {
							jQuery.event.simulate( "submit", this.parentNode, event, true );
						}
					});
					form._submit_attached = true;
				}
			});
			// return undefined since we don't need an event listener
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
							jQuery.event.simulate( "change", this, event, true );
						}
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !elem._change_attached ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					elem._change_attached = true;
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on.call( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			var handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace? handleObj.type + "." + handleObj.namespace : handleObj.type,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( var type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	live: function( types, data, fn ) {
		jQuery( this.context ).on( types, this.selector, data, fn );
		return this;
	},
	die: function( types, fn ) {
		jQuery( this.context ).off( types, this.selector || "**", fn );
		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length == 1? this.off( selector, "**" ) : this.off( types, selector, fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}

	if ( rkeyEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
	}

	if ( rmouseEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
	}
});



/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	expando = "sizcache" + (Math.random() + '').replace('.', ''),
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rReturn = /\r\n/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context, seed );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set, seed );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set, i, len, match, type, left;

	if ( !expr ) {
		return [];
	}

	for ( i = 0, len = Expr.order.length; i < len; i++ ) {
		type = Expr.order[i];
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		type, found, item, filter, left,
		i, pass,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				filter = Expr.filter[ type ];
				left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							pass = not ^ found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var getText = Sizzle.getText = function( elem ) {
    var i, node,
		nodeType = elem.nodeType,
		ret = "";

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 ) {
			// Use textContent || innerText for elements
			if ( typeof elem.textContent === 'string' ) {
				return elem.textContent;
			} else if ( typeof elem.innerText === 'string' ) {
				// Replace IE's carriage returns
				return elem.innerText.replace( rReturn, '' );
			} else {
				// Traverse it's children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
	} else {

		// If no nodeType, this is expected to be an array
		for ( i = 0; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			if ( node.nodeType !== 8 ) {
				ret += getText( node );
			}
		}
	}
	return ret;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},
	
	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},
		
		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			
			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc) 
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var first, last,
				doneName, parent, cache,
				count, diff,
				type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}

					if ( type === "first" ) { 
						return true; 
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) { 
							return false; 
						}
					}

					return true;

				case "nth":
					first = match[2];
					last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					doneName = match[0];
					parent = elem.parentNode;
	
					if ( parent && (parent[ expando ] !== doneName || !elem.nodeIndex) ) {
						count = 0;
						
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 

						parent[ expando ] = doneName;
					}
					
					diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match;
		},
		
		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Sizzle.attr ?
					Sizzle.attr( elem, name ) :
					Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				!type && Sizzle.attr ?
				result != null :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
				
				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );
					
					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}
				
				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );
						
					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}
							
						} else {
							return makeArray( [], extra );
						}
					}
					
					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );
	
		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try { 
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem[ expando ] = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;
			
			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem[ expando ] = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833) 
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context, seed ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet, seed );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
Sizzle.selectors.attrMap = {};
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})();


var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var self = this,
			i, l;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		var ret = this.pushStack( "", "find", selector ),
			length, n, r;

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && ( 
			typeof selector === "string" ?
				// If this is a positional selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				POS.test( selector ) ? 
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var ret = [], i, l, cur = this[0];
		
		// Array (deprecated as of jQuery 1.7)
		if ( jQuery.isArray( selectors ) ) {
			var level = 1;

			while ( cur && cur.ownerDocument && cur !== context ) {
				for ( i = 0; i < selectors.length; i++ ) {

					if ( jQuery( cur ).is( selectors[ i ] ) ) {
						ret.push({ selector: selectors[ i ], elem: cur, level: level });
					}
				}

				cur = cur.parentNode;
				level++;
			}

			return ret;
		}

		// String
		var pos = POS.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( i = 0, l = this.length; i < l; i++ ) {
			cur = this[i];

			while ( cur ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;

				} else {
					cur = cur.parentNode;
					if ( !cur || !cur.ownerDocument || cur === context || cur.nodeType === 11 ) {
						break;
					}
				}
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, slice.call( arguments ).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}




function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
	safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style)/i,
	rnocache = /<(?:script|object|embed|option|style)/i,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")", "i"),
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	},
	safeFragment = createSafeFragment( document );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery( this );

				self.text( text.call(this, i, self.text()) );
			});
		}

		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}

		return jQuery.text( this );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery.clean(arguments) );
			return set;
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

		// See if we can take a shortcut and just use innerHTML
		} else if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {

			value = value.replace(rxhtmlTag, "<$1></$2>");

			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( this[i].nodeType === 1 ) {
						jQuery.cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}

			// If using innerHTML throws an exception, use the fallback method
			} catch(e) {
				this.empty().append( value );
			}

		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery( this );

				self.html( value.call(this, i, self.html()) );
			});

		} else {
			this.empty().append( value );
		}

		return this;
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.length ?
				this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
				this;
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, fragment, parent,
			value = args[0],
			scripts = [];

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			parent = value && value.parentNode;

			// If we're in a fragment, just use that instead of building a new one
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };

			} else {
				results = jQuery.buildFragment( args, this, scripts );
			}

			fragment = results.fragment;

			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length, lastIndex = l - 1; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						// Make sure that we do not leak memory by inadvertently discarding
						// the original fragment (which might have attached data) instead of
						// using it; in addition, use the original fragment object for the last
						// item instead of first because it can end up being emptied incorrectly
						// in certain situations (Bug #8070).
						// Fragments from the fragment cache must always be cloned and never used
						// in place.
						results.cacheable || ( l > 1 && i < lastIndex ) ?
							jQuery.clone( fragment, true, true ) :
							fragment
					);
				}
			}

			if ( scripts.length ) {
				jQuery.each( scripts, evalScript );
			}
		}

		return this;
	}
});

function root( elem, cur ) {
	return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type + ( events[ type ][ i ].namespace ? "." : "" ) + events[ type ][ i ].namespace, events[ type ][ i ], events[ type ][ i ].data );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if ( nodeName === "object" ) {
		dest.outerHTML = src.outerHTML;

	} else if ( nodeName === "input" && (src.type === "checkbox" || src.type === "radio") ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set
		if ( src.checked ) {
			dest.defaultChecked = dest.checked = src.checked;
		}

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults, doc,
	first = args[ 0 ];

	// nodes may contain either an explicit document object,
	// a jQuery collection or context object.
	// If nodes[0] contains a valid object to assign to doc
	if ( nodes && nodes[0] ) {
		doc = nodes[0].ownerDocument || nodes[0];
	}

	// Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if ( !doc.createDocumentFragment ) {
		doc = document;
	}

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && doc === document &&
		first.charAt(0) === "<" && !rnocache.test( first ) &&
		(jQuery.support.checkClone || !rchecked.test( first )) &&
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

		cacheable = true;

		cacheresults = jQuery.fragments[ first ];
		if ( cacheresults && cacheresults !== 1 ) {
			fragment = cacheresults;
		}
	}

	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ first ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [],
			insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;

		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;

		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = ( i > 0 ? this.clone(true) : this ).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( typeof elem.getElementsByTagName !== "undefined" ) {
		return elem.getElementsByTagName( "*" );

	} else if ( typeof elem.querySelectorAll !== "undefined" ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( elem.type === "checkbox" || elem.type === "radio" ) {
		elem.defaultChecked = elem.checked;
	}
}
// Finds all inputs and passes them to fixDefaultChecked
function findInputs( elem ) {
	var nodeName = ( elem.nodeName || "" ).toLowerCase();
	if ( nodeName === "input" ) {
		fixDefaultChecked( elem );
	// Skip scripts, get other children
	} else if ( nodeName !== "script" && typeof elem.getElementsByTagName !== "undefined" ) {
		jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
	}
}

// Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
function shimCloneNode( elem ) {
	var div = document.createElement( "div" );
	safeFragment.appendChild( div );

	div.innerHTML = elem.outerHTML;
	return div.firstChild;
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var srcElements,
			destElements,
			i,
			// IE<=8 does not properly clone detached, unknown element nodes
			clone = jQuery.support.html5Clone || !rnoshimcache.test( "<" + elem.nodeName ) ?
				elem.cloneNode( true ) :
				shimCloneNode( elem );

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var checkScriptType;

		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		var ret = [], j;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Trim whitespace, otherwise indexOf won't work as expected
					var tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase(),
						wrap = wrapMap[ tag ] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div");

					// Append wrapper element to unknown element safe doc fragment
					if ( context === document ) {
						// Use the fragment we've already created for this document
						safeFragment.appendChild( div );
					} else {
						// Use a fragment created with the owner document
						createSafeFragment( context ).appendChild( div );
					}

					// Go to html and back, then peel off extra wrappers
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;
				}
			}

			// Resets defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			var len;
			if ( !jQuery.support.appendChecked ) {
				if ( elem[0] && typeof (len = elem.length) === "number" ) {
					for ( j = 0; j < len; j++ ) {
						findInputs( elem[j] );
					}
				} else {
					findInputs( elem );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}

		if ( fragment ) {
			checkScriptType = function( elem ) {
				return !elem.type || rscriptType.test( elem.type );
			};
			for ( i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );

				} else {
					if ( ret[i].nodeType === 1 ) {
						var jsTags = jQuery.grep( ret[i].getElementsByTagName( "script" ), checkScriptType );

						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}

		return ret;
	},

	cleanData: function( elems ) {
		var data, id,
			cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
				continue;
			}

			id = elem[ jQuery.expando ];

			if ( id ) {
				data = cache[ id ];

				if ( data && data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );

						// This is a shortcut to avoid jQuery.event.remove's overhead
						} else {
							jQuery.removeEvent( elem, type, data.handle );
						}
					}

					// Null the DOM reference to avoid IE6/7/8 leak (#7054)
					if ( data.handle ) {
						data.handle.elem = null;
					}
				}

				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];

				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}

				delete cache[ id ];
			}
		}
	}
});

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "/*$0*/" ) );
	}

	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}




var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	// fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	rrelNum = /^([\-+])=([\-+.\de]+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],
	curCSS,

	getComputedStyle,
	currentStyle;

jQuery.fn.css = function( name, value ) {
	// Setting 'undefined' is a no-op
	if ( arguments.length === 2 && value === undefined ) {
		return this;
	}

	return jQuery.access( this, name, value, true, function( elem, name, value ) {
		return value !== undefined ?
			jQuery.style( elem, name, value ) :
			jQuery.css( elem, name );
	});
};

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity", "opacity" );
					return ret === "" ? "1" : ret;

				} else {
					return elem.style.opacity;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, origName = jQuery.camelCase( name ),
			style = elem.style, hooks = jQuery.cssHooks[ origName ];

		name = jQuery.cssProps[ origName ] || origName;

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( +( ret[1] + 1) * +ret[2] ) + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra ) {
		var ret, hooks;

		// Make sure that we're working with the right name
		name = jQuery.camelCase( name );
		hooks = jQuery.cssHooks[ name ];
		name = jQuery.cssProps[ name ] || name;

		// cssFloat needs a special treatment
		if ( name === "cssFloat" ) {
			name = "float";
		}

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks && (ret = hooks.get( elem, true, extra )) !== undefined ) {
			return ret;

		// Otherwise, if a way to get the computed value exists, use that
		} else if ( curCSS ) {
			return curCSS( elem, name );
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};

		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});

// DEPRECATED, Use jQuery.css() instead
jQuery.curCSS = jQuery.css;

jQuery.each(["height", "width"], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			var val;

			if ( computed ) {
				if ( elem.offsetWidth !== 0 ) {
					return getWH( elem, name, extra );
				} else {
					jQuery.swap( elem, cssShow, function() {
						val = getWH( elem, name, extra );
					});
				}

				return val;
			}
		},

		set: function( elem, value ) {
			if ( rnumpx.test( value ) ) {
				// ignore negative width and height values #1599
				value = parseFloat( value );

				if ( value >= 0 ) {
					return value + "px";
				}

			} else {
				return value;
			}
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( parseFloat( RegExp.$1 ) / 100 ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery(function() {
	// This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				var ret;
				jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						ret = curCSS( elem, "margin-right", "marginRight" );
					} else {
						ret = elem.style.marginRight;
					}
				});
				return ret;
			}
		};
	}
});

if ( document.defaultView && document.defaultView.getComputedStyle ) {
	getComputedStyle = function( elem, name ) {
		var ret, defaultView, computedStyle;

		name = name.replace( rupper, "-$1" ).toLowerCase();

		if ( (defaultView = elem.ownerDocument.defaultView) &&
				(computedStyle = defaultView.getComputedStyle( elem, null )) ) {
			ret = computedStyle.getPropertyValue( name );
			if ( ret === "" && !jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
				ret = jQuery.style( elem, name );
			}
		}

		return ret;
	};
}

if ( document.documentElement.currentStyle ) {
	currentStyle = function( elem, name ) {
		var left, rsLeft, uncomputed,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret === null && style && (uncomputed = style[ name ]) ) {
			ret = uncomputed;
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {

			// Remember the original values
			left = style.left;
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ( ret || 0 );
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

curCSS = getComputedStyle || currentStyle;

function getWH( elem, name, extra ) {

	// Start with offset property
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		which = name === "width" ? cssWidth : cssHeight,
		i = 0,
		len = which.length;

	if ( val > 0 ) {
		if ( extra !== "border" ) {
			for ( ; i < len; i++ ) {
				if ( !extra ) {
					val -= parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
				}
				if ( extra === "margin" ) {
					val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
				} else {
					val -= parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
				}
			}
		}

		return val + "px";
	}

	// Fall back to computed then uncomputed css if necessary
	val = curCSS( elem, name, name );
	if ( val < 0 || val == null ) {
		val = elem.style[ name ] || 0;
	}
	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Add padding, border, margin
	if ( extra ) {
		for ( ; i < len; i++ ) {
			val += parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
			if ( extra !== "padding" ) {
				val += parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
			}
			if ( extra === "margin" ) {
				val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
			}
		}
	}

	return val + "px";
}

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth,
			height = elem.offsetHeight;

		return ( width === 0 && height === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Document location
	ajaxLocation,

	// Document location segments
	ajaxLocParts,

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		if ( jQuery.isFunction( func ) ) {
			var dataTypes = dataTypeExpression.toLowerCase().split( rspacesAjax ),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

			// For each dataType in the dataTypeExpression
			for ( ; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters ),
		selection;

	for ( ; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.extend({
	load: function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf( " " );
		if ( off >= 0 ) {
			var selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			// Complete callback (responseText is used internally)
			complete: function( jqXHR, status, responseText ) {
				// Store the response as specified by the jqXHR object
				responseText = jqXHR.responseText;
				// If successful, inject the HTML into all the matched elements
				if ( jqXHR.isResolved() ) {
					// #4825: Get the actual response in case
					// a dataFilter is present in ajaxSettings
					jqXHR.done(function( r ) {
						responseText = r;
					});
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						responseText );
				}

				if ( callback ) {
					self.each( callback, [ responseText, status, jqXHR ] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},

	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.on( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// ifModified key
			ifModifiedKey,
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// The jqXHR state
			state = 0,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || "abort";
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			var isSuccess,
				success,
				error,
				statusText = nativeStatusText,
				response = responses ? ajaxHandleResponses( s, jqXHR, responses ) : undefined,
				lastModified,
				etag;

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					if ( ( lastModified = jqXHR.getResponseHeader( "Last-Modified" ) ) ) {
						jQuery.lastModified[ ifModifiedKey ] = lastModified;
					}
					if ( ( etag = jqXHR.getResponseHeader( "Etag" ) ) ) {
						jQuery.etag[ ifModifiedKey ] = etag;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					try {
						success = ajaxConvert( s, response );
						statusText = "success";
						isSuccess = true;
					} catch(e) {
						// We have a parsererror
						statusText = "parsererror";
						error = e;
					}
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = "" + ( nativeStatusText || statusText );

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.add;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for ( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.then( tmp, tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( rspacesAjax );

		// Determine if a cross-domain request is in order
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] != ajaxLocParts[ 1 ] || parts[ 2 ] != ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefiler, stop there
		if ( state === 2 ) {
			return false;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already
				jqXHR.abort();
				return false;

		}

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		return jqXHR;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		var s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : value;
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( var prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	}
});

function buildParams( prefix, obj, traditional, add ) {
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && obj != null && typeof obj === "object" ) {
		// Serialize object item.
		for ( var name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
		// Current and previous dataTypes
		current = dataTypes[ 0 ],
		prev,
		// Conversion expression
		conversion,
		// Conversion function
		conv,
		// Conversion functions (transitive conversion)
		conv1,
		conv2;

	// For each dataType in the chain
	for ( i = 1; i < length; i++ ) {

		// Create converters map
		// with lowercased keys
		if ( i === 1 ) {
			for ( key in s.converters ) {
				if ( typeof key === "string" ) {
					converters[ key.toLowerCase() ] = s.converters[ key ];
				}
			}
		}

		// Get the dataTypes
		prev = current;
		current = dataTypes[ i ];

		// If current is auto dataType, update it to prev
		if ( current === "*" ) {
			current = prev;
		// If no auto and dataTypes are actually different
		} else if ( prev !== "*" && prev !== current ) {

			// Get the converter
			conversion = prev + " " + current;
			conv = converters[ conversion ] || converters[ "* " + current ];

			// If there is no direct converter, search transitively
			if ( !conv ) {
				conv2 = undefined;
				for ( conv1 in converters ) {
					tmp = conv1.split( " " );
					if ( tmp[ 0 ] === prev || tmp[ 0 ] === "*" ) {
						conv2 = converters[ tmp[1] + " " + current ];
						if ( conv2 ) {
							conv1 = converters[ conv1 ];
							if ( conv1 === true ) {
								conv = conv2;
							} else if ( conv2 === true ) {
								conv = conv1;
							}
							break;
						}
					}
				}
			}
			// If we found no converter, dispatch an error
			if ( !( conv || conv2 ) ) {
				jQuery.error( "No conversion from " + conversion.replace(" "," to ") );
			}
			// If found converter is not an equivalence
			if ( conv !== true ) {
				// Convert with 1 or 2 converters accordingly
				response = conv ? conv( response ) : conv2( conv1(response) );
			}
		}
	}
	return response;
}




var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		return jQuery.expando + "_" + ( jsc++ );
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var inspectData = s.contentType === "application/x-www-form-urlencoded" &&
		( typeof s.data === "string" );

	if ( s.dataTypes[ 0 ] === "jsonp" ||
		s.jsonp !== false && ( jsre.test( s.url ) ||
				inspectData && jsre.test( s.data ) ) ) {

		var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[ jsonpCallback ],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

		if ( s.jsonp !== false ) {
			url = url.replace( jsre, replace );
			if ( s.url === url ) {
				if ( inspectData ) {
					data = data.replace( jsre, replace );
				}
				if ( s.data === data ) {
					// Add callback manually
					url += (/\?/.test( url ) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
				}
			}
		}

		s.url = url;
		s.data = data;

		// Install callback
		window[ jsonpCallback ] = function( response ) {
			responseContainer = [ response ];
		};

		// Clean-up function
		jqXHR.always(function() {
			// Set callback back to previous value
			window[ jsonpCallback ] = previous;
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( previous ) ) {
				window[ jsonpCallback ]( responseContainer[ 0 ] );
			}
		});

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( jsonpCallback + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Delegate to script
		return "script";
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});




var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0,
	xhrCallbacks;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var xhr = s.xhr(),
						handle,
						i;

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occured
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}
									responses.text = xhr.responseText;

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					// if we're in sync mode or it's in cache
					// and has been retrieved directly (IE6 & IE7)
					// we need to manually fire the callback
					if ( !s.async || xhr.readyState === 4 ) {
						callback();
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}




var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	],
	fxNow;

jQuery.fn.extend({
	show: function( speed, easing, callback ) {
		var elem, display;

		if ( speed || speed === 0 ) {
			return this.animate( genFx("show", 3), speed, easing, callback );

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !jQuery._data(elem, "olddisplay") && display === "none" ) {
						display = elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( display === "" && jQuery.css(elem, "display") === "none" ) {
						jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					if ( display === "" || display === "none" ) {
						elem.style.display = jQuery._data( elem, "olddisplay" ) || "";
					}
				}
			}

			return this;
		}
	},

	hide: function( speed, easing, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, easing, callback);

		} else {
			var elem, display,
				i = 0,
				j = this.length;

			for ( ; i < j; i++ ) {
				elem = this[i];
				if ( elem.style ) {
					display = jQuery.css( elem, "display" );

					if ( display !== "none" && !jQuery._data( elem, "olddisplay" ) ) {
						jQuery._data( elem, "olddisplay", display );
					}
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				if ( this[i].style ) {
					this[i].style.display = "none";
				}
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2, callback ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2, callback);
		}

		return this;
	},

	fadeTo: function( speed, to, easing, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, easing, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed( speed, easing, callback );

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete, [ false ] );
		}

		// Do not change referenced properties as per-property easing will be lost
		prop = jQuery.extend( {}, prop );

		function doAnimation() {
			// XXX 'this' does not always have a nodeName when running the
			// test suite

			if ( optall.queue === false ) {
				jQuery._mark( this );
			}

			var opt = jQuery.extend( {}, optall ),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p, e,
				parts, start, end, unit,
				method;

			// will store per property easing and be used to determine when an animation is complete
			opt.animatedProperties = {};

			for ( p in prop ) {

				// property name normalization
				name = jQuery.camelCase( p );
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
				}

				val = prop[ name ];

				// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
				if ( jQuery.isArray( val ) ) {
					opt.animatedProperties[ name ] = val[ 1 ];
					val = prop[ name ] = val[ 0 ];
				} else {
					opt.animatedProperties[ name ] = opt.specialEasing && opt.specialEasing[ name ] || opt.easing || 'swing';
				}

				if ( val === "hide" && hidden || val === "show" && !hidden ) {
					return opt.complete.call( this );
				}

				if ( isElement && ( name === "height" || name === "width" ) ) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opt.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height animated
					if ( jQuery.css( this, "display" ) === "inline" &&
							jQuery.css( this, "float" ) === "none" ) {

						// inline-level elements accept inline-block;
						// block-level elements need to be inline with layout
						if ( !jQuery.support.inlineBlockNeedsLayout || defaultDisplay( this.nodeName ) === "inline" ) {
							this.style.display = "inline-block";

						} else {
							this.style.zoom = 1;
						}
					}
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			for ( p in prop ) {
				e = new jQuery.fx( this, opt, p );
				val = prop[ p ];

				if ( rfxtypes.test( val ) ) {

					// Tracks whether to show or hide based on private
					// data attached to the element
					method = jQuery._data( this, "toggle" + p ) || ( val === "toggle" ? hidden ? "show" : "hide" : 0 );
					if ( method ) {
						jQuery._data( this, "toggle" + p, method === "show" ? "hide" : "show" );
						e[ method ]();
					} else {
						e[ val ]();
					}

				} else {
					parts = rfxnum.exec( val );
					start = e.cur();

					if ( parts ) {
						end = parseFloat( parts[2] );
						unit = parts[3] || ( jQuery.cssNumber[ p ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" ) {
							jQuery.style( this, p, (end || 1) + unit);
							start = ( (end || 1) / e.cur() ) * start;
							jQuery.style( this, p, start + unit);
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ( (parts[ 1 ] === "-=" ? -1 : 1) * end ) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			}

			// For JS strict compliance
			return true;
		}

		return optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},

	stop: function( type, clearQueue, gotoEnd ) {
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var index,
				hadTimers = false,
				timers = jQuery.timers,
				data = jQuery._data( this );

			// clear marker counters if we know they won't be
			if ( !gotoEnd ) {
				jQuery._unmark( true, this );
			}

			function stopQueue( elem, data, index ) {
				var hooks = data[ index ];
				jQuery.removeData( elem, index, true );
				hooks.stop( gotoEnd );
			}

			if ( type == null ) {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && index.indexOf(".run") === index.length - 4 ) {
						stopQueue( this, data, index );
					}
				}
			} else if ( data[ index = type + ".run" ] && data[ index ].stop ){
				stopQueue( this, data, index );
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					if ( gotoEnd ) {

						// force the next step to be the last
						timers[ index ]( true );
					} else {
						timers[ index ].saveState();
					}
					hadTimers = true;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( !( gotoEnd && hadTimers ) ) {
				jQuery.dequeue( this, type );
			}
		});
	}

});

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout( clearFxNow, 0 );
	return ( fxNow = jQuery.now() );
}

function clearFxNow() {
	fxNow = undefined;
}

// Generate parameters to create a standard animation
function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice( 0, num )), function() {
		obj[ this ] = type;
	});

	return obj;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx( "show", 1 ),
	slideUp: genFx( "hide", 1 ),
	slideToggle: genFx( "toggle", 1 ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function( noUnmark ) {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			} else if ( noUnmark !== false ) {
				jQuery._unmark( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ( ( -Math.cos( p*Math.PI ) / 2 ) + 0.5 ) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		options.orig = options.orig || {};
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		( jQuery.fx.step[ this.prop ] || jQuery.fx.step._default )( this );
	},

	// Get the current size
	cur: function() {
		if ( this.elem[ this.prop ] != null && (!this.elem.style || this.elem.style[ this.prop ] == null) ) {
			return this.elem[ this.prop ];
		}

		var parsed,
			r = jQuery.css( this.elem, this.prop );
		// Empty strings, null, undefined and "auto" are converted to 0,
		// complex values such as "rotate(1rad)" are returned as is,
		// simple values such as "10px" are parsed to Float.
		return isNaN( parsed = parseFloat( r ) ) ? !r || r === "auto" ? 0 : r : parsed;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		var self = this,
			fx = jQuery.fx;

		this.startTime = fxNow || createFxNow();
		this.end = to;
		this.now = this.start = from;
		this.pos = this.state = 0;
		this.unit = unit || this.unit || ( jQuery.cssNumber[ this.prop ] ? "" : "px" );

		function t( gotoEnd ) {
			return self.step( gotoEnd );
		}

		t.queue = this.options.queue;
		t.elem = this.elem;
		t.saveState = function() {
			if ( self.options.hide && jQuery._data( self.elem, "fxshow" + self.prop ) === undefined ) {
				jQuery._data( self.elem, "fxshow" + self.prop, self.start );
			}
		};

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval( fx.tick, fx.interval );
		}
	},

	// Simple 'show' function
	show: function() {
		var dataShow = jQuery._data( this.elem, "fxshow" + this.prop );

		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = dataShow || jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any flash of content
		if ( dataShow !== undefined ) {
			// This show is picking up where a previous hide or show left off
			this.custom( this.cur(), dataShow );
		} else {
			this.custom( this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur() );
		}

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = jQuery._data( this.elem, "fxshow" + this.prop ) || jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom( this.cur(), 0 );
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var p, n, complete,
			t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options;

		if ( gotoEnd || t >= options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			options.animatedProperties[ this.prop ] = true;

			for ( p in options.animatedProperties ) {
				if ( options.animatedProperties[ p ] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				// Reset the overflow
				if ( options.overflow != null && !jQuery.support.shrinkWrapBlocks ) {

					jQuery.each( [ "", "X", "Y" ], function( index, value ) {
						elem.style[ "overflow" + value ] = options.overflow[ index ];
					});
				}

				// Hide the element if the "hide" operation was done
				if ( options.hide ) {
					jQuery( elem ).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( options.hide || options.show ) {
					for ( p in options.animatedProperties ) {
						jQuery.style( elem, p, options.orig[ p ] );
						jQuery.removeData( elem, "fxshow" + p, true );
						// Toggle data is no longer needed
						jQuery.removeData( elem, "toggle" + p, true );
					}
				}

				// Execute the complete function
				// in the event that the complete function throws an exception
				// we must ensure it won't be called twice. #5684

				complete = options.complete;
				if ( complete ) {

					options.complete = false;
					complete.call( elem );
				}
			}

			return false;

		} else {
			// classical easing cannot be used with an Infinity duration
			if ( options.duration == Infinity ) {
				this.now = t;
			} else {
				n = t - this.startTime;
				this.state = n / options.duration;

				// Perform the easing function, defaults to swing
				this.pos = jQuery.easing[ options.animatedProperties[this.prop] ]( this.state, n, 0, 1, options.duration );
				this.now = this.start + ( (this.end - this.start) * this.pos );
			}
			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},

	interval: 13,

	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},

	speeds: {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style( fx.elem, "opacity", fx.now );
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

// Adds width/height step functions
// Do not set anything below 0
jQuery.each([ "width", "height" ], function( i, prop ) {
	jQuery.fx.step[ prop ] = function( fx ) {
		jQuery.style( fx.elem, prop, Math.max(0, fx.now) + fx.unit );
	};
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

// Try to restore the default display value of an element
function defaultDisplay( nodeName ) {

	if ( !elemdisplay[ nodeName ] ) {

		var body = document.body,
			elem = jQuery( "<" + nodeName + ">" ).appendTo( body ),
			display = elem.css( "display" );
		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if ( display === "none" || display === "" ) {
			// No iframe to use yet, so create it
			if ( !iframe ) {
				iframe = document.createElement( "iframe" );
				iframe.frameBorder = iframe.width = iframe.height = 0;
			}

			body.appendChild( iframe );

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if ( !iframeDoc || !iframe.createElement ) {
				iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
				iframeDoc.write( ( document.compatMode === "CSS1Compat" ? "<!doctype html>" : "" ) + "<html><body>" );
				iframeDoc.close();
			}

			elem = iframeDoc.createElement( nodeName );

			iframeDoc.body.appendChild( elem );

			display = jQuery.css( elem, "display" );
			body.removeChild( iframe );
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return elemdisplay[ nodeName ];
}




var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0], box;

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		try {
			box = elem.getBoundingClientRect();
		} catch(e) {}

		var doc = elem.ownerDocument,
			docElem = doc.documentElement;

		// Make sure we're not dealing with a disconnected DOM node
		if ( !box || !jQuery.contains( docElem, elem ) ) {
			return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
		}

		var body = doc.body,
			win = getWindow(doc),
			clientTop  = docElem.clientTop  || body.clientTop  || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top  = box.top  + scrollTop  - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: top, left: left };
	};

} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.support.doesNotAddBorder && !(jQuery.support.doesAddBorderForTableAndCells && rtable.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent;
				offsetParent = elem.offsetParent;
			}

			if ( jQuery.support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.offset = {

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;

	jQuery.fn[ method ] = function( val ) {
		var elem, win;

		if ( val === undefined ) {
			elem = this[ 0 ];

			if ( !elem ) {
				return null;
			}

			win = getWindow( elem );

			// Return the scroll offset
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}

		// Set the scroll offset
		return this.each(function() {
			win = getWindow( this );

			if ( win ) {
				win.scrollTo(
					!i ? val : jQuery( win ).scrollLeft(),
					 i ? val : jQuery( win ).scrollTop()
				);

			} else {
				this[ method ] = val;
			}
		});
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}




// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function( i, name ) {

	var type = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn[ "inner" + name ] = function() {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, "padding" ) ) :
			this[ type ]() :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn[ "outer" + name ] = function( margin ) {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, margin ? "margin" : "border" ) ) :
			this[ type ]() :
			null;
	};

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}

		if ( jQuery.isFunction( size ) ) {
			return this.each(function( i ) {
				var self = jQuery( this );
				self[ type ]( size.call( this, i, self[ type ]() ) );
			});
		}

		if ( jQuery.isWindow( elem ) ) {
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
			var docElemProp = elem.document.documentElement[ "client" + name ],
				body = elem.document.body;
			return elem.document.compatMode === "CSS1Compat" && docElemProp ||
				body && body[ "client" + name ] || docElemProp;

		// Get document width or height
		} else if ( elem.nodeType === 9 ) {
			// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
			return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

		// Get or set width or height on the element
		} else if ( size === undefined ) {
			var orig = jQuery.css( elem, type ),
				ret = parseFloat( orig );

			return jQuery.isNumeric( ret ) ? ret : orig;

		// Set the width or height on the element (default to pixels if value is unitless)
		} else {
			return this.css( type, typeof size === "string" ? size : size + "px" );
		}
	};

});




// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define('joshfire-framework/vendor/jquery',[], function () { return jQuery; } );
}



})( window );
define('joshfire-framework/adapters/phone/utils/dollar',["joshlib!vendor/jquery"],function($) {
	return $;
});
/**
 * JOSHFIRE: library wrapped in "define" AMD call.
 *
 * The rest of the code is a verbatim copy of the backbone.js
 * library but for a few lines of code commented out in this
 * version. The few lines of code commented out are flagged
 * with "JOSHFIRE". In a non-AMD version of Backbone, they are
 * used to import Underscore and jQuery/Zepto. Both libraries
 * are directly imported by the call to "define".
 */
define('joshfire-framework/vendor/backbone',[
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar'
], function (_, $) {
// Start almost vanilla Backbone.js lib (check lines flagged with JOSHFIRE)
//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both the browser and the server.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.0.0';

  /* JOSHFIRE: commented out as this would conflict with "define" call
     JOSHFIRE: provide our own $
  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$;
  */
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    _.extend(this, _.pick(options, modelOptions));
    if (options.parse) attrs = this.parse(attrs, options) || {};
    if (defaults = _.result(this, 'defaults')) {
      attrs = _.defaults({}, attrs, defaults);
    }
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // A list of options to be attached directly to the model, if provided.
  var modelOptions = ['url', 'urlRoot', 'collection'];

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = true;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      // If we're not waiting and attributes exist, save acts as `set(attr).save(null, opts)`.
      if (attrs && (!options || !options.wait) && !this.set(attrs, options)) return false;

      options = _.extend({validate: true}, options);

      // Do not persist invalid models.
      if (!this._validate(attrs, options)) return false;

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) === '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options || {}, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.url) this.url = options.url;
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, merge: false, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.defaults(options || {}, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      models = _.isArray(models) ? models.slice() : [models];
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults(options || {}, setOptions);
      if (options.parse) models = this.parse(models, options);
      if (!_.isArray(models)) models = models ? [models] : [];
      var i, l, model, attrs, existing, sort;
      var at = options.at;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        if (!(model = this._prepareModel(models[i], options))) continue;

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(model)) {
          if (options.remove) modelMap[existing.cid] = true;
          if (options.merge) {
            existing.set(model.attributes, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }

        // This is a new model, push it to the `toAdd` list.
        } else if (options.add) {
          toAdd.push(model);

          // Listen to added models' events, and index models for lookup by
          // `id` and by `cid`.
          model.on('all', this._onModelEvent, this);
          this._byId[model.cid] = model;
          if (model.id != null) this._byId[model.id] = model;
        }
      }

      // Remove nonexistent models if appropriate.
      if (options.remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          splice.apply(this.models, [at, 0].concat(toAdd));
        } else {
          push.apply(this.models, toAdd);
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      if (options.silent) return this;

      // Trigger `add` events.
      for (i = 0, l = toAdd.length; i < l; i++) {
        (model = toAdd[i]).trigger('add', model, this, options);
      }

      // Trigger `sort` if the collection was sorted.
      if (sort) this.trigger('sort', this, options);
      return this;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      options.previousModels = this.models;
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: this.length}, options));
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function(begin, end) {
      return this.models.slice(begin, end);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj.id != null ? obj.id : obj.cid || obj];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Figure out the smallest index at which a model should be inserted so as
    // to maintain order.
    sortedIndex: function(model, value, context) {
      value || (value = this.comparator);
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _.sortedIndex(this.models, model, iterator, context);
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options || (options = {});
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model._validate(attrs, options)) {
        this.trigger('invalid', this, attrs, options);
        return false;
      }
      return model;
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf',
    'isEmpty', 'chain'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(e.g. model, collection, id, className)* are
    // attached directly to the view.  See `viewOptions` for an exhaustive
    // list.
    _configure: function(options) {
      if (this.options) options = _.extend({}, _.result(this, 'options'), options);
      _.extend(this, _.pick(options, viewOptions));
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && window.ActiveXObject &&
          !(window.external && window.external.msActiveXFilteringEnabled)) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        callback && callback.apply(router, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional){
                     return optional ? match : '([^\/]+)';
                   })
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param) {
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname;
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.substr(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      fragment = this.getFragment(fragment || '');
      if (this.fragment === fragment) return;
      this.fragment = fragment;
      var url = this.root + fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function (model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

}).call(this);
// End almost vanilla Backbone.js lib

  // Return global Backbone object
  return this.Backbone;
});

define('joshfire-framework/utils/ismobile',[],function() {
  var isMobile;
  (function(a){a||(a=isMobile={});var c=/Android/i,b=navigator.userAgent;a.apple={};a.apple.phone=/iPhone/i.test(b);a.apple.ipod=/iPod/i.test(b);a.apple.tablet=/iPad/i.test(b);a.apple.device=a.apple.phone||a.apple.ipod||a.apple.tablet;a.android={};a.android.phone=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i.test(b);a.android.tablet=!a.android.phone&&c.test(b);a.android.device=a.android.phone||a.android.tablet;a.seven_inch=/(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)/i.test(b)})(isMobile);
  return isMobile;
});
/*! Joshfire Framework module - Copyright 2013 Joshfire, MIT license */
/**
 * @fileOverview Exposes the Woodman library to the external world.
 *
 * The Woodman library cannot be used directly because we want Woodman calls
 * that appear throughout the modules of the Joshfire framework not to log
 * anything by default, even when Woodman is used within an app that references
 * the framework.
 *
 * This module wraps the Woodman library to silence all loggers of the
 * Joshfire framework library. Applications that want to re-enable these traces
 * simply need to override this setting within the "loggers" property of their
 * Woodman library with a logger that applies to the "joshfire.framework"
 * namespace, e.g.:
 *   {
 *     name: 'joshfire.framework',
 *     level: 'all'
 *   }
 *
 * References to this module are automatically removed by the framework
 * optimizer to save space in the generated code.
 */

define('joshfire-framework/utils/woodman',['joshlib!utils/woodmanbase'], function (woodman) {
  /**
   * Internal function that takes a Woodman configuration as input and updates
   * it to silence all framework traces by default
   *
   * @function
   * @param {Object} config The Woodman configuration
   * @return {Object} The updated config. Note updates are made in place, so
   *  return object is effectively the same as the object provided as input
   */
  var updateConfig = function (config) {
    config = config || {};
    config.loggers = config.loggers || [];

    var i = 0;
    var found = false;
    for (i = 0; i < config.loggers.length; i++) {
      if (config.loggers[i] &&
        (config.loggers[i].name === 'joshfire.framework')) {
        found = true;
        break;
      }
    }

    if (!found) {
      config.loggers.push({
        name: 'joshfire.framework',
        level: 'off'
      });
    }

    return config;
  };

  // Pointers to the base functions
  var initialize = woodman.initialize;
  var load = woodman.load;

  // Override the initialize function to silence framework traces by default
  woodman.initialize = function (config) {
    initialize(updateConfig(config));
  };

  // Override the load function to silence framework traces by default
  woodman.load = function (config, callback) {
    load(updateConfig(config), callback);
  };

  // Return the Woodman library
  return woodman;
});
/**
 * @fileOverview Base View class for the Joshfire Framework.
 *
 * The base view derives from Backbone's view to add:
 *
 * 1. a three-step rendering logic on top of Backbone's "render" logic. The
 * view exposes a "rendered" flag so that applications and derived classes may
 * tell when the the view is rendered and when it's not. See below for details.
 *
 * 2. "show"/"hide" functions to display or hide the view after rendering. The
 * view exposes a "hidden" flag used internally not to update the DOM uselessly
 * when the code calls show/hide more than once.
 *
 * 3. a "remove" function on top of Backbone's "remove" logic that sets a
 * "removed" flag, meant as a gatekeeper to detect and prevent actions attempted
 * on a view that should be up for garbage collection.
 *
 * 4. an images loader that extracts and fetches the images in the background
 * right after the view has been rendered and flags the view as loading in the
 * meantime.
 *
 * 5. a "load" event triggered when the view is done rendering (directly for
 * views that do not use the images loader)
 *
 * 6. a "scrollTop" function that attempts to scroll the view back to the top
 * of the page if possible.
 *
 * The typical life cycle of a view is:
 * - the view is created, initialization options help set its specificities
 * - the view gets rendered with a call to "render" or by its parent view
 * if the view happens to be the child of a container view.
 * - the view listens to events on models, collections, views, whatever and
 * updates itself as needed.
 * - the view gets removed from the DOM through a call to "remove", either
 * directly or by its parent view.
 * - that's it, the view should be garbage collected after that.
 *
 * The framework defines various views that derive from this base class,
 * in particular to add "container" logic for views that are to contain
 * other views.
 *
 * The rendering mechanism of a view is a three-step process:
 *
 * a) generate: Computes the HTML content to render as a string. This step
 * may be asynchronous, meaning it can be deported server-side or in a worker
 * as needed. The generate method either returns the inner HTML content to
 * put in the wrapping element associated with the view, or the outer HTML
 * content (wrapping element included), depending on the value of its first
 * parameter.
 *
 * b) setContent: Sets the HTML content prepared by generate as inner HTML
 * of the wrapping element.
 *
 * c) enhance: Completes the code with additional logic (e.g. event handlers)
 *
 * Unless absolutely needed, the "render" function should never have to be
 * overridden in derivated classes. Note that function sets the "rendered"
 * flag at the end of the rendering process.
 *
 * All views used in the framework must derive from this base class and must
 * respect those three steps (in particular, the HTML content must be prepared
 * as a string before it is applied to the underlying DOM element).
 *
 * Actually, all views used in the framework should rather derive from the
 * UIElement class (that class is a synonymous to View in the generic case but
 * is overridden in device-specific and capability-specific adapters)
 *
 * IMPORTANT: unless you have a good reason not to, you should always call
 * the "initialize" function of the parent's class from within the "initialize"
 * function of a derived class, using something such as:
 *  initialize: function (options) {
 *   View.prototype.initialize.call(this, options);
 *  }
 * ... replacing "View" with the appropriate parent's class name in your code.
 */

/*global define*/

define('joshfire-framework/view',[
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore'
], function ($, woodman, Backbone, _) {
  var logger = woodman.getLogger('joshfire.framework.view');

  /**
   * Base View class.
   *
   * All views in the framework extend this base class.
   *
   * The base view itself is an extension to Backbone views that introduces:
   * - a three-step asynchronous rendering logic on top of Backbone's "render"
   * logic, with "generate", "setContent" and "enhance"
   * - a "rendered" flag set when the view has already been rendered. This flag
   * may be used to detect cases when updating the view is not needed since it
   * has simply not yet been rendered.
   * - show/hide functions
   * - an images loader mechanism that renders a loading spinner while images
   * get loaded in the background. The "imageLoad" event is triggered whenever
   * a new image has been loaded. The "imagesLoad" event is triggered when all
   * images have been loaded.
   * - a "load" event triggered when the view is rendered and fully loaded,
   * unless the "customLoadEvent" option was set when the view was created.
   */
  var newView = Backbone.View.extend({

    /**
     * Shortcut to underscore's templating function
     */
    compileTemplate: _.template,


    /**
     * The rendered flag is set when the view is rendered for the first time.
     *
     * The flag is maintained internally but not used. Derived classes may use
     * that flag to detect whether the view needs to be updated or rendered.
     *
     * The only way to reset the flag once set is to call the "remove" function
     * which also removes all events that the view listened to and, in derived
     * classes, possible models and collections that were bound to the view.
     *
     * The rendered flag and the removed flag are mutually exclusive.
     *
     * @type {boolean}
     */
    rendered: false,


    /**
     * The removed flag is set when the view is removed from the DOM through a
     * call to the "remove" function.
     *
     * The flag is maintained internally. It is mostly intended as a gatekeeper
     * to ensure that nothing runs once the view has been removed. It is used
     * by the "callIfNotRemoved" function.
     *
     * Once removed, the only way to put a view back into the DOM is to render
     * the view again.
     *
     * The rendered flag and the removed flag are mutually exclusive.
     *
     * @type {boolean}
     */
    removed: false,


    /**
     * The hidden flag is set when the view is hidden from the DOM tree.
     *
     * Note the flag may be set when the view has not yet been rendered,
     * typically when the view is created. When that happens, the root element
     * of the view receives a "display: none" style attribute when the view is
     * rendered.
     *
     * @type {boolean}
     */
    hidden: false,


    /**
     * Initializes the log ID used to trace the events of the view.
     *
     * The function sets "this.logid" to a unique ID that identifies the view.
     * That value is computed from the provided parameters, falling back to
     * Backbone's "this.cid" when no better ID could be found.
     *
     * The function should be called at the beginning of the initialize
     * method, typically before the first call to "logger.log".
     *
     * The function can be called multiple times. It will only set the
     * log ID the first time it is called.
     *
     * @function
     * @param {Object} options The options object passed to "initialize"
     */
    initializeLogId: function (options) {
      if (this.logid) return;
      options = options || {};
      this.logid = options.logid ||
        this.cid + (options.name ? '-' + options.name : '');
    },


    /**
     * Initialization code that gets executed when the view is created
     *
     * @function
     * @param {Object} options View options
     *  (options.data is kept in the view's data property)
     */
    initialize: function (options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      // Should the view be rendered hidden?
      this.hidden = !!options.hidden;

      this.data = options.data || {};
      this.loadImagesSmoothly = options.loadImagesSmoothly || false;
      this.imageClass = options.imageClass;
      this.processImageEl = options.processImageEl;

      // Set the image extractor if defined, or use default one
      this.getImages = options.getImages || _.bind(function () {
        // BEWARE: $.map('img', blah) is different from $('img').map(blah)
        // in Zepto 1.0rc1 (the order of parameters is not the same).
        // Use $.map for a consistent behavior between Zepto and jQuery
        var images = $.map(this.$('img'), function (el) {
          if (this.imageClass) {
            $(el).addClass(this.imageClass);
          }
          return {
            el: el,
            url: $(el).attr('src')
          };
        });
        return images;
      }, this);

      this.customLoadEvent = options.customLoadEvent || false;
      this.loadingClass = options.loadingClass || null;
      if (this.loadingClass) {
        if (!_.isString(this.loadingClass)) {
          this.loadingClass = 'loading';
        }
      }
      this.onScroll = options.onScroll || this.onScroll || null;
      this.onScrollHandler = _.bind(this.onScrollHandler, this);
    },

    /**
     * Renders the view.
     *
     * This function should never need to be overwritten in derivated classes:
     * it implements the three-step generate / setContent / enhance logic.
     *
     * Rendering may be asynchronous, so there is no guarantee that rendering
     * is done when this function returns (although most views are rendered
     * synchronously in practice).
     *
     * @function
     * @return {newView} A reference to the current object for chaining purpose
     */
    render: function (cb) {
      logger.log(this.logid, 'render');
      this.generate(_.bind(function (err, html) {
        // TODO: react on error!
        if (html !== false) {
          this.setContent(html);
        }
        this.enhance();
        if (typeof cb === 'function') cb();
      }, this));
    },

    /**
     * Sets the HTML content of the view to the DOM element associated with the
     * view.
     *
     * The HTML content of the view is typically that returned by generate.
     *
     * Note the HTML content is set with "$.append" to ensure <script> tags are
     * correctly handled.
     *
     * IMPORTANT: Container views should override that function to update the
     * root element of the view(s) they contain. They should still call this
     * base function (if not, remember to set the "rendered" flag and to take
     * the "hidden" flag into account).
     *
     * @function
     * @param {string} html The HTML content to render
     *  (it should be the inner content)
     */
    setContent: function (html) {
      // Ensure the view is hidden if so requested, or shown otherwise.
      // Note we don't call the view's "hide" and "show" methods not to trigger
      // events that are only triggered when the view's "hidden" state changes.
      if (this.hidden) {
        this.$el.hide();
      }
      else {
        this.$el.show();
      }
      this.$el.html('');
      this.$el.append(html);
      this.removed = false;
      this.rendered = true;
    },

    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * Default implementation returns an empty string. Override this function
     * in derivated classes to return meaningful HTML content.
     *
     * Generation may be asynchronous. The callback function receives the
     * error or the generated HTML content.
     *
     * @function
     * @param {function} cb Callback function
     */
    generate: function (cb) {
      logger.warn(this.logid, 'generate',
        'abstract method called, concrete method missing from current class?');
      cb(null, '');
    },


    /**
     * Returns the HTML content wrapped in the view's DOM element.
     *
     * The function returns the HTML content that would be returned by
     * a serialization of the DOM element associated DOM element
     * after a call to render.
     *
     * This function is useful for container views: such views should call
     * the wrapContent function of their children with the HTML content
     * returned by their generate function to compute the appropriate outerHTML
     * content for the child view without having to convert the HTML to
     * a DOM element and back to an HTML string.
     *
     *
     * Notes:
     * - the function does not alter the underlying DOM element in any way
     * since it could be rendered with other data when the function is called.
     * - the function would perhaps better be integrated as a flag parameter
     * of the generate function that container views must set when calling
     * their children's generate method. All views that override "generate"
     * would need to be updated, and that would not bring much difference
     * in the end (container views would need to remember to set the flag as
     * they need to remember to call wrapContent with this implementation),
     * so leaving it as is for now to reduce the amount of changes made to
     * the framework.
     *
     * @function
     * @param {string} innerHTML Inner HTML that is to be rendered.
     * @return {string} Wrapped content.
     */
    wrapContent: function (innerHTML, childName) {
      logger.log(this.logid, 'wrapContent', 'childName=' + childName);
      innerHTML = innerHTML || '';

      // Helper function that escapes a string for inclusion in an HTML snippet
      var escapeHtml = function (str) {
        if (!str) return '';
        return str.replace(/&/g,'&amp;')
          .replace(/>/g,'&gt;')
          .replace(/</g,'&lt;')
          .replace(/"/g,'&quot;');
      };
      // Note Backbone normally guarantees that this.el is set, so the
      // following check should be useless in practice.
      if (!this.el) return '<div>' + innerHTML + '</div>';

      // Generate the wrapped content, using the DOM element's name and
      // attributes values.
      var outerHTML = '<' + this.el.nodeName.toLowerCase();

      // Important note:
      //
      // On Samsung SmartTV 2011 (Maple browser), you cannot use _.each or a
      // 'for in' loop to iterate DOM attributes. You must use a regular loop.

      /*_.each(this.el.attributes, function (attr) {
        // TODO: escape attributes values properly
        if (attr.value) {
          outerHTML += ' ' + attr.name + '="' + escapeHtml(attr.value) + '"';
        }
        else {
          outerHTML += ' ' + attr.name;
        }
      });*/
      for(var i = 0; i < this.el.attributes.length; i++) {
        var attr = this.el.attributes[i];

        if (attr.value) {
          outerHTML += ' ' + attr.name + '="' + escapeHtml(attr.value) + '"';
        }
        else {
          outerHTML += ' ' + attr.name;
        }
      }

      if (this.hidden) {
        outerHTML += ' style="display:none"';
      }

      if (childName) {
        outerHTML += ' data-joshfire-child="'+escapeHtml(childName)+'"';
      }

      outerHTML += '>' + innerHTML +
        '</' + this.el.nodeName.toLowerCase() + '>';
      return outerHTML;
    },

    /**
     * Hides the view's DOM element
     *
     * @function
     */
    hide: function() {
      if (this.hidden) {
        logger.log(this.logid, 'hide', 'already hidden');
        return;
      }
      logger.log(this.logid, 'hide');
      this.$el.hide();
      this.hidden = true;
      this.trigger('hidden');
      this.trigger('hide');
    },

    /**
     * Shows the view's DOM element
     *
     * @function
     */
    show: function() {
      if (!this.hidden) {
        logger.log(this.logid, 'show', 'already shown');
        return;
      }
      logger.log(this.logid, 'show');
      this.$el.show();
      this.hidden = false;
      this.trigger('shown');
      this.trigger('show');
    },


    /**
     * Loads all the images extracted from the DOM in the background and flags
     * the image containers with a "loading" class name.
     *
     * The function runs asynchronously. It triggers an "imageload" event each
     * time a new image gets loaded and an "imagesload" event when all images
     * have been loaded.
     *
     * @function
     */
    runImageLoader: function () {
      if (!this.getImages) {
        this.trigger('load');
        return;
      }

      // Extract the images to load
      var images = this.getImages();
      if (!images || (images.length === 0)) {
        // No image to load, we're done
        logger.log(this.logid, 'images loader', 'no image to load');
        this.trigger('imagesLoad');
        if (!this.customLoadEvent) this.trigger('load');
        return;
      }

      // Load the images in the background and trigger the 'load'
      // event in the background.
      logger.log(this.logid, 'images loader', 'images=' + images.length);
      var imagesLoaded = 0;
      var imageLoaded = _.bind(function (err, imageEl) {
        if (imageEl) $(imageEl).removeClass('loading');
        this.trigger('imageLoad', err, imageEl);
        imagesLoaded += 1;
        if (imagesLoaded === images.length) {
          // All images have been loaded
          logger.log(this.logid, 'images loader', 'done');
          this.trigger('imagesLoad');
          if (!this.customLoadEvent) this.trigger('load');
        }
      }, this);
      _.each(images, _.bind(function (image) {
        if (!image.el || !image.url) {
          return imageLoaded(image.el);
        }
        var imageEl = image.el;
        if (this.processImageEl) {
          imageEl = this.processImageEl(image.el);
        }
        $(imageEl).addClass('loading');
        var imageObject = new Image();
        imageObject.onload = function () {
          imageLoaded(null, imageEl);
          imageObject = null;
        };
        imageObject.onerror = function () {
          var err = 'Error';//TODO new BaseError();
          imageLoaded(err, imageEl);
          imageObject = null;
        };
        imageObject.src = image.url;
      }, this));
    },

    /**
     * Enhances the view with additional logic.
     *
     * Default implementation does not do anything other than triggering
     * the "load" event unless the view asserts that it will handle the
     * event itself.
     *
     * Override this function in derivated classes as needed.
     * Set the "customLoadEvent" view flag to handle the "load" event in
     * derivated classes (e.g. an image loader would typically trigger the
     * event when it's done loading the image).
     *
     * @function
     */
    enhance: function() {
      logger.log(this.logid, 'enhance');

      // If view is not done loading, add a "loading" class to the view's
      // element if needed and remove it when loading is over.
      if (this.isLoadingNeeded() && this.$el) {
        this.showLoader();
        this.off('load', this.hideLoader, this);
        this.on('load', this.hideLoader, this);
      }

      if (this.isImageLoadingNeeded() && this.$el) {
        this.runImageLoader();
      }

      if (this.onScroll) {
        this.$el.off('scroll', this.onScrollHandler);
        this.$el.on('scroll', this.onScrollHandler);
      }

      if (!this.customLoadEvent && !this.isImageLoadingNeeded()) {
        logger.log(this.logid, 'enhance', 'view loaded');
        this.trigger('load');
      }
    },

    /**
     * Change the view's element ("this.el" property), including event
     * re-delegation.
     *
     * The function sets the "rendered" flag when the view's element is changed
     * (as opposed to set) to indicate that the view has just been associated
     * with a DOM subtree and is thus "likely" to have been rendered. There is
     * unfortunately no better way for the time being to tell whether the view
     * has been rendered or not. It should work well if framework views are
     * used "normally".
     *
     * TODO: use a "data-joshfire-rendered" attribute on the view's element to
     * be able to tell whether the view has been really rendered or not?
     *
     * @function
     * @param {Element} element The DOM element to use as root for the view
     * @param {boolean} delegate True to delegate events to the new element
     */
    setElement: function (element, delegate) {
      var changed = !!this.el;
      Backbone.View.prototype.setElement.call(this, element, delegate);
      if (changed) {
        this.removed = false;
        this.rendered = true;
      }
      return this;
    },

    /**
     * Overrides default "remove" function for logging purpose
     *
     * @function
     */
    remove: function () {
      this.removed = true;
      this.rendered = false;
      logger.log(this.logid, 'remove');
      Backbone.View.prototype.remove.call(this);
    },

    /**
     * Returns a callback function that only gets called provided
     * the view has not yet been removed.
     *
     * That function is useful to wrap event handlers of a view as an event
     * handler may still be called "shortly after" the view has been removed,
     * typically when the call to "remove" was made by a previous event handler
     * in the list of event handlers attached to an event.
     *
     * @function
     * @param {function} callback Callback function
     */
    callIfNotRemoved: function (callback) {
      var self = this;

      return function () {
        if (self.removed) return;
        var args = Array.prototype.slice.call(arguments);
        callback.apply(self, args);
      };
    },

    onScrollHandler: function(e) {
      var el = $(e.target);
      this.onScroll.call(el[0], e, el[0].scrollHeight, el.scrollTop(), el.scrollLeft());
    },

    /**
    * The scrollTo function tries its best to scroll where you want.
    */
    scrollTop: function() {
      this.$el.animate({
        scrollTop: 0,
        scrollLeft: 0
      }, 500);
    },

    isLoadingNeeded: function() {
      return (this.loadingClass);
    },

    isImageLoadingNeeded: function() {
      return (this.loadImagesSmoothly);
    },

    showLoader: function() {
      this.$el.addClass(this.loadingClass);
    },
    hideLoader: function() {
      this.$el.removeClass(this.loadingClass);
    }
  });

  return newView;

});

/**
 * @fileoverview Real base View class for the Joshfire Framework.
 *
 * The UIElement class is the base view class that all views in the
 * Framework must extend.
 *
 * In the generic case, the UIElement class is synonymous to View.
 *
 * The framework automatically replaces this empty shell by a
 * device-specific or capability-specific adapter class depending
 * on the context under which the underlying application is run.
 *
 * For instance, the "phone" adapter adds scrolling capabilities
 * as many mobile browsers do not support scrolling content within
 * a fixed sized section of a page.
 */

/*global define*/


define('joshfire-framework/uielement',[
	'joshlib!view'
], function(View) {
  var UIElement = View.extend({});
  return UIElement;
});
/**
 * JOSHFIRE: library wrapped in "define" AMD call, code between
 * "Start vanilla" and "End vanilla" is a vanilla copy of iScroll.
 *
 * NB: the library exports itself to a global iScroll property.
 */
define('joshfire-framework/vendor/iscroll',[], function() {

/*!
 * iScroll v4.2.4 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
 * Released under MIT license, http://cubiq.org/license
 */
(function(window, doc){
var m = Math,
  dummyStyle = doc.createElement('div').style,
  vendor = (function () {
    var vendors = 't,webkitT,MozT,msT,OT'.split(','),
      t,
      i = 0,
      l = vendors.length;

    for ( ; i < l; i++ ) {
      t = vendors[i] + 'ransform';
      if ( t in dummyStyle ) {
        return vendors[i].substr(0, vendors[i].length - 1);
      }
    }

    return false;
  })(),
  cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '',

  // Style properties
  transform = prefixStyle('transform'),
  transitionProperty = prefixStyle('transitionProperty'),
  transitionDuration = prefixStyle('transitionDuration'),
  transformOrigin = prefixStyle('transformOrigin'),
  transitionTimingFunction = prefixStyle('transitionTimingFunction'),
  transitionDelay = prefixStyle('transitionDelay'),

    // Browser capabilities
  isAndroid = (/android/gi).test(navigator.appVersion),
  isIDevice = (/iphone|ipad/gi).test(navigator.appVersion),
  isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),

    has3d = prefixStyle('perspective') in dummyStyle,
    hasTouch = 'ontouchstart' in window && !isTouchPad,
    hasTransform = vendor !== false,
    hasTransitionEnd = prefixStyle('transition') in dummyStyle,

  // JOSHFIRE: force iScroll to listen on "resize" as "orientationchange"
  // is not always triggered on mobile phones.
  RESIZE_EV = /* 'onorientationchange' in window ? 'orientationchange' : */'resize',
  // JOSHFIRE: end of custom code
  START_EV = hasTouch ? 'touchstart' : 'mousedown',
  MOVE_EV = hasTouch ? 'touchmove' : 'mousemove',
  END_EV = hasTouch ? 'touchend' : 'mouseup',
  CANCEL_EV = hasTouch ? 'touchcancel' : 'mouseup',
  TRNEND_EV = (function () {
    if ( vendor === false ) return false;

    var transitionEnd = {
        ''      : 'transitionend',
        'webkit'  : 'webkitTransitionEnd',
        'Moz'   : 'transitionend',
        'O'     : 'otransitionend',
        'ms'    : 'MSTransitionEnd'
      };

    return transitionEnd[vendor];
  })(),

  nextFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) { return setTimeout(callback, 1); };
  })(),
  cancelFrame = (function () {
    return window.cancelRequestAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout;
  })(),

  // Helpers
  translateZ = has3d ? ' translateZ(0)' : '',

  // Constructor
  iScroll = function (el, options) {
    var that = this,
      i;

    that.wrapper = typeof el == 'object' ? el : doc.getElementById(el);
    that.wrapper.style.overflow = 'hidden';
    that.scroller = that.wrapper.children[0];

    // Default options
    that.options = {
      hScroll: true,
      vScroll: true,
      x: 0,
      y: 0,
      bounce: true,
      bounceLock: false,
      momentum: true,
      lockDirection: true,
      useTransform: true,
      useTransition: false,
      topOffset: 0,
      checkDOMChanges: false,   // Experimental
      handleClick: true,

      // Scrollbar
      hScrollbar: true,
      vScrollbar: true,
      fixedScrollbar: isAndroid,
      hideScrollbar: isIDevice,
      fadeScrollbar: isIDevice && has3d,
      scrollbarClass: '',

      // Zoom
      zoom: false,
      zoomMin: 1,
      zoomMax: 4,
      doubleTapZoom: 2,
      wheelAction: 'scroll',

      // Snap
      snap: false,
      snapThreshold: 1,

      // Events
      onRefresh: null,
      onBeforeScrollStart: function (e) { e.preventDefault(); },
      onScrollStart: null,
      onBeforeScrollMove: null,
      onScrollMove: null,
      onBeforeScrollEnd: null,
      onScrollEnd: null,
      onTouchEnd: null,
      onDestroy: null,
      onZoomStart: null,
      onZoom: null,
      onZoomEnd: null
    };

    // User defined options
    for (i in options) that.options[i] = options[i];

    // Set starting position
    that.x = that.options.x;
    that.y = that.options.y;

    // Normalize options
    that.options.useTransform = hasTransform && that.options.useTransform;
    that.options.hScrollbar = that.options.hScroll && that.options.hScrollbar;
    that.options.vScrollbar = that.options.vScroll && that.options.vScrollbar;
    that.options.zoom = that.options.useTransform && that.options.zoom;
    that.options.useTransition = hasTransitionEnd && that.options.useTransition;

    // Helpers FIX ANDROID BUG!
    // translate3d and scale doesn't work together!
    // Ignoring 3d ONLY WHEN YOU SET that.options.zoom
    if ( that.options.zoom && isAndroid ){
      translateZ = '';
    }

    // Set some default styles
    that.scroller.style[transitionProperty] = that.options.useTransform ? cssVendor + 'transform' : 'top left';
    that.scroller.style[transitionDuration] = '0';
    that.scroller.style[transformOrigin] = '0 0';
    if (that.options.useTransition) that.scroller.style[transitionTimingFunction] = 'cubic-bezier(0.33,0.66,0.66,1)';

    if (that.options.useTransform) that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px)' + translateZ;
    else that.scroller.style.cssText += ';position:absolute;top:' + that.y + 'px;left:' + that.x + 'px';

    if (that.options.useTransition) that.options.fixedScrollbar = true;

    that.refresh();

    that._bind(RESIZE_EV, window);
    that._bind(START_EV);
    if (!hasTouch) {
      if (that.options.wheelAction != 'none') {
        that._bind('DOMMouseScroll');
        that._bind('mousewheel');
      }
    }

    if (that.options.checkDOMChanges) that.checkDOMTime = setInterval(function () {
      that._checkDOMChanges();
    }, 500);
  };

// Prototype
iScroll.prototype = {
  enabled: true,
  x: 0,
  y: 0,
  steps: [],
  scale: 1,
  currPageX: 0, currPageY: 0,
  pagesX: [], pagesY: [],
  aniTime: null,
  wheelZoomCount: 0,

  handleEvent: function (e) {
    var that = this;
    switch(e.type) {
      case START_EV:
        if (!hasTouch && e.button !== 0) return;
        that._start(e);
        break;
      case MOVE_EV: that._move(e); break;
      case END_EV:
      case CANCEL_EV: that._end(e); break;
      case RESIZE_EV: that._resize(); break;
      case 'DOMMouseScroll': case 'mousewheel': that._wheel(e); break;
      case TRNEND_EV: that._transitionEnd(e); break;
    }
  },

  _checkDOMChanges: function () {
    if (this.moved || this.zoomed || this.animating ||
      (this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale)) return;

    this.refresh();
  },

  _scrollbar: function (dir) {
    var that = this,
      bar;

    if (!that[dir + 'Scrollbar']) {
      if (that[dir + 'ScrollbarWrapper']) {
        if (hasTransform) that[dir + 'ScrollbarIndicator'].style[transform] = '';
        // JOSHFIRE: The following condition fixes a common bug in the framework
        // when views try to destroy their iScroll object after their dom object
        // has been cleared. parentNode is then null, throwing an exception on this line.
        if(that[dir + 'ScrollbarWrapper'].parentNode)
          that[dir + 'ScrollbarWrapper'].parentNode.removeChild(that[dir + 'ScrollbarWrapper']);
        that[dir + 'ScrollbarWrapper'] = null;
        that[dir + 'ScrollbarIndicator'] = null;
      }

      return;
    }

    if (!that[dir + 'ScrollbarWrapper']) {
      // Create the scrollbar wrapper
      bar = doc.createElement('div');

      if (that.options.scrollbarClass) bar.className = that.options.scrollbarClass + dir.toUpperCase();
      else bar.style.cssText = 'position:absolute;z-index:100;' + (dir == 'h' ? 'height:7px;bottom:1px;left:2px;right:' + (that.vScrollbar ? '7' : '2') + 'px' : 'width:7px;bottom:' + (that.hScrollbar ? '7' : '2') + 'px;top:2px;right:1px');

      bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:opacity;' + cssVendor + 'transition-duration:' + (that.options.fadeScrollbar ? '350ms' : '0') + ';overflow:hidden;opacity:' + (that.options.hideScrollbar ? '0' : '1');

      that.wrapper.appendChild(bar);
      that[dir + 'ScrollbarWrapper'] = bar;

      // Create the scrollbar indicator
      bar = doc.createElement('div');
      if (!that.options.scrollbarClass) {
        bar.style.cssText = 'position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);' + cssVendor + 'background-clip:padding-box;' + cssVendor + 'box-sizing:border-box;' + (dir == 'h' ? 'height:100%' : 'width:100%') + ';' + cssVendor + 'border-radius:3px;border-radius:3px';
      }
      bar.style.cssText += ';pointer-events:none;' + cssVendor + 'transition-property:' + cssVendor + 'transform;' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform: translate(0,0)' + translateZ;
      if (that.options.useTransition) bar.style.cssText += ';' + cssVendor + 'transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)';

      that[dir + 'ScrollbarWrapper'].appendChild(bar);
      that[dir + 'ScrollbarIndicator'] = bar;
    }

    if (dir == 'h') {
      that.hScrollbarSize = that.hScrollbarWrapper.clientWidth;
      that.hScrollbarIndicatorSize = m.max(m.round(that.hScrollbarSize * that.hScrollbarSize / that.scrollerW), 8);
      that.hScrollbarIndicator.style.width = that.hScrollbarIndicatorSize + 'px';
      that.hScrollbarMaxScroll = that.hScrollbarSize - that.hScrollbarIndicatorSize;
      that.hScrollbarProp = that.hScrollbarMaxScroll / that.maxScrollX;
    } else {
      that.vScrollbarSize = that.vScrollbarWrapper.clientHeight;
      that.vScrollbarIndicatorSize = m.max(m.round(that.vScrollbarSize * that.vScrollbarSize / that.scrollerH), 8);
      that.vScrollbarIndicator.style.height = that.vScrollbarIndicatorSize + 'px';
      that.vScrollbarMaxScroll = that.vScrollbarSize - that.vScrollbarIndicatorSize;
      that.vScrollbarProp = that.vScrollbarMaxScroll / that.maxScrollY;
    }

    // Reset position
    that._scrollbarPos(dir, true);
  },

  _resize: function () {
    var that = this;
    setTimeout(function () { that.refresh(); }, isAndroid ? 200 : 0);
  },

  _pos: function (x, y) {
    if (this.zoomed) return;

    x = this.hScroll ? x : 0;
    y = this.vScroll ? y : 0;

    if (this.options.useTransform) {
      this.scroller.style[transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + translateZ;
    } else {
      x = m.round(x);
      y = m.round(y);
      this.scroller.style.left = x + 'px';
      this.scroller.style.top = y + 'px';
    }

    this.x = x;
    this.y = y;

    this._scrollbarPos('h');
    this._scrollbarPos('v');
  },

  _scrollbarPos: function (dir, hidden) {
    var that = this,
      pos = dir == 'h' ? that.x : that.y,
      size;

    if (!that[dir + 'Scrollbar']) return;

    pos = that[dir + 'ScrollbarProp'] * pos;

    if (pos < 0) {
      if (!that.options.fixedScrollbar) {
        size = that[dir + 'ScrollbarIndicatorSize'] + m.round(pos * 3);
        if (size < 8) size = 8;
        that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
      }
      pos = 0;
    } else if (pos > that[dir + 'ScrollbarMaxScroll']) {
      if (!that.options.fixedScrollbar) {
        size = that[dir + 'ScrollbarIndicatorSize'] - m.round((pos - that[dir + 'ScrollbarMaxScroll']) * 3);
        if (size < 8) size = 8;
        that[dir + 'ScrollbarIndicator'].style[dir == 'h' ? 'width' : 'height'] = size + 'px';
        pos = that[dir + 'ScrollbarMaxScroll'] + (that[dir + 'ScrollbarIndicatorSize'] - size);
      } else {
        pos = that[dir + 'ScrollbarMaxScroll'];
      }
    }

    that[dir + 'ScrollbarWrapper'].style[transitionDelay] = '0';
    that[dir + 'ScrollbarWrapper'].style.opacity = hidden && that.options.hideScrollbar ? '0' : '1';
    that[dir + 'ScrollbarIndicator'].style[transform] = 'translate(' + (dir == 'h' ? pos + 'px,0)' : '0,' + pos + 'px)') + translateZ;
  },

  _start: function (e) {
    var that = this,
      point = hasTouch ? e.touches[0] : e,
      matrix, x, y,
      c1, c2;

    if (!that.enabled) return;

    if (that.options.onBeforeScrollStart) that.options.onBeforeScrollStart.call(that, e);

    if (that.options.useTransition || that.options.zoom) that._transitionTime(0);

    that.moved = false;
    that.animating = false;
    that.zoomed = false;
    that.distX = 0;
    that.distY = 0;
    that.absDistX = 0;
    that.absDistY = 0;
    that.dirX = 0;
    that.dirY = 0;

    // Gesture start
    if (that.options.zoom && hasTouch && e.touches.length > 1) {
      c1 = m.abs(e.touches[0].pageX-e.touches[1].pageX);
      c2 = m.abs(e.touches[0].pageY-e.touches[1].pageY);
      that.touchesDistStart = m.sqrt(c1 * c1 + c2 * c2);

      that.originX = m.abs(e.touches[0].pageX + e.touches[1].pageX - that.wrapperOffsetLeft * 2) / 2 - that.x;
      that.originY = m.abs(e.touches[0].pageY + e.touches[1].pageY - that.wrapperOffsetTop * 2) / 2 - that.y;

      if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
    }

    if (that.options.momentum) {
      if (that.options.useTransform) {
        // Very lame general purpose alternative to CSSMatrix
        matrix = getComputedStyle(that.scroller, null)[transform].replace(/[^0-9\-.,]/g, '').split(',');
        x = +matrix[4];
        y = +matrix[5];
      } else {
        x = +getComputedStyle(that.scroller, null).left.replace(/[^0-9-]/g, '');
        y = +getComputedStyle(that.scroller, null).top.replace(/[^0-9-]/g, '');
      }

      if (x != that.x || y != that.y) {
        if (that.options.useTransition) that._unbind(TRNEND_EV);
        else cancelFrame(that.aniTime);
        that.steps = [];
        that._pos(x, y);
        if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);
      }
    }

    that.absStartX = that.x;  // Needed by snap threshold
    that.absStartY = that.y;

    that.startX = that.x;
    that.startY = that.y;
    that.pointX = point.pageX;
    that.pointY = point.pageY;

    that.startTime = e.timeStamp || Date.now();

    if (that.options.onScrollStart) that.options.onScrollStart.call(that, e);

    that._bind(MOVE_EV, window);
    that._bind(END_EV, window);
    that._bind(CANCEL_EV, window);
  },

  _move: function (e) {
    var that = this,
      point = hasTouch ? e.touches[0] : e,
      deltaX = point.pageX - that.pointX,
      deltaY = point.pageY - that.pointY,
      newX = that.x + deltaX,
      newY = that.y + deltaY,
      c1, c2, scale,
      timestamp = e.timeStamp || Date.now();

    if (that.options.onBeforeScrollMove) that.options.onBeforeScrollMove.call(that, e);

    // Zoom
    if (that.options.zoom && hasTouch && e.touches.length > 1) {
      c1 = m.abs(e.touches[0].pageX - e.touches[1].pageX);
      c2 = m.abs(e.touches[0].pageY - e.touches[1].pageY);
      that.touchesDist = m.sqrt(c1*c1+c2*c2);

      that.zoomed = true;

      scale = 1 / that.touchesDistStart * that.touchesDist * this.scale;

      if (scale < that.options.zoomMin) scale = 0.5 * that.options.zoomMin * Math.pow(2.0, scale / that.options.zoomMin);
      else if (scale > that.options.zoomMax) scale = 2.0 * that.options.zoomMax * Math.pow(0.5, that.options.zoomMax / scale);

      that.lastScale = scale / this.scale;

      newX = this.originX - this.originX * that.lastScale + this.x,
      newY = this.originY - this.originY * that.lastScale + this.y;

      this.scroller.style[transform] = 'translate(' + newX + 'px,' + newY + 'px) scale(' + scale + ')' + translateZ;

      if (that.options.onZoom) that.options.onZoom.call(that, e);
      return;
    }

    that.pointX = point.pageX;
    that.pointY = point.pageY;

    // Slow down if outside of the boundaries
    if (newX > 0 || newX < that.maxScrollX) {
      newX = that.options.bounce ? that.x + (deltaX / 2) : newX >= 0 || that.maxScrollX >= 0 ? 0 : that.maxScrollX;
    }
    if (newY > that.minScrollY || newY < that.maxScrollY) {
      newY = that.options.bounce ? that.y + (deltaY / 2) : newY >= that.minScrollY || that.maxScrollY >= 0 ? that.minScrollY : that.maxScrollY;
    }

    that.distX += deltaX;
    that.distY += deltaY;
    that.absDistX = m.abs(that.distX);
    that.absDistY = m.abs(that.distY);

    if (that.absDistX < 6 && that.absDistY < 6) {
      return;
    }

    // Lock direction
    if (that.options.lockDirection) {
      if (that.absDistX > that.absDistY + 5) {
        newY = that.y;
        deltaY = 0;
      } else if (that.absDistY > that.absDistX + 5) {
        newX = that.x;
        deltaX = 0;
      }
    }

    that.moved = true;
    that._pos(newX, newY);
    that.dirX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
    that.dirY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

    if (timestamp - that.startTime > 300) {
      that.startTime = timestamp;
      that.startX = that.x;
      that.startY = that.y;
    }

    if (that.options.onScrollMove) that.options.onScrollMove.call(that, e);
  },

  _end: function (e) {
    if (hasTouch && e.touches.length !== 0) return;

    var that = this,
      point = hasTouch ? e.changedTouches[0] : e,
      target, ev,
      momentumX = { dist:0, time:0 },
      momentumY = { dist:0, time:0 },
      duration = (e.timeStamp || Date.now()) - that.startTime,
      newPosX = that.x,
      newPosY = that.y,
      distX, distY,
      newDuration,
      snap,
      scale;

    that._unbind(MOVE_EV, window);
    that._unbind(END_EV, window);
    that._unbind(CANCEL_EV, window);

    if (that.options.onBeforeScrollEnd) that.options.onBeforeScrollEnd.call(that, e);

    if (that.zoomed) {
      scale = that.scale * that.lastScale;
      scale = Math.max(that.options.zoomMin, scale);
      scale = Math.min(that.options.zoomMax, scale);
      that.lastScale = scale / that.scale;
      that.scale = scale;

      that.x = that.originX - that.originX * that.lastScale + that.x;
      that.y = that.originY - that.originY * that.lastScale + that.y;

      that.scroller.style[transitionDuration] = '200ms';
      that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + that.scale + ')' + translateZ;

      that.zoomed = false;
      that.refresh();

      if (that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
      return;
    }

    if (!that.moved) {
      if (hasTouch) {
        if (that.doubleTapTimer && that.options.zoom) {
          // Double tapped
          clearTimeout(that.doubleTapTimer);
          that.doubleTapTimer = null;
          if (that.options.onZoomStart) that.options.onZoomStart.call(that, e);
          that.zoom(that.pointX, that.pointY, that.scale == 1 ? that.options.doubleTapZoom : 1);
          if (that.options.onZoomEnd) {
            setTimeout(function() {
              that.options.onZoomEnd.call(that, e);
            }, 200); // 200 is default zoom duration
          }
        } else if (this.options.handleClick) {
          that.doubleTapTimer = setTimeout(function () {
            that.doubleTapTimer = null;

            // Find the last touched element
            target = point.target;
            while (target.nodeType != 1) target = target.parentNode;

            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA') {
              ev = doc.createEvent('MouseEvents');
              ev.initMouseEvent('click', true, true, e.view, 1,
                point.screenX, point.screenY, point.clientX, point.clientY,
                e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                0, null);
              ev._fake = true;
              target.dispatchEvent(ev);
            }
          }, that.options.zoom ? 250 : 0);
        }
      }

      that._resetPos(400);

      if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
      return;
    }

    if (duration < 300 && that.options.momentum) {
      momentumX = newPosX ? that._momentum(newPosX - that.startX, duration, -that.x, that.scrollerW - that.wrapperW + that.x, that.options.bounce ? that.wrapperW : 0) : momentumX;
      momentumY = newPosY ? that._momentum(newPosY - that.startY, duration, -that.y, (that.maxScrollY < 0 ? that.scrollerH - that.wrapperH + that.y - that.minScrollY : 0), that.options.bounce ? that.wrapperH : 0) : momentumY;

      newPosX = that.x + momentumX.dist;
      newPosY = that.y + momentumY.dist;

      if ((that.x > 0 && newPosX > 0) || (that.x < that.maxScrollX && newPosX < that.maxScrollX)) momentumX = { dist:0, time:0 };
      if ((that.y > that.minScrollY && newPosY > that.minScrollY) || (that.y < that.maxScrollY && newPosY < that.maxScrollY)) momentumY = { dist:0, time:0 };
    }

    if (momentumX.dist || momentumY.dist) {
      newDuration = m.max(m.max(momentumX.time, momentumY.time), 10);

      // Do we need to snap?
      if (that.options.snap) {
        distX = newPosX - that.absStartX;
        distY = newPosY - that.absStartY;
        if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) { that.scrollTo(that.absStartX, that.absStartY, 200); }
        else {
          snap = that._snap(newPosX, newPosY);
          newPosX = snap.x;
          newPosY = snap.y;
          newDuration = m.max(snap.time, newDuration);
        }
      }

      that.scrollTo(m.round(newPosX), m.round(newPosY), newDuration);

      if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
      return;
    }

    // Do we need to snap?
    if (that.options.snap) {
      distX = newPosX - that.absStartX;
      distY = newPosY - that.absStartY;
      if (m.abs(distX) < that.options.snapThreshold && m.abs(distY) < that.options.snapThreshold) that.scrollTo(that.absStartX, that.absStartY, 200);
      else {
        snap = that._snap(that.x, that.y);
        if (snap.x != that.x || snap.y != that.y) that.scrollTo(snap.x, snap.y, snap.time);
      }

      if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
      return;
    }

    that._resetPos(200);
    if (that.options.onTouchEnd) that.options.onTouchEnd.call(that, e);
  },

  _resetPos: function (time) {
    var that = this,
      resetX = that.x >= 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x,
      resetY = that.y >= that.minScrollY || that.maxScrollY > 0 ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

    if (resetX == that.x && resetY == that.y) {
      if (that.moved) {
        that.moved = false;
        if (that.options.onScrollEnd) that.options.onScrollEnd.call(that);    // Execute custom code on scroll end
      }

      if (that.hScrollbar && that.options.hideScrollbar) {
        if (vendor == 'webkit') that.hScrollbarWrapper.style[transitionDelay] = '300ms';
        that.hScrollbarWrapper.style.opacity = '0';
      }
      if (that.vScrollbar && that.options.hideScrollbar) {
        if (vendor == 'webkit') that.vScrollbarWrapper.style[transitionDelay] = '300ms';
        that.vScrollbarWrapper.style.opacity = '0';
      }

      return;
    }

    that.scrollTo(resetX, resetY, time || 0);
  },

  _wheel: function (e) {
    var that = this,
      wheelDeltaX, wheelDeltaY,
      deltaX, deltaY,
      deltaScale;

    if ('wheelDeltaX' in e) {
      wheelDeltaX = e.wheelDeltaX / 12;
      wheelDeltaY = e.wheelDeltaY / 12;
    } else if('wheelDelta' in e) {
      wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
    } else if ('detail' in e) {
      wheelDeltaX = wheelDeltaY = -e.detail * 3;
    } else {
      return;
    }

    if (that.options.wheelAction == 'zoom') {
      deltaScale = that.scale * Math.pow(2, 1/3 * (wheelDeltaY ? wheelDeltaY / Math.abs(wheelDeltaY) : 0));
      if (deltaScale < that.options.zoomMin) deltaScale = that.options.zoomMin;
      if (deltaScale > that.options.zoomMax) deltaScale = that.options.zoomMax;

      if (deltaScale != that.scale) {
        if (!that.wheelZoomCount && that.options.onZoomStart) that.options.onZoomStart.call(that, e);
        that.wheelZoomCount++;

        that.zoom(e.pageX, e.pageY, deltaScale, 400);

        setTimeout(function() {
          that.wheelZoomCount--;
          if (!that.wheelZoomCount && that.options.onZoomEnd) that.options.onZoomEnd.call(that, e);
        }, 400);
      }

      return;
    }

    deltaX = that.x + wheelDeltaX;
    deltaY = that.y + wheelDeltaY;

    if (deltaX > 0) deltaX = 0;
    else if (deltaX < that.maxScrollX) deltaX = that.maxScrollX;

    if (deltaY > that.minScrollY) deltaY = that.minScrollY;
    else if (deltaY < that.maxScrollY) deltaY = that.maxScrollY;
    
    if (that.maxScrollY < 0) {
      that.scrollTo(deltaX, deltaY, 0);
    }
  },

  _transitionEnd: function (e) {
    var that = this;

    if (e.target != that.scroller) return;

    that._unbind(TRNEND_EV);

    that._startAni();
  },


  /**
  *
  * Utilities
  *
  */
  _startAni: function () {
    var that = this,
      startX = that.x, startY = that.y,
      startTime = Date.now(),
      step, easeOut,
      animate;

    if (that.animating) return;

    if (!that.steps.length) {
      that._resetPos(400);
      return;
    }

    step = that.steps.shift();

    if (step.x == startX && step.y == startY) step.time = 0;

    that.animating = true;
    that.moved = true;

    if (that.options.useTransition) {
      that._transitionTime(step.time);
      that._pos(step.x, step.y);
      that.animating = false;
      if (step.time) that._bind(TRNEND_EV);
      else that._resetPos(0);
      return;
    }

    animate = function () {
      var now = Date.now(),
        newX, newY;

      if (now >= startTime + step.time) {
        that._pos(step.x, step.y);
        that.animating = false;
        if (that.options.onAnimationEnd) that.options.onAnimationEnd.call(that);      // Execute custom code on animation end
        that._startAni();
        return;
      }

      now = (now - startTime) / step.time - 1;
      easeOut = m.sqrt(1 - now * now);
      newX = (step.x - startX) * easeOut + startX;
      newY = (step.y - startY) * easeOut + startY;
      that._pos(newX, newY);
      if (that.animating) that.aniTime = nextFrame(animate);
    };

    animate();
  },

  _transitionTime: function (time) {
    time += 'ms';
    this.scroller.style[transitionDuration] = time;
    if (this.hScrollbar) this.hScrollbarIndicator.style[transitionDuration] = time;
    if (this.vScrollbar) this.vScrollbarIndicator.style[transitionDuration] = time;
  },

  _momentum: function (dist, time, maxDistUpper, maxDistLower, size) {
    var deceleration = 0.0006,
      speed = m.abs(dist) / time,
      newDist = (speed * speed) / (2 * deceleration),
      newTime = 0, outsideDist = 0;

    // Proportinally reduce speed if we are outside of the boundaries
    if (dist > 0 && newDist > maxDistUpper) {
      outsideDist = size / (6 / (newDist / speed * deceleration));
      maxDistUpper = maxDistUpper + outsideDist;
      speed = speed * maxDistUpper / newDist;
      newDist = maxDistUpper;
    } else if (dist < 0 && newDist > maxDistLower) {
      outsideDist = size / (6 / (newDist / speed * deceleration));
      maxDistLower = maxDistLower + outsideDist;
      speed = speed * maxDistLower / newDist;
      newDist = maxDistLower;
    }

    newDist = newDist * (dist < 0 ? -1 : 1);
    newTime = speed / deceleration;

    return { dist: newDist, time: m.round(newTime) };
  },

  _offset: function (el) {
    var left = -el.offsetLeft,
      top = -el.offsetTop;

    while (el = el.offsetParent) {
      left -= el.offsetLeft;
      top -= el.offsetTop;
    }

    if (el != this.wrapper) {
      left *= this.scale;
      top *= this.scale;
    }

    return { left: left, top: top };
  },

  _snap: function (x, y) {
    var that = this,
      i, l,
      page, time,
      sizeX, sizeY;

    // Check page X
    page = that.pagesX.length - 1;
    for (i=0, l=that.pagesX.length; i<l; i++) {
      if (x >= that.pagesX[i]) {
        page = i;
        break;
      }
    }
    if (page == that.currPageX && page > 0 && that.dirX < 0) page--;
    x = that.pagesX[page];
    sizeX = m.abs(x - that.pagesX[that.currPageX]);
    sizeX = sizeX ? m.abs(that.x - x) / sizeX * 500 : 0;
    that.currPageX = page;

    // Check page Y
    page = that.pagesY.length-1;
    for (i=0; i<page; i++) {
      if (y >= that.pagesY[i]) {
        page = i;
        break;
      }
    }
    if (page == that.currPageY && page > 0 && that.dirY < 0) page--;
    y = that.pagesY[page];
    sizeY = m.abs(y - that.pagesY[that.currPageY]);
    sizeY = sizeY ? m.abs(that.y - y) / sizeY * 500 : 0;
    that.currPageY = page;

    // Snap with constant speed (proportional duration)
    time = m.round(m.max(sizeX, sizeY)) || 200;

    return { x: x, y: y, time: time };
  },

  _bind: function (type, el, bubble) {
    (el || this.scroller).addEventListener(type, this, !!bubble);
  },

  _unbind: function (type, el, bubble) {
    (el || this.scroller).removeEventListener(type, this, !!bubble);
  },


  /**
  *
  * Public methods
  *
  */
  destroy: function () {
    var that = this;

    that.scroller.style[transform] = '';

    // Remove the scrollbars
    that.hScrollbar = false;
    that.vScrollbar = false;
    that._scrollbar('h');
    that._scrollbar('v');

    // Remove the event listeners
    that._unbind(RESIZE_EV, window);
    that._unbind(START_EV);
    that._unbind(MOVE_EV, window);
    that._unbind(END_EV, window);
    that._unbind(CANCEL_EV, window);

    if (!that.options.hasTouch) {
      that._unbind('DOMMouseScroll');
      that._unbind('mousewheel');
    }

    if (that.options.useTransition) that._unbind(TRNEND_EV);

    if (that.options.checkDOMChanges) clearInterval(that.checkDOMTime);

    if (that.options.onDestroy) that.options.onDestroy.call(that);
  },

  refresh: function () {
    var that = this,
      offset,
      i, l,
      els,
      pos = 0,
      page = 0;

    if (that.scale < that.options.zoomMin) that.scale = that.options.zoomMin;
    that.wrapperW = that.wrapper.clientWidth || 1;
    that.wrapperH = that.wrapper.clientHeight || 1;

    that.minScrollY = -that.options.topOffset || 0;
    that.scrollerW = m.round(that.scroller.offsetWidth * that.scale);
    that.scrollerH = m.round((that.scroller.offsetHeight + that.minScrollY) * that.scale);
    that.maxScrollX = that.wrapperW - that.scrollerW;
    that.maxScrollY = that.wrapperH - that.scrollerH + that.minScrollY;
    that.dirX = 0;
    that.dirY = 0;

    if (that.options.onRefresh) that.options.onRefresh.call(that);

    that.hScroll = that.options.hScroll && that.maxScrollX < 0;
    that.vScroll = that.options.vScroll && (!that.options.bounceLock && !that.hScroll || that.scrollerH > that.wrapperH);

    that.hScrollbar = that.hScroll && that.options.hScrollbar;
    that.vScrollbar = that.vScroll && that.options.vScrollbar && that.scrollerH > that.wrapperH;

    offset = that._offset(that.wrapper);
    that.wrapperOffsetLeft = -offset.left;
    that.wrapperOffsetTop = -offset.top;

    // Prepare snap
    if (typeof that.options.snap == 'string') {
      that.pagesX = [];
      that.pagesY = [];
      els = that.scroller.querySelectorAll(that.options.snap);
      for (i=0, l=els.length; i<l; i++) {
        pos = that._offset(els[i]);
        pos.left += that.wrapperOffsetLeft;
        pos.top += that.wrapperOffsetTop;
        that.pagesX[i] = pos.left < that.maxScrollX ? that.maxScrollX : pos.left * that.scale;
        that.pagesY[i] = pos.top < that.maxScrollY ? that.maxScrollY : pos.top * that.scale;
      }
    } else if (that.options.snap) {
      that.pagesX = [];
      while (pos >= that.maxScrollX) {
        that.pagesX[page] = pos;
        pos = pos - that.wrapperW;
        page++;
      }
      if (that.maxScrollX%that.wrapperW) that.pagesX[that.pagesX.length] = that.maxScrollX - that.pagesX[that.pagesX.length-1] + that.pagesX[that.pagesX.length-1];

      pos = 0;
      page = 0;
      that.pagesY = [];
      while (pos >= that.maxScrollY) {
        that.pagesY[page] = pos;
        pos = pos - that.wrapperH;
        page++;
      }
      if (that.maxScrollY%that.wrapperH) that.pagesY[that.pagesY.length] = that.maxScrollY - that.pagesY[that.pagesY.length-1] + that.pagesY[that.pagesY.length-1];
    }

    // Prepare the scrollbars
    that._scrollbar('h');
    that._scrollbar('v');

    if (!that.zoomed) {
      that.scroller.style[transitionDuration] = '0';
      that._resetPos(400);
    }
  },

  scrollTo: function (x, y, time, relative) {
    var that = this,
      step = x,
      i, l;

    that.stop();

    if (!step.length) step = [{ x: x, y: y, time: time, relative: relative }];

    for (i=0, l=step.length; i<l; i++) {
      if (step[i].relative) { step[i].x = that.x - step[i].x; step[i].y = that.y - step[i].y; }
      that.steps.push({ x: step[i].x, y: step[i].y, time: step[i].time || 0 });
    }

    that._startAni();
  },

  scrollToElement: function (el, time) {
    var that = this, pos;
    el = el.nodeType ? el : that.scroller.querySelector(el);
    if (!el) return;

    pos = that._offset(el);
    pos.left += that.wrapperOffsetLeft;
    pos.top += that.wrapperOffsetTop;

    pos.left = pos.left > 0 ? 0 : pos.left < that.maxScrollX ? that.maxScrollX : pos.left;
    pos.top = pos.top > that.minScrollY ? that.minScrollY : pos.top < that.maxScrollY ? that.maxScrollY : pos.top;
    time = time === undefined ? m.max(m.abs(pos.left)*2, m.abs(pos.top)*2) : time;

    that.scrollTo(pos.left, pos.top, time);
  },

  scrollToPage: function (pageX, pageY, time) {
    var that = this, x, y;

    time = time === undefined ? 400 : time;

    if (that.options.onScrollStart) that.options.onScrollStart.call(that);

    if (that.options.snap) {
      pageX = pageX == 'next' ? that.currPageX+1 : pageX == 'prev' ? that.currPageX-1 : pageX;
      pageY = pageY == 'next' ? that.currPageY+1 : pageY == 'prev' ? that.currPageY-1 : pageY;

      pageX = pageX < 0 ? 0 : pageX > that.pagesX.length-1 ? that.pagesX.length-1 : pageX;
      pageY = pageY < 0 ? 0 : pageY > that.pagesY.length-1 ? that.pagesY.length-1 : pageY;

      that.currPageX = pageX;
      that.currPageY = pageY;
      x = that.pagesX[pageX];
      y = that.pagesY[pageY];
    } else {
      x = -that.wrapperW * pageX;
      y = -that.wrapperH * pageY;
      if (x < that.maxScrollX) x = that.maxScrollX;
      if (y < that.maxScrollY) y = that.maxScrollY;
    }

    that.scrollTo(x, y, time);
  },

  disable: function () {
    this.stop();
    this._resetPos(0);
    this.enabled = false;

    // If disabled after touchstart we make sure that there are no left over events
    this._unbind(MOVE_EV, window);
    this._unbind(END_EV, window);
    this._unbind(CANCEL_EV, window);
  },

  enable: function () {
    this.enabled = true;
  },

  stop: function () {
    if (this.options.useTransition) this._unbind(TRNEND_EV);
    else cancelFrame(this.aniTime);
    this.steps = [];
    this.moved = false;
    this.animating = false;
  },

  zoom: function (x, y, scale, time) {
    var that = this,
      relScale = scale / that.scale;

    if (!that.options.useTransform) return;

    that.zoomed = true;
    time = time === undefined ? 200 : time;
    x = x - that.wrapperOffsetLeft - that.x;
    y = y - that.wrapperOffsetTop - that.y;
    that.x = x - x * relScale + that.x;
    that.y = y - y * relScale + that.y;

    that.scale = scale;
    that.refresh();

    that.x = that.x > 0 ? 0 : that.x < that.maxScrollX ? that.maxScrollX : that.x;
    that.y = that.y > that.minScrollY ? that.minScrollY : that.y < that.maxScrollY ? that.maxScrollY : that.y;

    that.scroller.style[transitionDuration] = time + 'ms';
    that.scroller.style[transform] = 'translate(' + that.x + 'px,' + that.y + 'px) scale(' + scale + ')' + translateZ;
    that.zoomed = false;
  },

  isReady: function () {
    return !this.moved && !this.zoomed && !this.animating;
  }
};

function prefixStyle (style) {
  if ( vendor === '' ) return style;

  style = style.charAt(0).toUpperCase() + style.substr(1);
  return vendor + style;
}

dummyStyle = null;  // for the sake of it

if (typeof exports !== 'undefined') exports.iScroll = iScroll;
else window.iScroll = iScroll;

})(window, document);


  return window.iScroll;
});
define('joshfire-framework/adapters/phone/uielement',[
  "joshlib!adapters/none/uielement",
  "joshlib!vendor/iscroll",
  "joshlib!vendor/underscore"
], function (UIElement, iScroll, _) {

  var UIElementPhone = UIElement.extend({

    initialize: function (options) {
      if (this.options.scroller) {
        this.$el.css({overflow:"hidden"});
      }
      if (this.options.scrollerSelector) {
        this.scrollerSelector = this.options.scrollerSelector;
      }
      this.onScroll = this.options.onScroll || null;

      // Bind to the "shown" event to force a refresh of the scroller
      // (iScroll listens to "resize" events and may have updated the
      // size of the scroller while the view was hidden)
      // TODO: switch from "bind" to "on" when Backbone is updated
      this.listenTo(this, 'shown', function () {
        if (this.hasScroller && this.iScroller) {
          // console.log('shown force refresh');
          this.iScroller.refresh();
        }
      });

      UIElement.prototype.initialize.call(this, options);
    },

    enhance:function() {
      var self = this;
      if (this.options.scroller) {
        self.insertScroller();

        // Skiped exist if the user had clicked on the loadmore button
        // TODO : associate skiped with UIElement
        if(window.skiped) {
          self.iScroller.scrollToElement('li:nth-child('+window.skiped+')', 200);
        }

        // Resize on image load
        var $imgs = self.$('img');

        if($imgs.length) {
          self.$('img').bind('load', function() {
            setTimeout(function() {self.iScroller.refresh();},10);
          });
        }

      }
      UIElement.prototype.enhance.call(this);
    },

    insertScroller: function() {
      var self = this;

      this.hasScroller = true;

      //if (self.scrollOptions.active) {  && self.data && self.data.length && self.htmlEl.children.length
      if (self.iScroller) self.iScroller.destroy();
      var scrollerEl = self.el;
      if (self.scrollerSelector) {
        scrollerEl = self.$(self.scrollerSelector).get(0) || self.el;
      }

      var options = {
        useTransition:true,

        /*
        This was terrible performance-wise and doesn't seem to be needed anymore
        onScrollMove: function() {
          self.$('a').bind('click.iscrollprevent', function(e){ e.preventDefault();});
        },
        onScrollEnd : function(){
          setTimeout(function() {self.$('a').unbind('click.iscrollprevent');},100);
        },
        */

        onBeforeScrollStart : function(e) {
          var target = e.target;

          while (target.nodeType != 1) target = target.parentNode;
          if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA'){
              e.preventDefault();
          }
        }
      };

      if (self.onScroll) {
        options.onScrollMove = function() {
          var that=this;
          if (self.scrollInterval) clearInterval(self.scrollInterval);
          self.triggerScroll(that);
          self.scrollInterval = setInterval(_.bind(function() {
            this.triggerScroll(that);
          }, self),100);
        };
        options.onScrollEnd = function() {
          if (self.scrollInterval) clearInterval(self.scrollInterval);
          self.triggerScroll(this);
        };
      }

      self.iScroller = new iScroll(scrollerEl, _.extend(options,self.options.scrollOptions||{}));
      if (self.options.scrollOptions &&
        self.options.scrollOptions.disabled) {
        // Initialize the scroller in a disabled state
        // (useful when the scroller only serves to manage explicit
        // transitions between pages as in a toolbar so as to avoid
        // conflicts between touch and click events on Android)
        self.iScroller.disable();
      }

      // until https://github.com/cubiq/iscroll/issues/90
      document.addEventListener("orientationChanged", function(e) {
        if (self.iScroller) self.iScroller.refresh();
      });
    },

    triggerScroll: function(iScroller) {
      var e = $.Event("scroll"),
          el = iScroller.wrapper;

      if (!el) return;
      e.target = el;

      if (this.onScroll) this.onScroll.call(el, e, iScroller.scrollerH, -iScroller.y, -iScroller.x);
    },

    update: function(render) {
      if (this.scrollInterval) clearInterval(this.scrollInterval);
      UIElement.prototype.update.call(this, render);
    },

    scrollTop: function() {
      if (this.hasScroller && this.iScroller) {
        this.iScroller.scrollTo(0,0,500);
      }
    }

  });

  return UIElementPhone;

});

/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Wed Jul 20 20:23:43 2011
 */

/* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
*/
// Inspired by base2 and Prototype
//Adapted for Joshlib
define('joshfire-framework/class',['joshlib!vendor/underscore'], function(_) {

  var initializing = false,
      fnTest = /xyz/.test(function() {
            xyz;
      }) ? (/\b__super\b/) : /.*/;

  var Class = function() {};


  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == 'function' && typeof _super[name] == 'function' && fnTest.test(prop[name]) ? (function(name, fn) {
        return function() {
          var tmp = this.__super;

          // Add a new ._super() method that is the same method
          // but on the super-class
          this.__super = _super[name];

          // The method only need to be bound temporarily, so we
          // remove it when we're done executing
          var ret = fn.apply(this, arguments);
          this.__super = tmp;

          return ret;
        };
      })(name, prop[name]) : prop[name];
    }


    function Class() {
      // All construction is actually done in the init method
      if (!initializing && this.__constructor) this.__constructor.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };

  return function() {
    if (_.isFunction(arguments[0])) {
      return arguments[0].extend(arguments[1]);
    } else {
      return Class.extend(arguments[0]);
    }
  };
});

/*!
 * Joshfire Framework 0.9.1
 * http://framework.joshfire.com/
 *
 * Copyright 2011, Joshfire
 * Dual licensed under the GPL Version 2 and a Commercial license.
 * http://framework.joshfire.com/license
 *
 * Date: Thu Jun 07 12:38:42 2012
 */
define('joshfire-framework/utils/i18n',['joshlib!class', 'joshlib!vendor/underscore', 'joshlib!utils/dollar'], function(Class, _, $) {
  
  var i18nClass = Class(
    {

      // Current Dict.
      terms: null,

      // Sets the locale property and loads the json file.
      setLocale: function(opt, cb) {
        var self = this;
        
        self.opt = _.defaults(opt, {
          'url': './lang/dictionaries',
          'locale': self._detectLocale(),
          'format': 'json'
        });
        _.extend(this, opt);

        if(self.locale.toLowerCase() === 'auto')
          self.locale = self._detectLocale();

        if (opt.availableLocales && _(opt.availableLocales).indexOf(self.locale) === -1) {
          self.locale = opt.defaultLocale || "en";
        }

        var fileUrl = self.url+'/'+self.locale+'.'+self.format;

        if(document.location.toString().indexOf('file://') == -1) {
          $.ajax({
            url: fileUrl,
            dataType: 'json',
            success: function(data, status, jqxhr) {
              if(data && data.terms)
                self.terms = data.terms;
              else
                console.warn('JSi18n : No dictionary was loaded.');

              if(typeof cb === 'function')
                cb();
            }
          });
        }
        else {
          self.terms = {};
          if(typeof cb === 'function')
            cb();
        }
      },

      getLocale: function() {
        return this.locale;
      },

      /**
      * Returns the first occurence of the key in the terms.
      * If there is none, return the key itself.
      **/
      getText: function(key) {
        var self = this;
        for(var k in self.terms) {
          if(self.terms.hasOwnProperty(k)) {
            if(key.toLowerCase() == k.toLowerCase()) {
              return self.terms[k];
            }
          }
        }
        return key;
      },

      /**
      * Search for tags with the data-translate attribute
      * and translate their content. The data-translate
      * attribute is removed, making it easier to call
      * it again should new content be added.
      **/
      translateStaticContent: function() {
        var self = this;
        $('*[data-translate]').each(function() {
          $(this).removeAttr('data-translate');
          $(this).html(self.T($(this).html()));
        });
      },

      /**
      * Returns only the first
      **/
      _detectLocale: function() {
        var lan = (navigator.language) ? navigator.language : navigator.userLanguage;
        return (lan.split('-').length>1)?lan.split('-')[0]:lan;
      }
    }
  );

  var i18n = new i18nClass();
  
  return {
    getText:    _.bind(i18n.getText, i18n),
    setLocale:  _.bind(i18n.setLocale, i18n),
    getLocale:  _.bind(i18n.getLocale, i18n)
  };
  
});

/**
 * @fileoverview The Layout UI element wraps multiple children views, and is
 * not directly tied to a model or collection.
 *
 * The class should be the base class of all container views.
 * The class propagates events and function calls to its children so that
 * derivated classes do not have to worry about that.
 *
 * Usage example:
 *  var layout = new Layout({
 *    children: {
 *      card1: myFirstView,
 *      card2: mySecondView
 *    }
 *  });
 *  layout.render();
 */

/*global define*/


define('joshfire-framework/ui/Layout',[
  'joshlib!uielement',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/i18n'
], function(UIElement, _, $, i18n) {
  /**
   * Definition of the Layout class.
   *
   * The class extends UIItem.
   *
   * @class
   */
  var Layout = UIElement.extend({
    /**
     * Flag set when the view is rendering
     */
    rendering: false,

    /**
     * Element initialization.
     *
     * Called once when the element is created.
     *
     * @function
     * @param {Object} options Element options. Should at least define
     *  a "children" property
     */
    initialize: function(options) {
      // Initialize template.
      if(options.template) {
        this.template = this.compileTemplate(options.template);
      } else if(options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }

      // As explained below, we need this.customLoadEvent
      // to be always true in this case. However, we
      // do need to know
      if(options.customLoadEvent) {
        this.wantsCustomLoadEvent = true;
      }

      // Containers must wait for all of their children to be "loaded".
      // The following flag prevents the base View class from triggering
      // the "load" event at the end of the "enhance" function.
      this.customLoadEvent = true;

      this.setChildren(options.children);

      // Propagate "shown", "hidden" events to the view's children
      this.on('shown', function () {
        _.each(this.children, function (child) {
          child.trigger('shown');
        });
      }, this);
      this.on('hidden', function () {
        _.each(this.children, function (child) {
          child.trigger('hidden');
        });
      }, this);

      UIElement.prototype.initialize.call(this, options);
    },

    /**
     * Sets the children views.
     *
     * @function
     * @param {Object} an object containing the children views
     */
    setChildren: function(children) {
      if (this.children) {
        _.each(this.children, function (child) {
          this.stopListening(child);
          child.remove();
        }, this);
        this.children = null;
      }
      this.children = children;
      this.numChildren = 0;
      this.numChildrenLoaded = 0;

      if (children) {
        _.each(children, function (child) {
          ++this.numChildren;

          // Make "load" event from children "bubble".
          // Rules are:
          // - when the view is rendered, the "load" event is triggered once
          // all of its children have triggered the "load" event
          // - when the view is not rendered, the "load" event is triggered
          // whenever a child triggers a "load" event (the view cannot tell
          // whether more than one children are rendered, so it bubbles events
          // individually)
          this.listenTo(child, 'load', function () {
            if (this.rendering) {
              ++this.numChildrenLoaded;
              if (this.numChildrenLoaded === this.numChildren) {
                // All children have been loaded
                this.rendering = false;
                if(!this.wantsCustomLoadEvent) this.trigger('load');
              }
            }
            else {
              if (!this.wantsCustomLoadEvent) this.trigger('load');
            }
          });
        }, this);
      }
    },

    /**
     * Get a child view, better access than myLayout.children.myChild
     *
     * @function
     * @param {Object} the string name of the child view requested
     */
    getChild: function(child) {
      if (child) {
        return this.children[child];
      }
    },

    /**
     * Generates the HTML code to render.
     *
     * It calls the `generate` function of the underlying children.
     *
     * @function
     * @param {function(Object,Object)} cb Callback function that receives
     *   the error if one occurred and the HTML to render otherwise
     */
    generate: function(cb) {
      if(!this.children) return cb(null, '');

      this.childrenOffsets = {};
      this.numChildrenLoaded = 0;
      var accumulator = 0;
      var childrenOuterHTML = '';
      var children = {};

      _.each(this.children, function (child, name) {
        child.generate(_.bind(function (err, innerHTML) {
          var outerHTML = child.wrapContent(innerHTML, name);
          outerHTML = outerHTML.replace(/<([^\/][^ >\/]+)/, '<$1 data-joshfire-child="' + name + '"');
          this.childrenOffsets[name] = accumulator;
          children[name] = outerHTML;
          childrenOuterHTML += outerHTML;

          if(++accumulator === this.numChildren) {
            var html = null;
            if (this.template) {
              var context = {
                children: children,
                T: i18n.getText
              };
              _.extend(context, this.data);
              html = this.template(context);
            }
            else {
              html = childrenOuterHTML;
            }

            cb(null, html);
          }
        }, this));
      }, this);
    },


    /**
     * Sets the HTML content of the view to the DOM element associated with the
     * view.
     *
     * @function
     * @param {string} html The HTML content to render
     *  (it should be the inner content)
     */
    setContent: function(html) {
      UIElement.prototype.setContent.call(this, html);

      if (this.children && this.el) {
        this.setChildrenElements(true);
      }
    },

    setElement: function(element, delegate) {
      UIElement.prototype.setElement.call(this, element, delegate);
      this.setChildrenElements(delegate);
    },

    setChildrenElements: function () {
      _.each(this.children, function(child, name) {
        var el = $(this.el).find('*[data-joshfire-child='+name+']')[0];
        child.setElement(el, true);
      }, this);
    },

    /**
     * Enhances the resulting view in the DOM if needed.
     *
     * The function is called automatically when the element is done
     * rendering. It calls the "enhance" function of the underlying
     * children.
     *
     * @function
     */
    enhance: function() {
      this.rendering = true;
      UIElement.prototype.enhance.call(this);

      if (this.children && this.el) {
        _.each(this.children, function (child) {
          child.enhance();
        }, this);
      }

      if (!this.children || (this.children.length === 0) && !this.wantsCustomLoadEvent) {
        // No children to render? That means the container is loaded.
        this.rendering = false;
        this.trigger('load');
      }
    },

    /**
     * Overrides base "remove" function to propagate the request to the
     * view's children.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      UIElement.prototype.remove.call(this);
      _.each(this.children, function (child) {
        this.stopListening(child);
        child.remove();
      }, this);
      this.children = null;
    },

    /**
     * Scrolls to top and asks its children to do the same
     */
    scrollTop: function() {
      UIElement.prototype.scrollTop.call(this);
      this.scrollTopChildren();
    },

    scrollTopChildren: function() {
      if (this.children) {
        _.each(this.children, function(child) {
          child.scrollTop();
        });
      }
    }
  });

  return Layout;
});

/**
 * @fileoverview The Layout UI element wraps multiple children views, and is
 * not directly tied to a model or collection.
 *
 * The class should be the base class of all container views.
 * The class propagates events and function calls to its children so that
 * derivated classes do not have to worry about that.
 *
 * Usage example:
 *  var layout = new Layout({
 *    children: {
 *      card1: myFirstView,
 *      card2: mySecondView
 *    }
 *  });
 *  layout.render();
 */

/*global define*/


define('joshfire-framework/ui/layout',[
  'joshlib!uielement',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/i18n'
], function(UIElement, _, $, i18n) {
  /**
   * Definition of the Layout class.
   *
   * The class extends UIItem.
   *
   * @class
   */
  var Layout = UIElement.extend({
    /**
     * Flag set when the view is rendering
     */
    rendering: false,

    /**
     * Element initialization.
     *
     * Called once when the element is created.
     *
     * @function
     * @param {Object} options Element options. Should at least define
     *  a "children" property
     */
    initialize: function(options) {
      // Initialize template.
      if(options.template) {
        this.template = this.compileTemplate(options.template);
      } else if(options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }

      // As explained below, we need this.customLoadEvent
      // to be always true in this case. However, we
      // do need to know
      if(options.customLoadEvent) {
        this.wantsCustomLoadEvent = true;
      }

      // Containers must wait for all of their children to be "loaded".
      // The following flag prevents the base View class from triggering
      // the "load" event at the end of the "enhance" function.
      this.customLoadEvent = true;

      this.setChildren(options.children);

      // Propagate "shown", "hidden" events to the view's children
      this.on('shown', function () {
        _.each(this.children, function (child) {
          child.trigger('shown');
        });
      }, this);
      this.on('hidden', function () {
        _.each(this.children, function (child) {
          child.trigger('hidden');
        });
      }, this);

      UIElement.prototype.initialize.call(this, options);
    },

    /**
     * Sets the children views.
     *
     * @function
     * @param {Object} an object containing the children views
     */
    setChildren: function(children) {
      if (this.children) {
        _.each(this.children, function (child) {
          this.stopListening(child);
          child.remove();
        }, this);
        this.children = null;
      }
      this.children = children;
      this.numChildren = 0;
      this.numChildrenLoaded = 0;

      if (children) {
        _.each(children, function (child) {
          ++this.numChildren;

          // Make "load" event from children "bubble".
          // Rules are:
          // - when the view is rendered, the "load" event is triggered once
          // all of its children have triggered the "load" event
          // - when the view is not rendered, the "load" event is triggered
          // whenever a child triggers a "load" event (the view cannot tell
          // whether more than one children are rendered, so it bubbles events
          // individually)
          this.listenTo(child, 'load', function () {
            if (this.rendering) {
              ++this.numChildrenLoaded;
              if (this.numChildrenLoaded === this.numChildren) {
                // All children have been loaded
                this.rendering = false;
                if(!this.wantsCustomLoadEvent) this.trigger('load');
              }
            }
            else {
              if (!this.wantsCustomLoadEvent) this.trigger('load');
            }
          });
        }, this);
      }
    },

    /**
     * Get a child view, better access than myLayout.children.myChild
     *
     * @function
     * @param {Object} the string name of the child view requested
     */
    getChild: function(child) {
      if (child) {
        return this.children[child];
      }
    },

    /**
     * Generates the HTML code to render.
     *
     * It calls the `generate` function of the underlying children.
     *
     * @function
     * @param {function(Object,Object)} cb Callback function that receives
     *   the error if one occurred and the HTML to render otherwise
     */
    generate: function(cb) {
      if(!this.children) return cb(null, '');

      this.childrenOffsets = {};
      this.numChildrenLoaded = 0;
      var accumulator = 0;
      var childrenOuterHTML = '';
      var children = {};

      _.each(this.children, function (child, name) {
        child.generate(_.bind(function (err, innerHTML) {
          var outerHTML = child.wrapContent(innerHTML, name);
          outerHTML = outerHTML.replace(/<([^\/][^ >\/]+)/, '<$1 data-joshfire-child="' + name + '"');
          this.childrenOffsets[name] = accumulator;
          children[name] = outerHTML;
          childrenOuterHTML += outerHTML;

          if(++accumulator === this.numChildren) {
            var html = null;
            if (this.template) {
              var context = {
                children: children,
                T: i18n.getText
              };
              _.extend(context, this.data);
              html = this.template(context);
            }
            else {
              html = childrenOuterHTML;
            }

            cb(null, html);
          }
        }, this));
      }, this);
    },


    /**
     * Sets the HTML content of the view to the DOM element associated with the
     * view.
     *
     * @function
     * @param {string} html The HTML content to render
     *  (it should be the inner content)
     */
    setContent: function(html) {
      UIElement.prototype.setContent.call(this, html);

      if (this.children && this.el) {
        this.setChildrenElements(true);
      }
    },

    setElement: function(element, delegate) {
      UIElement.prototype.setElement.call(this, element, delegate);
      this.setChildrenElements(delegate);
    },

    setChildrenElements: function () {
      _.each(this.children, function(child, name) {
        var el = $(this.el).find('*[data-joshfire-child='+name+']')[0];
        child.setElement(el, true);
      }, this);
    },

    /**
     * Enhances the resulting view in the DOM if needed.
     *
     * The function is called automatically when the element is done
     * rendering. It calls the "enhance" function of the underlying
     * children.
     *
     * @function
     */
    enhance: function() {
      this.rendering = true;
      UIElement.prototype.enhance.call(this);

      if (this.children && this.el) {
        _.each(this.children, function (child) {
          child.enhance();
        }, this);
      }

      if (!this.children || (this.children.length === 0) && !this.wantsCustomLoadEvent) {
        // No children to render? That means the container is loaded.
        this.rendering = false;
        this.trigger('load');
      }
    },

    /**
     * Overrides base "remove" function to propagate the request to the
     * view's children.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      UIElement.prototype.remove.call(this);
      _.each(this.children, function (child) {
        this.stopListening(child);
        child.remove();
      }, this);
      this.children = null;
    },

    /**
     * Scrolls to top and asks its children to do the same
     */
    scrollTop: function() {
      UIElement.prototype.scrollTop.call(this);
      this.scrollTopChildren();
    },

    scrollTopChildren: function() {
      if (this.children) {
        _.each(this.children, function(child) {
          child.scrollTop();
        });
      }
    }
  });

  return Layout;
});

/**
 * @fileoverview The CardPanel UI element wraps multipe chidren views, and
 * make one of them visibile via `showChild`.
 *
 * Usage example:
 *  var cardPanel = new CardPanel({
 *    children: {
 *      card1: myFirstView,
 *      card2: mySecondView
 *    }
 *  });
 *  cardPanel.showChild('card1');
 *  cardPanel.render(); // Render only needs to be called once
 *  ...
 *  cardPanel.showChild('card1'); // No render needed afterwards
 */

/*global define*/

define('joshfire-framework/ui/CardPanel',[
  'joshlib!ui/layout',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman'
], function(UILayout, _, i18n, $, woodman) {
  var logger = woodman.getLogger('joshfire.framework.ui.cardpanel');

  /**
   * Definition of the CardPanel class.
   *
   * The class extends UIItem and automatically renders the underlying model
   * when it is updated.
   *
   * @class
   */
  var CardPanel = UILayout.extend({
    /**
     * Element initialization.
     *
     * Called once when the element is created.
     *
     * @function
     * @param {Object} options Element options. Should at least define
     *  a "children" property and optionally a  "currentChild" property
     */
    initialize: function(options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      // Set the current active child. 'defaultChildren' is for legacy
      // support.
      this.showChild(options.currentChild || options.defaultChildren);

      UILayout.prototype.initialize.call(this, options);
    },

    /**
     * Sets the visibile child.
     *
     * @function
     * @param {String} the name of the child
     */
    showChild: function(name) {
      if (this.currentChild === name) {
        logger.log(this.logid, 'show child', 'name=' + name, 'already active');
        return;
      }

      // Only do this after render has been called, since it might depend on
      // the DOM.
      if (!this.rendered) {
        logger.log(this.logid, 'show child', 'name=' + name, 'not rendered');
        this.currentChild = name;
        return;
      }

      logger.log(this.logid, 'show child', 'name=' + name, 'run transition');
      this.transition(this.currentChild, name);
      this.currentChild = name;
    },

    /**
     * Alias for `showChild` (legacy support).
     */
    showChildren: function(name) {
      this.showChild(name);
    },

    /**
     * Hides the current child, shows a new one. Override this function to
     * create transition effects.
     *
     * @function
     * @param {String} fromChild the name of old child
     * @param {String} toChild the name of new child
     */
    transition: function (fromChild, toChild) {
      logger.log(this.logid, 'transition',
        'from=' + fromChild, 'to=' + toChild);

      _.each(this.children, function (child, name) {
        if (name !== toChild) {
          child.hide();
        }
      });

      if (toChild) {
        this.children[toChild].show();
      }
    },

    setChildrenElements: function () {
      _.each(this.children, function(child, name) {
        var wrapper = this.$el.find('.joshfire-wrapper').get(0);
        var el = wrapper.childNodes[this.childrenOffsets[name]];
        child.setElement(el, true);
      }, this);
    },

    /**
     * Adds a view to the cardpanel and renders it.
     * This should be called whenever a developer needs to insert
     * a new child in the panel and also needs said panel to look
     * stable, meaning he cannot render the whole pannel to insert it
     * (which would/could create a undesirable visual effect).
     * This function hence generates the new child's content and appends
     * it to the existing html of the panel ; thus achieving some kind
     * of partial rendering.
     */
    addChild: function(name, view) {

      var self = this,
          newChildren = this.children || {};

      if(!this.el.parentNode) return;

      this.children = this.children || {};
      this.children[name] = view;
      this.numChildren += 1;

      // Make "load" event from child "bubble".
      // Rules are:
      // - when the view is rendered, the "load" event is triggered once
      // all of its children have triggered the "load" event
      // - when the view is not rendered, the "load" event is triggered
      // whenever a child triggers a "load" event (the view cannot tell
      // whether more than one children are rendered, so it bubbles events
      // individually)
      this.listenTo(view, 'load', function () {
        if (this.rendering) {
          ++this.numChildrenLoaded;
          if (this.numChildrenLoaded === this.numChildren) {
            // All children have been loaded
            this.rendering = false;
            if(!this.wantsCustomLoadEvent) this.trigger('load');
          }
        }
        else {
          if (!this.wantsCustomLoadEvent) this.trigger('load');
        }
      });

      if (!this.rendered) return;

      this.childrenOffsets = this.childrenOffsets || {};
      this.childrenOffsets[name] = this.childrenOffsets ? _.size(this.childrenOffsets) : 0;
      view.hide();
      view.generate(_.bind(function (err, innerHTML) {
        var outerHTML = view.wrapContent(innerHTML);
        // Adds a data-joshfire-child attribute to the first node of the outerHTML.
        // The regexp is a light matching of the start of an html tag.

        outerHTML = outerHTML.replace(/<([^\/][^ >\/]+)/, '<$1 data-joshfire-child="' + name + '"');
        self.$('.joshfire-wrapper').append(outerHTML);

        // Set child view element
        var wrapper = this.$el.find('.joshfire-wrapper').get(0);
        var el = wrapper.childNodes[this.childrenOffsets[name]];
        view.setElement(el, true);

        // Enhance the view element
        view.enhance();
      }, this));
    },

    removeChild: function(name) {
      var rc = this.children[name];
      if(rc) {
        delete this.children[name];
        rc.el.parentNode.removeChild(rc.el);
        this.setChildrenOffset();
      }
    },

    setChildrenOffset: function() {
      var wrapper = this.$el.find('.joshfire-wrapper').get(0);
      var els = wrapper.childNodes;
      var childrenNames = _.keys(this.children);

      this.childrenOffsets = {};
      for(var k in els) {
        if(els.hasOwnProperty(k)) {
          var childName = $(els[k]).data('joshfire-child');
          if(_.contains(childrenNames, childName)) {
            this.childrenOffsets[childName] = k;
          }
        }
      }
    },

    /**
     * Generates the HTML code to render.
     *
     * It calls the `generate` function of the underlying children.
     *
     * @function
     * @param {function(Object,Object)} cb Callback function that receives
     *   the error if one occurred and the HTML to render otherwise
     */
    generate: function (cb) {
      logger.log(this.logid, 'generate');
      var self = this;

      this.childrenOffsets = {};
      this.numChildrenLoaded = 0;
      var accumulator = 0;
      var childrenOuterHTML = '';
      var childrenHTML = {};
      var getFinalHTML = function(coh) {
        coh = coh || '';
        var childrenOuterHTML = '<div class="joshfire-wrapper">' + coh + '</div>',
            html = null;

        if (self.template) {
          var context = {
            childrenOuterHTML: childrenOuterHTML,
            childrenHTML: childrenHTML,
            T: i18n.getText
          };
          _.extend(context, self.data);
          html = self.template(context);
        }
        else {
          html = childrenOuterHTML;
        }

        return html;
      };

      if(!this.children || _.size(this.children) === 0) {
        var html = getFinalHTML(childrenOuterHTML);
        cb(null, html);
      }

      _.each(this.children, function (child, name) {
        child.generate(_.bind(function (err, innerHTML) {
          var outerHTML = child.wrapContent(innerHTML);
          this.childrenOffsets[name] = accumulator;
          childrenHTML[name] = outerHTML;
          childrenOuterHTML += outerHTML;

          if(++accumulator === this.numChildren) {
            var html = getFinalHTML(childrenOuterHTML);
            cb(null, html);
          }
        }, this));
      }, this);
    },

    /**
     * Enhances the resulting view in the DOM if needed.
     *
     * The function is called automatically when the element is done
     * rendering. It calls the "enhance" function of the underlying
     * children.
     *
     * @function
     */
    enhance: function() {
      logger.log(this.logid, 'enhance');

      UILayout.prototype.enhance.call(this);

      // Set the wrapper's height to 100% so that it fills its
      // parent and remains transparent from an layout perspective.
      this.$('.joshfire-wrapper').first().css({
        height: '100%'
      });

      if(this.currentChild) {
        this.transition(null, this.currentChild);
      }
    },

    scrollTopChildren: function() {
      logger.log(this.logid, 'scroll top');
      if (this.currentChild) {
        this.children[this.currentChild].scrollTop();
      }
    }
  });

  return CardPanel;
});

/**
 * @fileoverview Atomic view bound to a data model.
 *
 * The UIItem class is a basic view that is associated with a
 * Backbone model. The view is automatically refreshed when the
 * model changes (in other words, the view is rendered each time
 * a "change" event is triggered on the underlying model).
 *
 * There are two ways to bind the view to a model:
 * 1. when the view is created, passing a "model" property in the options:
 *  new UIItem({ model: foo });
 * 2. after the view has been created, through calls to the setModel function:
 *  view.setModel(foo);
 *
 * A UIItem class may also be given an HTML template (compatible with
 * Underscore's "template" function) or an element selector that targets
 * the HTML template in the DOM, e.g.:
 *  new UIItem({ template: "<h2><%= item.name %></h2>" });
 *  new UIItem({ templateEl: "#template-h2" });
 * ... provided #template-h2 is defined in the DOM for the second case,
 * typically in a "script" template:
 *  <script type="text/template" id="template-h2">
 *   <h2><%= item.name %></h2>
 *  </script>
 *
 * The variables exposed to the HTML context are:
 *  - model: the model associated with the view
 *  - item: a JSON representation of the Backbone model (in other words,
 *      the result of a call to model.toJSON())
 *  - all properties passed at creation step in a "data" property, e.g.:
 *      var view = new UIItem({
 *        templateEl: "#template-h2",
 *        data: { foo: "bar" }
 *      });
 *    would expose a "foo" variable to the HTML template whose value is "bar".
 *
 * Whenever possible, you should use the "data" mechanism to expose additional
 * properties to an HTML template in derivated views, as opposed to overwriting
 * the UIItem's "generate" function.
 */

/*global define*/

define('joshfire-framework/ui/Item',[
  'joshlib!uielement',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n'
], function (UIElement, $, woodman, _, i18n) {
  var logger = woodman.getLogger('joshfire.framework.ui.item');

  /**
   * UIItem extends UIElement as all other views in the Framework.
   */
  var UIItem = UIElement.extend({
    /**
     * Initialization code that gets executed when the view is created.
     *
     * If set, the code initializes the HTML template and the model associated
     * with the view (as well as options taken care of by UIElement)
     *
     * @function
     * @param {Object} options View options. Properties understood on top
     *  of those of UIElement: "template" or "templateEl", "model".
     */
    initialize: function(options) {

      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      if (typeof options.template === 'string') {
        this.template = this.compileTemplate(options.template);
      } else if (typeof options.template === 'function') {
        this.template = options.template;
      } else if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }

      this.setModel(options.model);

      UIElement.prototype.initialize.call(this, options);
    },


    /**
     * Binds the view to the given model.
     *
     * Once bound to a model, the view will be automatically updated whenever
     * the model changes. By default, the update takes the form of a
     * re-rendering of the view but derived classes may override the "update"
     * function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given model. In particular, if the view is
     * already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new model, it should be automatically
     * updated. Note that update would likely affect running code that uses the
     * framework, so beware.
     *
     * @function
     * @param {Model} model Backbone model to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setModel: function (model, update) {
      if (this.model) {
        this.stopListening(this.model);
      }

      this.model = model;

      if (this.model) {
        logger.log(this.logid, 'set model',
          'model=' + (model.get('name') || model.id));
        this.listenTo(this.model, 'change', this.callIfNotRemoved(this.update));
      }
      if (update) {
        this.update();
      }
    },


    /**
     * Updates the contents of the view when the model changes
     *
     * Default implementation re-renders the view whenever a change is detected,
     * unless the view has not yet been rendered.
     *
     * Classes that derive this class may want to override that function to
     * provide a smarter mechanism, in particular not to update the underlying
     * view if it does not need to be updated.
     *
     * @function
     */
    update: function () {
      logger.log(this.logid, 'update');
      if (!this.rendered) return;
      this.render();
    },


    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * The function runs the HTML template if one is defined, exposing
     * the underlying model and data options.
     *
     * If no HTML template is defined, the function returns an empty string.
     * If no model is set, the function returns an empty string as well. This
     * last behavior allows to make certain assumptions in the HTML template,
     * not to clutter the code with ugly "<%= (foo ? foo.name : '') %>".
     *
     * @function
     * @param {function} cb Callback function called with an error or
     *  the HTML markup to render. The function never sets the error but note
     *  the HTML template may crash if it's invalid or if it makes wrong
     *  assumptions about the model.
     */
    generate: function(cb) {
      if (!this.template) {
        logger.log(this.logid, 'generate', 'no template');
        return cb(null, '');
      }

      if (!this.model) {
        logger.log(this.logid, 'generate', 'no model');
        return cb(null, '');
      }

      var context = {
        model:  this.model,
        obj: this.model,
        item: this.model ? this.model.toJSON() : {},
        T: i18n.getText
      };
      _.extend(context, this.data);

      logger.log(this.logid, 'generate', 'preparing');
      cb(null, this.template(context));
    },


    /**
     * Overrides base "remove" function to forget about the underlying model.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      logger.log(this.logid, 'remove');
      UIElement.prototype.remove.call(this);
      this.model = null;
    }
  });

  return UIItem;
});

// This is the dynamic implementation map containing
// tests.

define('implementations',{
  List: [
    {
      implementation: 'js/views/List.androidphone',
      isAvailable: function(runtime) {
        return (runtime.os.family.indexOf('Android') > -1 &&
                  runtime.formfactor.family === 'phone');
      }
    },
    {
      implementation: 'js/views/List.phone',
      isAvailable: function(runtime) {
        return runtime.formfactor.family === 'phone';
      }
    },
    {
      implementation: 'js/views/List.tablet',
      isAvailable: function(runtime) {
        return runtime.formfactor.family === 'tablet';
      }
    },
    // default implementation (don't forget to set one ! could become ugly)
    {
      implementation: 'js/views/List',
      isAvailable: function(runtime) { return true; }
    }
  ],

  Toolbar: [
    {
      implementation: 'js/views/Toolbar.tablet',
      isAvailable: function(runtime) {
        return runtime.formfactor.family === 'tablet';
      }
    },
    {
      implementation: 'js/views/Toolbar',
      isAvailable: function(runtime) { return true; }
    }
  ]
});
define('runtime',{"ua":{"family":"Mobile Safari","major":"5","minor":"1","patch":null},"device":{"family":"iPhone"},"formfactor":{"family":"phone"},"os":{"family":"iPhone OS","major":"5","minor":"0","patch":null,"patchMinor":null}});
/*globals console*/

define('devicedetect',['implementations', 'runtime'], function (implementations, runtime) {

  var devicedetect = {

    normalize: function (name) {
      var featureInfo = implementations[name],
          hasMultipleImpls = Object.prototype.toString.call(featureInfo) === '[object Array]',
          i, m;

      if (!hasMultipleImpls) {
        return name;
      } else {

        var trueRuntime;

        if(typeof runtime === 'function' && typeof navigator !== 'undefined' && navigator.userAgent) {
          trueRuntime = runtime(navigator.userAgent);
        } else {
          trueRuntime = runtime;
        }

        for (i = 0, m = featureInfo.length; i < m; i++) {
          var current = featureInfo[i];
          if (current.isAvailable(trueRuntime)) {
            if (current && typeof current !== 'undefined') {
              return current.implementation;
            }
          }
        }
      }

      console.log('DeviceDetect : Did not find any valid feature for : ' + name);
      return name;

    },

    load: function (name, req, load) {
      req([name], function (value) {
        load(value);
      });
    }
  };
  return devicedetect;
});
/**
 * @license RequireJS text 1.0.8 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
  define: false, window: false, process: false, Packages: false,
  java: false, location: false */

(function () {
    var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = [];

    define('text',[],function () {
        var text, fs;

        text = {
            version: '1.0.8',

            strip: function (content) {
                //Strips <?xml ...?> declarations so that external SVG and XML
                //documents can be added to a document without worry. Also, if the string
                //is an HTML document, only the part inside the body tag is returned.
                if (content) {
                    content = content.replace(xmlRegExp, "");
                    var matches = content.match(bodyRegExp);
                    if (matches) {
                        content = matches[1];
                    }
                } else {
                    content = "";
                }
                return content;
            },

            jsEscape: function (content) {
                return content.replace(/(['\\])/g, '\\$1')
                    .replace(/[\f]/g, "\\f")
                    .replace(/[\b]/g, "\\b")
                    .replace(/[\n]/g, "\\n")
                    .replace(/[\t]/g, "\\t")
                    .replace(/[\r]/g, "\\r");
            },

            createXhr: function () {
                //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
                var xhr, i, progId;
                if (typeof XMLHttpRequest !== "undefined") {
                    return new XMLHttpRequest();
                } else if (typeof ActiveXObject !== "undefined") {
                    for (i = 0; i < 3; i++) {
                        progId = progIds[i];
                        try {
                            xhr = new ActiveXObject(progId);
                        } catch (e) {}

                        if (xhr) {
                            progIds = [progId];  // so faster next time
                            break;
                        }
                    }
                }

                return xhr;
            },

            /**
             * Parses a resource name into its component parts. Resource names
             * look like: module/name.ext!strip, where the !strip part is
             * optional.
             * @param {String} name the resource name
             * @returns {Object} with properties "moduleName", "ext" and "strip"
             * where strip is a boolean.
             */
            parseName: function (name) {
                var strip = false, index = name.indexOf("."),
                    modName = name.substring(0, index),
                    ext = name.substring(index + 1, name.length);

                index = ext.indexOf("!");
                if (index !== -1) {
                    //Pull off the strip arg.
                    strip = ext.substring(index + 1, ext.length);
                    strip = strip === "strip";
                    ext = ext.substring(0, index);
                }

                return {
                    moduleName: modName,
                    ext: ext,
                    strip: strip
                };
            },

            xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

            /**
             * Is an URL on another domain. Only works for browser use, returns
             * false in non-browser environments. Only used to know if an
             * optimized .js version of a text resource should be loaded
             * instead.
             * @param {String} url
             * @returns Boolean
             */
            useXhr: function (url, protocol, hostname, port) {
                var match = text.xdRegExp.exec(url),
                    uProtocol, uHostName, uPort;
                if (!match) {
                    return true;
                }
                uProtocol = match[2];
                uHostName = match[3];

                uHostName = uHostName.split(':');
                uPort = uHostName[1];
                uHostName = uHostName[0];

                return (!uProtocol || uProtocol === protocol) &&
                       (!uHostName || uHostName === hostname) &&
                       ((!uPort && !uHostName) || uPort === port);
            },

            finishLoad: function (name, strip, content, onLoad, config) {
                content = strip ? text.strip(content) : content;
                if (config.isBuild) {
                    buildMap[name] = content;
                }
                onLoad(content);
            },

            load: function (name, req, onLoad, config) {
                //Name has format: some.module.filext!strip
                //The strip part is optional.
                //if strip is present, then that means only get the string contents
                //inside a body tag in an HTML string. For XML/SVG content it means
                //removing the <?xml ...?> declarations so the content can be inserted
                //into the current doc without problems.

                // Do not bother with the work if a build and text will
                // not be inlined.
                if (config.isBuild && !config.inlineText) {
                    onLoad();
                    return;
                }

                var parsed = text.parseName(name),
                    nonStripName = parsed.moduleName + '.' + parsed.ext,
                    url = req.toUrl(nonStripName),
                    useXhr = (config && config.text && config.text.useXhr) ||
                             text.useXhr;

                //Load the text. Use XHR if possible and in a browser.
                if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                    text.get(url, function (content) {
                        text.finishLoad(name, parsed.strip, content, onLoad, config);
                    });
                } else {
                    //Need to fetch the resource across domains. Assume
                    //the resource has been optimized into a JS module. Fetch
                    //by the module name + extension, but do not include the
                    //!strip part to avoid file system issues.
                    req([nonStripName], function (content) {
                        text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                        parsed.strip, content, onLoad, config);
                    });
                }
            },

            write: function (pluginName, moduleName, write, config) {
                if (buildMap.hasOwnProperty(moduleName)) {
                    var content = text.jsEscape(buildMap[moduleName]);
                    write.asModule(pluginName + "!" + moduleName,
                                   "define(function () { return '" +
                                       content +
                                   "';});\n");
                }
            },

            writeFile: function (pluginName, moduleName, req, write, config) {
                var parsed = text.parseName(moduleName),
                    nonStripName = parsed.moduleName + '.' + parsed.ext,
                    //Use a '.js' file name so that it indicates it is a
                    //script that can be loaded across domains.
                    fileName = req.toUrl(parsed.moduleName + '.' +
                                         parsed.ext) + '.js';

                //Leverage own load() method to load plugin value, but only
                //write out values that do not have the strip argument,
                //to avoid any potential issues with ! in file names.
                text.load(nonStripName, req, function (value) {
                    //Use own write() method to construct full module value.
                    //But need to create shell that translates writeFile's
                    //write() to the right interface.
                    var textWrite = function (contents) {
                        return write(fileName, contents);
                    };
                    textWrite.asModule = function (moduleName, contents) {
                        return write.asModule(moduleName, fileName, contents);
                    };

                    text.write(pluginName, nonStripName, textWrite, config);
                }, config);
            }
        };

        if (text.createXhr()) {
            text.get = function (url, callback) {
                var xhr = text.createXhr();
                xhr.open('GET', url, true);
                xhr.onreadystatechange = function (evt) {
                    //Do not explicitly handle errors, those should be
                    //visible via console output in the browser.
                    if (xhr.readyState === 4) {
                        callback(xhr.responseText);
                    }
                };
                xhr.send(null);
            };
        } else if (typeof process !== "undefined" &&
                 process.versions &&
                 !!process.versions.node) {
            //Using special require.nodeRequire, something added by r.js.
            fs = require.nodeRequire('fs');

            text.get = function (url, callback) {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            };
        } else if (typeof Packages !== 'undefined') {
            //Why Java, why is this so awkward?
            text.get = function (url, callback) {
                var encoding = "utf-8",
                    file = new java.io.File(url),
                    lineSeparator = java.lang.System.getProperty("line.separator"),
                    input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                    stringBuffer, line,
                    content = '';
                try {
                    stringBuffer = new java.lang.StringBuffer();
                    line = input.readLine();

                    // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                    // http://www.unicode.org/faq/utf_bom.html

                    // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                    // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                    if (line && line.length() && line.charAt(0) === 0xfeff) {
                        // Eat the BOM, since we've already found the encoding on this file,
                        // and we plan to concatenating this buffer with others; the BOM should
                        // only appear at the top of a file.
                        line = line.substring(1);
                    }

                    stringBuffer.append(line);

                    while ((line = input.readLine()) !== null) {
                        stringBuffer.append(lineSeparator);
                        stringBuffer.append(line);
                    }
                    //Make sure we return a JavaScript string and not a Java string.
                    content = String(stringBuffer.toString()); //String
                } finally {
                    input.close();
                }
                callback(content);
            };
        }

        return text;
    });
}());

/**
 * A list item.
 *
 * The ListItem class is mostly intended for internal use within a List.
 *
 * The ListItem class wraps a view that provides the content of the item.
 *
 * As implemented, the ListItem class is useless. It should provide
 * the wrapper markup that converts a view into a proper list item. Typically,
 * for an <ol> or <ul> list, the ListItem class should provide the <li> tag
 * and delegates the inner HTML of the item to the wrapped view.
 *
 * Right now, the wrapped view must include the <li> tag in its template
 * which makes it impossible to reuse the wrapped view in other contexts
 * (and makes this ListItem view totally useless for the time being as
 * already stated)
 */

define('joshfire-framework/ui/listitem',[
  'joshlib!uielement',
  'joshlib!utils/woodman'
], function (UIElement, woodman) {
  var logger = woodman.getLogger('joshfire.framework.ui.listitem');

  var UIListItem = UIElement.extend({

    tagName: 'li',

    initialize: function(options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      this.view = options.view;
      this.view.data = this.view.data || {};
      this.offset  = options.offset;

      // We'll trigger the "load" event when the underlying view is loaded
      this.customLoadEvent = true;
      if (this.view) {
        this.listenTo(this.view, 'load', function () {
          this.trigger('load');
        });
      }

      UIElement.prototype.initialize.call(this, options);
    },

    generate: function(cb) {
      logger.log(this.logid, 'generate');
      var self = this;
      this.view.data.offset = this.offset;
      this.view.generate(function(err, html) {
        html = self.wrapContent(html, self.offset+'');
        cb(null, html);
      });
    },

    enhance: function() {
      logger.log(this.logid, 'enhance');
      if (this.view) {
        this.view.enhance();
      }
      UIElement.prototype.enhance.call(this);
    },

    setElement: function(el, delegate) {
      if (this.view) {
        this.view.setElement(el, delegate);
      }
      UIElement.prototype.setElement.call(this, el, delegate);
    },

    /**
     * Overrides base "remove" function to propagate the request to its child.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      logger.log(this.logid, 'remove');
      UIElement.prototype.remove.call(this);
      if (this.view) {
        this.view.remove();
        this.view = null;
      }
    }
  });

  return UIListItem;
});
/**
 * @fileoverview Atomic view bound to a data model.
 *
 * The UIItem class is a basic view that is associated with a
 * Backbone model. The view is automatically refreshed when the
 * model changes (in other words, the view is rendered each time
 * a "change" event is triggered on the underlying model).
 *
 * There are two ways to bind the view to a model:
 * 1. when the view is created, passing a "model" property in the options:
 *  new UIItem({ model: foo });
 * 2. after the view has been created, through calls to the setModel function:
 *  view.setModel(foo);
 *
 * A UIItem class may also be given an HTML template (compatible with
 * Underscore's "template" function) or an element selector that targets
 * the HTML template in the DOM, e.g.:
 *  new UIItem({ template: "<h2><%= item.name %></h2>" });
 *  new UIItem({ templateEl: "#template-h2" });
 * ... provided #template-h2 is defined in the DOM for the second case,
 * typically in a "script" template:
 *  <script type="text/template" id="template-h2">
 *   <h2><%= item.name %></h2>
 *  </script>
 *
 * The variables exposed to the HTML context are:
 *  - model: the model associated with the view
 *  - item: a JSON representation of the Backbone model (in other words,
 *      the result of a call to model.toJSON())
 *  - all properties passed at creation step in a "data" property, e.g.:
 *      var view = new UIItem({
 *        templateEl: "#template-h2",
 *        data: { foo: "bar" }
 *      });
 *    would expose a "foo" variable to the HTML template whose value is "bar".
 *
 * Whenever possible, you should use the "data" mechanism to expose additional
 * properties to an HTML template in derivated views, as opposed to overwriting
 * the UIItem's "generate" function.
 */

/*global define*/

define('joshfire-framework/ui/item',[
  'joshlib!uielement',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n'
], function (UIElement, $, woodman, _, i18n) {
  var logger = woodman.getLogger('joshfire.framework.ui.item');

  /**
   * UIItem extends UIElement as all other views in the Framework.
   */
  var UIItem = UIElement.extend({
    /**
     * Initialization code that gets executed when the view is created.
     *
     * If set, the code initializes the HTML template and the model associated
     * with the view (as well as options taken care of by UIElement)
     *
     * @function
     * @param {Object} options View options. Properties understood on top
     *  of those of UIElement: "template" or "templateEl", "model".
     */
    initialize: function(options) {

      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      if (typeof options.template === 'string') {
        this.template = this.compileTemplate(options.template);
      } else if (typeof options.template === 'function') {
        this.template = options.template;
      } else if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }

      this.setModel(options.model);

      UIElement.prototype.initialize.call(this, options);
    },


    /**
     * Binds the view to the given model.
     *
     * Once bound to a model, the view will be automatically updated whenever
     * the model changes. By default, the update takes the form of a
     * re-rendering of the view but derived classes may override the "update"
     * function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given model. In particular, if the view is
     * already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new model, it should be automatically
     * updated. Note that update would likely affect running code that uses the
     * framework, so beware.
     *
     * @function
     * @param {Model} model Backbone model to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setModel: function (model, update) {
      if (this.model) {
        this.stopListening(this.model);
      }

      this.model = model;

      if (this.model) {
        logger.log(this.logid, 'set model',
          'model=' + (model.get('name') || model.id));
        this.listenTo(this.model, 'change', this.callIfNotRemoved(this.update));
      }
      if (update) {
        this.update();
      }
    },


    /**
     * Updates the contents of the view when the model changes
     *
     * Default implementation re-renders the view whenever a change is detected,
     * unless the view has not yet been rendered.
     *
     * Classes that derive this class may want to override that function to
     * provide a smarter mechanism, in particular not to update the underlying
     * view if it does not need to be updated.
     *
     * @function
     */
    update: function () {
      logger.log(this.logid, 'update');
      if (!this.rendered) return;
      this.render();
    },


    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * The function runs the HTML template if one is defined, exposing
     * the underlying model and data options.
     *
     * If no HTML template is defined, the function returns an empty string.
     * If no model is set, the function returns an empty string as well. This
     * last behavior allows to make certain assumptions in the HTML template,
     * not to clutter the code with ugly "<%= (foo ? foo.name : '') %>".
     *
     * @function
     * @param {function} cb Callback function called with an error or
     *  the HTML markup to render. The function never sets the error but note
     *  the HTML template may crash if it's invalid or if it makes wrong
     *  assumptions about the model.
     */
    generate: function(cb) {
      if (!this.template) {
        logger.log(this.logid, 'generate', 'no template');
        return cb(null, '');
      }

      if (!this.model) {
        logger.log(this.logid, 'generate', 'no model');
        return cb(null, '');
      }

      var context = {
        model:  this.model,
        obj: this.model,
        item: this.model ? this.model.toJSON() : {},
        T: i18n.getText
      };
      _.extend(context, this.data);

      logger.log(this.logid, 'generate', 'preparing');
      cb(null, this.template(context));
    },


    /**
     * Overrides base "remove" function to forget about the underlying model.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      logger.log(this.logid, 'remove');
      UIElement.prototype.remove.call(this);
      this.model = null;
    }
  });

  return UIItem;
});

define('joshfire-framework/utils/closest_descendant',['joshlib!utils/dollar'], function ($) {
  /**
   * Returns the closest descendant of a jQuery set which matches a selector
   *
   * Use this instead of jQuery.find().first() when you don't want to match
   * a nested element
   *
   * The closest element is the one whose depth & position are the lowest
   * Example:
   * <div>
   *   <div>
   *     <span> 1 </span>
   *     <span> 2 </span>
   *   </div>
   *   <span> 3 </span>
   *   <span> 4 </span>
   * </div>
   *
   * closest_descendant(el, 'span') will return the 3rd span
   *
   * @function
   * @param {element|string|jQuery object} A DOM element, a jQuery set or a selector
   * @param {string} The selector used to filter the descendants
   * @return {jQuery object} the closest descendant (may be an empty jQuery object)
   */

  var closest_descendant = function($set, selector) {
    $set = $($set); // ensures we deal with a jQuery set
    var $found = $(); // empty set
    while ($set.length) {
      // search the current set
      $found = $set.filter(selector);
      // stop if one is found
      if ($found.length) break;
      // replace the current set by the children of all item in the set
      $set = $set.children();
    }
    return $found.first();
  };

  return closest_descendant;
});

/**
 * @fileOverview Describes a possibly dynamic list.
 *
 * A list is bound to a collection. Each item in the collection gets wrapped
 * in a ListItem view before it is rendered. From a DOM perspective, this
 * creates a structure that is similar to "ul/li/[content]" although you may
 * choose to follow a more complex structure if needed.
 *
 * Items may be added to the collection using the "addChild" method.
 * The view adjusts accordingly.
 *
 * The list also implements a "load more" features that tries to load more items
 * from the collection in the background while the user scrolls the list. The
 * "load more" action gets triggered when the user has scrolled more than about
 * 75% of the list. The functionality only really works for "joshlib!collection"
 * datasource collections as the view needs to know how to request pages 2, 3...
 * of the collection.
 *
 * Options that change the behavior of the list need to be set when the list is
 * created:
 *
 * - templateEl: the DOM element or CSS selector to use to initialize the HTML
 * template for the list. The "templateEl" option is used to set the value of
 * the "template" option so both options should not be used at once.
 *
 * - template: the HTML template of the view. Value can be a string or a
 * template function. The value is first computed based on the "templateEl"
 * option. If that option is not set, the value provided is used if set. The
 * view creates a "<ul>" list otherwise.
 *
 * - collection: the Backbone collection that contains or will contain the
 * actual list of models to display within the collection.
 *
 * - itemOptions.templateEl: same as "templateEl" for an item in the list.
 * - itemOptions.template: same as "template" for an item in the list.
 * - itemOptions.*: all other options will be passed to the constructor of the
 * view created to display an item in the list.
 * - itemOptions.factory or itemFactory: the class constructor to use to create
 * the view that displays an item in the list. The function receives the
 * Backbone model to display as first parameter and the position offset as
 * second parameter. It must return a View.
 *
 * - maxLength: maximum number of items that the list may render. If the list
 * contains more items, they are ignored.
 *
 * - autoLoadMore: enables the "load more" mechanism when set.
 * - loadMore: function to use to fetch more items in the list. The function
 * receives the underlying Backbone collection as first parameter and a callback
 * function as second parameter. The callback function must be called once the
 * fetch is over.
 * - dataLoadingMoreClass: the class to use to flag the view when the load more
 * is in progress. If not given, the dataLoadingClass name is used. If value is
 * "false", the view is never flagged as loading more items.
 *
 * - customLoadEvent: when not set, the view triggers the "load" event on its
 * own once all of its children have triggered the "load" event. The view does
 * not trigger the "load" event otherwise.
 *
 * - dataLoadingClass: the name of the class used to flag the view as loading.
 * Defaults to "loading". If value is "false", the view is never flagged as
 * loading.
 *
 * Options from the Element and View base classes complete the list of options
 * available. See the description of these classes for details. Options include
 * "scroller", "scrollerSelector", "onScroll", "loadImagesSmoothly",
 * "imageClass", "getImages", "loadingClass", "processImageEl", "data".
 *
 * TODO:
 * - the list does not manage the suppression of models from the underlying
 * collection.
 * - as in most other views, data errors are not really handled
 */

define('joshfire-framework/ui/List',[
  'joshlib!uielement',
  'joshlib!ui/listitem',
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n',
  'joshlib!utils/woodman',
  'joshlib!utils/closest_descendant'
], function(
  UIElement,
  UIListItem,
  UIItem,
  $,
  _,
  i18n,
  woodman,
  closest_descendant
) {
  var logger = woodman.getLogger('joshfire.framework.ui.list');

  /**
   * Defines a list as a view bound to a Backbone collection of models.
   *
   * The list is dynamically updated as new items get added to the collection.
   * See the above description for more details about available options.
   */
  var UIList = UIElement.extend({
    /**
     * Height of the list that is currently rendered
     */
    listHeight: 0,


    /**
     * Initializes all list options at instantiation phase.
     */
    initialize: function (options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      // Initialize the HTML template of the view
      if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }
      else if (options.template) {
        if (_.isFunction(options.template)) {
          this.template = options.template;
        }
        else {
          this.template = this.compileTemplate(options.template);
        }
      } else {
        this.template = this.compileTemplate('<ul><%= children %></ul>');
      }

      this.itemOptions = options.itemOptions || {scroller: false};
      this.listItemOptions = options.listItemOptions || {};
      this.itemTemplateEl = options.itemTemplateEl;
      this.itemOptions.templateEl = this.itemOptions.templateEl || this.itemTemplateEl;
      this.itemOptions.template = this.itemOptions.template || options.itemTemplate;
      this.maxLength = options.maxLength || null;
      this.data = options.data || {};
      this.items = [];

      // Default item factory
      this.itemFactory = options.itemFactory ||
        function (model, offset) {
          var params = {
            model: model,
            offset: offset
          };
          _.extend(params, this.itemOptions);
          return new UIItem(params);
        };
      this.itemFactory = _.bind(this.itemFactory, this);

      // TODO: deprecate this. The "list item" level is useless provided we
      // have a generic "wrapper" class that can be used to wrap items.
      this.listItemFactory = options.listItemFactory ||
        function (model, offset) {
          var params = {
            model: model,
            offset: offset,
            view: this.itemFactory(model, offset)
          };

          _.extend(params, this.listItemOptions);

          return new UIListItem(params);
        };

      this.listItemFactory = _.bind(this.listItemFactory, this);

      // The loadMore function fetches more items from the collection.
      // Note the collection should trigger "load:start", "load" and
      // "load:error" events for the autoLoadMore feature to work properly
      this.autoLoadMore = options.autoLoadMore;
      this.loadMore = function () {
        if (this.isLoadingMore) {
          logger.log(this.logid, 'already loading more items');
          return;
        }

        if (!this.collection || !this.collection.hasMore) {
          logger.log(this.logid, 'no more items to fetch');
          return;
        }

        logger.log(this.logid, 'loadMore');
        this.isLoadingMore = true;

        if (options.loadMore) {
          options.loadMore(this.collection);
        }
        else if (_.isFunction(this.collection.fetchMore)) {
          this.collection.fetchMore();
        }
        else {
          // No way to load more items in this collection
          logger.warn(this.logid, 'loadMore',
            'no fetchMore function available');
          this.collection.hasMore = false;
          this.isLoadingMore = false;
        }
      };

      if (this.autoLoadMore) {
        options.onScroll = options.onScroll ||
          _.bind(function (e, scrollHeight, scrollTop) {
            // If we currently are doing a load more, do nothing
            if (this.isLoadingMore) return;
            if (!this.collection.hasMore) return;
            if ((scrollHeight - this.getLoadMoreDistance()) <=
                (scrollTop + this.$el.innerHeight())) {
              logger.log(this.logid, 'loadMore', 'triggering',
                'distance=' + (scrollHeight - this.getLoadMoreDistance()),
                'height=' + (scrollTop + this.$el.innerHeight()));
              this.loadMore();
            }
          }, this);
      } else {
        options.onScroll = options.onScroll || false;
      }

      // As explained below, we need this.customLoadEvent
      // to be always true in this case. However, we
      // do need to know
      if (options.customLoadEvent) {
        this.wantsCustomLoadEvent = true;
      }

      // The list must wait for all of its children to be "loaded"
      // before it may trigger the "load" event.
      this.customLoadEvent = true;

      // Data loading class that gets added to the view's element
      // while data synchro is on. "loading" is used if not overridden
      // Set the option to false or null (and not undefined) to cancel
      // the addition of the class.
      this.dataLoadingClass = 'loading';
      if (typeof options.dataLoadingClass !== 'undefined') {
        this.dataLoadingClass = options.dataLoadingClass;
      }
      if (options.dataLoadingClass === false) {
        this.dataLoadingClass = '';
      }

      if (typeof options.dataLoadingMoreClass !== 'undefined') {
        this.dataLoadingMoreClass = options.dataLoadingMoreClass;
      }
      else {
        this.dataLoadingMoreClass = this.dataLoadingClass;
      }
      if (options.dataLoadingMoreClass === false) {
        this.dataLoadingMoreClass = '';
      }

      // Propagate "shown", "hidden" events to the view's children
      this.listenTo(this, 'shown', function () {
        _.each(this.items, function (child) {
          child.trigger('shown');
        });
      });
      this.listenTo(this, 'hidden', function () {
        _.each(this.items, function (child) {
          child.trigger('hidden');
        });
      });

      UIElement.prototype.initialize.call(this, options);

      if (options.collection) {
        this.setCollection(options.collection);
      }
    },


    /**
     * Returns the DOM element that serves as container for the list of items
     * within the view.
     *
     * The item container is defined as, in order:
     * - the element that has a "data-container" attribute
     * - the first "ul" element
     * - the first "ol" element
     * - the view's root element otherwise
     *
     * @function
     * @return {Element} The item container
     */
    getItemContainer: function () {
      var itemContainerSelector = '*[data-container], ul, ol';
      var container = closest_descendant(this.$el, itemContainerSelector);

      if (container.length === 0) {
        container = this.$el.first();
      }
      return container;
    },


    /**
     * Sets the collection associated with the view
     *
     * Once bound to a collection, the view will be automatically updated
     * whenever the collection changes. By default, the update takes the form
     * of a re-rendering of the view but derived classes may override the
     * "update" function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given collection. In particular, if the view
     * is already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new collection, it should be
     * automatically updated. Note that update would likely affect running
     * code that uses the framework, so beware.
     *
     * @function
     * @param {Collection} collection Backbone collection to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setCollection: function (collection, update) {
      if (this.collection) {
        this.stopListening(this.collection);
      }

      this.collection = collection;
      this.collectionChanged = true;
      this.newChildren = [];

      if (this.collection) {
        logger.log(this.logid, 'set collection');
        this.listenTo(this.collection, 'add',
          this.callIfNotRemoved(this.addChild));
        this.listenTo(this.collection, 'remove',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'reset',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'sort',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'load:start',
          this.callIfNotRemoved(this.syncStartedHandler));
        this.listenTo(this.collection, 'load',
          this.callIfNotRemoved(this.syncSuccessHandler));
        this.listenTo(this.collection, 'load:error',
          this.callIfNotRemoved(this.syncErrorHandler));
      }

      if (update) {
        this.update();
      }
    },


    /**
     * Return the real height of the list, not the one of the container.
     */
    getListHeight: function() {
      return this.$el.find('.first').outerHeight();
    },


    /**
     * The load more distance is the distance from the bottom of the list which,
     * when reached through scrolling, triggers a "load more".
     *
     * The distance needs to be computed after each "load more" as there are no
     * guarantees that the height of the new items is the same as the height of
     * the items that are already rendered.
     *
     * Except if overridden, the distance is 75% of the height of the list
     *
     * @function
     * @param {integer} nbAdded Number of items added since last call
     **/
    updateLoadMoreDistance: function () {
      var listHeight = this.getListHeight() || 200;
      this.loadMoreDistance = 25 / 100 * listHeight;
      logger.log(this.logid, 'loadMoreDistance=' + this.loadMoreDistance);
    },

    /**
     * Returns the "load more" distance.
     */
    getLoadMoreDistance: function () {
      return this.loadMoreDistance;
    },

    /**
     * Adds a new item to the view.
     *
     * The function should never be called manually. It is called automatically
     * as new items get added to the underlying collection.
     *
     * The function ensures the new child may be added to the view and creates
     * the appropriate child view provided the view has already been rendered.
     *
     * @function
     * @private
     * @param {Model} model The item's model to add to the view
     **/
    addChild: function (model) {
      var offset = this.items.length;
      logger.log(this.logid, 'addChild',
        'offset=' + offset,
        'model=' + (model.get('name') || model.id || model.cid));
      var item = this.listItemFactory(model, offset);
      if(!this.maxLength || (this.maxLength && offset < this.maxLength)) {
        this.items.push(item);
        if (this.rendered) {
          this.newChildren.push(item);
          this.renderChildren();
        }
      }
    },


    /**
     * Renders children that have been added by addChild and that have not yet
     * been rendered.
     *
     * Note the use of _.debounce so that the renderChildren function is
     * called only once all children have been added via "addChild" in this
     * tick.
     *
     * The function triggers a "render:children" event when rendering is over
     * to let callers perform further actions as needed.
     *
     * @function
     * @private
     */
    renderChildren: _.debounce(function () {
      var itemContainer = this.getItemContainer();
      // TODO: lastOffset may be null if list had 0 children!
      var lastOffset = itemContainer.children().last().data('joshfire-child');
      var htmlToAdd = '';

      logger.log(this.logid, 'renderChildren',
        'items=' + this.newChildren.length);

      // TODO: in theory, "generate" may be async but this code assumes
      // that the function runs synchronously!
      _(this.newChildren).each(_.bind(function (item) {
        item.generate(_.bind(function (err, html) {
          htmlToAdd += html;
        }, this));
      }, this));
      itemContainer.append(htmlToAdd);

      this.setChildrenElements(lastOffset + 1);
      this.newChildren = [];
      this.childrenLeftToAdd = 0;

      // If we use iScroll, we need to wait for the refresh before
      // calling the callback
      if (this.hasScroller && this.iScroller) {
        this.iScroller.options.onRefresh = _.once(_.bind(function () {
          this.updateLoadMoreDistance();
          this.isLoadingMore = false;
          this.trigger('render:children');
        }, this));
        _.defer(_.bind(function () {
          this.iScroller.refresh();
        }, this));
      } else {
        this.updateLoadMoreDistance();
        this.isLoadingMore = false;
        this.trigger('render:children');
      }
    }),


    /**
     * Reacts to a change made to the collection bound to the view.
     *
     * Note this handler serves no purpose whatsoever on top of "update" now
     * that update has been re-written. It is merely kept for backward
     * compatibility purpose. Derived classes that want to override the default
     * behavior should rather override the "update" function.
     *
     * TODO: deprecate and remove this function.
     *
     * @function
     */
    colChangedHandler: function () {
      logger.log(this.logid, 'colChangedHandler');
      this.update();
    },


    /**
     * Updates the contents of the view when the model changes
     *
     * Default implementation re-renders the view whenever a change is detected,
     * unless the view has not yet been rendered.
     *
     * Classes that derive this class may want to override that function to
     * provide a smarter mechanism, in particular not to update the underlying
     * view if it does not need to be updated.
     *
     * @function
     */
    update: function () {
      logger.log(this.logid, 'update');

      // Mark the collection as changed so that children views get re-created
      this.collectionChanged = true;
      if (!this.rendered) return;
      this.render();
    },


    /**
     * Builds the list of children views associated with each model in the
     * collection bound to the list.
     *
     * Possible former children views are garbage collected.
     *
     * @function
     */
    createChildrenViews: function () {
      logger.log(this.logid, 'create children views');

      // Compute the size of the new list
      var size = this.maxLength ?
        Math.min(this.collection.length, this.maxLength) :
        this.collection.length;

      // Mark existing items as "ready to be garbage collected". Garbage
      // collection should take place after rendering of the new items to
      // avoid possible flickering effects if we collected them right away.
      _.each(this.items, function (item) {
        this.garbageCollect(item);
      }, this);

      this.collectionChanged = false;
      this.items = new Array(size);

      // Sets the view loaded counter. The list will trigger a "load" event
      // once all of its children views have triggered theirs.
      this.itemsLoaded = 0;
      var itemLoaded = function () {
        ++this.itemsLoaded;
        if ((this.itemsLoaded === size) && !this.wantsCustomLoadEvent) {
          // All children have been loaded
          this.trigger('load');
        }
      };

      // Create item elements
      this.collection.some(function (model, i) {
        if (i >= size) {
          // break
          return true;
        }

        this.items[i] = this.listItemFactory(model, i);

        // React to the "load" event of the child view,
        // triggering the "load" event of the container once
        // all children have been loaded.
        this.listenTo(this.items[i], 'load', _.bind(itemLoaded, this));
      }, this);
    },


    /**
     * Updates the DOM root element of all children views.
     *
     * @function
     * @param {integer} startForm Index of the child to start from,
     *   defaults to 0.
     */
    setChildrenElements: function (startFrom) {
      var container = this.getItemContainer();
      _.each(this.items, function (item, offset) {
        if (offset < startFrom) return;
        var tagName = item.tagName || '*';
        var el = container.find('> ' + tagName + '[data-joshfire-child=' + offset + ']')[0];
        //var el = closest_descendant(this.$el, '*[data-joshfire-child=' + offset + ']')[0];
        item.setElement(el, true);
        item.enhance();
      }, this);
    },


    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * Despite the presence of a callback function, note generation is
     * synchronous.
     *
     * The generate function is called as first step of the rendering process.
     *
     * @function
     * @param {function} cb Callback function
     */
    generate: function (cb) {
      cb = cb || function () {};
      var processed = 0;
      var template = this.template;
      var self = this;

      // (Re-)create children views if needed
      if (!this.items || this.collectionChanged) {
        this.createChildrenViews();
      }
      var items = this.items;

      // Render an empty view if there are no items to render
      if (!items || !items.length) {
        logger.log(this.logid, 'generate', 'empty list');
        var context = {
          children: '',
          collection: this.collection,
          T: i18n.getText
        };
        context = _.extend(context, this.data);
        var str = template(context);

        return cb(null, str);
      }

      var contents = new Array(items.length);

      // Get the HTML of all children
      logger.log(this.logid, 'generate', 'items=' + items.length);
      for (var i = 0; i < items.length; i++) {
        // Create a scope for the current item
        (function (item, num) {
          item.generate(function (err, content) {
            contents[num] = content;
            // If last item was processed, fire callback
            if (++processed === items.length) {
              var context = {
                children: contents.join(''),
                collection: self.collection,
                T: i18n.getText
              };
              context = _.extend(context, self.data);
              var str = template(context);
              cb(null, str);
            }
          });
        }).call(this, items[i], i);
      }
    },

    /**
     * Set view events handler as needed.
     *
     * The enhance function is called as last part of the rendering process.
     */
    enhance: function () {
      logger.log(this.logid, 'enhance');

      // The HTML of the view has changed, we need to update the root element
      // of each child view
      this.setChildrenElements();

      // Bind click event to specific "Joshfire" links
      this.$('.joshfire-link').off('click').on('click', function (e) {
        e.preventDefault();
        var location = $(e.currentTarget).attr('data-joshfire-link-url');
        window.location = location;
        return false;
      });

      // Garbage collect previous children views if needed
      this.garbageCollect();

      // Call base class for more logic
      UIElement.prototype.enhance.call(this);

      // Compute the "load more" distance (even if the feature is not enabled)
      this.updateLoadMoreDistance(this.items.length);

      // Trigger the "load" event if there are no children to render,
      // unless the creator of the view wants to handle the event on his own
      if ((this.items.length === 0) && !this.wantsCustomLoadEvent) {
        this.trigger('load');
      }
    },


    /**
     * Marks the given view up for garbage collection, or garbage collects all
     * views that got marked up this way.
     *
     * Note that garbage collection effectively occurs when the new
     * encapsulated view has been fully rendered to avoid any flickering
     * effect.
     *
     * @function
     * @param {View} view The view to flag for garbage collection.
     *  If no view is given, the function actually performs the collection.
     */
    garbageCollect: function (view) {
      this.garbage = this.garbage || [];
      if (view) {
        this.stopListening(view);
        view.stopListening();
        this.garbage.push(view);
      }
      else {
        _.each(this.garbage, function (view) {
          view.remove();
        });
        this.garbage = [];
      }
    },


    /**
     * Overrides base "remove" function to forget about the underlying
     * collection and to propagate the request to the view's children.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      logger.log(this.logid, 'remove');
      UIElement.prototype.remove.call(this);
      _.each(this.items, function (item) {
        item.remove();
      });
      this.collection = null;
      this.items = [];
      this.newChildren = [];
      this.itemFactory = null;
      this.listItemFactory = null;
      this.loadMore = null;
    },

    /**
     * Flags the view as "loading" when the underlying collection is being
     * fetched.
     *
     * Note the fetch may be the result of rendering the view, triggering a
     * "load more", or some other view fetching the collection elsewhere in
     * the application.
     */
    syncStartedHandler: function() {
      var loadingClass = null;
      if (this.isLoadingMore) {
        loadingClass = this.dataLoadingMoreClass;
      }
      else {
        loadingClass = this.dataLoadingClass;
      }
      logger.log(this.logid, 'fetch collection items',
        'isLoadingMore=' + !!this.isLoadingMore,
        'loadingClass=' + loadingClass);
      this.$el.addClass(loadingClass);
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    },


    /**
     * Success handler for a fetch operation on the collection.
     */
    syncSuccessHandler: function() {
      logger.log(this.logid, 'fetch collection items', 'done');
      if (!this.newChildren || (this.newChildren.length === 0)) {
        // All new children have been added to the DOM,
        // consider we're done with loading
        this.isLoadingMore = false;
      }
      if (this.dataLoadingMoreClass) {
        this.$el.removeClass(this.dataLoadingMoreClass);
      }
      if (this.dataLoadingClass) {
        this.$el.removeClass(this.dataLoadingClass);
      }
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    },


    /**
     * Error handler for a fetch operation on the collection
     */
    syncErrorHandler: function (res) {
      logger.error(this.logid, 'fetch collection items', 'error', res.err);
      this.isLoadingMore = false;
      if (this.dataLoadingMoreClass) {
        this.$el.removeClass(this.dataLoadingMoreClass);
      }
      if (this.dataLoadingClass) {
        this.$el.removeClass(this.dataLoadingClass);
      }
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    }
  });

  return UIList;
});

define('text!templates/toolbarItem.ejs',[],function () { return '<a class="<%= item.slug %>" href="#<%= item.slug %>"><%= item.name %></a>';});

define('js/views/Toolbar',[
  'joshlib!vendor/backbone',
  'joshlib!ui/List',

  'text!templates/toolbarItem.ejs'
], function (
  Backbone,
  List,

  tplToolbarItem
) {
  return List.extend({
    initialize: function (opt) {
      this.collection = new Backbone.Collection();
      opt.itemTemplate = tplToolbarItem;

      List.prototype.initialize.call(this, opt);
    },

    registerItem: function registerItem (item) {
      this.collection.push(item.toJSON());
      this.update(true);
    },

    setActiveItem: function setActiveItem (item) {
      this.$('.active').removeClass('active');
      this.$('.' + item.slug).addClass('active');
    }
  });
});
define('js/controllers/Controller',[
  'joshlib!vendor/backbone'
], function(
  Backbone
) {
  

  var Controller = function(app, opt) {
    this.app = app;

    // Calls the controller's "constructor".
    if (this.initialize) {
      this.initialize(opt);
    }
  };

  // We'll use the extend function of Backbone.Model to enable heritage on our controller
  Controller.extend = Backbone.Model.extend;
  return Controller;
});
/**
 * @fileoverview Base class for Joshfire schema.io datasource collections.
 *
 * This base class wraps a Joshfire Factory datasource in a Backbone
 * collection, ensuring that the "sync" method of the Backbone collection
 * calls the "find" method of the Factory datasource.
 *
 * The class maintains an "hasMore" flag, set when the collection "may" have
 * more items. The flag is set initially and reset when the collection receives
 * fewer items than the number of items requested (the "limit" parameter). This
 * flag could be used by callers e.g. to display/hide a "load more" icon.
 *
 * Note this flag is more a "likely valid" information than an assertion: there
 * may be no more items to fetch when the flag is set, and this mechanism cannot
 * account for collections that receive more items from time to time.
 *
 * The class also maintains a "fetched" flag, set when the collection has been
 * fetched at least one. Note that initializing the collection with a non empty
 * set of item counts as a fetch.
 *
 * The collection triggers a series of events when it is fetched, in order:
 * - "load:start" when fetch starts
 * - "load:first" when first fetch completes, provided it returned at least one
 * item.
 * - "load:more" when a subsequent fetch completes, provided at least one new
 * item got added to the list
 * - "load:last" when fetch completes with no new items or with fewer items
 * than the requested number.
 * - "load" when fetch completes, regardless of whether new items got added to
 * the collection.
 * - "load:error" when an error occurred.
 *
 * Said differently, given a call to "fetch", the collection triggers
 * "load:start". It then triggers one of "load:first" or "load:more" if new
 * items got added to the collection, followed by a "load:last" if no items got
 * added or if fewer items than requested got added. The "load" event completes
 * the series. If an error occurs, the chain of events gets interrupted and a
 * "load:error" event is triggered.
 *
 * The "syncstarted", "syncerror" and "syncsuccess" events are deprecated.
 * They are synonymous to "load:start", "load:error", and "load" for when
 * the collection is fetched. New "update" events should be created when the
 * collection gets updated to support "save" operations.
 */

define('joshfire-framework/collection',[
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore'
], function (Backbone, _) {

  /**
   * Base wrapper around a Backbone collection that handles Joshfire schema.io
   * datasource collections.
   */
  var newCol = Backbone.Collection.extend({
    /**
     * Has the collection ever been fetched?
     */
    fetched: false,

    /**
     * Is it likely that there are more items to fetch?
     */
    hasMore: true,

    /**
     * Number of items to skip to fetch more items.
     *
     * This parameter is managed automatically based on the number of items
     * in the list.
     */
    skip: 0,

    /**
     * Number of items to request per "fetch more".
     *
     * This parameter is initialized to the number of items returned by the
     * first call to "fetch".
     */
    limit: 20,

    /**
     * Initializes the collection.
     *
     * Note that the collection is not built from a list of models but rather
     * from a datasource, given as parameter in the "options" hash.
     *
     * @function
     * @param {Object} models Defined to ensure compatibility with BackBone,
     *   but unused in practice.
     * @param {Object} options Options hash. The function sets the underlying
     *   datasource if it finds a "dataSource" property, and sets base query
     *   options if it finds a "dataSourceQuery" property.
     */
    initialize: function (models, options) {
      this.ds = null;
      this.dsq = {};
      this.hasMore = true;

      options = options || {};
      if (options.dataSource) {
        this.setDataSource(options.dataSource);
      }
      if (options.dataSourceQuery) {
        this.setDataSourceQuery(options.dataSourceQuery);
      }

      // Set the "fetched" flag the first time something gets added to
      // the collection.
      this.listenTo(this, 'add', function () {
        this.fetched = true;
      });
      this.listenTo(this, 'reset', function () {
        this.fetched = true;
      });
    },

    /**
     * Fetches more items from the source provider.
     *
     * The function requests the same number of items as was originally
     * received. For instance, if the first "fetch" request returned 20 items,
     * this function requests 20 additional items from the source provider.
     * This guarantees a consistent page size. Default page size is 20.
     *
     * The function runs asynchronously. The caller should listen to the "load"
     * events triggered by the collection to detect when fetch is over.
     *
     * @function
     */
    fetchMore: function () {
      this.fetch({
        dataSourceQuery: {
          skip: this.skip,
          limit: this.limit
        },
        update: true,
        add: true,
        remove: false
      });
    },


    /**
     * Sets the datasource that the collection wraps.
     *
     * @function
     * @param {Object} ds Factory datasource object, as returned by
     *   a call to Joshfire.factory.getDataSource in the Joshfire Factory.
     */
    setDataSource: function (ds) {
      this.ds = ds;
    },

    /**
     * Sets base datasource query options.
     *
     * @function
     * @param {Object} dsq Datsource query options. These options
     *   may be extended with additional options in calls to "sync"
     */
    setDataSourceQuery: function (dsq) {
      this.dsq = dsq;
    },

    /**
     * Fetches the underlying datasource.
     *
     * Fetch is asynchronous. The function calls "options.success"
     * or "options.error" when it's done.
     *
     * @function
     * @param {String} method The CRUD method ("create", "read", "update",
     *   or "delete"). Only "read" is supported for the time being.
     * @param {Object} model The model to be saved (or the collection to
     *   be read). Unused in practice.
     * @param {Object} options Success and error callbacks, and all other
     *   request options
     */
    sync: function (method, model, options) {
      options = options || {};
      var success = options.success || function () {};
      var error = options.error || function () {};
      var first = (this.length === 0);

      // Sanity checks to avoid running into troubles
      if (!this.ds) {
        this.trigger('load:error', {
          err: 'init failed, ds is null'
        });
        this.trigger('syncerror', {
          method: method,
          err: 'init failed, ds is null'
        });
        return error('init failed, ds is null');
      }

      // Prepare query options
      var queryOptions = {};
      if (this.dsq) {
        queryOptions = _.extend(queryOptions, this.dsq);
      }
      if (options.dataSourceQuery) {
        queryOptions = _.extend(queryOptions, options.dataSourceQuery);
      }

      // Collection is read-only (meaning it can just receive items from
      // the origin server, but cannot be modified and saved back to the
      // server afterwards), discard other types of updates.
      // Note this may be amended in the future
      if (method !== 'read') {
        this.trigger('load:error', {
          err: 'collection is read-only'
        });
        this.trigger('syncerror', {
          method: method,
          err: 'collection is read-only'
        });
        return error('Collection is read-only');
      }

      // Synchronization has started, trigger the appropriate event
      this.trigger('load:start');
      this.trigger('syncstarted', {
        method: method
      });

      this.ds.find(queryOptions, _.bind(function (err, data) {
        if (err) {
          this.trigger('load:error', {
            err: err
          });
          this.trigger('syncerror', {
            method: method,
            err: err
          });
          return error(err);
        }

        var entries = [];
        if (this.ds.children) {
          // Datasource is a multiple datasource,
          // concatenate individual lists of items.
          entries = data.entries.map(function (entry) {
            return entry.entries;
          });
        } else {
          // Datasource is an atomic datasource
          entries = data.entries || [];
        }

        // Run the success callback that sets the items in the collection
        success(entries);

        // Update the "skip", "limit" and "hasMore" flags
        if (entries.length > 0) {
          this.skip += entries.length;
          if (this.limit === 0) {
            this.limit = entries.length;
          }
        }
        if ((entries.length === 0) || (entries.length < this.limit)) {
          // We received fewer items than the number of items that were
          // initially requested. The collection is most likely full.
          this.hasMore = false;
        }

        if (entries.length > 0) {
          if (first) {
            this.trigger('load:first');
          }
          else {
            this.trigger('load:more');
          }
        }
        if (!this.hasMore) {
          this.trigger('load:last');
        }
        this.trigger('load');
        this.trigger('syncsuccess', {
          method: method
        });
      }, this));
    }

  });

  return newCol;

});
define('joshfire-framework/adapters/phone/collection',["joshlib!adapters/none/collection"],function(Collection) {
	
	Collection.adapted=true;
	return Collection;

});
define('text!templates/spinner.ejs',[],function () { return '<div class="loader">\n  <div class="dot dot1"></div>\n  <div class="dot dot2"></div>\n  <div class="dot dot3"></div>\n  <div class="dot dot4"></div>\n</div>';});

/**
 * @fileOverview Describes a possibly dynamic list.
 *
 * A list is bound to a collection. Each item in the collection gets wrapped
 * in a ListItem view before it is rendered. From a DOM perspective, this
 * creates a structure that is similar to "ul/li/[content]" although you may
 * choose to follow a more complex structure if needed.
 *
 * Items may be added to the collection using the "addChild" method.
 * The view adjusts accordingly.
 *
 * The list also implements a "load more" features that tries to load more items
 * from the collection in the background while the user scrolls the list. The
 * "load more" action gets triggered when the user has scrolled more than about
 * 75% of the list. The functionality only really works for "joshlib!collection"
 * datasource collections as the view needs to know how to request pages 2, 3...
 * of the collection.
 *
 * Options that change the behavior of the list need to be set when the list is
 * created:
 *
 * - templateEl: the DOM element or CSS selector to use to initialize the HTML
 * template for the list. The "templateEl" option is used to set the value of
 * the "template" option so both options should not be used at once.
 *
 * - template: the HTML template of the view. Value can be a string or a
 * template function. The value is first computed based on the "templateEl"
 * option. If that option is not set, the value provided is used if set. The
 * view creates a "<ul>" list otherwise.
 *
 * - collection: the Backbone collection that contains or will contain the
 * actual list of models to display within the collection.
 *
 * - itemOptions.templateEl: same as "templateEl" for an item in the list.
 * - itemOptions.template: same as "template" for an item in the list.
 * - itemOptions.*: all other options will be passed to the constructor of the
 * view created to display an item in the list.
 * - itemOptions.factory or itemFactory: the class constructor to use to create
 * the view that displays an item in the list. The function receives the
 * Backbone model to display as first parameter and the position offset as
 * second parameter. It must return a View.
 *
 * - maxLength: maximum number of items that the list may render. If the list
 * contains more items, they are ignored.
 *
 * - autoLoadMore: enables the "load more" mechanism when set.
 * - loadMore: function to use to fetch more items in the list. The function
 * receives the underlying Backbone collection as first parameter and a callback
 * function as second parameter. The callback function must be called once the
 * fetch is over.
 * - dataLoadingMoreClass: the class to use to flag the view when the load more
 * is in progress. If not given, the dataLoadingClass name is used. If value is
 * "false", the view is never flagged as loading more items.
 *
 * - customLoadEvent: when not set, the view triggers the "load" event on its
 * own once all of its children have triggered the "load" event. The view does
 * not trigger the "load" event otherwise.
 *
 * - dataLoadingClass: the name of the class used to flag the view as loading.
 * Defaults to "loading". If value is "false", the view is never flagged as
 * loading.
 *
 * Options from the Element and View base classes complete the list of options
 * available. See the description of these classes for details. Options include
 * "scroller", "scrollerSelector", "onScroll", "loadImagesSmoothly",
 * "imageClass", "getImages", "loadingClass", "processImageEl", "data".
 *
 * TODO:
 * - the list does not manage the suppression of models from the underlying
 * collection.
 * - as in most other views, data errors are not really handled
 */

define('joshfire-framework/ui/list',[
  'joshlib!uielement',
  'joshlib!ui/listitem',
  'joshlib!ui/item',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!utils/i18n',
  'joshlib!utils/woodman',
  'joshlib!utils/closest_descendant'
], function(
  UIElement,
  UIListItem,
  UIItem,
  $,
  _,
  i18n,
  woodman,
  closest_descendant
) {
  var logger = woodman.getLogger('joshfire.framework.ui.list');

  /**
   * Defines a list as a view bound to a Backbone collection of models.
   *
   * The list is dynamically updated as new items get added to the collection.
   * See the above description for more details about available options.
   */
  var UIList = UIElement.extend({
    /**
     * Height of the list that is currently rendered
     */
    listHeight: 0,


    /**
     * Initializes all list options at instantiation phase.
     */
    initialize: function (options) {
      options = options || {};

      // Initialize the instance ID for logging purpose as needed
      this.initializeLogId(options);
      logger.log(this.logid, 'initialize');

      // Initialize the HTML template of the view
      if (options.templateEl) {
        this.template = this.compileTemplate($(options.templateEl).text());
      }
      else if (options.template) {
        if (_.isFunction(options.template)) {
          this.template = options.template;
        }
        else {
          this.template = this.compileTemplate(options.template);
        }
      } else {
        this.template = this.compileTemplate('<ul><%= children %></ul>');
      }

      this.itemOptions = options.itemOptions || {scroller: false};
      this.listItemOptions = options.listItemOptions || {};
      this.itemTemplateEl = options.itemTemplateEl;
      this.itemOptions.templateEl = this.itemOptions.templateEl || this.itemTemplateEl;
      this.itemOptions.template = this.itemOptions.template || options.itemTemplate;
      this.maxLength = options.maxLength || null;
      this.data = options.data || {};
      this.items = [];

      // Default item factory
      this.itemFactory = options.itemFactory ||
        function (model, offset) {
          var params = {
            model: model,
            offset: offset
          };
          _.extend(params, this.itemOptions);
          return new UIItem(params);
        };
      this.itemFactory = _.bind(this.itemFactory, this);

      // TODO: deprecate this. The "list item" level is useless provided we
      // have a generic "wrapper" class that can be used to wrap items.
      this.listItemFactory = options.listItemFactory ||
        function (model, offset) {
          var params = {
            model: model,
            offset: offset,
            view: this.itemFactory(model, offset)
          };

          _.extend(params, this.listItemOptions);

          return new UIListItem(params);
        };

      this.listItemFactory = _.bind(this.listItemFactory, this);

      // The loadMore function fetches more items from the collection.
      // Note the collection should trigger "load:start", "load" and
      // "load:error" events for the autoLoadMore feature to work properly
      this.autoLoadMore = options.autoLoadMore;
      this.loadMore = function () {
        if (this.isLoadingMore) {
          logger.log(this.logid, 'already loading more items');
          return;
        }

        if (!this.collection || !this.collection.hasMore) {
          logger.log(this.logid, 'no more items to fetch');
          return;
        }

        logger.log(this.logid, 'loadMore');
        this.isLoadingMore = true;

        if (options.loadMore) {
          options.loadMore(this.collection);
        }
        else if (_.isFunction(this.collection.fetchMore)) {
          this.collection.fetchMore();
        }
        else {
          // No way to load more items in this collection
          logger.warn(this.logid, 'loadMore',
            'no fetchMore function available');
          this.collection.hasMore = false;
          this.isLoadingMore = false;
        }
      };

      if (this.autoLoadMore) {
        options.onScroll = options.onScroll ||
          _.bind(function (e, scrollHeight, scrollTop) {
            // If we currently are doing a load more, do nothing
            if (this.isLoadingMore) return;
            if (!this.collection.hasMore) return;
            if ((scrollHeight - this.getLoadMoreDistance()) <=
                (scrollTop + this.$el.innerHeight())) {
              logger.log(this.logid, 'loadMore', 'triggering',
                'distance=' + (scrollHeight - this.getLoadMoreDistance()),
                'height=' + (scrollTop + this.$el.innerHeight()));
              this.loadMore();
            }
          }, this);
      } else {
        options.onScroll = options.onScroll || false;
      }

      // As explained below, we need this.customLoadEvent
      // to be always true in this case. However, we
      // do need to know
      if (options.customLoadEvent) {
        this.wantsCustomLoadEvent = true;
      }

      // The list must wait for all of its children to be "loaded"
      // before it may trigger the "load" event.
      this.customLoadEvent = true;

      // Data loading class that gets added to the view's element
      // while data synchro is on. "loading" is used if not overridden
      // Set the option to false or null (and not undefined) to cancel
      // the addition of the class.
      this.dataLoadingClass = 'loading';
      if (typeof options.dataLoadingClass !== 'undefined') {
        this.dataLoadingClass = options.dataLoadingClass;
      }
      if (options.dataLoadingClass === false) {
        this.dataLoadingClass = '';
      }

      if (typeof options.dataLoadingMoreClass !== 'undefined') {
        this.dataLoadingMoreClass = options.dataLoadingMoreClass;
      }
      else {
        this.dataLoadingMoreClass = this.dataLoadingClass;
      }
      if (options.dataLoadingMoreClass === false) {
        this.dataLoadingMoreClass = '';
      }

      // Propagate "shown", "hidden" events to the view's children
      this.listenTo(this, 'shown', function () {
        _.each(this.items, function (child) {
          child.trigger('shown');
        });
      });
      this.listenTo(this, 'hidden', function () {
        _.each(this.items, function (child) {
          child.trigger('hidden');
        });
      });

      UIElement.prototype.initialize.call(this, options);

      if (options.collection) {
        this.setCollection(options.collection);
      }
    },


    /**
     * Returns the DOM element that serves as container for the list of items
     * within the view.
     *
     * The item container is defined as, in order:
     * - the element that has a "data-container" attribute
     * - the first "ul" element
     * - the first "ol" element
     * - the view's root element otherwise
     *
     * @function
     * @return {Element} The item container
     */
    getItemContainer: function () {
      var itemContainerSelector = '*[data-container], ul, ol';
      var container = closest_descendant(this.$el, itemContainerSelector);

      if (container.length === 0) {
        container = this.$el.first();
      }
      return container;
    },


    /**
     * Sets the collection associated with the view
     *
     * Once bound to a collection, the view will be automatically updated
     * whenever the collection changes. By default, the update takes the form
     * of a re-rendering of the view but derived classes may override the
     * "update" function to implement less DOM intensive update mechanisms.
     *
     * This function only sets the given collection. In particular, if the view
     * is already rendered, this function does not trigger an update. Set the
     * second parameter to force the update.
     *
     * TODO: Consider changing the default behavior. if the view is already
     * rendered and the view receives a new collection, it should be
     * automatically updated. Note that update would likely affect running
     * code that uses the framework, so beware.
     *
     * @function
     * @param {Collection} collection Backbone collection to bind to the view
     * @param {Boolean} update Update the view when set. When not, the view
     *  will just wait for new events on the model to update itself.
     */
    setCollection: function (collection, update) {
      if (this.collection) {
        this.stopListening(this.collection);
      }

      this.collection = collection;
      this.collectionChanged = true;
      this.newChildren = [];

      if (this.collection) {
        logger.log(this.logid, 'set collection');
        this.listenTo(this.collection, 'add',
          this.callIfNotRemoved(this.addChild));
        this.listenTo(this.collection, 'remove',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'reset',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'sort',
          this.callIfNotRemoved(this.colChangedHandler));
        this.listenTo(this.collection, 'load:start',
          this.callIfNotRemoved(this.syncStartedHandler));
        this.listenTo(this.collection, 'load',
          this.callIfNotRemoved(this.syncSuccessHandler));
        this.listenTo(this.collection, 'load:error',
          this.callIfNotRemoved(this.syncErrorHandler));
      }

      if (update) {
        this.update();
      }
    },


    /**
     * Return the real height of the list, not the one of the container.
     */
    getListHeight: function() {
      return this.$el.find('.first').outerHeight();
    },


    /**
     * The load more distance is the distance from the bottom of the list which,
     * when reached through scrolling, triggers a "load more".
     *
     * The distance needs to be computed after each "load more" as there are no
     * guarantees that the height of the new items is the same as the height of
     * the items that are already rendered.
     *
     * Except if overridden, the distance is 75% of the height of the list
     *
     * @function
     * @param {integer} nbAdded Number of items added since last call
     **/
    updateLoadMoreDistance: function () {
      var listHeight = this.getListHeight() || 200;
      this.loadMoreDistance = 25 / 100 * listHeight;
      logger.log(this.logid, 'loadMoreDistance=' + this.loadMoreDistance);
    },

    /**
     * Returns the "load more" distance.
     */
    getLoadMoreDistance: function () {
      return this.loadMoreDistance;
    },

    /**
     * Adds a new item to the view.
     *
     * The function should never be called manually. It is called automatically
     * as new items get added to the underlying collection.
     *
     * The function ensures the new child may be added to the view and creates
     * the appropriate child view provided the view has already been rendered.
     *
     * @function
     * @private
     * @param {Model} model The item's model to add to the view
     **/
    addChild: function (model) {
      var offset = this.items.length;
      logger.log(this.logid, 'addChild',
        'offset=' + offset,
        'model=' + (model.get('name') || model.id || model.cid));
      var item = this.listItemFactory(model, offset);
      if(!this.maxLength || (this.maxLength && offset < this.maxLength)) {
        this.items.push(item);
        if (this.rendered) {
          this.newChildren.push(item);
          this.renderChildren();
        }
      }
    },


    /**
     * Renders children that have been added by addChild and that have not yet
     * been rendered.
     *
     * Note the use of _.debounce so that the renderChildren function is
     * called only once all children have been added via "addChild" in this
     * tick.
     *
     * The function triggers a "render:children" event when rendering is over
     * to let callers perform further actions as needed.
     *
     * @function
     * @private
     */
    renderChildren: _.debounce(function () {
      var itemContainer = this.getItemContainer();
      // TODO: lastOffset may be null if list had 0 children!
      var lastOffset = itemContainer.children().last().data('joshfire-child');
      var htmlToAdd = '';

      logger.log(this.logid, 'renderChildren',
        'items=' + this.newChildren.length);

      // TODO: in theory, "generate" may be async but this code assumes
      // that the function runs synchronously!
      _(this.newChildren).each(_.bind(function (item) {
        item.generate(_.bind(function (err, html) {
          htmlToAdd += html;
        }, this));
      }, this));
      itemContainer.append(htmlToAdd);

      this.setChildrenElements(lastOffset + 1);
      this.newChildren = [];
      this.childrenLeftToAdd = 0;

      // If we use iScroll, we need to wait for the refresh before
      // calling the callback
      if (this.hasScroller && this.iScroller) {
        this.iScroller.options.onRefresh = _.once(_.bind(function () {
          this.updateLoadMoreDistance();
          this.isLoadingMore = false;
          this.trigger('render:children');
        }, this));
        _.defer(_.bind(function () {
          this.iScroller.refresh();
        }, this));
      } else {
        this.updateLoadMoreDistance();
        this.isLoadingMore = false;
        this.trigger('render:children');
      }
    }),


    /**
     * Reacts to a change made to the collection bound to the view.
     *
     * Note this handler serves no purpose whatsoever on top of "update" now
     * that update has been re-written. It is merely kept for backward
     * compatibility purpose. Derived classes that want to override the default
     * behavior should rather override the "update" function.
     *
     * TODO: deprecate and remove this function.
     *
     * @function
     */
    colChangedHandler: function () {
      logger.log(this.logid, 'colChangedHandler');
      this.update();
    },


    /**
     * Updates the contents of the view when the model changes
     *
     * Default implementation re-renders the view whenever a change is detected,
     * unless the view has not yet been rendered.
     *
     * Classes that derive this class may want to override that function to
     * provide a smarter mechanism, in particular not to update the underlying
     * view if it does not need to be updated.
     *
     * @function
     */
    update: function () {
      logger.log(this.logid, 'update');

      // Mark the collection as changed so that children views get re-created
      this.collectionChanged = true;
      if (!this.rendered) return;
      this.render();
    },


    /**
     * Builds the list of children views associated with each model in the
     * collection bound to the list.
     *
     * Possible former children views are garbage collected.
     *
     * @function
     */
    createChildrenViews: function () {
      logger.log(this.logid, 'create children views');

      // Compute the size of the new list
      var size = this.maxLength ?
        Math.min(this.collection.length, this.maxLength) :
        this.collection.length;

      // Mark existing items as "ready to be garbage collected". Garbage
      // collection should take place after rendering of the new items to
      // avoid possible flickering effects if we collected them right away.
      _.each(this.items, function (item) {
        this.garbageCollect(item);
      }, this);

      this.collectionChanged = false;
      this.items = new Array(size);

      // Sets the view loaded counter. The list will trigger a "load" event
      // once all of its children views have triggered theirs.
      this.itemsLoaded = 0;
      var itemLoaded = function () {
        ++this.itemsLoaded;
        if ((this.itemsLoaded === size) && !this.wantsCustomLoadEvent) {
          // All children have been loaded
          this.trigger('load');
        }
      };

      // Create item elements
      this.collection.some(function (model, i) {
        if (i >= size) {
          // break
          return true;
        }

        this.items[i] = this.listItemFactory(model, i);

        // React to the "load" event of the child view,
        // triggering the "load" event of the container once
        // all children have been loaded.
        this.listenTo(this.items[i], 'load', _.bind(itemLoaded, this));
      }, this);
    },


    /**
     * Updates the DOM root element of all children views.
     *
     * @function
     * @param {integer} startForm Index of the child to start from,
     *   defaults to 0.
     */
    setChildrenElements: function (startFrom) {
      var container = this.getItemContainer();
      _.each(this.items, function (item, offset) {
        if (offset < startFrom) return;
        var tagName = item.tagName || '*';
        var el = container.find('> ' + tagName + '[data-joshfire-child=' + offset + ']')[0];
        //var el = closest_descendant(this.$el, '*[data-joshfire-child=' + offset + ']')[0];
        item.setElement(el, true);
        item.enhance();
      }, this);
    },


    /**
     * Generates the view's HTML content for the underlying model.
     *
     * The HTML content generated is the inner HTML of the view, i.e. it
     * does not include the wrapping element of the view (this.el).
     *
     * Despite the presence of a callback function, note generation is
     * synchronous.
     *
     * The generate function is called as first step of the rendering process.
     *
     * @function
     * @param {function} cb Callback function
     */
    generate: function (cb) {
      cb = cb || function () {};
      var processed = 0;
      var template = this.template;
      var self = this;

      // (Re-)create children views if needed
      if (!this.items || this.collectionChanged) {
        this.createChildrenViews();
      }
      var items = this.items;

      // Render an empty view if there are no items to render
      if (!items || !items.length) {
        logger.log(this.logid, 'generate', 'empty list');
        var context = {
          children: '',
          collection: this.collection,
          T: i18n.getText
        };
        context = _.extend(context, this.data);
        var str = template(context);

        return cb(null, str);
      }

      var contents = new Array(items.length);

      // Get the HTML of all children
      logger.log(this.logid, 'generate', 'items=' + items.length);
      for (var i = 0; i < items.length; i++) {
        // Create a scope for the current item
        (function (item, num) {
          item.generate(function (err, content) {
            contents[num] = content;
            // If last item was processed, fire callback
            if (++processed === items.length) {
              var context = {
                children: contents.join(''),
                collection: self.collection,
                T: i18n.getText
              };
              context = _.extend(context, self.data);
              var str = template(context);
              cb(null, str);
            }
          });
        }).call(this, items[i], i);
      }
    },

    /**
     * Set view events handler as needed.
     *
     * The enhance function is called as last part of the rendering process.
     */
    enhance: function () {
      logger.log(this.logid, 'enhance');

      // The HTML of the view has changed, we need to update the root element
      // of each child view
      this.setChildrenElements();

      // Bind click event to specific "Joshfire" links
      this.$('.joshfire-link').off('click').on('click', function (e) {
        e.preventDefault();
        var location = $(e.currentTarget).attr('data-joshfire-link-url');
        window.location = location;
        return false;
      });

      // Garbage collect previous children views if needed
      this.garbageCollect();

      // Call base class for more logic
      UIElement.prototype.enhance.call(this);

      // Compute the "load more" distance (even if the feature is not enabled)
      this.updateLoadMoreDistance(this.items.length);

      // Trigger the "load" event if there are no children to render,
      // unless the creator of the view wants to handle the event on his own
      if ((this.items.length === 0) && !this.wantsCustomLoadEvent) {
        this.trigger('load');
      }
    },


    /**
     * Marks the given view up for garbage collection, or garbage collects all
     * views that got marked up this way.
     *
     * Note that garbage collection effectively occurs when the new
     * encapsulated view has been fully rendered to avoid any flickering
     * effect.
     *
     * @function
     * @param {View} view The view to flag for garbage collection.
     *  If no view is given, the function actually performs the collection.
     */
    garbageCollect: function (view) {
      this.garbage = this.garbage || [];
      if (view) {
        this.stopListening(view);
        view.stopListening();
        this.garbage.push(view);
      }
      else {
        _.each(this.garbage, function (view) {
          view.remove();
        });
        this.garbage = [];
      }
    },


    /**
     * Overrides base "remove" function to forget about the underlying
     * collection and to propagate the request to the view's children.
     *
     * Note that the view is not operational anymore after a call to "remove".
     *
     * @function
     */
    remove: function () {
      logger.log(this.logid, 'remove');
      UIElement.prototype.remove.call(this);
      _.each(this.items, function (item) {
        item.remove();
      });
      this.collection = null;
      this.items = [];
      this.newChildren = [];
      this.itemFactory = null;
      this.listItemFactory = null;
      this.loadMore = null;
    },

    /**
     * Flags the view as "loading" when the underlying collection is being
     * fetched.
     *
     * Note the fetch may be the result of rendering the view, triggering a
     * "load more", or some other view fetching the collection elsewhere in
     * the application.
     */
    syncStartedHandler: function() {
      var loadingClass = null;
      if (this.isLoadingMore) {
        loadingClass = this.dataLoadingMoreClass;
      }
      else {
        loadingClass = this.dataLoadingClass;
      }
      logger.log(this.logid, 'fetch collection items',
        'isLoadingMore=' + !!this.isLoadingMore,
        'loadingClass=' + loadingClass);
      this.$el.addClass(loadingClass);
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    },


    /**
     * Success handler for a fetch operation on the collection.
     */
    syncSuccessHandler: function() {
      logger.log(this.logid, 'fetch collection items', 'done');
      if (!this.newChildren || (this.newChildren.length === 0)) {
        // All new children have been added to the DOM,
        // consider we're done with loading
        this.isLoadingMore = false;
      }
      if (this.dataLoadingMoreClass) {
        this.$el.removeClass(this.dataLoadingMoreClass);
      }
      if (this.dataLoadingClass) {
        this.$el.removeClass(this.dataLoadingClass);
      }
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    },


    /**
     * Error handler for a fetch operation on the collection
     */
    syncErrorHandler: function (res) {
      logger.error(this.logid, 'fetch collection items', 'error', res.err);
      this.isLoadingMore = false;
      if (this.dataLoadingMoreClass) {
        this.$el.removeClass(this.dataLoadingMoreClass);
      }
      if (this.dataLoadingClass) {
        this.$el.removeClass(this.dataLoadingClass);
      }
      if (this.hasScroller && this.iScroller) {
        _.defer(_.bind(this.iScroller.refresh, this.iScroller));
      }
    }
  });

  return UIList;
});

define('js/views/List',[
  'joshlib!ui/list',
  'text!templates/spinner.ejs' // The HTML of the spinner
], function(
  List,
  tplSpinner
) {
  return List.extend({
    initialize: function(opt) {
      this.onScroll = _.bind(this.onScroll, this);
      List.prototype.initialize.call(this, opt);

      // Remove the loader when the data has loaded
      this.collection.on('load', _.bind(this.hideLoader, this));
      // When we're at the end of the list, stop listening for the scroll
      this.collection.once('load:last', _.bind(function() {
        this.el.removeEventListener('scroll');
      }, this));
      /*
      Once we've received the loadmore data, re-enable loadmore.
      This is to avoid multiple calls to fetchMore between the time we fire
      the query and the time we receive the data.
      */
      this.collection.on('load:more', _.bind(function() {
        this.enableLoadMore = true;
      }, this));
      this.enableLoadMore = true;
    },

    /**
    * Bound automatically by the framework in List.js
    **/
    onScroll: function(e) {
      var itemHeight = this.getItemHeight();
      var itemIndex = Math.floor((this.el.scrollTop + this.$el.height()) / itemHeight);

      if(this.enableLoadMore && this.collection.length - itemIndex < 4) {
        this.collection.fetchMore();
        this.currentPage ++;
        this.enableLoadMore = false;
      }
    },

    /**
    * Small helper function, nothing to see here
    **/
    getItemHeight: function() {
      return this.$('li').height();
    },

    /**
    * Custom showloader and hideloader functions
    * to integrate our awesome CSS spinner
    **/
    showLoader: function() {
      this.loaderWrapper = document.createElement('div');
      this.loaderWrapper.className = 'loader-wrapper';
      this.loaderWrapper.innerHTML = tplSpinner;
      this.el.appendChild(this.loaderWrapper);
    },
    hideLoader: function() {
      if(this.loaderWrapper) {
        this.el.removeChild(this.loaderWrapper);
        this.loaderWrapper.innerHTML = '';
        this.loaderWrapper = null;
      }
    }
  });
});
define('js/views/List.phone',[
  'js/views/List'
], function(
  List
) {
  return List.extend({
    initialize: function(opt) {
      List.prototype.initialize.call(this, opt);
      console.log('phone specific list');
    }
  });
});
/**
 * DatasourceController
 *
 * Directly inherits from the base controller which doesn't do much.
 * In this app, there is one instance of DatasourceController per datasource. The controller
 * creates and retains its collection (which is based on the datasource) and its views.
 * It has to generate the correct list and details view (or any other subsequent view)
 * depending on the datasource and possibly the outputtype of the datasource (which is not
 * the case now but could easily be).
 *
 * The router directly binds onNavigate and onNavigateDetails on their corresponding routes
 *   - user accesses the list view of the DS -> call to onNavigate
 *   - user accesses the detail of an item of the DS -> call to onNavigateDetails
 */
define('js/controllers/DatasourceController',[
  'joshlib!vendor/underscore',
  'joshlib!utils/woodman',
  'joshlib!collection',
  'joshlib!ui/Item',

  'devicedetect!List', // a call using the devicedetect plugin ! :)
  'js/controllers/Controller'
], function(
  _,
  woodman,
  Collection,
  Item,
  List,
  Controller
) {
  

  var logger = woodman.getLogger('DSController');

  return Controller.extend({

    initialize: function(opt) {
      this.datasource = opt.datasource;
      this.collection = new Collection([], { dataSource: this.datasource, dataSourceQuery: {} });
      this.name = opt.name || '';
      this.slug = opt.slug || '';
      this.index = opt.index;

      // Bind them to stay in context
      this.onNavigate = _.bind(this.onNavigate, this);
      this.onNavigateDetails = _.bind(this.onNavigateDetails, this);
    },

    /**
     * Called by the Router when the route corresponding to this DS is called
     */
    onNavigate: function () {
      logger.log('Watching a DS : ' + this.slug);
      this.app.views.toolbar.setActiveItem(this);
      this.app.showItem(this);
    },

    /**
     * Called by the Router when the route corresponding to an item in this DS is called
     */
    onNavigateDetails: function (index) {
      logger.log('Watching the details of a DS : ' + this.slug + ' — Item n°' + index);
      this.app.views.toolbar.setActiveItem(this);

      this.details.setModel(this.collection.at(index));
      this.details.update(true);

      this.app.showItemDetails(this, index);
    },

    /**
     * Should return the "summary" view of the DS (usually a list or grid). Called by the main controller (app)
     * to populate the main cardpanel.
     */
    getView: function getView () {
      if(!this.view) {
        this.view = new List({
          id: this.slug,
          className: 'list',
          customLoadEvent: true,
          itemOptions: {
            data: {
              slug: this.slug
            }
          },
          loadingClass: 'loading',
          collection: this.collection,
          itemTemplate: '<a href="#<%= slug  %>/<%= offset %>"><%= item.name %></a>'
        });
      }

      if(!this.collection.fetched) {
        this.collection.fetch();
      }

      return this.view;
    },

    /**
     * Should return the "details" view of the DS (usually a list or grid). Called by the main controller (app)
     * to populate the main cardpanel.
     */
    getDetailsView: function getDetailsView () {
      if(!this.details) {
        this.details = new Item({
          id: this.slug + '-details',
          className: 'details',
          template: '<h2><%= item.name %></h2><br /><p><%= item.articleBody ? item.articleBody : item.description %></p>'
        });
      }

      return this.details;
    },

    toJSON: function() {
      return {
        name: this.name,
        slug: this.slug,
        index: this.index
      };
    }
  });

});
/**
 * app — Main App Controller
 * This is the "brain" of the app ; not to be confused with the main.js which is a launcher.
 * It creates the main "static" views of the app :
  Layout
    L Toolbar
    L CardPanel
      L  n * datasource list view
      L  n * datasource details view

 * ... And then populates the main CardPanel with the DS views.
 *
 */
define('js/app',[
  // Libs
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/ismobile',
  'joshlib!utils/woodman',
  'joshlib!ui/Layout',
  'joshlib!ui/CardPanel',
  'joshlib!ui/Item',

  'devicedetect!Toolbar',
  'js/controllers/DatasourceController'
], function(
  Backbone,
  _,
  $,
  isMobile,
  woodman,
  Layout,
  CardPanel,
  Item,

  Toolbar,
  DatasourceController
) {
  

  /* Init woodman logger */
  var logger = woodman.getLogger('app');
  woodman.load({
    loggers: [
      {
        level: 'all',
        appenders: [
          {
            type: 'console',
            name: 'console',
            layout: {
              type: 'pattern',
              pattern: '%d{yyyy-MM-dd HH:mm:ss} [%c] %p - %m%n'
            }
          }
        ]
      }
    ]
  }, function(err) {
    if (err) {
      //TODO handle woodman init err
      throw err;
    }
  });

  // Finally initialize the app
  var App = function(options) {
    this.initialize(options);
  };
  App.extend = Backbone.View.extend;

  App = App.extend({
    views: {},
    controllers: [],

    initialize: function(options) {
      logger.log('App init: Started');

      this.initControllers();
      logger.log('App init: Created controllers');

      this.initViews();
      logger.log('App init: Created views');

      /* This is the actual starting point of the app. The initRouter method
      launches historystart which reads the current hash and executes the associated route.
      While it is still inactive, we're free to set an initial route ourselves or to log in or whatever. */
      this.initRouter(options);
    },

    /**
     * Init controllers
     * Create a controller for each DS. This controller will create the views
     * associated with the DS and handle its routes.
     */
    initControllers: function initControllers() {
      if ( window.Joshfire && window.Joshfire.factory ) {
        var datasources = window.Joshfire.factory.getDataSource('main').children;
        for(var k in datasources) {
          /* It should be fairly easy to create multiple versions of this controller
          (extend it) for the various cases of OutputType we can get. */
          this.controllers[k] = new DatasourceController(this, {
            datasource: datasources[k],
            index: k,
            name: datasources[k].name,
            slug: k + '-' + this.slugify(datasources[k].name)
          });
        }
      }
    },

    /**
    * Init all the static views (at minima) and the overall layout
    * @function
    **/
    initViews: function initViews () {
      var subViews = {};

      /* The main Layout, Toolbar and Content are the static views of the app ; they never move
      and their behaviour stays the same. They won't need active treatment, so we can just keep
      them around here for easy access. */

      this.views.layout = new Layout({
        el: '#app'
      });
      this.views.toolbar = new Toolbar({
        className: 'toolbar'
      });

      // If we're expecting content we use a cardpanel
      // Otherwise we'll set a simple item to show something anyway
      if (this.controllers.length) {
        this.views.content = new CardPanel({
          className: 'content'
        });
      } else {
        this.views.content = new Item();
      }
      // Sets the toolbar/content as the children of the layout.
      this.views.layout.setChildren({
        toolbar: this.views.toolbar,
        content: this.views.content
      });

      // This is an important part : the app requests the views from each individual controller.
      // In this case we go berserk mode and request them all at once even though we don't need em.
      // Which is enough most of the time. But, any of the requested views couls easily be added whenever
      // x or y happened using something along the lines of `views.content.addChild(controller.getView())`
      for (var k in this.controllers) {
        if(this.controllers.hasOwnProperty(k)) {
          subViews[this.controllers[k].slug] = this.controllers[k].getView();
          subViews[this.controllers[k].slug+'-details'] = this.controllers[k].getDetailsView();
          this.views.toolbar.registerItem(this.controllers[k]);
        }
      }
      // Set the children of the content view aaaaand...
      if (_.size(subViews) > 0) {
        this.views.content.setChildren(subViews);
      }
      // Renders the whole tree of views
      this.views.layout.render();
    },

    /*
     * Init router
     * @function
     */
    initRouter: function initRouter(options) {
      this.router = options.router;
      this.router.init(this);
      logger.log('Router set and initialized');
    },
    /*
     * Shows a list or a detail view depending on a controller
     */
    showItem: function(item) {
      this.views.content.showChild(item.slug);
    },
    showItemDetails: function(item) {
      this.views.content.showChild(item.slug + '-details');
    },
    /**
     * Helper function to transform any latin string in a readable URL-ready string.
     */
    slugify: function(str) {
      var slug = str.replace(/^\s+|\s+$/g, ''); // trim
      slug = slug.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;';
      var to   = 'aaaaaeeeeeiiiiooooouuuunc------';
      for (var i=0, l=from.length ; i<l ; i++) {
        slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      slug = slug.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

      return slug;
    }
  });

  return App;
});

define('joshfire-framework/router',["joshlib!vendor/backbone","joshlib!vendor/underscore"], function(Backbone, _) {
	
	var Router = function(obj) {

		_.extend(obj,{
			historyStart:function(options) {
				Backbone.history.start(options);
			}
		});

		var router = Backbone.Router.extend(obj);
		return new router();
	};

	return Router;

});
define('js/router',[
  'joshlib!vendor/backbone',
  'joshlib!vendor/underscore',
  'joshlib!utils/dollar',
  'joshlib!utils/woodman',
  'joshlib!router'
], function(
  Backbone,
  _,
  $,
  woodman,
  Router
) {
  

  var logger = woodman.getLogger('router');

  return new Router({

    routes:{},

    init: function init (app) {
      this.app = app;

      // Bind all the routes
      this.setRoutes();
      // Override initial URL and set ours, because i'm lazy
      this.setInitialUrl();
      // The actual start of the app
      this.historyStart();
    },
    setRoutes: function setRoutes () {
      var ctrl;
      // Default routes
      // These should always be called first in order for them to matter.
      this.setDefaultRoutes();

      // setup your custom routes here

      // DS-linked routes
      for(var k in this.app.controllers) {
        ctrl = this.app.controllers[k];
        // We're using the onNavigate and onNavigateDetails of each datasource
        // as routes for their associated URLs.
        this.route(ctrl.slug, ctrl.name, ctrl.onNavigate);
        this.route(ctrl.slug + '/:index', ctrl.name, ctrl.onNavigateDetails);
      }
    },
    setDefaultRoutes: function setDefaultRoutes () {
      this.route('*path', 'Not Found Route', this.notfound);
      this.route('', 'Default Route', this.defaultRoute);
    },
    setInitialUrl: function setInitialUrl () {
      if (this.app.controllers && this.app.controllers.length) {
        document.location.hash = this.app.controllers[0].slug;
      }
    },


    defaultRoute: function defaultRoute () {
      logger.log('Default route hit');
    },
    notfound: function notfound () {
      logger.log('Route not found', arguments);
      this.navigate('', {trigger:true, replace:true});
    }
  });
});

require.config({
  paths: {
    // The text plugin returns the contents of a required file as a string. Useful for requiring templates.
    'text'            : 'js/lib/text',
    /*
    * This file contains the mapping between devices and implementations. It is necessary if the devicedetect
    * plugin is used anywhere through the app. More details inside.
    */
    'implementations' : 'js/lib/implementations'
  }
});

define('main',[
  'js/app',
  'js/router'
], function(
  App,
  Router
) {
  

  window._app = new App({
    device:         'none', //Default adapter is the 'none' one
    router:         Router
  });
});