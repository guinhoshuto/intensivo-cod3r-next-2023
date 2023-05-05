import IF from "./If";

interface PerguntaProps {
    indice: number
    pergunta: string;
    resposta: string;
    open: boolean;
    alternarVisibilidade: (indice: number) => void;
}

export default function Pergunta(props: PerguntaProps){
    return(
        <div className="border border-white rounded-md overflow-hidden">
            <div 
                onClick={() => props.alternarVisibilidade(props.indice)} 
                className="text-bold bg-zinc-700 p-5 cursor-pointer select-none text-center"
            >
                {props.pergunta}
            </div>
            <IF teste={props.open}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </IF>
        </div>
    )
}