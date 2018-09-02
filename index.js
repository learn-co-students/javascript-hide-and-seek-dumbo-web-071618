function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  // document.querySelector("#nested .target")
   let query = document.getElementById("nested").querySelector(".target")
   return query
}

function deepestChild() {
  let allDivs = document.querySelectorAll('#grand-node div')
  let deepestDiv = allDivs[allDivs.length - 1]
  return deepestDiv
}

function increaseRankBy(n) {
  let allLi = document.querySelectorAll(".ranked-list li")
  allLi.forEach(function (li) {
    return parseInt(li.innerText) + n
  })
}
