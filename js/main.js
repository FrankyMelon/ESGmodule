let currentPage = 0
const pages = document.querySelectorAll(`[id*="page"]`)
const pageCount = pages.length-1
const nextButton = document.querySelector("#navigationNext")
const prevButton = document.querySelector("#navigationPrev")
const exploreLinks = document.querySelectorAll(".exploreImage")
const progressBar = document.querySelectorAll(".progress-bar-info")
const links = document.querySelectorAll(`a[id]`)
let eventsList = 'click keypress'.split(' ')

const modal = document.querySelector(".modal.noClosePop")
const ModalCloseButton = document.querySelector("button.close")

ModalCloseButton.addEventListener("click", () => {
    console.log("yes")
    modal.setAttribute("class", "hide")
})

console.log(ModalCloseButton)


// Event listener on keydown
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowLeft":
            prevButtonFn()
            break;
        case "ArrowRight":
            nextButtonFn()
            break;
      }
  }, false)

eventsList.forEach(event => nextButton.addEventListener(event, nextButtonFn))
eventsList.forEach(event => prevButton.addEventListener(event, prevButtonFn))
exploreLinks.forEach(link => {
    eventsList.forEach(event => link.addEventListener(event, exploreLinksFn))
})

function nextButtonFn() {

    if (currentPage < pageCount) {
        pages[currentPage].setAttribute("class", "hide")
        pages[currentPage+1].removeAttribute("class")
        prevButton.removeAttribute("class")
        currentPage++
    }
    else {
        nextButton.setAttribute("class", "disabled")
    }
    if (currentPage === pageCount) {
        modal.toggleAttribute("class")
    }
}

function prevButtonFn() {
    if (currentPage > 0) {
        pages[currentPage].setAttribute("class", "hide")
        pages[currentPage-1].removeAttribute("class")
        nextButton.removeAttribute("class")
        currentPage--
    }
    else {
        prevButton.setAttribute("class", "disabled")
    }
}

function exploreLinksFn() {
        const exploreLinksCurrentPage = pages[currentPage].querySelectorAll(".exploreImage")
        const exploreTextCurrentPage = pages[currentPage].querySelectorAll(".exploreText")

        for (let i = 0; i < exploreLinksCurrentPage.length; i++){
            exploreLinksCurrentPage[i].classList.remove("selected")
            exploreTextCurrentPage[i].classList.remove("selected")
        }

        this.classList.add("selected")
        const linkID = this.getAttribute("id")
        document.getElementById(linkID+"_text").classList.add("selected")
}

// Progress bar
const ProgressBarStepValue = 100/pageCount 
let ProgressBarValue = 0

for (let i = 1; i <= pageCount; i++) {

ProgressBarValue += ProgressBarStepValue
let ProgressBarValueRound =  Math.round(ProgressBarValue)

progressBar[i].textContent = ProgressBarValueRound+"%"
progressBar[i].style.width = ProgressBarValueRound+"%";

}