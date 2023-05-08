import useProcessando from "@/hooks/useProcessando"
import useStarWars from "@/hooks/useStarWars"
import { useState } from "react"

export default function Personagens(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const {personagens, obterPersonagens} = useStarWars()

    return(
        <div>
            {processando? (
                <div>loading</div>
            ): (
                <ul>
                    {personagens.map((p: any) => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul>
            )}
            <button onClick={obterPersonagens}>SIMULAR</button>
        </div>
    )
}