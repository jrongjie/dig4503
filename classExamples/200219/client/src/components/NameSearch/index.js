import React from "react";

class NameSearch extends React.Component {
    nameSearch(){
        let nameSrc = document.querySelector("#nameSrc");

        fetch("http://localhost:80/shows/name/" + nameSrc.value)
        .then((res) => {
            res.json();
        })
        .then((processed) => {
            let nameRpt = document.querySelector("#nameRpt");
            if(processed.error) {
                nameRpt.innerHTML = processed.error;
            } else {
                nameRpt.innerHTML = processed.name;
            }
        });
    }

    render(){
        return (
            <div>
                <input id="nameSrc" type="text" onKeyDown={this.nameSearch}/>
                <div id="nameRpt"></div>
            </div>
        );
    }
}

export default NameSearch;