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

/***/ "./src/blocks/modules/authRedirect/authRedirect.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/authRedirect/authRedirect.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.auth-link');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      setUrl();
    });
  }

  var setUrl = function setUrl() {
    sessionStorage.setItem('redirectLink', window.location.href);
  }; // let redirect = () => {
  // 	let link = sessionStorage.getItem('redirectLink');
  // 	if (link) {
  // 		delete sessionStorage.redirectLink;
  // 		document.location.href = link;
  // 	}
  // }
  // window.redirectLink = redirect;

});

/***/ }),

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
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


document.addEventListener('DOMContentLoaded', function () {
  $(window).scroll(function () {
    if ($(document).width() < 1000) {
      if ($(window).scrollTop() > 300) {
        $('.filter__mob-title').addClass('filter__mob-title--fixed');
      } else {
        $('.filter__mob-title').removeClass('filter__mob-title--fixed');
      }
    }
  });
});
console.log('Подключен');
document.addEventListener('DOMContentLoaded', function () {
  $(".filter__mob-title").click(function () {
    $('.body').toggleClass('body--filter');
  });
  $(".filter__overlay").click(function () {
    $('.body').toggleClass('body--filter');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var filter;
  var count;
  var page; // setFilter();

  function initFilter() {
    var parent = document.querySelector('.filter');

    if (parent) {
      filter = parent;
      initToggler();
      initRangeSlider();
      initCheckboxes();
      initToolbar();
      initPagination();
      initLoadMore();
      initTypes();
      initInputs();
      setFilter(filter);
      clearForm();

      if (sessionStorage.filterUsed) {
        preRequest();
      }
    }
  }

  function setStatus(state) {
    sessionStorage.setItem('filterUsed', state);
  }

  function initInputs() {
    var inputs = filter.querySelectorAll('.filter__inputs input');
    console.log(inputs);

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('blur', getRequest);
    }
  }

  function setFilter() {
    var state = JSON.parse(sessionStorage.getItem('filterState'));
    var checkboxes = JSON.parse(sessionStorage.getItem('filterCheckboxes'));

    if (state) {
      setToolbar(state['tag'] || null, state['count'] || null);
      setRadio(state['type']);
    }

    if (checkboxes) {
      setCheckboxes(checkboxes);
    }

    function setToolbar(stateTag, stateCount) {
      var toolbar = document.querySelector('.toolbar');
      var type;
      var counter;

      if (toolbar) {
        type = toolbar.elements['select-tag'];
        counter = toolbar.elements['select-count'];
      }

      if (stateTag && type) {
        type.value = stateTag;
      }

      if (stateCount && counter) {
        counter.value = stateCount;
      }
    }

    function setCheckboxes() {
      console.log(filter);

      var _iterator = _createForOfIteratorHelper(checkboxes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var input = document.getElementById(item);
          console.log(input);
          input.checked = true;
          setTag('add', input.id, input.parentNode.querySelector('span').innerHTML.trim()); // console.log(item);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    function setRadio(stateType) {
      var radio = filter.querySelectorAll('.filter__toggle-input');

      for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == stateType) {
          radio[i].checked = true;
        } else {
          radio[i].checked = false;
        }
      }
    }
  }

  function initTypes() {
    var radios = filter.querySelectorAll('.filter__toggle-input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', function () {
        resetCount();
        resetPages();
        setStatus(true);
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

        if (item.classList.contains('filter__block--fixed') == false && window.innerWidth > 1100) {
          var height = 0;

          var _items = item.querySelectorAll('ul li');

          for (var _i = 0; _i < 5; _i++) {
            if (_items[_i]) {
              height = height + _items[_i].clientHeight;
            }
          }

          if (item.classList.contains("filter__block--open")) {
            item.querySelector('ul').setAttribute("style", "max-height:" + height + "px");
          } else {
            item.querySelector('ul').setAttribute("style", "");
          }
        }
      });
    }
  }

  function initRangeSlider() {
    var state = JSON.parse(sessionStorage.getItem('filterState'));

    function initRangeSlider1() {
      var rangeSlider = filter.querySelector('#range-price');

      if (rangeSlider) {
        var activeBlock = rangeSlider.querySelector('.filter__range');
        var minValue = rangeSlider.querySelector('#input-with-keypress-0') || 0;
        var maxValue = rangeSlider.querySelector('#input-with-keypress-1') || 10000;
        window.priceSlider = activeBlock;
        var startMin = state && state.min ? +state.min : +minValue.value;
        var startMax = state && state.max ? +state.max : +maxValue.value;
        nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(activeBlock, {
          start: [startMin, startMax],
          connect: true,
          step: 1,
          range: {
            'min': [+minValue.value],
            'max': [+maxValue.value]
          }
        });
        activeBlock.noUiSlider.on('update', function (values, handle) {
          minValue.value = Math.round(values[0]);
          maxValue.value = Math.round(values[1]);
        });
        minValue.addEventListener('change', function () {
          activeBlock.noUiSlider.set([this.value, null]);
        });
        maxValue.addEventListener('change', function () {
          activeBlock.noUiSlider.set([null, this.value]);
        });
        activeBlock.noUiSlider.on('change', function (values, handle) {
          setStatus(true);
          getRequest();
        });
        var inputStart = rangeSlider.querySelector('#input-with-keypress-0');
        var inputEnd = rangeSlider.querySelector('#input-with-keypress-1');
        inputStart.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            window.priceSlider.noUiSlider.set([inputStart.value, null]);
            getRequest();
          }
        });
        inputEnd.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            window.priceSlider.noUiSlider.set([null, inputEnd.value]);
            getRequest();
          }
        });
      }
    }

    function initRangeSlider2() {
      var rangeSlider = filter.querySelector('#range-weight');

      if (rangeSlider) {
        var activeBlock = rangeSlider.querySelector('.filter__range');
        var minValue = rangeSlider.querySelector('#input-with-keypress-2') || 0;
        var maxValue = rangeSlider.querySelector('#input-with-keypress-3') || 10000;
        window.weightSlider = activeBlock;
        var startWmin = state && state.wmin ? +state.wmin : +minValue.value;
        var startWmax = state && state.wmax ? +state.wmax : +maxValue.value;
        nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(activeBlock, {
          start: [startWmin, startWmax],
          connect: true,
          step: 1,
          range: {
            'min': [+minValue.value],
            'max': [+maxValue.value]
          }
        });
        activeBlock.noUiSlider.on('update', function (values, handle) {
          minValue.value = Math.round(values[0]);
          maxValue.value = Math.round(values[1]);
        });
        activeBlock.noUiSlider.on('change', function (values, handle) {
          setStatus(true);
          getRequest();
        });
        var inputStart = rangeSlider.querySelector('#input-with-keypress-2');
        var inputEnd = rangeSlider.querySelector('#input-with-keypress-3');
        inputStart.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            window.weightSlider.noUiSlider.set([inputStart.value, null]);
            getRequest();
          }
        });
        inputEnd.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            window.weightSlider.noUiSlider.set([null, inputEnd.value]);
            getRequest();
          }
        });
      }
    }

    function initRangeSlider3() {
      var rangeSlider = filter.querySelector('#range-height');

      if (rangeSlider) {
        var activeBlock = rangeSlider.querySelector('.filter__range');
        var minValue = rangeSlider.querySelector('#input-with-keypress-4') || 0;
        var maxValue = rangeSlider.querySelector('#input-with-keypress-5') || 10000;
        window.heightSlider = activeBlock;
        var startHmin = state && state.hmin ? +state.hmin : +minValue.value;
        var startHmax = state && state.hmax ? +state.hmax : +maxValue.value;
        nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(activeBlock, {
          start: [startHmin, startHmax],
          connect: true,
          step: 1,
          range: {
            'min': [+minValue.value],
            'max': [+maxValue.value]
          }
        });
        activeBlock.noUiSlider.on('update', function (values, handle) {
          minValue.value = Math.round(values[0]);
          maxValue.value = Math.round(values[1]);
        });
        activeBlock.noUiSlider.on('change', function (values, handle) {
          setStatus(true);
          getRequest();
        });
        var inputStart = rangeSlider.querySelector('#input-with-keypress-4');
        var inputEnd = rangeSlider.querySelector('#input-with-keypress-5');
        inputStart.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            window.heightSlider.noUiSlider.set([inputStart.value, null]);
            getRequest();
          }
        });
        inputEnd.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            event.preventDefault();
            window.heightSlider.noUiSlider.set([null, inputEnd.value]);
            getRequest();
          }
        });
      }
    }

    initRangeSlider1();
    initRangeSlider2();
    initRangeSlider3();
  }

  function initCheckboxes() {
    var inputs = filter.querySelectorAll('.filter-input');

    for (var i = 0; i < inputs.length; i++) {
      addListeners(inputs[i]);
    }

    function addListeners(item) {
      var field = item.querySelector('.filter-input__input');
      field.addEventListener('change', function () {
        if (field.checked) {
          setStatus(true);
        }

        toggleButton(item, field.checked);
        getRequest();
      });
    }
  }

  function initLoadMore() {
    $('.shop__toolbar').on('click', '.shop__btn', function (e) {
      if (count) {
        count = +count + 15;
      } else {
        count = getCount();
        count = +count + 15;
      }

      getRequest();
    });
  }

  function initPagination() {
    $('.shop__navigation').on('click', '.pagination__btn', function (e) {
      page = this.dataset.page;
      getRequest();
    });
  }

  function initToolbar() {
    $('.shop').on('change', '.toolbar__select', function () {
      resetCount();
      getRequest();
    });
  }

  function toggleButton(item, state) {
    var block = item.querySelector('.filter-input__input');

    if (block.id && state) {
      setTag('add', item.querySelector('input').id, item.querySelector('span').innerHTML.trim());
      setStoreCheckbox('add', item.querySelector('input').id);
    } else {
      setTag('remove', item.querySelector('input').id, item.querySelector('span').innerHTML.trim());
      setStoreCheckbox('remove', item.querySelector('input').id);
    }
  }

  function setTag(event, id, title) {
    var parent = document.querySelector('.filter__selected');

    if (event == 'add') {
      var message = "\n            <span class=\"selected-item__text\">\n            ".concat(title, "\n            </span>\n            <svg class=\"selected-item__icon\">\n            <use xlink:href=\"/local/templates/diez__template_kerasfera/img/sprites/sprite.svg#icon-svg-close\"></use>\n            </svg>");
      var node = document.createElement('label');
      node.classList.add('selected-item');
      node.setAttribute('for', id);
      node.innerHTML = message;
      parent.appendChild(node);
      sessionStorage.setItem('tags', parent.innerHTML);
    } else if (event == 'remove') {
      var block = parent.querySelector('label[for="' + id + '"]');

      if (block) {
        block.remove();
      }

      sessionStorage.setItem('tags', parent.innerHTML);
    } else {
      return false;
    }
  }

  function setStoreCheckbox(event, id) {
    var store = JSON.parse(sessionStorage.getItem('filterCheckboxes'));

    if (store && event == 'add') {
      store = store.concat(id);
      sessionStorage.setItem('filterCheckboxes', JSON.stringify(store));
    } else if (store && event == 'remove') {
      var index = store.indexOf(id);

      if (index > -1) {
        store.splice(index, 1);
      }

      sessionStorage.setItem('filterCheckboxes', JSON.stringify(store));
    } else {
      store = [id];
      sessionStorage.setItem('filterCheckboxes', JSON.stringify(store));
    }
  }

  function resetCount() {
    count = getCount();
  }

  function resetPages() {
    page = 1;
  }

  function getValues() {
    var result = {
      page: page || 1,
      count: count,
      tag: getTag(),
      type: getTypes(),
      min: getRange('min'),
      max: getRange('max'),
      hmin: getRange('hmin'),
      hmax: getRange('hmax'),
      wmin: getRange('wmin'),
      wmax: getRange('wmax')
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
      var inputs = parent.querySelectorAll('.filter-input__input:checked');

      for (var n = 0; n < inputs.length; n++) {
        if (result[name] != undefined) {
          result[name] = result[name] + "," + inputs[n].value;
        } else if (result[name] == undefined) {
          result[name] = inputs[n].value;
        } else {
          return false;
        }
      }

      if (urlString != undefined) {
        return urlString;
      }
    }

    sessionStorage.setItem('filterState', JSON.stringify(result));
    return result;
  }

  function getPage() {
    return 1;
  }

  function getRange(price) {
    var startValue = filter.elements[price];
    var result;

    if (startValue.dataset.startValue != startValue.value) {
      result = filter.elements[price].value;

      if (Number.isInteger(+result)) {
        return result;
      }
    } else {
      return '';
    }
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

  function getRequest(page) {
    document.querySelector('.shop__items').classList.add('m-load');
    $.ajax({
      type: 'GET',
      data: getValues(),
      url: '/shop/ajax.php',
      success: function success(response) {
        var responceArr = $.parseHTML(response);

        function gelEl(el) {
          for (var i = 0; i < responceArr.length; i++) {
            if (el == responceArr[i].className) {
              return responceArr[i];
            }
          }
        }

        var params = gelEl('shop__items').querySelector('.columns');

        if ($(response).find('.columns__column').length < 4) {
          $('.shop__items .columns').html('<p style="margin-bottom:25px; text-align: center; width: 100%;">По вашему запросу ничего не найдено</p>');
        } else {
          $('.shop__items .columns').html(params);
        }

        var loadMore = gelEl('shop__toolbar');

        if (loadMore == undefined) {
          $('.shop__toolbar').html('');
        } else {
          var btn = loadMore.querySelector('.shop__btn');
          $('.shop__toolbar').html(btn);
        }

        var pagination = gelEl('shop__navigation');

        if (pagination == undefined) {
          $('.shop__navigation').html('');
        } else {
          var block = pagination.querySelector('.pagination');
          $('.shop__navigation').html(block);
        }

        toggleCounter();
        document.querySelector('.shop__items').classList.remove('m-load');
      },
      error: function error(response) {
        document.querySelector('.shop__items').classList.remove('m-load');
      }
    });
  }

  function preRequest() {
    var retrievedObject = sessionStorage.getItem('filterState');
    var parent = filter.querySelector('.filter__selected');
    document.querySelector('.shop__items').classList.add('m-load');
    $.ajax({
      type: 'GET',
      data: JSON.parse(retrievedObject),
      url: '/shop/ajax.php',
      success: function success(response) {
        var responceArr = $.parseHTML(response);

        function gelEl(el) {
          for (var i = 0; i < responceArr.length; i++) {
            if (el == responceArr[i].className) {
              return responceArr[i];
            }
          }
        }

        var params = gelEl('shop__items').querySelector('.columns');

        if ($(response).find('.columns__column').length < 4) {
          $('.shop__items .columns').html('<p style="margin-bottom:25px; text-align: center; width: 100%;">По вашему запросу ничего не найдено</p>');
        } else {
          $('.shop__items .columns').html(params);
        }

        var loadMore = gelEl('shop__toolbar');

        if (loadMore == undefined) {
          $('.shop__toolbar').html('');
        } else {
          var btn = loadMore.querySelector('.shop__btn');
          $('.shop__toolbar').html(btn);
        }

        var pagination = gelEl('shop__navigation');

        if (pagination == undefined) {
          $('.shop__navigation').html('');
        } else {
          var block = pagination.querySelector('.pagination');
          $('.shop__navigation').html(block);
        }

        toggleCounter();
        document.querySelector('.shop__items').classList.remove('m-load');
      },
      error: function error(response) {
        document.querySelector('.shop__items').classList.remove('m-load');
      }
    });
  }

  function clearForm() {
    var button = filter.querySelector('.filter__reset');
    var tags = filter.querySelector('.filter__selected');

    if (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        var type = filter.elements['filter-type'].value;
        filter.reset();
        filter.elements['filter-type'].value = type;
        tags.innerHTML = '';
        window.priceSlider.noUiSlider.set([0, +filter.querySelector('#input-with-keypress-1').dataset.startValue]);
        window.weightSlider.noUiSlider.set([0, +filter.querySelector('#input-with-keypress-3').dataset.startValue]);
        window.heightSlider.noUiSlider.set([0, +filter.querySelector('#input-with-keypress-5').dataset.startValue]); // console.log(window.priceSlider.noUiSlider.set([0, this.parentNode.querySelectorAll('input')[1].dataset.startValue]))

        delete sessionStorage.filterState;
        delete sessionStorage.tags;
        delete sessionStorage.filterCheckboxes;
        setStatus(false);
        getRequest();
      });
    }
  }

  function toggleCounter() {
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
  }

  ;
  toggleCounter();
  initFilter();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/item-card/item-card.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/item-card/item-card.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (function toggleCounter() {
//     let counter = document.querySelectorAll('.item-card__counter');
//     for (let i = 0; i < counter.length; i++) {
//         initToggleCounters(counter[i]);
//     }
//     function initToggleCounters(item) {
//         let btnMinus = item.querySelector('.item-card__btn--minus');
//         let btnPlus = item.querySelector('.item-card__btn--plus');
//         let field = item.querySelector('.item-card__input');
//         if (btnMinus && btnPlus && field) {
//             btnMinus.addEventListener('click', remove);
//             btnPlus.addEventListener('click', add);
//         }
//         function remove() {
//             if (+field.value > 1) {
//                 field.value--;
//             }
//         }
//         function add() {
//             field.value++;
//         }
//     }
// })();

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

/***/ "./src/blocks/modules/lk-sidebar/lk-sidebar.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/lk-sidebar/lk-sidebar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {document.addEventListener('DOMContentLoaded', function () {
  $('a.lk-sidebar__link').each(function () {
    if ($(this).attr('href') === $str) {
      $(this).addClass('lk-sidebar__link--active');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/login-form/login-form.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/login-form/login-form.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.login-form__wrapper');

  if (form) {
    var btn = form.querySelectorAll('.button--login-toggle');

    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        toggle();
      });
    }
  }

  function toggle() {
    form.classList.toggle('login-form__wrapper--reg');
  }
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/modules/oldBuy/oldBuy.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/oldBuy/oldBuy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {document.addEventListener('DOMContentLoaded', function () {
  // $(".item-card__submit.fast-buy").on("click", function (e) {
  // 	e.preventDefault();
  // 	var t = $(this);
  // 	if (t.hasClass("item-card__submit--added")) {
  // 		window.location = "/personal/cart/";
  // 	} else {
  // 		t.addClass("item-card__submit--added");
  // 		t.text("Добавлено");
  // 		setTimeout(function () {
  // 			t.removeClass("item-card__submit--added");
  // 			t.text("В корзину");
  // 		}, 5000);
  // 		var n = $(t.attr("data-href")).find("form");
  // 		n.find(".counter__input").val($(this).parents(".item-card").find(".item-card__input").val());
  // 		n.trigger("submit");
  // 	}
  // });
  $('body').on('click', '.cart__link', function (e) {
    e.preventDefault();
    $.get('/personal/cart/ajax.php?action=delete&id=' + $(this).parents('.cart__line').data('id'), function (data) {});
    $(this).parents('.cart__line').remove();
    var a = $(".header__link-counter").text();
    $(".header__link-counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
    $(".mob-toolbar__counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
  }); // Для карточки товара

  $("body").on("submit", ".item-card", function (e) {
    console.log('Работает');
    var form = this;
    e.preventDefault();
    $.ajax({
      type: 'POST',
      data: {
        item_id: form.dataset.id,
        iblick_id: form.dataset.iblockId,
        count: form.elements['q'].value
      },
      url: '/ajax/add2basket.php',
      success: function success(response) {
        console.log(this);

        if (response == 'true') {
          addCounter();
        }

        showMessage(form);
      },
      error: function error(response) {
        console.log(response);
      }
    });
  });
  $("body").on("submit", ".product-form", function (e) {
    var form = this;
    e.preventDefault();
    $.ajax({
      type: 'POST',
      data: {
        item_id: form.dataset.id,
        iblick_id: form.dataset.iblockId,
        count: form.elements['product-form__value'].value
      },
      url: '/ajax/add2basket.php',
      success: function success(response) {
        console.log(response);

        if (response == 'true') {
          addCounter();
          console.log('Ответ да');
        } else {
          console.log('Ответ нет');
        }
      },
      error: function error(response) {}
    });
  });

  function addCounter() {
    var countMob = document.querySelector('.mob-toolbar__counter');

    if (countMob) {
      countMob.innerText = +countMob.innerText + 1;
    }

    var countDesktop = document.querySelector('.header__link-counter');

    if (countDesktop) {
      countDesktop.innerText = +countDesktop.innerText + 1;
    }
  }

  function showMessage(form) {
    var button = form.querySelector('.item-card__submit');

    if (button) {
      button.innerText = "Добавлено";
      setTimeout(function () {
        button.innerText = "В корзину";
      }, 3000);
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
    $(document).on('click', '.item-card__tag--favorite', function (e) {
      var favorID = $(this).attr('data-item');

      if ($(this).hasClass('item-card__tag--favorite-active')) {
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

/***/ "./src/blocks/modules/oldLk/oldLk.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/oldLk/oldLk.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {document.addEventListener('DOMContentLoaded', function () {
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
      var step = input.getAttribute('step');

      if (input.value > 1) {
        var val = +input.value - +step;
        input.value = +val.toFixed(2);
        getRequest(input);
      }

      checkDisabled(btnMinus, input.value);
    });
    btnPlus.addEventListener('click', function (e) {
      e.preventDefault();
      var step = input.getAttribute('step');
      var val = +input.value + +step;
      input.value = +val.toFixed(2);
      getRequest(input);
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

  var getRequest = function getRequest(el) {
    var templateFolder = BX.message('templateFolder');
    $.ajax({
      url: templateFolder + "/get/ajax.php",
      data: {
        "action": "update",
        "id": $(el).closest('.table__tr').data('id'),
        "q": $(el).val()
      },
      type: "GET",
      success: function success(response) {
        changeQuantityItem(el.closest('.table__article'));
      },
      error: function error(xhr) {
        console.log(this);
      }
    });
  };

  var changeQuantityItem = function changeQuantityItem(el) {
    var quantity = +el.querySelector('.table__counter-input').value;
    var weight = +el.dataset.weight;
    var price = +el.dataset.price;
    var oldPrice = +el.dataset.oldPrice;
    var discont = +el.dataset.discont;

    var setPrice = function setPrice() {
      var itemPrice = price * quantity;
      var itemOldPrice = oldPrice * quantity;
      var itemPriceFixed = +itemPrice.toFixed(2);
      var itemOldPriceFixed = +itemOldPrice.toFixed(2);
      el.querySelector('.table__price--item').innerHTML = itemPriceFixed.toLocaleString() + " руб.";

      if (el.querySelector('.table__oldprice')) {
        el.querySelector('.table__oldprice').innerHTML = itemOldPriceFixed.toLocaleString() + " руб.";
      }

      el.dataset.fullPrice = itemPrice;
      el.dataset.fullDiscontPrice = itemOldPrice;
    };

    setPrice();
    changeCart();
  };

  $(document).on('click', '.table__remove', function () {
    var templateFolder = BX.message('templateFolder');
    var el = this;
    var id = $(this).closest('.table__tr').data('id');
    $.ajax({
      url: templateFolder + "/get/ajax.php",
      data: {
        "action": "delete",
        "id": id
      },
      type: "GET",
      success: function success(response) {
        var itemSum = $(el).closest('.table__tr').next().find(".table__counter-input").val();
        var headerCounter = document.querySelector('.header__link-counter');
        var toolbarCounter = document.querySelector('.mob-toolbar__counter');
        var num = +headerCounter.innerText.trim(); // $(el).closest('.table__tr').next().remove();

        $(el).closest('.table__article').remove();
        headerCounter.innerText = +num - itemSum;
        toolbarCounter.innerText = +num - itemSum;
        changeCart();
      },
      error: function error(xhr) {
        console.log(this);
      }
    });
  });
  $('.promocode__field').on('change', function () {
    var templateFolder = BX.message('templateFolder');
    $.ajax({
      url: templateFolder + "/get/activated-card.php",
      type: "POST",
      data: {
        card: $(this).val()
      },
      success: function success(data) {
        if (data == '') {
          $(".promocode__message").html('Карта успешно добавлена, пожалуйста перезагрузите страницу');
        } else {
          $(".promocode__message").html(data);
        }
      }
    });
  });

  var changeCart = function changeCart() {
    var recountCart = function recountCart() {
      var cart = document.querySelector('.table--cart');
      var articles = cart.querySelectorAll('.table__article');
      var resultBlock = cart.querySelector('.table__price--result');

      if (articles) {
        var result = 0;

        for (var _i = 0; _i < articles.length; _i++) {
          result = +result + +articles[_i].dataset.price * +articles[_i].querySelector('.table__counter-input').value;
        }

        var resultFixed = +result.toFixed(2);
        resultBlock.innerText = resultFixed.toLocaleString() + ' руб.';
      } else {
        resultBlock.innerText = '0 руб.';
      }
    };

    var reqountWeight = function reqountWeight() {
      var cart = document.querySelector('.table--cart');
      var items = cart.querySelectorAll('.table__article');
      var resultBlock = cart.querySelector('#final-weight');

      if (items) {
        var result = 0;

        for (var _i2 = 0; _i2 < items.length; _i2++) {
          result = +result + +items[_i2].dataset.weight * +items[_i2].querySelector('.table__counter-input').value;
          var itemWeight = items[_i2].dataset.weight * +items[_i2].querySelector('.table__counter-input').value;
          var itemWeightFixed = +itemWeight.toFixed(2);
          items[_i2].querySelector('#result-weight').innerText = itemWeightFixed + ' кг.';
        }

        var resultFixed = +result.toFixed(2);
        resultBlock.innerText = resultFixed + ' кг.';
      } else {
        resultBlock.innerText = '0 кг.';
      }
    };

    recountCart();
    reqountWeight();
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
  }); // $(".popup-gallery").magnificPopup({
  // 	delegate: "a",
  // 	type: "image",
  // 	tLoading: "Загрузка изображения...",
  // 	mainClass: "mfp-img-mobile",
  // 	gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]},
  // 	image: {
  // 		tError: "Ошибка загрузки изображения"
  // 	}
  // });

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
  }); // $(".gallery__item").magnificPopup({
  // 	type: "image",
  // 	image: {
  // 		titleSrc: 'title',
  // 		titleSrc: function(item) {
  // 			return '<a href="' + item.el.attr('data-link') + '">Посмотреть коллекцию</a>';
  // 		}
  // 	}
  // });
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
  var formType = form ? form.dataset.countType : null;

  if (formType === 'square') {
    initSquareCounter();
  } else if (formType === 'piece') {
    initPieceCounter();
  } else {
    return false;
  }

  function initSquareCounter() {
    var btnPlus = form.querySelector('.product-form__counter-button--plus');
    var btnMinus = form.querySelector('.product-form__counter-button--minus');
    var inputVisible = form.querySelector('.product-form__counter-input');
    var inputHidden = form.querySelector('.product-form__input-hidden');
    var tabs = form.querySelectorAll('.product-form__input');
    var area = form.querySelector('#product-type-s');
    var count = form.querySelector('#product-type-count');
    var packs = form.querySelector('#product-type-pack');
    var resultArea;
    var resultCount;
    var resultPack;

    if (area) {
      resultArea = area.value;
    }

    if (count) {
      resultCount = count.value;
    }

    if (packs) {
      resultPack = packs.value;
    }

    var result;
    btnPlus.addEventListener('click', function (e) {
      e.preventDefault();
      plus();
    });
    btnMinus.addEventListener('click', function (e) {
      e.preventDefault();
      minus();
    });

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('change', function () {
        countResult();
      });
    }

    function countResult() {
      var type = getDataAttr(tabs);
      inputHidden.value = resultPack;

      function getDataAttr(el) {
        for (var _i = 0; _i < el.length; _i++) {
          if (el[_i].checked) {
            return el[_i].getAttribute('data-type');
          }
        }
      }

      if (type == 'square') {
        inputVisible.value = Math.floor(resultArea * 1000) / 1000;
        console.log(resultArea + ' площадь');
      } else if (type == 'quantity') {
        console.log(resultCount + ' штуки');
        inputVisible.value = resultCount;
      } else if (type == 'packs') {
        console.log(resultPack + ' упаковок');
        inputVisible.value = resultPack;
      } else {
        return false;
      }
    }

    function plus() {
      if (area) {
        if (resultArea) {
          resultArea = +resultArea + +area.value;
        } else {
          resultArea = area.value;
        }
      }

      if (count) {
        if (resultCount) {
          resultCount = +resultCount + +count.value;
        } else {
          resultCount = +count.value;
        }
      }

      if (packs) {
        if (resultPack) {
          resultPack = +resultPack + +packs.value;
        } else {
          resultPack = +packs.value;
        }
      }

      countResult();
    }

    function minus() {
      if (area) {
        if (resultArea - area.value > 1) {
          resultArea = +resultArea - +area.value;
        } else {
          resultArea = 1;
        }
      }

      if (count) {
        if (resultCount - count.value > 1) {
          resultCount = +resultCount - +count.value;
        } else {
          resultCount = 1;
        }
      }

      if (packs) {
        if (resultPack - packs.value > 1) {
          resultPack = +resultPack - +packs.value;
        } else {
          resultPack = 1;
        }
      }

      countResult();
    }

    countResult();
  }

  function initPieceCounter() {
    var btnPlus = form.querySelector('.product-form__counter-button--plus');
    var btnMinus = form.querySelector('.product-form__counter-button--minus');
    var inputVisible = form.querySelector('.product-form__counter-input');
    var inputHidden = form.querySelector('.product-form__input-hidden');
    var tabs = form.querySelectorAll('.product-form__input');
    var count = form.querySelector('#product-type-count');
    var packs = form.querySelector('#product-type-pack');
    var result = inputVisible.value;
    btnPlus.addEventListener('click', function (e) {
      e.preventDefault();
      plus();
    });
    btnMinus.addEventListener('click', function (e) {
      e.preventDefault();
      minus();
    });

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('change', function () {
        countResult();
        countChange();
      });
    }

    function countResult() {
      inputVisible.value = result;
      inputHidden.value = result;
    }

    function countChange() {
      var type = getDataAttr(tabs);

      function getDataAttr(el) {
        for (var _i2 = 0; _i2 < el.length; _i2++) {
          if (el[_i2].checked) {
            return el[_i2].getAttribute('data-type');
          }
        }
      }

      if (type == 'quantity') {
        result = Math.ceil(result * count.value);
      } else if (type == 'packs') {
        result = Math.ceil(result / count.value);
      } else {
        return false;
      }

      inputVisible.value = result;
      inputHidden.value = result;
    }

    function plus() {
      result++;
      countResult();
    }

    function minus() {
      if (+result - 1 > 1) {
        result = +result - 1;
      } else {
        result = 1;
      }

      countResult();
    }
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
          },
          navigation: {
            nextEl: '.product-slider__btn--next',
            prevEl: '.product-slider__btn--prev'
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
/* harmony import */ var _modules_oldRating_oldRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/oldRating/oldRating */ "./src/blocks/modules/oldRating/oldRating.js");
/* harmony import */ var _modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/oldFavorites/oldFavorites */ "./src/blocks/modules/oldFavorites/oldFavorites.js");
/* harmony import */ var _modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/oldCookie/oldCookie */ "./src/blocks/modules/oldCookie/oldCookie.js");
/* harmony import */ var _modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_oldBuy_oldBuy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/oldBuy/oldBuy */ "./src/blocks/modules/oldBuy/oldBuy.js");
/* harmony import */ var _modules_oldBuy_oldBuy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_oldBuy_oldBuy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_oldLk_oldLk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/oldLk/oldLk */ "./src/blocks/modules/oldLk/oldLk.js");
/* harmony import */ var _modules_oldLk_oldLk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_oldLk_oldLk__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_lk_sidebar_lk_sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/lk-sidebar/lk-sidebar */ "./src/blocks/modules/lk-sidebar/lk-sidebar.js");
/* harmony import */ var _modules_lk_sidebar_lk_sidebar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_lk_sidebar_lk_sidebar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_authRedirect_authRedirect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/authRedirect/authRedirect */ "./src/blocks/modules/authRedirect/authRedirect.js");
/* harmony import */ var _modules_authRedirect_authRedirect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_authRedirect_authRedirect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_product_slider_product_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/product-slider/product-slider */ "./src/blocks/modules/product-slider/product-slider.js");
/* harmony import */ var _modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/item-card/item-card */ "./src/blocks/modules/item-card/item-card.js");
/* harmony import */ var _modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_slider_line_slider_line__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/slider-line/slider-line */ "./src/blocks/modules/slider-line/slider-line.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/sidebar/sidebar */ "./src/blocks/modules/sidebar/sidebar.js");
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/subtabs/subtabs */ "./src/blocks/modules/subtabs/subtabs.js");
/* harmony import */ var _modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_item_contact_item_contact__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/item-contact/item-contact */ "./src/blocks/modules/item-contact/item-contact.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/product-form/product-form */ "./src/blocks/modules/product-form/product-form.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/counter/counter */ "./src/blocks/modules/counter/counter.js");
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_modules_counter_counter__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/table/table */ "./src/blocks/modules/table/table.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_table_table__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _modules_filter_filter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/filter/filter */ "./src/blocks/modules/filter/filter.js");
/* harmony import */ var _modules_login_form_login_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/login-form/login-form */ "./src/blocks/modules/login-form/login-form.js");
/* harmony import */ var _modules_login_form_login_form__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_modules_login_form_login_form__WEBPACK_IMPORTED_MODULE_23__);


























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
  });
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
  $('.item-card__tag--favorite').on('click', function () {
    var favorID = $(this).attr('data-item');

    if ($(this).hasClass('item-card__tag--favorite')) {
      favHandler(favorID, 'delete');
    } else {
      favHandler(favorID, 'add');
    }
  });
  getFavoriteItems();
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

  function checkAgreement() {
    var checkedControl = document.querySelectorAll('[data-checked-control]');
    var checkedButton;

    for (var i = 0; i < checkedControl.length; i++) {
      toggle(checkedControl[i].dataset.checkedControl, checkedControl[i].checked);
      checkedControl[i].addEventListener('change', function () {
        toggle(this.dataset.checkedControl, this.checked);
      });
    }

    var search = function search() {};

    function toggle(id, status) {
      var button = document.querySelector('[data-checked-button="' + id + '"]');

      if (button && status) {
        button.classList.remove('disabled');
      } else if (button && status == false) {
        button.classList.add('disabled');
      } else {
        return false;
      }
    }
  }

  checkAgreement();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map