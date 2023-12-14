document.addEventListener("DOMContentLoaded", function() {
    const consoleInput = document.getElementById("consoleInput");
    const consoleOutput = document.getElementById("consoleOutput");

    function processCommand(command) {
        const args = command.split(' ');
        switch (args[0].toLowerCase()) {
            case 'help':
                addLineToConsole("Available commands: help, team, member [name], clear");
                break;
            case 'team':
                // Assume you fetch this data from somewhere
                addLineToConsole("Team Size: 12, Unit Type: Special Forces");
                break;
            case 'member':
                if (args.length > 1) {
                    // Here you would fetch member data based on args[1]
                    addLineToConsole(`Data for member ${args[1]}`);
                } else {
                    addLineToConsole("Please specify a member name.");
                }
                break;
            case 'clear':
                consoleOutput.innerHTML = '';
                break;
            default:
                addLineToConsole("Unknown command. Type 'help' for available commands.");
        }
    }

    function addLineToConsole(text) {
        const newLine = document.createElement("li");
        newLine.textContent = "> " + text;
        consoleOutput.appendChild(newLine);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    consoleInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addLineToConsole(consoleInput.value);
            processCommand(consoleInput.value);
            consoleInput.value = "";
        }
    });
});
