"use strict";
{

    const menuItems = document.querySelectorAll(".menu li");
    const contentItems = document.querySelectorAll(".content");

    menuItems.forEach(clickItem => {
      clickItem.addEventListener("click", () => {
        menuItems.forEach(item => {
          item.classList.remove("active");
        });
        clickItem.classList.add("active");
        contentItems.forEach(content => {
          content.classList.remove("active");
        });
        document.getElementById(clickItem.dataset.id).classList.add("active");
      });
    });
}