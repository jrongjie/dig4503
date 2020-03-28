
class Pokemon extends React.Component{

  getName(){
      let pokeName = document.querySelector("#pokeName");

      fetch("/api/pokemon/name/" + pokeName.value).then((res)=>{return res.json();}).then((processed)=>{
          
          let resultElement = document.querySelector("#reportingArea");

          if(processed.error){
              resultElement.innerHTML = "You're a fake, that\'s not a real name!";
          } else{
              resultElement.innerHTML = "According to my pokedex, " + processed.id+ ": you\'re a " + processed.name + "! I knew it!";
          }
      });
  }

  getId(){
      let pokeId = document.querySelector("#pokeId");

      fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
          
          let resultElement = document.querySelector("#reportingArea");

          if(processed.error){
              resultElement.innerHTML = "You're a fake, that\'s not a real number!";
          } else{
              resultElement.innerHTML = "According to my pokedex, " + processed.id+ " you\'re a " + processed.name + "! I knew it!";

          }
      });
  }

  getType(){

    let pokeType = document.querySelector("#pokeType");

    fetch("/api/pokemon/typeList/" + pokeType.value).then((res)=>{return res.json();}).then((processed)=>{
        this.props.callback(processed);
        let reporting = document.querySelector("#reportingArea");
          
        if(processed.error) {
            reporting.innerHTML = "You don\'t know you\'re stuff do you? That\'s not a real pokemon type!";
        } else {
            reporting.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
        }
    });
}

  render(){
    return(
        <div>
            <div>
                <h3>Give me your name!</h3>
                <input type="text" id="pokeName"/>
                <button onClick={() => {this.getName()}}>Search</button>
            </div>
            <div>
                <h3>Give me your ID!</h3>
                <input type="text" id="pokeId"/>
                <button onClick = {() => {this.getId()}}>Search</button>
            </div>
            <div>
                <h3>What's your type?!</h3>
                <input type="text" id="pokeType"/>
                <button onClick = {() => {this.getType()}}>Search</button>
            </div>
            <div id="reportingArea"></div>
        </div>
    )
  }
}

export default Pokemon;

/*
import IdSearch from "../components/IdSearch/IdSearch";
import NameSearch from "../components/NameSearch/NameSearch";
import TypeSearch from "../components/TypeSearch/TypeSearch";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nameResults: "",
            idResults: "",
            typeResults: "",
        };
    }
    nameResults(processed) {
        this.setState({nameResults: processed});
    }
    idResults(processed) {
        this.setState({idResults: processed});
    }

    return (
        <div>
            <NameSearch callback = { () => { this.nameResults() }}/>
            <IdSearch/>
            <TypeSearch/>
            <div id="results">
                <p></p>
            </div>
        </div>
    );
}
export default Home;
*/