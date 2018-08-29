
function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    var nodes = document.querySelectorAll('#grand-node div');
    var mostDeep = nodes[nodes.length- 1];
    return mostDeep
}

function increaseRankBy(n)  {
    let list = document.querySelectorAll(".ranked-list")

    list.forEach((e) => ( e.innerHTML = parseInt(e.innerHTML) + 1 ))
}