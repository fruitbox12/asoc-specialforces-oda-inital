document.addEventListener("DOMContentLoaded", function() {
    const consoleInput = document.getElementById("consoleInput");
    const consoleOutput = document.getElementById("consoleOutput");

    consoleInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const newLine = document.createElement("li");
            newLine.textContent = "> " + consoleInput.value;
            consoleOutput.appendChild(newLine);

            // Here you can add your command processing logic
            // processCommand(consoleInput.value);

            consoleInput.value = "";
            consoleOutput.scrollTop = consoleOutput.scrollHeight;
        }
    });
});
