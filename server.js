// import express from 'express';
// import cors from 'cors';
// import dynamoDB from './config/awsConfig.js';

// const app = express();
// const PORT = 5000;

// // Enable CORS
// app.use(cors());

// // Define route to fetch data from DynamoDB
// app.get('/api/data', async (req, res) => {
//   const params = {
//     TableName: 'YourTableName', // Replace with your DynamoDB table name
//   };

//   try {
//     // Scan the DynamoDB table to fetch all items
//     const data = await dynamoDB.scan(params).promise();
    
//     // Assuming the table contains items with temperature, humidity, and gps (latitude, longitude)
//     if (data.Items && data.Items.length > 0) {
//       // Assuming you want to return the latest item
//       const latestData = data.Items[data.Items.length - 1];
//       res.json({
//         temperature: latestData.temperature,
//         humidity: latestData.humidity,
//         gps: {
//           latitude: latestData.gps.latitude,
//           longitude: latestData.gps.longitude,
//         }
//       });
//     } else {
//       res.status(404).json({ message: 'No data found' });
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Could not fetch data' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS for all origins
app.use(cors());

// Dummy data to simulate AWS DynamoDB data
const dummyData = {
  temperature: 24,  // Example temperature in Celsius
  humidity: 80,     // Example humidity percentage
  gps: {
    latitude: 37.7749,   // Example latitude (San Francisco)
    longitude: -122.4194 // Example longitude (San Francisco)
  }
};

// Define route to serve dummy data
app.get('/api/data', (req, res) => {
  res.json(dummyData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
