import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Header from "../Header/Header";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const Home = ({ search }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);

  useEffect(() => {
    // Define the API URL you want to fetch data from

    if (search) {
      const apiUrl = `https://api.dexscreener.com/latest/dex/search?q=${search}`;
      setLoading(true);

      axios
        .get(apiUrl)
        .then((response) => {
          // Set the fetched data in the state
          setData(response.data.pairs);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(true);
      const apiUrl =
        "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
      axios
        .get(apiUrl)
        .then((response) => {
          // Set the fetched data in the state
          setData(response.data.pairs);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(true);
          setLoading(false);
        });
    }

    // Replace with your API URL

    // Fetch data using Axios
  }, [search]);

  return (
    <div className="container">
      <div className="cards">
        <div className="heading">Token Search Results</div>
        {loading ? (
          <div className="loader">
            <InfinitySpin width="200" color="red" />
          </div>
        ) : err ? (
          <div className="specific">Be more specific</div>
        ) : data.length < 1 ? (
          <div className="noresults">No results</div>
        ) : (
          <div className="card">
            {data?.map((item) => (
              <Card data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

// <div className="container">
//       {loading ? (
//         <div className="loader">Loading</div>
//       ) : err ? (
//         "Be more specific"
//       ) : (
//         <div className="cards">
//           <div className="heading">Token Search Results</div>
//           <div className="card">
//             {data?.map((item) => (
//               <Card data={item} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
