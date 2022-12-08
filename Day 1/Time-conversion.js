let Time1 = '07:05:45PM'
let Time2 = '2:00:01AM'
let Time3 = '12:00:10PM'

// Algorithm

function timeConversion(s) {
  let indicator = s.slice(-2)
  let TimeArray = s.slice(0, -2).split(':')
  let finalOutput = ''
  if (indicator == 'AM') {
    if (TimeArray[0] == '12') {
      // If 12 then set it to 00
      TimeArray.splice(0, 1, '00')
      finalOutput = TimeArray.join(':')
      return finalOutput
    } else {
      //  not 12 keep the string as it is
      finalOutput = TimeArray.join(':')
      return finalOutput
    }
  } else if (indicator == 'PM') {
    if (TimeArray[0] == '12') {
      // Have 12 keep it as it is
      finalOutput = TimeArray.join(':')
      return finalOutput
    } else {
      // Adding those hours in 12
      let hours = Number(TimeArray[0])
      let modifiedHours = 12 + hours
      TimeArray.splice(0, 1, modifiedHours)
      finalOutput = TimeArray.join(':')
      return finalOutput
    }
  }
  return finalOutput
}

// timeConversion(Time1)
console.log(timeConversion(Time1))
// timeConversion(Time3)
