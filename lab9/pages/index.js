import Head from "next/head";
import Link from "next/link";
//import Style from './styles.module.css'

class Pokemon extends React.Component{

  render(){
    return(
        <div>
            <Head>
                <title>Pokemon</title>
            </Head>

            <h1>Welcome to the Pokemon shelter!</h1>
            <p>Find a pokemon companion today...</p>
            <Link href="/id">
                <a>Search by ID</a>
            </Link>
                <br/>
            <Link href="/name">
                <a>Search by Name</a>
            </Link>
                <br/>
            <Link href="/type">
                <a>Search by Type</a>
            </Link>
        </div>
    )
  }
}

export default Pokemon;