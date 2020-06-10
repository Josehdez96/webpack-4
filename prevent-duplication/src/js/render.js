function render(data) {
  const pokemon = document.createElement("img");
  pokemon.setAttribute("src", data.sprites.front_default);
  document.body.append(pokemon);
  console.log("Tu pokemon es: ", data.name);
}

export default render;
