// Toggle class active



const navbarNav = document.querySelector
('.navbar-nav');

// ketika hamburger menu diklik

document.querySelector('#ham-menu')
.onclick = () => {
    navbarNav.classList.toggle('active');

};

// Klik di luar side bar untuk menghilangkan nav

const hamburger = document.querySelector
('#ham-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// const container = document.getElementById("container");
// const img = document.querySelector("menu-card-img");
// container.addEventListener("mousemove", onZoom);
// container.addEventListener("mouseover", onZoom);
// container.addEventListener("mouseleave", offZoom);
// function onZoom(e) {
//     const x = e.clientX - e.target.offsetLeft;
//     const y = e.clientY - e.target.offsetTop;
//     menu-card-img.style.transformOrigin = `${x}px ${y}px`;
//     menu-card-img.style.transform = "scale(2.5)";
// }
// function offZoom(e) {
//     menu-card-img.style.transformOrigin = `center center`;
//     menu-card-img.style.transform = "scale(1)";
// }


const mynew = document.querySelectorAll("#container"); 


function onZoom(e){
    let bounds = mynew.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    myimg.style.transformOrigin = `${x}px ${y}px`;
    myimg.style.transform = "scale(1.5)";

}

function offZoom(){
    myimg.style.transformOrigin = `center center`;
    myimg.style.transform = "scale(1)";
    
}


mynew.forEach(e => {
    const myimg = e.childNodes[1]
    e.addEventListener("mousemove", (el) =>{
        let bounds = e.getBoundingClientRect();
        let x = el.clientX - bounds.left;
        let y = el.clientY - bounds.top;
        myimg.style.transformOrigin = `${x}px ${y}px`;
        myimg.style.transform = "scale(1.5)";
        

    });
    e.addEventListener("mouseover", (el) =>{
        let bounds = e.getBoundingClientRect();
        let x = el.clientX - bounds.left;
        let y = el.clientY - bounds.top;        
        myimg.style.transformOrigin = `${x}px ${y}px`;
        myimg.style.transform = "scale(1.5)";
    });
    e.addEventListener("mouseleave", () => {
        myimg.style.transformOrigin = `center center`;
        myimg.style.transform = "scale(1)";
    });
    
})