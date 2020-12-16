(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1089:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(34),_configFilename=__webpack_require__(1090);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1090:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1091:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(358).configure)([__webpack_require__(1092),__webpack_require__(1093)],module,!1)}).call(this,__webpack_require__(105)(module))},1092:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1092},1093:function(module,exports,__webpack_require__){var map={"./stories/Node.stories.tsx":1102};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1093},1094:function(module,exports,__webpack_require__){},1102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithCanvas",(function(){return WithCanvas}));var objectSpread2=__webpack_require__(317),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Canvas_Canvas=(__webpack_require__(1094),function Canvas(_ref){var _ref$width=_ref.width,width=void 0===_ref$width?400:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?200:_ref$height,children=_ref.children;return react_default.a.createElement("div",{id:"workflow-builder-canvas",style:{width:width,height:height},className:"relative box-border border-2 border-dashed border-gray-300"},children)});try{Canvas_Canvas.displayName="Canvas",Canvas_Canvas.__docgenInfo={description:"",displayName:"Canvas",props:{width:{defaultValue:{value:400},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:200},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Canvas/index.tsx#Canvas"]={docgenInfo:Canvas_Canvas.__docgenInfo,name:"Canvas",path:"src/components/Canvas/index.tsx#Canvas"})}catch(__react_docgen_typescript_loader_error){}var slicedToArray=__webpack_require__(479),cjs=__webpack_require__(478),cjs_default=__webpack_require__.n(cjs),Node_Node=function Node(_ref){var children=_ref.children,draggable=_ref.draggable,_useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),bounds=_useState2[0],setBounds=_useState2[1],divContentRef=Object(react.useRef)(null);return Object(react.useEffect)((function(){var canvas=document.getElementById("workflow-builder-canvas");if(canvas&&divContentRef.current){var coordsX=canvas.getBoundingClientRect().right,coordsY=canvas.getBoundingClientRect().bottom,divRect=divContentRef.current.getBoundingClientRect(),offsetX=divRect.width+divRect.x,offsetY=divRect.height+divRect.y;setBounds({left:0,top:0,right:coordsX-offsetX-1,bottom:coordsY-offsetY-1})}else setBounds(!1)}),[]),react_default.a.createElement(cjs_default.a,{disabled:!draggable,bounds:bounds,axis:"x"},react_default.a.createElement("div",null,react_default.a.createElement("div",{ref:divContentRef,id:"jsx-content",style:{width:"fit-content"}},children)))};try{Node_Node.displayName="Node",Node_Node.__docgenInfo={description:"",displayName:"Node",props:{draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Node/index.tsx#Node"]={docgenInfo:Node_Node.__docgenInfo,name:"Node",path:"src/components/Node/index.tsx#Node"})}catch(__react_docgen_typescript_loader_error){}try{Canvas.displayName="Canvas",Canvas.__docgenInfo={description:"",displayName:"Canvas",props:{width:{defaultValue:{value:400},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:200},description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#Canvas"]={docgenInfo:Canvas.__docgenInfo,name:"Canvas",path:"src/index.tsx#Canvas"})}catch(__react_docgen_typescript_loader_error){}try{Node.displayName="Node",Node.__docgenInfo={description:"",displayName:"Node",props:{draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#Node"]={docgenInfo:Node.__docgenInfo,name:"Node",path:"src/index.tsx#Node"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"WorkflowBuilder/Node",component:Node_Node,argTypes:{children:{control:"text"}}};var Default=function Template(args){return react_default.a.createElement(Node_Node,args)}.bind({});Default.args={children:"Hello Node"};var WithCanvas=function TemplateCanvas(args){return react_default.a.createElement(Canvas_Canvas,null,react_default.a.createElement(Node_Node,args))}.bind({});WithCanvas.args={children:"Hello Canvas Node",draggable:!0},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Node {...args} />"}},Default.parameters),WithCanvas.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => (\n  <Canvas>\n    <Node {...args} />\n  </Canvas>\n)"}},WithCanvas.parameters)},482:function(module,exports,__webpack_require__){__webpack_require__(483),__webpack_require__(655),__webpack_require__(656),__webpack_require__(812),__webpack_require__(1031),__webpack_require__(1063),__webpack_require__(1068),__webpack_require__(1080),__webpack_require__(1082),__webpack_require__(1087),__webpack_require__(1089),module.exports=__webpack_require__(1091)},557:function(module,exports){},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(358)}},[[482,1,2]]]);
//# sourceMappingURL=main.63a9bf73e44894212ccb.bundle.js.map