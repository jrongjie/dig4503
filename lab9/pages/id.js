import Head from "next/head";
import Link from "next/link";

const PokeId = () => {
    return(
        <div>
            <Head>
                <title>ID</title>
            </Head>
            <Link href="/">
                <a>Back</a>
            </Link>

            <h3>Give me your ID!</h3>
            <input type="text" id="pokeId"/>
            <button onClick = {() => {this.getId()}}>Search</button>

            <div id="reportingArea"></div>
        </div>
    )
}

export default PokeId;