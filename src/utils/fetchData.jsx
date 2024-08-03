export const ExerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "d0853dd11bmshd64a22cf931edeep199f5ejsne9ef0c355539",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d0853dd11bmshd64a22cf931edeep199f5ejsne9ef0c355539",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
