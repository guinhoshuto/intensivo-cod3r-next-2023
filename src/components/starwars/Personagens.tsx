import useProcessando from "@/hooks/useProcessando"
import useStarWars from "@/hooks/useStarWars"
import { useState } from "react"

export default function Personagens(){
    const { iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const {personagens, processando} = useStarWars()

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
            <button onClick={() => processando}>SIMULAR</button>
        </div>
    )
}