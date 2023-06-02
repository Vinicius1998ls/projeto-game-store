import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Footer from "@/components/Footer"


export default function Home() {
    return (
        <>
            <Header home='./' consoles='consoles' games='Games' gift='GiftCard'></Header>
            <main className="min-h-[80vh]">
                <Carousel></Carousel>
            </main>
            <Footer></Footer>
        </>
    )
}