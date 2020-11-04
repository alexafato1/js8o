const menu = [
  {
    id:1,
    title: "steak dinner",
    category: "dinner",
    price: 15.99,
    img: "https://vilkin.pro/wp-content/uploads/2019/08/brauni-shokoladniy.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },

  {
    id:2,
    title: "pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://www.safefood.net/getmedia/94101697-3c3f-4fe1-8ae8-5b595d3814ba/medium-rare-steak.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },
  
  {
    id:3,
    title: "pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/06/05/Pictures/_3062edc4-879d-11e9-ab40-33c30d629efb.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },

  {
    id:4,
    title: "pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu2caC5ME8EPBgVbwDgRqfkBSK56tsqP4wjw&usqp=CAU",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },

  {
    id:5,
    title: "pancakes",
    category: "lunch",
    price: 15.99,
    img: "https://vilkin.pro/wp-content/uploads/2019/08/brauni-shokoladniy.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },

  {
    id:6,
    title: "pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://www.safefood.net/getmedia/94101697-3c3f-4fe1-8ae8-5b595d3814ba/medium-rare-steak.jpg?w=2000&h=1333&ext=.jpg&width=1360&resizemode=force",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },
  
  {
    id:7,
    title: "pancakes",
    category: "shakes",
    price: 15.99,
    img: "data:image/jpeg;base64,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",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },

  {
    id:8,
    title: "pancakes",
    category: "lunch",
    price: 15.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu2caC5ME8EPBgVbwDgRqfkBSK56tsqP4wjw&usqp=CAU",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },
  {
    id:9,
    title: "pancakes",
    category: "top",
    price: 15.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu2caC5ME8EPBgVbwDgRqfkBSK56tsqP4wjw&usqp=CAU",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },
  {
    id:10,
    title: "pancakes",
    category: "lunch",
    price: 15.99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu2caC5ME8EPBgVbwDgRqfkBSK56tsqP4wjw&usqp=CAU",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptatem voluptatum! Dolore, repellat! Fugiat sapiente beatae, officia eligendi repellendus saepe id soluta quo temporibus explicabo sit, iure hic eaque ipsum possimus repellat neque voluptatibus. 
           Saepe enim quibusdam odio fugiat tempora?`
  },
]

const sectionCenter = document.querySelector('.section-center')
const btnContainer = document.querySelector('.btn-container')


window.addEventListener('DOMContentLoaded', function (){
    displayMenuItems(menu);
    displayMenuButtons();
});

 

function displayMenuItems(menuItems){
   let displayMenu = menuItems.map(function (item){

    return `<article class="menu-item">
          <img src=${item.img}  class='photo' alt=${item.title}/>
          <div class="item-info">
            <header>
              <h4 >${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
          <p class="item-text">${item.desc}</p>
          </div>
        </article>`
   })

displayMenu = displayMenu.join("");
 sectionCenter.innerHTML = displayMenu;
  }

  
  function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
      if(!values.includes(item.category)){ 
        values.push(item.category)
      }
     return  values
    },['all']) 

    const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll('.filter-btn')

  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category === category){
           return menuItem;
        }
      })
      if(category === 'all'){
        displayMenuItems(menu);
      } else{
        displayMenuItems(menuCategory)
      }
    })
  })
 
}