import pokemon from 'json-pokemon';

export default (req, res) => {
  let result = [];
  const type = req.query.type;

  pokemon.forEach((pokemonObject) => {

    pokemonObject.typeList.forEach((typeProperty) => {

      if(type === typeProperty) {
        result.push(pokemonObject);
      }
    });
  });

  res.json(result);
}