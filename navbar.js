window.onscroll = () => {
  // sticky header
  let ul = document.querySelector("ul");

  ul.classList.toggle("blur", window.scrollY > 100);
};
