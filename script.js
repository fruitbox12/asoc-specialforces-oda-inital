      document.addEventListener("DOMContentLoaded", function() {
            const consoleInput = document.getElementById("consoleInput");
            const consoleOutput = document.getElementById("consoleOutput");
            const apiUrl = 'https://asoc-specialforces-oda-inital-blocked.vercel.app'; // Replace with your actual API URL

            async function fetchData(endpoint) {
                try {
                    const response = await fetch(`${apiUrl}/${endpoint}`);
                    if (!response.ok) {
                        throw new Error(`HTTP Error: ${response.status}`);
                    }
                    return await response.json();
                } catch (error) {
                    console.error("Fetching error:", error);
                    return error.message;
                }
            }

            async function processCommand(command) {
                const args = command.split(' ');
                const commandType = args.shift().toLowerCase();
                let data;

                switch (commandType) {
                    case 'help':
                        addLineToConsole("Available commands: help, team, members, member [name], paygrade [grade], mos [MOS], time [years], clear");
                        break;
                    case 'team':
                        data = await fetchData('team-details');
                        addLineToConsole(JSON.stringify(data));
                        break;
                    case 'members':
                        data = await fetchData('members');
                        addLineToConsole(JSON.stringify(data));
                        break;
                    case 'member':
                        if (args.length) {
                            data = await fetchData(`members/${args.join(' ')}`);
                            addLineToConsole(JSON.stringify(data));
                        } else {
                            addLineToConsole("Please specify a member name.");
                        }
                        break;
                    case 'paygrade':
                        if (args.length) {
                            data = await fetchData(`members/paygrade/${args.join(' ')}`);
                            addLineToConsole(JSON.stringify(data));
                        } else {
                            addLineToConsole("Please specify a paygrade.");
                        }
                        break;
                    case 'mos':
                        if (args.length) {
                            data = await fetchData(`members/mos/${args.join(' ')}`);
                            addLineToConsole(JSON.stringify(data));
                        } else {
                            addLineToConsole("Please specify an MOS.");
                        }
                        break;
                    case 'time':
                        if (args.length) {
                            data = await fetchData(`members/time/${args.join(' ')}`);
                            addLineToConsole(JSON.stringify(data));
                        } else {
                            addLineToConsole("Please specify a time period.");
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
