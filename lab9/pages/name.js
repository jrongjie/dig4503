import React from "react";
import Head from "next/head";
import Link from "next/link";

class PokeName extends React.Component {
    getName(){
        let pokeName = document.querySelector("#pokeName");
  
        fetch("/api/pokemon/name/" + pokeName.value).then((res)=>{return res.json();}).then((processed)=>{
            
            let resultElement = document.querySelector("#reportingArea");
  
            if(processed.error){
                resultElement.innerHTML = "We don\'t have any pokemon under that name at this shelter.";
            } else{
                resultElement.innerHTML = "Are you looking for, " + processed.id+ ", a " + processed.name + "?";
            }
        });
    }

    render(){
        return(
            <div>
                <Head>
                    <title>ID</title>
                </Head>
                <Link href="/">
                    <a>Go Back</a>
                </Link>

                <h3>What is the name of the pokemon you're looking for?</h3>
                <input type="text" id="pokeName"/>
                <button onClick = {() => {this.getName()}}>Search</button>

                <div id="reportingArea"></div>
            </div>
        )
    }
}

export default PokeName;
