const ingradients = [
    {id: '1', name: 'картошка'},
    {id: '2', name: 'соль'},
    {id: '3', name: 'колбаса'},
    {id: '4', name: 'вермешель'},
    {id: '5', name: 'лук'},
    {id: '6', name: 'крабовые палочки'},
    {id: '7', name: 'морковь'},
    {id: '8', name: 'кукуруза'}
];

const menu = [
    {name: 'оливье', ingradients: ['1', '2', '3']},
    {name: 'деруны', ingradients: ['1', '2', '7']},
    {name: 'крабовье', ingradients: ['2', '6', '8']},
    {name: 'карбонара', ingradients: ['2', '5', '4']}
];

let htmlDish = "Блюда: " + " оливье," +" деруны," + " крабовье," + " карбонара";
let htmlIng = "Возможные игнредиенты: " + " картошка," + " соль," + " колбаса," + " морковь," + " кукуруза," + " вермешель," + " крабовые палочки";
const container = document.querySelector('.container');
const containerTwo = document.querySelector('.container__second');
const result = document.querySelector('.res')
container.innerHTML = htmlDish;
containerTwo.innerHTML = htmlIng;



const form = document.querySelector('.form');
form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const data = new FormData(form);
    const ing = data.get('ingradient');


   const findId = ingradients.find(ingradient => {
       if(ing === ingradient.name) {
           return ingradient;
       };      
   }).id;
   console.log(findId);


   const menuFilter = menu.filter(dish => {
       if(dish.ingradients.includes(findId)) {
           return dish;
       };
   });
   console.log(menuFilter);

   const renderDish = (dishes) => {
    let resHtml = '';
       for(dish of dishes) {
         resHtml += ` ${dish.name} `;
       };
       result.innerHTML = resHtml;
   };

   renderDish(menuFilter)

        const dishAlive = menu.find(val => {
            const result = val.name === ing;
            return result;
        });
});