import React, { useState, useEffect } from 'react';

const FetchInteractiveData = () => {
  const url= "http://127.0.0.1:5000/interactivevisualdata";
  console.log(url);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return {data};
};

export default FetchInteractiveData;