export const truncateText = (text:any, maxWords:number) => {
    if (typeof text !== "string") {
      return "";
    }
    const wordsArray = text.split(" ");
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };