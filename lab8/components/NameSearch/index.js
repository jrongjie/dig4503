import React from "react";

class NameSearch extends React.Component {
    nameGrabber(event){
        event.preventDefault();
                    
        let formName = document.querySelector("#pokeName");
        
        fetch("http://localhost:80/api/pokemon/name/" + formName.value).then((res) => {
            return res.json();

        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");
            
            if(processed.error) {
                reporting.innerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name + ", I choose you!";
            }
        });
    };
    render() {
        return(
            <div>
                <form onSubmit={this.nameGrabber}>
                    <h1>Give me your name</h1>
                    <input type="text" id="pokeName"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default NameSearch;