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

/***/ "./src/blocks/modules/oldFilter/oldFilter.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/oldFilter/oldFilter.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, $) {/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // import noUiSlider from 'nouislider';

/*! nouislider - 12.1.0 - 10/25/2018 */

!function (t) {
  "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : window.noUiSlider = t();
}(function () {
  "use strict";

  var et = "12.1.0";

  function s(t) {
    return null != t;
  }

  function rt(t) {
    t.preventDefault();
  }

  function i(t) {
    return "number" == typeof t && !isNaN(t) && isFinite(t);
  }

  function nt(t, e, r) {
    0 < r && (at(t, e), setTimeout(function () {
      st(t, e);
    }, r));
  }

  function it(t) {
    return Math.max(Math.min(t, 100), 0);
  }

  function ot(t) {
    return Array.isArray(t) ? t : [t];
  }

  function e(t) {
    var e = (t = String(t)).split(".");
    return 1 < e.length ? e[1].length : 0;
  }

  function at(t, e) {
    t.classList ? t.classList.add(e) : t.className += " " + e;
  }

  function st(t, e) {
    t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
  }

  function lt(t) {
    var e = void 0 !== window.pageXOffset,
        r = "CSS1Compat" === (t.compatMode || "");
    return {
      x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
      y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
    };
  }

  function c(t, e) {
    return 100 / (e - t);
  }

  function p(t, e) {
    return 100 * e / (t[1] - t[0]);
  }

  function f(t, e) {
    for (var r = 1; t >= e[r];) {
      r += 1;
    }

    return r;
  }

  function r(t, e, r) {
    if (r >= t.slice(-1)[0]) return 100;
    var n,
        i,
        o = f(r, t),
        a = t[o - 1],
        s = t[o],
        l = e[o - 1],
        u = e[o];
    return l + (i = r, p(n = [a, s], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0]) / c(l, u));
  }

  function n(t, e, r, n) {
    if (100 === n) return n;
    var i,
        o,
        a = f(n, t),
        s = t[a - 1],
        l = t[a];
    return r ? (l - s) / 2 < n - s ? l : s : e[a - 1] ? t[a - 1] + (i = n - t[a - 1], o = e[a - 1], Math.round(i / o) * o) : n;
  }

  function o(t, e, r) {
    var n;
    if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' contains invalid value.");
    if (!i(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider (" + et + "): 'range' value isn't numeric.");
    r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0);
  }

  function a(t, e, r) {
    if (!e) return !0;
    r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e) / c(r.xPct[t], r.xPct[t + 1]);
    var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
        i = Math.ceil(Number(n.toFixed(3)) - 1),
        o = r.xVal[t] + r.xNumSteps[t] * i;
    r.xHighestCompleteStep[t] = o;
  }

  function l(t, e, r) {
    var n;
    this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
    var i = [];

    for (n in t) {
      t.hasOwnProperty(n) && i.push([t[n], n]);
    }

    for (i.length && "object" == _typeof(i[0][0]) ? i.sort(function (t, e) {
      return t[0][0] - e[0][0];
    }) : i.sort(function (t, e) {
      return t[0] - e[0];
    }), n = 0; n < i.length; n++) {
      o(i[n][1], i[n][0], this);
    }

    for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) {
      a(n, this.xNumSteps[n], this);
    }
  }

  l.prototype.getMargin = function (t) {
    var e = this.xNumSteps[0];
    if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + et + "): 'limit', 'margin' and 'padding' must be divisible by step.");
    return 2 === this.xPct.length && p(this.xVal, t);
  }, l.prototype.toStepping = function (t) {
    return t = r(this.xVal, this.xPct, t);
  }, l.prototype.fromStepping = function (t) {
    return function (t, e, r) {
      if (100 <= r) return t.slice(-1)[0];
      var n,
          i = f(r, e),
          o = t[i - 1],
          a = t[i],
          s = e[i - 1],
          l = e[i];
      return n = [o, a], (r - s) * c(s, l) * (n[1] - n[0]) / 100 + n[0];
    }(this.xVal, this.xPct, t);
  }, l.prototype.getStep = function (t) {
    return t = n(this.xPct, this.xSteps, this.snap, t);
  }, l.prototype.getNearbySteps = function (t) {
    var e = f(t, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[e - 2],
        step: this.xNumSteps[e - 2],
        highestStep: this.xHighestCompleteStep[e - 2]
      },
      thisStep: {
        startValue: this.xVal[e - 1],
        step: this.xNumSteps[e - 1],
        highestStep: this.xHighestCompleteStep[e - 1]
      },
      stepAfter: {
        startValue: this.xVal[e],
        step: this.xNumSteps[e],
        highestStep: this.xHighestCompleteStep[e]
      }
    };
  }, l.prototype.countStepDecimals = function () {
    var t = this.xNumSteps.map(e);
    return Math.max.apply(null, t);
  }, l.prototype.convert = function (t) {
    return this.getStep(this.toStepping(t));
  };
  var u = {
    to: function to(t) {
      return void 0 !== t && t.toFixed(2);
    },
    from: Number
  };

  function d(t) {
    if ("object" == _typeof(e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
    var e;
    throw new Error("noUiSlider (" + et + "): 'format' requires 'to' and 'from' methods.");
  }

  function h(t, e) {
    if (!i(e)) throw new Error("noUiSlider (" + et + "): 'step' is not numeric.");
    t.singleStep = e;
  }

  function m(t, e) {
    if ("object" != _typeof(e) || Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'range' is not an object.");
    if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + et + "): Missing 'min' or 'max' in 'range'.");
    if (e.min === e.max) throw new Error("noUiSlider (" + et + "): 'range' 'min' and 'max' cannot be equal.");
    t.spectrum = new l(e, t.snap, t.singleStep);
  }

  function g(t, e) {
    if (e = ot(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + et + "): 'start' option is incorrect.");
    t.handles = e.length, t.start = e;
  }

  function v(t, e) {
    if ("boolean" != typeof (t.snap = e)) throw new Error("noUiSlider (" + et + "): 'snap' option must be a boolean.");
  }

  function b(t, e) {
    if ("boolean" != typeof (t.animate = e)) throw new Error("noUiSlider (" + et + "): 'animate' option must be a boolean.");
  }

  function S(t, e) {
    if ("number" != typeof (t.animationDuration = e)) throw new Error("noUiSlider (" + et + "): 'animationDuration' option must be a number.");
  }

  function w(t, e) {
    var r,
        n = [!1];

    if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
      for (r = 1; r < t.handles; r++) {
        n.push(e);
      }

      n.push(!1);
    } else {
      if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + et + "): 'connect' option doesn't match handle count.");
      n = e;
    }

    t.connect = n;
  }

  function x(t, e) {
    switch (e) {
      case "horizontal":
        t.ort = 0;
        break;

      case "vertical":
        t.ort = 1;
        break;

      default:
        throw new Error("noUiSlider (" + et + "): 'orientation' option is invalid.");
    }
  }

  function y(t, e) {
    if (!i(e)) throw new Error("noUiSlider (" + et + "): 'margin' option must be numeric.");
    if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + et + "): 'margin' option is only supported on linear sliders.");
  }

  function E(t, e) {
    if (!i(e)) throw new Error("noUiSlider (" + et + "): 'limit' option must be numeric.");
    if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + et + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
  }

  function C(t, e) {
    if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider (" + et + "): 'padding' option must be numeric or array of exactly 2 numbers.");

    if (0 !== e) {
      if (Array.isArray(e) || (e = [e, e]), !(t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])]) === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option is only supported on linear sliders.");
      if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + et + "): 'padding' option must be a positive number(s).");
      if (100 <= t.padding[0] + t.padding[1]) throw new Error("noUiSlider (" + et + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function N(t, e) {
    switch (e) {
      case "ltr":
        t.dir = 0;
        break;

      case "rtl":
        t.dir = 1;
        break;

      default:
        throw new Error("noUiSlider (" + et + "): 'direction' option was not recognized.");
    }
  }

  function U(t, e) {
    if ("string" != typeof e) throw new Error("noUiSlider (" + et + "): 'behaviour' must be a string containing options.");
    var r = 0 <= e.indexOf("tap"),
        n = 0 <= e.indexOf("drag"),
        i = 0 <= e.indexOf("fixed"),
        o = 0 <= e.indexOf("snap"),
        a = 0 <= e.indexOf("hover"),
        s = 0 <= e.indexOf("unconstrained");

    if (i) {
      if (2 !== t.handles) throw new Error("noUiSlider (" + et + "): 'fixed' behaviour must be used with 2 handles");
      y(t, t.start[1] - t.start[0]);
    }

    if (s && (t.margin || t.limit)) throw new Error("noUiSlider (" + et + "): 'unconstrained' behaviour cannot be used with margin or limit");
    t.events = {
      tap: r || o,
      drag: n,
      fixed: i,
      snap: o,
      hover: a,
      unconstrained: s
    };
  }

  function k(t, e) {
    if (!1 !== e) if (!0 === e) {
      t.tooltips = [];

      for (var r = 0; r < t.handles; r++) {
        t.tooltips.push(!0);
      }
    } else {
      if (t.tooltips = ot(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + et + "): must pass a formatter for all handles.");
      t.tooltips.forEach(function (t) {
        if ("boolean" != typeof t && ("object" != _typeof(t) || "function" != typeof t.to)) throw new Error("noUiSlider (" + et + "): 'tooltips' must be passed a formatter or 'false'.");
      });
    }
  }

  function P(t, e) {
    d(t.ariaFormat = e);
  }

  function A(t, e) {
    d(t.format = e);
  }

  function M(t, e) {
    if ("boolean" != typeof (t.keyboardSupport = e)) throw new Error("noUiSlider (" + et + "): 'keyboardSupport' option must be a boolean.");
  }

  function V(t, e) {
    t.documentElement = e;
  }

  function O(t, e) {
    if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + et + "): 'cssPrefix' must be a string or `false`.");
    t.cssPrefix = e;
  }

  function L(t, e) {
    if ("object" != _typeof(e)) throw new Error("noUiSlider (" + et + "): 'cssClasses' must be an object.");
    if ("string" == typeof t.cssPrefix) for (var r in t.cssClasses = {}, e) {
      e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
    } else t.cssClasses = e;
  }

  function ut(e) {
    var r = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: !0,
      animationDuration: 300,
      ariaFormat: u,
      format: u
    },
        n = {
      step: {
        r: !1,
        t: h
      },
      start: {
        r: !0,
        t: g
      },
      connect: {
        r: !0,
        t: w
      },
      direction: {
        r: !0,
        t: N
      },
      snap: {
        r: !1,
        t: v
      },
      animate: {
        r: !1,
        t: b
      },
      animationDuration: {
        r: !1,
        t: S
      },
      range: {
        r: !0,
        t: m
      },
      orientation: {
        r: !1,
        t: x
      },
      margin: {
        r: !1,
        t: y
      },
      limit: {
        r: !1,
        t: E
      },
      padding: {
        r: !1,
        t: C
      },
      behaviour: {
        r: !0,
        t: U
      },
      ariaFormat: {
        r: !1,
        t: P
      },
      format: {
        r: !1,
        t: A
      },
      tooltips: {
        r: !1,
        t: k
      },
      keyboardSupport: {
        r: !0,
        t: M
      },
      documentElement: {
        r: !1,
        t: V
      },
      cssPrefix: {
        r: !0,
        t: O
      },
      cssClasses: {
        r: !0,
        t: L
      }
    },
        i = {
      connect: !1,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: !0,
      cssPrefix: "noUi-",
      cssClasses: {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
      }
    };
    e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function (t) {
      if (!s(e[t]) && void 0 === i[t]) {
        if (n[t].r) throw new Error("noUiSlider (" + et + "): '" + t + "' is required.");
        return !0;
      }

      n[t].t(r, s(e[t]) ? e[t] : i[t]);
    }), r.pips = e.pips;
    var t = document.createElement("div"),
        o = void 0 !== t.style.msTransform,
        a = void 0 !== t.style.transform;
    r.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
    return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r;
  }

  function z(t, f, o) {
    var l,
        u,
        s,
        a,
        c,
        e,
        p,
        i,
        d = window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    },
        h = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function () {
      var t = !1;

      try {
        var e = Object.defineProperty({}, "passive", {
          get: function get() {
            t = !0;
          }
        });
        window.addEventListener("test", null, e);
      } catch (t) {}

      return t;
    }(),
        y = t,
        m = [],
        g = [],
        v = 0,
        E = f.spectrum,
        b = [],
        S = {},
        w = t.ownerDocument,
        x = f.documentElement || w.documentElement,
        C = w.body,
        N = -1,
        U = 0,
        k = 1,
        P = 2,
        A = "rtl" === w.dir || 1 === f.ort ? 0 : 100;

    function M(t, e) {
      var r = w.createElement("div");
      return e && at(r, e), t.appendChild(r), r;
    }

    function V(t, e) {
      return !!e && M(t, f.cssClasses.connect);
    }

    function r(t, e) {
      return !!f.tooltips[e] && M(t.firstChild, f.cssClasses.tooltip);
    }

    function O(e, i, o) {
      var a = w.createElement("div"),
          s = [];
      s[U] = f.cssClasses.valueNormal, s[k] = f.cssClasses.valueLarge, s[P] = f.cssClasses.valueSub;
      var l = [];
      l[U] = f.cssClasses.markerNormal, l[k] = f.cssClasses.markerLarge, l[P] = f.cssClasses.markerSub;
      var u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
          c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];

      function p(t, e) {
        var r = e === f.cssClasses.value,
            n = r ? s : l;
        return e + " " + (r ? u : c)[f.ort] + " " + n[t];
      }

      return at(a, f.cssClasses.pips), at(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(e).forEach(function (t) {
        !function (t, e, r) {
          if ((r = i ? i(e, r) : r) !== N) {
            var n = M(a, !1);
            n.className = p(r, f.cssClasses.marker), n.style[f.style] = t + "%", U < r && ((n = M(a, !1)).className = p(r, f.cssClasses.value), n.setAttribute("data-value", e), n.style[f.style] = t + "%", n.innerHTML = o.to(e));
          }
        }(t, e[t][0], e[t][1]);
      }), a;
    }

    function L() {
      var t;
      c && ((t = c).parentElement.removeChild(t), c = null);
    }

    function z(t) {
      L();

      var m,
          g,
          v,
          b,
          e,
          r,
          S,
          w,
          x,
          n = t.mode,
          i = t.density || 1,
          o = t.filter || !1,
          a = function (t, e, r) {
        if ("range" === t || "steps" === t) return E.xVal;

        if ("count" === t) {
          if (e < 2) throw new Error("noUiSlider (" + et + "): 'values' (>= 2) required for mode 'count'.");
          var n = e - 1,
              i = 100 / n;

          for (e = []; n--;) {
            e[n] = n * i;
          }

          e.push(100), t = "positions";
        }

        return "positions" === t ? e.map(function (t) {
          return E.fromStepping(r ? E.getStep(t) : t);
        }) : "values" === t ? r ? e.map(function (t) {
          return E.fromStepping(E.getStep(E.toStepping(t)));
        }) : e : void 0;
      }(n, t.values || !1, t.stepped || !1),
          s = (m = i, g = n, v = a, b = {}, e = E.xVal[0], r = E.xVal[E.xVal.length - 1], w = S = !1, x = 0, (v = v.slice().sort(function (t, e) {
        return t - e;
      }).filter(function (t) {
        return !this[t] && (this[t] = !0);
      }, {}))[0] !== e && (v.unshift(e), S = !0), v[v.length - 1] !== r && (v.push(r), w = !0), v.forEach(function (t, e) {
        var r,
            n,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            p,
            f = t,
            d = v[e + 1],
            h = "steps" === g;
        if (h && (r = E.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d) for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
          for (u = (a = (o = E.toStepping(n)) - x) / m, p = a / (c = Math.round(u)), i = 1; i <= c; i += 1) {
            b[(s = x + i * p).toFixed(5)] = [E.fromStepping(s), 0];
          }

          l = -1 < v.indexOf(n) ? k : h ? P : U, !e && S && (l = 0), n === d && w || (b[o.toFixed(5)] = [n, l]), x = o;
        }
      }), b),
          l = t.format || {
        to: Math.round
      };

      return c = y.appendChild(O(s, o, l));
    }

    function j() {
      var t = l.getBoundingClientRect(),
          e = "offset" + ["Width", "Height"][f.ort];
      return 0 === f.ort ? t.width || l[e] : t.height || l[e];
    }

    function F(n, i, o, a) {
      var e = function e(t) {
        return !!(t = function (t, e, r) {
          var n,
              i,
              o = 0 === t.type.indexOf("touch"),
              a = 0 === t.type.indexOf("mouse"),
              s = 0 === t.type.indexOf("pointer");
          0 === t.type.indexOf("MSPointer") && (s = !0);

          if (o) {
            var l = function l(t) {
              return t.target === r || r.contains(t.target);
            };

            if ("touchstart" === t.type) {
              var u = Array.prototype.filter.call(t.touches, l);
              if (1 < u.length) return !1;
              n = u[0].pageX, i = u[0].pageY;
            } else {
              var c = Array.prototype.find.call(t.changedTouches, l);
              if (!c) return !1;
              n = c.pageX, i = c.pageY;
            }
          }

          e = e || lt(w), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y);
          return t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t;
        }(t, a.pageOffset, a.target || i)) && !(y.hasAttribute("disabled") && !a.doNotReject) && (e = y, r = f.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !a.doNotReject) && !(n === d.start && void 0 !== t.buttons && 1 < t.buttons) && (!a.hover || !t.buttons) && (h || t.preventDefault(), t.calcPoint = t.points[f.ort], void o(t, a)));
        var e, r;
      },
          r = [];

      return n.split(" ").forEach(function (t) {
        i.addEventListener(t, e, !!h && {
          passive: !0
        }), r.push([t, e]);
      }), r;
    }

    function H(t) {
      var e,
          r,
          n,
          i,
          o,
          a,
          s = 100 * (t - (e = l, r = f.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, a = lt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), r ? n.top + a.y - o.clientTop : n.left + a.x - o.clientLeft)) / j();
      return s = it(s), f.dir ? 100 - s : s;
    }

    function D(t, e) {
      "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && R(t, e);
    }

    function T(t, e) {
      if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return R(t, e);
      var r = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
      $(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers);
    }

    function R(t, e) {
      e.handle && (st(e.handle, f.cssClasses.active), v -= 1), e.listeners.forEach(function (t) {
        x.removeEventListener(t[0], t[1]);
      }), 0 === v && (st(y, f.cssClasses.drag), J(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", rt))), e.handleNumbers.forEach(function (t) {
        Y("change", t), Y("set", t), Y("end", t);
      });
    }

    function q(t, e) {
      var r;

      if (1 === e.handleNumbers.length) {
        var n = u[e.handleNumbers[0]];
        if (n.hasAttribute("disabled")) return !1;
        r = n.children[0], v += 1, at(r, f.cssClasses.active);
      }

      t.stopPropagation();
      var i = [],
          o = F(d.move, x, T, {
        target: t.target,
        handle: r,
        listeners: i,
        startCalcPoint: t.calcPoint,
        baseSize: j(),
        pageOffset: t.pageOffset,
        handleNumbers: e.handleNumbers,
        buttonsProperty: t.buttons,
        locations: m.slice()
      }),
          a = F(d.end, x, R, {
        target: t.target,
        handle: r,
        listeners: i,
        doNotReject: !0,
        handleNumbers: e.handleNumbers
      }),
          s = F("mouseout", x, D, {
        target: t.target,
        handle: r,
        listeners: i,
        doNotReject: !0,
        handleNumbers: e.handleNumbers
      });
      i.push.apply(i, o.concat(a, s)), t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && at(y, f.cssClasses.drag), C.addEventListener("selectstart", rt, !1)), e.handleNumbers.forEach(function (t) {
        Y("start", t);
      });
    }

    function n(t) {
      t.stopPropagation();
      var n,
          i,
          o,
          e = H(t.calcPoint),
          r = (n = e, o = !(i = 100), u.forEach(function (t, e) {
        if (!t.hasAttribute("disabled")) {
          var r = Math.abs(m[e] - n);
          (r < i || 100 === r && 100 === i) && (o = e, i = r);
        }
      }), o);
      if (!1 === r) return !1;
      f.events.snap || nt(y, f.cssClasses.tap, f.animationDuration), K(r, e, !0, !0), J(), Y("slide", r, !0), Y("update", r, !0), Y("change", r, !0), Y("set", r, !0), f.events.snap && q(t, {
        handleNumbers: [r]
      });
    }

    function B(t) {
      var e = H(t.calcPoint),
          r = E.getStep(e),
          n = E.fromStepping(r);
      Object.keys(S).forEach(function (t) {
        "hover" === t.split(".")[0] && S[t].forEach(function (t) {
          t.call(a, n);
        });
      });
    }

    function X(t, e) {
      S[t] = S[t] || [], S[t].push(e), "update" === t.split(".")[0] && u.forEach(function (t, e) {
        Y("update", e);
      });
    }

    function Y(r, n, i) {
      Object.keys(S).forEach(function (t) {
        var e = t.split(".")[0];
        r === e && S[t].forEach(function (t) {
          t.call(a, b.map(f.format.to), n, b.slice(), i || !1, m.slice());
        });
      });
    }

    function _(t) {
      return t + "%";
    }

    function I(t, e, r, n, i, o) {
      return 1 < u.length && !f.events.unconstrained && (n && 0 < e && (r = Math.max(r, t[e - 1] + f.margin)), i && e < u.length - 1 && (r = Math.min(r, t[e + 1] - f.margin))), 1 < u.length && f.limit && (n && 0 < e && (r = Math.min(r, t[e - 1] + f.limit)), i && e < u.length - 1 && (r = Math.max(r, t[e + 1] - f.limit))), f.padding && (0 === e && (r = Math.max(r, f.padding[0])), e === u.length - 1 && (r = Math.min(r, 100 - f.padding[1]))), !((r = it(r = E.getStep(r))) === t[e] && !o) && r;
    }

    function W(t, e) {
      var r = f.ort;
      return (r ? e : t) + ", " + (r ? t : e);
    }

    function $(t, n, r, e) {
      var i = r.slice(),
          o = [!t, t],
          a = [t, !t];
      e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function (t, e) {
        var r = I(i, t, i[t] + n, o[e], a[e], !1);
        !1 === r ? n = 0 : (n = r - i[t], i[t] = r);
      }) : o = a = [!0];
      var s = !1;
      e.forEach(function (t, e) {
        s = K(t, r[t] + n, o[e], a[e]) || s;
      }), s && e.forEach(function (t) {
        Y("update", t), Y("slide", t);
      });
    }

    function G(t, e) {
      return f.dir ? 100 - t - e : t;
    }

    function J() {
      g.forEach(function (t) {
        var e = 50 < m[t] ? -1 : 1,
            r = 3 + (u.length + e * t);
        u[t].style.zIndex = r;
      });
    }

    function K(t, e, r, n) {
      return !1 !== (e = I(m, t, e, r, n, !1)) && (function (t, e) {
        m[t] = e, b[t] = E.fromStepping(e);
        var r = "translate(" + W(_(G(e, 0) - A), "0") + ")";
        u[t].style[f.transformRule] = r, Q(t), Q(t + 1);
      }(t, e), !0);
    }

    function Q(t) {
      if (s[t]) {
        var e = 0,
            r = 100;
        0 !== t && (e = m[t - 1]), t !== s.length - 1 && (r = m[t]);
        var n = r - e,
            i = "translate(" + W(_(G(e, n)), "0") + ")",
            o = "scale(" + W(n / 100, "1") + ")";
        s[t].style[f.transformRule] = i + " " + o;
      }
    }

    function Z(t, e) {
      var n = ot(t),
          r = void 0 === m[0];
      e = void 0 === e || !!e, f.animate && !r && nt(y, f.cssClasses.tap, f.animationDuration), g.forEach(function (t) {
        var e, r;
        K(t, (e = n[t], r = t, null === e || !1 === e || void 0 === e ? m[r] : ("number" == typeof e && (e = String(e)), e = f.format.from(e), !1 === (e = E.toStepping(e)) || isNaN(e) ? m[r] : e)), !0, !1);
      }), g.forEach(function (t) {
        K(t, m[t], !0, !0);
      }), J(), g.forEach(function (t) {
        Y("update", t), null !== n[t] && e && Y("set", t);
      });
    }

    function tt() {
      var t = b.map(f.format.to);
      return 1 === t.length ? t[0] : t;
    }

    return at(e = y, f.cssClasses.target), 0 === f.dir ? at(e, f.cssClasses.ltr) : at(e, f.cssClasses.rtl), 0 === f.ort ? at(e, f.cssClasses.horizontal) : at(e, f.cssClasses.vertical), l = M(e, f.cssClasses.base), function (t, e) {
      var r,
          n,
          i,
          o = M(e, f.cssClasses.connects);
      u = [], (s = []).push(V(o, t[0]));

      for (var a = 0; a < f.handles; a++) {
        u.push((r = a, i = void 0, n = M(e, f.cssClasses.origin), (i = M(n, f.cssClasses.handle)).setAttribute("data-handle", r), f.keyboardSupport && i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"), 0 === r ? at(i, f.cssClasses.handleLower) : r === f.handles - 1 && at(i, f.cssClasses.handleUpper), n)), g[a] = a, s.push(V(o, t[a + 1]));
      }
    }(f.connect, l), (p = f.events).fixed || u.forEach(function (t, e) {
      F(d.start, t.children[0], q, {
        handleNumbers: [e]
      });
    }), p.tap && F(d.start, l, n, {}), p.hover && F(d.move, l, B, {
      hover: !0
    }), p.drag && s.forEach(function (t, e) {
      if (!1 !== t && 0 !== e && e !== s.length - 1) {
        var r = u[e - 1],
            n = u[e],
            i = [t];
        at(t, f.cssClasses.draggable), p.fixed && (i.push(r.children[0]), i.push(n.children[0])), i.forEach(function (t) {
          F(d.start, t, q, {
            handles: [r, n],
            handleNumbers: [e - 1, e]
          });
        });
      }
    }), Z(f.start), a = {
      destroy: function destroy() {
        for (var t in f.cssClasses) {
          f.cssClasses.hasOwnProperty(t) && st(y, f.cssClasses[t]);
        }

        for (; y.firstChild;) {
          y.removeChild(y.firstChild);
        }

        delete y.noUiSlider;
      },
      steps: function steps() {
        return m.map(function (t, e) {
          var r = E.getNearbySteps(t),
              n = b[e],
              i = r.thisStep.step,
              o = null;
          !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === t ? i = null : 0 === t && (o = null);
          var a = E.countStepDecimals();
          return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i];
        });
      },
      on: X,
      off: function off(t) {
        var n = t && t.split(".")[0],
            i = n && t.substring(n.length);
        Object.keys(S).forEach(function (t) {
          var e = t.split(".")[0],
              r = t.substring(e.length);
          n && n !== e || i && i !== r || delete S[t];
        });
      },
      get: tt,
      set: Z,
      setHandle: function setHandle(t, e, r) {
        var n = [];
        if (!(0 <= (t = Number(t)) && t < g.length)) throw new Error("noUiSlider (" + et + "): invalid handle number, got: " + t);

        for (var i = 0; i < g.length; i++) {
          n[i] = null;
        }

        n[t] = e, Z(n, r);
      },
      reset: function reset(t) {
        Z(f.start, t);
      },
      __moveHandles: function __moveHandles(t, e, r) {
        $(t, e, m, r);
      },
      options: o,
      updateOptions: function updateOptions(e, t) {
        var r = tt(),
            n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
        n.forEach(function (t) {
          void 0 !== e[t] && (o[t] = e[t]);
        });
        var i = ut(o);
        n.forEach(function (t) {
          void 0 !== e[t] && (f[t] = i[t]);
        }), E = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, f.pips && z(f.pips), m = [], Z(e.start || r, t);
      },
      target: y,
      removePips: L,
      pips: z
    }, f.pips && z(f.pips), f.tooltips && (i = u.map(r), X("update", function (t, e, r) {
      if (i[e]) {
        var n = t[e];
        !0 !== f.tooltips[e] && (n = f.tooltips[e].to(r[e])), i[e].innerHTML = n;
      }
    })), X("update", function (t, e, a, r, s) {
      g.forEach(function (t) {
        var e = u[t],
            r = I(m, t, 0, !0, !0, !0),
            n = I(m, t, 100, !0, !0, !0),
            i = s[t],
            o = f.ariaFormat.to(a[t]);
        r = E.fromStepping(r).toFixed(1), n = E.fromStepping(n).toFixed(1), i = E.fromStepping(i).toFixed(1), e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", o);
      });
    }), a;
  }

  return {
    __spectrum: l,
    version: et,
    create: function create(t, e) {
      if (!t || !t.nodeName) throw new Error("noUiSlider (" + et + "): create requires a single element, got: " + t);
      if (t.noUiSlider) throw new Error("noUiSlider (" + et + "): Slider was already initialized.");
      var r = z(t, ut(e), e);
      return t.noUiSlider = r;
    }
  };
});
document.addEventListener('DOMContentLoaded', function () {
  var waitInterval = setInterval(function () {
    if ((typeof $ === "undefined" ? "undefined" : _typeof($)) == _typeof(function () {})) {
      clearInterval(waitInterval);
      $('.shop').each(function () {
        var $shop = $(this),
            $filterCheckbox = $shop.find('.filter__block input[type="checkbox"]'),
            $resetBtn = $shop.find('.reset.filter__reset'),
            $toggler = $shop.find('.filter__toogle'),
            initEnd = false,
            filterCheckbox = {},
            keypressSlider = null,
            keypressSlider1 = null,
            keypressSlider2 = null,
            needScroll = false,
            page = null,
            priceSetManual = false,
            sizeSetManual0 = false,
            sizeSetManual1 = false,
            execTimeout = null,
            init = function init() {
          initPrice();
          initSize();
          initFilter();
          $resetBtn.on('click', resetFilter);
          $shop.on('change', '.toolbar__select--sort', clickTag);
          $shop.on('change', '.filter__type-select', clickTag);
          $shop.on('change', '.toolbar__select--count', clickCount);
          $shop.on('click', '.page_nav a', clickPages);
          $shop.on('click', '.filter__toogle', clickToogler);
          $(".filter__name").click(function () {
            $(this).parent().toggleClass('filter__block--open');
          });
          $(".filter__mob-title").click(function () {
            $('.body').toggleClass('body--filter');
          });
          $(".filter__overlay").click(function () {
            $('.body').toggleClass('body--filter');
          });
          window.addEventListener('popstate', loadPage);
          exec();
          initEnd = true;
          $('body').removeClass('body--filter');
          $(".filter__name").eq(1).trigger('click');
          var showSize = false;
          $('.filter__block--RAZMER').find('input').each(function (i) {
            if (i == 0 || i == 2) {
              if ($(this).val() != 0) showSize = true;
            } else {
              if ($(this).val() != 300) showSize = true;
            }
          });

          if (showSize) {
            $('.filter__block--RAZMER .filter__name').trigger('click');
          }
        },
            initPrice = function initPrice() {
          keypressSlider = document.getElementById('filter__range');
          var input0 = document.getElementById('input-with-keypress-0');
          var input1 = document.getElementById('input-with-keypress-1');
          var inputs = [input0, input1];

          if (keypressSlider) {
            noUiSlider.create(keypressSlider, {
              start: [$(input0).val(), $(input1).val()],
              connect: true,
              step: 100,
              range: {
                'min': [0],
                'max': 10000
              }
            });
            keypressSlider.noUiSlider.on('update', function (values, handle) {
              inputs[handle].value = +values[handle];
              page = 1;

              if (!priceSetManual) {
                $('.body').addClass('body--filter');
                exec();
              }
            });
            inputs.forEach(function (input, handle) {
              input.addEventListener('change', function () {
                keypressSlider.noUiSlider.setHandle(handle, this.value);
              });
              input.addEventListener('keydown', function (e) {
                var values = keypressSlider.noUiSlider.get();
                var value = Number(values[handle]);
                var steps = keypressSlider.noUiSlider.steps();
                var step = steps[handle];
                var position;

                switch (e.which) {
                  case 13:
                    keypressSlider.noUiSlider.setHandle(handle, this.value);
                    break;

                  case 38:
                    position = step[1];

                    if (position === false) {
                      position = 1;
                    }

                    if (position !== null) {
                      keypressSlider.noUiSlider.setHandle(handle, value + position);
                    }

                    break;

                  case 40:
                    position = step[0];

                    if (position === false) {
                      position = 1;
                    }

                    if (position !== null) {
                      keypressSlider.noUiSlider.setHandle(handle, value - position);
                    }

                    break;
                }
              });
            });
          }
        },
            initSize = function initSize() {
          keypressSlider1 = document.getElementById('filter__range1');
          keypressSlider2 = document.getElementById('filter__range2');
          var input2 = document.getElementById('input-with-keypress-2');
          var input3 = document.getElementById('input-with-keypress-3');
          var input4 = document.getElementById('input-with-keypress-4');
          var input5 = document.getElementById('input-with-keypress-5');
          var inputs0 = [input2, input3];
          var inputs1 = [input4, input5];

          if (keypressSlider) {
            noUiSlider.create(keypressSlider1, {
              start: [$(input2).val(), $(input3).val()],
              connect: true,
              step: 5,
              range: {
                'min': [0],
                'max': 300
              }
            });
            noUiSlider.create(keypressSlider2, {
              start: [$(input4).val(), $(input5).val()],
              connect: true,
              step: 5,
              range: {
                'min': [0],
                'max': 300
              }
            });
            keypressSlider1.noUiSlider.on('update', function (values, handle) {
              inputs0[handle].value = +values[handle];
              page = 1;

              if (!sizeSetManual0) {
                $('.body').addClass('body--filter');
                exec();
              }
            });
            keypressSlider2.noUiSlider.on('update', function (values, handle) {
              inputs1[handle].value = +values[handle];
              page = 1;

              if (!sizeSetManual1) {
                $('.body').addClass('body--filter');
                exec();
              }
            });
            inputs0.forEach(function (input, handle) {
              input.addEventListener('change', function () {
                keypressSlider1.noUiSlider.setHandle(handle, this.value);
              });
              input.addEventListener('keydown', function (e) {
                var values = keypressSlider1.noUiSlider.get();
                var value = Number(values[handle]);
                var steps = keypressSlider1.noUiSlider.steps();
                var step = steps[handle];
                var position;

                switch (e.which) {
                  case 13:
                    keypressSlider1.noUiSlider.setHandle(handle, this.value);
                    break;

                  case 38:
                    position = step[1];

                    if (position === false) {
                      position = 1;
                    }

                    if (position !== null) {
                      keypressSlider1.noUiSlider.setHandle(handle, value + position);
                    }

                    break;

                  case 40:
                    position = step[0];

                    if (position === false) {
                      position = 1;
                    }

                    if (position !== null) {
                      keypressSlider1.noUiSlider.setHandle(handle, value - position);
                    }

                    break;
                }
              });
            });
            inputs1.forEach(function (input, handle) {
              input.addEventListener('change', function () {
                keypressSlider2.noUiSlider.setHandle(handle, this.value);
              });
              input.addEventListener('keydown', function (e) {
                var values = keypressSlider2.noUiSlider.get();
                var value = Number(values[handle]);
                var steps = keypressSlider2.noUiSlider.steps();
                var step = steps[handle];
                var position;

                switch (e.which) {
                  case 13:
                    keypressSlider2.noUiSlider.setHandle(handle, this.value);
                    break;

                  case 38:
                    position = step[1];

                    if (position === false) {
                      position = 1;
                    }

                    if (position !== null) {
                      keypressSlider2.noUiSlider.setHandle(handle, value + position);
                    }

                    break;

                  case 40:
                    position = step[0];

                    if (position === false) {
                      position = 1;
                    }

                    if (position !== null) {
                      keypressSlider2.noUiSlider.setHandle(handle, value - position);
                    }

                    break;
                }
              });
            });
          }
        },
            initFilter = function initFilter() {
          $filterCheckbox.on('click', changeFilter);
          $shop.find('.filter__checked-block').on('click', removeFilter);
          $filterCheckbox.each(function () {
            var $this = $(this);

            if (typeof filterCheckbox[$this.attr('name')] == 'undefined') {
              filterCheckbox[$this.attr('name')] = {};
            }

            filterCheckbox[$this.attr('name')][$this.attr('value')] = {
              input: $this,
              el: $shop.find('.filter-' + $this.attr('name') + '-' + $this.attr('value'))
            };
          });
          $filterCheckbox.filter(':checked').trigger('click');
        },
            clickToogler = function clickToogler(e) {
          e.preventDefault();
          $(this).toggleClass('filter__toogle--active');
          exec();
        },
            changeFilter = function changeFilter(e) {
          var label = $(this).parent();

          if (label.hasClass("active")) {
            label.removeClass('active');
            $(this).prop('checked', false);
            filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
          } else {
            label.addClass('active');
            $(e.target).prop('checked', true);
            filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.show();
          }

          page = 1;
          exec();
        },
            resetFilter = function resetFilter() {
          $filterCheckbox.filter(':checked').trigger('click');
          keypressSlider.noUiSlider.set([0, 50000]);
          keypressSlider1.noUiSlider.set([0, 300]);
          keypressSlider2.noUiSlider.set([0, 300]);
        },
            removeFilter = function removeFilter(e) {
          e.preventDefault();
          filterCheckbox[$(this).data('name')][$(this).data('value')].input.trigger('click');
        },
            clickTag = function clickTag() {
          page = 1;
          exec();
        },
            clickCount = function clickCount() {
          page = 1;
          exec();
        },
            clickPages = function clickPages(e) {
          e.preventDefault();
          page = $(this).attr('rel');
          needScroll = true;
          exec();
        },
            exec = function exec() {
          if (!initEnd) return;
          clearTimeout(execTimeout);
          execTimeout = setTimeout(function () {
            var params = {};
            var url = [];
            $('.shop__items').addClass('m-load');

            if (page != null) {
              url.push('page=' + page);
              params.page = page;
            }

            if ($toggler.hasClass('filter__toogle--active')) {
              url.push('type');
            }

            url.push('count=' + Number($(".toolbar__select--count").children("option:selected").val()));
            params.count = Number($(".toolbar__select--count").children("option:selected").val());

            if (document.documentElement.clientWidth > 1000) {
              url.push('tag=' + $(".toolbar__select--sort").children("option:selected").attr('name'));
              params.tag = $(".toolbar__select--sort").children("option:selected").attr('name');
              console.log('toolbar');
            } else {
              url.push('tag=' + $(".filter__type-select").children("option:selected").attr('name'));
              params.tag = $(".filter__type-select").children("option:selected").attr('name');
              console.log('filter');
            }

            var min = $('#input-with-keypress-0').val();
            var max = $('#input-with-keypress-1').val();
            url.push('min=' + min);
            url.push('max=' + max);
            params.min = min;
            params.max = max;
            var wmin = $('#input-with-keypress-2').val();
            var wmax = $('#input-with-keypress-3').val();
            url.push('wmin=' + wmin);
            url.push('wmax=' + wmax);
            params.wmin = wmin;
            params.wmax = wmax;
            var hmin = $('#input-with-keypress-4').val();
            var hmax = $('#input-with-keypress-5').val();
            url.push('hmin=' + hmin);
            url.push('hmax=' + hmax);
            params.hmin = hmin;
            params.hmax = hmax;
            var filterCheckboxActive = {};
            $filterCheckbox.filter(':checked').each(function () {
              if (typeof filterCheckboxActive[$(this).attr('name')] == 'undefined') {
                filterCheckboxActive[$(this).attr('name')] = $(this).val();
              } else {
                filterCheckboxActive[$(this).attr('name')] += ',' + $(this).val();
              }
            });
            params.filter = {};

            for (var prop in filterCheckboxActive) {
              url.push(prop + '=' + filterCheckboxActive[prop]);
              params.filter[prop] = filterCheckboxActive[prop].split(',');
            }

            $.get('?' + url.join('&'), function (html) {
              params.html = $(html).find('.shop__content').html();
              history.pushState(params, null, '?' + url.join('&'));

              try {
                var popStateEvent = new PopStateEvent('popstate', {
                  state: params
                });
                dispatchEvent(popStateEvent);
                $('.toolbar__select--count option[value="' + params.count + '"]').prop('selected', true);
                $('.toolbar__select--sort option[name="' + params.tag + '"]').prop('selected', true);
              } catch (ex) {
                window.location = '?' + url.join('&');
              }
            });
          }, 500);
        },
            loadPage = function loadPage(e) {
          if (e.state == null) return;

          if ($('.filter__wrapper').css('position') != 'fixed') {
            $('.body').removeClass('body--filter');
          }

          $shop.find('.shop__content').html(e.state.html).find('.popup-item').magnificPopup({
            showCloseBtn: false
          });
          $shop.find('.shop__content').find('.call__close').on('click', function (e) {
            $.magnificPopup.close();
          });
          priceSetManual = true;
          keypressSlider.noUiSlider.set([e.state.min, e.state.max]);
          priceSetManual = false;
          sizeSetManual0 = true;
          keypressSlider1.noUiSlider.set([e.state.wmin, e.state.wmax]);
          sizeSetManual0 = false;
          sizeSetManual1 = true;
          keypressSlider2.noUiSlider.set([e.state.hmin, e.state.hmax]);
          sizeSetManual1 = false;
          $filterCheckbox.filter(':checked').each(function () {
            $(this).parent().removeClass('active');
            $(this).prop('checked', false);
            filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
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

          for (var prop in e.state.filter) {
            $.each(e.state.filter[prop], function () {
              filterCheckbox[prop][this].input.parent().addClass('active');
              filterCheckbox[prop][this].input.prop('checked', true);
              filterCheckbox[prop][this].el.show();
            });
          }

          if (needScroll) {
            $("html, body").stop().animate({
              scrollTop: 0
            }, 500, 'swing');
            needScroll = false;
          }
        };

        init();
      });
    }
  }, 100);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* jQuery Custom Scroll plugin v0.6.6 | (c) 2015 Mostovoy Andrey | https://github.com/standy/custom-scroll/blob/master/LICENSE */
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

document.addEventListener('DOMContentLoaded', function () {
  function reWidth() {
    if ($(document).width() < 1000) {
      $('.filter__wrapper').customScroll({
        vertical: true,
        horizontal: false
      });
    } else {
      $('.filter__block ul').customScroll({
        vertical: true,
        horizontal: false
      });
    }
  }

  ;
  reWidth();
  $(window).on('resize', function () {
    setTimeout(reWidth, 300);
  });
  $(".filter__block").click(function () {
    setTimeout(reWidth, 300);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
/* harmony import */ var _modules_oldMmenu_oldMmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/oldMmenu/oldMmenu */ "./src/blocks/modules/oldMmenu/oldMmenu.js");
/* harmony import */ var _modules_oldSliders_oldSliders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/oldSliders/oldSliders */ "./src/blocks/modules/oldSliders/oldSliders.js");
/* harmony import */ var _modules_oldScrollbar_oldScrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/oldScrollbar/oldScrollbar */ "./src/blocks/modules/oldScrollbar/oldScrollbar.js");
/* harmony import */ var _modules_oldScrollbar_oldScrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_oldScrollbar_oldScrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_oldRating_oldRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/oldRating/oldRating */ "./src/blocks/modules/oldRating/oldRating.js");
/* harmony import */ var _modules_oldFilter_oldFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/oldFilter/oldFilter */ "./src/blocks/modules/oldFilter/oldFilter.js");
/* harmony import */ var _modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/oldFavorites/oldFavorites */ "./src/blocks/modules/oldFavorites/oldFavorites.js");
/* harmony import */ var _modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_oldFavorites_oldFavorites__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/oldCookie/oldCookie */ "./src/blocks/modules/oldCookie/oldCookie.js");
/* harmony import */ var _modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_oldCookie_oldCookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_product_slider_product_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/product-slider/product-slider */ "./src/blocks/modules/product-slider/product-slider.js");
/* harmony import */ var _modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/item-card/item-card */ "./src/blocks/modules/item-card/item-card.js");
/* harmony import */ var _modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_item_card_item_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/subtabs/subtabs */ "./src/blocks/modules/subtabs/subtabs.js");
/* harmony import */ var _modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_subtabs_subtabs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_item_contact_item_contact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/item-contact/item-contact */ "./src/blocks/modules/item-contact/item-contact.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/product-form/product-form */ "./src/blocks/modules/product-form/product-form.js");
/* harmony import */ var _modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_product_form_product_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/counter/counter */ "./src/blocks/modules/counter/counter.js");
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_counter_counter__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/table/table */ "./src/blocks/modules/table/table.js");
/* harmony import */ var _modules_table_table__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_table_table__WEBPACK_IMPORTED_MODULE_15__);

















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
 // import "./libs";

document.addEventListener('DOMContentLoaded', function () {
  function initAutoScroll() {
    var btn = document.querySelector('.autoscroll');

    if (btn) {
      btn.addEventListener('click', function (event) {
        event.preventDefault();
        $("html, body").animate({
          scrollTop: 0
        }, 2000);
      });
    }
  }

  $(window).on('load scroll', function (e) {
    $('.autoscroll').toggleClass('autoscroll--hidden', $(this).scrollTop() > 600);
  });
  $(window).scroll(function () {
    if ($(document).width() < 1000) {
      if ($(window).scrollTop() > 300) {
        $('.filter__mob-title').addClass('filter__mob-title--fixed');
      } else {
        $('.filter__mob-title').removeClass('filter__mob-title--fixed');
      }
    }
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

      if (t.hasClass("sending")) t.find(".call__columns").length && (window.location = "/personal/cart/");else if (t.addClass("sending"), $.post(t.find(".call__columns").length ? "/aktsii/add2basket.php" : "/ajax/under_order.php", t.serialize()), t.find(".call__columns").length) {
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
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map