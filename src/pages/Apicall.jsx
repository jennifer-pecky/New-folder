import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Apicall = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quoteApi = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get('https://api.quotable.io/random');
      arrayOfQuotes = data.data;
      console.log(arrayOfQuotes);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteApi();
  }, []);

  return (
    <div>
      <div className="text-center max-w-[1440px] space-y-8 p-20">
        <div className="italic text-4xl"> {quote}</div>
        <div>
          <small className="italic text-2xl">{author}</small>
        </div>
        <button
          className="bg-black text-white py-2 px-4 hover:bg-blue-700 rounded"
          onClick={quoteApi}
        >
          NEW QUOTE
        </button>
      </div>

      <div className="flex justify-center">
        <p className="text-2xl mb-3 text-center w-[100%] text-gray-500 dark:text-gray-400">
          I believed that providing motivation would be an excellent way to
          benefit everyone. <br /> As a result, this website fetches a new quote
          from an API every time you click the "NEW QUOTE" button or visit it, <br /> delivering a
          fresh dose of inspiration. I hope you find it enjoyable!
        </p>
      </div>
    </div>
  );
};

export default Apicall;
