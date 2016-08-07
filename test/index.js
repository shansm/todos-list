const tap = require("tap")
const data = require("../index")
const matches = require("tmatch")

tap.test("data structure of todos", function(t) {
  t.ok(Array.isArray(data.todos), "it should be an array")
  t.end()
})

tap.test("elements in todos", function(t) {
  t.notSame(data.todos.length, 0, "it should have multiple todo items")
  t.end()
})

tap.test("neccessary keys in a todo element", function(t) {
  matches(data.todos[0], {
    "id": /[-.0-9]+/,
    "item": /.*/
  }, "it should contain 2 keys (id, item)")
  t.end()
})
