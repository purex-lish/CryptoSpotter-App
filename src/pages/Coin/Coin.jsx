import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom'; // Import useParams to get the coin ID from the URL
import { CoinContext } from '../../context/CoinContext'; // Import the CoinContext to get the currency
import LineChart from '../../components/LineChart/LineChart'; // Import the LineChart component for displaying historical data

const Coin = () => {
  const { coinId } = useParams(); // Get the coin ID from the URL parameters
  const [coinData, setCoinData] = useState(null); // State to store the coin data from the API
  const [historicalData, setHistoricalData] = useState(null); // State to store the historical data for the coin
  const { currency } = useContext(CoinContext); // Get the current currency from the CoinContext

  // Function to fetch coin data from the API
  const fetchCoinData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-xV2JcsDs73qgoDBrg1nQ5yfq' // API key for CoinGecko
        }
      });
      const data = await response.json(); // Parse the response as JSON
      setCoinData(data); // Update state with the fetched data
    } catch (err) {
      console.error(err); // Log any errors
    }
  };

  // Function to fetch historical data for the coin from the API
  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-xV2JcsDs73qgoDBrg1nQ5yfq' // API key for CoinGecko
        }
      });
      const data = await response.json(); // Parse the response as JSON
      setHistoricalData(data); // Update state with the fetched data
    } catch (err) {
      console.error(err); // Log any errors
    }
  };

  // useEffect to fetch data when the component mounts or currency changes
  useEffect(() => {
    fetchCoinData(); // Fetch coin data
    fetchHistoricalData(); // Fetch historical data
  }, [coinId, currency.name]); // Re-run effect if coinId or currency changes

  // Render loading spinner if data is not yet available
  if (!coinData || !historicalData) {
    return (
      <div className='spinner'>
        <div className="spin"></div> {/* Spinner for loading indication */}
      </div>
    );
  }

  // Render the coin data once it is available
  return (
    <div className='coin'>
      <div className="coin-name">
        <img src={coinData.image.large} alt="" /> {/* Coin image */}
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p> {/* Coin name and symbol */}
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData} /> {/* LineChart component to display historical data */}
      </div>
      <div className="coin-info">
        {/* Display various pieces of information about the coin */}
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li> {/* Market rank */}
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name]?.toLocaleString() || 'N/A'}</li> {/* Current price */}
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>{currency.symbol} {coinData.market_data.market_cap[currency.name]?.toLocaleString() || 'N/A'}</li> {/* Market cap */}
        </ul>
        <ul>
          <li>24 Hour High</li>
          <li>{currency.symbol} {coinData.market_data.high_24h[currency.name]?.toLocaleString() || 'N/A'}</li> {/* 24-hour high */}
        </ul>
        <ul>
          <li>24 Hour Low</li>
          <li>{currency.symbol} {coinData.market_data.low_24h[currency.name]?.toLocaleString() || 'N/A'}</li> {/* 24-hour low */}
        </ul>
      </div>
    </div>
  );
};

export default Coin;
