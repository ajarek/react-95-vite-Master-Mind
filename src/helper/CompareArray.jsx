export const compareArray = (arrayRandom, arrayUser) => {
  let newArray = []

  for (let i = 0; i < arrayRandom.length; i++) {
    if (arrayUser[i] === arrayRandom[i]) {
      newArray.push('black')
    } else if (arrayRandom.includes(arrayUser[i])) {
      newArray.push('white')
    } else {
      newArray.push('')
    }
  }

  return newArray
}
