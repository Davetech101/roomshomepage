const nextbtn = document.querySelector('.next'),
       prevbtn = document.querySelector('.prev'),
       heading = document.querySelector('.article-1 h2')
       text = document.querySelector('.article-1 p')
       

let index = 0


class ARTICLE{

    constructor(heading, text){
        this.heading = heading
        this.text = text 
    }

}


const article1 = new  ARTICLE(
    `Discover innovative ways to decorate`,
    `We provide unmatched quality, comfort, and style for    property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your 
      own style with our collection and make your property a reflection of you and what you love.`,
);

const article2 = new ARTICLE(   
    `We are available all across the globe`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
)

const article3 = new ARTICLE(   
    `Manufactured with the best materials`,
    `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
)

const textArray = [article1, article2, article3]

heading.innerHTML = textArray[index].heading
text.innerHTML = textArray[index].text

nextbtn.addEventListener('click', () => {
    index++

    changeArticle()
})

prevbtn.addEventListener('click', () => {
    index--

    changeArticle()
})

function changeArticle() {

    if (index > textArray.length -1) {
        index = 0
    }else if (index < 0) {
        index = textArray.length -1
    }


    heading.innerHTML = textArray[index].heading
    text.innerHTML = textArray[index].text
}