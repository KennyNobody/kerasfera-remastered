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

/***/ "./src/blocks/modules/product-form/product-form.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/product-form/product-form.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.product-form');
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

  function countResult() {
    inputHidden.value = +inputVisible.value / +form.elements["type"].value;
    console.log('Итого коробок:' + inputHidden.value);
  }

  countResult();
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

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_product_slider_product_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/product-slider/product-slider */ "./src/blocks/modules/product-slider/product-slider.js");
/* harmony import */ var _modules_item_contact_item_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/item-contact/item-contact */ "./src/blocks/modules/item-contact/item-contact.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/product-form/product-form */ "./src/blocks/modules/product-form/product-form.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/table/table */ "./src/blocks/modules/table/table.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_table_table__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

window.addEventListener('load', function () {
  newFunc();
});

function newFunc() {
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

  (function toggleSubtabs() {
    var link = document.querySelectorAll('a[data-subtabs-link]');
    var block = document.querySelectorAll('div[data-subtabs-content]');
    var select = document.querySelectorAll('.subtabs__mob-nav');

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
  })();
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map