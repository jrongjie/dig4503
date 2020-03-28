import Head from "next/head";
import Link from "next/link";

const PokeType = () => {
    return(
        <div>
            <Head>
                <title>Type</title>
            </Head>
            <Link href="/">
                <a>Back</a>
            </Link>

            <h3>What's your type?!</h3>
            <input type="text" id="pokeType"/>
            <button onClick = {() => {this.getType()}}>Search</button>

            <div id="reportingArea"></div>
        </div>
    )
}

export default PokeType;