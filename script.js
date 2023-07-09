// Sample product data (you can replace it with your own data)
const productsCarousel1 = [
    {
      name: "Modern Ceramic Pot 1",
      image: "img7.jpg",
      price: "$19.99",
    },
    {
      name: "Vintage Terracotta Pot 1",
      image: "img6.jpg",
      price: "$14.99",
    },
    {
      name: "Sleek Metal Pot 1",
      image: "img9.jpg",
      price: "$24.99",
    },
  ];
  
  const productsCarousel2 = [
    {
      name: "Modern Ceramic Pot 2",
      image: "img7.jpg",
      price: "$19.99",
    },
    {
      name: "Vintage Terracotta Pot 2",
      image: "img6.jpg",
      price: "$14.99",
    },
    {
      name: "Sleek Metal Pot 2",
      image: "img9.jpg",
      price: "$24.99",
    },
  ];
  
  const productsCarousel3 = [
    {
      name: "Modern Ceramic Pot 3",
      image: "img7.jpg",
      price: "$19.99",
    },
    {
      name: "Vintage Terracotta Pot 3",
      image: "img9.jpg",
      price: "$14.99",
    },
    {
      name: "Sleek Metal Pot 3",
      image: "img6.jpg",
      price: "$24.99",
    },
  ];
  
  // Function to generate product carousel
  function generateProductCarousel(containerId, products) {
    const productCarousel = document.getElementById(containerId);
  
    products.forEach((product) => {
      const productSlide = document.createElement("div");
      productSlide.className = "product-slide";
  
      const productImg = document.createElement("div");
      productImg.className = "product-img";
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      productImg.appendChild(img);
  
      const productDetails = document.createElement("div");
      productDetails.className = "product-details";
      const productName = document.createElement("h3");
      productName.textContent = product.name;
      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;
      productDetails.appendChild(productName);
      productDetails.appendChild(productPrice);
  
      productSlide.appendChild(productImg);
      productSlide.appendChild(productDetails);
  
      productCarousel.appendChild(productSlide);
    });
  
    const slides = productCarousel.getElementsByClassName("product-slide");
    let slideIndex = 0;
  
    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
  
    showSlides();
  }
  
  // Call the function to generate the product carousels
  generateProductCarousel("carousel1", productsCarousel1);
  generateProductCarousel("carousel2", productsCarousel2);
  generateProductCarousel("carousel3", productsCarousel3);
  