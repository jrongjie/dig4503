class TypeSearch extends React.Component{

    getName(){

        let name = document.querySelector("#pokemonName");

        fetch("/api/pokemon/type" + type.value).then((res)=>{return res.json();}).then((processed)=>{
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML = "Could not find your Search";
            } else{
                resultElement.innerHTML = "The Pokemon ID is:"+ processed.id+ "and you chose:"+processed.name+".";
            }
        });
    }

    render(){
        return(
            <div>
                <input type="text" id="pokeType"/>
                <button onClick={() => {this.getType()}}>Search</button>
                <div id="results"></div>
            </div>
        )
    }
}

export default TypeSearch;