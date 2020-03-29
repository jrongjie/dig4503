import Head from "next/head";
import Link from "next/link";
import Style from '../components/Style.module.css'

const Pokemon = () => {
    return(
        <div className={Style.general}>
            <Head>
                <title>Pokemon</title>
            </Head>

            <h1>Welcome to the Pokemon shelter!</h1>
            <p>Find a pokemon companion today...</p>
            <Link href="/id">
                <a className={Style.links}>Search by ID</a>
            </Link>
            <Link href="/name">
                <a className={Style.links}>Search by Name</a>
            </Link>
            <Link href="/type">
                <a className={Style.links}>Search by Type</a>
            </Link>
        </div>
    )
}

export default Pokemon;