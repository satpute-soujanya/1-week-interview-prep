const arr = [1, 2, 3, 343, 5, 7]

function minMax(arr) {
  let sorted_array = arr.sort(function (a, b) {
    return a - b
  })

  let min = 0
  let max = 0
  for (let i = 0; i <= sorted_array.length - 2; i++) {
    min += sorted_array[i]
  }
  for (let i = sorted_array.length - 1; i >= 1; i--) {
    max += sorted_array[i]
  }
  console.log(min, max)
}
minMax(arr)
