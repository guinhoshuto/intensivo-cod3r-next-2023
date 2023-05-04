interface FilhoProps{
    nome: string;
    sobrenome: string;
}

export default function Filho(props: FilhoProps){
    return (
        <div className="border border-white flex justify-center items-center bg-green-500 rounded-md p-2">
            Filho: {props.nome} {props.sobrenome} 
        </div>
    )
}