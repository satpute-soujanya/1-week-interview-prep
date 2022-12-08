const arr = [1, 2, 3, 343, 34, 5, 7]

function findMedian(arr) {
  let median = 0
  let sorted_array = arr.sort(function (a, b) {
    return a - b
  })
  console.log(sorted_array)
  if (arr.length % 2 !== 0) {
    let medianIndex = Math.floor(arr.length / 2)
    console.log(medianIndex)
    median = sorted_array[medianIndex]
    console.log(median)
  }
  // Write your code here
}
findMedian(arr)
