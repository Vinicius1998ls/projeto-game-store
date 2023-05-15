export default function CreateList(props) {
    
    const list = props.list

    return(list.map(item => {
        return (
            <li key={item.id} className="flex flex-col  w-40 min-[400px]:w-44 sm:w-52 md:w-64 m-2 border-2 border-gray-200 rounded-md">
                <a href="">
                    <img className="object-contain w-full h-36 sm:h-44 lg:h-52 mt-1" src={item.img} alt="" />
                    <h2 className="title-item mx-1 sm:mx-5 mt-2 flex flex-wrap h-12 overflow-hidden">{item.name}</h2>
                    <p className="font-price text-green-600 ml-1 sm:ml-5 mt-1 mb-2">
                        R$: {(item.price).toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </p>
                </a>
                <a className="flex justify-center" href="">
                    <button className="font-button-buy text-white w-11/12 h-8 bg-red-600 rounded-md mb-1">Comprar</button>
                </a>
            </li>
        )
    }))
}