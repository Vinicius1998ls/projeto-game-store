import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { consolesList } from "@/db/Products";
import ProductsList from "@/components/ProductsList";


export default function ConsolesPages() {
    
    const Router = useRouter()
    
    // Garante que ao recarregar a pagina não retorne router.query vazio
    if (!Router.query || Object.keys(Router.query).length === 0) {
        return <div>Carregando...</div>
    }

    const items = consolesList()
    const classifler = Router.query.classifler
    // como os valores de filter vem em string aqui é transformado em Boolean
    const filterString = Router.query.filter.split(',')
    const filter = filterString.map(item => {
        if(item === 'true') {
            item = true
            return item
        } else {
            item = false
            return item
        }
    })
    

    return (
        <>
            <Header home='.././' consoles='../consoles' games='../Games' gift='../GiftCard' ></Header>
            <main className="flex flex-col items-center">
                {/* gera a lista conforme parametros */}
                <ProductsList 
                    list={items}
                    currentPage={Router.query.consolesPage} 
                    classifler={classifler}
                    filter={filter}
                    >
                </ProductsList>                
            </main>
            <Footer></Footer>
        </>
    )
}