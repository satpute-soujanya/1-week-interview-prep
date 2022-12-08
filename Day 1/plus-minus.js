const array = [-4, 3, -9, 0, 4, 1]
function plusminusarray(array) {
  let positive = 0
  let negative = 0
  let zero = 0

  for (let i in array) {
    if (array[i] > 0) {
      positive++
    } else if (array[i] < 0) {
      negative++
    } else if (array[i] === 0) {
      zero++
    }
  }
  let positiveRatio = (positive / array.length).toFixed(6)
  let negativeRatio = (negative / array.length).toFixed(6)
  let zeroRatio = (zero / array.length).toFixed(6)
  console.log(positiveRatio, negativeRatio, zeroRatio)
  return [positiveRatio, negativeRatio, zeroRatio]
}
// console.log(plusminusarray(array))
plusminusarray(array)

// if you want to return multiple values, U can return it as object or array
