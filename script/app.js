(function() {
  this.JST || (this.JST = {});
  this.JST["view/help-switcher"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');  if(index == 1){ ; __p.push('\n<p>\n    这是一个大家坐在一起的文字游戏！首先要集齐至少<strong>7</strong>个人用浏览器打开<em>www.wenzisha.com</em>其中一人点击出题按钮，其余人进入游戏准备抓鬼。\n</p>\n');  }else if(index == 2){ ; __p.push('\n<p>\n    法官进入出题界面,并将领卡密码告诉大家，其他人输入密码领取卡片。<br>\n    法官出题需保证两个词<span>字数一致，强烈相关。</span>\n</p>\n');  }else if(index == 3){ ; __p.push('\n<p>\n    所有人确认好自己的身份卡\n</p>\n');  }else if(index == 4){ ; __p.push('\n<p>\n    法官：天黑请闭眼，鬼请睁眼，鬼需要互相认识同伴，并指认开始阐述的起点。（通常以顺时针方向进行）\n</p>\n');  }else if(index == 5){ ; __p.push('\n<p>\n    从鬼指认的人开始阐述，平民和傻子需要尽量阐述的让同伴理解你的词，但不要让鬼猜到你的词。\n</p>\n');  }else if(index == 6){ ; __p.push('\n<p>\n    阐述一轮结束后，法官需要组织大家进行投票谁是鬼。票数最多的人被投死，如票数相同，则继续阐述再进行投票，直到投死一个人为止。\n</p>\n');  }else if(index == 7){ ; __p.push('\n<p>\n    被投死的人，需要承认是否是鬼，如回答不是鬼，则没有遗言；<br>\n    如回答是鬼，则可以向法官问一个可以用“是”或“否”作答的问题，法官将如实回答。\n</p>\n');  }else if(index == 8){ ; __p.push('\n<p>\n    当鬼猜出词时，鬼胜；<br>\n    当平民和傻子的人数少于鬼的人数时，鬼胜;<br>\n    当平民和傻子将鬼全部投死，平民和傻子胜。\n</p>\n');  }else{ ; __p.push('\n<p>\n    <span>error</span>a\n</p>\n');  } ; __p.push('\n\n');}return __p.join('');};
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["view/help"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<header>\n    <figure class="caption">开始游戏</figure>\n    <div class="close">\n    </div>\n</header>\n<section class="box box-help">\n    <p>\n        这是一个大家坐在一起的文字游戏！首先要集齐至少<strong>7</strong>个人用浏览器打开<em>www.wenzisha.com</em>其中一人点击出题按钮，其余人进入游戏准备抓鬼。\n    </p>\n</section>\n\n<footer class="slider">\n    <div class="help-man">\n    </div>\n\n    <div class="slider-status">\n        <span class="sel"></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n    <div class="slider-outer">\n        <ul class="slider-wrap">\n            <li>\n                <img data-img="../image/1.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/2.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/3.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/4.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/5.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/6.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/7.png" src="../image/1.png">\n            </li>\n            <li>\n                <img data-img="../image/8.png" src="../image/1.png">\n            </li>\n        </ul>\n    </div>\n</footer>\n');}return __p.join('');};
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["view/s-1"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!--出题卡-->\n<div class="word">\n     <span>\n         <em></em><figure><input type="text" tabindex="-1" placeholder="点击输入取卡口令"></figure>\n     </span>\n</div>\n<ul class="putin">\n    <li>\n        <input tabindex="2" placeholder="点此输入">\n    </li>\n    <li>\n        <input tabindex="3" placeholder="点此输入">\n    </li>\n    <li>\n        <input tabindex="4" placeholder="点此输入">\n    </li>\n</ul>\n\n<section class="fire">\n    <div class="btn">\n        <span id="setTopic">\n            出题\n        </span>\n    </div>\n</section>\n');}return __p.join('');};
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["view/s-2"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<!--出题卡-->\n<div class="word">\n     <p>\n         <em>13</em>人已经领取卡片<br>\n         全部人领取后可以开始游戏\n     </p>\n</div>\n<ul class="putin">\n    <li>\n        <input tabindex="2" placeholder="点此输入">\n    </li>\n    <li>\n        <input tabindex="3" placeholder="点此输入">\n    </li>\n    <li>\n        <input tabindex="4" placeholder="点此输入">\n    </li>\n</ul>\n\n<section class="fire">\n    <div class="btn">\n        <span id="setTopic">\n            出题\n        </span>\n    </div>\n</section>\n');}return __p.join('');};
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["view/w-1"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="word">\n     <span>\n         <em></em><figure><input type="text" placeholder="输入取卡口令"><i id="confirm">OK</i></figure>\n     </span>\n</div>\n\n<div class="card hide">\n   <span>\n       请输入<br>口令\n   </span>\n\n</div>\n<div class="face">\n\n</div>\n<span class="tip">\n   3人已经领取卡片\n</span>\n\n');}return __p.join('');};
}).call(this);
(function() {
  this.JST || (this.JST = {});
  this.JST["view/w-2"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="word">\n\n</div>\n\n<div class="card hide">\n    <figure>\n        <p>出题中</p>\n    </figure>\n\n</div>\n\n<div class="face">\n   <span>\n       3\n   </span>\n</div>\n\n<span class="tip">\n   3人已经领取卡片\n</span>\n');}return __p.join('');};
}).call(this);
/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */

;(function(undefined){
  if (String.prototype.trim === undefined) // fix for iOS 3.2
    String.prototype.trim = function(){ return this.replace(/^\s+/, '').replace(/\s+$/, '') }

  // For iOS 3.x
  // from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/reduce
  if (Array.prototype.reduce === undefined)
    Array.prototype.reduce = function(fun){
      if(this === void 0 || this === null) throw new TypeError()
      var t = Object(this), len = t.length >>> 0, k = 0, accumulator
      if(typeof fun != 'function') throw new TypeError()
      if(len == 0 && arguments.length == 1) throw new TypeError()

      if(arguments.length >= 2)
       accumulator = arguments[1]
      else
        do{
          if(k in t){
            accumulator = t[k++]
            break
          }
          if(++k >= len) throw new TypeError()
        } while (true)

      while (k < len){
        if(k in t) accumulator = fun.call(undefined, accumulator, t[k], k, t)
        k++
      }
      return accumulator
    }

})()
var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice,
    document = window.document,
    elementDisplay = {}, classCache = {},
    getComputedStyle = document.defaultView.getComputedStyle,
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,

    // Used by `$.zepto.init` to wrap elements, text/comment nodes, document,
    // and document fragment node types.
    elementTypes = [1, 3, 8, 9, 11],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    classSelectorRE = /^\.([\w-]+)$/,
    idSelectorRE = /^#([\w-]+)$/,
    tagSelectorRE = /^[\w-]+$/,
    toString = ({}).toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div')

  zepto.matches = function(element, selector) {
    if (!element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function isFunction(value) { return toString.call(value) == "[object Function]" }
  function isObject(value) { return value instanceof Object }
  function isPlainObject(value) {
    var key, ctor
    if (toString.call(value) !== "[object Object]") return false
    ctor = (isFunction(value.constructor) && value.constructor.prototype)
    if (!ctor || !hasOwnProperty.call(ctor, 'isPrototypeOf')) return false
    for (key in value);
    return key === undefined || hasOwnProperty.call(value, key)
  }
  function isArray(value) { return value instanceof Array }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return array.filter(function(item){ return item !== undefined && item !== null }) }
  function flatten(array) { return array.length > 0 ? [].concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return array.filter(function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name) {
    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
    if (!(name in containers)) name = '*'
    var container = containers[name]
    container.innerHTML = '' + html
    return $.each(slice.call(container.childNodes), function(){
      container.removeChild(this)
    })
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = arguments.callee.prototype
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, juts return it
    else if (zepto.isZ(selector)) return selector
    else {
      var dom
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // if a JavaScript object is given, return a copy of it
      // this is a somewhat peculiar option, but supported by
      // jQuery so we'll do it, too
      else if (isPlainObject(selector))
        dom = [$.extend({}, selector)], selector = null
      // wrap stuff like `document` or `window`
      else if (elementTypes.indexOf(selector.nodeType) >= 0 || selector === window)
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
      // create a new Zepto collection from the nodes found
      return zepto.Z(dom, selector)
    }
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, whichs makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    slice.call(arguments, 1).forEach(function(source) {
      for (key in source)
        if (source[key] !== undefined)
          target[key] = source[key]
    })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found
    return (element === document && idSelectorRE.test(selector)) ?
      ( (found = element.getElementById(RegExp.$1)) ? [found] : emptyArray ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? emptyArray :
      slice.call(
        classSelectorRE.test(selector) ? element.getElementsByClassName(RegExp.$1) :
        tagSelectorRE.test(selector) ? element.getElementsByTagName(selector) :
        element.querySelectorAll(selector)
      )
  }

  function filtered(nodes, selector) {
    return selector === undefined ? $(nodes) : $(nodes).filter(selector)
  }

  function funcArg(context, arg, idx, payload) {
   return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  $.isFunction = isFunction
  $.isObject = isObject
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.trim = function(str) { return str.trim() }

  // plugin compatibility
  $.uuid = 0

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $.map(this, function(el, i){ return fn.call(el, i, el) })
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      if (readyRE.test(document.readyState)) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      this.forEach(function(el, idx){ callback.call(el, idx, el) })
      return this
    },
    filter: function(selector){
      return $([].filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result
      if (this.length == 1) result = zepto.qsa(this[0], selector)
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return $(result)
    },
    closest: function(selector, context){
      var node = this[0]
      while (node && !zepto.matches(node, selector))
        node = node !== context && node !== document && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && node !== document && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return slice.call(this.children) }), selector)
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return slice.call(el.parentNode.children).filter(function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return this.map(function(){ return this[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = null)
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(newContent){
      return this.each(function(){
        $(this).wrapAll($(newContent)[0].cloneNode(false))
      })
    },
    wrapAll: function(newContent){
      if (this[0]) {
        $(this[0]).before(newContent = $(newContent))
        newContent.append(this)
      }
      return this
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return $(this.map(function(){ return this.cloneNode(true) }))
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return (setting === undefined ? this.css("display") == "none" : setting) ? this.show() : this.hide()
    },
    prev: function(){ return $(this.pluck('previousElementSibling')) },
    next: function(){ return $(this.pluck('nextElementSibling')) },
    html: function(html){
      return html === undefined ?
        (this.length > 0 ? this[0].innerHTML : null) :
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        })
    },
    text: function(text){
      return text === undefined ?
        (this.length > 0 ? this[0].textContent : null) :
        this.each(function(){ this.textContent = text })
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && value === undefined) ?
        (this.length == 0 || this[0].nodeType !== 1 ? undefined :
          (name == 'value' && this[0].nodeName == 'INPUT') ? this.val() :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) this.setAttribute(key, name[key])
          else this.setAttribute(name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ if (this.nodeType === 1) this.removeAttribute(name) })
    },
    prop: function(name, value){
      return (value === undefined) ?
        (this[0] ? this[0][name] : undefined) :
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        })
    },
    data: function(name, value){
      var data = this.attr('data-' + dasherize(name), value)
      return data !== null ? data : undefined
    },
    val: function(value){
      return (value === undefined) ?
        (this.length > 0 ? this[0].value : undefined) :
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        })
    },
    offset: function(){
      if (this.length==0) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: obj.width,
        height: obj.height
      }
    },
    css: function(property, value){
      if (value === undefined && typeof property == 'string')
        return (
          this.length == 0
            ? undefined
            : this[0].style[camelize(property)] || getComputedStyle(this[0], '').getPropertyValue(property))

      var css = ''
      for (key in property)
        if(typeof property[key] == 'string' && property[key] == '')
          this.each(function(){ this.style.removeProperty(dasherize(key)) })
        else
          css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'

      if (typeof property == 'string')
        if (value == '')
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (this.length < 1) return false
      else return classRE(name).test(this[0].className)
    },
    addClass: function(name){
      return this.each(function(idx){
        classList = []
        var cls = this.className, newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && (this.className += (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined)
          return this.className = ''
        classList = this.className
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        this.className = classList.trim()
      })
    },
    toggleClass: function(name, when){
      return this.each(function(idx){
        var newName = funcArg(this, name, idx, this.className)
        ;(when === undefined ? !$(this).hasClass(newName) : when) ?
          $(this).addClass(newName) : $(this).removeClass(newName)
      })
    }
  }

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    $.fn[dimension] = function(value){
      var offset, Dimension = dimension.replace(/./, function(m){ return m[0].toUpperCase() })
      if (value === undefined) return this[0] == window ? window['inner' + Dimension] :
        this[0] == document ? document.documentElement['offset' + Dimension] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        var el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function insert(operator, target, node) {
    var parent = (operator % 2) ? target : target.parentNode
    parent ? parent.insertBefore(node,
      !operator ? target.nextSibling :      // after
      operator == 1 ? parent.firstChild :   // prepend
      operator == 2 ? target :              // before
      null) :                               // append
      $(node).remove()
  }

  function traverseNode(node, fun) {
    fun(node)
    for (var key in node.childNodes) traverseNode(node.childNodes[key], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(key, operator) {
    $.fn[key] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var nodes = $.map(arguments, function(n){ return isObject(n) ? n : zepto.fragment(n) })
      if (nodes.length < 1) return this
      var size = this.length, copyByClone = size > 1, inReverse = operator < 2

      return this.each(function(index, target){
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[inReverse ? nodes.length-i-1 : i]
          traverseNode(node, function(node){
            if (node.nodeName != null && node.nodeName.toUpperCase() === 'SCRIPT' && (!node.type || node.type === 'text/javascript'))
              window['eval'].call(window, node.innerHTML)
          })
          if (copyByClone && index < size - 1) node = node.cloneNode(true)
          insert(operator, target, node)
        }
      })
    }

    $.fn[(operator % 2) ? key+'To' : 'insert'+(operator ? 'Before' : 'After')] = function(html){
      $(html)[key](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.camelize = camelize
  zepto.uniq = uniq
  $.zepto = zepto

  return $
})()

// If `$` is not yet defined, point it to `Zepto`
window.Zepto = Zepto
'$' in window || (window.$ = Zepto)
;(function($){
  var $$ = $.zepto.qsa, handlers = {}, _zid = 1, specialEvents={}

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eachEvent(events, fn, iterator){
    if ($.isObject(events)) $.each(events, iterator)
    else events.split(/\s/).forEach(function(type){ iterator(type, fn) })
  }

  function add(element, events, fn, selector, getDelegate, capture){
    capture = !!capture
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    eachEvent(events, fn, function(event, fn){
      var delegate = getDelegate && getDelegate(fn, event),
        callback = delegate || fn
      var proxyfn = function (event) {
        var result = callback.apply(element, [event].concat(event.data))
        if (result === false) event.preventDefault()
        return result
      }
      var handler = $.extend(parse(event), {fn: fn, proxy: proxyfn, sel: selector, del: delegate, i: set.length})
      set.push(handler)
      element.addEventListener(handler.e, proxyfn, capture)
    })
  }
  function remove(element, events, fn, selector){
    var id = zid(element)
    eachEvent(events || '', fn, function(event, fn){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
        element.removeEventListener(handler.e, handler.proxy, false)
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    if ($.isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (typeof context == 'string') {
      return $.proxy(fn[context], fn)
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, callback){
    return this.each(function(){
      add(this, event, callback)
    })
  }
  $.fn.unbind = function(event, callback){
    return this.each(function(){
      remove(this, event, callback)
    })
  }
  $.fn.one = function(event, callback){
    return this.each(function(i, element){
      add(this, event, callback, null, function(fn, type){
        return function(){
          var result = fn.apply(element, arguments)
          remove(element, type, fn)
          return result
        }
      })
    })
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }
  function createProxy(event) {
    var proxy = $.extend({originalEvent: event}, event)
    $.each(eventMethods, function(name, predicate) {
      proxy[name] = function(){
        this[predicate] = returnTrue
        return event[name].apply(event, arguments)
      }
      proxy[predicate] = returnFalse
    })
    return proxy
  }

  // emulates the 'defaultPrevented' property for browsers that have none
  function fix(event) {
    if (!('defaultPrevented' in event)) {
      event.defaultPrevented = false
      var prevent = event.preventDefault
      event.preventDefault = function() {
        this.defaultPrevented = true
        prevent.call(this)
      }
    }
  }

  $.fn.delegate = function(selector, event, callback){
    var capture = false
    if(event == 'blur' || event == 'focus'){
      if($.iswebkit)
        event = event == 'blur' ? 'focusout' : event == 'focus' ? 'focusin' : event
      else
        capture = true
    }

    return this.each(function(i, element){
      add(element, event, callback, selector, function(fn){
        return function(e){
          var evt, match = $(e.target).closest(selector, element).get(0)
          if (match) {
            evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
            return fn.apply(match, [evt].concat([].slice.call(arguments, 1)))
          }
        }
      }, capture)
    })
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, callback){
    return selector == undefined || $.isFunction(selector) ?
      this.bind(event, selector) : this.delegate(selector, event, callback)
  }
  $.fn.off = function(event, selector, callback){
    return selector == undefined || $.isFunction(selector) ?
      this.unbind(event, selector) : this.undelegate(selector, event, callback)
  }

  $.fn.trigger = function(event, data){
    if (typeof event == 'string') event = $.Event(event)
    fix(event)
    event.data = data
    return this.each(function(){
      // items in the collection might not be DOM elements
      // (todo: possibly support events on plain old objects)
      if('dispatchEvent' in this) this.dispatchEvent(event)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, data){
    var e, result
    this.each(function(i, element){
      e = createProxy(typeof event == 'string' ? $.Event(event) : event)
      e.data = data
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback){ return this.bind(event, callback) }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else if (this.length) try { this.get(0)[name]() } catch(e){}
      return this
    }
  })

  $.Event = function(type, props) {
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true, null, null, null, null, null, null, null, null, null, null, null, null)
    return event
  }

})(Zepto)
;(function($){
  function detect(ua){
    var os = this.os = {}, browser = this.browser = {},
      webkit = ua.match(/WebKit\/([\d.]+)/),
      android = ua.match(/(Android)\s+([\d.]+)/),
      ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
      iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
      webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      touchpad = webos && ua.match(/TouchPad/),
      kindle = ua.match(/Kindle\/([\d.]+)/),
      silk = ua.match(/Silk\/([\d._]+)/),
      blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/)

    // todo clean this up with a better OS/browser
    // separation. we need to discern between multiple
    // browsers on android, and decide if kindle fire in
    // silk mode is android or not

    if (browser.webkit = !!webkit) browser.version = webkit[1]

    if (android) os.android = true, os.version = android[2]
    if (iphone) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
    if (webos) os.webos = true, os.version = webos[2]
    if (touchpad) os.touchpad = true
    if (blackberry) os.blackberry = true, os.version = blackberry[2]
    if (kindle) os.kindle = true, os.version = kindle[1]
    if (silk) browser.silk = true, browser.version = silk[1]
    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
  }

  detect.call($, navigator.userAgent)
  // make available to unit tests
  $.__detect = detect

})(Zepto)
;(function($, undefined){
  var prefix = '', eventPrefix, endEventName, endAnimationName,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o', ms: 'MS' },
    document = window.document, testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    clearProperties = {}

  function downcase(str) { return str.toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : downcase(name) }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + downcase(vendor) + '-'
      eventPrefix = event
      return false
    }
  })

  clearProperties[prefix + 'transition-property'] =
  clearProperties[prefix + 'transition-duration'] =
  clearProperties[prefix + 'transition-timing-function'] =
  clearProperties[prefix + 'animation-name'] =
  clearProperties[prefix + 'animation-duration'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback){
    if ($.isObject(duration))
      ease = duration.easing, callback = duration.complete, duration = duration.duration
    if (duration) duration = duration / 1000
    return this.anim(properties, duration, ease, callback)
  }

  $.fn.anim = function(properties, duration, ease, callback){
    var transforms, cssProperties = {}, key, that = this, wrappedCallback, endEvent = $.fx.transitionEnd
    if (duration === undefined) duration = 0.4
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssProperties[prefix + 'animation-name'] = properties
      cssProperties[prefix + 'animation-duration'] = duration + 's'
      endEvent = $.fx.animationEnd
    } else {
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) {
          transforms || (transforms = [])
          transforms.push(key + '(' + properties[key] + ')')
        }
        else cssProperties[key] = properties[key]

      if (transforms) cssProperties[prefix + 'transform'] = transforms.join(' ')
      if (!$.fx.off && typeof properties === 'object') {
        cssProperties[prefix + 'transition-property'] = Object.keys(properties).join(', ')
        cssProperties[prefix + 'transition-duration'] = duration + 's'
        cssProperties[prefix + 'transition-timing-function'] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, arguments.callee)
      }
      $(this).css(clearProperties)
      callback && callback.call(this)
    }
    if (duration > 0) this.bind(endEvent, wrappedCallback)

    setTimeout(function() {
      that.css(cssProperties)
      if (duration <= 0) setTimeout(function() {
        that.each(function(){ wrappedCallback.call(this) })
      }, 0)
    }, 0)

    return this
  }

  testEl = null
})(Zepto)
;(function($){
  var jsonpID = 0,
      isObject = $.isObject,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.defaultPrevented
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options){
    var callbackName = 'jsonp' + (++jsonpID),
      script = document.createElement('script'),
      abort = function(){
        $(script).remove()
        if (callbackName in window) window[callbackName] = empty
        ajaxComplete('abort', xhr, options)
      },
      xhr = { abort: abort }, abortTimeout

    if (options.error) script.onerror = function() {
      xhr.abort()
      options.error()
    }

    window[callbackName] = function(data){
      clearTimeout(abortTimeout)
      $(script).remove()
      delete window[callbackName]
      ajaxSuccess(data, xhr, options)
    }

    serializeData(options)
    script.src = options.url.replace(/=\?/, '=' + callbackName)
    $('head').append(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.abort()
        ajaxComplete('timeout', xhr, options)
      }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    accepts: {
      script: 'text/javascript, application/javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0
  }

  function mimeToDataType(mime) {
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (isObject(options.data)) options.data = $.param(options.data)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data)
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {})
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    var dataType = settings.dataType, hasPlaceholder = /=\?/.test(settings.url)
    if (dataType == 'jsonp' || hasPlaceholder) {
      if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?')
      return $.ajaxJSONP(settings)
    }

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)

    var mime = settings.accepts[dataType],
        baseHeaders = { },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = $.ajaxSettings.xhr(), abortTimeout

    if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest'
    if (mime) {
      baseHeaders['Accept'] = mime
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.data && settings.type.toUpperCase() != 'GET'))
      baseHeaders['Content-Type'] = (settings.contentType || 'application/x-www-form-urlencoded')
    settings.headers = $.extend(baseHeaders, settings.headers || {})

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : JSON.parse(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings)
          else ajaxSuccess(result, xhr, settings)
        } else {
          ajaxError(null, 'error', xhr, settings)
        }
      }
    }

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async)

    for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name])

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      return false
    }

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  $.get = function(url, success){ return $.ajax({ url: url, success: success }) }

  $.post = function(url, data, success, dataType){
    if ($.isFunction(data)) dataType = dataType || success, success = data, data = null
    return $.ajax({ type: 'POST', url: url, data: data, success: success, dataType: dataType })
  }

  $.getJSON = function(url, success){
    return $.ajax({ url: url, success: success, dataType: 'json' })
  }

  $.fn.load = function(url, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector
    if (parts.length > 1) url = parts[0], selector = parts[1]
    $.get(url, function(response){
      self.html(selector ?
        $(document.createElement('div')).html(response.replace(rscript, "")).find(selector).html()
        : response)
      success && success.call(self)
    })
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var array = $.isArray(obj)
    $.each(obj, function(key, value) {
      if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (traditional ? $.isArray(value) : isObject(value))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace('%20', '+')
  }
})(Zepto)
;(function ($) {
  $.fn.serializeArray = function () {
    var result = [], el
    $( Array.prototype.slice.call(this.get(0).elements) ).each(function () {
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function () {
    var result = []
    this.serializeArray().forEach(function (elm) {
      result.push( encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value) )
    })
    return result.join('&')
  }

  $.fn.submit = function (callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.defaultPrevented) this.get(0).submit()
    }
    return this
  }

})(Zepto)
;(function($){
  var touch = {}, touchTimeout

  function parentIfText(node){
    return 'tagName' in node ? node : node.parentNode
  }

  function swipeDirection(x1, x2, y1, y2){
    var xDelta = Math.abs(x1 - x2), yDelta = Math.abs(y1 - y2)
    return xDelta >= yDelta ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  var longTapDelay = 750, longTapTimeout

  function longTap(){
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap(){
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  $(document).ready(function(){
    var now, delta

    $(document.body).bind('touchstart', function(e){
      now = Date.now()
      delta = now - (touch.last || now)
      touch.el = $(parentIfText(e.touches[0].target))
      touchTimeout && clearTimeout(touchTimeout)
      touch.x1 = e.touches[0].pageX
      touch.y1 = e.touches[0].pageY
      if (delta > 0 && delta <= 250) touch.isDoubleTap = true
      touch.last = now
      longTapTimeout = setTimeout(longTap, longTapDelay)
    }).bind('touchmove', function(e){
      cancelLongTap()
      touch.x2 = e.touches[0].pageX
      touch.y2 = e.touches[0].pageY
    }).bind('touchend', function(e){
       cancelLongTap()

      // double tap (tapped twice within 250ms)
      if (touch.isDoubleTap) {
        touch.el.trigger('doubleTap')
        touch = {}

      // swipe
      } else if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
                 (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)) {
        touch.el.trigger('swipe') &&
          touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
        touch = {}

      // normal tap
      } else if ('last' in touch) {
        touch.el.trigger('tap')

        touchTimeout = setTimeout(function(){
          touchTimeout = null
          touch.el.trigger('singleTap')
          touch = {}
        }, 250)
      }
    }).bind('touchcancel', function(){
      if (touchTimeout) clearTimeout(touchTimeout)
      if (longTapTimeout) clearTimeout(longTapTimeout)
      longTapTimeout = touchTimeout = null
      touch = {}
    })
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(m){
    $.fn[m] = function(callback){ return this.bind(m, callback) }
  })
})(Zepto)
;
(function($,window){
    var win = $(window),

        T_float = [
            '<div class="c-float-popWrap msgMode hide">',
            '<div class="c-float-modePop">',
            '<div class="warnMsg"></div>',
            '<div class="content"></div>',
            '<div class="doBtn">',
            '<button class="ok">确定</button>',
            '<button class="cancel">取消</button>',
            '</div>',
            '</div>',
            '</div>'
        ].join(''),

        E_float = $(T_float),
        E_floatMsg = E_float.find('.warnMsg'),
        E_floatContent = E_float.find('.content'),
        E_floatOk = E_float.find('.doBtn .ok'),
        E_floatCancel = E_float.find('.doBtn .cancel'),

        initDom = false,
        domContainer = '#tbh5v0',
        flashTimeoutId
        ;

    function ModePop(options) {
        this._options = $.extend({
            mode : 'msg',
            text : '网页提示',
        }, options || {});

        this._init();
    }

    $.extend(ModePop.prototype, {
        _init : function() {
            var that = this,
                opt = that._options,
                mode = opt.mode,
                text = opt.text,
                content = opt.content,
                callback = opt.callback,
                background = opt.background
                ;

            // set mode
            var classTxt = E_float.attr('class');
            classTxt = classTxt.replace(/(msg|alert|confirm)Mode/i, mode + 'Mode');
            E_float.attr('class', classTxt);

            // set background
            background && E_float.css('background', background);

            // set text & content
            text && E_floatMsg.html(text);
            content && E_floatContent.html(content);

            // click event
            /*
             E_float.off('click')
             .on('click', '.doBtn .ok', function(e) {
             callback.call(that, e, true);
             })
             .on('click', '.doBtn .cancel', function(e) {
             callback.call(that, e, false);
             });
             */
            E_floatOk.off('click')
                .on('click', function(e) {
                    callback.call(that, e, true);
                });
            E_floatCancel.off('click')
                .on('click', function(e) {
                    callback.call(that, e, false);
                });


            if (!initDom) {
                initDom = true;
                $(domContainer).append(E_float);
                win.on('resize', function() {
                    setTimeout(function() {
                        that._pos();
                    }, 500);
                });
            }
        },

        _pos : function() {
            var that = this,
                doc = document,
                docEl = doc.documentElement,
                body = doc.body,
                top, left, cW, cH, eW, eH
                ;

            if (!that.isHide()) {
                top = body.scrollTop;
                left = body.scrollLeft;
                cW = docEl.clientWidth;
                cH = docEl.clientHeight;
                eW = E_float.width();
                eH = E_float.height();

                E_float.css({
                    top : top + (cH - eH) / 2,
                    left : left + (cW - eW) / 2
                });
            }
        },

        isShow : function() {
            return E_float.hasClass('show');
        },

        isHide : function() {
            return E_float.hasClass('hide');
        },

        _cbShow : function() {
            var that = this,
                opt = that._options,
                onShow = opt.onShow
                ;

            E_float.addClass('show');
            onShow && onShow.call(that);
        },

        show : function() {
            var that = this
                ;

            if (flashTimeoutId) {
                clearTimeout(flashTimeoutId);
                flashTimeoutId = undefined;
            }

            if (!that.isShow()) {
                E_float.css('opacity', '0').removeClass('hide');
                that._pos();

                E_float.animate({'opacity': '1'}, 300, 'linear', function() {
                    that._cbShow();
                });
            } else {
                that._cbShow();
            }
        },

        _cbHide : function() {
            var that = this,
                opt = that._options,
                onHide = opt.onHide
                ;

            E_float.addClass('hide');
            onHide && onHide.call(that);
        },

        hide : function() {
            var that = this
                ;

            if (!that.isHide()) {
                E_float.css('opacity', 1).removeClass('show');

                E_float.animate({'opacity': 0}, 300, 'linear', function() {
                    that._cbHide();
                });
            } else {
                that._cbHide();
            }
        },

        flash : function(timeout) {
            var that = this
            opt = that._options
            ;

            opt.onShow = function() {
                flashTimeoutId = setTimeout(function() {
                    if (flashTimeoutId) {
                        that.hide();
                    }
                }, timeout);
            }

            that.show();
        }
    });

    window.Notification = new function() {

        this.simple = function(text, bg, timeout) {
            if (arguments.length == 2) {
                if (typeof arguments[1] == 'number') {
                    timeout = arguments[1];
                    bg = undefined;
                }
            }

            var pop = new ModePop({
                mode : 'msg',
                text : text,
                background : bg
            });

            pop.flash(timeout || 2000);
            return pop;
        }

        this.msg = function(text, options) {
            return new ModePop($.extend({
                mode : 'msg',
                text : text
            }, options || {}));
        }

        this.alert = function(text, callback, options) {
            return new ModePop($.extend({
                mode : 'alert',
                text : text,
                callback : callback
            }, options || {}));
        }

        this.confirm = function(text, content, callback, options) {
            return new ModePop($.extend({
                mode : 'confirm',
                text : text,
                content : content,
                callback : callback,
            }, options || {}));
        }

        this.pop = function(options) {
            return new ModePop(options);
        }

    };
})(Zepto,window);
/**
 * @fileoverview slider组件
 * 依赖zepto
 * @author caochun.cr@taobao.com (曹纯)
 * 支持translate3d
*/

/*
	从Modernizr.js中移植出来
*/

(function(window){
	var css3 = {},
	docElement = document.documentElement,
	mod = 'modernizr',
	injectElementWithStyles = function( rule, callback, nodes, testnames ) {
		var style, ret, node,
		div = document.createElement('div'),
		  // After page load injecting a fake body doesn't work so check if body exists
		body = document.body,
		  // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
		fakeBody = body ? body : document.createElement('body');
		
		if ( parseInt(nodes, 10) ) {
		  // In order not to give false positives we create a node for each test
		  // This also allows the method to scale for unspecified uses
		  while ( nodes-- ) {
			  node = document.createElement('div');
			  node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
			  div.appendChild(node);
		  }
		}
		
		// <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
		// when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
		// with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
		// msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
		// Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
		style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
		div.id = mod;
		// IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
		// Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
		(body ? div : fakeBody).innerHTML += style;
		fakeBody.appendChild(div);
		if ( !body ) {
		  //avoid crashing IE8, if background image is used
		  fakeBody.style.background = "";
		  docElement.appendChild(fakeBody);
		}
		
		ret = callback(div, rule);
		// If this is done after page load we don't want to remove the body so check if body exists
		!body ? fakeBody.parentNode.removeChild(fakeBody) : div.parentNode.removeChild(div);
		return !!ret;
	}
	var cssomPrefixes = 'Webkit Moz O ms'.split(' '),
	mStyle = docElement.style;
	function is( obj, type ) {
		return typeof obj === type;
	}
	function testProps( props, prefixed ) {
		for ( var i in props ) {
			if ( mStyle[ props[i] ] !== undefined ) {
				return prefixed == 'pfx' ? props[i] : true;
			}
		}
		return false;
	}
	function testPropsAll( prop, prefixed, elem ) {
		var ucProp = prop.charAt(0).toUpperCase() + prop.substr(1),
			props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

		// did they call .prefixed('boxSizing') or are we just testing a prop?
		if(is(prefixed, "string") || is(prefixed, "undefined")) {
		  return testProps(props, prefixed);

		// otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
		} else {
		  //props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
		  //return testDOMProps(props, prefixed, elem);
		}
	}
	css3['hasTransform'] = function() {
        return !!testPropsAll('transform');
    };
	css3['has3d'] = function(){
		var ret = !!testPropsAll('perspective');
		// Webkit's 3D transforms are passed off to the browser's own graphics renderer.
		// It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
		// some conditions. As a result, Webkit typically recognizes the syntax but
		// will sometimes throw a false positive, thus we must do a more thorough check:
		if ( ret && 'webkitPerspective' in docElement.style ) {
		  // Webkit allows this media query to succeed only if the feature is enabled.
		  // `@media (transform-3d),(-webkit-transform-3d){ ... }`
		  injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
			ret = node.offsetLeft === 9 && node.offsetHeight === 3;
		  });
		}
		return ret;
	}
	
	window.css3 = css3;
})(window);

(function($,css3,window){
	var isAndroid = (/android/gi).test(navigator.appVersion),
		has3d = css3.has3d(),
		hasTransform = !isAndroid && css3.hasTransform(),
		gp = hasTransform ? 'translateX' : 'left',
		gv1 = has3d ? 'translate3d(' : 'translate(',
		gv2 = has3d ? ',0)' : ')';
		
	$.touchSlider = function(options,container){
		this.op = {
			container : ".slider",  //大容器，包含状态，上下页等
			wrap : ".slider-outer",  //滑动显示区域
			wrapUl : ".slider-wrap",  //滑动容器
			wrapStatus : ".slider-status",  //状态容器
			margin : 0,  //滑动容器内子元素的间距
			cls : "sel",  //状态容器内子元素选中的样式
			prev : null,  //上一页
			next : null,  //下一页
			lazy : 'dataimg', //延时属性
			anitime : 400, //滑动持续时间
			easeing : "ease-out",  //滑动公式
			isLoop : false,  //循环
			isPlay : false,  //自动播放
			bounce : true,  //边界反弹,安卓默认禁用回弹
			inter : 5000,  //播放间隔时间
			isHide : true,  //prev和next在头尾是否需要隐藏
			ontouchstart : null, //touch开始触发事件
			ontouchend : null, //touch结束后触发事件
			transitionEnd : null //动画结束后触发
		};
		if(container){this.op.container = container}
		this.reset(options);
		this.increaseEvent();
	}
	
	
	$.extend($.touchSlider.prototype,{
		reset : function(options){
			$.extend(this.op,options || {}); //op内的container优先级高
			this.op.left = this.op.left || 0;
			this.findEl() && this.init();
		},
		findEl : function(){
			var op = this.op,
			container = this._container = $(op.container);
			if(container.length == 0){return null;}
			this._wrap = container.find(op.wrap);
			if(this._wrap.length == 0){return null;}
			this._wul = container.find(op.wrapUl);
			if(this._wul.length == 0){return null;}
			this._childs = this._wul.children();
			if(this._childs.length == 0){return null;}
			this._wrapStatus = op.wrapStatus && container.find(op.wrapStatus);
			this._prev = op.prev && container.find(op.prev)[0];
			this._next = op.next && container.find(op.next)[0];
			return this;
		},
		init : function(){
			var that = this,
			op = that.op,
			container = that._container,
			wrap = that._wrap,
			wul = that._wul,
			childs = that._childs,
			wrapStatus = that._wrapStatus,
			prev = that._prev,
			next = that._next;
			var step = that._step = op.step || wrap.width(),  //滑动步长，默认wrap的宽度
			len = that._len = childs.length,  //子元素的个数
			single = childs[0].offsetWidth,  //单个子元素的宽度
			margin = op.margin,
			status = that._status = Math.floor(step/single),  //每页显示子元素的个数
			allWidth = single*len;  //滑动容器的宽度

            console.log(that._step);

            if(status < 1){
                //出错，childs宽度不能大于_wrap宽度.
                throw Error("childs宽度不能大于_wrap宽度");
                return null;
            }
            if(status > 1 || op.step){op.isLoop = false;}  //如果一页显示的子元素超出1个，或设置了步长，则不支持循环；若自动播放，则只支持一次
			
			if(op.isLoop){
				allWidth = single * (len+2);
				that.op.bounce = true;
			}
			if(hasTransform){
				wrap.css({'-webkit-transform-style':'preserve-3d'});
				//wul.css({'-webkit-perspective':1000,'-webkit-backface-visibility':'hidden'});
				childs.css({'-webkit-transform':gv1+'0,0'+gv2});
			}
			if(margin && typeof margin == 'number'){  //如果有margin
				allWidth += (len-1)*margin;  //总宽度增加
				that._step += margin;
			}

            console.log(that._step);
			
			//是否初始位置
			var initLeft = op.left;
			initLeft -= (that._current || 0) * that._step;
			hasTransform && wul.css('-webkit-transform',gv1+initLeft+'px,0'+gv2) || wul.css('left',initLeft);
			
			var pages = that._pages = Math.ceil(len/status);  //总页数
			//状态容器添加子元素
			if(wrapStatus && wrapStatus.length > 0){  //如果状态容器存在
				var temp='',
				childstu = wrapStatus.children();
				if(childstu.length == 0){  //子元素不存在
					for(var i=0;i<pages;i++){
						temp += '<span'+(i==0?" class="+op.cls+"":"")+'></span>';
					}
					wrapStatus.html(temp);
				}
			}
			//如果没超出一页，则不需要滑动
			//延时加载的图片
			var selector = 'img['+op.lazy+']';
			this.lazyimg = wul.find(selector);
			
			this.getImg();
			if(pages <= 1){
				if(prev){prev.style.display = 'none';}
				if(next){next.style.display = 'none';}
				wrapStatus && wrapStatus.hide();
				return null;
			}
			wul.css('width',allWidth);
            console.log(allWidth);
			//复制收尾元素，以便循环
			if(op.isLoop){
				$(childs[0].cloneNode(true)).appendTo(wul);
				$(childs[len-1].cloneNode(true)).css({'position':'relative','left':-step*(len+2)}).appendTo(wul);
				that._childs = wul.children();
				/* 重置lazy图片数组 */
				that.lazyimg.push(1);
				that.lazyimg = $(that.lazyimg.concat($(that._childs[len+1]).find(selector)));
			}
			//初始坐标参数
			that.eventInit();
		},
		eventInit : function(){
			var that = this,
			initLeft = that.op.left;
			that._coord = {};  //存储开始的event坐标
			that._moveCoord = {};  //存储移动过程的event坐标
			that._cmax = initLeft;  //最大滑动坐标
			that._cmin = -(that._pages-1)*that._step;  //最小滑动坐标
			initLeft && (that._cmin += initLeft);
			that._current = that._current || 0;  //当前所在页
			that._left = initLeft + that._current*that._step;  //滑动容器的x坐标
			if(that._wrapStatus && that._wrapStatus.length > 0){
				that._statusChild = that._wrapStatus.children();  //状态元素
				that._selChild = that._statusChild[that._current];  //当前状态元素
			}
			that._minpage = 0;  //最小页
			that._maxpage = that._pages -1;  //最大页
			that._isScroll = false;  //滑动
			that._playTimer = null;
		},
		increaseEvent : function(){
			var that = this,
			op = that.op,
			_wrap = that._wrap[0];
			if(!_wrap){return null};
			if(_wrap.addEventListener){
				_wrap.addEventListener('touchstart', that, false);
				_wrap.addEventListener('touchmove', that, false);
				_wrap.addEventListener('touchend', that, false);
			}
			if(op.isPlay){that.begin();}
			if(that._prev){
				that._prev['onclick'] = function(e){that.prev.call(that,e)};
			}
			if(that._next){
				that._next['onclick'] = function(e){that.next.call(that,e)};
			}
			if(that._prev && that._next){
				that.updateArrow();
			}
		},
		handleEvent : function(e){
			var that = this;
			switch(e.type){
				case 'touchstart':
					that.start(e);break;
				case 'touchmove':
					that.move(e);break;
				case 'touchend':
				case 'touchcancel':
					that.end(e);break;
			}
		},
		getImg : function(n){  //还原图片
			var that = this,
			isFirst = n === undefined ? true : false,
			loop = that.op.isLoop,
			lazy = that.op.lazy,
			status = that._status,
			childs = that._childs,
			len = childs.length,
			m = n && parseInt(n,10) || 0,
			lazyimg = that.lazyimg,
			imgarr = [];
			if(lazyimg.length == 0){return;}
			if(m < 0){  //循环
				lazyimg.each(function(n,node){
					if(node == 1) return;
					if(n == (len + m) || n == (len + m - 2)){
						imgarr.push(node);
						lazyimg[n] = 1;
					}
				});
			}
			else{
				m += 1;
				var lisignlen,startn,endn;
				if(status > 1){
					startn = (isFirst ? (m - 1) : m)*status;
					endn = (m + 1)*status;
					/*if(start < len - 1){
						var alen = Math.min((m + 1)*status,len);
						for(var i = start + 1;i<alen;i++){
							imgarr = imgarr.add($(childs[i]).find(selector));
						}
					}*/
				}
				else{
					var lisignlen = $(childs[m-1]).children().length,
					startn = (isFirst ? m-1 : m)*lisignlen,
					endn = (m+1)*lisignlen;
				}
				lazyimg.each(function(n,node){
					if(node == 1) return;
					if(n >= startn && n < endn){
						imgarr.push(node);
						lazyimg[n] = 1;
					}
				});
			}
			//console.log(imgarr);
			if(imgarr.length == 0){return;}
			var src,nobj;
			$(imgarr).each(function(n,item){
				nobj = $(item);
				src = nobj.attr(lazy);
				if(src){
					nobj.attr('src',src);
					nobj.removeAttr(lazy);
				}
			});
		},
		getXY : function(e){
			var touchs = e.touches ? e.touches[0] : e;
			return {x:touchs.clientX,y:touchs.clientY};
		},
		start : function(e){  //触摸开始
			var that = this,
			op = that.op;
			if(that._isScroll){return;}  //滑动未停止，则返回
			that._movestart = undefined;
			that._disX = 0;
			that._coord = that.getXY(e);
			op.ontouchstart && op.ontouchstart();
		},
		move : function(e){
			var that = this,
			op = that.op,
			moveCoord = that.getXY(e),
			disX = that._disX = moveCoord.x - that._coord.x,
			initLeft = op.left,
			tmleft;
			if(typeof that._movestart == 'undefined'){  //第一次执行touchmove
				that._movestart = !!(that._movestart || Math.abs(disX) < Math.abs(moveCoord.y - that._coord.y));
			}
			if(!that._movestart){ //不是上下
				e.preventDefault();
				that.stop();
				if(!op.isLoop && op.bounce){  //不循环且开启回弹
					disX = disX / ( (!that._current && disX > 0 || that._current == that._maxpage && disX < 0 ) ? ( Math.abs(disX) / this._step + 1 ) : 1 );  //增加阻力
				}
				tmleft = initLeft - that._current * that._step + disX;
				if(!that.op.bounce){  //未启动回弹
					if(that._left < that._cmin){tmleft = that._cmin;}
					if(that._left > that._cmax){tmleft = that._cmax;}
				}
				if(hasTransform){
					that._wul.css("-webkit-transform",gv1+tmleft+'px,0'+gv2);
				}
				else{
					that._wul.css("left",tmleft);
				}
				that._disX = disX;
				that._left = tmleft;
			}
			/*if(!that._movestart){
				that._scrollx = Math.abs(newdisx) > Math.abs(newdisy);
				if(that._scrollx){
					e.preventDefault();
					//current = (newdisx > 0) && (_current - 1) || (_current + 1);
					//that.getImg(current);
				}
				that._movestart = true;
			}
			else if(that._scrollx){  //如果是左右
				e.preventDefault();
				newdisx = newdisx / ( (!that._current && newdisx > 0 || that._current == that._maxpage && newdisx < 0 ) ? ( Math.abs(newdisx) / this._step + 1 ) : 1 );  //增加阻力
				tmleft = (initLeft || 0) - that._current * that._step + newdisx;
				
				if(!that.op.bounce){
					if(that._left < that._cmin){tmleft = that._cmin;}
					if(that._left > that._cmax){tmleft = that._cmax;}
				}
				//console.log(newdisx,that._left);
				if(hasTransform){
					that._wul.css("-webkit-transform",gv1+tmleft+'px,0'+gv2);
				}
				else{
					that._wul.css("left",tmleft);
				}
				that._left = tmleft;
			}*/
		},
		end : function(e){
			var that = this,
			op = that.op;
			if(!that._movestart){  //如果执行了move
				e.preventDefault();
				var distance = that._disX;
				if(distance < -10){
					that.next();
				}else if(distance > 10){
					that.prev();
				}
				op.ontouchend && op.ontouchend(that._current);
			}
			//that._coord = {};
			distance = null;
		},
		prev : function(e){
			if(e&&e.preventDefault){e.preventDefault()}
			var that = this;
			that._current -= 1;
			if(that._current < that._minpage){
				if(!that.op.isLoop){that._current = that._minpage;}
				else{that._current = that._minpage - 1;}
			}

            $(document).trigger('slider', [that._current + 1])

			this.touchf(-1);
		},
		next : function(e){
			if(e&&e.preventDefault){e.preventDefault()}
			var that = this;
			that._current += 1;
			if(that._current > that._maxpage){
				if(!that.op.isLoop){that._current = that._maxpage;}
				else{that._current = that._maxpage + 1;}
			}

            $(document).trigger('slider', [that._current + 1])

			that.touchf(1);
		},
		touchf : function(str){
			var that = this,
			op = that.op,
			initLeft = op.left,
			leftt = that._left,
			leftend = initLeft - that._current*that._step;
			that._isScroll = true;
			that.stop();
			//console.log(that._current,leftt,leftend);
			if(leftt == leftend){
				that._isScroll = false;
			}
			else{
				that.getImg(that._current);
				var tob = {};
				tob[gp] = leftend + 'px';
				that._wul.animate(tob,op.anitime,op.easeing,function(){
					if(op.isLoop){
						if(that._current >= (that._maxpage+1)){
							that._current = 0;
						}else if(that._current <= (that._minpage-1)){
							that._current = that._maxpage;
						}
					}
					that._left = initLeft - that._current*that._step;  //重新设置slide的x坐标
					if(hasTransform){
						$(this).css('-webkit-transform',gv1 + that._left + 'px,0'+gv2);
					}
					else{
						$(this).css('left',that._left);
					}
					if(!(!op.isLoop && that._current == that._maxpage)){
						that.begin();
					}
					else{
						that.op.isPlay = false;
					}
					that.update();
					that.updateArrow();
					that._isScroll = false;
					op.transitionEnd && op.transitionEnd(that._current,str);
				});
			}
		},
		update : function(){
			var that = this,
			cls = that.op.cls;
			if(that._statusChild && that._statusChild[that._current] && that._selChild){
				$(that._selChild).removeClass(cls);
				$(that._statusChild[that._current]).addClass(cls);
				that._selChild = that._statusChild[that._current];
			}
		},
		updateArrow : function(){  //左右箭头状态
			var that = this,
			op = that.op,
			prev = that._prev,
			next = that._next;
			if(!prev && !next){return;}
			if(op.isLoop){return;}  //如果是循环，则不需要隐藏
			if(op.isHide){
				if(that._current <= 0){
					prev.style.display = 'none';
				}
				else{
					prev.style.display = '';
				} 
				if(that._current >= that._maxpage){
					next.style.display = 'none';
				}
				else{
					next.style.display = '';
				}
			}
		},
		begin : function(){
			var that = this,
			op = that.op;
			if(op.isPlay){  //自动播放
				that.stop();
				that._playTimer = setInterval(function(){
					that.next();
				},op.inter);
			}
		},
		stop : function(){
			var that = this,
			op = that.op;
			if(op.isPlay && that._playTimer){
				clearInterval(that._playTimer);
				that._playTimer = null;
			}
		},
		destroy : function(){
			var that = this;
			that._container[0].removeAttribute('isLoad');
			if(that._pages <= 1){return;}
			//that._wrap[0][this._touchstart] = null;
			var _wrap = that._wrap[0];
			_wrap.removeEventListener('touchstart', that, false);
			_wrap.removeEventListener('touchmove', that, false);
			_wrap.removeEventListener('touchend', that, false);
			if(that._prev){that._prev['onclick'] = null;}
			if(that._next){that._next['onclick'] = null;}
		}
	});
	$.touchSlider.cache = [];
	$.fn.slider = function(options){
		return this.each(function(n,item){
			if(!item.getAttribute('isLoad')){
				item.setAttribute('isLoad',true);
				$.touchSlider.cache.push(new $.touchSlider(options,item));
			}
		});
	}
	$.touchSlider.destroy = function(){
		var cache = $.touchSlider.cache,
		len = cache.length;
		//console.log($.touchSlider.cache);
		if(len < 1){return;}
		for(var i=0;i<len;i++){
			cache[i].destroy();
		}
		$.touchSlider.cache = [];
		//console.log($.touchSlider.cache);
	}
	return $.touchSlider;
})(Zepto,window.css3,window);
(function ($, window) {
    var $content = $('#wrapper'),
        $container = $('#container'),
        $wheader = $content.find('header'),
        $wbox = $content.find('.box')
        ;

//    alert(window.devicePixelRatio);
//    alert($(document).css('-webkit-min-device-pixel-ratio'));

    //神
    var God = {
        init:function () {
            God.getApple();
            God.confirmPeople();
            God.action();
        },
        //法官出题.
        getApple:function () {

            var header = '<figure class="caption">出题卡</figure>\
                            <div class="set">\
                          </div>';

            $content.on('tap', '.pen', function (e) {
                $wheader.html(header);
                $wbox.removeClass('box-start').addClass('box-ready').html(JST['view/s-1']());
            });
        },
        //确认人数.
        confirmPeople:function () {
            $content.on('tap', '#setTopic', function (e) {
                $('header figure').text('确认人数');
                $wbox.removeClass('box-ready').addClass('box-game').html(JST['view/s-2']());
            });
        },
        //开始游戏.
        action:function () {

        }
    }

    God.init();

    var stage = {
        init:function () {
            stage.set();
            stage.registerShake();
            stage.shake();
            stage.hideAddrBar();
            stage.help();
        },
        //设置.
        set:function () {
            $content.on('tap', '.set', function (e) {
                alert('We are striving for that!');
            });
        },

        //摇晃.
        registerShake:function () {
            //shake 组件
            $.fn.shake = function (options) {
                var setting = {
                    sensitivity:15,
                    timer:200,
                    position:{x1:0, x2:0, y1:0, y2:0, z1:0, z2:0 },
                    action:{}
                };
                if (options) {
                    $.extend(setting, options);
                }
                ;
                var SHAKE = {

                    _timer:{
                    },
                    checkUA:function () {
                        if (typeof window.DeviceOrientationEvent != 'undefined') {
                            if (typeof window.DeviceMotionEvent != 'undefined') {
                                //window.onorientationchange = SD.unit.updateOrientation;
                                window.addEventListener('devicemotion', function (e) {
                                    SHAKE.get(e)
                                }, false);
                                SHAKE.start();
                                return true;
                            } else {
                                alert("对不起您的设备不支持摇动");
                                return false;
                            }
                        } else {
                            alert("对不起您的设备不支持摇动");
                            return false;
                        }
                    },
                    // 晃动时在 x y z 方向上的加速度
                    get:function (e) {
                        setting.position.x1 = e.accelerationIncludingGravity.x;
                        setting.position.y1 = e.accelerationIncludingGravity.y;
                        setting.position.z1 = e.accelerationIncludingGravity.z;
                    },
                    // 判断晃动是否满足敏感系数，满足的话更新 x2 y2 z2
                    isMeetSensitivity:function () {
                        var change = Math.abs(setting.position.x1 - setting.position.x2 + setting.position.y1 - setting.position.y2 + setting.position.z1 - setting.position.z2);
                        if (change > setting.sensitivity) {
                            //alert('Shake!');
                            setting.action();
                            //console.log(typeof(setting.action))
                        }
                        // 更新
                        setting.position.x2 = setting.position.x1;
                        setting.position.y2 = setting.position.y1;
                        setting.position.z2 = setting.position.z1;
                    },
                    start:function () {
                        SHAKE._timer = setInterval(function () {
                            SHAKE.isMeetSensitivity()
                        }, setting.timer);
                    },
                    stop:function () {
                        clearInterval(SHAKE._timer)
                    }
                };
                SHAKE.checkUA();
            }
        },

        shake:function () {
            $(window).shake({action:function () {

                alert(1)
            }});
        },

        //滑动.
        slider:function () {

            $('.slider').slider({ margin:0, isPlay:false, lazy:'data-img'});

            var titleTable = {
                1:'开始游戏',
                2:'领卡片',
                3:'确认身份',
                4:'天黑闭眼',
                5:'依次阐述',
                6:'投票',
                7:'遗言',
                8:'游戏结束'
            }

            var $cbox =  $container.find('.box'),
                $ccaption = $container.find('.caption');

            //slider.
            $(document).on('slider', function (e, index) {

                $cbox.animate({opacity:0}, 500, 'ease-out', function () {
                    $cbox.html(JST['view/help-switcher']({index:index})).animate({
                        opacity:1
                    }, 600, 'ease-out')
                });

                $ccaption.animate({
                    translateX:'-300px'
                }, 500, 'ease-out', function () {
                    $ccaption.text(titleTable[index]).animate({
                        translateX:"0px"
                    }, 600, 'ease-out')
                })
            })
        },

        //隐藏地址栏.
        hideAddrBar: function() {

            $(function(){
                // Set a timeout...
                setTimeout(function () {
                    window.scrollTo(0, -100);
                }, 100);
            });
        },


        //帮助.
        help: function(){
            $(document).on('tap','.help-man',function(e){

                $content.addClass('hide');

                $container.html(JST['view/help']()).removeClass('hide');

                //推迟初始化的时间.
                stage.slider();

                //注册关闭事件.
                stage.close();
            });
        },

        close: function(){
            $container.on('tap','.close',function(e){
                $container.addClass('hide');
                $content.removeClass('hide');
            });
        }
    }

    stage.init();

    var gamer = {
        init:function () {
            gamer.getApple();
            gamer.userTouch();
            gamer.waiting();
            gamer.action();
        },
        getApple:function () {
            var header = '<figure class="caption">领卡片</figure>\
                            <div class="set">\
                          </div>';

            $content.on('tap', '.btn', function (e) {
                $wheader.html(header);
                $wbox.removeClass('box-start').addClass('box-game').html(JST['view/w-1']());
            });
        },
        userTouch: function(){
            $content.on('touchstart', '.face', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $('.card').removeClass('hide');
            });

            $content.on('touchend', '.face', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $('.card').addClass('hide');
            });
        },
        waiting:function () {
            //玩家确认口令.
            $content.on('tap', '#confirm', function (e) {
                $wbox.html(JST['view/w-2']());
            });
        },
        action:function () {
            $content.on('tap', '#startGame', function (e) {
                this.style.visibility = 'hidden';
                $('header figure').text('游戏中');
            });
        }
    }

    gamer.init();

})(Zepto, window);







