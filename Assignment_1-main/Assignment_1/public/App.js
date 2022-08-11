"use strict";

var nameComponent = React.createElement("div", {
  id: "out"
}, React.createElement("h2", {
  id: "name_comp"
}, "Pooja Yadav"));
var pictureComponent = React.createElement("div", {
  id: "picture_out"
}, React.createElement("img", {
  id: "picture_comp",
  src: "./mon.jpeg"
}));
var introComponent = React.createElement("div", {
  id: "intro_out"
}, React.createElement("p", {
  id: "intro_comp"
}, "Hi there I'm Pooja a Computer Science graduate student at San Diego State University currently in the second semester."));
var buttonComponent = React.createElement("div", {
  id: "button_out"
}, React.createElement("a", {
  href: "https://github.com/pooja97"
}, React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));