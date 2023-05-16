import React from "react";
import Header from "@/components/Header";
import Classifler from "@/components/Classifler.jsx";
import { consolesList } from '../db/Products.js'
import react, { useState } from "react";
import CreateList from "@/components/CreateList.jsx";
import Footer from "@/components/Footer.jsx";


export default function Consoles() {
    // puxa o array consoles de Product.js e inseri em items
    const items = consolesList()
    // ordena por relevancia
    items.sort((a, b) => b.relevance - a.relevance)

    // cria um estado para list recebendo do array items
    const [list, setList] = useState(items)
    // função para alterar a lista
    function handleList(value, list) {
        // passa list para newList para permitir alteração
        let newList = [...list]

        // chama a função classifler passando como parametro
        // o valor recebido de select e a lista de produtos
        // o resultado retornado da função setList altera o estado
        // com a nova ordenada lista e renderiza
        setList(Classifler(value, newList))
    }

    return (
        <>
            <Header></Header>
            <main className="flex flex-col items-center">
                <div className="flex w-10/12 mt-5 justify-end min-[400px]:w-9/12 lg:justify-start lg:max-w-5xl  ">
                    <label className="font-classifler text-white bg-orange-500 p-1 rounded-lg">
                        Ordenar por:{" "}
                        <select className={`"rounded-lg mt-px px-1 focus:outline-none 
                            font-classifler-option text-black`}
                            // ao alterar chama a função handleList passando o valor de 
                            // select e o array com estado list 
                            onChange={(event) => handleList(event.target.value, list)}>
                            <option value="relevance">Relevância</option>
                            <option value="lowest">Menor Preço</option>
                            <option value="biggest">Maior Preço</option>
                        </select>
                    </label>
                </div>

                <div className="flex justify-center">
                    <ul className="flex flex-row flex-wrap justify-center mt-5 max-w-6xl">
                        {/* passa o list como props para ser renderizado */}
                        <CreateList list={list} />
                    </ul>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}