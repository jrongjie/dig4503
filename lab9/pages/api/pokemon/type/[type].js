import Pokemon from 'json-pokemon/getPokemon';

function findType(req, res){
    
    for(let i=0; i<pokemon.length; i++){
        for(let p=0; pokemon[i].typeList.length; p++){
            if(pokemon[i].typeList[p] == req.query.pokeType){
                result.push(pokemon[i]);
            } else {
                break;
            }
        }
        if(result.length > 1){
            result.shift();
        }
    
        res.json(result);
    }
}

export default findType;