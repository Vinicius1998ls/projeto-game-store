import { useState } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { consolesList, cardList, gamesList } from "@/db/Products";
import ProductsList from "@/components/ProductsList";

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

    const results = getResults(src)

    // filtra conforme a palavra chave
    function getResults(src) {
        // primeiro procura por palavra
        let results = products.filter((product) => {            
            const keywords = src.toLowerCase().split(" ");
            return keywords.every((keyword) =>
                product.name.toLowerCase().includes(keyword)
            );
        });
        // se nada é encontrado então a busca e feita pelas letras digitadas
        if (results.length === 0) {            
            results = products.filter((product) => {
                const letters = src.toLowerCase().split("");
                return letters.every((letter) =>
                    product.name.toLowerCase().includes(letter)
                )
            })
        }

        return results
    }

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