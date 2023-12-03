// let timestamp = Data.now()
// let now = new Data()
// let ms = now.getTime()
// let iso = now.toISOString()
// console.log(timestamp)
// console.log(now)
// console.log(ms)
// console.log(iso)

// let a = null
// console.log(typeof a)

// let s = Symbol("sym_x")
// console.log(s.toString())
// console.log(s)

// let a = ["a", "b", "c", "d"]
// let b = Array.from(a)
// console.log(b)

// let array = []

// if (array) {
//   console.log('yes')
// } else {
//   console.log('no!')
// }

// console.log(Number("3"))
// console.log(String(false))
// console.log(Boolean([]))
// console.log(x + '')

// let o = { x: 1, y: 2 }
// for (const [name, value] of Object.entries(o)) {
//   console.log(name, value)
// }

// let [x, y] = [1]
// console.log(x,y)
// [x, y] = [1, 2, 3]
// console.log(x,y)
// let [, x,, y] = [1, 2, 3, 4]
// console.log(x,y)
// [x, ...y] = [1,2,3,4]
// console.log(x,y)

// let test = [1, , , , 5]
// console.log(test)
// const a = new Date()
// console.log(a)
// const b = Object()
// console.log(b)

// const array = [
//   { name: "hoge", email: "test", phone: "09012345678", id: 1 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 2 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 3 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 4 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 5 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 6 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 7 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 8 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 9 },
//   { name: "hoge", email: "test", phone: "09012345678", id: 10 },
// ]


// オブジェクト生成

let empty = {}
let point = { x: 0, y: 0 }

let o = new Object()
let a = new Array()
let d = new Date()
let r = new Map()

console.log(o)
console.log(a)
console.log(d)
console.log(r)

let o1 = Object.create({x: 1, y: 2})
const o2 = o1.x + o1.y
console.log('o2の値',o2)

