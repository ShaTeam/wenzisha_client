function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<header>\r\n    <figure class=\"caption\">开始游戏</figure>\r\n    <div class=\"close\">\r\n    </div>\r\n</header>\r\n<div class=\"container\">\r\n    <dt class=\"help-tip\">\r\n        <dl>这是一个大家坐在一起的文字游戏！首先要集齐至少<strong>7</strong>个人用浏览器打开<em>www.wenzisha.com</em>其中一人点击出题按钮，其余人进入游戏准备抓鬼。</dl>\r\n    </dt>\r\n</div>\r\n\r\n<footer>\r\n    <div class=\"slider\">\r\n        <div class=\"help-man\">\r\n        </div>\r\n\r\n        <div class=\"slider-status\">\r\n        <span class=\"sel\"></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n    </div>\r\n        <div class=\"slider-outer\">\r\n        <ul class=\"slider-wrap\">\r\n            <li>\r\n                <img data-img=\"./image/1.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/2.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/3.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/4.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/5.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/6.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/7.png\" src=\"./image/1.png\">\r\n            </li>\r\n            <li>\r\n                <img data-img=\"./image/8.png\" src=\"./image/1.png\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    </div>\r\n</footer>", filename: "view/help-main.jst.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<header>\n    <figure class="caption">开始游戏</figure>\n    <div class="close">\n    </div>\n</header>\n<div class="container">\n    <dt class="help-tip">\n        <dl>这是一个大家坐在一起的文字游戏！首先要集齐至少<strong>7</strong>个人用浏览器打开<em>www.wenzisha.com</em>其中一人点击出题按钮，其余人进入游戏准备抓鬼。</dl>\n    </dt>\n</div>\n\n<footer>\n    <div class="slider">\n        <div class="help-man">\n        </div>\n\n        <div class="slider-status">\n        <span class="sel"></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n        <div class="slider-outer">\n        <ul class="slider-wrap">\n            <li>\n                <img data-img="./image/1.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/2.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/3.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/4.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/5.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/6.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/7.png" src="./image/1.png">\n            </li>\n            <li>\n                <img data-img="./image/8.png" src="./image/1.png">\n            </li>\n        </ul>\n    </div>\n    </div>\n</footer>'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}if(typeof module != 'undefined') {  module.exports = anonymous;} else {  window.JST = window.JST || {};  window.JST["view/help-main"] = anonymous;}
function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<% if(index == 1){ %>\r\n<dt class=\"help-tip\">\r\n    <dl>这是一个大家坐在一起的文字游戏！首先要集齐至少<strong>7</strong>个人用浏览器打开<em>www.wenzisha.com</em>其中一人点击出题按钮，其余人进入游戏准备抓鬼。</dl>\r\n</dt>\r\n<% }else if(index == 2){ %>\r\n<dt class=\"help-tip\">\r\n    <dl>法官进入出题界面,并将领卡密码告诉大家，其他人输入密码领取卡片。</dl>\r\n    <dl>法官出题需保证两个词<span>字数一致，强烈相关。</span></dl>\r\n</dt>\r\n<% }else if(index == 3){ %>\r\n<dt class=\"help-tip\">\r\n    <dl>所有人确认好自己的身份卡</dl>\r\n</dt>\r\n<% }else if(index == 4){ %>\r\n<dt class=\"help-tip\">\r\n    <dl>法官：天黑请闭眼，鬼请睁眼，鬼需要互相认识同伴，并指认开始阐述的起点。（通常以顺时针方向进行）</dl>\r\n</dt>\r\n<% }else if(index == 5){ %>\r\n<dt class=\"help-tip\">\r\n    从鬼指认的人开始阐述，平民和傻子需要尽量阐述的让同伴理解你的词，但不要让鬼猜到你的词。\r\n</dt>\r\n<% }else if(index == 6){ %>\r\n<dt class=\"help-tip\">\r\n    阐述一轮结束后，法官需要组织大家进行投票谁是鬼。票数最多的人被投死，如票数相同，则继续阐述再进行投票，直到投死一个人为止。\r\n</dt>\r\n<% }else if(index == 7){ %>\r\n<dt class=\"help-tip\">\r\n    <dl>被投死的人，需要承认是否是鬼，如回答不是鬼，则没有遗言；</dl>\r\n    <dl>如回答是鬼，则可以向法官问一个可以用“是”或“否”作答的问题，法官将如实回答。</dl>\r\n</dt>\r\n<% }else if(index == 8){ %>\r\n<dt class=\"help-tip\">\r\n    <dl>当鬼猜出词时，鬼胜；</dl>\r\n    <dl>当平民和傻子的人数少于鬼的人数时，鬼胜;</dl>\r\n    <dl>当平民和傻子将鬼全部投死，平民和傻子胜。</dl>\r\n</dt>\r\n<% }else{ %>\r\n<dt class=\"help-tip\">\r\n    <dl>error</dl>\r\n</dt>\r\n<% } %>\r\n\r\n", filename: "view/help-switcher.jst.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('');__stack.lineno=1; if(index == 1){ ; buf.push('\n<dt class="help-tip">\n    <dl>这是一个大家坐在一起的文字游戏！首先要集齐至少<strong>7</strong>个人用浏览器打开<em>www.wenzisha.com</em>其中一人点击出题按钮，其余人进入游戏准备抓鬼。</dl>\n</dt>\n');__stack.lineno=5; }else if(index == 2){ ; buf.push('\n<dt class="help-tip">\n    <dl>法官进入出题界面,并将领卡密码告诉大家，其他人输入密码领取卡片。</dl>\n    <dl>法官出题需保证两个词<span>字数一致，强烈相关。</span></dl>\n</dt>\n');__stack.lineno=10; }else if(index == 3){ ; buf.push('\n<dt class="help-tip">\n    <dl>所有人确认好自己的身份卡</dl>\n</dt>\n');__stack.lineno=14; }else if(index == 4){ ; buf.push('\n<dt class="help-tip">\n    <dl>法官：天黑请闭眼，鬼请睁眼，鬼需要互相认识同伴，并指认开始阐述的起点。（通常以顺时针方向进行）</dl>\n</dt>\n');__stack.lineno=18; }else if(index == 5){ ; buf.push('\n<dt class="help-tip">\n    从鬼指认的人开始阐述，平民和傻子需要尽量阐述的让同伴理解你的词，但不要让鬼猜到你的词。\n</dt>\n');__stack.lineno=22; }else if(index == 6){ ; buf.push('\n<dt class="help-tip">\n    阐述一轮结束后，法官需要组织大家进行投票谁是鬼。票数最多的人被投死，如票数相同，则继续阐述再进行投票，直到投死一个人为止。\n</dt>\n');__stack.lineno=26; }else if(index == 7){ ; buf.push('\n<dt class="help-tip">\n    <dl>被投死的人，需要承认是否是鬼，如回答不是鬼，则没有遗言；</dl>\n    <dl>如回答是鬼，则可以向法官问一个可以用“是”或“否”作答的问题，法官将如实回答。</dl>\n</dt>\n');__stack.lineno=31; }else if(index == 8){ ; buf.push('\n<dt class="help-tip">\n    <dl>当鬼猜出词时，鬼胜；</dl>\n    <dl>当平民和傻子的人数少于鬼的人数时，鬼胜;</dl>\n    <dl>当平民和傻子将鬼全部投死，平民和傻子胜。</dl>\n</dt>\n');__stack.lineno=37; }else{ ; buf.push('\n<dt class="help-tip">\n    <dl>error</dl>\n</dt>\n');__stack.lineno=41; } ; buf.push('\n\n'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}if(typeof module != 'undefined') {  module.exports = anonymous;} else {  window.JST = window.JST || {};  window.JST["view/help-switcher"] = anonymous;}
function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<!--出题卡-->\r\n<div class=\"word\">\r\n     <span>\r\n         <em></em><figure><input id=\"roomId\" type=\"text\" tabindex=\"-1\" readonly=\"true\"></figure>\r\n     </span>\r\n</div>\r\n<ul class=\"putin\">\r\n    <li>\r\n        <textarea id=\"orTip\" wrap=\"physical\" rows=\"2\" tabindex=\"2\" placeholder=\"点此输入\"></textarea>\r\n    </li>\r\n    <li>\r\n        <textarea id=\"idiTip\" wrap=\"physical\" rows=\"2\" tabindex=\"3\" placeholder=\"点此输入\"></textarea>\r\n    </li>\r\n    <li>\r\n        <textarea id=\"ghostTip\" wrap=\"physical\" rows=\"2\" tabindex=\"3\"  value=\"0\" readonly=\"true\"></textarea>\r\n    </li>\r\n</ul>\r\n\r\n<section class=\"fire\">\r\n    <div class=\"btn\">\r\n        <span id=\"setTopic\">\r\n            出题\r\n        </span>\r\n    </div>\r\n</section>", filename: "view/s-1.jst.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<!--出题卡-->\n<div class="word">\n     <span>\n         <em></em><figure><input id="roomId" type="text" tabindex="-1" readonly="true"></figure>\n     </span>\n</div>\n<ul class="putin">\n    <li>\n        <textarea id="orTip" wrap="physical" rows="2" tabindex="2" placeholder="点此输入"></textarea>\n    </li>\n    <li>\n        <textarea id="idiTip" wrap="physical" rows="2" tabindex="3" placeholder="点此输入"></textarea>\n    </li>\n    <li>\n        <textarea id="ghostTip" wrap="physical" rows="2" tabindex="3"  value="0" readonly="true"></textarea>\n    </li>\n</ul>\n\n<section class="fire">\n    <div class="btn">\n        <span id="setTopic">\n            出题\n        </span>\n    </div>\n</section>'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}if(typeof module != 'undefined') {  module.exports = anonymous;} else {  window.JST = window.JST || {};  window.JST["view/s-1"] = anonymous;}
function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<!--出题卡-->\r\n<div class=\"word\">\r\n     <p>\r\n         <strong><%=gamerNum %></strong>人已经领取卡片<br>\r\n         全部人领取后可以开始游戏\r\n     </p>\r\n</div>\r\n<ul class=\"putin god\">\r\n    <li>\r\n        <span><%=peopleWord || ' ' %></span>\r\n    </li>\r\n    <li>\r\n        <span><%=idiotWord || ' '%></span>\r\n    </li>\r\n    <li>\r\n        <span><%=idiotWord.toString().trim().length %></span>\r\n    </li>\r\n</ul>\r\n\r\n<section class=\"fire\">\r\n    <div class=\"btn\">\r\n        <span id=\"startGame\" class=\"wait\">\r\n            等待玩家\r\n        </span>\r\n    </div>\r\n</section>", filename: "view/s-2.jst.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<!--出题卡-->\n<div class="word">\n     <p>\n         <strong>', escape((__stack.lineno=4, gamerNum )), '</strong>人已经领取卡片<br>\n         全部人领取后可以开始游戏\n     </p>\n</div>\n<ul class="putin god">\n    <li>\n        <span>', escape((__stack.lineno=10, peopleWord || ' ' )), '</span>\n    </li>\n    <li>\n        <span>', escape((__stack.lineno=13, idiotWord || ' ')), '</span>\n    </li>\n    <li>\n        <span>', escape((__stack.lineno=16, idiotWord.toString().trim().length )), '</span>\n    </li>\n</ul>\n\n<section class="fire">\n    <div class="btn">\n        <span id="startGame" class="wait">\n            等待玩家\n        </span>\n    </div>\n</section>'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}if(typeof module != 'undefined') {  module.exports = anonymous;} else {  window.JST = window.JST || {};  window.JST["view/s-2"] = anonymous;}
function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<div class=\"word\">\r\n     <span>\r\n         <em></em><figure><input type=\"text\" placeholder=\"输入取卡口令\"><i id=\"confirm\">OK</i></figure>\r\n     </span>\r\n</div>\r\n\r\n<div class=\"card hide\">\r\n   <span>\r\n       请输入<br>口令\r\n   </span>\r\n\r\n</div>\r\n<div class=\"face\">\r\n\r\n</div>\r\n<span class=\"tip\">\r\n   请输入口令\r\n</span>\r\n\r\n", filename: "view/w-1.jst.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<div class="word">\n     <span>\n         <em></em><figure><input type="text" placeholder="输入取卡口令"><i id="confirm">OK</i></figure>\n     </span>\n</div>\n\n<div class="card hide">\n   <span>\n       请输入<br>口令\n   </span>\n\n</div>\n<div class="face">\n\n</div>\n<span class="tip">\n   请输入口令\n</span>\n\n'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}if(typeof module != 'undefined') {  module.exports = anonymous;} else {  window.JST = window.JST || {};  window.JST["view/w-1"] = anonymous;}
function anonymous(locals, filters, escape) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};
var __stack = { lineno: 1, input: "<!--0 - UNKOWN-->\r\n<!--1 - GOD-->\r\n<!--2 - PEOPLE-->\r\n<!--3 - ONI-->\r\n<!--4 - IDIOT-->\r\n\r\n<div class=\"word\">\r\n\r\n</div>\r\n\r\n<% if(character === -1) { %>\r\n<div class=\"card hide\">\r\n    <figure>\r\n        <p>出题中</p>\r\n    </figure>\r\n</div>\r\n<% } %>\r\n\r\n<% if(character === 2 || character === 4) { %>\r\n<div class=\"card peopleCard hide\">\r\n    <figure>\r\n        <p><%= word%></p>\r\n    </figure>\r\n</div>\r\n<% } %>\r\n\r\n<% if(character === 3) { %>\r\n<div class=\"card ghostCard hide\">\r\n    <figure>\r\n        <p><%= word%></p>\r\n    </figure>\r\n</div>\r\n<% } %>\r\n\r\n<div class=\"face\">\r\n   <span>\r\n       ?\r\n   </span>\r\n</div>\r\n\r\n<span class=\"tip\">\r\n   <% if(typeof playerNum !== undefined) {%>\r\n   <%= playerNum%>人已经加入房间\r\n\r\n   <% } %>\r\n</span>\r\n", filename: "view/w-2.jst.ejs" };
function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;
  
  throw err;
}
try {
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('<!--0 - UNKOWN-->\n<!--1 - GOD-->\n<!--2 - PEOPLE-->\n<!--3 - ONI-->\n<!--4 - IDIOT-->\n\n<div class="word">\n\n</div>\n\n');__stack.lineno=11; if(character === -1) { ; buf.push('\n<div class="card hide">\n    <figure>\n        <p>出题中</p>\n    </figure>\n</div>\n');__stack.lineno=17; } ; buf.push('\n\n');__stack.lineno=19; if(character === 2 || character === 4) { ; buf.push('\n<div class="card peopleCard hide">\n    <figure>\n        <p>', escape((__stack.lineno=22,  word)), '</p>\n    </figure>\n</div>\n');__stack.lineno=25; } ; buf.push('\n\n');__stack.lineno=27; if(character === 3) { ; buf.push('\n<div class="card ghostCard hide">\n    <figure>\n        <p>', escape((__stack.lineno=30,  word)), '</p>\n    </figure>\n</div>\n');__stack.lineno=33; } ; buf.push('\n\n<div class="face">\n   <span>\n       ?\n   </span>\n</div>\n\n<span class="tip">\n   ');__stack.lineno=42; if(typeof playerNum !== undefined) {; buf.push('\n   ', escape((__stack.lineno=43,  playerNum)), '人已经加入房间\n\n   ');__stack.lineno=45; } ; buf.push('\n</span>\n'); })();
} 
return buf.join('');
} catch (err) {
  rethrow(err, __stack.input, __stack.filename, __stack.lineno);
}
}if(typeof module != 'undefined') {  module.exports = anonymous;} else {  window.JST = window.JST || {};  window.JST["view/w-2"] = anonymous;}