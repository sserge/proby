(async function(){

  const image = await loadImage('image.jpg')
  
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  
  canvas.width = 750
  canvas.height = 750
  
  update()
  function update() {
    requestAnimationFrame(update)
  }
  
  
  
function loadImage (src) {
  return new Promise((resolve, reject) => {
    try {
      const image = new Image
      image.onLoad = () => resolve(image)
      image.src = src
    } catch(err) {
      return reject(err)
    }
  })
}  
  
})()
