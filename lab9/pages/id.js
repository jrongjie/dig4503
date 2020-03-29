import React from "react";
import Head from "next/head";
import Link from "next/link";
import Style from '../components/Style.module.css'

class PokeId extends React.Component {

    getId(){
        let pokeId = document.querySelector("#pokeId");
  
        fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
            
            let resultElement = document.querySelector("#reportingArea");
  
            if(processed.error){
                resultElement.innerHTML = "We don\'t have any pokemon under that ID number at this shelter.";
            } else{
                resultElement.innerHTML = "Are you looking for, " + processed.id+ ", a " + processed.name + "?";
  
            }
        });
    }
    render(){
        return(
            <div className={Style.general}>
                <Head>
                    <title>ID</title>
                </Head>
                <Link href="/">
                    <a className={Style.links}>Go Back</a>
                </Link>

                <h3>What ID number is the pokemon you're looking for under?</h3>
                <input type="text" id="pokeId"/>
                <button onClick = {() => {this.getId()}}>Search</button>

                <div id="reportingArea"></div>
            </div>
        )
    }
}

export default PokeId;