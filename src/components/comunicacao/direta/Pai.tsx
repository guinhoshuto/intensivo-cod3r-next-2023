import Filho from "./Filho";

interface PaiProps{
    nome: string;
    sobrenome: string;
}

export default function Pai(props: PaiProps){
    return (
        <div className="flex gap-5 bg-blue-500 border border-white rounded-md">
            <div className="flex justify-center text-xl">
                <span>Pai: {props.nome} {props.sobrenome}</span>
            </div>
            <div>
                <Filho nome="G" sobrenome={props.sobrenome}/>
                <Filho nome="H" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )
}