# React + Vite

CoinGecko React Project -
This project is a React application that integrates with the CoinGecko API to display cryptocurrency data eg.Prices. Users can search for cryptocurrencies, view their current prices, 24-hour changes, market cap, and more. The project features a responsive design and a user-friendly interface for exploring cryptocurrency data.

Features
Search Functionality: Users can search for cryptocurrencies by name.
Responsive Design: The application is designed to work on both desktop and mobile devices.
Dynamic Data: Displays real-time cryptocurrency data such as current price, market cap, and 24-hour change.
Technologies Used
React: A JavaScript library for building user interfaces.
CoinGecko API: Provides cryptocurrency data.
React Router: For navigation between different views.
CSS: For styling the application.
Setup and Installation
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm (Node Package Manager)
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/coingecko-react-project.git
cd coingecko-react-project
Install Dependencies

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npm start
The application will run on http://localhost:3000.

Configuration
API Key

The CoinGecko API does not require an API key, but ensure you adhere to the rate limits of the public API.

Currency Context

The application uses a context (CoinContext) to manage and provide the currency setting. You can switch between different currencies (e.g., USD, EUR) using the dropdown in the navigation bar.

Key Components
Home.jsx
Purpose: Displays the main page with a search form and a table of cryptocurrencies.
Features:
Search: Allows users to search for cryptocurrencies by name.
Crypto Table: Lists top cryptocurrencies with data such as ranking, price, 24-hour change, and market cap.
Coin.jsx
Purpose: Shows detailed information about a specific cryptocurrency.
Features:
Coin Data: Fetches and displays details of a selected cryptocurrency.
Historical Data: Shows historical price data in a line chart.
Navbar.jsx
Purpose: Provides navigation and currency selection.
Features:
Navigation Links: Links to different pages of the application.
Currency Selector: Dropdown to select the currency for displaying cryptocurrency prices.
Styling
CSS Modules: Styling is managed using CSS files, with styles organized in separate modules for each component.
Contributing
Feel free to submit issues or pull requests. Contributions are welcome!



Acknowledgements
CoinGecko API: For providing comprehensive cryptocurrency data.
https://api.coingecko.com/api/v3/coins/