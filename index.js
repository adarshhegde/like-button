const hearts = document.getElementsByClassName("heart-button");
const counter = document.getElementsByClassName("counter")[0];

counter.innerHTML = counter.getAttribute("data-count");
for (let heart of hearts) {
    heart.addEventListener("click", function (e) {
        const btn = e.target.closest(".heart-button");
        let isActive = btn.classList.contains("active");
        const counter_val = parseInt(counter.getAttribute("data-count"));
        if (!isActive) {
            btn.classList.add("active");
            counter.classList.remove("incremented");
            counter.innerHTML = counter_val + 1;
            counter.setAttribute("data-count", counter_val);

            setTimeout(() => counter.classList.add("incremented"), 300);

        } else {
            btn.classList.remove("active");
            counter.classList.remove("incremented");
            counter.innerHTML = counter_val - 1;
            counter.setAttribute("data-count", counter_val);

            setTimeout(() => counter.classList.add("incremented"), 300);

        }

    })
}