const data = [
  {
    image: "assest/pic1.PNG",
    title: "Test 1",
    description: "hello it's me I love my self",
  },
  {
    image: "assest/pic1.PNG",
    title: "Test 2",
    description: "hello it's me I love my self",
  },
  {
    image: "assest/pic1.PNG",
    title: "Test 3",
    description: "hello it's me I love my self",
  },
  {
    image: "assest/pic1.PNG",
    title: "Test 4",
    description: "hello it's me I love my self",
  },
];


const popup = document.querySelector('.popup');

data.map((index) => {
    const div = document.createElement('div');
    div.className = "project-cards";
    div.innerHTML =`<img src=${index.image} class="card-image" />`;
    popup.appendChild(div);


    const h1 = document.createElement('h1');
    h1.className = 'card-title';
    h1.innerHTML = index.title;
    div.appendChild(h1);
});
