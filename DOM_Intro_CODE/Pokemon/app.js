// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`

//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }

const container = document.querySelector("#container");
// const newImg = document.createElement("img");
// newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;
// container.appendChild(newImg);

for (let i = 1; i <= 151; ++i) {
  const div = document.createElement("div");
  const newImg = document.createElement("img");
  const span = document.createElement("span");

  //   div.style.textAlign = "center";
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  span.innerText = `#${i}`;
  //   span.style.display = "block";
  //   span.style.textAlign = "center";

  container.appendChild(div);
  div.appendChild(newImg);
  div.appendChild(span);
}
