let usrinps = document.querySelector(".usrinps");
let buttons = document.querySelectorAll(".btn");

const btnArray = Array.from(buttons);

let arr = []; // GLOBAL array for full expression

btnArray.map((e) => {
    e.addEventListener("click", () => {
        let num = e.textContent;

        // Clear
        if (num === "Clear") {
            arr = [];
            usrinps.value = "";
            return;
        }

        // Calculate result
        if (num === "=") {
            try {
                usrinps.value = eval(arr.join(""));
                arr = [usrinps.value]; // allow further calculation
            } catch {
                usrinps.value = "Error";
            }
            return;
        }

        // Normal numbers + operators
        arr.push(num);            // store value
        usrinps.value += num;     // show in input
    });
});



