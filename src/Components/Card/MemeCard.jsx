import React, { useState, useEffect } from "react";
import Skeleton from "../Skeleton";
import { BsHeartFill } from "react-icons/bs";
import { RefreshCcw } from "lucide-react";

const MemeCards = () => {
  const [memes, setMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    try {
      const response = await fetch("https://meme-api.com/gimme/36"); // Fetch more memes to ensure enough for all grids
      const data = await response.json();
      const allMemes = data.memes;
      const numMemesPerGrid = Math.ceil(allMemes.length / 3);
      const gridMemes = [
        allMemes.slice(0, numMemesPerGrid),
        allMemes.slice(numMemesPerGrid, numMemesPerGrid * 2),
        allMemes.slice(numMemesPerGrid * 2),
      ];
      setMemes(gridMemes);
      setLikedMemes(gridMemes.map((_) => Array(numMemesPerGrid).fill(false)));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching memes: ", error);
    }
  };

  const handleLikeClick = (gridIndex, memeIndex) => {
    const updatedLikedMemes = [...likedMemes];
    updatedLikedMemes[gridIndex][memeIndex] =
      !updatedLikedMemes[gridIndex][memeIndex];
    setLikedMemes(updatedLikedMemes);
  };

  const generateMoreMemes = async () => {
    setLoading(true);
    const response = await fetch("https://meme-api.com/gimme/15");
    const data = await response.json();
    const newMemes = data.memes;

    // Calculate the number of new memes to add to each grid
    const numMemesPerGrid = Math.ceil(newMemes.length / 3);

    // Distribute the new memes among the existing grids
    const updatedMemes = memes.map((gridMemes, index) => {
      const startIndex = index * numMemesPerGrid;
      const endIndex = startIndex + numMemesPerGrid;
      const newGridMemes = newMemes.slice(startIndex, endIndex);
      return [...gridMemes, ...newGridMemes];
    });

    setMemes(updatedMemes);

    // Update likedMemes state to match the structure of updatedMemes
    const updatedLikedMemes = updatedMemes.map((gridMemes) =>
      gridMemes.map(() => false)
    );
    setLikedMemes(updatedLikedMemes);

    setLoading(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="px-10 bg-gray-100">
        <div className="grid grid-cols-3 gap-4 mx-auto my-5">
          {[...Array(12)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-10 bg-gray-100">
      <div className="grid grid-cols-3 gap-4 mx-auto my-5">
        {memes.map((gridMemes, gridIndex) => (
          <div key={gridIndex}>
            {gridMemes.map((meme, memeIndex) => (
              <div className="rounded-md border bg-white mb-5" key={memeIndex}>
                <img
                  src={meme.url}
                  alt="Meme"
                  className="w-full rounded-md object-cover"
                  style={{ height: "auto", maxWidth: "100%" }} // Add style for auto height and max-width
                />
                <div className="p-4">
                  <h1 className="text-sm font-semibold">
                    Author: {meme.author}
                  </h1>
                  <p className="mt-3 text-xs text-gray-600">{meme.title}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleLikeClick(gridIndex, memeIndex)}
                      type="button"
                    >
                      <BsHeartFill
                        className={`${
                          likedMemes[gridIndex][memeIndex]
                            ? "text-red-600 scale-150"
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
        ))}
      </div>
      <div className="mx-auto my-3 w-56 justify-center flex items-center space-x-2 px-4 py-2  text-black rounded-full hover:bg-black hover:text-white border border-black transition-border duration-300 cursor-pointer">
        <button onClick={generateMoreMemes} className="">
          Generate More
        </button>
        <RefreshCcw />
      </div>
    </div>
  );
};

export default MemeCards;

export const memeDataLoader = async () => {
  const response = await fetch("https://meme-api.com/gimme/12");
  return response.json();
};
