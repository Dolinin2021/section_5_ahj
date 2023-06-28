let container, text, header;
let flag = false;
let button = document.querySelector(".button-tooltip");

button.onclick = function (event) {
  if (flag == false) {
    let tooltipHtml = event.target.dataset.tooltip;
    if (!tooltipHtml) return;

    container = document.createElement("div");
    header = document.createElement("div");
    text = document.createElement("div");

    container.className = "container";
    header.className = "header";
    text.className = "text";

    header.innerHTML = "Popover title";
    text.innerHTML = tooltipHtml;

    document.body.append(container);
    document.body.append(header);
    document.body.append(text);

    container.appendChild(header);
    container.appendChild(text);

    let coords = event.target.getBoundingClientRect();

    let left =
      coords.left + (event.target.offsetWidth - container.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - container.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + event.target.offsetHeight + 5;
    }

    container.style.left = left + "px";
    container.style.top = top + "px";
    flag = true;
  } else {
    flag = false;
    if (container) {
      container.remove();
      container = null;
    }
  }
};
