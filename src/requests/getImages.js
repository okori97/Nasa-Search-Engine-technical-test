import axios from "axios";

export default function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        let images = [];
        let parsedImages;
        const imageResults = response.data.collection.items;
        parsedImages = imageResults.filter(
          (item) => item.data[0].media_type === "image"
        );
        images = parsedImages.map((image) => image.links[0].href);
        console.log(images);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
