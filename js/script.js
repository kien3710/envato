//
function bars() {
  var show = document.querySelector(".background__mobile");
  var nav = document.querySelector(".menu__mobile");
  nav.classList.toggle("active");
  show.classList.toggle("bg-filter");
  console.log("aaa");
}
function sidebar() {
  var sidebars = document.querySelector(".sidebar-tab");
  var sidebarFooter = document.querySelector(".sidebar__footer");
  sidebars.classList.toggle("sidebar-tab-active");
  console.log(":a");
  sidebarFooter.classList.toggle("display-none");
}
function search() {
  var logo = document.querySelector(".logo");
  var search = document.querySelector(".search-table");
  var iconSearch = document.querySelector(".fa-magnifying-glass");
  var iconSearch2 = document.querySelector(".icon-search");
  logo.classList.toggle("search-active");
  search.classList.toggle("search-tab-active");
  iconSearch.classList.toggle("search-active");
  iconSearch2.classList.toggle("display-none");
}
function toggle() {
  var sidebars = document.querySelector(".sidebar-shadow");
  var sidebars2 = document.querySelector(".sidebar-2");
  var sidebarFooter = document.querySelector(".sidebar__footer");
  var filtes = document.querySelector(".filtes");
  var filtess = document.querySelector(".filtess");
  sidebars.classList.toggle("col-lg-3");
  sidebars.classList.toggle("col-lg-1");
  sidebars2.classList.toggle("col-lg-11");
  sidebars2.classList.toggle("col-lg-9");

  sidebarFooter.classList.toggle("display-none");
  filtes.classList.toggle("display-none");
  filtess.classList.toggle("display-none");
}
