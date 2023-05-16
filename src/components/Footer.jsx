import Link from "next/link";

export default function Footer() {

    return (
        <footer className="static bottom-0 w-full h-24 min-[333px]:h-20 bg-gray-800 text-white font-classifler-option ">
            <div className="flex flex-col items-center h-full justify-center">
                <p className="">Este site é um objeto de estudo</p>
                <p>Desenvolvido por Vinicius Schuster</p>
                <div className="flex flex-row justify-around w-full min-[400px]:max-w-md flex-wrap">                                        
                    <p className="mx-1">LinkedIn: <Link className="hover:underline" href="https://www.linkedin.com/in/vinicius-schuster-1290bb124?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtZmn8ecDSieQK4LTbPCxhA%3D%3D">Vinicius Schuster</Link></p>
                    <p className="mx-1">GitHub: <Link className="hover:underline" href="https://github.com/Vinicius1998ls">Vinicius1998ls</Link></p>
                </div>
            </div>
        </footer>
    )
}