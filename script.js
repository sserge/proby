(function(){
//(async function(){

  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  
  canvas.width = 1000
  canvas.height = 1000
  
  var img = new Image
  img.onload = function() {
    context.drawImage(img,
      0, 0, img.width, img.height,
      0, 0, canvas.width, canvas.height
    )
  }
  img.src = "./i2.png"
  
  // загрузка через функцию loadImage из additional.js не работает
  //const image = await loadImage('./i2.png'); // обертка должна быть с ключевым словом async
  
  
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
  
  
//// ==========================================================================================
///   Дополнительные функции   (вынесены в отдельный файл additional.js
//   ==========================================================================================
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
