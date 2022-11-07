const getFirstLetters = (str) => {
  if (str != undefined) {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstLetters;
  } else {
    return undefined;
  }
};

export default getFirstLetters;
