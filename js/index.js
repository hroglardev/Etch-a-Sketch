'use strict'

const grid = document.querySelector('.grid')

let rowCounter = 0
const ROWS = 16

while (rowCounter < ROWS) {
  const div = document.createElement('div')
  div.classList.add('row')
  grid.appendChild(div)
  rowCounter++
}

const columns = Array.from(document.querySelectorAll('.row'))
console.log(columns)

columns.forEach((column) => {
  let pixelCounter = 0
  const PIXELS = 16
  while (pixelCounter < PIXELS) {
    const pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.classList.add('white')
    column.appendChild(pixel)
    pixelCounter++
  }
})

const pixels = Array.from(document.querySelectorAll('.pixel'))
pixels.forEach((pixel) => {
  pixel.addEventListener('')
})
