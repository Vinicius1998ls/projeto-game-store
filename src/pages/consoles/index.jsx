import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsList from "@/components/ProductsList";
import { consolesList } from "@/db/Products";

const items = consolesList()

export default function Consoles() {


    return(
        <>
            <Header home='../' consoles='../consoles' games='../Games' gift='GiftCard' ></Header>
            <main className="flex flex-col items-center">
                {/* recebe os produtos passando parametros padroes */}
                <ProductsList 
                    list={items} 
                    currentPage={1} 
                    classifler={'relevance'}
                    filter={[true, true, true]}>
                </ProductsList>                
            </main>
            <Footer></Footer>
        </>
    )
}
{/* <button className="w-20 h-16 bg-red-600">
                    <Link href={`consoles/${page}${filter}`}>proxima pagina</Link>                
                </button>
                <button className="w-20 h-16 bg-blue-600">                
                    <Link href={{ pathname: `../consoles/${page}`, query: { filter: `${filter}` } }}>proxima pagina</Link>
                </button> */}   