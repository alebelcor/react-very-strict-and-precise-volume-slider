(this["webpackJsonpreact-very-strict-and-precise-volume-slider"]=this["webpackJsonpreact-very-strict-and-precise-volume-slider"]||[]).push([[0],{13:function(n,e,r){"use strict";r.r(e);var t=r(1),a=r.n(t),i=r(5),c=r(0),o=r(3),u=r(2);function b(){var n=Object(u.a)(["\n  grid-area: error;\n  color: #f5222d;\n"]);return b=function(){return n},n}function s(){var n=Object(u.a)(["\n"]);return s=function(){return n},n}function d(){var n=Object(u.a)(["\n  grid-area: input;\n  -webkit-appearance: none;\n  width: 100%;\n  margin: 5px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: #91d5ff;\n    border-radius: 4px;\n  }\n\n  &::-webkit-slider-thumb {\n    border: 2px solid #91d5ff;\n    height: 14px;\n    width: 14px;\n    border-radius: 34px;\n    background: #ffffff;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -5.001px;\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    background: #abdfff;\n  }\n\n  &::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: #91d5ff;\n    border-radius: 4px;\n  }\n\n  &::-moz-range-thumb {\n    border: 2px solid #91d5ff;\n    height: 14px;\n    width: 14px;\n    border-radius: 34px;\n    background: #ffffff;\n    cursor: pointer;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &::-ms-fill-lower {\n    background: #77cbff;\n    border-radius: 2.046px;\n  }\n\n  &::-ms-fill-upper {\n    background: #91d5ff;\n    border-radius: 2.046px;\n  }\n\n  &::-ms-thumb {\n    border: 2px solid #91d5ff;\n    height: 14px;\n    width: 14px;\n    border-radius: 34px;\n    background: #ffffff;\n    cursor: pointer;\n    height: 4px;\n  }\n\n  &:focus::-ms-fill-lower {\n    background: #91d5ff;\n  }\n\n  &:focus::-ms-fill-upper {\n    background: #abdfff;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  grid-area: label;\n  text-align: right;\n"]);return f=function(){return n},n}function l(){var n=Object(u.a)(["\n  grid-area: volume;\n"]);return l=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: grid;\n  grid-gap: 20px 5px;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n    '. volume'\n    'label input'\n    '. error';\n  align-items: center;\n  padding: 30px 20px;\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  border: 1px solid #ebedf0;\n  background-color: #fff;\n\n  @media only screen and (min-device-width: 480px) {\n    margin: 0 auto;\n    width: 350px;\n  }\n"]);return g=function(){return n},n}function m(){var n=Object(u.a)(["\n  margin: 20px auto;\n  padding: 0 20px;\n"]);return m=function(){return n},n}function h(){var n=Object(u.a)(["\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1.23;\n  color: rgba(0, 0, 0, 0.85);\n"]);return h=function(){return n},n}function j(){var n=Object(u.a)(["\n  margin: 20px auto;\n  text-align: center;\n"]);return j=function(){return n},n}var O=Object(c.b)(j()),x=Object(c.b)(h()),v=Object(c.b)(m()),k=Object(c.b)(g()),w=Object(c.b)(p()),y=Object(c.b)(l()),S=Object(c.b)(f()),E=Object(c.b)(d()),F=(Object(c.b)(s()),Object(c.b)(b())),I=function(){var n=Object(t.useState)(0),e=Object(o.a)(n,2),r=e[0],a=e[1],i=Object(t.useState)(!1),u=Object(o.a)(i,2),b=u[0],s=u[1];return Object(c.c)(t.Fragment,null,Object(c.c)("header",{css:O},Object(c.c)("h1",{css:x},"A Very Strict and Precise Volume Slider")),Object(c.c)("main",{css:v},Object(c.c)("form",{css:k,onSubmit:function(n){return n.preventDefault()}},Object(c.c)("div",{css:w},Object(c.c)("div",{role:"status","aria-live":"polite",css:y},"Current volume: ",Object(c.c)("strong",null,r,"%")),Object(c.c)("label",{htmlFor:"volume",css:S},"Volume:"),Object(c.c)("input",{type:"range",min:"0",max:"100.1",step:"0.000001",value:r,css:E,onChange:function(n){var e=Number.parseFloat(n.target.value);b&&s(!1),a(e)},onMouseUp:function(){Number.isInteger(r)?s(!1):(s(!0),a(0))}}),b?Object(c.c)("div",{id:"volume-description",role:"alert",css:F},"Value must be a whole number."):Object(c.c)("div",{id:"volume-description",css:F})))))};r(12);function z(){var n=Object(u.a)(["\n  html {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB,\n      Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji,\n      Segoe UI Emoji, Segoe UI Symbol;\n    font-size: 15px;\n    line-height: 1.5;\n  }\n"]);return z=function(){return n},n}var C=Object(c.b)(z());Object(i.render)(a.a.createElement(t.Fragment,null,a.a.createElement(c.a,{styles:C}),a.a.createElement(I,null)),document.getElementById("root"))},7:function(n,e,r){n.exports=r(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5e4f7aa7.chunk.js.map