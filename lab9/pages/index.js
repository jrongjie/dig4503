class App extends React.Component{

  getName(){

      let name = document.querySelector("#pokemonName");

      fetch("/api/pokemon/name/" + name.value).then((res)=>{return res.json();}).then((processed)=>{
          
          let resultElement = document.querySelector("#results");

          if(processed.error){
              resultElement.innerHTML = "You're a fake, that\'s not a real name!";
          } else{
              resultElement.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
          }
      });
  }

  getId(){
      let pokeId = document.querySelector("#pokemonId");

      fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
          
          let resultElement = document.querySelector("#results");

          if(processed.error){
              resultElement.innerHTML = "You're a fake, that\'s not a real number!";
          } else{
              resultElement.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";

          }
      });
  }

  render(){
    return(
        <div>
            <div>
                <h3>Give me your name!</h3>
                <input type="text" id="pokemonName"/>
                <button onClick={() => {this.getName()}}>Search</button>
            </div>
            <div>
                <h3>Give me your ID!</h3>
                <input type="text" id="pokemonId"/>
                <button onClick = {() => {this.getId()}}>Search</button>
            </div>
            <div> 
                <h3>Give me your ID!</h3>
                <input type="text" id="pokeType"/>
                <button onClick = {() => {this.getId()}}>Search</button>
            </div>
            <div id="results"></div>
        </div>
    )
  }
}

export default App;