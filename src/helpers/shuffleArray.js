const shuffleArray = arr => {
  const shuffled = arr.concat().sort(() => 0.5 - Math.random());
  return shuffled;
};

export default shuffleArray;
