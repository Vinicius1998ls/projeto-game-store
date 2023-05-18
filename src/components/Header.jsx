import Link from "next/link"
import { useState } from "react"

export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    // altera menuIsOpen entre verdadeiro e falso
    function openMenu() {
        if (menuIsOpen === false) {
            setMenuIsOpen(true)
        } else {
            setMenuIsOpen(false)
        }
    }

    return (
        <>
            <div className="hidden lg:flex justify-around items-center bg-blue-500 h-20">

                <Link className="h-14" href="./">
                    <img className="h-full" src="../GGS_logo.png" alt="Logo" />
                </Link>

                <nav className="w-1/2 flex justify-around items-center">
                    <Link className='navbar-font' href="Consoles">Consoles</Link>
                    <Link className='navbar-font' href="Games">Jogos</Link>
                    <Link className='navbar-font' href="GiftCard">Gift card</Link>
                    <div className="flex bg-white xl:w-80 h-8 rounded-full md:w-64">
                        <input placeholder="Procurar..." className="p-1 m-1 ml-2 w-full focus:outline-none" type="text" />
                        <svg className="m-1 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </nav>

                <Link href="">
                    <svg className="h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </Link>

            </div>

            {/* Mobile */}
            <div className="flex lg:hidden justify-between items-center bg-blue-500 h-20 px-5 sm:px-10">

                <Link className="h-10 sm:h-14" href="./">
                    <img className="h-full" src="../GGS_logo.png" alt="Logo" />
                </Link>

                <div className="flex justify-between items-center w-28">
                    <Link href="">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </Link>
                    <Link href="">
                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </Link>

                    {/* se menuIsOpen for true mostra o icone X se não mostra as 3 listras  */}
                    {menuIsOpen ?
                        // ao clicar chama a função openMune
                        <svg onClick={openMenu} className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        :
                        <svg onClick={openMenu} className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    }
                </div>
            </div>
            
            {/* se for true mostra o menu, se for false mostra nada */}
            {menuIsOpen ?
                <>
                    <div className="absolute w-screen h-fit z-40">                    
                        <div className="flex justify-end mt-px">                            
                            <ul className="flex flex-col w-36 bg-blue-500 ">
                                <li className="flex justify-end mr-5"><Link className='menu-font' href="./">Home</Link></li>
                                <li className="flex justify-end mr-5"><Link className='menu-font' href="Consoles">Consoles</Link></li>
                                <li className="flex justify-end mr-5"><Link className='menu-font' href="Games">Jogos</Link></li>
                                <li className="flex justify-end mr-5 mb-3"><Link className='menu-font' href="GiftCard">Gift card</Link></li>
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