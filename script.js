document.addEventListener("DOMContentLoaded", function() {
    const consoleInput = document.getElementById("consoleInput");
    const consoleOutput = document.getElementById("consoleOutput");
    const apiUrl = 'https://asoc-specialforces-oda-inital-blocked.vercel.app'; // Replace with your API URL

    async function fetchMemberData(memberName) {
        try {
            const response = await fetch(`${apiUrl}/members/${encodeURIComponent(memberName)}`);
            if (!response.ok) {
                throw new Error(`Member not found: ${memberName}`);
            }
            const memberData = await response.json();
            return memberData;
        } catch (error) {
            return error.message;
        }
    }

    async function processCommand(command) {
        const args = command.split(' ');
        const commandType = args.shift().toLowerCase();
        const commandArgs = args.join(' ');

        switch (commandType) {
            case 'help':
                addLineToConsole("Available commands: help, team, member [name], clear");
                break;
            case 'team':
                addLineToConsole("Team Size: 12, Unit Type: Special Forces");
                break;
            case 'member':
                if (commandArgs) {
                    const memberData = await fetchMemberData(commandArgs);
                    addLineToConsole(typeof memberData === 'string' ? memberData : JSON.stringify(memberData));
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

    consoleInput.addEventListener("keydown", async function(event) {
        if (event.key === "Enter") {
            addLineToConsole(consoleInput.value);
            await processCommand(consoleInput.value);
            consoleInput.value = "";
        }
    });
});
