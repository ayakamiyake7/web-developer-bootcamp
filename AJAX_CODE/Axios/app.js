// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//   console.log("RESPONSE: ", res);
// });
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
// }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

// **********************************
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => console.log("RESPONSE: ", res))
//   .catch((err) => console.log("ERROR: ", err));

// const getStarWarsPerson = async (id) => {
//   const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//   console.log(res.data);
// };

// getStarWarsPerson(5);

const jokes = document.querySelector("#jokes");
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);

  const newLI = document.createElement("LI");
  newLI.append(res.data.joke);
  jokes.append(newLI);
};
