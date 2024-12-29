
const users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    { username: "user4", password: "pass4" },
    { username: "user5", password: "pass5" },
    { username: "user6", password: "pass6" },
    { username: "user7", password: "pass7" },
    { username: "user8", password: "pass8" },
    { username: "user9", password: "pass9" },
    { username: "user10", password: "pass10" },
];




let propertyData1 = [];
let products = [{ id: 1, name: "ofSmartphone", price: 500 },];

document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    
    const reader = new FileReader();

    reader.onload = (e) => {
        
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Convertir los datos del archivo Excel a JSON
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      // Guardar los datos en la variable global y renderizar tarjetas
      propertyData1 = sheetData;
      products = propertyData1;
      productoferta = products;
      //alert("aqui funcionando para la asignacion de variables. parte 1");
      displayProducts(products);
      //searchProducts();
    };

    reader.readAsArrayBuffer(file);
   // alert("aqui funcionando para la asignacion de variables parte 2.");
  }
 // alert("aqui funcionando para la asignacion de variables. aqui salio de la parte 2 y ahora la parte 3");
});



// Variables globales para el carrito
let cart = [];
let cartTotal = 0;
let loggedIn = false;

// Función para agregar productos al carrito
function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    cartTotal += price;
    updateCartCount();
    displayCartItems();
    alert(`${name} lo haz añadido al Carrito!`);
}


// Función para actualizar el contador del carrito
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Función para mostrar u ocultar el modal del carrito
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'none' || cartModal.style.display === '') {
        cartModal.style.display = 'block';
        displayCartItems();
    } else {
        cartModal.style.display = 'none';
    }
}

// Función para mostrar los elementos del carrito
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpiar la lista antes de mostrar
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(3)} <button onclick="removeFromCart(${index})">Remover</button>`;
        cartItemsList.appendChild(listItem);
    });
    document.getElementById('cart-total').innerText = cartTotal.toFixed(3);
   
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    const item = cart[index];
    cartTotal -= item.price;
    cart.splice(index, 1);
    updateCartCount();
    displayCartItems();
}



// Función para mostrar/ocultar el formulario de login se debe de mirar muy bien este inicio de seccion
function toggleLoginForm() {
    const loginForm = document.getElementById("loginForm");
    //loginForm.classList.toggle("hidden");
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none"; 
}



function login11() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        loggedIn = true;
        document.getElementById("loginStatus").textContent = "Logged Confirmada!";
        toggleLoginForm();
    } else {
        document.getElementById("loginStatus").textContent = "Invalid credentials";
        loggedIn = false;
    }
}




// Función de login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    //let loggedIn = false;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        
        loggedIn = true;
        document.getElementById('loginStatus').textContent = 'Login OK';
        //login12();
        
        alert("login iniciado");
        location.href = "index.html";
        toggleLoginForm();
        
        
    } else {
        loggedIn = false;
        alert("login NO iniciado");
        document.getElementById('loginStatus').textContent = 'Invalid credentials';
    }

   // 
}


// Inicializar el carrito al cargar la página
//updateCartUI();

// Funciones de login (simplificadas)
/*
function toggleLoginForm() {
    const loginForm1 = document.getElementById('loginForm');
    loginForm1.style.display = loginForm1.style.display === 'none' ? 'block' : 'none';
}
*/
// Función de checkout


// Función para finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }else if (!loggedIn) {
        alert("Please login again to proceed with checkout. Por favor inicie con las credenciales"); 
        toggleCart();
    }else {
        alert(`Checkout complete! Total: $${cartTotal.toFixed(3)}`);
        cart = [];
        cartTotal = 0;
        //updateCartUI();
        updateCartCount();
        toggleCart();
    }
}


// Función para buscar productos
function searchProducts() {
    // Obtener el término de búsqueda del input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    //alert("aqui funcionando el filtrado");
    // Mostrar los productos filtrados
    displayProducts(filteredProducts);
}
function searchProductsoferta() {
    // Obtener el término de búsqueda del input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = productoferta.filter(product1 => product1.name.toLowerCase().includes(searchTerm));

    // Mostrar los productos filtrados
    displayProducts1(filteredProducts);
}



var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var button = document.getElementById("btn");


function register() {
   loginForm.style.left = "-400px";
   registerForm.style.left = "50px";
    button.style.left = "110px";
}

function login1() {

    
    loginForm.style.left = "50px";
    registerForm.style.left = "450px";
    button.style.left = "0";
}





function displayProducts(productList) {
    const productGrid = document.querySelector('.product-grid');

   // const container = document.getElementById("propertyCards");

    
    
    // Limpiar los productos actuales en la cuadrícula
    productGrid.innerHTML = '';
    
    // Mostrar los productos filtrados
    if (productList.length > 0) {
        productList.forEach(product => {
            // Validar y convertir el precio a un número
            const price = parseFloat(product.price) || 0; // Si no es válido, se asigna 0
            const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio

            const productItem = `
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${formattedPrice}</p>
                    <br>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${price})">Add to Cart</button>
                </div>
            `;
            productGrid.innerHTML += productItem;
        });
    } else {
        productGrid.innerHTML = '<p>ningún producto encontrado.</p>';
    }
}

function displayProducts1(data) {
    const container = document.getElementById("productsCards");
    container.innerHTML = ""; // Limpiar contenido previo

    
  
    data.forEach((products) => {
      const price = parseFloat(products.price) || 0; // Si no es válido, se asigna 0
      const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio
      
      const card = document.createElement("div");
      //card.classList.add("product-item");
      card.innerHTML = `
        <div class="product-item" data-id="${products.id}">
                    <img src="${products.image}" alt="${products.name}">
                    <h3>${products.name}</h3>
                    <p>${formattedPrice}</p>
                    <br>
                    <button onclick="addToCart(${products.id}, '${products.name}', ${price})">Add to Cart</button>
                </div>
      `;
  
      // Agregar evento de clic para mostrar los detalles
      card.addEventListener("click", () => showPropertyDetail(products));
      container.appendChild(card);
    });
  }
  
  // Mostrar los detalles de una propiedad
  function showPropertyDetail(property) {
    const detailSection = document.getElementById("product-detail");
    const listSection = document.getElementById("product-list");
    const detailContainer = document.getElementById("productDetailContainer");
  
    // Llenar el detalle con la información de la propiedad
    detailContainer.innerHTML = `
  
       <div class="virtual-tour">
                  <h3>Propiedad</h3>
                  <img src="${property.image}" alt="Foto portada propiedad">
              </div>
  
  
              <div class="product-description">
                  <h2 class="product-title">${property.title}</h2>
                  <p class="product-text">${property.description}</p>
                  
              </div>
  
               <div class="virtual-tour">
                  <h3>Recorrido Virtual en ensamble</h3>
                  
                      <img src="${property.foto1}" alt="Imagen 1">
                      <img src="${property.foto2}" alt="Imagen 2">
                  
                      <img src="${property.foto3}" alt="Imagen 3">
                  
                      <img src="${property.foto4}" alt="Imagen 4">
                  
              
                  
              </div>
              
          </div>
     </div>
  
    `;
  
    // Mostrar la sección de detalles y ocultar la lista
    detailSection.style.display = "block";
    listSection.style.display = "none";
  }



/*
function displayProducts1(productList) {
    const productGrid = document.querySelector('.product-grid1');
   
    // Limpiar los productos actuales en la cuadrícula
    productGrid.innerHTML = '';
    
    // Mostrar los productos filtrados
    //alert("la data va en el proceso 2");
    if (productList.length > 0) {
        productList.forEach(product => {

            
            // Validar y convertir el precio a un número
            const price = parseFloat(product.price) || 0; // Si no es válido, se asigna 0
            const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio

            const productItem = `
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${formattedPrice}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${price})">Add to Cart</button>
                </div>
            `;
            productGrid.innerHTML += productItem;
            
        });
    } else {
        productGrid.innerHTML = '<p>ningún producto encontrado.</p>';
    }
}

/*
// Mostrar los detalles de una propiedad
function showPropertyDetail(property) {
    const detailSection = document.getElementById("property-detail");
    const listSection = document.getElementById("property-list");
    const detailContainer = document.getElementById("propertyDetailContainer");
    alert("la data va en el proceso 2,4");

    // Llenar el detalle con la información de la propiedad
    detailContainer.innerHTML = `
  
       <div class="virtual-tour">
                  <h3>Propiedad</h3>
                  <img src="${property.image}" alt="Foto portada propiedad">
              </div>
  
  
              <div class="product-description">
                  <h2 class="product-title">${property.name}</h2>
                  <p class="product-text">${property.description}</p>
                  
              </div>
  
               <div class="virtual-tour">
                  <h3>Recorrido Virtual en ensamble</h3>
                  
                      <img src="${property.foto1}" alt="Imagen 1">
                      <img src="${property.foto2}" alt="Imagen 2">
                  
                      <img src="${property.foto3}" alt="Imagen 3">
                  
                      <img src="${property.foto4}" alt="Imagen 4">
                 
              
                  
              </div>
  
             
  
              <div class="contact-section">
                  <h4>Contactar al Vendedor</h4>
                  <form>
                      <input type="text" placeholder="Tu Nombre" required>
                      <input type="email" placeholder="Tu Correo" required>
                      <input type="number" placeholder="Tu Telefono" required>
                      <input type="text" placeholder="Asesor" required>
                      <textarea placeholder="Tu Mensaje"></textarea>
                      <button type="submit" class="product-button">Enviar</button>
                  </form>
              </div>
          </div>
     </div>
  
    `;
    alert("la data va en el proceso 2,5");
    // Mostrar la sección de detalles y ocultar la lista
    detailSection.style.display = "block";
    listSection.style.display = "none";
  }
*/


  // Volver a la lista de propiedades
document.getElementById("backButton").addEventListener("click", () => {
    
    const detailSection = document.getElementById("product-detail");
    const listSection = document.getElementById("product-list");
  
    detailSection.style.display = "none";
    //listSection.style.display = "block";
    listSection.style.display = 'block'; // 
    
  });



  console.log("JavaScript conectado correctamente.");