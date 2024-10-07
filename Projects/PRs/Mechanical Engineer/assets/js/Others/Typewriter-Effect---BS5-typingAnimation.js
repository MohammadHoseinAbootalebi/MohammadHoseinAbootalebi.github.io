    const words = ['UI & UX Designer', 'Flutter Developer', 'Full Stack Developer', 'Android Developer', 'AI Engineer', 'Industrial Designer', 'Self-Driving Automobile Engineer', 'Mechanical Engineer']; 
    let wordIndex = 0; 
    let letterIndex = 0; 
    let currentlyTyping = true; 
    let currentWord = ''; 

    const typewriter = document.getElementById('typewriter');
    typewriter.style.fontSize = '2w';
    const cursor = document.getElementById('cursor');

    const type = () => {
        cursor.style.display = 'inline'; // make sure the cursor is visible while typing

        if (currentlyTyping) {
            if (letterIndex < words[wordIndex].length) {
                currentWord += words[wordIndex][letterIndex];
                letterIndex++;
                typewriter.innerText = currentWord;
                setTimeout(type, 100); // wait 100ms before typing next letter
            } else {
                currentlyTyping = false;
                setTimeout(erase, 1000); // wait a second before starting to erase
            }
        }
    };

    const erase = () => {
        if (letterIndex > 0) {
            currentWord = currentWord.slice(0, -1);
            letterIndex--;
            typewriter.innerText = currentWord;
            setTimeout(erase, 100); // wait 100ms before erasing next letter
        } else {
            currentlyTyping = true;
            wordIndex = (wordIndex + 1) % words.length; // go to next word and loop back to start if at the end
            // cursor.style.display = 'none'; // hide the cursor while waiting to type the next word
            setTimeout(type, 0); // wait two seconds before starting to type the next word
        }
    };

    type(); // start typing