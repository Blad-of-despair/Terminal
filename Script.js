
// const processElement = document.getElementById('process');
// const text = `Initializing...\nAccessing all the files.....\nConnecting to the server.....\nSending the data to the server.....\nSending Complete.....\nCleaning up the user files.....\nDone!`;
// let index = 0;

// // Start typing after the .first animation ends
// setTimeout(() => {
//     processElement.style.opacity = 1; // Make .process visible
//     const typeEffect = () => {
//         if (index < text.length) {
//             processElement.textContent += text[index];
//             index++;
//             setTimeout(typeEffect, 200); // Adjust typing speed (100ms per character)
//         }
//     };
//     typeEffect();
// }, 3000);

const processElement = document.getElementById('process');
const text = `Initializing...\nAccessing all the files.........\nConnecting to the server.....\nSending the data to the server..........\nSending Complete...\nCleaning up the user files......\nDone!`;
let index = 0;

// Start typing after the .first animation ends
setTimeout(() => {
    processElement.style.opacity = 1; // Make .process visible

    const typeEffect = () => {
        if (index < text.length) {
            processElement.textContent += text[index];
            
            // Check if the current character is the end of a sentence
            if (text[index] === '.' || text[index] === '\n') {
                const randomDelay = Math.random() * 1000 + 500; // Random delay between 500ms and 1500ms
                index++;
                setTimeout(typeEffect, randomDelay); // Wait for the random delay before continuing
            } else {
                index++;
                setTimeout(typeEffect, 100); // Normal typing speed (100ms per character)
            }
        }
    };

    typeEffect();
}, 4500); // Delay before starting the typing effect