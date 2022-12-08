const arr = [1, 2, 3, 343, 45, 34, 5, 7]

function findMedian(arr) {
  let median = 0
  let sorted_array = arr.sort(function (a, b) {
    return a - b
  })
  let ArrayMid = arr.length / 2
  console.log(sorted_array)
  if (arr.length % 2 !== 0) {
    let medianIndex = Math.floor(ArrayMid)
    median = sorted_array[medianIndex]
    console.log(median)
  } else {
    median = Math.floor((arr[ArrayMid] + arr[ArrayMid - 1]) / 2)
    return median
  }
  // Write your code here
}
console.log(findMedian(arr))
