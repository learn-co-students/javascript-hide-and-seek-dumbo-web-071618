function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // const nested = document.querySelector('#nested');
  // const target = nested.querySelector('.target');
  // return target;
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  // solution 1
  // let lis =
  // document.getElementById('app').querySelectorAll('.ranked-list li');
  // for (let i = 0; i < lis.length; i++) {
  //   let temp = lis[i].innerHTML;
  //   lis[i].innerHTML = parseInt(temp) + n;
  // }

  // solution 2
  let lis = document.querySelectorAll('.ranked-list');
  return lis.forEach(function(li){
    return li.innerHTML = parseInt(li.innerHTML) + 1
  });
}

function deepestChild() {
  // solution 1
  // let lis = document.querySelector('#grand-node');
  // while(lis.querySelector('div') !== null){ //keep looping until div doesn't include any div child
  //
  //   lis = lis.querySelector('div'); // go to the next div level
  // } return lis;

  // solution 2
  let divs = document.querySelectorAll('#grand-node div');
  return divs[divs.length -1];
}


// selector = "#app"
// document.querySelector("")

// looking for the first matching tag
document.querySelector("div")

// looking for the first matching element with a certain class
document.querySelector(".class-name")
document.getElementsByClassName("class-name")[0]

//looking for a specific element with a certain id
document.querySelector("#id-name")
document.getElementByIdName("id-name")
