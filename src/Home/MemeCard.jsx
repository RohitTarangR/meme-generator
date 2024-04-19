// Home.js
import React, { useEffect, useState } from "react";

function Home() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://meme-api.com/gimme/12");
        const data = await response.json();
        console.log(data.memes);
        setMemes(data.memes);
      } catch (error) {
        console.error("Error fetching memes: ", error);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mx-auto my-5">
      {memes.map((meme) => {
        return (
          <div className="w-[300px] rounded-md border" key={meme.meme}>
            <img
              src={meme.url}
              alt="Laptop"
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-sm font-semibold">Author: {meme.author}</h1>
              <p className="mt-3 text-xs text-gray-600">{meme.title}</p>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Like
                </button>
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
