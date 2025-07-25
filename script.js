
const input_submit = document.getElementById("input_submit");
const input_value = document.getElementById("input_value");
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function enter_email() {
  const input_submit = document.getElementById("input_submit");
  const input_value = document.getElementById("input_value");
  console.log(input_value.value);
  // Kiểm ta đúng định dạng email
  if (!regex.test(input_value.value)) {
    alert("Email không hợp lệ");
    return;
  } 

  else {
  // Kiểm tra email đúng
    if (input_value.value == "abc@gmail.com") {
      const text = document.getElementById("text");
      text.style.display = "block";
      const input = document.getElementById("input");
      input.style.display = "none";
    }

    if (input_value.value != "abc@gmail.com") {
      alert("Sai địa chỉ email");
    }
  }
}

const handles = document.querySelectorAll(".handle");
console.log(handles)

handles.forEach((handle) => {
  const viewMoreBtn = handle.querySelector(".view-more");
  const content = handle.querySelector(".content");
  viewMoreBtn.style.display = "none";
  content.style.display = "none";

  let isExpanded = false;
  handle.addEventListener("mouseover", () => {
    viewMoreBtn.style.display = "block";
  });

  handle.addEventListener("mouseout", () => {
    viewMoreBtn.style.display = "none";
  });

  viewMoreBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Không cho click lan ra ngoài

    isExpanded = !isExpanded;
    if (isExpanded) {
      viewMoreBtn.innerHTML = "&#11167; VIEW LESS";
      content.style.display = "block";
    } else {
      viewMoreBtn.innerHTML = "&#11167; VIEW MORE";
      content.style.display = "none";
    }
  });
});
