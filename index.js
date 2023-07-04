const container = document.querySelector('.container')
const children = container.children

let currentOffsetX = 0
for (let i = 0; i < children.length; i++) {
  if (i > 0) {
    const newX = children[i - 1].getBoundingClientRect().width
    currentOffsetX += newX
    children[i].style.left = `${currentOffsetX}px`;
    
  } else {
    children[i].style.opacity = '1'
  }
  addListener(children[i], i)
}

function addListener(node, i) {
  node.addEventListener('click', () => {
    transform(i)
  })
}

function transform(idx) {
  let selected = children[idx]
  let xOffset = 0
  if (selected.style.left) {
    xOffset = -parseInt(selected.style.left.replace(/px/, ''))
  }

  for (let i = 0; i < children.length; i++) {
    let c = children[i]
    c.style.transform = `translateX(${xOffset}px)`
    if (i === idx) {
      c.style.opacity = '1'
    } else {
      c.style.opacity = '0.3'
    }
  }
}
