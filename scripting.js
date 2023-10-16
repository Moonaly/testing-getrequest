// script.js

const apiUrl = 'https://api.example.com/data';
const apiResponseDiv = document.getElementById('api-response');

const fetchData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            apiResponseDiv.textContent = JSON.stringify(data, null, 2);
        } else {
            apiResponseDiv.textContent = 'Error fetching data from the API';
        }
    } catch (error) {
        console.error('Error:', error);
        apiResponseDiv.textContent = 'An error occurred while fetching data from the API';
    }
};

fetchData();
