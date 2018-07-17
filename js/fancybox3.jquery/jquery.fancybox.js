!function(g,m,b,y){"use strict";if(!b)return;var t,s={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small"></button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:b.noop,afterLoad:b.noop,beforeMove:b.noop,afterMove:b.noop,onComplete:b.noop,onInit:b.noop,beforeClose:b.noop,afterClose:b.noop,onActivate:b.noop,onDeactivate:b.noop},d=b(g),a=b(m),i=0,n=function(t){return t&&t.hasOwnProperty&&t instanceof b},v=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||function(t){g.setTimeout(t,1e3/60)},r=function(t,e,o){var n=this;n.opts=b.extend(!0,{index:o},s,e||{}),n.id=n.opts.id||++i,n.group=[],n.currIndex=parseInt(n.opts.index,10)||0,n.prevIndex=null,n.prevPos=null,n.currPos=0,n.firstRun=null,n.createGroup(t),n.group.length&&(n.$lastFocus=b(m.activeElement).blur(),n.slides={},n.init(t))};function e(t){var e=t.currentTarget,o=t.data?t.data.options:{},n=t.data?t.data.items:[],s="",a=0;t.preventDefault(),t.stopPropagation(),b(e).attr("data-fancybox")&&(s=b(e).data("fancybox")),s?a=(n=n.length?n.filter('[data-fancybox="'+s+'"]'):b("[data-fancybox="+s+"]")).index(e):n=[e],b.fancybox.open(n,o,a)}b.extend(r.prototype,{init:function(){var t,e,o=this,n=!1;o.scrollTop=a.scrollTop(),o.scrollLeft=a.scrollLeft(),b.fancybox.getInstance()||(t=b("body").width(),b("html").addClass("fancybox-enabled"),b.fancybox.isTouch?(b.each(o.group,function(t,e){if("image"!==e.type&&"iframe"!==e.type)return!(n=!0)}),n&&b("body").css({position:"fixed",width:t,top:-1*o.scrollTop})):1<(t=b("body").width()-t)&&b('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+t+"px; }").appendTo("head")),e=b(o.opts.baseTpl).attr("id","fancybox-container-"+o.id).data("FancyBox",o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl),o.$refs={container:e,bg:e.find(".fancybox-bg"),controls:e.find(".fancybox-controls"),buttons:e.find(".fancybox-buttons"),slider_wrap:e.find(".fancybox-slider-wrap"),slider:e.find(".fancybox-slider"),caption:e.find(".fancybox-caption")},o.trigger("onInit"),o.activate(),o.current||o.jumpTo(o.currIndex)},createGroup:function(t){var l=this,e=b.makeArray(t);b.each(e,function(t,e){var o,n,s,a,i={},r={},c=[];b.isPlainObject(e)?r=(i=e).opts||{}:"object"===b.type(e)&&b(e).length?(r="options"in(c=(o=b(e)).data())?c.options:{},r="object"===b.type(r)?r:{},i.type="type"in c?c.type:r.type,i.src="src"in c?c.src:r.src||o.attr("href"),r.width="width"in c?c.width:r.width,r.height="height"in c?c.height:r.height,r.thumb="thumb"in c?c.thumb:r.thumb,r.selector="selector"in c?c.selector:r.selector,"srcset"in c&&(r.image={srcset:c.srcset}),r.$orig=o):i={type:"html",content:e+""},i.opts=b.extend(!0,{},l.opts,r),n=i.type,s=i.src||"",n||(i.content?n="html":s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?n="image":s.match(/\.(pdf)((\?|#).*)?$/i)?n="pdf":"#"===s.charAt(0)&&(n="inline"),i.type=n),i.index=l.group.length,i.opts.$orig&&!i.opts.$orig.length&&delete i.opts.$orig,!i.opts.$thumb&&i.opts.$orig&&(i.opts.$thumb=i.opts.$orig.find("img:first")),i.opts.$thumb&&!i.opts.$thumb.length&&delete i.opts.$thumb,"function"===b.type(i.opts.caption)?i.opts.caption=i.opts.caption.apply(e,[l,i]):"caption"in c?i.opts.caption=c.caption:r.$orig&&(i.opts.caption=o.attr("title")),i.opts.caption=i.opts.caption===y?"":i.opts.caption+"","ajax"===n&&1<(a=s.split(/\s+/,2)).length&&(i.src=a.shift(),i.opts.selector=a.shift()),"auto"==i.opts.smallBtn&&(-1<b.inArray(n,["html","inline","ajax"])?(i.opts.buttons=!1,i.opts.smallBtn=!0):i.opts.smallBtn=!1),"pdf"===n&&(i.type="iframe",i.opts.closeBtn=!0,i.opts.smallBtn=!1,i.opts.iframe.preload=!1),i.opts.modal&&b.extend(!0,i.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0}),l.group.push(i)})},addEvents:function(){var n=this;n.removeEvents(),n.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),n.close(t)}).on("click.fb-previous","[data-fancybox-previous]",function(t){t.stopPropagation(),t.preventDefault(),n.previous()}).on("click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),n.next()}),b(g).on("orientationchange.fb resize.fb",function(t){v(function(){t&&t.originalEvent&&"resize"===t.originalEvent.type?n.update():(n.$refs.slider_wrap.hide(),v(function(){n.$refs.slider_wrap.show(),n.update()}))})}),a.on("focusin.fb",function(t){var e=b.fancybox?b.fancybox.getInstance():null;!e||b(t.target).hasClass("fancybox-container")||b.contains(e.$refs.container[0],t.target)||(t.stopPropagation(),e.focus(),d.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft))}),a.on("keydown.fb",function(t){var e=n.current,o=t.keyCode||t.which;if(e&&e.opts.keyboard&&!b(t.target).is("input")&&!b(t.target).is("textarea")){if(8===o||27===o)return t.preventDefault(),void n.close(t);switch(o){case 37:case 38:t.preventDefault(),n.previous();break;case 39:case 40:t.preventDefault(),n.next();break;case 80:case 32:t.preventDefault(),n.SlideShow&&(t.preventDefault(),n.SlideShow.toggle());break;case 70:n.FullScreen&&(t.preventDefault(),n.FullScreen.toggle());break;case 71:n.Thumbs&&(t.preventDefault(),n.Thumbs.toggle())}}})},removeEvents:function(){d.off("scroll.fb resize.fb orientationchange.fb"),a.off("keydown.fb focusin.fb click.fb-close"),this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")},previous:function(t){this.jumpTo(this.currIndex-1,t)},next:function(t){this.jumpTo(this.currIndex+1,t)},jumpTo:function(t,e){var o,n,s,a,i=this;if(o=i.firstRun=null===i.firstRun,n=s=t=parseInt(t,10),a=!!i.current&&i.current.opts.loop,!i.isAnimating&&(n!=i.currIndex||o)){if(1<i.group.length&&a)n=(n%=i.group.length)<0?i.group.length+n:n,2==i.group.length?s=t-i.currIndex+i.currPos:(s=n-i.currIndex+i.currPos,Math.abs(i.currPos-(s+i.group.length))<Math.abs(i.currPos-s)?s+=i.group.length:Math.abs(i.currPos-(s-i.group.length))<Math.abs(i.currPos-s)&&(s-=i.group.length));else if(!i.group[n])return void i.update(!1,!1,e);i.current&&(i.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),i.updateSlide(i.current,!0)),i.prevIndex=i.currIndex,i.prevPos=i.currPos,i.currIndex=n,i.currPos=s,i.current=i.createSlide(s),1<i.group.length&&((i.opts.loop||0<=s-1)&&i.createSlide(s-1),(i.opts.loop||s+1<i.group.length)&&i.createSlide(s+1)),i.current.isMoved=!1,i.current.isComplete=!1,e=parseInt(e===y?1.5*i.current.opts.speed:e,10),i.trigger("beforeMove"),i.updateControls(),o&&(i.current.$slide.addClass("fancybox-slide--current"),i.$refs.container.show(),v(function(){i.$refs.bg.css("transition-duration",i.current.opts.speed+"ms"),i.$refs.container.addClass("fancybox-container--ready")})),i.update(!0,!1,o?0:e,function(){i.afterMove()}),i.loadSlide(i.current),o&&i.current.$ghost||i.preload()}},createSlide:function(t){var e,o,n,s=this;if(o=(o=t%s.group.length)<0?s.group.length+o:o,!s.slides[t]&&s.group[o]){if(s.opts.loop&&2<s.group.length)for(var a in s.slides)if(s.slides[a].index===o)return(n=s.slides[a]).pos=t,s.slides[t]=n,delete s.slides[a],s.updateSlide(n),n;e=b('<div class="fancybox-slide"></div>').appendTo(s.$refs.slider),s.slides[t]=b.extend(!0,{},s.group[o],{pos:t,$slide:e,isMoved:!1,isLoaded:!1})}return s.slides[t]},zoomInOut:function(e,t,o){var n,s,a,i,r,c=this,l=c.current,d=l.$placeholder,p=l.opts.opacity,u=l.opts.$thumb,h=u?u.offset():0,f=l.$slide.offset();return!!(d&&l.isMoved&&h&&(i=u,"function"==typeof b&&i instanceof b&&(i=i[0]),0<(r=i.getBoundingClientRect()).bottom&&0<r.right&&r.left<(g.innerWidth||m.documentElement.clientWidth)&&r.top<(g.innerHeight||m.documentElement.clientHeight)))&&(!("In"===e&&!c.firstRun)&&(b.fancybox.stop(d),c.isAnimating=!0,n={top:h.top-f.top+parseFloat(u.css("border-top-width")||0),left:h.left-f.left+parseFloat(u.css("border-left-width")||0),width:u.width(),height:u.height(),scaleX:1,scaleY:1},"auto"==p&&(p=.1<Math.abs(l.width/l.height-n.width/n.height)),"In"===e?(s=n,(a=c.getFitPos(l)).scaleX=a.width/s.width,a.scaleY=a.height/s.height,p&&(s.opacity=.1,a.opacity=1)):(s=b.fancybox.getTranslate(d),a=n,l.$ghost&&(l.$ghost.show(),l.$image&&l.$image.remove()),s.scaleX=s.width/a.width,s.scaleY=s.height/a.height,s.width=a.width,s.height=a.height,p&&(a.opacity=0)),c.updateCursor(a.width,a.height),delete a.width,delete a.height,b.fancybox.setTranslate(d,s),d.show(),c.trigger("beforeZoom"+e),d.css("transition","all "+t+"ms"),b.fancybox.setTranslate(d,a),setTimeout(function(){var t;d.css("transition","none"),(t=b.fancybox.getTranslate(d)).scaleX=1,t.scaleY=1,b.fancybox.setTranslate(d,t),c.trigger("afterZoom"+e),o.apply(c),c.isAnimating=!1},t),!0))},canPan:function(){var t=this.current,e=t.$placeholder,o=!1;return e&&(o=this.getFitPos(t),o=1<Math.abs(e.width()-o.width)||1<Math.abs(e.height()-o.height)),o},isScaledDown:function(){var t=this.current,e=t.$placeholder,o=!1;return e&&(o=(o=b.fancybox.getTranslate(e)).width<t.width||o.height<t.height),o},scaleToActual:function(t,e,o){var n,s,a,i,r,c=this,l=c.current,d=l.$placeholder,p=parseInt(l.$slide.width(),10),u=parseInt(l.$slide.height(),10),h=l.width,f=l.height;d&&(c.isAnimating=!0,t=t===y?.5*p:t,e=e===y?.5*u:e,i=h/(n=b.fancybox.getTranslate(d)).width,r=f/n.height,s=.5*p-.5*h,a=.5*u-.5*f,p<h&&(0<(s=n.left*i-(t*i-t))&&(s=0),s<p-h&&(s=p-h)),u<f&&(0<(a=n.top*r-(e*r-e))&&(a=0),a<u-f&&(a=u-f)),c.updateCursor(h,f),b.fancybox.animate(d,null,{top:a,left:s,scaleX:i,scaleY:r},o||l.opts.speed,function(){c.isAnimating=!1}))},scaleToFit:function(t){var e,o=this,n=o.current,s=n.$placeholder;s&&(o.isAnimating=!0,e=o.getFitPos(n),o.updateCursor(e.width,e.height),b.fancybox.animate(s,null,{top:e.top,left:e.left,scaleX:e.width/s.width(),scaleY:e.height/s.height()},t||n.opts.speed,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,n,s,a,i=t.$placeholder||t.$content,r=t.width,c=t.height,l=t.opts.margin;return!(!i||!i.length||!r&&!c)&&("number"===b.type(l)&&(l=[l,l]),2==l.length&&(l=[l[0],l[1],l[0],l[1]]),d.width()<800&&(l=[0,0,0,0]),e=parseInt(t.$slide.width(),10)-(l[1]+l[3]),o=parseInt(t.$slide.height(),10)-(l[0]+l[2]),n=Math.min(1,e/r,o/c),s=Math.floor(n*r),a=Math.floor(n*c),{top:Math.floor(.5*(o-a))+l[0],left:Math.floor(.5*(e-s))+l[3],width:s,height:a})},update:function(t,o,e,n){var s,a=this;!0!==a.isAnimating&&a.current&&(s=a.current.pos*Math.floor(a.current.$slide.width())*-1-a.current.pos*a.current.opts.gutter,e=parseInt(e,10)||0,b.fancybox.stop(a.$refs.slider),!1===t?a.updateSlide(a.current,o):b.each(a.slides,function(t,e){a.updateSlide(e,o)}),e?b.fancybox.animate(a.$refs.slider,null,{top:0,left:s},e,function(){a.current.isMoved=!0,"function"===b.type(n)&&n.apply(a)}):(b.fancybox.setTranslate(a.$refs.slider,{top:0,left:s}),a.current.isMoved=!0,"function"===b.type(n)&&n.apply(a)))},updateSlide:function(t,e){var o,n=this,s=t.$placeholder;(t=t||n.current)&&!n.isClosing&&((o=t.pos*Math.floor(t.$slide.width())+t.pos*t.opts.gutter)!==t.leftPos&&(b.fancybox.setTranslate(t.$slide,{top:0,left:o}),t.leftPos=o),!1!==e&&s&&(b.fancybox.setTranslate(s,n.getFitPos(t)),t.pos===n.currPos&&n.updateCursor()),t.$slide.trigger("refresh"),n.trigger("onUpdate",t))},updateCursor:function(t,e){var o=this,n=o.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");!o.isClosing&&o.opts.touch&&((t!==y&&e!==y?t<o.current.width&&e<o.current.height:o.isScaledDown())?n.addClass("fancybox-controls--canzoomIn"):o.group.length<2?n.addClass("fancybox-controls--canzoomOut"):n.addClass("fancybox-controls--canGrab"))},loadSlide:function(o){var t,e,n,s=this;if(o&&!o.isLoaded&&!o.isLoading){switch(o.isLoading=!0,s.trigger("beforeLoad",o),t=o.type,(e=o.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--"+(t||"unknown")).addClass(o.opts.slideClass),t){case"image":s.setImage(o);break;case"iframe":s.setIframe(o);break;case"html":s.setContent(o,o.content);break;case"inline":b(o.src).length?s.setContent(o,b(o.src)):s.setError(o);break;case"ajax":s.showLoading(o),n=b.ajax(b.extend({},o.opts.ajax.settings,{url:o.src,success:function(t,e){"success"===e&&s.setContent(o,t)},error:function(t,e){t&&"abort"!==e&&s.setError(o)}})),e.one("onReset",function(){n.abort()});break;default:s.setError(o)}return!0}},setImage:function(t){var e,o,n,s,a=this,i=t.opts.image.srcset;if(!t.isLoaded||t.hasError){if(i){n=g.devicePixelRatio||1,s=g.innerWidth*n,(o=i.split(",").map(function(t){var n={};return t.trim().split(/\s+/).forEach(function(t,e){var o=parseInt(t.substring(0,t.length-1),10);if(0===e)return n.url=t;o&&(n.value=o,n.postfix=t[t.length-1])}),n})).sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=s||"x"===c.postfix&&c.value>=n){e=c;break}}!e&&o.length&&(e=o[o.length-1]),e&&(t.src=e.url,t.width&&t.height&&"w"==e.postfix&&(t.height=t.width/t.height*e.value,t.width=e.value))}t.$placeholder=b('<div class="fancybox-placeholder"></div>').hide().appendTo(t.$slide),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&(t.opts.thumb||t.opts.$thumb)?(t.width=t.opts.width,t.height=t.opts.height,t.$ghost=b("<img />").one("load error",function(){a.isClosing||(b("<img/>")[0].src=t.src,a.revealImage(t,function(){a.setBigImage(t),a.firstRun&&t.index===a.currIndex&&a.preload()}))}).addClass("fancybox-image").appendTo(t.$placeholder).attr("src",t.opts.thumb||t.opts.$thumb.attr("src"))):a.setBigImage(t)}else a.afterLoad(t)},setBigImage:function(t){var e=this,o=b("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.afterLoad(t),t.$ghost&&(t.timouts=setTimeout(function(){t.$ghost.hide()},350)))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$placeholder),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},150),t.opts.image.protect&&b('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0})},revealImage:function(t,e){var o=this;e=e||b.noop,"image"!==t.type||t.hasError||!0===t.isRevealed?e.apply(o):(t.isRevealed=!0,t.pos===o.currPos&&o.zoomInOut("In",t.opts.speed,e)||(t.$ghost&&!t.isLoaded&&o.updateSlide(t,!0),t.pos===o.currPos?b.fancybox.animate(t.$placeholder,{opacity:0},{opacity:1},300,e):t.$placeholder.show(),e.apply(o)))},setIframe:function(a){var i,e=this,r=a.opts.iframe,t=a.$slide;a.$content=b('<div class="fancybox-content"></div>').css(r.css).appendTo(t),i=b(r.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",b.fancybox.isTouch?"auto":r.scrolling).appendTo(a.$content),r.preload?(a.$content.addClass("fancybox-tmp"),e.showLoading(a),i.on("load.fb error.fb",function(t){this.isReady=1,a.$slide.trigger("refresh"),e.afterLoad(a)}),t.on("refresh.fb",function(){var t,e,o,n,s=a.$content;if(1===i[0].isReady){try{t=i.contents().find("body")}catch(t){}t&&t.length&&(r.css.width===y||r.css.height===y)&&(e=i[0].contentWindow.document.documentElement.scrollWidth,o=Math.ceil(t.outerWidth(!0)+(s.width()-e)),n=Math.ceil(t.outerHeight(!0)),s.css({width:r.css.width===y?o+(s.outerWidth()-s.innerWidth()):r.css.width,height:r.css.height===y?n+(s.outerHeight()-s.innerHeight()):r.css.height})),s.removeClass("fancybox-tmp")}})):this.afterLoad(a),i.attr("src",a.src),a.opts.smallBtn&&a.$content.prepend(a.opts.closeTpl),t.one("onReset",function(){try{b(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}b(this).empty(),a.isLoaded=!1})},setContent:function(e,o){this.isClosing||(this.hideLoading(e),e.$slide.empty(),n(o)&&o.parent().length?(o.data("placeholder")&&o.parents(".fancybox-slide").trigger("onReset"),o.data({placeholder:b("<div></div>").hide().insertAfter(o)}).css("display","inline-block")):("string"===b.type(o)&&3===(o=b("<div>").append(o).contents())[0].nodeType&&(o=b("<div>").html(o)),e.opts.selector&&(o=b("<div>").html(o).find(e.opts.selector))),e.$slide.one("onReset",function(){var t=n(o)?o.data("placeholder"):0;t&&(o.hide().replaceAll(t),o.data("placeholder",null)),e.hasError||(b(this).empty(),e.isLoaded=!1)}),e.$content=b(o).appendTo(e.$slide),!0===e.opts.smallBtn&&e.$content.find(".fancybox-close-small").remove().end().eq(0).append(e.opts.closeTpl),this.afterLoad(e))},setError:function(t){t.hasError=!0,this.setContent(t,t.opts.errorTpl)},showLoading:function(t){(t=t||this.current)&&!t.$spinner&&(t.$spinner=b(this.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){(t=t||this.current)&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterMove:function(){var o=this,t=o.current,n={};t&&(t.$slide.siblings().trigger("onReset"),b.each(o.slides,function(t,e){e.pos>=o.currPos-1&&e.pos<=o.currPos+1?n[e.pos]=e:e&&e.$slide.remove()}),o.slides=n,o.trigger("afterMove"),t.isLoaded&&o.complete())},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.$ghost||e.updateSlide(t,!0),t.index===e.currIndex&&t.isMoved?e.complete():t.$ghost||e.revealImage(t))},complete:function(){var t=this,e=t.current;t.revealImage(e,function(){e.isComplete=!0,e.$slide.addClass("fancybox-slide--complete"),t.updateCursor(),t.trigger("onComplete"),e.opts.focus&&"image"!==e.type&&"iframe"!==e.type&&t.focus()})},preload:function(){var t,e,o=this;o.group.length<2||(t=o.slides[o.currPos+1],e=o.slides[o.currPos-1],t&&"image"===t.type&&o.loadSlide(t),e&&"image"===e.type&&o.loadSlide(e))},focus:function(){var t,e=this.current;(t=e&&e.isComplete?e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null)&&t.length||(t=this.$refs.container),t.focus(),this.$refs.slider_wrap.scrollLeft(0),e&&e.$slide.scrollTop(0)},activate:function(){var e=this;b(".fancybox-container").each(function(){var t=b(this).data("FancyBox");t&&t.uid!==e.uid&&!t.isClosing&&t.trigger("onDeactivate")}),e.current&&(0<e.$refs.container.index()&&e.$refs.container.prependTo(m.body),e.updateControls()),e.trigger("onActivate"),e.addEvents()},close:function(t){var e=this,o=e.current,n=o.opts.speed,s=b.proxy(function(){e.cleanUp(t)},this);return!e.isAnimating&&!e.isClosing&&(!1===e.trigger("beforeClose",t)?(b.fancybox.stop(e.$refs.slider),void v(function(){e.update(!0,!0,150)})):(e.isClosing=!0,o.timouts&&clearTimeout(o.timouts),!0!==t&&b.fancybox.stop(e.$refs.slider),e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),o.$slide.removeClass("fancybox-slide--complete").siblings().remove(),o.isMoved||o.$slide.css("overflow","visible"),e.removeEvents(),e.hideLoading(o),e.hideControls(),e.updateCursor(),e.$refs.bg.css("transition-duration",n+"ms"),this.$refs.container.removeClass("fancybox-container--ready"),void(!0===t?setTimeout(s,n):e.zoomInOut("Out",n,s)||b.fancybox.animate(e.$refs.container,null,{opacity:0},n,"easeInSine",s))))},cleanUp:function(t){var e,o=this;o.$refs.slider.children().trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.current=null,(e=b.fancybox.getInstance())?e.activate():(b("html").removeClass("fancybox-enabled"),b("body").removeAttr("style"),d.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),b("#fancybox-noscroll").remove()),o.$lastFocus&&o.$lastFocus.focus()},trigger:function(t,e){var o,n=Array.prototype.slice.call(arguments,1),s=e&&e.opts?e:this.current;if(s?n.unshift(s):s=this,n.unshift(this),b.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,n)),!1===o)return o;"afterClose"===t?b(m).trigger(t+".fb",n):this.$refs.container.trigger(t+".fb",n)},toggleControls:function(t){this.isHiddenControls?this.updateControls(t):this.hideControls()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-controls"),this.$refs.container.removeClass("fancybox-show-caption")},updateControls:function(t){var e=this,o=e.$refs.container,n=e.$refs.caption,s=e.current,a=s.index,i=s.opts,r=i.caption;this.isHiddenControls&&!0!==t||(this.isHiddenControls=!1,o.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar",!!i.infobar&&1<e.group.length).toggleClass("fancybox-show-buttons",!!i.buttons).toggleClass("fancybox-is-modal",!!i.modal),b(".fancybox-button--left",o).toggleClass("fancybox-button--disabled",!i.loop&&a<=0),b(".fancybox-button--right",o).toggleClass("fancybox-button--disabled",!i.loop&&a>=e.group.length-1),b(".fancybox-button--play",o).toggle(!!(i.slideShow&&1<e.group.length)),b(".fancybox-button--close",o).toggle(!!i.closeBtn),b(".js-fancybox-count",o).html(e.group.length),b(".js-fancybox-index",o).html(a+1),s.$slide.trigger("refresh"),n&&n.empty(),r&&r.length?(n.html(r),this.$refs.container.addClass("fancybox-show-caption "),e.$caption=n):this.$refs.container.removeClass("fancybox-show-caption"))}}),b.fancybox={version:"{fancybox-version}",defaults:s,getInstance:function(t){var e=b('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof r&&("string"===b.type(t)?e[t].apply(e,o):"function"===b.type(t)&&t.apply(e,o),e)},open:function(t,e,o){return new r(t,e,o)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close())},isTouch:m.createTouch!==y&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:(t=m.createElement("div"),g.getComputedStyle(t).getPropertyValue("transform")&&!(m.documentMode&&m.documentMode<=11)),getTranslate:function(t){var e,o;return!(!t||!t.length)&&(e=t.get(0).getBoundingClientRect(),{top:(o=(o=(o=t.eq(0).css("transform"))&&-1!==o.indexOf("matrix")?(o=(o=o.split("(")[1]).split(")")[0]).split(","):[]).length?(o=10<o.length?[o[13],o[12],o[0],o[5]]:[o[5],o[4],o[0],o[3]]).map(parseFloat):[0,0,1,1])[0],left:o[1],scaleX:o[2],scaleY:o[3],opacity:parseFloat(t.css("opacity")),width:e.width,height:e.height})},setTranslate:function(t,e){var o="",n={};if(t&&e)return e.left===y&&e.top===y||(o=(e.left===y?t.position().top:e.left)+"px, "+(e.top===y?t.position().top:e.top)+"px",o=this.use3d?"translate3d("+o+", 0px)":"translate("+o+")"),e.scaleX!==y&&e.scaleY!==y&&(o=(o.length?o+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),o.length&&(n.transform=o),e.opacity!==y&&(n.opacity=e.opacity),e.width!==y&&(n.width=e.width),e.height!==y&&(n.height=e.height),t.css(n)},easing:{easeOutCubic:function(t,e,o,n){return o*((t=t/n-1)*t*t+1)+e},easeInCubic:function(t,e,o,n){return o*(t/=n)*t*t+e},easeOutSine:function(t,e,o,n){return o*Math.sin(t/n*(Math.PI/2))+e},easeInSine:function(t,e,o,n){return-o*Math.cos(t/n*(Math.PI/2))+o+e}},stop:function(t){t.removeData("animateID")},animate:function(o,n,s,a,i,t){var r,c,l,d=this,p=null,u=0,h=function(){s.scaleX!==y&&s.scaleY!==y&&n&&n.width!==y&&n.height!==y&&(s.width=n.width*s.scaleX,s.height=n.height*s.scaleY,s.scaleX=1,s.scaleY=1),d.setTranslate(o,s),t()},f=function(t){if(r=[],c=0,o.length&&o.data("animateID")===l)if(t=t||Date.now(),p&&(c=t-p),p=t,a<=(u+=c))h();else{for(var e in s)s.hasOwnProperty(e)&&n[e]!==y&&(n[e]==s[e]?r[e]=s[e]:r[e]=d.easing[i](u,n[e],s[e]-n[e],a));d.setTranslate(o,r),v(f)}};d.animateID=l=d.animateID===y?1:d.animateID+1,o.data("animateID",l),t===y&&"function"==b.type(i)&&(t=i,i=y),i||(i="easeOutCubic"),t=t||b.noop,n?this.setTranslate(o,n):n=this.getTranslate(o),a?(o.show(),v(f)):h()}},b.fn.fancybox=function(t){return this.off("click.fb-start").on("click.fb-start",{items:this,options:t||{}},e),this},b(m).on("click.fb-start","[data-fancybox]",e)}(window,document,window.jQuery),function(f,t,g){"use strict";var m=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.mozRequestAnimationFrame||function(t){f.setTimeout(t,1e3/60)},r=function(t){var e=[];for(var o in t=(t=t.originalEvent||t||f.e).touches&&t.touches.length?t.touches:t.changedTouches&&t.changedTouches.length?t.changedTouches:[t])t[o].pageX?e.push({x:t[o].pageX,y:t[o].pageY}):t[o].clientX&&e.push({x:t[o].clientX,y:t[o].clientY});return e},b=function(t,e,o){return e&&t?"x"===o?t.x-e.x:"y"===o?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){return t.is("a")||t.is("button")||t.is("input")||t.is("select")||t.is("textarea")||g.isFunction(t.get(0).onclick)},o=function(t){var e=this;e.instance=t,e.$wrap=t.$refs.slider_wrap,e.$slider=t.$refs.slider,e.$container=t.$refs.container,e.destroy(),e.$wrap.on("touchstart.fb mousedown.fb",g.proxy(e,"ontouchstart"))};o.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")},o.prototype.ontouchstart=function(t){var e=this,o=g(t.target),n=e.instance.current,s=n.$content||n.$placeholder;return e.startPoints=r(t),e.$target=o,e.$content=s,e.canvasWidth=Math.round(n.$slide[0].clientWidth),e.canvasHeight=Math.round(n.$slide[0].clientHeight),(e.startEvent=t).originalEvent.clientX>e.canvasWidth+n.$slide.offset().left||(a(o)||a(o.parent())||function(t){for(var e,o,n,s,a,i=!1;e=t.get(0),o=f.getComputedStyle(e)["overflow-y"],n=f.getComputedStyle(e)["overflow-x"],s=("scroll"===o||"auto"===o)&&e.scrollHeight>e.clientHeight,a=("scroll"===n||"auto"===n)&&e.scrollWidth>e.clientWidth,!(i=s||a)&&(t=t.parent()).length&&!t.hasClass("fancybox-slider")&&!t.is("body"););return i}(o)?void 0:n.opts.touch?void(t.originalEvent&&2==t.originalEvent.button||(t.stopPropagation(),t.preventDefault(),!n||e.instance.isAnimating||e.instance.isClosing||!e.startPoints||1<e.startPoints.length&&!n.isMoved||(e.$wrap.off("touchmove.fb mousemove.fb",g.proxy(e,"ontouchmove")),e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",g.proxy(e,"ontouchend")),e.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",g.proxy(e,"ontouchend")),e.$wrap.on("touchmove.fb mousemove.fb",g.proxy(e,"ontouchmove")),e.startTime=(new Date).getTime(),e.distanceX=e.distanceY=e.distance=0,e.canTap=!1,e.isPanning=!1,e.isSwiping=!1,e.isZooming=!1,e.sliderStartPos=g.fancybox.getTranslate(e.$slider),e.contentStartPos=g.fancybox.getTranslate(e.$content),e.contentLastPos=null,1!==e.startPoints.length||e.isZooming||(e.canTap=n.isMoved,"image"===n.type&&(e.contentStartPos.width>e.canvasWidth+1||e.contentStartPos.height>e.canvasHeight+1)?(g.fancybox.stop(e.$content),e.isPanning=!0):(g.fancybox.stop(e.$slider),e.isSwiping=!0),e.$container.addClass("fancybox-controls--isGrabbing")),2===e.startPoints.length&&n.isMoved&&!n.hasError&&"image"===n.type&&(n.isLoaded||n.$ghost)&&(e.isZooming=!0,e.isSwiping=!1,e.isPanning=!1,g.fancybox.stop(e.$content),e.centerPointStartX=.5*(e.startPoints[0].x+e.startPoints[1].x)-g(f).scrollLeft(),e.centerPointStartY=.5*(e.startPoints[0].y+e.startPoints[1].y)-g(f).scrollTop(),e.percentageOfImageAtPinchPointX=(e.centerPointStartX-e.contentStartPos.left)/e.contentStartPos.width,e.percentageOfImageAtPinchPointY=(e.centerPointStartY-e.contentStartPos.top)/e.contentStartPos.height,e.startDistanceBetweenFingers=b(e.startPoints[0],e.startPoints[1]))))):(e.endPoints=e.startPoints,e.ontap()))},o.prototype.ontouchmove=function(t){var e=this;t.preventDefault(),e.newPoints=r(t),e.newPoints&&e.newPoints.length&&(e.distanceX=b(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=b(e.newPoints[0],e.startPoints[0],"y"),e.distance=b(e.newPoints[0],e.startPoints[0]),0<e.distance&&(e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()))},o.prototype.onSwipe=function(){var t,e=this,o=e.isSwiping,n=e.sliderStartPos.left;!0===o?10<Math.abs(e.distance)&&(e.instance.group.length<2?e.isSwiping="y":!e.instance.current.isMoved||!1===e.instance.opts.touch.vertical||"auto"===e.instance.opts.touch.vertical&&800<g(f).width()?e.isSwiping="x":(t=Math.abs(180*Math.atan2(e.distanceY,e.distanceX)/Math.PI),e.isSwiping=45<t&&t<135?"y":"x"),e.canTap=!1,e.instance.current.isMoved=!1,e.startPoints=e.newPoints):("x"==o&&(!e.instance.current.opts.loop&&0===e.instance.current.index&&0<e.distanceX?n+=Math.pow(e.distanceX,.8):!e.instance.current.opts.loop&&e.instance.current.index===e.instance.group.length-1&&e.distanceX<0?n-=Math.pow(-e.distanceX,.8):n+=e.distanceX),e.sliderLastPos={top:"x"==o?0:e.sliderStartPos.top+e.distanceY,left:n},m(function(){g.fancybox.setTranslate(e.$slider,e.sliderLastPos)}))},o.prototype.onPan=function(){var t,e,o,n=this;n.canTap=!1,t=n.contentStartPos.width>n.canvasWidth?n.contentStartPos.left+n.distanceX:n.contentStartPos.left,e=n.contentStartPos.top+n.distanceY,(o=n.limitMovement(t,e,n.contentStartPos.width,n.contentStartPos.height)).scaleX=n.contentStartPos.scaleX,o.scaleY=n.contentStartPos.scaleY,n.contentLastPos=o,m(function(){g.fancybox.setTranslate(n.$content,n.contentLastPos)})},o.prototype.limitMovement=function(t,e,o,n){var s,a,i,r,c=this,l=c.canvasWidth,d=c.canvasHeight,p=c.contentStartPos.left,u=c.contentStartPos.top,h=c.distanceX,f=c.distanceY;return s=Math.max(0,.5*l-.5*o),a=Math.max(0,.5*d-.5*n),i=Math.min(l-o,.5*l-.5*o),r=Math.min(d-n,.5*d-.5*n),l<o&&(0<h&&s<t&&(t=s-1+Math.pow(-s+p+h,.8)||0),h<0&&t<i&&(t=i+1-Math.pow(i-p-h,.8)||0)),d<n&&(0<f&&a<e&&(e=a-1+Math.pow(-a+u+f,.8)||0),f<0&&e<r&&(e=r+1-Math.pow(r-u-f,.8)||0)),{top:e,left:t}},o.prototype.limitPosition=function(t,e,o,n){var s=this.canvasWidth,a=this.canvasHeight;return t=s<o?(t=0<t?0:t)<s-o?s-o:t:Math.max(0,s/2-o/2),{top:e=a<n?(e=0<e?0:e)<a-n?a-n:e:Math.max(0,a/2-n/2),left:t}},o.prototype.onZoom=function(){var t=this,e=t.contentStartPos.width,o=t.contentStartPos.height,n=t.contentStartPos.left,s=t.contentStartPos.top,a=b(t.newPoints[0],t.newPoints[1])/t.startDistanceBetweenFingers,i=Math.floor(e*a),r=Math.floor(o*a),c=(e-i)*t.percentageOfImageAtPinchPointX,l=(o-r)*t.percentageOfImageAtPinchPointY,d=(t.newPoints[0].x+t.newPoints[1].x)/2-g(f).scrollLeft(),p=(t.newPoints[0].y+t.newPoints[1].y)/2-g(f).scrollTop(),u=d-t.centerPointStartX,h={top:s+(l+(p-t.centerPointStartY)),left:n+(c+u),scaleX:t.contentStartPos.scaleX*a,scaleY:t.contentStartPos.scaleY*a};t.canTap=!1,t.newWidth=i,t.newHeight=r,t.contentLastPos=h,m(function(){g.fancybox.setTranslate(t.$content,t.contentLastPos)})},o.prototype.ontouchend=function(t){var e=this,o=e.instance.current,n=Math.max((new Date).getTime()-e.startTime,1),s=e.isSwiping,a=e.isPanning,i=e.isZooming;if(e.endPoints=r(t),e.$container.removeClass("fancybox-controls--isGrabbing"),e.$wrap.off("touchmove.fb mousemove.fb",g.proxy(this,"ontouchmove")),e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",g.proxy(this,"ontouchend")),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.canTap)return e.ontap();e.velocityX=e.distanceX/n*.5,e.velocityY=e.distanceY/n*.5,e.speed=o.opts.speed||330,e.speedX=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),e.speedY=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityY)*e.speed)),a?e.endPanning():i?e.endZooming():e.endSwiping(s)},o.prototype.endSwiping=function(t){var e=this;"y"==t&&50<Math.abs(e.distanceY)?(g.fancybox.animate(e.$slider,null,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,left:e.sliderStartPos.left,opacity:0},e.speedY),e.instance.close(!0)):"x"==t&&50<e.distanceX?e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50?e.instance.next(e.speedX):e.instance.update(!1,!0,150)},o.prototype.endPanning=function(){var t,e,o,n=this;n.contentLastPos&&(t=n.contentLastPos.left+n.velocityX*n.speed*2,e=n.contentLastPos.top+n.velocityY*n.speed*2,(o=n.limitPosition(t,e,n.contentStartPos.width,n.contentStartPos.height)).width=n.contentStartPos.width,o.height=n.contentStartPos.height,g.fancybox.animate(n.$content,null,o,n.speed,"easeOutSine"))},o.prototype.endZooming=function(){var t,e,o,n,s=this,a=s.instance.current,i=s.newWidth,r=s.newHeight;s.contentLastPos&&(t=s.contentLastPos.left,n={top:e=s.contentLastPos.top,left:t,width:i,height:r,scaleX:1,scaleY:1},g.fancybox.setTranslate(s.$content,n),i<s.canvasWidth&&r<s.canvasHeight?s.instance.scaleToFit(150):i>a.width||r>a.height?s.instance.scaleToActual(s.centerPointStartX,s.centerPointStartY,150):(o=s.limitPosition(t,e,i,r),g.fancybox.animate(s.$content,null,o,s.speed,"easeOutSine")))},o.prototype.ontap=function(){var t=this,e=t.instance,o=e.current,n=t.endPoints[0].x,s=t.endPoints[0].y;if(n-=t.$wrap.offset().left,s-=t.$wrap.offset().top,e.SlideShow&&e.SlideShow.isActive&&e.SlideShow.stop(),!g.fancybox.isTouch)return o.opts.closeClickOutside&&t.$target.is(".fancybox-slide")?void e.close(t.startEvent):void("image"==o.type&&o.isMoved&&(e.canPan()?e.scaleToFit():e.isScaledDown()?e.scaleToActual(n,s):e.group.length<2&&e.close(t.startEvent)));if(t.tapped){if(clearTimeout(t.tapped),t.tapped=null,50<Math.abs(n-t.x)||50<Math.abs(s-t.y)||!o.isMoved)return this;"image"==o.type&&(o.isLoaded||o.$ghost)&&(e.canPan()?e.scaleToFit():e.isScaledDown()&&e.scaleToActual(n,s))}else t.x=n,t.y=s,t.tapped=setTimeout(function(){t.tapped=null,e.toggleControls(!0)},300);return this},g(t).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new o(e))}),g(t).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(h){"use strict";var f=function(o,t,e){if(o)return e=e||"","object"===h.type(e)&&(e=h.param(e,!0)),h.each(t,function(t,e){o=o.replace("$"+t,e||"")}),e.length&&(o+=(0<o.indexOf("?")?"&":"?")+e),o},o={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&0<t[12].indexOf("layer=c")?"svembed":"embed")}}};h(document).on("onInit.fb",function(t,e){h.each(e.group,function(t,s){var a,i,r,c,l,d,p=s.src||"",u=!1;s.type||(h.each(o,function(t,e){if(i=p.match(e.matcher),l={},d=t,i){if(u=e.type,e.paramPlace&&i[e.paramPlace]){"?"==(c=i[e.paramPlace])[0]&&(c=c.substring(1)),c=c.split("&");for(var o=0;o<c.length;++o){var n=c[o].split("=",2);2==n.length&&(l[n[0]]=decodeURIComponent(n[1].replace(/\+/g," ")))}}return r=h.extend(!0,{},e.params,s.opts[t],l),p="function"===h.type(e.url)?e.url.call(this,i,r,s):f(e.url,i,r),a="function"===h.type(e.thumb)?e.thumb.call(this,i,r,s):f(e.thumb,i),"vimeo"===d&&(p=p.replace("&%23","#")),!1}}),u?(s.src=p,s.type=u,s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=a),"iframe"===u&&(h.extend(!0,s.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1}),s.opts.slideClass+=" fancybox-slide--video")):s.type="iframe")})})}(window.jQuery);