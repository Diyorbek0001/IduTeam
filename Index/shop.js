const products = [
  { id: 1, name: "Protein Powder", price: 45, image: "/Index/Hulk Gym/protein.png"},
  { id: 2, name: "Gym Gloves", price: 20, image: "/Index/Hulk Gym/gloves.png " },
  { id: 3, name: "Fitness Bottle", price: 15, image: "/Index/Hulk Gym/ bottle.png" },
  { id: 4, name: "Smart Watch", price: 75, image: "/Index/Hulk Gym/watch.png" },
  { id: 5, name: "Training Shoes", price: 60, image: "/Index/Hulk Gym/shoes.png" },
  { id: 6, name: "Yoga Mat", price: 25, image: "/Index/Hulk Gym/yoga.png" },
  { id: 7, name: "Weight Belt", price: 35, image: "/Index/Hulk Gym/Weight Belt.png" },
  { id: 8, name: "Shaker", price: 10, image: "/Index/Hulk Gym/shaker.png" },
  { id: 9, name: "Supplement Pack", price: 90, image: "/Index/Hulk Gym/supplement.png" },
  { id: 10, name: "Towel", price: 12, image: "/Index/Hulk Gym/towel.png" },
  { id: 11, name: "Resistance Band", price: 18, image: "/Index/Hulk Gym/band.png" },
  { id: 12, name: "Sport Bag", price: 40, image: "/Index/Hulk Gym/bag.png" },
];


  const favorites = new Set();
  const cart = [];

  const container = document.getElementById("product-list");

  function renderProducts() {
    container.innerHTML = "";
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          <div class="actions">
            <button class="btn" onclick="addToCart(${product.id})">Korzinkaga</button>
            <span class="heart ${favorites.has(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id}, this)">&hearts;</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function toggleFavorite(id, el) {
    if (favorites.has(id)) {
      favorites.delete(id);
      el.classList.remove("active");
    } else {
      favorites.add(id);
      el.classList.add("active");
    }
  }

  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    alert(`${product.name} korzinkaga qo'shildi!`);
  }

  renderProducts();
