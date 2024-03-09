exports.ids = [1];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=117809f0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<p>\n        Right click on me\n    </p> "), _c('vue-context', {
    ref: "menu"
  }, [_c('li', [_c('a', {
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.onClick($event.target.innerText);
      }
    }
  }, [_vm._v("\n                Option 1\n            ")])]), _vm._v(" "), _c('li', [_c('a', {
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.onClick($event.target.innerText);
      }
    }
  }, [_vm._v("\n                Option 2\n            ")])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=117809f0

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.common.js
var vue_runtime_common = __webpack_require__(0);
var vue_runtime_common_default = /*#__PURE__*/__webpack_require__.n(vue_runtime_common);

// CONCATENATED MODULE: ./node_modules/vue-clickaway/index.js

var version = '2.2.2';
var compatible = /^2\./.test(vue_runtime_common_default.a.version);
if (!compatible) {
  vue_runtime_common_default.a.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + vue_runtime_common_default.a.version);
}

// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';
function bind(el, binding, vnode) {
  unbind(el);
  var vm = vnode.context;
  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (false) {}
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function () {
    initialMacrotaskEnded = true;
  }, 0);
  el[HANDLER] = function (ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };
  document.documentElement.addEventListener('click', el[HANDLER], false);
}
function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}
var directive = {
  bind: bind,
  update: function (el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind
};
var mixin = {
  directives: {
    onClickaway: directive
  }
};
// CONCATENATED MODULE: ./node_modules/vue-context/src/js/utils.js
if (!Array.from) {
  Array.from = object => {
    'use strict';

    return [].slice.call(object);
  };
}
if (!Array.isArray) {
  Array.isArray = arg => Object.prototype.toString.call(arg) === '[object Array]';
}

// --- Constants ---
const arrayFrom = Array.from;
const isArray = Array.isArray;
const keyCodes = {
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

// --- Dom Utils ---

// Returns true if the parent element contains the child element
const contains = (parent, child) => {
  if (!parent || typeof parent.contains !== 'function') {
    return false;
  }
  return parent.contains(child);
};

// Attach an event listener to an element
const eventOn = (el, eventName, handler) => {
  if (el && el.addEventListener) {
    el.addEventListener(eventName, handler);
  }
};

// Remove an event listener from an element
const eventOff = (el, eventName, handler) => {
  if (el && el.removeEventListener) {
    el.removeEventListener(eventName, handler);
  }
};

// Filter visible elements
const filterVisible = elements => (elements || []).filter(isVisible);

// Return the Bounding Client Rect of an element
// Returns `null` if not an element
const getBCR = el => isElement(el) ? el.getBoundingClientRect() : null;

// Determine if an element is an HTML element
const isElement = el => Boolean(el && el.nodeType === Node.ELEMENT_NODE);

// Determine if an HTML element is visible - Faster than CSS check
const isVisible = el => {
  if (!isElement(el) || !contains(document.body, el)) {
    return false;
  }
  if (el.style.display === 'none') {
    return false;
  }
  const bcr = getBCR(el);
  return Boolean(bcr && bcr.height > 0 && bcr.width > 0);
};

// Select all elements matching a selector. Returns `[]` if none found
const selectAll = (selector, root) => arrayFrom((isElement(root) ? root : document).querySelectorAll(selector));

// Set an attribute on an element
const setAttr = (el, attr, value) => {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
};
const parentElementByClassName = (element, className) => {
  let parentElement = element.parentElement;
  while (parentElement !== null && !parentElement.classList.contains(className)) {
    parentElement = parentElement.parentElement;
  }
  return parentElement;
};
// CONCATENATED MODULE: ./node_modules/vue-context/src/js/normalize-slot.js
const normalizeSlot = (name, scope = {}, $scopedSlots = {}, $slots = {}) => {
  // Note: in Vue 2.6.x, all named slots are also scoped slots
  const slot = $scopedSlots[name] || $slots[name];
  return typeof slot === 'function' ? slot(scope) : slot;
};
// CONCATENATED MODULE: ./node_modules/vue-context/src/js/vue-context.js



/* harmony default export */ var vue_context = ({
  directives: {
    onClickaway: directive
  },
  props: {
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeOnScroll: {
      type: Boolean,
      default: true
    },
    lazy: {
      type: Boolean,
      default: false
    },
    itemSelector: {
      type: [String, Array],
      default: () => ['.v-context-item', '.v-context > li > a']
    },
    role: {
      type: String,
      default: 'menu'
    },
    subMenuOffset: {
      type: Number,
      default: 10
    },
    useScrollHeight: {
      type: Boolean,
      default: false
    },
    useScrollWidth: {
      type: Boolean,
      default: false
    },
    heightOffset: {
      type: Number,
      default: 25
    },
    widthOffset: {
      type: Number,
      default: 25
    },
    tag: {
      type: String,
      default: 'ul'
    }
  },
  computed: {
    style() {
      return this.show ? {
        top: `${this.top}px`,
        left: `${this.left}px`
      } : null;
    }
  },
  data() {
    return {
      top: null,
      left: null,
      show: false,
      data: null,
      localItemSelector: '',
      activeSubMenu: null
    };
  },
  created() {
    this.localItemSelector = this.mapItemSelector(this.itemSelector);
  },
  beforeDestroy() {
    if (this.closeOnScroll) {
      this.removeScrollEventListener();
    }
  },
  methods: {
    addScrollEventListener() {
      eventOn(window, 'scroll', this.close);
    },
    addHoverEventListener(element) {
      element.querySelectorAll('.v-context__sub').forEach(subMenuNode => {
        eventOn(subMenuNode, 'mouseenter', this.openSubMenu);
        eventOn(subMenuNode, 'mouseleave', this.closeSubMenu);
      });
    },
    close() {
      if (!this.show) {
        return;
      }

      // make sure all sub menus are closed
      while (this.activeSubMenu !== null) {
        parentElementByClassName(this.activeSubMenu, 'v-context__sub').dispatchEvent(new Event('mouseleave'));
      }
      this.resetData();
      this.removeHoverEventListener(this.$el);
      if (this.closeOnScroll) {
        this.removeScrollEventListener();
      }
      this.$emit('close');
    },
    focusItem(index, items) {
      const el = items.find((el, idx) => idx === index);
      el && el.focus();
    },
    focusNext(event, up) {
      if (!this.show) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this.$nextTick(() => {
        const items = this.getItems();
        if (items.length < 1) {
          return;
        }
        let index = items.indexOf(event.target);
        if (up && index > 0) {
          index--;
        } else if (!up && index < items.length - 1) {
          index++;
        }
        if (index < 0) {
          index = 0;
        }
        this.focusItem(index, items);
      });
    },
    getItems() {
      // if a sub menu is active only return the elements of the sub menu to keep the scope
      return filterVisible(selectAll(this.localItemSelector, this.activeSubMenu || this.$el));
    },
    mapItemSelector(itemSelector) {
      if (isArray(itemSelector)) {
        itemSelector = itemSelector.map(selector => `${selector}:not(.disabled):not([disabled])`).join(', ');
      }
      return itemSelector;
    },
    onClick() {
      this.close();
    },
    onKeydown(event) {
      const key = event.keyCode;
      if (key === keyCodes.ESC) {
        // Close on esc
        this.close();
      } else if (key === keyCodes.DOWN) {
        // Down arrow
        this.focusNext(event, false);
      } else if (key === keyCodes.UP) {
        // Up arrow
        this.focusNext(event, true);
      } else if (key === keyCodes.RIGHT) {
        // check if a parent element which is associated with a sub menu can be found.
        const menuContainer = parentElementByClassName(event.target, 'v-context__sub');

        // try to open a sub menu if the sub menu isn't the current sub menu
        if (menuContainer && menuContainer.getElementsByClassName('v-context')[0] !== this.activeSubMenu) {
          menuContainer.dispatchEvent(new Event('mouseenter'));
          this.focusNext(event, false);
        }
      } else if (key === keyCodes.LEFT) {
        if (!this.activeSubMenu) {
          return;
        }
        const parentMenu = parentElementByClassName(this.activeSubMenu, 'v-context__sub');
        parentMenu.dispatchEvent(new Event('mouseleave'));
        const items = this.getItems(),
          index = items.indexOf(parentMenu.getElementsByTagName('a')[0]);
        this.focusItem(index, items);
      }
    },
    open(event, data) {
      this.data = data;
      this.show = true;
      this.$nextTick(() => {
        [this.top, this.left] = this.positionMenu(event.clientY, event.clientX, this.$el);
        this.$el.focus();
        this.setItemRoles();
        this.addHoverEventListener(this.$el);
        if (this.closeOnScroll) {
          this.addScrollEventListener();
        }
        this.$emit('open', event, this.data, this.top, this.left);
      });
    },
    openSubMenu(event) {
      const subMenuElement = this.getSubMenuElementByEvent(event),
        parentMenu = parentElementByClassName(subMenuElement.parentElement, 'v-context'),
        bcr = getBCR(event.target);

      // check if another sub menu is open. In this case make sure no other as well as no nested sub menu is open
      if (this.activeSubMenu !== parentMenu) {
        while (this.activeSubMenu !== null && this.activeSubMenu !== parentMenu && this.activeSubMenu !== subMenuElement) {
          parentElementByClassName(this.activeSubMenu, 'v-context__sub').dispatchEvent(new Event('mouseleave'));
        }
      }

      // first set the display and afterwards execute position calculation for correct element offsets
      subMenuElement.style.display = 'block';
      let [elementTop, elementLeft] = this.positionMenu(bcr.top, bcr.right - this.subMenuOffset, subMenuElement);
      subMenuElement.style.left = `${elementLeft}px`;
      subMenuElement.style.top = `${elementTop}px`;
      this.activeSubMenu = subMenuElement;
    },
    closeSubMenu(event) {
      const subMenuElement = this.getSubMenuElementByEvent(event),
        parentMenu = parentElementByClassName(subMenuElement, 'v-context');

      // if a sub menu is closed and it's not the currently active sub menu (eg. a lowe layered sub menu closed
      // by a mouseleave event) close all nested sub menus
      if (this.activeSubMenu !== subMenuElement) {
        while (this.activeSubMenu !== null && this.activeSubMenu !== subMenuElement) {
          parentElementByClassName(this.activeSubMenu, 'v-context__sub').dispatchEvent(new Event('mouseleave'));
        }
      }
      subMenuElement.style.display = 'none';

      // check if a parent menu exists and the parent menu is a sub menu to keep track of the correct sub menu
      this.activeSubMenu = parentMenu && parentElementByClassName(parentMenu, 'v-context__sub') ? parentMenu : null;
    },
    getSubMenuElementByEvent(event) {
      return event.target.getElementsByTagName('ul')[0];
    },
    positionMenu(top, left, element) {
      const elementHeight = this.useScrollHeight ? element.scrollHeight : element.offsetHeight;
      const largestHeight = window.innerHeight - elementHeight - this.heightOffset;
      const elementWidth = this.useScrollWidth ? element.scrollWidth : element.offsetWidth;
      const largestWidth = window.innerWidth - elementWidth - this.widthOffset;
      if (top > largestHeight) {
        top = largestHeight;
      }
      if (left > largestWidth) {
        left = largestWidth;
      }
      return [top, left];
    },
    removeScrollEventListener() {
      eventOff(window, 'scroll', this.close);
    },
    removeHoverEventListener(element) {
      element.querySelectorAll('.v-context__sub').forEach(subMenuNode => {
        eventOff(subMenuNode, 'mouseenter', this.openSubMenu);
        eventOff(subMenuNode, 'mouseleave', this.closeSubMenu);
      });
    },
    resetData() {
      this.top = null;
      this.left = null;
      this.data = null;
      this.show = false;
    },
    setItemRoles() {
      // Add role="menuitem" and tabindex="-1" to all items
      selectAll(this.localItemSelector, this.$el).forEach(el => {
        setAttr(el, 'role', 'menuitem');
        setAttr(el, 'tabindex', '-1');
      });
    }
  },
  watch: {
    closeOnScroll(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }
      if (newValue && this.show) {
        this.addScrollEventListener();
      } else {
        this.removeScrollEventListener();
      }
    },
    itemSelector(selector, oldValue) {
      if (selector !== oldValue) {
        this.localItemSelector = this.mapItemSelector(selector);
      }
    }
  },
  render(h) {
    if (this.lazy && !this.show) {
      return h(false);
    }

    // Only register the events we need
    const on = {
      // `!` modifier for capture
      '!contextmenu': e => {
        e.preventDefault();
      },
      keydown: this.onKeydown // up, down, esc
    };
    if (this.closeOnClick) {
      on.click = this.onClick;
    }

    // Only register the directives we need
    const directives = [{
      name: 'on-clickaway',
      value: this.close,
      rawName: 'v-on-clickaway'
    }];
    if (!this.lazy) {
      directives.push({
        name: 'show',
        value: this.show,
        rawName: 'v-show',
        expression: 'show'
      });
    }
    return h(this.tag, {
      staticClass: 'v-context',
      style: this.style,
      attrs: {
        tabindex: '-1',
        role: this.role,
        'aria-hidden': this.lazy ? null : String(!this.show)
      },
      on,
      directives
    }, [normalizeSlot('default', {
      data: this.data
    }, this.$scopedSlots, this.$slots)]);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-context/src/js/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  components: {
    VueContext: vue_context
  },
  methods: {
    onClick(text) {
      alert(`You clicked "${text}"!`);
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18d26c5a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map