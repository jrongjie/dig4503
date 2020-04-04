import React from "react";
import Head from "next/head";
import Link from "next/link";
import Style from "../components/Style.module.css";
import TypeSearch from '../components/TypeSearch/TypeSearch';

function PokeType() {
    return(
    <div className={Style.general}>
        <Head>
            <title>Type</title>
        </Head>
        <Link href="/">
            <a className={Style.links}>Back</a>
        </Link>
        <TypeSearch/>
    </div>
    )
}

export default PokeType;