interface CirculoProps {
    texto: string;
    quasePerfeito?: boolean;
}

export default function Circulo(props: CirculoProps){
    return (
        <div className={`
            h-64
            w-64
            bg-cyan-500
            flex
            justify-center
            items-center
            ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}