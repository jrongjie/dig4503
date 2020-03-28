import React from 'react';

class TypeSearch extends React.Component{

    getType(){

        let pokeType = document.querySelector("#pokeType");

        fetch("/api/pokemon/typeList/" + pokeType.value).then((res)=>{return res.json();}).then((processed)=>{
            this.props.callback(processed);
            let reporting = document.querySelector("#reportingArea");
              
            if(processed.error) {
                reporting.innerHTML = "You don\'t know you\'re stuff do you? That\'s not a real pokemon type!";
            } else {
                reporting.innerHTML = "Are you looking for, " + processed.id+ ", a " + processed.name + "?";
            }
        });
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

export default TypeSearch;