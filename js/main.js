let currentPage = 0
const pages = document.querySelectorAll(`[id*="page"]`)
const pageCount = pages.length-1
const nextButton = document.querySelector("#navigationNext")
const prevButton = document.querySelector("#navigationPrev")
const exploreLinks = document.querySelectorAll(".exploreImage")
const progressBar = document.querySelectorAll(".progress-bar-info")

console.log(progressBar)

nextButton.addEventListener("click", function() {

    if (currentPage < pageCount) {
        pages[currentPage].setAttribute("class", "hide")
        pages[currentPage+1].removeAttribute("class")
        prevButton.removeAttribute("class")
        currentPage++
    }
    else {
        nextButton.setAttribute("class", "disabled")
    }
})

prevButton.addEventListener("click", function() {
    if (currentPage > 0) {
        pages[currentPage].setAttribute("class", "hide")
        pages[currentPage-1].removeAttribute("class")
        nextButton.removeAttribute("class")
        currentPage--
    }
    else {
        prevButton.setAttribute("class", "disabled")
    }
})

exploreLinks.forEach(link => {
    link.addEventListener("click", function() {
        const exploreLinksCurrentPage = pages[currentPage].querySelectorAll(".exploreImage")
        const exploreTextCurrentPage = pages[currentPage].querySelectorAll(".exploreText")

        for (let i = 0; i < exploreLinksCurrentPage.length; i++){
            exploreLinksCurrentPage[i].classList.remove("selected")
            exploreTextCurrentPage[i].classList.remove("selected")
        }

        link.classList.add("selected")
        const linkID = link.getAttribute("id")
        document.getElementById(linkID+"_text").classList.add("selected")
    })
})

// Progress bar
const ProgressBarStepValue = 100/pageCount 
let ProgressBarValue = 0

for (let i = 1; i <= pageCount; i++) {

ProgressBarValue += ProgressBarStepValue
let ProgressBarValueRound =  Math.round(ProgressBarValue)

progressBar[i].textContent = ProgressBarValueRound+"%"
progressBar[i].style.width = ProgressBarValueRound+"%";

}
