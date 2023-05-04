import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria(){
    const url = 'https://source.unsplash.com/featured/'
    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [size, setSize] = useState<number>(300)

    function urlImagem(){
        return `${url}${size}x${size}?${pesquisa}`
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
            <div className="flex justify-center gap-7 mb-5">
                <span>
                    {pesquisa} - {size}x{size}
                </span>
            </div>
            <Image className="rounded-md" src={urlImagem()} height="300" width="300" alt="x"/>
            <div className="flex flex-col gap-3 mt-3">
                {buttonRender('abstract')}
                {buttonRender('city')}
                {buttonRender('nature')}
            </div>
            <div>
                <input 
                    type="number" 
                    value={size}  
                    className="bg-zinc-800 mr-3 mt-3 w-[90%] p-2 rounded-md outline-none"
                    onChange={e => setSize(Number(e.target.value))}
                />
                <span>px</span>
            </div>
        </div>
    )
}