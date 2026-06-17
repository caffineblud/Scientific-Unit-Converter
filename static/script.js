// Current selected category
let currentCategory = "Length";

// All units
const units = {

    Length: [
        "Meter",
        "Kilometer",
        "Centimeter",
        "Millimeter",
        "Inch",
        "Foot",
        "Yard",
        "Mile"
    ],

    Mass: [
        "Kilogram",
        "Gram",
        "Milligram",
        "Pound",
        "Ounce"
    ],

    Volume: [
        "Liter",
        "Milliliter",
        "Cubic Meter",
        "Gallon"
    ],

    Speed: [
        "m/s",
        "km/h",
        "mph"
    ],

    Temperature: [
    "Celsius",
    "Fahrenheit",
    "Kelvin"
    ],

    Area: [
    "Square Meter",
    "Square Kilometer",
    "Square Foot",
    "Square Inch",
    "Acre"
    ],

    Time: [
    "Second",
    "Minute",
    "Hour",
    "Day"
    ],

"   Data Storage": [
    "Byte",
    "Kilobyte",
    "Megabyte",
    "Gigabyte",
    "Terabyte"
    ]
};


// Populate dropdowns
function updateDropdowns(category) {

    const fromSelect =
        document.getElementById("from-unit");

    const toSelect =
        document.getElementById("to-unit");

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    units[category].forEach(unit => {

        const option1 =
            document.createElement("option");

        option1.value = unit;
        option1.textContent = unit;

        fromSelect.appendChild(option1);

        const option2 =
            document.createElement("option");

        option2.value = unit;
        option2.textContent = unit;

        toSelect.appendChild(option2);

    });

}
// Category buttons
document
.querySelectorAll(".category-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        document
        .querySelectorAll(".category-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });

        // Add active class to clicked button
        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        updateDropdowns(currentCategory);

        console.log(
            "Current Category:",
            currentCategory
        );

    });

});

// Convert Button
document
.getElementById("convert-btn")
.addEventListener("click", async () => {

    const value =
        document.getElementById("value").value;

    const fromUnit =
        document.getElementById("from-unit").value;

    const toUnit =
        document.getElementById("to-unit").value;

    if (!value) {

        alert("Please enter a value");

        return;
    }

    try {

        const response = await fetch("/convert", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                category: currentCategory,

                value: value,

                from_unit: fromUnit,

                to_unit: toUnit

            })

        });

        const data = await response.json();

        document.getElementById("result")
            .innerHTML =`${value} ${fromUnit}
            <br><br>
            =
            <br><br>
            ${data.result} ${toUnit}`;

        const historyText =
            `${value} ${fromUnit} → ${data.result} ${toUnit}`;
        const historyList =
            document.getElementById("history-list");
        const historyItem =
            document.createElement("li");
        historyItem.textContent =
            historyText;
        historyList.prepend(historyItem);
// Save to Local Storage
        let history =
            JSON.parse(
                localStorage.getItem("history")
            ) || [];
        history.unshift(historyText);

        localStorage.setItem(
            "history",
            JSON.stringify(history)
        );

    }

    catch (error) {

        console.error(error);

        document.getElementById("result")
            .innerHTML =
            "Conversion Error";

    }

});


// Load Length units on startup
updateDropdowns("Length");
document
.getElementById("swap-btn")
.addEventListener("click", () => {

    const fromSelect =
        document.getElementById("from-unit");

    const toSelect =
        document.getElementById("to-unit");

    const temp =
        fromSelect.value;

    fromSelect.value =
        toSelect.value;

    toSelect.value =
        temp;

});
updateDropdowns("Length");
document
.querySelector(".category-btn")
.classList.add("active");

const savedHistory =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];

const historyList =
    document.getElementById("history-list");

savedHistory.forEach(item => {

    const li =
        document.createElement("li");

    li.textContent = item;

    historyList.appendChild(li);

});
document
.getElementById("clear-history-btn")
.addEventListener("click", () => {

    const historyList =
        document.getElementById("history-list");

    historyList.innerHTML = "";

    localStorage.removeItem("history");

});
document
.getElementById("copy-btn")
.addEventListener("click", async () => {

    const resultText =
        document.getElementById("result")
        .innerText;

    try{

        await navigator.clipboard.writeText(
            resultText
        );

        const btn =
            document.getElementById("copy-btn");

        btn.textContent = "Copied!";

        setTimeout(() => {

            btn.textContent =
                "Copy Result";

        }, 2000);

    }

    catch(error){

        console.error(error);

    }

});