import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq(){
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number){
        if (indice === ativo){
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <Pergunta pergunta="a?" resposta="b!" />
            <Pergunta pergunta="c?" resposta="f!" />
            <Pergunta pergunta="d?" resposta="g!" />
            <Pergunta pergunta="e?" resposta="h!" />
        </div>
    )
}