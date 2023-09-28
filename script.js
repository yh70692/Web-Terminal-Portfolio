const terminal = document.querySelector('.terminal');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

function clearInput() {
    input.value = '';
}

function printOutput(message) {
    const newLine = document.createElement('div');
    newLine.innerHTML = '<br>' + message + '<br>';
    output.appendChild(newLine);
    output.scrollTop = output.scrollHeight;
}

function clearTerminal() {
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
}

function processCommand(command) {
    switch (command) {
        case 'creator':
            printOutput('Topic: Professional History\n' +
                        '\nExtract:\n' +
                        'I am a software engineering student currently in the final stretch of my education at Eduvos, and eager to embark on a career in the tech world.\n' + 
                        'What truly fuels my passion is the process of crafting new applications and systems that can revolutionize the way we interact with technology.\n' + 
                        'One of the things I relish the most in my work is the creative aspect of it.\n' +  
                        'I find immense joy in designing intuitive user interfaces and enhancing the overall user experience.\n' + 
                        'It is where my artistic side meets my technical skills, and the synergy between the two is what I find most rewarding in software development.');
            break;
        case 'projects':
            printOutput('Opening Projects Page...');
            window.open('https://github.com/yh70692?tab=repositories', '_blank');
            break;
        case 'social':
            printOutput('LinkedIn -  <a href="https://www.linkedin.com/in/yassin-hassan-b3aa29262/">linkedin/yassin_hassan</a><br>');
            printOutput('GitHub -  <a href="https://github.com/yh70692">github/yassin_hassan</a><br>');
            break;
        case 'email':
            printOutput('Opening mailto:yh70692@gmail.com...');
            window.location.href = 'mailto:yh70692@gmail.com';
            break;
        case 'help':
            printOutput('creator    Data Containing TerSys.exe Developer \n' +
                        'projects   Other Works Done by TerSys.exe Developer \n'+
                        'social     TerSys.exe Developers Social Networks \n'+
                        'email      Email TerSys.exe Developer Directly \n'+
                        'clear      clears terminal \n' +
                        'banner     Prints out the intro message \n' +
                        'help       TerSys.exe Available Commands');
            break;
        case 'clear':
            clearTerminal(); // Call the clearTerminal function
            break;
        case 'banner':
            printOutput('\nWelcome Human, Im named Min the interactive web terminal developmed by: Yassin Hassan \n' +
            'For more info on Master (Yassin Hassan) type command `creator`.\n' +
            'Otherwise type command `help` for a list of avialable commands.');
            break;
        default:
            printOutput(`<span style="color: red;">Command not recognized: ${command}, instead type 'help' to see a list of available commands.</span>`);

    }
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        if (command !== '') {
            printOutput('unkwn.usr@yh.tersys:~$ ' + command);
            processCommand(command);
            clearInput();
        }
    }
});



// Set focus on the input field when the page loads
input.focus();

// Control the blinking cursor
setInterval(() => {
    const cursor = document.querySelector('.input::after');
    cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 500); // Change the cursor blink speed (milliseconds) as needed
