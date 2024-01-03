let previewContainer = document.querySelector(".product-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach(element => {
    element.onclick=()=>{

        previewContainer.style.display="flex";

        let name=element.getAttribute("data-name");

        previewBox.forEach(ele => {
          let target= ele.getAttribute("data-target");

          if (name==target) {
            ele.classList.add("active");
          }
        });
    }
});


previewBox.forEach(close=>{
  close.querySelector("#ll").onclick=()=>{
    close.classList.remove("active");
    previewContainer.style.display="none";
  }
});

