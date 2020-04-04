import SearchResult from '../SearchResult/SearchResult';

class TypeSearch extends React.Component {

    constructor (props) {
        super (props)
        this.state = {
            searchValue: "",
            result: []
        };
    }

    changeHandler(value) {
        this.setState(
            {
                searchValue: value
            }
        );
    }

    async clickHandler() {

      let searchValue = this.state.searchValue;

      if(searchValue === "") {
        searchValue = '~';
      }

      let response = await fetch('/api/pokemon/type/' + searchValue);
      let processed = await response.json();
      
      this.setState({result: processed});
    }
    
    render () {
      return (
        <div>
          <p>Search for Type</p>
          <input
            type="text"
            onChange={(event) => { this.changeHandler(event.target.value); } } />
          <button onClick={ () => { this.clickHandler() } }>Search</button>
            {
              this.state.result.map((pokemon, index) => {
                return (
                  <SearchResult pokemon={pokemon} number={index} />
                )
              })
            }
        </div>
      );
    }
}
  
export default TypeSearch;
/*import React from 'react';

class TypeSearch extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            pokeType: "",
            result: []
        };
    }
    changeHandler (value){
        this.setState(
            {
                pokeType: value
            }
        );
    }

    async getType(){

        let pokeType = document.querySelector("#pokeType");

        if(pokeType === ""){
            pokeType = "~";
        }
        let response = await fetch("/api/pokemon/type/" + pokeType.value);
        let processed = await response.json();

        this.setState({result: processed});
    }

    render(){
        return(
            <div>
                <h1>What's your type?!</h1>
                <input type="text" id="pokeType"/>
                <button>Submit</button>
                <div id="reportingArea"></div>
            </div>
        )
    }
}

export default TypeSearch;*/