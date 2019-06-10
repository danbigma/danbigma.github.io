let btnClose = document.querySelector('.btnClose p'),
    sideMenu = document.querySelector('.side-menu'),
    btnSideMenu = document.querySelector('.btn-side-menu p');

btnClose.addEventListener("click", function() {
    sideMenu.classList.remove('active');
    btnSideMenu.style.visibility = "visible";
});

btnSideMenu.addEventListener('click', () => {
    sideMenu.classList.add('active');
    btnSideMenu.style.visibility = "hidden";
})
