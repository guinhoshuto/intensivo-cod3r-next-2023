interface BotoesProps{
    inc: (n: number) => void
    dec: (n: number) => void
}

export default function Botoes(props: BotoesProps){
    return(
        <div>
            <button onClick={() => props.inc(10)}>+</button>
            <button onClick={() => props.dec(10)}>-</button>
        </div>
    )

}