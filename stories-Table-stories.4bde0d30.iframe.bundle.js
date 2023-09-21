"use strict";(self.webpackChunk_k99hyerin_dj_simblue=self.webpackChunk_k99hyerin_dj_simblue||[]).push([[744],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/stories/Table.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Table_stories}});var _templateObject,Table_templateObject,_templateObject2,_templateObject3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Text=__webpack_require__("./src/components/Text/index.tsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),palette=__webpack_require__("./src/theme/palette.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TableItem=function TableItem(props){return(0,jsx_runtime.jsx)(TableItemStyle,(0,objectSpread2.Z)({},props))},Table_TableItem=TableItem,TableItemStyle=emotion_styled_browser_esm.Z.td(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: ",";\n  height: 55px;\n  border-top: ",";\n  border-bottom: 1px solid ",";\n  padding-left: ",";\n  padding-right: ",";\n  text-align: ",";\n\n  img {\n    object-fit: contain;\n    height: 30px;\n  }\n"])),(function(_ref){var headWidth=_ref.headWidth,align=_ref.align;return"small"===headWidth?"10%":"medium"===headWidth?"30%":"left"===align||"right"===align?"calc(40% - 30px)":"40%"}),(function(_ref2){return _ref2.headWidth?"1px solid ".concat(palette.Z.GRAY_100):""}),palette.Z.GRAY_100,(function(_ref3){return"left"===_ref3.align?"30px":""}),(function(_ref4){return"right"===_ref4.align?"30px":""}),(function(_ref5){var align=_ref5.align;return void 0===align?"center":align}));try{TableItem.displayName="TableItem",TableItem.__docgenInfo={description:"",displayName:"TableItem",props:{headWidth:{defaultValue:null,description:"",name:"headWidth",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableItem/index.tsx#TableItem"]={docgenInfo:TableItem.__docgenInfo,name:"TableItem",path:"src/components/Table/TableItem/index.tsx#TableItem"})}catch(__react_docgen_typescript_loader_error){}try{TableItemStyle.displayName="TableItemStyle",TableItemStyle.__docgenInfo={description:"",displayName:"TableItemStyle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},headWidth:{defaultValue:null,description:"",name:"headWidth",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableItem/index.tsx#TableItemStyle"]={docgenInfo:TableItemStyle.__docgenInfo,name:"TableItemStyle",path:"src/components/Table/TableItem/index.tsx#TableItemStyle"})}catch(__react_docgen_typescript_loader_error){}var TableRow_templateObject,_excluded=["children","width","headTitle"],Table=function Table(_ref){var children=_ref.children,_ref$width=_ref.width,width=void 0===_ref$width?"100%":_ref$width,headTitle=_ref.headTitle,props=(0,objectWithoutProperties.Z)(_ref,_excluded),existsData=function existsData(){return!!(children&&children.length>0)};return(0,jsx_runtime.jsxs)(TableLayout,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{width:width,existsData:existsData(),children:[(0,jsx_runtime.jsx)(TableHeadBox,{children:(0,jsx_runtime.jsx)("tr",{children:headTitle.map((function(h,index){return(0,jsx_runtime.jsx)(Table_TableItem,{align:h.align,headWidth:h.size,children:(0,jsx_runtime.jsx)(Text.Z,{typo:"LABEL_SMALL",children:h.name})},index)}))})}),(0,jsx_runtime.jsx)("tbody",{children:existsData()?children:(0,jsx_runtime.jsx)(CenterRow,{children:(0,jsx_runtime.jsx)(Text.Z,{typo:"PARAGRAPH_SMALL",children:"데이터가 없습니다!"})})})]}))},components_Table=Table,TableLayout=emotion_styled_browser_esm.Z.table(Table_templateObject||(Table_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: ",";\n  border-spacing: 0;\n  table-layout: fixed;\n  border-radius: 8px;\n\n  tbody > tr {\n    cursor: ",";\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"])),(function(_ref2){return _ref2.width}),(function(_ref3){var hover=_ref3.hover;return _ref3.existsData&&hover?"pointer":""}),(function(_ref4){return _ref4.hover?palette.Z.GRAY_20:""})),TableHeadBox=emotion_styled_browser_esm.Z.tbody(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n"])),palette.Z.GRAY_50),CenterRow=emotion_styled_browser_esm.Z.tr(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  padding: 64px 0;\n  position: absolute;\n  left: 50%;\n  transform: translateX(50%);\n"])));try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},headTitle:{defaultValue:null,description:"",name:"headTitle",required:!0,type:{name:"HeadType[]"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/index.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:"src/components/Table/index.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,TableRow=function TableRow(props){return(0,jsx_runtime.jsx)(TableRowStyle,(0,objectSpread2.Z)({},props))},Table_TableRow=TableRow,TableRowStyle=emotion_styled_browser_esm.Z.tr(TableRow_templateObject||(TableRow_templateObject=(0,taggedTemplateLiteral.Z)(["\n  background-color: ",";\n"])),(function(_ref){return _ref.checked?palette.Z.GRAY_50:""}));try{TableRow.displayName="TableRow",TableRow.__docgenInfo={description:"",displayName:"TableRow",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow/index.tsx#TableRow"]={docgenInfo:TableRow.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow/index.tsx#TableRow"})}catch(__react_docgen_typescript_loader_error){}try{TableRowStyle.displayName="TableRowStyle",TableRowStyle.__docgenInfo={description:"",displayName:"TableRowStyle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow/index.tsx#TableRowStyle"]={docgenInfo:TableRowStyle.__docgenInfo,name:"TableRowStyle",path:"src/components/Table/TableRow/index.tsx#TableRowStyle"})}catch(__react_docgen_typescript_loader_error){}var Table_stories={title:"Component/Table",component:components_Table},example=[{name:"학번",size:"small"},{name:"이름",size:"small"},{name:"이동 장소",size:"small"}],sampleData={list:[{number:3203,name:"김혜린",place:"데이터네트워크실"},{number:3203,name:"김혜린",place:"데이터네트워크실"},{number:3203,name:"김혜린",place:"데이터네트워크실"}]},Default={render:function render(args){return(0,jsx_runtime.jsx)(components_Table,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{headTitle:example,children:sampleData.list.map((function(s){return(0,jsx_runtime.jsxs)(Table_TableRow,{children:[(0,jsx_runtime.jsx)(Table_TableItem,{children:(0,jsx_runtime.jsx)(Text.Z,{typo:"PARAGRAPH_SMALL",children:s.number})}),(0,jsx_runtime.jsx)(Table_TableItem,{children:(0,jsx_runtime.jsx)(Text.Z,{typo:"PARAGRAPH_SMALL",children:s.name})}),(0,jsx_runtime.jsx)(Table_TableItem,{children:(0,jsx_runtime.jsx)(Text.Z,{typo:"PARAGRAPH_SMALL",children:s.place})})]})}))}))}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: args => <Table {...args} headTitle={example}>\n      {sampleData.list.map(s => <TableRow>\n          <TableItem>\n            <Text typo="PARAGRAPH_SMALL" children={s.number} />\n          </TableItem>\n          <TableItem>\n            <Text typo="PARAGRAPH_SMALL" children={s.name} />\n          </TableItem>\n          <TableItem>\n            <Text typo="PARAGRAPH_SMALL" children={s.place} />\n          </TableItem>\n        </TableRow>)}\n    </Table>\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/Text/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js")),_emotion_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_theme_palette__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/theme/palette.ts"),_theme_typo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/typo.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=function Text(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TextStyle,(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},props),{},{children:props.children}))},TextStyle=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.span(_templateObject||(_templateObject=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: inline-block;\n  align-items: center;\n  white-space: pre-wrap;\n\n  ","\n  ","\n"])),(function(_ref){var typo=_ref.typo;return(0,_theme_typo__WEBPACK_IMPORTED_MODULE_3__.a)(typo)}),(function(_ref2){var _getColorFromName,textColor=_ref2.textColor;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.iv)(_templateObject2||(_templateObject2=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n      color: ",";\n    "])),null!==(_getColorFromName=(0,_theme_palette__WEBPACK_IMPORTED_MODULE_2__.L)(textColor))&&void 0!==_getColorFromName?_getColorFromName:_theme_palette__WEBPACK_IMPORTED_MODULE_2__.Z.MONO_BLACK)}));__webpack_exports__.Z=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{typo:{defaultValue:null,description:"",name:"typo",required:!0,type:{name:"enum",value:[{value:'"DISPLAY_LARGE"'},{value:'"DISPLAY_MEDIUM"'},{value:'"DISPLAY_SMALL"'},{value:'"DISPLAY_X_SMALL"'},{value:'"HEADING_XX_LARGE"'},{value:'"HEADING_X_LARGE"'},{value:'"HEADING_LARGE"'},{value:'"HEADING_MEDIUM"'},{value:'"HEADING_SMALL"'},{value:'"HEADING_X_SMALL"'},{value:'"LABEL_LARGE"'},{value:'"LABEL_MEDIUM"'},{value:'"LABEL_SMALL"'},{value:'"LABEL_X_SMALL"'},{value:'"PARAGRAPH_LARGE"'},{value:'"PARAGRAPH_MEDIUM"'},{value:'"PARAGRAPH_SMALL"'},{value:'"PARAGRAPH_X_SMALL"'}]}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"NONE"'},{value:'"PRIMARY_50"'},{value:'"PRIMARY_100"'},{value:'"PRIMARY_200"'},{value:'"PRIMARY_300"'},{value:'"PRIMARY_400"'},{value:'"MONO_BLACK"'},{value:'"MONO_WHITE"'},{value:'"GRAY_20"'},{value:'"GRAY_50"'},{value:'"GRAY_100"'},{value:'"GRAY_200"'},{value:'"GRAY_300"'},{value:'"GRAY_400"'},{value:'"GRAY_500"'},{value:'"GRAY_600"'},{value:'"GRAY_700"'},{value:'"GRAY_800"'},{value:'"GRAY_900"'},{value:'"GREEN_50"'},{value:'"GREEN_100"'},{value:'"GREEN_200"'},{value:'"GREEN_300"'},{value:'"GREEN_400"'},{value:'"GREEN_500"'},{value:'"RED_50"'},{value:'"RED_100"'},{value:'"RED_200"'},{value:'"RED_300"'},{value:'"RED_400"'},{value:'"RED_500"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/index.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/index.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/palette.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return getColorFromName}});var palette={NONE:"none",PRIMARY_50:"#FEF3F2",PRIMARY_100:"#FDE4E3",PRIMARY_200:"#FCCECC",PRIMARY_300:"#F9ACA8",PRIMARY_400:"#F36E67",MONO_BLACK:"#000000",MONO_WHITE:"#FFFFFF",GRAY_20:"#FAFAFA",GRAY_50:"#F3F3F3",GRAY_100:"#E8E8E8",GRAY_200:"#D1D1D1",GRAY_300:"#BBBBBB",GRAY_400:"#A6A6A6",GRAY_500:"#868686",GRAY_600:"#727272",GRAY_700:"#5E5E5E",GRAY_800:"#4B4B4B",GRAY_900:"#282828",GREEN_50:"#EAF6ED",GREEN_100:"#D3EFDA",GREEN_200:"#A6DFB7",GREEN_300:"#7FD99A",GREEN_400:"#06C167",GREEN_500:"#009A51",RED_50:"#FFF0EE",RED_100:"#FFE1DE",RED_200:"#FFC2BC",RED_300:"#FFB2AB",RED_400:"#FC7F79",RED_500:"#F83445"},getColorFromName=function getColorFromName(){return palette[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"NONE"]};__webpack_exports__.Z=palette},"./src/theme/typo.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return getTypoFromName}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),calcRem=function calcRem(px){return"".concat(px/16,"rem")},typo={DISPLAY_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject||(_templateObject=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(96),calcRem(112)),DISPLAY_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject2||(_templateObject2=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(52),calcRem(64)),DISPLAY_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject3||(_templateObject3=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(44),calcRem(52)),DISPLAY_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject4||(_templateObject4=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(36),calcRem(44)),HEADING_XX_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject5||(_templateObject5=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(40),calcRem(52)),HEADING_X_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject6||(_templateObject6=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(36),calcRem(44)),HEADING_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject7||(_templateObject7=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(32),calcRem(40)),HEADING_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject8||(_templateObject8=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(28),calcRem(36)),HEADING_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject9||(_templateObject9=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(24),calcRem(32)),HEADING_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject10||(_templateObject10=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(20),calcRem(28)),LABEL_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject11||(_templateObject11=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(18),calcRem(24)),LABEL_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject12||(_templateObject12=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(16),calcRem(20)),LABEL_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject13||(_templateObject13=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(14),calcRem(16)),LABEL_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject14||(_templateObject14=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 500;\n  "])),calcRem(12),calcRem(16)),PARAGRAPH_LARGE:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject15||(_templateObject15=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(18),calcRem(28)),PARAGRAPH_MEDIUM:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject16||(_templateObject16=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(16),calcRem(24)),PARAGRAPH_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject17||(_templateObject17=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(14),calcRem(20)),PARAGRAPH_X_SMALL:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject18||(_templateObject18=(0,_Users_kimhyerin_Documents_Develop_side_project_simblue_dj_simblue_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n    font-size: ",";\n    line-height: ",";\n    font-weight: 400;\n  "])),calcRem(12),calcRem(20))},getTypoFromName=function getTypoFromName(typoName){return typo[typoName]};__webpack_exports__.Z=typo}}]);