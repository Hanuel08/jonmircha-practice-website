export const getGalleryCards = async (URL) => {
  return fetch(URL)
    .then(response => response.text())
    .then(result => {
      const cards = JSON.parse(result);
      console.log(cards);
      return cards;
    })
}