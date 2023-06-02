import Link from "next/link";

// divide a lista por paginas
function CreatePages(list) {
    let listCopy = [...list]

    const pages = []
    let index = 1    
    
    while(listCopy.length !== 0) {
        if(listCopy.length >= 4) {
            pages[index] = listCopy.splice(0, 4)            
        } else {
            pages[index] = listCopy.splice(0, listCopy.length)
        }

        index += 1
    }
    
    return pages   
}

export function itemsPage(list) {
    
    // manda dividir a lista por paginas
    const pages = CreatePages(list)

    return pages
}

export function Pagination(props) {
    const list = props.list
    const classifler = props.classifler
    const filter = props.filter
    
    const pages = CreatePages(list)

    function createPages() {
        let pager = []        
                    
        for(let i = 1; i <= pages.length - 1; i++) {
            // cria o paginador com o link que é gerado conforme os parametros recebidos
            pager[i] = <li key={i} className="flex justify-center items-center h-6 w-6 font-button-buy text-base p-1 m-1 rounded-full bg-blue-500 text-black hover:bg-orange-500 hover:text-white">
                                <Link href={{ pathname: `../consoles/${i}`, 
                                        query: { 
                                            classifler: `${classifler}`, 
                                            filter: `${filter}` 
                                } }}><span className="p-2">{i}</span></Link>
                            </li>
        }

        return pager    
    }

    return(
        <div className="flex flex-row justify-center items-center mt-5">
            <ul className="flex flex-row">
                {createPages()}                
            </ul>
        </div>
    )
}