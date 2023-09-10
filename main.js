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

let o = { x: 1, y: 2 }
for (const [name, value] of Object.entries(o)) {
  console.log(name, value)
}

let [x, y] = [1]
console.log(x,y)
[x, y] = [1, 2, 3]
console.log(x,y)
[, x,, y] = [1, 2, 3, 4]
console.log(x,y)
[x, ...y] = [1,2,3,4]
console.log(x,y)