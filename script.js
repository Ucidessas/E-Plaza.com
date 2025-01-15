// Datos de productos y usuarios
/*
const products = [
    { id: 1, name: "Smartphone", price: 500 },
    { id: 2, name: "Laptop", price: 1000 },
    { id: 3, name: "SmartWatch", price: 200 },
    { id: 4, name: "Tablet", price: 300 },
    { id: 5, name: "Headphones", price: 50 },
    { id: 6, name: "Camera", price: 600 },
    { id: 7, name: "Bluetooth Speaker", price: 70 },
    { id: 8, name: "External Hard Drive", price: 120 },
    { id: 9, name: "Wireless Charger", price: 25 },
    { id: 10, name: "Gaming Console", price: 400 },
    { id: 11, name: "Mouse", price: 50 },
    { id: 12, name: "teclado", price: 600 },
    { id: 13, name: "Bluetooth parlante", price: 70 },
    { id: 14, name: "Disco Duro", price: 120 },
    { id: 15, name: "Cargador", price: 25 },
    { id: 16, name: "Juego volante", price: 670 },
];

const productoferta = [
    { id: 1, name: "ofSmartphone", price: 500 },
    { id: 2, name: "ofLaptop", price: 1000 },
    { id: 3, name: "ofSmartWatch", price: 200 },
    { id: 4, name: "ofTablet", price: 300 },
    { id: 5, name: "ofHeadphones", price: 50 },
    { id: 6, name: "ofCamera", price: 600 },
    { id: 7, name: "ofBluetooth Speaker", price: 70 },
    { id: 8, name: "ofExternal Hard Drive", price: 120 },
    { id: 9, name: "ofWireless Charger", price: 25 },
    { id: 10, name: "ofGaming Console", price: 400 },
    { id: 11, name: "ofMouse", price: 50 },
    { id: 12, name: "ofteclado", price: 600 },
    { id: 13, name: "ofBluetooth parlante", price: 70 },
    { id: 14, name: "ofDisco Duro", price: 120 },
    { id: 15, name: "ofCargador", price: 25 },
    { id: 16, name: "ofJuego volante", price: 670 },
];
*/
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
let tenderoData1 = [{ id: 1, name: "tenderos  de prueba", price: 1000 },];
let products = [{ id: 1, name: "iniciando", price: 1000 },];
let productoferta =[{ id: 1, name: "iniciando oferta", price: 1000 },];

// Cargar el archivo Excel al cargar la página

document.addEventListener("DOMContentLoaded", () => {
  fetch("./productos.xlsx") // Archivo en la carpeta raíz
    .then((response) => response.arrayBuffer())
    .then((data1) => {
      const workbook1 = XLSX.read(new Uint8Array(data1), { type: "array" });
      const sheetName1 = workbook1.SheetNames[0];
      const sheetData1 = XLSX.utils.sheet_to_json(workbook1.Sheets[sheetName1]);

      // Guardar los datos en la variable global y renderizar tarjetas
      propertyData1 = sheetData1;
      products = propertyData1;
      productoferta = products;
      //alert("aqui funcionando para la asignacion de variables. parte 1");
      displayProducts(products);
      searchProductsoferta();
      searchservice();
      //searchProducts();;
    })
    .catch((error) => console.error("Error al cargar el archivo:", error));
    //alert("la data fue NO 1111 esogida directamente");
});


document.addEventListener("DOMContentLoaded", () => {
    fetch("./tenderos.xlsx") // Archivo en la carpeta raíz
      .then((response) => response.arrayBuffer())
      .then((data2) => {
        const workbook = XLSX.read(new Uint8Array(data2), { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
        // Guardar los datos en la variable global y renderizar tarjetas
        tenderoData1 = sheetData;
        //products = propertyData1;
        //productoferta = products;
        //alert("aqui funcionando para la asignacion de variables. parte 1");
        displaytenderos(tenderoData1);
         //displaytenderos1(tenderoData1);
        //searchProducts();
      })
      .catch((error) => console.error("Error al cargar el archivo:", error));
      //alert("la data fue NO 2222 esogida directamente");
  });

  
// este codigo de escuchar no funciona cuando se quiere activas con el login ya que poseee un error 
/*  que sollo puede ser llamado cuando se utiliza. 
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
      searchProductsoferta();
      searchservice();
      //searchProducts();
    };

    reader.readAsArrayBuffer(file);
   // alert("aqui funcionando para la asignacion de variables parte 2.");
  }
 // alert("aqui funcionando para la asignacion de variables. aqui salio de la parte 2 y ahora la parte 3");
});


// este codigo de escuchar no funciona cuando se quiere activas con el login ya que poseee un error 
//que sollo puede ser llamado cuando se utiliza. 
document.getElementById("fileInput1").addEventListener("change", (event) => {
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
        tenderoData1 = sheetData;
        //products = propertyData1;
        //productoferta = products;
        //alert("aqui funcionando para la asignacion de variables. parte 1");
        displaytenderos(tenderoData1);
         //displaytenderos1(tenderoData1);
        //searchProducts();
      };
  
      reader.readAsArrayBuffer(file);
     // alert("aqui funcionando para la asignacion de variables parte 2.");
    }
   // alert("aqui funcionando para la asignacion de variables. aqui salio de la parte 2 y ahora la parte 3");
  });

 */ //este codigo

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
    const searchTerm1 = ["si"];
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = productoferta.filter(product1 => product1.name.toLowerCase().includes(searchTerm));
    const filteredProducts1 = filteredProducts.filter(product2 => product2.oferta.toLowerCase().includes(searchTerm1));
    
    displayProducts1(filteredProducts1);
}

function searchservice() {
  // Obtener el término de búsqueda del input
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const searchTerm1 = ["si"];
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = productoferta.filter(product1 => product1.name.toLowerCase().includes(searchTerm));
    const filteredProducts1 = filteredProducts.filter(product2 => product2.service.toLowerCase().includes(searchTerm1));
    
  //alert("aqui funcionando el filtrado");
  // Mostrar los productos filtrados
  displayservice(filteredProducts1);
}


// Función para buscar productos
function searchtenderos() {
    // Obtener el término de búsqueda del input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProducts = tenderoData1.filter(product => product.name.toLowerCase().includes(searchTerm));

    //alert("aqui funcionando el filtrado");
    // Mostrar los productos filtrados
    displaytenderos(filteredProducts);
     //displaytenderos1(filteredProducts);
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


/*
// mistrar para todos los productos sin importar que sean de oferta o no. 

function displayProducts(productList) {
    //const productGrid = document.querySelector('.product-grid');
    const container = document.getElementById("productsCards0");

   // const container = document.getElementById("propertyCards");

   container.innerHTML = '';
    
    // Limpiar los productos actuales en la cuadrícula
    //productGrid.innerHTML = '';
    
    // Mostrar los productos filtrados
    if (productList.length > 0) {


        productList.forEach(product => {
            // Validar y convertir el precio a un número
            const price = parseFloat(product.price) || 0; // Si no es válido, se asigna 0
            const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio
            
            const productItem = document.createElement("div");
            //card.classList.add("product-item");
            //card.innerHTML = `
            productItem.innerHTML =`
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${formattedPrice}</p>
                    <br>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${price})">Add to Cart</button>
                </div>
            `;
            //productGrid.innerHTML += productItem;

            productItem.addEventListener("click", () => showPropertyDetail(product));
            container.appendChild(productItem);
        });
    } else {
        productGrid.innerHTML = '<p>ningún producto encontrado.</p>';
    }
}

*/

function displayProducts(productList) {
  const container = document.getElementById("productsCards0");
  container.innerHTML = '';

  // Verificar si hay productos en la lista
  if (productList.length > 0) {
      // Mezclar aleatoriamente la lista de productos
      const shuffledProducts = productList.sort(() => Math.random() - 0.5);

      // Seleccionar los primeros 15 productos (o todos si hay menos de 15)
      const selectedProducts = shuffledProducts.slice(0, 28);

      // Mostrar los productos seleccionados
      selectedProducts.forEach(product => {
          const price = parseFloat(product.price) || 0; // Validar y convertir el precio a número
          const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio

          const productItem = document.createElement("div");
          productItem.innerHTML = `
              <div class="product-item" data-id="${product.id}">
                  <img src="${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>${formattedPrice}</p>
                  <br>
                  <button onclick="addToCart(${product.id}, '${product.name}', ${price})">Add to Cart</button>
              </div>
          `;

          // Agregar evento para mostrar detalles del producto
          productItem.addEventListener("click", () => showPropertyDetail(product));
          container.appendChild(productItem);
      });
  } else {
      container.innerHTML = '<p>Ningún producto encontrado.</p>';
  }
}

//aqui solo se debe de a que deben de sali solo los que son de oferta. 

function displayProducts1(data) {


    const container = document.getElementById("productsCards");
  container.innerHTML = '';

  // Verificar si hay productos en la lista
  if (data.length > 0) {
      // Mezclar aleatoriamente la lista de productos
      const shuffledProducts = data.sort(() => Math.random() - 0.5);

      // Seleccionar los primeros 15 productos (o todos si hay menos de 12)
      const selectedProducts = shuffledProducts.slice(0, 12);

      // Mostrar los productos seleccionados
      selectedProducts.forEach(product => {
          const price = parseFloat(product.price) || 0; // Validar y convertir el precio a número
          const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio

          const productItem = document.createElement("div");
          productItem.innerHTML = `
              <div class="product-item" data-id="${product.id}">
                  <img src="${product.image}" alt="${product.name}">
                  <h3>${product.name}</h3>
                  <p>${formattedPrice}</p>
                  <br>
                  <button onclick="addToCart(${product.id}, '${product.name}', ${price})">Add to Cart</button>
              </div>
          `;

          // Agregar evento para mostrar detalles del producto
          productItem.addEventListener("click", () => showPropertyDetail(product));
          container.appendChild(productItem);
      });
  } else {
      container.innerHTML = '<p>Ningún producto encontrado.</p>';
  }
  }


  function displayservice(productList) {
    //const productGrid = document.querySelector('.product-grid');
    const container = document.getElementById("productservice");

   // const container = document.getElementById("propertyCards");

   container.innerHTML = '';
    
    // Limpiar los productos actuales en la cuadrícula
    //productGrid.innerHTML = '';
    
    // Mostrar los productos filtrados
    if (productList.length > 0) {


        productList.forEach(product => {
            // Validar y convertir el precio a un número
            const price = parseFloat(product.price) || 0; // Si no es válido, se asigna 0
            const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio
            const productItem = document.createElement("div");
            //card.classList.add("product-item");
            //card.innerHTML = `
            productItem.innerHTML =`
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${formattedPrice}</p>
                    <br>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${price})">Add to Cart</button>
                </div>
            `;
            //productGrid.innerHTML += productItem;

            productItem.addEventListener("click", () => showPropertyDetail(product));
            container.appendChild(productItem);
        });
    } else {
        productGrid.innerHTML = '<p>ningún producto encontrado.</p>';
    }
}

 // }
  
  /* Mostrar los detalles de una propiedad
  function showPropertyDetail(property) {
    const detailSection2 = document.getElementById("tendero-detail");
    const listSection2 = document.getElementById("tendero-list");
    const detailSection = document.getElementById("product-detail");
    const listSection = document.getElementById("product-list");
    const listSection1 = document.getElementById("product-list0");
    const detailContainer = document.getElementById("productDetailContainer");
  
    // Llenar el detalle con la información de la propiedad
    detailContainer.innerHTML = `
  
       <div class="virtual-tour">
                  <h3>Propiedad</h3>
                  <img src="${property.image}" alt="Foto portada propiedad">
              </div>
  
              .
  
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
              
          </div>
     </div>
  
    `;
  
    // Mostrar la sección de detalles y ocultar la lista
    detailSection.style.display = "block";
    listSection.style.display = "none";
    listSection1.style.display = "none";
    detailSection2.style.display = "none";
    listSection2.style.display = "none";
  }
*/

function showPropertyDetail(property) {
    const detailSection2 = document.getElementById("tendero-detail");
    const listSection2 = document.getElementById("tendero-list");
    const listSection3 = document.getElementById("product-servi");
    const detailSection = document.getElementById("product-detail");
    const listSection = document.getElementById("product-list");
    const listSection1 = document.getElementById("product-list0");
    const detailContainer = document.getElementById("productDetailContainer");

    // Array dinámico con todas las fotos
    const fotos = [property.foto1, property.foto2, property.foto3, property.foto4, property.foto5, property.foto6, property.foto7, property.foto8];

    // Generar las imágenes dinámicamente desde el array
    const imageHtml = fotos
        .map((foto, index) => {
            if (foto && foto.trim() !== "") {
                return `<img src="${foto}" alt="Imagen ${index + 1}" style="margin: 10px; max-width: 100%; height: auto;">`;
            }
            return ""; // Si no hay foto, no se genera contenido
        })
        .join("");

        const price = parseFloat(property.price) || 0; // Si no es válido, se asigna 0
      const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio

    // Llenar el detalle con la información de la propiedad
    detailContainer.innerHTML = `
        <div class="virtual-tour">
            <h3>Propiedad</h3>
            <img src="${property.image}" alt="Foto portada propiedad" style="margin: 10px; max-width: 100%; height: auto;">
        </div>
        <div class="product-description">
            <h2 class="product-title">${property.name}</h2>
            <p class="product-text">${property.description}</p>
        </div>
        <div class="virtual-tour">
            <h3>Recorrido Virtual en ensamble</h3>
            ${imageHtml}
        </div>
        <div class="product-item1">
        <p>${formattedPrice}</p>
        <br>
        <button onclick="addToCart(${property.id}, '${property.name}', ${price})">Add to Cart</button>
        </div>
        `;

    // Mostrar la sección de detalles y ocultar las demás listas
    detailSection.style.display = "block";
    listSection.style.display = "none";
    listSection1.style.display = "none";
    detailSection2.style.display = "none";
    listSection2.style.display = "none";
    listSection3.style.display = "none";
}




  function displaytenderos(data) {
    const container = document.getElementById("tenderoCards");
    container.innerHTML = ""; // Limpiar contenido previo

    
  
    data.forEach((products3) => {
     // const price = parseFloat(products.price) || 0; // Si no es válido, se asigna 0
     // const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio
      
      const card2 = document.createElement("div");
      //card.classList.add("product-item");
      card2.innerHTML = `
        <div class="product-item" data-id="${products3.id}">
                    <img src="${products3.image}" alt="${products3.name}">
                    <h3>${products3.name}</h3>
                    <p>${products3.location}</p>
                </div>
      `;
      // Agregar evento de clic para mostrar los detalles
      card2.addEventListener("click", () => showtenderoDetail1(products3));
      container.appendChild(card2);
    });
  }


   /*
  function displaytenderos1(data) {
    

    const container = document.getElementById("tenderoCards2");

    // Limpiar contenido previo
    container.innerHTML = "";

    data.forEach((tendero) => {
      const card3 = document.createElement("div");
      card3.innerHTML = `
        <div class="product-item" data-id="${tendero.id}">
          <img src="${tendero.image}" alt="${tendero.name}">
          <h3>${tendero.name}</h3>
          <p>Ubicación: ${tendero.location}</p>
        </div>
      `;

      // Mostrar detalles del tendero
      card3.addEventListener("click", () => showtenderoDetail1(tendero));
      container.appendChild(card3);
    });
    //alert("aqui ha pasado bien 111")
   
  }
*/

  // Mostrar los detalles de un tendero
  function showtenderoDetail(property) {
    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    const listSection3 = document.getElementById("product-servi");
    const detailContainer = document.getElementById("tenderoDetailContainer");




    const price = parseFloat(products.price) || 0; // Si no es válido, se asigna 0
    const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio
  
    // Llenar el detalle con la información de la propiedad
    
    detailContainer.innerHTML = `
   <img id="tenderoImage" src="${property.image}" alt="">
      <h2 id="tenderoName"> ${property.name}</h2>
      <p id="tenderoDescription"> ${property.description}</p>
      <p><strong>Ubicación:  </strong>  ${property.location}<span id="tenderoLocation"></span></p>
      <p><strong>Productos:</strong>  ${property.products}<span id="tenderoProducts"></span></p>
      <p><strong>Calificación:</strong> ${property.rating} /5 <span id="tenderoRating"></span></p>
      <br>
      <br>


      
    `;
    


    // Mostrar la sección de detalles y ocultar la lista
    detailSection.style.display = "block";
    listSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection1.style.display = "none";
    listSection2.style.display = "none";
    listSection3.style.display = "none";
  }

  function displayProductstienda(data,tende) {
    const container = document.getElementById("productsCards2");
    container.innerHTML = ""; // Limpiar contenido previo
    //alert("aquei funciono mostrar productos 00011111 en tienda")
    const searchTerm = tende.tienda;
    //alert("aquei funciono mostrar productos 1000000001 en tienda")
    // Filtrar los productos que coinciden con el término de búsqueda
    const filteredProductstende = data.filter(product0 => product0.tienda.toLowerCase().includes(searchTerm));
    
    //alert("aquei funciono mostrar productos 100010101 en tienda")
    
  //if(data.oferta.includes(true)){
    filteredProductstende.forEach((filter) => {
      const price = parseFloat(filter.price) || 0; // Si no es válido, se asigna 0
      const formattedPrice = `$${price.toFixed(3)}`; // Formatear el precio
      
      const card = document.createElement("div");
      //card.classList.add("product-item");
      card.innerHTML = `
        <div class="product-item1" data-id="${filter.id}">
                    <img src="${filter.image}" alt="${filter.name}">
                    <h3>${filter.name}</h3>
                    <br>
                    <p>${filter.description}</p>
                    <br>
                    <p>${formattedPrice}</p>
                    <br>
                    <button onclick="addToCart(${filter.id}, '${filter.name}', ${price})">Add to Cart</button>
                </div>
      `;
      //alert("aquei funciono mostrar productos 12020202 en tienda")
      /* Agregar evento de clic para mostrar los detalles
      card.addEventListener("click", () => showPropertyDetail(products));
      container.appendChild(card);
      */
      container.appendChild(card);
    });
  }


  function showtenderoDetail1(property) {
    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    const detailContainer = document.getElementById("tenderoDetailContainer");
    const detailSection2 = document.getElementById("productsCards2");
    const listSection3 = document.getElementById("product-servi");
    


  
    // Llenar el detalle con la información de la propiedad
    /*
    detailContainer.innerHTML = `
  
       <div class="virtual-tour">
                  <h3>TENDERO</h3>
                  <img src="${property.image}" alt="Foto Portada Tienda">
              </div>
  
  
              <div class="product-description">
                  <h2 class="product-title">${property.name}</h2>
                  <p class="product-text">${property.description}</p>
                  
              </div>
  
               <div class="virtual-tour">
                  <h3>Recorrido Virtual en ensamble</h3>

                  
                  
                    
                <div class="product-item" data-id="${products.id}">
                    <img src="${products.image}" alt="${products.name}">
                    <h3>${products.name}</h3>
                    <p>${formattedPrice}</p>
                    <br>
                    <button onclick="addToCart(${products.id}, '${products.name}', ${price})">Add to Cart</button>
                </div>
                  
              </div>
              
          </div>
     </div>
  
    `;
    */

detailContainer.innerHTML = `

    <img id="tenderoImage" src="${property.image}" alt="">
      <h2 id="tenderoName"> ${property.name}</h2>
      <p id="tenderoDescription"> ${property.description}</p>
      <p><strong>Ubicación:  </strong>  ${property.location}<span id="tenderoLocation"></span></p>
      <p><strong>Productos:</strong>  ${property.products}<span id="tenderoProducts"></span></p>
      <p><strong>Calificación:</strong> ${property.rating} /5 <span id="tenderoRating"></span></p>
      

      `;

      //alert("aquei funciono mostrar productos 000000 en tienda")
    displayProductstienda(products,property);
    //alert("aquei funciono mostrar productos 1111 en tienda")
  
    // Mostrar la sección de detalles y ocultar la lista  
    detailSection.style.display = "block";
    detailSection2.style.display = "block";
    listSection.style.display = "none";
    detailSection1.style.display = "none";;
    listSection1.style.display = "none";
    listSection2.style.display = "none";
    listSection3.style.display = "none";
  
  }





  // Volver a la lista de propiedades
document.getElementById("backButton").addEventListener("click", () => {



    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    const listSection3 = document.getElementById("product-servi");
  


    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "block";
    listSection1.style.display = "block";
    listSection2.style.display = "block";
    listSection3.style.display = "block";
    

    
  });

  document.getElementById("backButton1").addEventListener("click", () => {
    
    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    const listSection3 = document.getElementById("product-servi");
  


    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "block";
    listSection1.style.display = "block";
    listSection2.style.display = "block";
    listSection3.style.display = "block";
    
  });

  document.getElementById("backButtonf").addEventListener("click", () => {



    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    const listSection3 = document.getElementById("product-servi");
  


    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "block";
    listSection1.style.display = "block";
    listSection2.style.display = "block";
    listSection3.style.display = "block";
    
    

    
  });

  document.getElementById("backButton1f").addEventListener("click", () => {
    
    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    const listSection3 = document.getElementById("product-servi");
  


    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "block";
    listSection1.style.display = "block";
    listSection2.style.display = "block";
    listSection3.style.display = "block";
    
  });


  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("numero").value,
      asesor: document.getElementById("asesor").value,
      mensaje: document.getElementById("mensaje").value,
    };
  
    const serviceID = "service_c8zuhnf";
    const templateID = "template_99q1mlz";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("numero").value = "";
          document.getElementById("asesor").value = "";
          document.getElementById("mensaje").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }




  //aqui el menu de muestra y seleccion

  function inicio(){

    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    //const detailContainer = document.getElementById("tenderoDetailContainer");
    const contactos = document.getElementById("contacto");

    const listSection3 = document.getElementById("product-servi");
    listSection3.style.display = "block";


    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "block";
    listSection1.style.display = "block";
    listSection2.style.display = "block";
    //detailContainer.style.display= "none";
    contactos.style.display= "block";

  }

  function productventa(){

    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    //const detailContainer = document.getElementById("tenderoDetailContainer");
    const contactos = document.getElementById("contacto");
  
    const listSection3 = document.getElementById("product-servi");
    listSection3.style.display = "none";


    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "none";
    listSection1.style.display = "block";
    listSection2.style.display = "none";
    //detailContainer.style.display= "none";
    contactos.style.display= "none";
  }
  function producoferta(){


    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    //const detailContainer = document.getElementById("tenderoDetailContainer");
    const contactos = document.getElementById("contacto");
  
    const listSection3 = document.getElementById("product-servi");
    listSection3.style.display = "none";

    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "none";
    listSection1.style.display = "none";
    listSection2.style.display = "block";
    //detailContainer.style.display= "none";
    contactos.style.display= "none";

  }
  function servicios(){


    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    //const detailContainer = document.getElementById("tenderoDetailContainer");
    const contactos = document.getElementById("contacto");
  
    const listSection3 = document.getElementById("product-servi");
    listSection3.style.display = "block";

    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "none";
    listSection1.style.display = "none";
    listSection2.style.display = "none";
    //detailContainer.style.display= "none";
    contactos.style.display= "none";

  }

  
  function tenderos(){

    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    //const detailContainer = document.getElementById("tenderoDetailContainer");
    const contactos = document.getElementById("contacto");
  
    const listSection3 = document.getElementById("product-servi");
    listSection3.style.display = "none";

    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "block";
    listSection1.style.display = "none";
    listSection2.style.display = "none";
    //detailContainer.style.display= "none";
    contactos.style.display= "none";
  }

  function contacto(){

    const detailSection = document.getElementById("tendero-detail");
    const listSection = document.getElementById("tendero-list");
    const detailSection1 = document.getElementById("product-detail");
    const listSection1 = document.getElementById("product-list0");
    const listSection2 = document.getElementById("product-list");
    //const detailContainer = document.getElementById("tenderoDetailContainer");
    const contactos = document.getElementById("contacto");
  
    const listSection3 = document.getElementById("product-servi");
    listSection3.style.display = "none";

    detailSection.style.display = "none";
    detailSection1.style.display = "none";
    listSection.style.display = "none";
    listSection1.style.display = "none";
    listSection2.style.display = "none";
    //detailContainer.style.display= "none";
    contactos.style.display= "block";
  }






  console.log("JavaScript conectado correctamente.");