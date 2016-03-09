/*!
 * minQuery
 */
 var miniQuery = (function (){
  var elementById = function (selector){
    return document.getElementById(selector);
  };
  var elementsByTagName = function (selector) {
    return document.getElementsByTagName(selector);
  };
  var elementsByClassName = function(selector) {
    return document.getElementsByClassName(selector);
  };
  var select = function (selector) {
    if (selector[0]=== ".") {
    return  elementsByClassName(selector.substring(1));
          }
    else if (selector[0]=== "#") {
      return elementById(selector.substring(1));
    }
    else
    {
      return elementsByTagName(selector)[0]
    }
  }
  var hide = function(element){
     select(element).style.visibility = 'hidden';
    };
  var show = function(element){
     select(element).style.visibility = 'visible';
    };

  var addClass = function(element, klass){
    select(element).className += " " + klass;
  };
  var removeClass = function(element, klass){
    select(element).className= SweetSelector.select(element).className.replace( /(?:^|\s)klass(?!\S)/g , '' )
  };
  var on = function (element, eventName, eventFunction){
    select(element).addEventListener(eventName, eventFunction);
  };
  var onClass = function (elements, eventName, eventFunction){
    var className = select(elements);
    for (var i =0 ; i < className.length; i++){
      className[i].addEventListener(eventName, eventFunction);
    }
  };
  var trigger= function (element, eventName) {
    var event = new Event(eventName);
    select(element).dispatchEvent(event);
  };
  var request = function(ajaxObject){
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open(ajaxObject.type, ajaxObject.url);
      xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status < 306 ){
          resolve(JSON.parse(xhr.responseText));
        }
        else {
          reject();
        }
      };
      xhr.onerror = function(){
        reject(Error("Network Error"));
      };
      xhr.send();
    });
  }
  var ready = function (callback) {
    switch (document.readyState) {
      case "loading" :
        document.addEventListener("DOMContentLoaded", callback);
        break;
      case "complete":
        // console.log("")
        callback();
        break;
    };
  };

  var append = function (element, child)
  {
    select(element).appendChild(child);
  };
  var html = function (element)
  {
    select(element).innerHTML;
  }
  var replaceHTML = function (element, newContent)
  {
    select(element).innerHTML = newContent;
  };

  var replaceValue = function (element, newContent)
  {
    select(element).src = newContent;
  };
  // var SweetSelector = (function(){
  //   return {
  //     select: select
  //   }
  // })();
  // var DOM = (function(){
  //     return {
  //       hide: hide,
  //       show: show,
  //       addClass: addClass,
  //       removeClass: removeClass
  //     }
  // })();
  // var EventDispatcher = (function(){

  //   return {
  //     on: on,
  //     trigger: trigger
  //   }
  // })();
  // var AjaxWrapper = (function(){
  // return {
  //   request: request
  // }
  // })();

  return {
      select: select,
      hide: hide,
      show: show,
      addClass: addClass,
      removeClass: removeClass,
      on: on,
      onClass: onClass,
      trigger: trigger,
      request: request,
      ready: ready,
      append: append,
      replaceHTML: replaceHTML,
      replaceValue: replaceValue,
      html: html
    }
 })();

 $ = miniQuery









// var SweetSelector = (function(){
//   var elementById = function (selector){
//     return document.getElementById(selector);
//   };
//   var elementsByTagName = function (selector) {
//     return document.getElementsByTagName(selector);
//   };
//   var elementsByClassName = function(selector) {
//     return document.getElementsByClassName(selector);
//   };
//   var select = function (selector) {
//     if (selector[0]=== ".") {
//     return  elementsByClassName(selector.substring(1))[0];
//           }
//     else if (selector[0]=== "#") {
//       return elementById(selector.substring(1));
//     }
//     else
//     {
//       return elementsByTagName(selector)[0]
//     }
//   }

//   return {
//     select: select
//   }
// })();

// var DOM = (function(){
//   var hide = function(element){
//      SweetSelector.select(element).style.visibility = 'hidden';
//     };
//   var show = function(element){
//      SweetSelector.select(element).style.visibility = 'visible';
//     };

//   var addClass = function(element, klass){
//     SweetSelector.select(element).className += " " + klass;
//   };
//   var removeClass = function(element, klass){
//     SweetSelector.select(element).className= SweetSelector.select(element).className.replace( /(?:^|\s)klass(?!\S)/g , '' )
//   };
//   return {
//     hide: hide,
//     show: show,
//     addClass: addClass,
//     removeClass: removeClass
//   }
// })();

// var EventDispatcher = (function(){
//   var on = function (element, eventName, eventFunction){
//     SweetSelector.select(element).addEventListener(eventName, eventFunction);
//   };
//   var trigger= function (element, eventName) {
//     var event = new Event(eventName);
//     SweetSelector.select(element).dispatchEvent(event);
//   };
//   return {
//     on: on,
//     trigger: trigger
//   }
// })();

// var AjaxWrapper = (function(){
//   var request = function(ajaxObject){
//     return new Promise(function(resolve, reject){
//       var xhr = new XMLHttpRequest();
//       xhr.open(ajaxObject.type, ajaxObject.url);
//       xhr.onload = function(){
//         if (xhr.status == 200){
//           resolve(xhr.response);
//         }
//         else {
//           reject(Error(xhr.statusText));
//         }
//       };
//       xhr.onerror = function(){
//         reject(Error("Network Error"));
//       };
//       xhr.send();
//     });
//   }
//   return {
//     request: request
//   }
// })();

