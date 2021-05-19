// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

Fetch(imgUrl ){
   .then(
        response=>response.json()
      ).then(
        console.log(json);
      )
}
