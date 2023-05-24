import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Footer from "@/components/Footer"


export default function Home() {
    return (
        <>
            <Header home='./' consoles='/Consoles' games='Games' gift='GiftCard'></Header>
            <Carousel></Carousel>
            {/* temporario */}
            <div className="w-full h-80"></div>
            <Footer></Footer>
        </>
    )
}