import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsList from "@/components/ProductsList";
import { gamesList } from "@/db/Products";

const items = gamesList()

export default function Games() {


    return(
        <>
            <Header home='../' consoles='../consoles' games='../games' gift='../giftCard' logo='GGS_logo.png' ></Header>
            <main className="flex flex-col items-center">
                {/* recebe os produtos passando parametros padroes */}
                <ProductsList 
                    list={items} 
                    currentPage={1} 
                    classifler={'relevance'}
                    filter={[true, true, true]}
                    path={'games'}
                    src={null}>
                </ProductsList>                
            </main>
            <Footer></Footer>
        </>
    )
}