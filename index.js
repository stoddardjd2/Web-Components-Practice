window.onload = () => {

    const btn = document.getElementById("btn");
    btn.addEventListener("click", function test() {
        console.log("clicked!")
        var custom = document.getElementById("custom");
        custom.style = "color:red";
    })

    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function test() {
        console.log("clicked!");
        var custom = document.getElementById("textarea");
        custom.value = "clicked!";

        custom.style = "color:red";
    })

}