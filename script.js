(async function(){

try {
//  const image = await loadImage('./i2.png')
  console.log('111111')
//  console.log(image)
  
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  
  canvas.width = 1000
  canvas.height = 750
  
//  update()
//  function update () {
//    requestAnimationFrame(update)
//    clearCanvas()
//    context.drawImage(
//      image,
//      0, 0, image.width, image.height,
//      0, 0, canvas.width, canvas.height
//    )
//  }
//  function clearCanvas () {
//  }
  
  
  
function loadImage (src) {
  return new Promise((resolve, reject) => {
    try {
      const image = new Image
      image.onLoad = () => resolve(image)
      image.src = src
      console.log('asdd')
    } catch(err) {
      console.log('ERROR')
      return reject(err)
    }
  })
}
  
} catch(err) {
  console.log(err)
}
  
  
})()
