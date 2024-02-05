'use strict'

const grid = document.querySelector('.grid')

const createRows = (numberOfRows) => {
  let rows = Array.from(document.querySelectorAll('.row'))
  if (rows.length > 0) {
    rows.forEach((row) => {
      row.remove()
    })
  }
  let rowCounter = 0
  let totalRows = numberOfRows
  while (rowCounter < totalRows) {
    const div = document.createElement('div')
    div.classList.add('row')
    grid.appendChild(div)
    rowCounter++
  }
}

createRows(16)

// use this function if you'd like for the color to remain black
// const addBlackClass = (element) => {
//   element.classList.add('black')
// }

// comment this function and the next one if you want the color to remain black
const generateRandomColor = () => {
  let randomNumber = Math.round(Math.random() * 255)
  return randomNumber
}

const randomColorPixel = (element) => {
  let counter = 1
  let firstNumber
  let secondNumber
  let thirdNumber
  while (counter <= 3) {
    switch (counter) {
      case 1:
        firstNumber = generateRandomColor()
      case 2:
        secondNumber = generateRandomColor()
      case 3:
        thirdNumber = generateRandomColor()
      default:
        break
    }
    counter++
  }
  if (!element.hasAttribute('style')) {
    element.setAttribute('style', `background: rgb(${firstNumber}, ${secondNumber}, ${thirdNumber}`)
  }
}

//Make sure you swap the randomColorPixel function for the addBlackClass function if you'd like the color of the pixels to be black
const createPixels = (numberOfPixels) => {
  let rows = Array.from(document.querySelectorAll('.row'))
  rows.forEach((row) => {
    let pixelCounter = 0
    let pixels = numberOfPixels
    while (pixelCounter < pixels) {
      const pixel = document.createElement('div')
      pixel.classList.add('pixel')
      pixel.classList.add('white')
      pixel.addEventListener('mouseover', () => randomColorPixel(pixel))
      row.appendChild(pixel)
      pixelCounter++
    }
  })
}

createPixels(16)

const newGrid = (gridSize) => {
  createRows(gridSize)
  createPixels(gridSize)
}

const resetSketch = () => {
  let pixels = Array.from(document.querySelectorAll('.pixel'))
  pixels.forEach((pixel) => {
    // uncomment the next line if you're using the black squares
    // pixel.classList.remove('black')
    // comment the next line if you're using the black squares
    pixel.removeAttribute('style')
  })
}

const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetSketch)

const createGrid = () => {
  let size = Number(prompt('What grid size do you want?'))
  while (size > 100 || size < 4) {
    size = Number(prompt('Must be an even number between 100 and 4'))
  }
  newGrid(size)
}

const createGridButton = document.querySelector('.size')
createGridButton.addEventListener('click', createGrid)
