
function loadImage (src) {
  return new Promise((resolve, reject) => {
    try {
      const image
      image.onLoad = () => resolve(image)
      image.src = src
    } catch(err) {
      return reject(err)
    }
  })
}
