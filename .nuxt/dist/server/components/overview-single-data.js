exports.ids = [24,12];
exports.modules = {

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("620099b6", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Duration.vue?vue&type=template&id=0dd70816&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"duration"},[_c('v-icon',{staticClass:"mdi mdi-refresh icon-detail",attrs:{"size":"20","color":"grey"}}),_vm._ssrNode(" "),_c('v-card-subtitle',{staticClass:"detail"},[_vm._v("\n    "+_vm._s(_vm.duration)+"\n  ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Duration.vue?vue&type=template&id=0dd70816&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Duration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Durationvue_type_script_lang_js_ = ({
  props: ["duration"]
});
// CONCATENATED MODULE: ./components/Duration.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Durationvue_type_script_lang_js_ = (Durationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var VCard = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(47);

// CONCATENATED MODULE: ./components/Duration.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Durationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0dd70816",
  "ea6783d6"
  
)

/* harmony default export */ var Duration = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCardSubtitle: VCard["a" /* VCardSubtitle */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_0dd70816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_0dd70816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_0dd70816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_0dd70816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Duration_vue_vue_type_style_index_0_id_0dd70816_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".duration[data-v-0dd70816]{display:flex;margin-left:20px}.detail[data-v-0dd70816]{padding:12px}@media (max-width:500px){.detail[data-v-0dd70816]{font-size:.8rem}}@media (max-width:360px){.detail[data-v-0dd70816]{font-size:.75rem}}@media (max-width:320px){.detail[data-v-0dd70816]{font-size:.7rem}}@media (max-width:300px){.detail[data-v-0dd70816]{font-size:.65rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("cff4b3e2", content, true, context)
};

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/Single/Data.vue?vue&type=template&id=e24908a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"elevation-15 rounded-md"},[_c('v-card-title',{staticClass:"sidebar "},[_vm._v("\n    "+_vm._s(_vm.jetty)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"reading-box"},_vm._l((_vm.sensorData),function(data,index){return _c('div',{key:index,staticClass:"reading",attrs:{"sensorData":_vm.sensorData}},[_c('v-card-subtitle',{staticClass:"top",class:data.class},[_c('span',[_vm._v("\n          "+_vm._s(data.description)+"\n        ")])]),_vm._v(" "),_c('v-card-subtitle',{staticClass:"middle",class:data.isHigh ? 'high' : 'low'},[_vm._v("\n        "+_vm._s(data.data)+"\n      ")]),_vm._v(" "),_c('v-card-subtitle',{staticClass:"bottom"},[_vm._v("\n        "+_vm._s(data.unit)+"\n      ")])],1)}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Overview/Single/Data.vue?vue&type=template&id=e24908a4&scoped=true&

// EXTERNAL MODULE: ./components/Duration.vue + 4 modules
var Duration = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Overview/Single/Data.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Datavue_type_script_lang_js_ = ({
  components: {
    Duration: Duration["default"]
  },
  props: ["jetty", "sensorData", "sensorUnit", "duration"]
});
// CONCATENATED MODULE: ./components/Overview/Single/Data.vue?vue&type=script&lang=js&
 /* harmony default export */ var Single_Datavue_type_script_lang_js_ = (Datavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Overview/Single/Data.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(256)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Single_Datavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e24908a4",
  "28a7b45c"
  
)

/* harmony default export */ var Data = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCard: VCard["a" /* default */],VCardSubtitle: components_VCard["a" /* VCardSubtitle */],VCardTitle: components_VCard["b" /* VCardTitle */]})


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_e24908a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_e24908a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_e24908a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_e24908a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Data_vue_vue_type_style_index_0_id_e24908a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-card__title[data-v-e24908a4]{color:#f0f8ff;padding-top:10px;padding-bottom:10px;font-size:.95rem}.v-card__subtitle[data-v-e24908a4]{padding-top:15px;padding-bottom:5px;font-size:.9rem}.top[data-v-e24908a4]{font-weight:600;padding-top:20px;display:flex;justify-content:center;flex-wrap:wrap;align-items:center;min-height:50px}.bottom[data-v-e24908a4]{padding-bottom:20px}.reading-box[data-v-e24908a4]{justify-content:space-evenly}.reading[data-v-e24908a4],.reading-box[data-v-e24908a4]{display:flex;align-items:center}.reading[data-v-e24908a4]{flex-direction:column;flex-wrap:wrap}hr[data-v-e24908a4]{margin:0 20px}.low[data-v-e24908a4]{color:#000!important;font:normal}.high[data-v-e24908a4]{color:#ff0a0a!important;font:700}@media (max-width:500px){.v-card__title[data-v-e24908a4]{font-size:.9rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:10px;padding-right:10px;font-size:.8rem}.middle[data-v-e24908a4]{font-size:.9rem;padding-left:0;padding-right:0}}@media (max-width:376px){.v-card__title[data-v-e24908a4]{font-size:.9rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.85rem}}@media (max-width:360px){.v-card__title[data-v-e24908a4]{font-size:.85rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.85rem}}@media (max-width:320px){.v-card__title[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.65rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.75rem}}@media (max-width:300px){.v-card__title[data-v-e24908a4]{font-size:.8rem}.bottom[data-v-e24908a4],.top[data-v-e24908a4]{font-size:.6rem}.bottom[data-v-e24908a4],.middle[data-v-e24908a4],.top[data-v-e24908a4]{padding-left:0;padding-right:0}.middle[data-v-e24908a4]{font-size:.7rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=overview-single-data.js.map