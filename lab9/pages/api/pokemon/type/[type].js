import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find type."};
    for(let i=0; i<pokemon.length; i++){
        for(let p=0; pokemon[i].typeList.length; p++){
            if(pokemon[i].typeList[p] == req.query.pokeType){
                result.push(pokemon[i]);
            }
        }
    }

    if(result.length > 1){
        result.shift();
    }

    res.json(result);

}