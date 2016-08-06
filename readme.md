[![npm version](https://badge.fury.io/js/todos-list.svg)](https://badge.fury.io/js/todos-list)

#Todos List

This NPM module contains an array list of todos. It's especially useful when you're starting to learn a new framework and need some fake dummy data. 

It can be used with [json-server](https://github.com/typicode/json-server) like so:

```js
const todoslist = require('todos-list');
//instead of specifying a file to the router method, you pass in the todos-list module
const router = jsonServer.router(todoslist);
```

##Install
```bash
$ npm i todos-list --save
```
