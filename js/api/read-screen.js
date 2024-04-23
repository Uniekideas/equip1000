const generateSpeech = async () => {
    const url = 'https://ai-voice-text-to-speach.p.rapidapi.com/makevoice?text=Hello!%20How%20are%20you%20doing%3F.%20Check%20%22About%22%20tab%20to%20see%20how%20to%20change%20the%20voice.&voice=m2';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'apikey',
            'X-RapidAPI-Host': 'ai-voice-text-to-speach.p.rapidapi.com'
        },
        body: JSON.stringify({
            text: document.body.innerText, // Get all text content of the page
            voice: 'm2'
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result); // Assuming result contains the audio file
    } catch (error) {
        console.error(error);
    }
};

document.getElementById('generateSpeechButton').addEventListener('click', async () => {
    await generateSpeech(); // Generate speech when button is clicked
});