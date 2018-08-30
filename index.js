const getFirstSelector = selector => document.querySelector(selector)
const nestedTarget = () => document.querySelector("#nested .target")
const deepestChild = () => document.querySelector("#grand-node div div div div")
const increaseRankBy = (n) => {
    for (const list of document.querySelectorAll(".ranked-list")) {
        for (const li of list.children) {
            console.log(list.children)
            li.innerHTML = parseInt(li.innerHTML) + n
        }
    }
}