window.onload = () => {
  let searchBox = document.querySelector(".search-box");
  searchInput.onfocus = () => searchBox.classList.add("active");
  searchInput.onblur = () => searchBox.classList.remove("active");
};
