import Link from "next/link"

export default function CreateList(props) {
    
    // armazena o array para usar apenas list ao inves de props.list
    const list = props.list
    
    // aqui é feita a renderização mapeando item por item do array
    return(list.map(item => {
        return (
            <li key={item.id} className="flex flex-col  w-40 min-[400px]:w-44 sm:w-52 md:w-64 m-2 border-2 border-gray-200 rounded-md">
                <Link href={`products/${item.id}`}>
                    <img className="object-contain w-full h-36 sm:h-44 lg:h-52 mt-1" src={item.img} alt="" />
                    <h2 className="title-item text-base lg:text-lg mx-1 sm:mx-5 mt-2 flex flex-wrap h-12 lg:h-14 overflow-hidden">{item.name}</h2>
                    <p className="font-price text-green-600 text-base lg:text-lg ml-1 sm:ml-5 mt-1 lg:mt-2 mb-2">
                        {/* converte o valor de price para real */}
                        R$: {(item.price).toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </p>
                </Link>
                <a className="flex justify-center" href="">
                    <button className="font-button-buy text-white w-11/12 h-8 bg-red-600 rounded-md mb-1">Comprar</button>
                </a>
            </li>
        )
    }))
}