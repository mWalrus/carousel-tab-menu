const container = document.querySelector('.container')

let index = 0
let xOffset = 0
console.log(document.querySelector('.bar').getBoundingClientRect().width)

for (const child of container.children) {
  if (index > 0) {
    const newX = container.children[index - 1].getBoundingClientRect().width
    xOffset += newX
    container.children[index].style.left = `${50 + xOffset}px`;
    
  } else {
    container.children[index].style.opacity = '1'
  }
  console.log(child.getBoundingClientRect().width)
  addListener(child, index)
  index++
}

function addListener(node, i) {
  node.addEventListener('click', () => {
    transform(i)
  })
}

function transform(idx) {
  let selected = container.children[idx]
  let xOffset = 0
  if (selected.style.left) {
    xOffset = -parseInt(selected.style.left.replace(/px/, '')) + 50
  }

  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.transform = `translateX(${xOffset}px)`
    if (i === idx) {
      container.children[i].style.opacity = '1'
    } else {
      container.children[i].style.opacity = '0.3'
    }
  }
}
