const createNav = () => {
  let navBar = document.querySelector(".navbar");
  navBar.innerHTML = `
    <div class="nav">
            <img src="./public/img/dark-logo.png" class="brand-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search, Brand, Product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="" class="profile"><i class="fas fa-user fa-2x"></i></a>
                <link rel="stylesheet" href="./public/js/nav/nav.js">
                <a href="" class="cart"><i class="fas fa-shopping-cart fa-2x"></i></a>
            </div>
        </div>
        <ul class="link-container">
            <li class="links"><a href="">Home</a></li>
            <li class="links"><a href="">Women</a></li>
            <li class="links"><a href="">Men</a></li>
            <li class="links"><a href="">Kids</a></li>
            <li class="links"><a href="">Accesories</a></li>
        </ul>
        `;
};

createNav();
