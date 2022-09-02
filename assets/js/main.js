let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active")
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    });
}

// let btn = document.getElementById("button");
// btn.addEventListener("click", function () {
//     let top = this.nextElementSibling;
//     top.scrollTop += 20
// });

// let btn = document.getElementById("button");
// const refreshbutton = () => {
//     if (document.documentElement.scrollTop < 150) {
//         btn.style.display = "none";
//     } else {
//         btn.style.display = "block";
//     }
// };
// refreshbutton();
// btn.addEventListener("click", function () {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// });

// document.addEventListener("scroll", (e) => {
//     refreshbutton();
// });

let btn = document.getElementById("button");

const refreshutton = () => {
    if (document.documentElement.scrollTop < 100) {
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
    }
};
refreshutton();

btn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})

document.addEventListener("scroll", (e) => {
    refreshutton();
});