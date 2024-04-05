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
  grafiti.innerHTML += `<div class="text-xl flex flex-wrap break-all items-center justify-center w-[200px] h-[200px] p-4 bg-[${color}]">${texto}</div>`
  // grafiti.innerText = texto
})








