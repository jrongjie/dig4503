import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find type."};
    const id = parseInt(req.query.id);
    let pokemon = getPokemon.filter.type(req.query.type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}