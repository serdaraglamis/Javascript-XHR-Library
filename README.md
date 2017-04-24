# Javascript-XHR-Library


This Repo includes XHR methods to use it on your Javascript Projects.
### Methods
  - getJSON (url, successHandler, errorHandler)
  - sendJson(url, data, successHandler, errorHandler)

### Usage
You can use this class named Xhr in Javascript with calling it. And call functions inside it. For example:
```js
//ES6 Form
let Xhr = new Xhr();
Xhr.getJSON(url, function(success){
    console.log("Success", success);
}, function(error){
    console.log("Error", error)
});

//ES5 Form
var Xhr = new Xhr();
Xhr.getJSON(url, function(success){
    console.log("Success", success);
}, function(error){
    console.log("Error", error)
});
```

This repo includes both version of Xhr class one is ES6 version and one is compiled ES5 version. You can send pull requests.