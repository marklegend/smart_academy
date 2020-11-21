let menu_btn = document.getElementById("menu-btn");
let sidenav = document.getElementById("sidenav");

sidenav.style.right = "-250px";
menu_btn.onclick = () => {
  if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
  } else {
    sidenav.style.right = "-250px";
  }
};
