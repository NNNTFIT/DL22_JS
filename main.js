const A = document.querySelectorAll(".box");
let drag = null;

A.forEach((box) => {
  box.draggable = true;

  box.addEventListener("dragstart", () => {
    drag = box;
    box.classList.add("active");
  });

  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    box.classList.add("over");
  });

  box.addEventListener("dragleave", () => {
    box.classList.remove("over");
  });

  box.addEventListener("drop", () => {
    if (drag !== box) {
      const change = box.innerHTML;
      box.innerHTML = drag.innerHTML;
      drag.innerHTML = change;
    }
    box.classList.remove("over");
  });

  box.addEventListener("dragend", () => {
    box.classList.remove("active");
    drag = null;
  });
});
