class IdSearch extends React.Components{
    getID(){

        let id = document.querySelector("#pokemonID");

        fetch("/api/pokemon/id/" + id.value).then((res)=>{return res.json();}).then((processed)=> {
            
            let resultElement = document.querySelector("#results");

            if(processed.error){
                resultElement.innerHTML ="Could not find your search. Please try again."
            } else{
                resultElement.innerHTML = "The Pokemon ID you entered is: "+ processed.id+" and the ID belongs to: "+processed.name+".";

            }
        });
    }
    render(){
        return(
        <div>
        input type="text" id="pokemonId"/>
            <button onClick = {() => {this.getID()}}>Submit</button>
        </div>
        )
    }
}

export default IdSearch;