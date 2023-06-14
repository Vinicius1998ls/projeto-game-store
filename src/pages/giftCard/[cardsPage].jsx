import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cardList } from "@/db/Products";
import ProductsList from "@/components/ProductsList";


export default function CardsPages() {
    
    const router = useRouter()
    
    // Garante que ao recarregar a pagina não retorne router.query vazio
    if (!router.query || Object.keys(router.query).length === 0) {
        return <div>Carregando...</div>
    }

    const items = cardList()
    
    // extrai as informações recebidas pelo link
    const classifler = router.query.classifler
    // como os valores de filter vem em string aqui é transformado em Boolean
    const filterString = router.query.filter.split(',')
    const filter = filterString.map(item => {
        if(item === 'true') {
            item = true
            return item
        } else {
            item = false
            return item
        }
    })
    const currentPage = router.query.cardsPage
    const path = router.query.path

    return (
        <>
            <Header home='.././' consoles='../consoles' games='../games' gift='../giftCard' logo='../GGS_logo.png'></Header>
            <main className="flex flex-col items-center">
                {/* gera a lista conforme parametros */}
                <ProductsList 
                    list={items}
                    currentPage={currentPage} 
                    classifler={classifler}
                    filter={filter}
                    path={path}
                    src={null}>
                </ProductsList>                
            </main>
            <Footer></Footer>
        </>
    )
}