const hamburger = document.querySelector('.hamburger');
const menue = document.querySelector('.menu')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menue.classList.toggle('active');
  });
const speakers = [
    {
    name: 'Sam Johnson',
    img: './assets/person1.jpg',
    profission: 'Senior Engineer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam!'
},
{
    name: 'John Becker',
    img: './assets/person2.jpg',
    profission: 'R&D Team Leader',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam!'
},
{
    name: 'Criss Evans',
    img: './assets/person3.jpg',
    profission: 'Senior Network Engineer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam!'
},
{
    name: 'Lizley Carson',
    img: './assets/person4.jpg',
    profission: 'HR Manager',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam!'
},
{
    name: 'Mia Wright',
    img: './assets/person5.jpg',
    profission: 'Senior Web Developer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam!'
},
{
    name: 'Lily Jons',
    img: './assets/person6.jpg',
    profission: 'Senior Software Engineer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam!'
},
];
const cards = document.querySelector('.speakers');
for (let i = 0; i < speakers.length; i+=1) {
cards.innerHTML += `
<div class = "speaker">
  <img src = "${speakers[i].img}">
  <div class = "speakerscontent">
    <h3>${speakers[i].name}</h3>
    <p class = "speakerprofission">${speakers[i].profission}</p>
    <hr>
    <p class = "speakersdesc">${speakers[i].desc}</p>
  </div>
</div>`
};