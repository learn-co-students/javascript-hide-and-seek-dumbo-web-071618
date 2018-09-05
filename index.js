function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function deepestChild() {
  let deep = document.querySelector("#grand-node")
  while ( deep.querySelector('div')){
    // there is a next div to hop to, change deep to that div, querySelector returns the first true element
    deep = deep.querySelector('div')
  }
  return deep
};

function increaseRankBy(n) {
  let list = document.getElementsByClassName("ranked-list")
  for (let rList of list){
    for (let li of rList.children){
      li.innerText = parseInt(li.innerText) + n
    }
  }
  return
}

// function increaseRankBy(n){
//   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
//   for (let i = 0; i < lis.length; i++){
//     var temp = lis[i].innerHTML
//     lis[i].innerHTML = parseInt(temp) + n
//   }
// }
