const firstParagraph = document.querySelector('#first')
const border = document.querySelector('.border1')
border.innerHTML = '<span>Hello I work</span>'

//js styling
firstParagraph.style.background = 'black';
//firstParagraph.innerText = 'I can change you';
firstParagraph.style.padding = '5px';
firstParagraph.innerHTML = '<span style= color: yellow;>Task List</span>';

const lists = document.querySelectorAll('ul')


const add = document.querySelector('#enter');

add.addEventListener('click', function(e){
    console.log(e);

    e.preventDefault();
})
