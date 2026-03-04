import { useState } from "react";
import { createContext } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
  const [song, setSong] = useState({
    url: "https://ik.imagekit.io/cc5gkipl0/cohort-2/moodify/songs/Jeena_Jeena_-_PagalNew_aRD2fzMLp.mp3",
    posterUrl:
      "https://ik.imagekit.io/cc5gkipl0/cohort-2/moodify/posters/Jeena_Jeena_-_PagalNew_om5v9ZRah.jpeg",
    title: "Jeena Jeena - PagalNew",
    mood: "sad",
  });

  const [loading, setLoading] = useState(false);

  return (
    <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
      {children}
    </SongContext.Provider>
  );
};
