# MERN Stack Application

This project consists of a **MERN stack application** with a backend API and a frontend for visualizing transaction data and statistics. The backend fetches data from a third-party API, stores it in a database, and provides endpoints for listing transactions, generating statistics, and creating charts. The frontend is responsible for displaying the data using tables and charts.

## Features

### Backend
1. **Transaction Data Initialization**: Fetches JSON data from a third-party API and initializes the database.
2. **Transaction Listing API**:
   - Supports search and pagination based on product title, description, and price.
   - Defaults to showing all records if no search parameters are provided.
   - Supports pagination with default values: `page = 1`, `per page = 10`.
3. **Statistics API**: Provides total sale amount, number of sold items, and number of unsold items for a selected month.
4. **Bar Chart API**: Generates price range data for transactions in a selected month.
5. **Pie Chart API**: Returns unique categories and the number of items in each category for a selected month.
6. **Combined Data API**: Combines the responses from the statistics, bar chart, and pie chart APIs.

### Frontend
1. **Transactions Table**: Displays transactions with search and pagination options.
2. **Statistics Display**: Shows total sale amount, number of sold items, and number of unsold items for the selected month.
3. **Bar Chart**: Visualizes the number of transactions within various price ranges for the selected month.
4. **Pie Chart**: Displays the distribution of transactions across different categories.

## Project Structure

### Backend Folder Structure
```
backend/
├── controllers/
│   └── api.js             
├── models/
│   └── transaction.js     
├── routes/
│   └── transactionRoutes.js 
└── index.js               
```
### Frontend Folder Structure
```
frontend/
├── public/                
├── src/
│   ├── App.css            
│   ├── App.js             
│   ├── barChart.js        
│   ├── index.js           
│   ├── monthAndSearch.js  
│   ├── perPage.js         
│   ├── piechart.js        
│   ├── staticstics.js     
│   └── transactionTable.js 
└── node_modules/          
```

## How to Run the Project

### Backend
1. Navigate to the `backend` folder.
2. Install the required dependencies by running:
   ```
   npm install
   ```
3. Start the backend server using Nodemon:
   ```
   nodemon index.js
   ```
### Frontend
1. Navigate to the `frontend` folder.
2. Install the required dependencies by running:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm start
   ```
## API Documentation

The backend exposes the following APIs:

1. **GET /api/initDatabase**: Initializes the database by fetching data from the third-party API.
   - Initializes the database with the seed data from a JSON file.

2. **GET /api/transactions**: Retrieves transactions, supports search and pagination.
   - Searchable by product title, description, or price.
   - Supports pagination with default values: `page = 1`, `per page = 10`.

3. **GET /api/statistics**: Provides statistics for a selected month.
   - Returns the total sale amount, number of sold items, and number of unsold items for the selected month.

4. **GET /api/barChart**: Returns the price range data for the selected month.
   - Provides the number of items sold in various price ranges (e.g., 0-100, 101-200, etc.).

5. **GET /api/pieChart**: Returns unique categories and the number of items from each category for the selected month.

6. **GET /api/combinedResponse**: Combines the responses from the statistics, bar chart, and pie chart APIs into a single response.


   

