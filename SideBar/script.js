const navBarItem = document.querySelectorAll(".navBar__item");

//loop thrg all navBarItem and set eventlistner for click event
navBarItem.forEach((item) => {
  item.addEventListener("click", () => {
    navBarItem.forEach((ele) => {
      //  if (ele.classList.contains("active")) {
      //    ele.classList.remove("active");
      //  }

      // ele.className = ".navBar__item"; except this class name all others are removed
      ele.classList.contains("active") ? ele.classList.remove("active") : "";
    });
    item.classList.toggle("active");
  });
});
/* 
for (let i = 0; i < navBarItem.length; i++) {
  navBarItem[i].addEventListener("click", () => {
    navBarItem.forEach((ele) => {
      //  if (ele.classList.contains("active")) {
      //    ele.classList.remove("active");
      //  }

      // ele.className = ".navBar__item"; except this class name all others are removed
      ele.classList.contains("active") ? ele.classList.remove("active") : "";
    });
    navBarItem[i].classList.toggle("active");
  });
} */
