import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number){
        console.log(ativo)
        if (indice === ativo){
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <Pergunta 
                indice={0}
                pergunta="a?" 
                resposta="b!" 
                open={ativo=== 0}
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta 
                indice={1}
                pergunta="a?" 
                resposta="b!" 
                open={ativo=== 1}
                alternarVisibilidade={alternarVisibilidade}
            />
            <Pergunta 
                indice={2}
                pergunta="a?" 
                resposta="b!" 
                open={ativo=== 2}
                alternarVisibilidade={alternarVisibilidade}
            />
        </div>
    )
}