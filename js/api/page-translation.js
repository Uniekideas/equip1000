// async function translatePage() {
//     const languageSelect = document.getElementById("languageSelect");
//     const selectedLanguage = languageSelect.value;

//     const contentDiv = document.getElementById("content");
//     const contentToTranslate = contentDiv.innerHTML;

//     const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Key': '8fee5fc337msh0458f243df7da6ep133701jsn0389182ae289',
//             'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
//         },
//         body: new URLSearchParams({
//             from: 'auto',
//             to: selectedLanguage,
//             text: contentToTranslate
//         })
//     };

//     try {
//         const response = await fetch(url, options);
//         const translatedText = await response.text();
//         contentDiv.innerHTML = translatedText;
//     } catch (error) {
//         console.error(error);
//     }
// }


async function translatePage() {
    const contentDiv = document.getElementById('content');
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;

    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '8fee5fc337msh0458f243df7da6ep133701jsn0389182ae289',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: new URLSearchParams({
            from: 'auto',
            to: selectedLanguage,
            html: contentDiv.innerHTML
        })
    };

    try {
        const response = await fetch(url, options);
        const translatedText = await response.text();
        contentDiv.innerHTML = translatedText;
    } catch (error) {
        console.error(error);
    }
}
