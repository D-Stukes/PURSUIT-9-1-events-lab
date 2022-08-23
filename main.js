// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector("#current-color")
//document.body.style.backgroundColor = "green"
//currentColor.style.backgroundColor = "rgb(0, 0, 
//console.log(currentDiv)

// lis.forEach((list) => {
//   lis.addEventListener('click', (event) => {
//       event.preventDefault()
//       console.log(event)
//       console.log(`You have clicked ${event.target.innerText}`)
//   })
// })

const divColors = document.querySelectorAll(".color")
divColors.forEach((color) =>{
  color.addEventListener('click', (event) => {
     console.log(event)
     currentColor.style.backgroundColor = event.target.style.backgroundColor;
  })

})

const cell =  document.querySelectorAll(".cell")
//console.log(cell)
cell.forEach((oneCell) => {
  oneCell.addEventListener('click', (event) => {
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  })

})