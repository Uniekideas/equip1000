// function translatePage(targetLanguage) {
//     const elementsToTranslate = document.querySelectorAll('body *:not(script):not(style)');
//     const promises = [];

//     elementsToTranslate.forEach(element => {
//         const text = element.innerText.trim();
//         if (text !== '') {
//             promises.push(translateText(text, targetLanguage)
//                 .then(translatedText => {
//                     element.innerText = translatedText;
//                 })
//                 .catch(error => {
//                     console.error('Translation error:', error);
//                 }));
//         }
//     });

//     // Wait for all translations to complete
//     Promise.all(promises)
//         .then(() => {
//             console.log('Page translation complete');
//         })
//         .catch(error => {
//             console.error('Error during page translation:', error);
//         });
// }

// function translateText(text, targetLanguage) {
//     const apiKey = '8fee5fc337msh0458f243df7da6ep133701jsn0389182ae289'; // Replace with your Google Translate API key
//     const apiUrl = `https://google-translate113.p.rapidapi.com/api/v1/translator/text`;

//     const data = {
//         q: text,
//         target: targetLanguage
//     };

//     return fetch(apiUrl, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Translation request failed');
//         }
//         return response.json();
//     })
//     .then(result => {
//         return result.data.translations[0].translatedText;
//     });
// }

// // Example usage
// translatePage('es'); // Translate the page to Spanish

const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fee5fc337msh0458f243df7da6ep133701jsn0389182ae289',
		'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}