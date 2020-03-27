class NameSearch extends React.Component{
    clickHandler() {
        let nameSearchElement = document.querySelector();
    }
    getName(){

        let name = document.querySelector("#pokemonName");

        fetch("/api/pokemon/name" + name.value).then((res)=>{return res.json();}).then((processed)=>{
            
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
                <input type="text" id="pokemonName"/>
                <button onClick={() => {this.getName()}}>Search</button>
                <div id="results"></div>
            </div>
        )
    }
}

export default NameSearch;