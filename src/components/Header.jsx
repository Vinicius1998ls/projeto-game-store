import Link from "next/link"
import { useEffect, useState } from "react"
import { showList } from "./ShoppingList"

export default function Header(props) {

    const homePath = props.home
    const consolesPath = props.consoles
    const gamesPath = props.games
    const giftPath = props.gift
    const logoPath = props.logo
    const path = props.path
    const totalList = props.totalList

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    // altera menuIsOpen entre verdadeiro e falso
    function openMenu() {
        if (menuIsOpen === false) {
            setMenuIsOpen(true)
        } else {
            setMenuIsOpen(false)
        }
    }

    const [searchIsOpen, setSearchIsOpen] = useState(false)

    function openSearch() {
        if (searchIsOpen === false) {
            setSearchIsOpen(true)
        } else {
            setSearchIsOpen(false)
        }
    }

    // função para buscar itens
    function search(input) {
        // primeiro verifica em qual dos inputs foi preenchido
        if (input === 'input1') {
            // pega o valor do input e armazena
            const idValue = document.getElementById('src-product').value
            // verifica se não esta vazio, caso estiver vazio nada acontece
            if (idValue !== '') {
                // vai para a pagina de pesquisa com a palavra chave na url
                window.location.href = `/srcPage/${idValue}`
            }
        } else if (input === 'input2') {
            const idValue = document.getElementById('src-product2').value
            if (idValue !== '') {
                window.location.href = `/srcPage/${idValue}`
            }
        } else {
            const idValue = document.getElementById('src-product3').value
            if (idValue !== '') {
                window.location.href = `/srcPage/${idValue}`
            }
        }
    }

    function enter(event, input) {
        // se enter for apertado chama a função
        if (event.keyCode === 13) {
            search(input)
        }
    }

    return (
        <>
            <div className="hidden lg:flex justify-around items-center bg-blue-500 h-20">

                <Link className="h-14" href={homePath}>
                    <img className="h-full" src={logoPath} alt="Logo" />
                </Link>

                <nav className="w-7/12 xl:w-1/2 flex justify-around items-center">
                    {path === 'consoles' ?
                        <Link className='navbar-font px-4 text-white bg-orange-500 rounded-full' href={consolesPath}>Consoles</Link>
                        :
                        <Link className='navbar-font px-4 hover:text-white hover:bg-orange-500 rounded-full' href={consolesPath}>Consoles</Link>
                    }
                    {path === 'games' ?
                        <Link className='navbar-font px-4 text-white bg-orange-500 rounded-full' href={gamesPath}>Jogos</Link>
                        :
                        <Link className='navbar-font px-4 hover:text-white hover:bg-orange-500 rounded-full' href={gamesPath}>Jogos</Link>
                    }
                    {path === 'cards' ?
                        <Link className='navbar-font px-4 text-white bg-orange-500 rounded-full' href={giftPath}>Gift card</Link>
                        :
                        <Link className='navbar-font px-4 hover:text-white hover:bg-orange-500 rounded-full' href={giftPath}>Gift card</Link>
                    }

                    {/* barra de pesquisa grande */}
                    <div className="flex bg-white xl:w-80 h-8 rounded-full md:w-64">
                        <input onKeyDown={(event) => enter(event, 'input1')} id='src-product' placeholder="Procurar..." className="p-1 m-1 ml-2 w-full focus:outline-none" type="text" />
                        <svg onClick={() => search('input1')} className="mr-4 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </nav>

                <Link href="/shoppingCart" className="flex flex-row">
                    <svg className="h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    {totalList > 0 ?
                        <div className="-translate-y-2 -translate-x-3">
                            <p className=" px-2 text-white bg-red-500 rounded-full">{totalList}</p>

                        </div>
                        :
                        null
                    }
                </Link>

            </div>

            {/* Mobile */}
            <div className="flex lg:hidden justify-between items-center bg-blue-500 h-20 px-5 sm:px-10">

                {searchIsOpen ?
                    <>
                        {/* ====barra de pesquisa pequena==== */}
                        <div className="flex bg-white w-full h-8 rounded-full">
                            <input onKeyDown={(event) => enter(event, 'input2')} id='src-product2' placeholder="Procurar..." className="p-1 m-1 ml-2 w-full focus:outline-none" autoFocus type="text" />
                            <svg onClick={() => search('input2')} className="m-1 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <svg onClick={openSearch} className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </>
                    :
                    <>
                        <Link className="h-10 sm:h-14" href={homePath}>
                            <img className="h-full" src={logoPath} alt="Logo" />
                        </Link>

                        <div className="flex justify-between items-center w-28 sm:w-fit">
                            {/* barra de pesquisa para telas pequenas */}
                            <svg onClick={openSearch} className="sm:hidden w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            {/* barra de pesquisa para telas media */}
                            <div className="hidden sm:flex bg-white w-full h-8 rounded-full">
                                <input onKeyDown={(event) => enter(event, 'input3')} id='src-product3' placeholder="Procurar..." className="p-1 m-1 ml-2 w-56 min-[900px]:w-80 focus:outline-none" type="text" />
                                <svg onClick={() => search('input3')} className="m-1 mr-3 translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>

                            {/* =====CARRINHO===== */}
                            <Link href="/shoppingCart" className="flex flex-row sm:mx-2">
                                <svg className="h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                {totalList > 0 ?
                                    <div className="-translate-y-2 -translate-x-3 -mr-5">
                                        <p className=" px-2 text-white bg-red-500 rounded-full">{totalList}</p>
                                    </div>
                                    :
                                    null
                                }
                            </Link>

                            {/* se menuIsOpen for true mostra o icone X se não mostra as 3 listras  */}
                            {menuIsOpen ?
                                // ao clicar chama a função openMenu
                                <svg onClick={openMenu} className="w-8 h-8 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg onClick={openMenu} className="w-8 h-8 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }
                        </div>
                    </>
                }
            </div>

            {/* se for true mostra o menu, se for false mostra nada */}
            {menuIsOpen ?
                <>
                    <div className="absolute w-screen h-fit z-40">
                        <div className="flex justify-end mt-px">
                            <ul className="flex flex-col w-36 bg-blue-500 ">
                                <li className="flex justify-end mr-5"><Link className='menu-font text-2xl' href={homePath}>Home</Link></li>
                                <li className="flex justify-end mr-5"><Link className='menu-font text-2xl' href={consolesPath}>Consoles</Link></li>
                                <li className="flex justify-end mr-5"><Link className='menu-font text-2xl' href={gamesPath}>Jogos</Link></li>
                                <li className="flex justify-end mr-5 mb-3"><Link className='menu-font text-2xl' href={giftPath}>Gift card</Link></li>
                            </ul>
                        </div>
                    </div>
                </>
                :
                null
            }
        </>
    )
}