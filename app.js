let boton = document.getElementById('boton')
let grafiti = document.getElementById('grafiti')
let colorInput = document.getElementById("colorInput")
let input = document.getElementById('input')
let color
let texto

input.addEventListener('keyup', (event) => texto = event.target.value)

colorInput.addEventListener("change", (event) => color = event.target.value)
// grafiti.lastChild.classList.add(`bg-[${event.target.value}]`)

boton.addEventListener('click', (event) => {
  
  event.preventDefault()
  grafiti.innerHTML += `<div class="poster text-xl flex flex-row-reverse break-all w-[200px] h-[200px] p-4 bg-[${color}]">
  <span class ="close w-[20px] h-[20px]"><img class = "h-[20px] object-contain" src="./cross.svg"></span>
  <h2 class ="self-center w-full justify-self-center">${texto}</h2>
  </div>`

  let close = document.getElementsByClassName('close')
  for (const tag of close) {
      tag.addEventListener('click', event =>{
        grafiti.innerHTML = ''
      })
  }

  let contador = 0
  let poster = document.getElementsByClassName('poster')
  let style = document.querySelectorAll('input[name="style"]')
  
  for (const element of style) {
    element.addEventListener('change', event =>{
      console.log(event.target.value)
      if(event.target.value === 'grafitty') {
        grafiti.children[contador].classList.add('italic')
      } else {
        grafiti.children[contador].classList.remove('italic')
      }
    })
  }
  contador += 1
})

// grafiti.innerText = texto



//bueno ya es re tarde y no me estoy dando cuenta como hago para aplicar el italic y el eliminar a sólo el elemento seleccionado, je..



