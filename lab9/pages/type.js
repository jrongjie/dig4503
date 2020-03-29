import React from "react";
import Head from "next/head";
import Link from "next/link";
import Style from '../components/Style.module.css'

class PokeType extends React.Component {
    getType(){
        let pokeType = document.querySelector("#pokeType");
    
        fetch("/api/pokemon/typeList/" + pokeType.value).then((res)=>{return res.json();}).then((processed)=>{
            this.props.callback(processed);
            let reporting = document.querySelector("#reportingArea");
              
            if(processed.error) {
                reporting.innerHTML = "We don\'t have any pokemon under that type at this shelter";
            } else {
                reporting.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
            }
        });
    }
    render(){
        return(
        <div className={Style.general}>
            <Head>
                <title>Type</title>
            </Head>
            <Link href="/">
                <a className={Style.links}>Back</a>
            </Link>

            <h3>What type of pokemon are you looking for?</h3>
            <input type="text" id="pokeType"/>
            <button onClick = {() => {this.getType()}}>Search</button>

            <div id="reportingArea"></div>
        </div>
        )
    }
}

export default PokeType;