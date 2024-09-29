// import axios from 'axios';

// export default async function handler(req, res) {
//   const { url } = req.query;
  
//   console.log('API Proxy received request for:', url);
//   console.log('Full request URL:', `https://dummyjson.com${url}`);

//   try {
//     const response = await axios.get(`https://dummyjson.com${url}`);
//     console.log('API Proxy response status:', response.status);
//     console.log('API Proxy response data:', response.data);
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error('API Proxy error:', error.message);
//     console.error('Error response:', error.response?.data);
//     res.status(error.response?.status || 500).json({ error: error.message, details: error.response?.data });
//   }
// }


// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  const { category, search } = req.query;
  
  let apiUrl = 'https://dummyjson.com/products'; // Base URL for products API
  
  // Build query string based on category and search params
  const params = [];
  if (category) params.push(`category=${encodeURIComponent(category)}`);
  if (search) params.push(`q=${encodeURIComponent(search)}`);

  const fullUrl = `${apiUrl}?${params.join('&')}`;

  console.log('API Proxy received request for:', fullUrl);

  try {
    const response = await axios.get(fullUrl);
    console.log('API Proxy response status:', response.status);
    console.log('API Proxy response data:', response.data);
    res.status(200).json(response.data); // Send the products back to the frontend
  } catch (error) {
    console.error('API Proxy error:', error.message);
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
