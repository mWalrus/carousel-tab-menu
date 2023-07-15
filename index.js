const SELECTED = 'selected'

const container = document.querySelector('.container')
const children = container.children

let selected_index = 0;

children[selected_index].classList.add(SELECTED)

container.addEventListener('wheel', (evt) => {
  if (evt.deltaY < 0 && selected_index > 0) {
    transform(selected_index - 1)
  }else if (evt.deltaY > 0 && selected_index < children.length - 1) {
    transform(selected_index + 1)
  }
})


let xOffsets = []
let currentOffset = 0
for (let i = 0; i < children.length; i++) {
  xOffsets.push(currentOffset)
  const newX = children[i].getBoundingClientRect().width
  currentOffset += newX + 4 // add 4px for the whitespace text nodes in between spans

  addListener(children[i], i)
}
container.style.width = currentOffset

function addListener(node, i) {
  node.addEventListener('click', () => {
    transform(i)
  })
}

function transform(idx) {
  selected_index = idx
  let xOffset = -xOffsets[idx]

  for (let i = 0; i < children.length; i++) {
    let c = children[i]
    container.style.transform = `translateX(${xOffset}px)`
    if (i === idx) {
      if (!c.classList.contains(SELECTED)) {
        c.classList.add(SELECTED)
      }
    } else {
      if (c.classList.contains(SELECTED)) {
        c.classList.remove(SELECTED)
      }
    }
  }
}
