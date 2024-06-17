
//Issue: Can't seem to find a way to import OCRAD, keep in mind you cannot use ES6 syntax or injection 
// of a script tag as CORS is disabled on twitter/x 




  autoDestroy()

// every time the user scrolls by 100px, run the autoDestroy function
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (Math.abs(window.scrollY - lastScrollY) >= 300) {
    autoDestroy();
    lastScrollY = window.scrollY;
  }
});


function autoDestroy() {
// find a div with a particular class of css-175oi2r and with aria label of Timeline: Conversation
let containerDiv = document.querySelector('div.css-175oi2r[aria-label="Timeline: Conversation"]')
// remove this div
console.log(containerDiv)

let container2Div = containerDiv.querySelector('div')
console.log(container2Div)

for (let i = 0; i < container2Div.childNodes.length; i = i + 2) {
   let doescontainYeah = false
  //  console.log(container2Div.childNodes[i])
    // for each of these children, check their second image, if so log them
    let image = container2Div.childNodes[i].querySelector('img[src*="format"]')
    if (image) {
        console.log(image)
        //extract image data
        let imageSrc = image.src
        let ocrtext = OCRAD(imageSrc)
        console.log(ocrtext)
    }
}










console.log("skibdi rizz")







    
 // log values for debugging
// console.log(`likes: ${likes}`)
// console.log(`views: ${views}`)

// send to background.js using firefox api
}




