"use strict";(self.webpackChunk_k99hyerin_dj_simblue=self.webpackChunk_k99hyerin_dj_simblue||[]).push([[256],{"./src/stories/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithIcon:function(){return WithIcon},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var _templateObject,_templateObject2,_templateObject3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Text=__webpack_require__("./src/components/Text/index.tsx"),theme_size=__webpack_require__("./src/theme/size.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),palette=__webpack_require__("./src/theme/palette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["text","size","isDisabled","color","children"],Button=function Button(_ref){var _ref$text=_ref.text,text=void 0===_ref$text?"button":_ref$text,_ref$size=_ref.size,size=void 0===_ref$size?"X_SMALL":_ref$size,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsxs)(ButtonStyle,(0,objectSpread2.Z)((0,objectSpread2.Z)({color:color,size:size,isDisabled:isDisabled},props),{},{children:[children,(0,jsx_runtime.jsx)(Text.Z,{typo:"LABEL_".concat(size),children:text})]}))},ButtonStyle=emotion_styled_browser_esm.Z.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.4rem;\n  color: white;\n  gap: 0.625rem;\n  background-color: ",";\n\n  ","\n  ","\n\n\n    ","\n\n  &:active {\n    box-shadow: inset 999px 999px 4px rgba(255, 255, 255, 0.2);\n  }\n"])),palette.Z.PRIMARY_400,(function(_ref2){var size=_ref2.size;return(0,theme_size.Pc)(theme_size.L8,size)}),(function(_ref3){return _ref3.isDisabled&&(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),palette.Z.GRAY_400,palette.Z.GRAY_200)}),(function(_ref4){return"white"===_ref4.color&&(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      border: 2px solid ",";\n      background-color: ",";\n\n      &:active {\n        background-color: ",";\n      }\n    "])),palette.Z.MONO_BLACK,palette.Z.GRAY_50,palette.Z.MONO_WHITE,palette.Z.GRAY_50)}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"X_SMALL"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"MEDIUM"'},{value:'"LARGE"'},{value:'"X_SMALL"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"button"},description:"",name:"text",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{ButtonStyle.displayName="ButtonStyle",ButtonStyle.__docgenInfo={description:"",displayName:"ButtonStyle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},size:{defaultValue:{value:"X_SMALL"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"MEDIUM"'},{value:'"LARGE"'},{value:'"X_SMALL"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"button"},description:"",name:"text",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#ButtonStyle"]={docgenInfo:ButtonStyle.__docgenInfo,name:"ButtonStyle",path:"src/components/Button/index.tsx#ButtonStyle"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_WithIcon$parameters,_WithIcon$parameters2,_WithIcon$parameters3,Icon=__webpack_require__("./src/components/Icon/index.tsx"),Button_stories={title:"Component/Button",component:Button},Default={render:function render(args){return(0,jsx_runtime.jsx)(Button,(0,objectSpread2.Z)({},args))}},WithIcon={render:function render(args){return(0,jsx_runtime.jsx)(Button,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:(0,jsx_runtime.jsx)(Icon.JO,{size:"SMALL",iconName:"ArrowBack",color:"MONO_WHITE"})}))}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => <Button {...args} />\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),WithIcon.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},WithIcon.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: args => <Button {...args}>\n      <Icon size="SMALL" iconName="ArrowBack" color="MONO_WHITE" />\n    </Button>\n}'},null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters3=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters3?void 0:_WithIcon$parameters3.source)})});var __namedExportsOrder=["Default","WithIcon"]},"./src/components/Text/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_theme_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/palette.ts"),_theme_typo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/typo.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=function Text(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextStyle,(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},props),{},{children:props.children}))},TextStyle=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.span(_templateObject||(_templateObject=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: inline-block;\n  align-items: center;\n  white-space: pre-wrap;\n\n  ","\n  ","\n"])),(function(_ref){var typo=_ref.typo;return(0,_theme_typo__WEBPACK_IMPORTED_MODULE_3__.a)(typo)}),(function(_ref2){var _getColorFromName,textColor=_ref2.textColor;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)(_templateObject2||(_templateObject2=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n      color: ",";\n    "])),null!==(_getColorFromName=(0,_theme_palette__WEBPACK_IMPORTED_MODULE_2__.L)(textColor))&&void 0!==_getColorFromName?_getColorFromName:_theme_palette__WEBPACK_IMPORTED_MODULE_2__.Z.MONO_BLACK)}));__webpack_exports__.Z=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{typo:{defaultValue:null,description:"",name:"typo",required:!0,type:{name:"enum",value:[{value:'"DISPLAY_LARGE"'},{value:'"DISPLAY_MEDIUM"'},{value:'"DISPLAY_SMALL"'},{value:'"DISPLAY_X_SMALL"'},{value:'"HEADING_XX_LARGE"'},{value:'"HEADING_X_LARGE"'},{value:'"HEADING_LARGE"'},{value:'"HEADING_MEDIUM"'},{value:'"HEADING_SMALL"'},{value:'"HEADING_X_SMALL"'},{value:'"LABEL_LARGE"'},{value:'"LABEL_MEDIUM"'},{value:'"LABEL_SMALL"'},{value:'"LABEL_X_SMALL"'},{value:'"PARAGRAPH_LARGE"'},{value:'"PARAGRAPH_MEDIUM"'},{value:'"PARAGRAPH_SMALL"'},{value:'"PARAGRAPH_X_SMALL"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"NONE"'},{value:'"PRIMARY_50"'},{value:'"PRIMARY_100"'},{value:'"PRIMARY_200"'},{value:'"PRIMARY_300"'},{value:'"PRIMARY_400"'},{value:'"MONO_BLACK"'},{value:'"MONO_WHITE"'},{value:'"GRAY_20"'},{value:'"GRAY_50"'},{value:'"GRAY_100"'},{value:'"GRAY_200"'},{value:'"GRAY_300"'},{value:'"GRAY_400"'},{value:'"GRAY_500"'},{value:'"GRAY_600"'},{value:'"GRAY_700"'},{value:'"GRAY_800"'},{value:'"GRAY_900"'},{value:'"GREEN_50"'},{value:'"GREEN_100"'},{value:'"GREEN_200"'},{value:'"GREEN_300"'},{value:'"GREEN_400"'},{value:'"GREEN_500"'},{value:'"RED_50"'},{value:'"RED_100"'},{value:'"RED_200"'},{value:'"RED_300"'},{value:'"RED_400"'},{value:'"RED_500"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/typo.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return getTypoFromName}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),calcRem=function calcRem(px){return"".concat(px/16,"rem")},typo={DISPLAY_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject||(_templateObject=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(96),calcRem(112)),DISPLAY_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject2||(_templateObject2=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(52),calcRem(64)),DISPLAY_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject3||(_templateObject3=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(44),calcRem(52)),DISPLAY_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject4||(_templateObject4=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(36),calcRem(44)),HEADING_XX_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject5||(_templateObject5=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(40),calcRem(52)),HEADING_X_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject6||(_templateObject6=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(36),calcRem(44)),HEADING_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject7||(_templateObject7=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(32),calcRem(40)),HEADING_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject8||(_templateObject8=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(28),calcRem(36)),HEADING_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject9||(_templateObject9=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(24),calcRem(32)),HEADING_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject10||(_templateObject10=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(20),calcRem(28)),LABEL_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject11||(_templateObject11=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(18),calcRem(24)),LABEL_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject12||(_templateObject12=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(16),calcRem(20)),LABEL_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject13||(_templateObject13=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(14),calcRem(16)),LABEL_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject14||(_templateObject14=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(12),calcRem(16)),PARAGRAPH_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject15||(_templateObject15=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(18),calcRem(28)),PARAGRAPH_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject16||(_templateObject16=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(16),calcRem(24)),PARAGRAPH_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject17||(_templateObject17=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(14),calcRem(20)),PARAGRAPH_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject18||(_templateObject18=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(12),calcRem(20))},getTypoFromName=function getTypoFromName(typoName){return typo[typoName]};__webpack_exports__.Z=typo}}]);