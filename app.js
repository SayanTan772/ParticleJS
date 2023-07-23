const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");

document.querySelector("body").addEventListener("mousemove", function(e) {
    cursor1.style.visibility = "visible";
    cursor2.style.visibility = "visible";
    cursor1.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0px)`;
    cursor2.style.top = `${e.clientY}px`;
    cursor2.style.left = `${e.clientX}px`;
});

document.querySelector("body").addEventListener("mouseout", function(e) {
    cursor1.style.visibility = "hidden";
    cursor2.style.visibility = "hidden";
});

const sub_heading = document.querySelector(".sub-heading");
const heading = document.querySelectorAll(".text-div");

sub_heading.addEventListener("mousemove", function() {
    cursor1.style.width = "55px";
    cursor1.style.height = "55px";
    cursor1.style.backgroundColor = "#ffff";
    cursor2.style.display = "none";
});

sub_heading.addEventListener("mouseout", function() {
    cursor1.style.width = "40px";
    cursor1.style.height = "40px";
    cursor1.style.backgroundColor = "";
    cursor2.style.display = "block";
});

heading.forEach((letter) => {
    letter.addEventListener("mousemove", function() {
        cursor1.style.width = "100px";
        cursor1.style.height = "100px";
        cursor1.style.backgroundColor = "#D6FB41";
        cursor2.style.display = "none";
    });
    letter.addEventListener("mouseout", function() {
        cursor1.style.width = "40px";
        cursor1.style.height = "40px";
        cursor1.style.backgroundColor = "";
        cursor2.style.display = "block";
    });
});
