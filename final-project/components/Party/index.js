import React from "react";

class Party extends React.Component {
    render(){
        return(
            <div className={Style.general}>
                <img href= "assets/bw-pokeball.png" alt= "empty pokeball" id="1" className= {Style.general}/>
                <img href= "assets/bw-pokeball.png" alt= "empty pokeball" id="2" className= {Style.general}/>
                <img href= "assets/bw-pokeball.png" alt= "empty pokeball" id="3" className= {Style.general}/>
            </div>
        )
    }
}

export default Party;