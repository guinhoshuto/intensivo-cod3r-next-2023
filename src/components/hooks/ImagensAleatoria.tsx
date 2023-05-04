import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria(){
    const url = 'https://source.unsplash.com/featured/300x300?'
    const [pesquisa, setPesquisa] = useState<string>('abstract')

    function urlImagem(){
        return `${url}${pesquisa}`
    }

    function buttonRender(valor: string){
        return (
            <button 
                className="bg-green-500 rounded-md  px-4 py-2"
                onClick={() => setPesquisa(valor)}
            >
                {valor}
            </button>   
        )
    }

    return (
        <div>
            <Image src={urlImagem()} height="300" width="300" alt="x"/>
            <div className="flex flex-col gap-3 mt-3">
                {buttonRender('abstract')}
                {buttonRender('city')}
                {buttonRender('nature')}
            </div>
        </div>
    )
}