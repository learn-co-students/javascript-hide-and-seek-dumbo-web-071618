function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var div = grandNode.querySelectorAll('div');
  return div[div.length - 1];
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')
  for(let list_index = 0; list_index < list.length; list_index++ ){
    for (let index = 0; index < list[list_index].children.length; index++ ){
    list[list_index].children[index].innerHTML = parseInt(list[list_index].children[index].innerHTML) +n
    }
  }
}
