import { useState } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { consolesList, cardList, gamesList } from "@/db/Products";
import ProductsList from "@/components/ProductsList";
import GetResults from "@/components/GetResults";

export default function Results() {

    const router = useRouter()

    if (!router.query || Object.keys(router.query).length === 0) {
        return <div>Carregando...</div>
    }

    // extrai a palavra buscada da url 
    const src= router.query.resultsPage

    // extrai todos os item
    const consoles = consolesList()
    const games = gamesList()
    const cards = cardList()
    const products = consoles.concat(games, cards)

    // filtra conforme a palavra chave
    const results = GetResults(products, src)

    return (
        <>
            <Header home='.././' consoles='../consoles' games='../games' gift='../giftCard' logo='../GGS_logo.png'></Header>
            <main className="flex flex-col items-center">
                <h2 className="title-item text-xl mt-8">Você buscou por: <span className="font-price text-xl">{src}</span></h2>
                <ProductsList
                    list={results}
                    currentPage={1}
                    classifler={'relevance'}
                    filter={[true, true, true]}
                    path={'srcPage'}
                    src={src}>
                </ProductsList>
            </main>
            <Footer></Footer>
        </>
    )
}