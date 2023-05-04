import Pai from "./Pai";

interface AvoProps {
    nome: string;
    sobrenome:string;
}

export default function Avo(props: AvoProps){
    return (
        <div className="flex flex-col gap-5 bg-purple-500 text-white border border-white">
            <div className="flex justify-center text-xl">
                <span>Avô: {props.nome} {props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
                <Pai nome="C" sobrenome={props.sobrenome}/>
                <Pai nome="D" sobrenome={props.sobrenome}/>
                <Pai nome="E" sobrenome={props.sobrenome}/>
                <Pai nome="F" sobrenome={props.sobrenome}/>
            </div>
        </div>
    )
}