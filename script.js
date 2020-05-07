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
  
})()
