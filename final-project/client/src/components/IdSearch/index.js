import React from 'react';

class IdSearch extends React.Component {
    idGrabber(event){
        event.preventDefault();  
        
        let pokeId = document.querySelector("#pokeId");
                    
        fetch("http://localhost:80/id/" + pokeId.value).then((res) => {
            return res.json();
        
        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");
                
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = "So you are a " + processed.name + "! I knew it!";
            }
        });
    };
    render(){
        return (
            <div>
                <form onSubmit={this.idGrabber}>
                    <h1>Give me your ID</h1>
                    <input type="text" id="pokeId"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default IdSearch;