import Head from "next/head";
import Link from "next/link";

const PokeName = () => {
    return(
        <div>
            <Head>
                <title>Name</title>
            </Head>
            <Link href="/">
                <a>Back</a>
            </Link>

            <h3>Give me your name!</h3>
            <input type="text" id="pokeName"/>
            <button onClick={() => {this.getName()}}>Search</button>

            <div id="reportingArea"></div>
        </div>
    )
}

export default PokeName;