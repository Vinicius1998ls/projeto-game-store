import React from "react";
import Header from "@/components/Header";
import Classifler from "@/components/Classifler.jsx";
import { consolesList } from '../db/Products.js'
import react, { useState } from "react";
import CreateList from "@/components/CreateList.jsx";


export default function Consoles() {
    const items = consolesList()
    items.sort((a, b) => b.relevance - a.relevance)

    const [list, setList] = useState(items)

    function handleList(value, list) {
        let newList = [...list]

        setList(Classifler(value, newList))
    }

    return (
        <>
            <Header></Header>
            <main className="flex flex-col items-center">
                <div className="flex w-10/12 mt-5 justify-end min-[400px]:w-9/12 lg:justify-start lg:max-w-5xl  ">
                    <label className="font-classifler text-white bg-orange-500 p-1 rounded-lg">
                        Ordenar por:{" "}
                        <select className="rounded-lg mt-px px-1 focus:outline-none font-classifler-option text-black" onChange={(event) => handleList(event.target.value, list)}>
                            <option value="relevance">Relevância</option>
                            <option value="lowest">Menor Preço</option>
                            <option value="biggest">Maior Preço</option>
                        </select>
                    </label>
                </div>

                <div className="flex justify-center">
                    <ul className="flex flex-row flex-wrap justify-center mt-5 max-w-6xl">
                        <CreateList list={list} />
                    </ul>
                </div>
            </main>

        </>
    )
}