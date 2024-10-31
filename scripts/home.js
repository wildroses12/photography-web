
const collapsibleBoxElement = document.querySelector('.collapsible-box');
const burgerMenuButtonElement = document.querySelector('.burger-menu');
const navMobileMenuElement = document.querySelector('.nav-mobile-menu');

burgerMenuButtonElement.addEventListener('click', showCollapsibleBox);

let shown = false;

function showCollapsibleBox(){
    if (window.matchMedia("(min-width: 700px)").matches) {
    if(!shown){
        
        collapsibleBoxElement.classList.remove('inactive');
        collapsibleBoxElement.classList.add('invisible');
        setTimeout(() => {
            burgerMenuButtonElement.classList.add('active');
            burgerMenuButtonElement.classList.add('active2');
        },200)
        setTimeout(() => {
            collapsibleBoxElement.classList.remove("invisible");
        }, 500); 
        collapsibleBoxElement.innerHTML = `<div class="event-type-box">
        <div>
            <a href="">MATURE</a>
        </div>
        <div>
            <a href="">KRŠTENJA</a>
        </div>
        <div>
            <a href="">ROĐENDANI</a>
        </div>
    </div>
    <div class="menu-box">
        <ul>
            <li>
                <a href="">POČETNA</a>
            </li>
            <li>
                <a href="">O MENI</a>
            </li>
            <li>
                <a href="">CENOVNIK</a>
            </li>
        </ul>
    </div>`;
        shown = true;
    }
    else{
        setTimeout(() => {
            collapsibleBoxElement.classList.add('inactive');
        }, 50);
        setTimeout(() => {
            burgerMenuButtonElement.classList.remove('active');
            burgerMenuButtonElement.classList.remove('active2');
        }, 500);
        collapsibleBoxElement.classList.add("invisible");
        collapsibleBoxElement.innerHTML = "";
        shown = false;
    }
    
}else{
    if(!shown){
        
        setTimeout(() => {
            burgerMenuButtonElement.classList.add('active');
            navMobileMenuElement.classList.remove('nav-mobile-not-active');
        }, 500);
        shown=true;
    }
    else{
        burgerMenuButtonElement.classList.remove('active');
        navMobileMenuElement.classList.add('nav-mobile-not-active');
        shown=false;
    }
}
}

