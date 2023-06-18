import Link from "next/link";

import Header from "@/components/Header"
import Carousel from "@/components/Carousel"
import Footer from "@/components/Footer"

import { cardList, consolesList, gamesList } from "@/db/Products";

// ====swiper====
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination , Navigation} from "swiper";

const games = gamesList()
const cards = cardList()
const consoles = consolesList()

const list = games.concat(cards, consoles)

function listNewProducts() {
    
    let newItem = list.filter(item => {
        return item.new === true
    })
    return (newItem.map(item => {
        return (
            <SwiperSlide key={item.id}
            style={{
                marginLeft: '5px',
                marginRight: '5px'
            }}
            >
                <div key={item.id} className="flex flex-col w-[130px] sm:w-36 h-fit mb-8 border-2 border-gray-200 rounded-md">
                    <Link href={`/products/${item.id}`}>
                        <img className="object-contain w-full h-36 sm:h-44 lg:h-52 mt-1" src={item.img} alt="" />
                        <h2 className="title-item text-base lg:text-lg text-center mx-1 sm:mx-5 mt-2 flex flex-wrap h-12 lg:h-14 overflow-hidden">
                            {item.name}{' '}
                            {item.platform ? item.platform : ''}
                        </h2>
                        <p className="font-price text-green-600 text-base lg:text-lg ml-5 sm:ml-5 mt-1 lg:mt-2 mb-2">
                            {/* converte o valor de price para real */}
                            R$: {(item.price).toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </p>
                    </Link>
                    <a className="flex justify-center" href="">
                        <button className="font-button-buy text-white w-10/12 h-8 bg-red-600 rounded-md mb-1">Comprar</button>
                    </a>
                </div>
            </SwiperSlide>
        )
    }))    
}

function getMostWanted() {
    let mostWanted = list.filter(item => {
        if(item.relevance >= 4) {
            return item
        }
    })
    mostWanted.sort((a, b) => b.relevance - a.relevance)
    return (mostWanted.map(item => {
        return (
            <SwiperSlide key={item.id}
            style={{
                marginLeft: '5px',
                marginRight: '5px'
            }}
            >
                <div key={item.id} className="flex flex-col w-[130px] sm:w-36 h-fit mb-8 border-2 border-gray-200 rounded-md">
                    <Link href={`/products/${item.id}`}>
                        <img className="object-contain w-full h-36 sm:h-44 lg:h-52 mt-1" src={item.img} alt="" />
                        <h2 className="title-item text-base lg:text-lg text-center mx-1 sm:mx-5 mt-2 flex flex-wrap h-12 lg:h-14 overflow-hidden">
                            {item.name}{' '}
                            {item.platform ? item.platform : ''}
                        </h2>
                        <p className="font-price text-green-600 text-base lg:text-lg ml-5 sm:ml-5 mt-1 lg:mt-2 mb-2">
                            {/* converte o valor de price para real */}
                            R$: {(item.price).toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </p>
                    </Link>
                    <a className="flex justify-center" href="">
                        <button className="font-button-buy text-white w-10/12 h-8 bg-red-600 rounded-md mb-1">Comprar</button>
                    </a>
                </div>
            </SwiperSlide>
        )
    }))  
}

export default function Home() {
    return (
        <>
            <Header home='./' consoles='consoles' games='games' gift='giftCard' logo='GGS_logo.png'></Header>
            <main className="min-h-[80vh]">
                <Carousel></Carousel>
                <div className="flex justify-center ">
                    <h2 className="w-full min-[400px]:max-w-[400px] sm:max-w-[550px] lg:max-w-[850px] title-item text-xl mt-7 lg:mt-10 mx-5">Lançamentos:</h2>
                </div>
                <Swiper
                    className="max-w-[300px] min-[400px]:max-w-[400px] sm:max-w-[600px] lg:max-w-[900px] mt-3 "
                    style={{
                        '--swiper-pagination-bottom': '5px;',
                    }}
                    slidesPerView={2}                                        
                    navigation={true}
                    breakpoints={{
                        400: {
                            slidesPerView: 3,                                                        
                        },
                        640: {
                            slidesPerView: 3,
                            slidesPerGroup: 2,                            
                        },
                        1024: {
                            slidesPerView: 5,                            
                        },
                    }}
                    modules={[Pagination, Navigation]}                    
                >
                    {listNewProducts()}
                    <SwiperSlide>
                        <div className="w-30"></div>
                    </SwiperSlide>
                </Swiper>
                <div className="flex justify-center ">
                    <h2 className="w-full min-[400px]:max-w-[400px] sm:max-w-[550px] lg:max-w-[850px] title-item text-xl mt-7 lg:mt-10 mx-5">Mais procurados:</h2>
                </div>
                <Swiper
                    className="max-w-[300px] min-[400px]:max-w-[400px] sm:max-w-[600px] lg:max-w-[900px] mt-3 "
                    style={{
                        '--swiper-pagination-bottom': '5px;',
                    }}
                    slidesPerView={2}                                       
                    navigation={true}
                    breakpoints={{
                        400: {
                            slidesPerView: 3,                                                        
                        },
                        640: {
                            slidesPerView: 3,
                            slidesPerGroup: 2,
                            
                        },
                        1024: {
                            slidesPerView: 5,
                            slidesPerGroup: 3,
                            
                        },
                    }}
                    modules={[Pagination, Navigation]}                    
                >
                    {getMostWanted()}
                    <SwiperSlide>
                        <div className="w-30"></div>
                    </SwiperSlide>
                </Swiper>
                
            </main>
            <Footer></Footer>
        </>
    )
}