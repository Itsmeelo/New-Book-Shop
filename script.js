//create main tags
const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');

document.body.appendChild(mainDiv);

const header = document.createElement('header');
mainDiv.appendChild(header);

const main = document.createElement('main');
mainDiv.appendChild(main);

const footer = document.createElement('footer');
mainDiv.appendChild(footer);

//create header Elements
const hearderContainer = document.createElement('div');
hearderContainer.classList.add('hearderContainer');

header.appendChild(hearderContainer);

const logoDiv = document.createElement('H1');
logoDiv.classList.add('logoDiv');
hearderContainer.appendChild(logoDiv);

const imgLogo = document.createElement('img');
imgLogo.setAttribute('src', './assats/images/book-shop-icon.svg');
imgLogo.setAttribute('height', '50px');
imgLogo.setAttribute('width', '100px');
logoDiv.appendChild(imgLogo);

const searchDiv = document.createElement('div');
searchDiv.classList.add('searchDiv');
hearderContainer.appendChild(searchDiv);

const searchIconDiv = document.createElement('div');
searchIconDiv.classList.add('searchIconDiv');
searchDiv.appendChild(searchIconDiv);

const imgSearch = document.createElement('img');
imgSearch.setAttribute('src', './assats/images/Vector_search_icon.svg.png');
imgSearch.setAttribute('height', '26px');
imgSearch.setAttribute('width', '26px');
searchIconDiv.appendChild(imgSearch);


const searchInput = document.createElement('input');
searchInput.classList.add('searchDivText');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search for the book you want and read it now. . . JavaScript: The Good Parts . . .');
searchDiv.appendChild(searchInput);

const cartIconDiv = document.createElement('div');
cartIconDiv.classList.add('cartIconDiv');
hearderContainer.appendChild(cartIconDiv);

const imgCart = document.createElement('img');
imgCart.setAttribute('src', './assats/images/th.svg');
imgCart.setAttribute('height', '40px');
imgCart.setAttribute('width', '40px');
cartIconDiv.appendChild(imgCart);

const spaceOne = document.createElement('div');
spaceOne.classList.add('spaceOne');
header.appendChild(spaceOne);

const nav = document.createElement('nav');
header.appendChild(nav);

const navDiv = document.createElement('div');
navDiv.classList.add('navDiv');
nav.appendChild(navDiv);

const ul = document.createElement('ul');
navDiv.appendChild(ul);

const li1 = document.createElement('li');
const aLi1 = document.createElement('a');
aLi1.innerText = 'Programing';
aLi1.setAttribute('href', '#');
aLi1.classList.add('programing');
li1.appendChild(aLi1);
ul.appendChild(li1);

const li2 = document.createElement('li');
const aLi2 = document.createElement('a');
aLi2.innerText = 'Detective';
aLi2.setAttribute('href', '#');
aLi2.classList.add('detective');
li2.appendChild(aLi2);
ul.appendChild(li2);

const li3 = document.createElement('li');
const aLi3 = document.createElement('a');
aLi3.innerText = 'Love';
aLi3.setAttribute('href', '#');
aLi3.classList.add('love');
li3.appendChild(aLi3);
ul.appendChild(li3);

const li4 = document.createElement('li');
const aLi4 = document.createElement('a');
aLi4.innerText = 'Novel';
aLi4.setAttribute('href', '#');
aLi4.classList.add('novel');
li4.appendChild(aLi4);
ul.appendChild(li4);

const li5 = document.createElement('li');
const aLi5 = document.createElement('a');
aLi5.innerText = 'History';
aLi5.setAttribute('href', '#');
aLi5.classList.add('history');
li5.appendChild(aLi5);
ul.appendChild(li5);

const li6 = document.createElement('li');
const aLi6 = document.createElement('a');
aLi6.innerText = 'Science fiction';
aLi6.setAttribute('href', '#');
aLi6.classList.add('scienceFiction');
li6.appendChild(aLi6);
ul.appendChild(li6);

const li7 = document.createElement('li');
const aLi7 = document.createElement('a');
aLi7.innerText = 'More';
aLi7.setAttribute('href', '#');
aLi7.classList.add('more');
li7.style.paddingRight = '0px';
li7.appendChild(aLi7);
ul.appendChild(li7);


const divContainerOne = document.createElement('div');
divContainerOne.classList.add('divContainerOne');
main.appendChild(divContainerOne);


const sectorOneDiv = document.createElement('div');
sectorOneDiv.classList.add('sectorOneDiv');
const bookOneImg = document.createElement('div');
bookOneImg.classList.add('bookOneImg');
const bookOneText = document.createElement('div');
bookOneText.classList.add('bookOneText');
sectorOneDiv.appendChild(bookOneText);

const divOneBookOnetext = document.createElement('div');
divOneBookOnetext.classList.add('divOneBookOnetext');
bookOneText.appendChild(divOneBookOnetext);

const divTwoBookOnetext = document.createElement('div');
divTwoBookOnetext.classList.add('divTwoBookOnetext');
bookOneText.appendChild(divTwoBookOnetext);

const divThreeBookOnetext = document.createElement('div');
divThreeBookOnetext.classList.add('divThreeBookOnetext');
bookOneText.appendChild(divThreeBookOnetext);

sectorOneDiv.appendChild(bookOneImg);
divContainerOne.appendChild(sectorOneDiv);

const sectorTwoDiv = document.createElement('div');
sectorTwoDiv.classList.add('sectorTwoDiv');
divContainerOne.appendChild(sectorTwoDiv);

const sectorThreeDiv = document.createElement('div');
sectorThreeDiv.classList.add('sectorThreeDiv');
divContainerOne.appendChild(sectorThreeDiv);


const getUser = async () => {
    try {
        const bookOne = document.getElementsByClassName('divThreeBookOnetext');
        const users = await fetch('books.json').then(_ => _.json());
        //console.log(users);
        users.forEach(user => {
            const pOne = document.createElement('p');
            pOne.classList.add('pOne');
            pOne.innerText = '${user.first_title}';
            //bookOne.appendChild(pOne);
            //console.log(user.first_title)
        });

    } catch (error) {
        console.log(error);
    }
}

getUser();


/*fetch('books.json') //path to the file with json data 
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });*/






