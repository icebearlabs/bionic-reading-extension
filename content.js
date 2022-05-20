const paragraphs = document.getElementsByTagName("p");
const labels = document.getElementsByTagName("label");
const lists = document.getElementsByTagName("li");

const elements = [...paragraphs, ...labels, ...lists];

const containsTags = (string) => {
  return string.indexOf(">") > -1 || string.indexOf("<") > -1;
};

const giveBoldLength = (word) => {
  const { length } = word;

  if (length < 4) {
    return 1;
  } else if (length < 6) {
    return 2;
  } else if (length < 8) {
    return 3;
  } else {
    return 4;
  }
};

if (elements && elements.length > 0) {
  for (let element of elements) {
    let words = element.innerHTML.split(" ");
    let newInnerHTML = words.reduce((result, word) => {
      let htmlPart = "";
      if (!containsTags(word)) {
        const length = giveBoldLength(word);
        const boldLetters = word.substring(0, length);
        htmlPart = ` <b>${boldLetters}</b>${word.substring(length)}`;
      } else {
        htmlPart = ` ${word}`;
      }

      result = result + htmlPart;
      return result;
    }, "");
    element.innerHTML = newInnerHTML;
  }
}
