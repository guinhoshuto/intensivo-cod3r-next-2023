interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps){
    return (
        <div className="text-center">
            {props.valor}
        </div>
    )
}