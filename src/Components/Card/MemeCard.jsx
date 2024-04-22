import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton";
import { BsHeartFill } from "react-icons/bs";

const MemeCard = () => {
  const [memes, setMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch("https://meme-api.com/gimme/12");
        const data = await response.json();
        console.log(data.memes);
        setMemes(data.memes);
        setLikedMemes(Array(data.memes.length).fill(false));
        setLoading(false);
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

  if (loading) {
    return (
      <div className="px-10 bg-gray-100">
        <div className="grid grid-cols-3 gap-4 mx-auto my-5">
          {[...Array(12)].map((_, index) => (
            <Skeleton index={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 bg-gray-100">
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 mx-auto my-5">
        {memes.map((meme, index) => (
          <div className="rounded-md border bg-white" key={index}>
            <img
              src={meme.url}
              alt="Meme"
              className="w-full rounded-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-sm font-semibold">Author: {meme.author}</h1>
              <p className="mt-3 text-xs text-gray-600">{meme.title}</p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleLikeClick(index)}
                  type="button"
                  
                >
                  <BsHeartFill
                    className={`${
                      likedMemes[index]
                        ? " text-red-600 scale-150"
                        : "text-black scale-100"
                    } transition-all duration-300`}
                  />
                </button>
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-green-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-black focus:outline-none focus:ring focus:border-gray-300 transition-all duration-100"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeCard;

export const memeDataLoader = async () => {
  const response = await fetch("https://meme-api.com/gimme/12");
  return response.json();
};
