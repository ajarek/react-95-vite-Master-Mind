

export const ColorRandom = () => {
  const arrayColors=['red', 'green', 'blue', 'yellow']
  let newArrayColors=[]
   for(let i=0; i<arrayColors.length; i++) {
    let randomIndexColors=Math.floor(Math.random()*arrayColors.length);
    newArrayColors.push(arrayColors[randomIndexColors])
   }
   return newArrayColors
}

