// ApiService.js
const API_URL = 'https://user.y2tek.io/';  // Example API URL

// Function to fetch data from API
export const getData = async (endpoint: any) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`,{
      method:'GET',
      headers:{
        'Accept': 'application/json',
         'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-IN,en-GB;q=0.9,en;q=0.8',
          'Content-Type': 'application/json ; text/html; charset=UTF-8',
          'Host': 'user.y2tek.io',
          'Origin': 'https://bot.y2tek.io',
          'Referer': 'https://bot.y2tek.io/'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to post data to API (if needed)
export const postData = async (endpoint: any, data: any) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Accept-Encoding': 'gzip, deflate, br',
         'Accept-Language': 'en-IN,en-GB;q=0.9,en;q=0.8',
         'Content-Type': 'application/json ; text/html; charset=UTF-8',
         'Host': 'user.y2tek.io',
         'Origin': 'https://bot.y2tek.io',
         'Referer': 'https://bot.y2tek.io/'
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to post data');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
