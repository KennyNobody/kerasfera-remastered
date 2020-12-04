/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/counter/counter.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/counter/counter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  (function toggleModalCounter() {
    var counter = document.querySelectorAll('.counter');

    for (var i = 0; i < counter.length; i++) {
      initToggleCounters(counter[i]);
    }

    function initToggleCounters(item) {
      var btnMinus = item.querySelector('.counter__btn--minus');
      var btnPlus = item.querySelector('.counter__btn--plus');
      var field = item.querySelector('.counter__input');

      if (btnMinus && btnPlus && field) {
        btnMinus.addEventListener('click', remove);
        btnPlus.addEventListener('click', add);
      }

      function remove() {
        if (+field.value > 1) {
          field.value--;
        }
      }

      function add() {
        field.value++;
      }
    }

    ;
  })();
});

/***/ }),

/***/ "./src/blocks/modules/filter/filter.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/filter/filter.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);

 // document.addEventListener('DOMContentLoaded', function() {
// });
// $(window).scroll(function() {
//     if ($(document).width() < 1000) {
//         if ($(window).scrollTop()  > 300) {
//             $('.filter__mob-title').addClass('filter__mob-title--fixed');
//         } else {
//             $('.filter__mob-title').removeClass('filter__mob-title--fixed');
//         }
//     } 
// });

document.addEventListener('DOMContentLoaded', function () {
  var filter;

  function initFilter() {
    var parent = document.querySelector('.filter');

    if (parent) {
      filter = parent;
      initToggler();
      initRangeSlider();
      initCheckboxes();
      initToolbar();
      initTypes();
      clearForm();
    }
  }

  function initTypes() {
    var radios = filter.querySelectorAll('.filter__toggle-input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', function () {
        getRequest();
      });
    }
  }

  function initToggler() {
    var items = filter.querySelectorAll('.filter__block');

    for (var i = 0; i < items.length; i++) {
      toggleBlock(items[i]);
    }

    function toggleBlock(item) {
      var area = item.querySelector('.filter__name');
      area.addEventListener('click', function () {
        item.classList.toggle('filter__block--open');
      });
    }
  }

  function initRangeSlider() {
    var rangeSlider = filter.querySelector('.price');

    if (rangeSlider) {
      var activeBlock = rangeSlider.querySelector('.filter__range');
      var minValue = rangeSlider.querySelector('#input-with-keypress-0') || 0;
      var maxValue = rangeSlider.querySelector('#input-with-keypress-1') || 10000;
      nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(activeBlock, {
        start: [+minValue.value, +maxValue.value],
        connect: true,
        step: 100,
        range: {
          'min': [+minValue.value],
          'max': [+maxValue.value]
        }
      });
      activeBlock.noUiSlider.on('change', function (values, handle) {
        minValue.value = Math.round(values[0]);
        maxValue.value = Math.round(values[1]);
        getRequest();
      });
    }
  }

  function initCheckboxes() {
    var inputs = filter.querySelectorAll('.filter-input');

    for (var i = 0; i < inputs.length; i++) {
      addListeners(inputs[i]);
    }

    function addListeners(item) {
      var field = item.querySelector('.filter-input__input');
      field.addEventListener('change', function () {
        getRequest();
      });
    }
  }

  function initToolbar() {
    var inputs = document.querySelectorAll('.toolbar select');

    if (inputs) {
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
          getRequest();
        });
      }
    }
  }

  function getValues() {
    var result = {
      count: getCount(),
      tag: getTag(),
      type: getTypes(),
      min: getPrice('min'),
      max: getPrice('max'),
      wmin: getSizes('wmin'),
      wmax: getSizes('wmax'),
      hmin: getSizes('hmin'),
      hmax: getSizes('hmax')
    };
    var array = filter.querySelectorAll('[data-block-type="checkbox"]');

    for (var i = 0; i < array.length; i++) {
      if (getBlockValue(array[i])) {
        getBlockValue(array[i]);
      }
    }

    function getBlockValue(parent) {
      var urlString;
      var name = parent.getAttribute("name");
      var inputs = parent.querySelectorAll('.filter-input__input');

      for (var n = 0; n < inputs.length; n++) {
        if (result[name] != undefined && inputs[n].checked) {
          result[name] = result[name] + "," + inputs[n].value;
        } else if (result[name] == undefined && inputs[n].checked) {
          result[name] = inputs[n].value;
        } else {}
      }

      if (urlString != undefined) {
        return urlString;
      }
    }

    return result;
  }

  function getPage() {
    return 1;
  }

  function getPrice(price) {
    return filter.elements[price].value;
  }

  function getTypes() {
    return filter.elements['filter-type'].value;
  }

  function getTag() {
    var form = document.querySelector('.toolbar');
    return form.elements['select-tag'].value;
  }

  function getCount() {
    var form = document.querySelector('.toolbar');
    return form.elements['select-count'].value;
  }

  function getSizes(type) {
    return filter.elements[type].value;
  }

  function getRequest() {
    $.ajax({
      url: 'shop',
      type: 'GET',
      data: getValues(),
      success: function success(response) {
        console.log(response);
      },
      error: function error(response) {
        console.log(response);
      }
    });
  }

  function clearForm() {
    var button = filter.querySelector('.filter__reset');

    if (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        filter.reset();
        getRequest();
      });
    }
  }

  initFilter();
}); // var waitInterval = setInterval(function(){
//     if (typeof($) == typeof(function(){})) {
//         clearInterval(waitInterval);
//         $('.shop').each(function(){
//             var $shop = $(this),
//             $filterCheckbox = $shop.find('.filter__block input[type="checkbox"]'),
//             $resetBtn = $shop.find('.reset.filter__reset'),
//             $toggler = $shop.find('.filter__toogle'),
//             initEnd = false,
//             filterCheckbox = {},
//             keypressSlider = null,
//             keypressSlider1 = null,
//             keypressSlider2 = null,
//             needScroll = false,
//             page = null,
//             priceSetManual = false,
//             sizeSetManual0 = false,
//             sizeSetManual1 = false,
//             execTimeout = null,
//             init = function(){
//                 initPrice();
//                 initSize();
//                 initFilter();
//                 $resetBtn.on('click', resetFilter);
//                 $shop.on('change', '.toolbar__select--sort', clickTag);
//                 $shop.on('change', '.filter__type-select', clickTag);
//                 $shop.on('change', '.toolbar__select--count', clickCount);
//                 $shop.on('click', '.page_nav a', clickPages);
//                 $shop.on('click', '.filter__toogle', clickToogler);
//                 // $(".filter__name").click(function(){
//                 //     $(this).parent().toggleClass('filter__block--open');
//                 // });
//                 $(".filter__mob-title").click(function(){
//                     $('.body').toggleClass('body--filter');
//                 });
//                 $(".filter__overlay").click(function(){
//                     $('.body').toggleClass('body--filter');
//                 });
//                 window.addEventListener('popstate', loadPage);
//                 exec();
//                 initEnd = true;
//                 $('body').removeClass('body--filter');
//                 $(".filter__name").eq(1).trigger('click');
//                 var showSize = false;
//                 $('.filter__block--RAZMER').find('input').each(function(i){
//                     if (i == 0 || i == 2) {
//                         if($(this).val() != 0) showSize = true;
//                     } else {
//                         if($(this).val() != 300) showSize = true;
//                     }
//                 });
//                 if (showSize) {
//                     $('.filter__block--RAZMER .filter__name').trigger('click');
//                 }
//             },
//             initPrice = function(){
//                 // keypressSlider = document.getElementById('filter__range');
//                 // var input0 = document.getElementById('input-with-keypress-0');
//                 // var input1 = document.getElementById('input-with-keypress-1');
//                 // var inputs = [input0, input1];
//                 // if (keypressSlider) {
//                 //     noUiSlider.create(keypressSlider, {
//                 //         start: [$(input0).val(), $(input1).val()],
//                 //         connect: true,
//                 //         step: 100,
//                 //         range: {
//                 //             'min': [0],
//                 //             'max': 10000
//                 //         }
//                 //     });
//                 //     keypressSlider.noUiSlider.on('update', function (values, handle) {
//                 //         inputs[handle].value = +values[handle];
//                 //         page = 1;
//                 //         if(!priceSetManual) {
//                 //             $('.body').addClass('body--filter');
//                 //             exec();
//                 //         }
//                 //     });
//                 //     inputs.forEach(function (input, handle) {
//                 //         input.addEventListener('change', function () {
//                 //             keypressSlider.noUiSlider.setHandle(handle, this.value);
//                 //         });
//                 //         input.addEventListener('keydown', function (e) {
//                 //             var values = keypressSlider.noUiSlider.get();
//                 //             var value = Number(values[handle]);
//                 //             var steps = keypressSlider.noUiSlider.steps();
//                 //             var step = steps[handle];
//                 //             var position;
//                 //             switch (e.which) {
//                 //                 case 13:
//                 //                 keypressSlider.noUiSlider.setHandle(handle, this.value);
//                 //                 break;
//                 //                 case 38:
//                 //                 position = step[1];
//                 //                 if (position === false) {
//                 //                     position = 1;
//                 //                 }
//                 //                 if (position !== null) {
//                 //                     keypressSlider.noUiSlider.setHandle(handle, value + position);
//                 //                 }
//                 //                 break;
//                 //                 case 40:
//                 //                 position = step[0];
//                 //                 if (position === false) {
//                 //                     position = 1;
//                 //                 }
//                 //                 if (position !== null) {
//                 //                     keypressSlider.noUiSlider.setHandle(handle, value - position);
//                 //                 }
//                 //                 break;
//                 //             }
//                 //         });
//                 //     });
//                 // }
//             },
//             initFilter = function(){
//                 $filterCheckbox.on('click', changeFilter);
//                 $shop.find('.filter__checked-block').on('click', removeFilter);
//                 $filterCheckbox.each(function(){
//                     var $this = $(this);
//                     if (typeof(filterCheckbox[$this.attr('name')]) == 'undefined') {
//                         filterCheckbox[$this.attr('name')] = {};
//                     }
//                     filterCheckbox[$this.attr('name')][$this.attr('value')] = {
//                         input: $this,
//                         el: $shop.find('.filter-'+$this.attr('name')+'-'+$this.attr('value'))
//                     };
//                 });
//                 $filterCheckbox.filter(':checked').trigger('click');
//             },
//             clickToogler = function(e){
//                 e.preventDefault();
//                 $(this).toggleClass('filter__toogle--active');
//                 exec();
//             },
//             changeFilter = function(e){
//                 var label = $(this).parent();
//                 if (label.hasClass("active")){
//                     label.removeClass('active');
//                     $(this).prop('checked', false);
//                     filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
//                 }else{
//                     label.addClass('active');
//                     $(e.target).prop('checked', true);
//                     filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.show();
//                 }
//                 page = 1;
//                 exec();
//             },
//             resetFilter = function(){
//                 $filterCheckbox.filter(':checked').trigger('click');
//                 keypressSlider.noUiSlider.set([0, 50000]);
//                 keypressSlider1.noUiSlider.set([0, 300]);
//                 keypressSlider2.noUiSlider.set([0, 300]);
//             },
//             removeFilter = function(e){
//                 e.preventDefault();
//                 filterCheckbox[$(this).data('name')][$(this).data('value')].input.trigger('click');
//             },
//             clickTag = function(){
//                 page = 1;
//                 exec();
//             },
//             clickCount = function(){
//                 page = 1;
//                 exec();
//             },
//             clickPages = function(e){
//                 e.preventDefault();
//                 page = $(this).attr('rel');
//                 needScroll = true;
//                 exec();
//             },
//             exec = function(){
//                 if(!initEnd) return;
//                 clearTimeout(execTimeout);
//                 execTimeout = setTimeout(function(){
//                     var params = {};
//                     var url = [];
//                     $('.shop__items').addClass('m-load');
//                     if (page != null) {
//                         url.push('page='+page);
//                         params.page = page;
//                     }
//                     if($toggler.hasClass('filter__toogle--active')) {
//                         url.push('type');
//                     }
//                     url.push('count='+Number($(".toolbar__select--count").children("option:selected").val()));
//                     params.count = Number($(".toolbar__select--count").children("option:selected").val());
//                     if (document.documentElement.clientWidth > 1000) {
//                         url.push('tag=' + $(".toolbar__select--sort").children("option:selected").attr('name'));
//                         params.tag = $(".toolbar__select--sort").children("option:selected").attr('name');
//                         console.log('toolbar');
//                     } else {
//                         url.push('tag=' + $(".filter__type-select").children("option:selected").attr('name'));
//                         params.tag = $(".filter__type-select").children("option:selected").attr('name');
//                         console.log('filter');
//                     }    
//                     var min = $('#input-with-keypress-0').val();
//                     var max = $('#input-with-keypress-1').val();
//                     url.push('min='+min);
//                     url.push('max='+max);
//                     params.min = min;
//                     params.max = max;
//                     var wmin = $('#input-with-keypress-2').val();
//                     var wmax = $('#input-with-keypress-3').val();
//                     url.push('wmin='+wmin);
//                     url.push('wmax='+wmax);
//                     params.wmin = wmin;
//                     params.wmax = wmax;
//                     var hmin = $('#input-with-keypress-4').val();
//                     var hmax = $('#input-with-keypress-5').val();
//                     url.push('hmin='+hmin);
//                     url.push('hmax='+hmax);
//                     params.hmin = hmin;
//                     params.hmax = hmax;
//                     var filterCheckboxActive = {};
//                     $filterCheckbox.filter(':checked').each(function(){
//                         if (typeof(filterCheckboxActive[$(this).attr('name')]) == 'undefined') {
//                             filterCheckboxActive[$(this).attr('name')] = $(this).val();
//                         } else {
//                             filterCheckboxActive[$(this).attr('name')] += ','+$(this).val();
//                         }
//                     });
//                     params.filter = {};
//                     for (var prop in filterCheckboxActive) {
//                         url.push(prop+'='+filterCheckboxActive[prop]);
//                         params.filter[prop] = filterCheckboxActive[prop].split(',');
//                     }
//                     $.get('?'+url.join('&'), function(html){
//                         params.html = $(html).find('.shop__content').html();
//                         history.pushState(params, null, '?'+url.join('&'));
//                         try {
//                             var popStateEvent = new PopStateEvent('popstate', { state: params });
//                             dispatchEvent(popStateEvent);
//                             $('.toolbar__select--count option[value="'+ params.count +'"]').prop('selected', true);
//                             $('.toolbar__select--sort option[name="'+ params.tag +'"]').prop('selected', true);
//                         } catch (ex) {
//                             window.location = '?'+url.join('&');
//                         }
//                     });
//                 }, 500);
//             },
//             loadPage = function(e){
//                 if (e.state == null) return;
//                 if ($('.filter__wrapper').css('position') != 'fixed') {
//                     $('.body').removeClass('body--filter');
//                 }
//                 $shop.find('.shop__content').html(e.state.html).find('.popup-item').magnificPopup({
//                     showCloseBtn: false,
//                 });
//                 $shop.find('.shop__content').find('.call__close').on('click', function(e){
//                     $.magnificPopup.close();
//                 });
//                 priceSetManual = true;
//                 keypressSlider.noUiSlider.set([e.state.min, e.state.max]);
//                 priceSetManual = false;
//                 sizeSetManual0 = true;
//                 keypressSlider1.noUiSlider.set([e.state.wmin, e.state.wmax]);
//                 sizeSetManual0 = false;
//                 sizeSetManual1 = true;
//                 keypressSlider2.noUiSlider.set([e.state.hmin, e.state.hmax]);
//                 sizeSetManual1 = false;
//                 $filterCheckbox.filter(':checked').each(function(){
//                     $(this).parent().removeClass('active');
//                     $(this).prop('checked', false);
//                     filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
//                 });
//                 for (var prop in e.state.filter) {
//                     $.each(e.state.filter[prop], function(){
//                         filterCheckbox[prop][this].input.parent().addClass('active');
//                         filterCheckbox[prop][this].input.prop('checked', true);
//                         filterCheckbox[prop][this].el.show();
//                     });
//                 }
//                 if (needScroll) {
//                     $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
//                     needScroll = false;
//                 }
//             };
//             init();
//         });
// }
// }, 100);
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/item-card/item-card.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/item-card/item-card.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  (function toggleCounter() {
    var counter = document.querySelectorAll('.item-card__counter');

    for (var i = 0; i < counter.length; i++) {
      initToggleCounters(counter[i]);
    }

    function initToggleCounters(item) {
      var btnMinus = item.querySelector('.item-card__btn--minus');
      var btnPlus = item.querySelector('.item-card__btn--plus');
      var field = item.querySelector('.item-card__input');

      if (btnMinus && btnPlus && field) {
        btnMinus.addEventListener('click', remove);
        btnPlus.addEventListener('click', add);
      }

      function remove() {
        if (+field.value > 1) {
          field.value--;
        }
      }

      function add() {
        field.value++;
      }
    }

    ;
  })();
});

/***/ }),

/***/ "./src/blocks/modules/item-contact/item-contact.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/item-contact/item-contact.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");

document.addEventListener('DOMContentLoaded', function () {
  (function initSlider() {
    var parent = document.querySelectorAll('.item-contact__slider');

    for (var i = 0; i < parent.length; i++) {
      initItem(parent[i]);
    }

    function initItem(item) {
      var galleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](item, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.item-contact__button--next',
          prevEl: '.item-contact__button--prev',
          disabledClass: 'item-contact__button--disabled'
        }
      });
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/oldCookie/oldCookie.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/oldCookie/oldCookie.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  (function setCookieMessage() {
    var block = document.querySelector('.accent--top');

    if (block) {
      var btn = block.querySelector('.accent__close');

      if (block && btn && localStorage.getItem('cookieFlagTop') !== 'true') {
        block.setAttribute("style", "display: block;");
      }

      btn.addEventListener('click', function () {
        block.setAttribute("style", "display: none;");
        localStorage.setItem('cookieFlagTop', true);
      });
    }
  })();

  (function setCookieMessage() {
    var block = document.querySelector('.accent--bottom');

    if (block) {
      var btn = block.querySelector('.accent__close');

      if (block && btn && localStorage.getItem('cookieFlagBottom') !== 'true') {
        block.setAttribute("style", "display: block;");
      }

      btn.addEventListener('click', function () {
        block.setAttribute("style", "display: none;");
        localStorage.setItem('cookieFlagBottom', true);
      });
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/oldFavorites/oldFavorites.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/oldFavorites/oldFavorites.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.item-card__tag--favorite').on('click', function () {
      var favorID = $(this).attr('data-item');

      if ($(this).hasClass('item-card__tag--favorite-active')) {
        favHandler(favorID, 'delete');
      } else {
        favHandler(favorID, 'add');
      }
    });
    $('.favorite-btn').on('click', function () {
      var favorID = $(this).attr('data-item');

      if ($(this).hasClass('active')) {
        favHandler(favorID, 'delete');
      } else {
        favHandler(favorID, 'add');
      }
    });
    getFavoriteItems();
  });

  function favHandler(id, action) {
    var param = 'id=' + id + "&action=" + action;
    console.log(param);
    $.ajax({
      url: '/ajax/favorites.php',
      type: "GET",
      dataType: "html",
      data: param,
      success: function success(response) {
        var result = $.parseJSON(response);

        if (result == 1) {
          $('.item-card__tag--favorite[data-item="' + id + '"]').addClass('item-card__tag--favorite-active');
          $('.favorite-btn[data-item="' + id + '"]').addClass('active');
        }

        if (result == 2) {
          $('.item-card__tag--favorite[data-item="' + id + '"]').removeClass('item-card__tag--favorite-active');
          $('.favorite-btn[data-item="' + id + '"]').removeClass('active');
        }

        getFavoriteItems();
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        console.log('Error: ' + errorThrown);
      }
    });
  }

  function getFavoriteItems() {
    var param = 'get_fav_list=1';
    $.ajax({
      url: '/ajax/favorites.php',
      type: "GET",
      dataType: "html",
      data: param,
      success: function success(response) {
        var result = $.parseJSON(response);
        $(result).each(function (index, element) {
          if ($('.favorite-btn[data-item="' + element + '"]')) {
            $('.favorite-btn[data-item="' + element + '"]').addClass('active');
          }

          if ($('.item-card__tag--favorite[data-item="' + element + '"]')) {
            $('.item-card__tag--favorite[data-item="' + element + '"]').addClass('item-card__tag--favorite-active');
          }
        });
        if (result != null) $('.fav_count').text(getFavoriteCountText(result.length));
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        console.log('Error: ' + errorThrown);
      }
    });
  }

  function getFavoriteCountText(count) {
    var number = count;
    var term = "ов";

    if (number >= 10 && number <= 19) {
      term = "ов";
    } else {
      if (number === 1) {
        term = "";
      }

      if (number >= 2 && number <= 4) {
        term = "а";
      }
    }

    if (count === false) {
      count = 0;
    }

    return 'В избранном ' + count + ' товар' + term;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/oldFrontGrid/oldFrontGrid.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/oldFrontGrid/oldFrontGrid.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  var parent = document.querySelector('.grid');

  if (parent) {
    var msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_0___default.a(parent, {
      itemSelector: '.grid__item',
      gutter: 15
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/oldMagnificPopup/oldMagnificPopup.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/oldMagnificPopup/oldMagnificPopup.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


document.addEventListener('DOMContentLoaded', function () {
  $(".popup").magnificPopup();
  $(".popup-item").magnificPopup({
    showCloseBtn: !1
  });
  $(".popup-image").magnificPopup({
    type: "image",
    closeOnContentClick: "true"
  });
  $(".tabs__slide").magnificPopup({
    type: "image",
    closeOnContentClick: "true"
  });
  $(".call__close").on("click", function (e) {
    $.magnificPopup.close();
  });
  $(".discont__btn--cancel").on("click", function (e) {
    $.magnificPopup.close();
  });
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Загрузка изображения...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      tCounter: "",
      preload: [0, 1]
    },
    image: {
      tError: "Ошибка загрузки изображения"
    }
  });
  $(".gallery-top-popups").magnificPopup({
    delegate: "a",
    type: "image",
    mainClass: "mfp-img-mobile",
    closeOnContentClick: !0,
    gallery: {
      enabled: !0,
      navigateByImgClick: !0,
      tCounter: "",
      preload: [0, 1]
    }
  });
  $(".gallery__item").magnificPopup({
    type: "image",
    image: _defineProperty({
      titleSrc: 'title'
    }, "titleSrc", function titleSrc(item) {
      return '<a href="' + item.el.attr('data-link') + '">Посмотреть коллекцию</a>';
    })
  }); // var mainInterval = setInterval(function () {
  // 	if (typeof ($) == typeof (function () {
  // 	})) {
  // 		clearInterval(mainInterval);
  // 		let $btn = $('.gallery__btn');
  // 		let $win = $(window);
  // 		let $items = $('.gallery__item');
  // 		let current = 0;
  // 		// var subInterval = setInterval(function () {
  // 		// 	if ($btn.offset().top < $win.scrollTop() + $win.height()) {
  // 		// 		var i = current * 20, e = 0;
  // 		// 		while (e < 20) {
  // 		// 			if ($items.eq(i + e).length) {
  // 		// 				$items.eq(i + e).show();
  // 		// 			} else {
  // 		// 				clearInterval(subInterval);
  // 		// 				break;
  // 		// 			}
  // 		// 			e++;
  // 		// 		}
  // 		// 		current++;
  // 		// 	}
  // 		// }, 500);
  // 		var intervalGallery = null;
  // 		$('.popup-gallery').on('mfpChange', function () {
  // 			clearInterval(intervalGallery);
  // 			intervalGallery = setInterval(function () {
  // 				var src = $('.mfp-img').attr('src');
  // 				if (typeof (src) != 'undefined') {
  // 					var $item = $('.gallery__item[href="' + src + '"]');
  // 					$('.mfp-title').html($item.data('link') ? '<a href="' + $item.data('link') + '">Посмотреть коллекцию</a>' : '');
  // 					clearInterval(intervalGallery);
  // 				}
  // 			}, 200);
  // 		});
  // 	}
  // }, 500);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/oldMmenu/oldMmenu.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/oldMmenu/oldMmenu.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");

$("#mob-menu").mmenu({
  navbar: {
    title: "<span class='logo navline__logo'>Керасфера</span>"
  },
  extensions: {
    all: ["theme-white", "pagedim-black", "border-none", "fx-menu-slide"],
    "(min-height: 600px)": ["listview-large"],
    "(min-height: 900px)": ["listview-huge"]
  }
}, {
  offCanvas: {
    pageSelector: "#page"
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/oldRating/oldRating.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/oldRating/oldRating.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery_bar_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-bar-rating */ "./node_modules/jquery-bar-rating/jquery.barrating.js");
/* harmony import */ var jquery_bar_rating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_bar_rating__WEBPACK_IMPORTED_MODULE_0__);

$(".rating-visible").barrating({
  theme: "css-stars",
  readonly: !0
});
$(".rating-input").barrating({
  theme: "css-stars",
  initialRating: 5
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/oldScrollbar/oldScrollbar.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/oldScrollbar/oldScrollbar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* jQuery Custom Scroll plugin v0.6.6 | (c) 2015 Mostovoy Andrey | https://github.com/standy/custom-scroll/blob/master/LICENSE */
(function ($) {
  $.fn.customScroll = function (options) {
    if (!this.length) {
      return $.extend(defaultOptions, options);
    }

    if (options === 'destroy') {
      this.each(function () {
        var cs = $(this).data('custom-scroll');
        if (cs) cs.destroy();
      });
      return this;
    }

    if (this.length === 1) return customScroll(this, options);
    this.each(function () {
      customScroll($(this), options);
    });
  };

  var defaultOptions = {
    prefix: 'custom-scroll_',
    barMinHeight: 10,
    barMinWidth: 10,
    offsetTop: 0,
    offsetBottom: 0,
    offsetLeft: 0,
    offsetRight: 0,
    trackWidth: 10,
    trackHeight: 10,
    barHtml: '<div />',
    vertical: true,
    horizontal: true,
    preventParentScroll: true
  };
  var DIRS_VERTICAL = {
    dim: 'height',
    Dim: 'Height',
    dir: 'top',
    Dir: 'Top',
    dir2: 'bottom',
    Dir2: 'Bottom',
    clientAxis: 'clientY',
    suffix: '-y'
  };
  var DIRS_HORIZONTAL = {
    dim: 'width',
    Dim: 'Width',
    dir: 'left',
    Dir: 'Left',
    dir2: 'right',
    Dir2: 'Right',
    clientAxis: 'clientX',
    suffix: '-x'
  };

  function customScroll($container, options) {
    var cs = $container.data('custom-scroll');
    if (cs) options = cs.options;else options = $.extend({}, defaultOptions, options);
    var dirs = {};
    var lastDims = {};
    var isBarHidden = {
      x: +options.vertical,
      y: +options.horizontal
    };

    if (options.horizontal) {
      dirs.x = DIRS_HORIZONTAL;
      lastDims.x = {};
    }

    if (options.vertical) {
      dirs.y = DIRS_VERTICAL;
      lastDims.y = {};
    }

    if ($container.hasClass(options.prefix + 'container') && cs) {
      cs.updateBars();
      return cs;
    }

    var $inner = $container.children('.' + options.prefix + 'inner');

    if (!$inner.length) {
      $inner = $container.wrapInner('<div class="' + options.prefix + 'inner' + '"></div>').children();
    }

    $container.addClass(options.prefix + 'container');
    var tmp = $('<div class="' + options.prefix + 'inner" />').width(100).height(100).appendTo('body').css({
      overflow: 'scroll'
    })[0];
    var scrollWidth = tmp.offsetWidth - tmp.clientWidth;
    var scrollHeight = tmp.offsetHeight - tmp.clientHeight;
    tmp.parentElement.removeChild(tmp);

    if (options.vertical) {
      $inner.css({
        paddingLeft: $container.css('paddingLeft'),
        paddingRight: $container.css('paddingRight'),
        marginRight: -scrollWidth + 'px'
      });
      $container.css({
        paddingLeft: 0,
        paddingRight: 0
      });
    } else {
      $inner.css({
        overflowY: 'hidden'
      });
    }

    if (options.horizontal) {
      $inner.css({
        marginBottom: -scrollHeight + 'px',
        paddingBottom: scrollHeight + 'px'
      });
      $container.css({
        paddingTop: 0,
        paddingBottom: 0
      });
    } else {
      $inner.css({
        overflowX: 'hidden'
      });
    }

    var maxHeight = $container.css('maxHeight');

    if (parseInt(maxHeight)) {
      $container.css('maxHeight', 'none');
      $inner.css('maxHeight', maxHeight);
    }

    $container.scrollTop(0);
    var $body = $('body');
    var $bars = {};
    $.each(dirs, initBar);
    $inner.on('scroll', updateBars);
    updateBars();
    if (options.preventParentScroll) preventParentScroll();
    var data = {
      $container: $container,
      $bar: $bars.y,
      $barX: $bars.x,
      $inner: $inner,
      destroy: destroy,
      updateBars: updateBars,
      options: options
    };
    $container.data('custom-scroll', data);
    return data;

    function preventParentScroll() {
      $inner.on('DOMMouseScroll mousewheel', function (e) {
        var $this = $(this);
        var scrollTop = this.scrollTop;
        var scrollHeight = this.scrollHeight;
        var height = $this.height();
        var delta = e.type == 'DOMMouseScroll' ? e.originalEvent.detail * -40 : e.originalEvent.wheelDelta;
        var up = delta > 0;

        if (up ? scrollTop === 0 : scrollTop === scrollHeight - height) {
          e.preventDefault();
        }
      });
    }

    function initBar(dirKey, dir) {
      $container['scroll' + dir.Dir](0);
      var cls = options.prefix + 'bar' + dir.suffix;
      var $bar = $container.children('.' + cls);

      if (!$bar.length) {
        $bar = $(options.barHtml).addClass(cls).appendTo($container);
      }

      $bar.on('mousedown touchstart', function (e) {
        e.preventDefault(); // stop scrolling in ie9

        var scrollStart = $inner['scroll' + dir.Dir]();
        var posStart = e[dir.clientAxis] || e.originalEvent.changedTouches && e.originalEvent.changedTouches[0][dir.clientAxis];
        var ratio = getDims(dirKey, dir).ratio;
        $body.on('mousemove.custom-scroll touchmove.custom-scroll', function (e) {
          e.preventDefault(); // stop scrolling

          var pos = e[dir.clientAxis] || e.originalEvent.changedTouches && e.originalEvent.changedTouches[0][dir.clientAxis];
          $inner['scroll' + dir.Dir](scrollStart + (pos - posStart) / ratio);
        });
        $body.on('mouseup.custom-scroll touchend.custom-scroll', function () {
          $body.off('.custom-scroll');
        });
      });
      $bars[dirKey] = $bar;
    }

    function getDims(dirKey, dir) {
      var total = $inner.prop('scroll' + dir.Dim) | 0;
      var dim = $container['inner' + dir.Dim]();
      var inner = $inner['inner' + dir.Dim]();
      var scroll = dim - options['offset' + dir.Dir] - options['offset' + dir.Dir2];
      if (!isBarHidden[dirKey == 'x' ? 'y' : 'x']) scroll -= options['track' + dir.Dim];
      var bar = Math.max(scroll * dim / total | 0, options['barMin' + dir.Dim]);
      var ratio = (scroll - bar) / (total - inner);
      return {
        ratio: ratio,
        dim: dim,
        scroll: scroll,
        total: total,
        bar: bar
      };
    }

    function updateBars() {
      $.each(dirs, updateBar);
    }

    function updateBar(dirKey, dir) {
      var dims = getDims(dirKey, dir);
      if (!dims.total) return;
      var scrollPos = $inner['scroll' + dir.Dir]();
      if (lastDims[dirKey].scrollPos === scrollPos && lastDims[dirKey].scroll === dims.scroll && lastDims[dirKey].total === dims.total) return;
      lastDims[dirKey] = dims;
      lastDims[dirKey].scrollPos = scrollPos;
      var isHide = dims.bar >= dims.scroll;

      if (isHide !== isBarHidden[dirKey]) {
        $container.toggleClass(options.prefix + 'hidden' + dir.suffix, isHide);
        isBarHidden[dirKey] = isHide;
      }

      var barPos = scrollPos * dims.ratio;
      if (barPos < 0) barPos = 0;
      if (barPos > dims.scroll - dims.bar) barPos = dims.scroll - dims.bar;
      $bars[dirKey][dir.dim](dims.bar).css(dir.dir, options['offset' + dir.Dir] + barPos);
    }

    function destroy() {
      $.each(dirs, function (key) {
        $bars[key].remove();
      });
      $container.removeClass(options.prefix + 'container').removeData('custom-scroll').css({
        padding: '',
        maxHeight: ''
      });
      $inner.contents().appendTo($container);
      $inner.remove();
    }
  }
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {// function reWidth() {
  //     if ($(document).width() < 1000) {
  //         $('.filter__wrapper').customScroll({
  //             vertical: true,
  //             horizontal: false
  //         });
  //     } else {
  //         $('.filter__block ul').customScroll({
  //             vertical: true,
  //             horizontal: false
  //         });
  //     }
  // };
  // reWidth();
  // $(window).on('resize', function(){
  //     setTimeout(reWidth, 300);
  // });
  // $(".filter__block").click(function() {
  //     setTimeout(reWidth, 300);
  // });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/oldSliders/oldSliders.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/oldSliders/oldSliders.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
 //========== Синхронный слайдер в карточке товара ==========

document.addEventListener('click', function () {
  if ($("div.gallery-top .swiper-slide").length > 1) {
    var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      centeredSlides: true,
      loopedSlides: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    var galleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      loopedSlides: 3,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  } else {
    $("div.gallery-thumbs").hide();
    $("div.swiper-button-next").hide();
    $("div.swiper-button-prev").hide();
  }

  if ($("div.tabs__slider-wrapper  .swiper-slide").length > 5) {
    var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.tabs__slider', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      centeredMode: true,
      loop: true,
      centeredSlides: true,
      loopedSlides: 5,
      navigation: {
        nextEl: '.tabs__slider-btn--next',
        prevEl: '.tabs__slider-btn--prev'
      }
    });
  } else {
    $('.tabs__slider').addClass('tabs__slider--static');
  }

  ;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/product-form/product-form.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/product-form/product-form.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.product-form');

  if (form) {
    (function () {
      var countResult = function countResult() {
        inputHidden.value = +inputVisible.value / +form.elements["type"].value;
        console.log('Итого коробок:' + inputHidden.value);
      };

      var btnPlus = form.querySelector('.product-form__counter-button--plus');
      var btnMinus = form.querySelector('.product-form__counter-button--minus');
      var inputVisible = form.querySelector('.product-form__counter-input');
      var inputHidden = form.querySelector('.product-form__input-hidden');
      var tabs = form.querySelectorAll('.product-form__input');
      var area = form.querySelector('#product-type-s').value;
      var count = form.querySelector('#product-type-count').value;
      var packs = form.querySelector('#product-type-pack').value;
      var result;
      var position;
      btnPlus.addEventListener('click', function (e) {
        e.preventDefault();
        inputVisible.value = +inputVisible.value + 1;
        countResult();
      });
      btnMinus.addEventListener('click', function (e) {
        e.preventDefault();

        if (+inputVisible.value > 1) {
          inputVisible.value = Math.round(+inputVisible.value - 1);
          countResult();
        }
      });

      for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('change', function () {
          countResult();
        });
      }

      countResult();
    })();
  }
});

/***/ }),

/***/ "./src/blocks/modules/product-slider/product-slider.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/product-slider/product-slider.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");

document.addEventListener('DOMContentLoaded', function () {
  (function initSlider() {
    var sliderTop = document.querySelector('.product-slider__top-slider');
    var sliderThumb = document.querySelector('.product-slider__bottom-slider');

    if (sliderThumb) {
      var length = sliderThumb.querySelectorAll('.product-slider__bottom-slide').length;

      if (length <= 1) {
        sliderThumb.classList.add('product-slider__bottom-slider--hidden');
      } else {
        var galleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderThumb, {
          spaceBetween: 16,
          slidesPerView: 3,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          loop: true,
          loopedSlides: 4,
          slideToClickedSlide: true,
          centeredSlides: true,
          slideActiveClass: 'product-slider__bottom-slide--active'
        });
        var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderTop, {
          loop: true,
          loopedSlides: 4,
          slideActiveClass: 'product-slider__top-slide--active',
          thumbs: {
            swiper: galleryThumbs
          }
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
      }
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/sidebar/sidebar.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sidebar/sidebar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {document.addEventListener('DOMContentLoaded', function () {
  $('a.sidebar__link').each(function () {
    if ($(this).attr('href') === $str) {
      $(this).addClass('sidebar__link--active');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/slider-line/slider-line.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/slider-line/slider-line.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");

document.addEventListener('DOMContentLoaded', function () {
  var parent = document.querySelectorAll('.slider-line');

  for (var i = 0; i < parent.length; i++) {
    initSlider(parent[i]);
  }

  function initSlider(item) {
    var slider = item.querySelector('.slider-line__container');
    var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      spaceBetween: 10,
      slidesPerView: 4,
      navigation: {
        nextEl: '.slider-line__btn--right',
        prevEl: '.slider-line__btn--left',
        disabledClass: 'slider-line__btn--disable'
      },
      breakpoints: {
        580: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        840: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 16
        }
      }
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/subtabs/subtabs.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/subtabs/subtabs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  (function toggleSubtabs() {
    var el = document.querySelectorAll('.subtabs');

    for (var i = 0; i < el.length; i++) {
      setToggle(el[i]);
    }

    function setToggle(el) {
      var link = el.querySelectorAll('a[data-subtabs-link]');
      var block = el.querySelectorAll('div[data-subtabs-content]');
      var select = el.querySelectorAll('.subtabs__mob-nav');

      if (link.length > 0 && link.length === block.length) {
        for (var i = 0; i < link.length; i++) {
          link[i].addEventListener('click', function (e) {
            e.preventDefault();
            var activeItem = this.getAttribute('data-subtabs-link');
            toggle(activeItem);
          });
        }

        for (var _i = 0; _i < select.length; _i++) {
          select[_i].addEventListener('change', function (e) {
            var activeItem = this.options[this.selectedIndex].value;
            toggle(activeItem);
          });
        }
      }

      function toggle(index) {
        for (var _i2 = 0; _i2 < link.length; _i2++) {
          link[_i2].classList.remove('subtabs__link--active');
        }

        link[index].classList.add('subtabs__link--active');

        for (var _i3 = 0; _i3 < block.length; _i3++) {
          if (index == block[_i3].getAttribute('data-subtabs-content')) {
            block[_i3].classList.add('subtabs__content--active');
          } else {
            block[_i3].classList.remove('subtabs__content--active');
          }
        }
      }
    }
  })();
});

/***/ }),

/***/ "./src/blocks/modules/table/table.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/table/table.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var counters = document.querySelectorAll('.table__counter');

  for (var i = 0; i < counters.length; i++) {
    changeCounter(counters[i]);
  }

  function changeCounter(item) {
    var btnMinus = item.querySelector('.table__counter-btn--prev');
    var btnPlus = item.querySelector('.table__counter-btn--next');
    var input = item.querySelector('.table__counter-input');
    checkDisabled(btnMinus, input.value);
    btnMinus.addEventListener('click', function (e) {
      e.preventDefault();

      if (input.value > 1) {
        input.value = +input.value - 1;
      }

      checkDisabled(btnMinus, input.value);
    });
    btnPlus.addEventListener('click', function (e) {
      e.preventDefault();
      input.value = +input.value + 1;
      checkDisabled(btnMinus, input.value);
    });

    function checkDisabled(item, value) {
      if (value == 1) {
        item.classList.add('table__counter-btn--disabled');
      } else {
        item.classList.remove('table__counter-btn--disabled');
      }
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {document.addEventListener('DOMContentLoaded', function () {
  $(".tabs__link ").click(function () {
    $(".tabs__link").removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    var thisTab = $(this).index();
    console.log(thisTab);
    $(".tabs__block").css({
      'display': 'none'
    });
    $(".tabs__block").eq(thisTab).css({
      'display': 'flex'
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_oldMagnificPopup_oldMagnificPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/oldMagnificPopup/oldMagnificPopup */ "./src/blocks/modules/oldMagnificPopup/oldMagnificPopup.js");
/* harmony import */ var _modules_oldFrontGrid_oldFrontGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/oldFrontGrid/oldFrontGrid */ "./src/blocks/modules/oldFrontGrid/oldFrontGrid.js");
/* harmony import */ var _modules_oldMmenu_oldMmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/oldMmenu/oldMmenu */ "./src/blocks/modules/oldMmenu/oldMmenu.js");
/* harmony import */ var _modules_oldSliders_oldSliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/oldSliders/oldSliders */ "./src/blocks/modules/oldSliders/oldSliders.js");
/* harmony import */ var _modules_oldScrollbar_oldScrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/oldScrollbar/oldScrollbar */ "./src/blocks/modules/oldScrollbar/oldScrollbar.js");
/* harmony import */ var _modules_oldScrollbar_oldScrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_oldScrollbar_oldScrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_oldRating_oldRating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/oldRating/oldRating */ "./src/blocks/modules/oldRating/oldRating.js");
/* harmony import */ var _modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/oldFavorites/oldFavorites */ "./src/blocks/modules/oldFavorites/oldFavorites.js");
/* harmony import */ var _modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/oldCookie/oldCookie */ "./src/blocks/modules/oldCookie/oldCookie.js");
/* harmony import */ var _modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_product_slider_product_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/product-slider/product-slider */ "./src/blocks/modules/product-slider/product-slider.js");
/* harmony import */ var _modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/item-card/item-card */ "./src/blocks/modules/item-card/item-card.js");
/* harmony import */ var _modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_slider_line_slider_line__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/slider-line/slider-line */ "./src/blocks/modules/slider-line/slider-line.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/sidebar/sidebar */ "./src/blocks/modules/sidebar/sidebar.js");
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/subtabs/subtabs */ "./src/blocks/modules/subtabs/subtabs.js");
/* harmony import */ var _modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_item_contact_item_contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/item-contact/item-contact */ "./src/blocks/modules/item-contact/item-contact.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/product-form/product-form */ "./src/blocks/modules/product-form/product-form.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/counter/counter */ "./src/blocks/modules/counter/counter.js");
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_counter_counter__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/table/table */ "./src/blocks/modules/table/table.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_table_table__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_filter_filter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/filter/filter */ "./src/blocks/modules/filter/filter.js");




















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

document.addEventListener('DOMContentLoaded', function () {
  $('.autoscroll').on('click', function (e) {
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
    e.preventDefault();
  });
  $(window).on('load scroll', function (e) {
    $('.autoscroll').toggleClass('autoscroll--hidden', $(this).scrollTop() > 600);
  }); // $(".grid").masonry({
  // 	itemSelector: ".grid__item", 
  // 	gutter: 15
  // });
  // $(".rating-visible").barrating({
  // 	theme: "css-stars", 
  // 	readonly: !0
  // });
  // $(".rating-input").barrating({
  // 	theme: "css-stars", 
  // 	initialRating: 5
  // });
  // $(".data__dropdown-link").click(function () {
  // 	$(".data__block-info").toggleClass("data__block-info--hidden"), $(".data__block-info").hasClass("data__block-info--hidden") ? $(".data__dropdown-link").text("Ð Ð°Ð·Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ") : $(".data__dropdown-link").text("Ð¡Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ")
  // }), 5 < $("div.tabs__slider-wrapper  .swiper-slide").length) t = new Swiper(".tabs__slider", {
  // 	spaceBetween: 10,
  // 	slidesPerView: "auto",
  // 	centeredMode: !0,
  // 	loop: !0,
  // 	centeredSlides: !0,
  // 	loopedSlides: 5,
  // 	navigation: {nextEl: ".tabs__slider-btn--next", prevEl: ".tabs__slider-btn--prev"}
  // }); else $(".tabs__slider").addClass("tabs__slider--static");
  // $(".tabs__slider-wrapper").magnificPopup({
  // 	delegate: "a",
  // 	type: "image",
  // 	mainClass: "mfp-img-mobile",
  // 	closeOnContentClick: !0,
  // 	gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]}
  // }); 

  $(".cart__btn--minus").click(function (e) {
    $(this).bind("selectstart", function () {
      return !1;
    });
    var t = $(this).parent().children(".cart__counter-total").val();
    1 < t && (t--, $(this).parent().children(".cart__counter-total").val(t), $(this).parent().children(".cart__counter-total").trigger("change")), e.preventDefault();
  });
  $(".cart__btn--plus").click(function (e) {
    $(this).bind("selectstart", function () {
      return !1;
    });
    var t = $(this).parent().children(".cart__counter-total").val();
    t++, $(this).parent().children(".cart__counter-total").val(t), $(this).parent().children(".cart__counter-total").trigger("change"), e.preventDefault();
  });
  $(".data").on("click", ".data__checkbox", function (e) {
    if ("INPUT" != e.target.tagName) {
      var t = $(e.target);
      t.hasClass("data__checkbox") || (t = t.parents(".data__checkbox")), t.parent().find('input[type="radio"]').each(function () {
        $(this).prop("checked", !1);
      }), t.find('input[type="radio"]').prop("checked", !0).trigger("click");
    }
  });
  $(".sign__accept input").on("change", function () {
    1 == $(this).prop("checked") ? $("#sign__button").removeClass("sign__button--disabled") : $("#sign__button").addClass("sign__button--disabled");
  }), $(".faq__form .faq__accept input").on("change", function () {
    1 == $(this).prop("checked") ? $(".faq__form .faq__btn").removeClass("faq__btn--disabled") : $(".faq__form .faq__btn").addClass("faq__btn--disabled");
  }), $(".call__question input").on("change", function () {
    1 == $(this).prop("checked") ? $(".call__control-btn").removeClass("call__control-btn--disabled") : $(".call__control-btn").addClass("call__control-btn--disabled");
  }), $(".write__checked-wrap input").on("change", function () {
    1 == $(this).prop("checked") ? $(".write__btn").removeClass("write__btn--disabled") : $(".write__btn").addClass("write__btn--disabled");
  }), $(".sign__nav-link--1").click(function () {
    $(".sign__block--2").css({
      display: "none"
    }), $(".sign__block--1").css({
      display: "block"
    }), $(".sign__nav-link--1").addClass("sign__nav-link--active"), $(".sign__nav-link--2").removeClass("sign__nav-link--active");
  }), $(".sign__nav-link--2").click(function () {
    $(".sign__block--1").css({
      display: "none"
    }), $(".sign__block--2").css({
      display: "block"
    }), $(".sign__nav-link--2").addClass("sign__nav-link--active"), $(".sign__nav-link--1").removeClass("sign__nav-link--active");
  }); // $(".accent__close--top").click(function () {
  // 	$.cookie("popup-top", "1", {
  // 		expires: 1
  // 	}); 
  // 	$(this).parent().parent().hide();
  // });

  $(function () {
    $("body").on("submit", ".call__content", function (e) {
      e.preventDefault();
      var t = $(e.target);

      if (!t.find(".call__columns").length) {
        var n = t.find('input[name="Prop[1]"]').val(),
            i = t.find('input[name="Prop[2]"]').val();
        if ("" == n && "" == i) return void alert("Пожалуйста, заполните имя и телефон");
        if ("" == n) return void alert("Пожалуйста, заполните имя");
        if ("" == i) return void alert("Пожалуйста, заполните телефон");
      }

      if (t.hasClass("sending")) t.find(".call__columns").length && (window.location = "/personal/cart/");else if (t.addClass("sending"), $.post(t.find(".call__columns").length ? "/ajax/add2basket.php" : "/ajax/under_order.php", t.serialize()), t.find(".call__columns").length) {
        var a = $(".header__link-counter").text();
        $(".header__link-counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
        $(".mob-toolbar__counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
        t.find(".call__control-btn").val("Перейти в корзину");
      } else {
        t.html("<p>Мы проинформируем вас о поступлении. Спасибо за обращение</p>");
      }
    });
    $('body').on('click', '.cart__link', function (e) {
      e.preventDefault();
      $.get('/personal/cart/ajax.php?action=delete&id=' + $(this).parents('.cart__line').data('id'), function (data) {});
      $(this).parents('.cart__line').remove();
      var a = $(".header__link-counter").text();
      $(".header__link-counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
      $(".mob-toolbar__counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
    });
    $(".item-card__submit.fast-buy").on("click", function (e) {
      e.preventDefault();
      var t = $(this);

      if (t.hasClass("item-card__submit--added")) {
        window.location = "/personal/cart/";
      } else {
        t.css("position", "relative");
        t.addClass("item-card__submit--added");
        t.text("Добавлено");
        setTimeout(function () {
          t.removeClass("item-card__submit--added");
          t.text("В корзину");
        }, 5000);
        var n = $(t.attr("data-href")).find("form");
        n.find(".counter__input").val($(this).parents(".item-card").find(".item-card__input").val());
        n.trigger("submit");
      }
    });
  });
  $(".popup").magnificPopup();
  $(".popup-item").magnificPopup({
    showCloseBtn: !1
  });
  $(".popup-image").magnificPopup({
    type: "image",
    closeOnContentClick: "true"
  });
  $(document).on('click', '.item-card__btn--plus', function () {
    var value = $(this).parent().children("input").val();
    value++;
    $(this).parent().children("input").val(value);
  });
  $(document).on('click', '.item-card__btn--minus', function () {
    var value = $(this).parent().children("input").val();
    1 < value && (value--, $(this).parent().children("input").val(value));
  });
  $('.item-card__tag--favorite').on('click', function () {
    var favorID = $(this).attr('data-item');

    if ($(this).hasClass('item-card__tag--favorite')) {
      favHandler(favorID, 'delete');
    } else {
      favHandler(favorID, 'add');
    }
  });
  getFavoriteItems();
  $(".item-card__submit.fast-buy").on("click", function (e) {
    e.preventDefault();
    var t = $(this);

    if (t.hasClass("item-card__submit--added")) {
      window.location = "/personal/cart/";
    } else {
      t.css("position", "relative");
      t.addClass("item-card__submit--added");
      t.text("Добавлено");
      setTimeout(function () {
        t.removeClass("item-card__submit--added");
        t.text("В корзину");
      }, 5000);
      var n = $(t.attr("data-href")).find("form");
      n.find(".counter__input").val($(this).parents(".item-card").find(".item-card__input").val());
      n.trigger("submit");
    }
  });
  $(document).ready(function () {
    $(document).on('click', '.counter__btn--plus', function () {
      var value = $(this).parent().children("input").val();
      value++;
      $(this).parent().children("input").val(value);
    });
    $(document).on('click', '.counter__btn--minus', function () {
      var value = $(this).parent().children("input").val();
      1 < value && (value--, $(this).parent().children("input").val(value));
    });
    $(document).on('click', '.shop__btn', function () {
      var url = window.location.href;
      var matches = url.match(/count=[a-z\d]+/gi);

      if (matches) {
        var countLink = +parseInt(matches[0].replace(/[^\d]/g, '')) + 15;
        var leftLink = url.split(matches)[0];
        var rightLink = url.split(matches)[1];
        window.location.href = leftLink + "count=" + countLink + rightLink;
      }
    });
  });

  function getFavoriteItems() {
    var param = 'get_fav_list=1';
    $.ajax({
      url: '/ajax/favorites.php',
      type: "GET",
      dataType: "html",
      data: param,
      success: function success(response) {
        var result = $.parseJSON(response);
        $(result).each(function (index, element) {
          if ($('.favorite-btn[data-item="' + element + '"]')) {
            $('.favorite-btn[data-item="' + element + '"]').addClass('item-card__tag--favorite');
          }
        });
      },
      error: function error(jqXHR, textStatus, errorThrown) {
        console.log('Error: ' + errorThrown);
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map