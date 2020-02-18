import React from 'react';

class IdSearch extends React.Component {
    idGrabber(event){
        event.preventDefault();  
        
        let formId = document.querySelector("#pokeId");
                    
        fetch("/id/" + formId.value).then((res) => {
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
                <form onsubmit="idGrabber(event)">
                    <h1>Give me your ID</h1>
                    <input type="text" id="pokeId"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default IdSearch;