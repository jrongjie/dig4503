import React from "react";
import Style from '../components/Style.module.css'

class Party extends React.Component {
    render(){
        return(
            <div className={Style.general}>
                <img src= "assets/bw-pokeball.png" alt= "empty pokeball" id="1" className= {Style.general}/>
                <img src= "assets/bw-pokeball.png" alt= "empty pokeball" id="2" className= {Style.general}/>
                <img src= "assets/bw-pokeball.png" alt= "empty pokeball" id="3" className= {Style.general}/>
            </div>
        )
    }
}

export default Party;