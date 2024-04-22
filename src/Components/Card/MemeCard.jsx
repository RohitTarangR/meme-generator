import React, { useState, useEffect } from "react";

const MemeCard = () => {
  const [memes, setMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://meme-api.com/gimme/12");
        const data = await response.json();
        console.log(data.memes);
        setMemes(data.memes);
        setLikedMemes(Array(data.memes.length).fill(false));
      } catch (error) {
        console.error("Error fetching memes: ", error);
      }
    };
    fetchMemes();
  }, []);

  const handleLikeClick = (index) => {
    const updatedLikedMemes = [...likedMemes];
    updatedLikedMemes[index] = !updatedLikedMemes[index];
    setLikedMemes(updatedLikedMemes);
  };

  return (
    <>
      <div className="flex px-10 bg-slate-100">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 mx-auto my-5">
          {memes.map((meme, index) => {
            return (
              <div className="rounded-md border bg-white" key={index}>
                <img
                  src={meme.url}
                  alt="Meme"
                  className="w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-sm font-semibold">
                    Author: {meme.author}
                  </h1>
                  <p className="mt-3 text-xs text-gray-600">{meme.title}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleLikeClick(index)}
                      type="button"
                      className={`w-20 mt-4 rounded-sm ${
                        likedMemes[index]
                          ? "bg-red-600 text-white scale-125 rounded-2xl"
                          : "bg-white text-black scale-100"
                      } px-2.5 py-1 text-[10px] font-semibold border border-slate-200 hover:text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all duration-100`}
                    >
                      Like
                    </button>
                    <button
                      type="button"
                      className="mt-4 rounded-sm bg-green-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MemeCard;

export const memeDataLoader = async () => {
  const response = await fetch("https://meme-api.com/gimme/12");
  return response.json();
};
