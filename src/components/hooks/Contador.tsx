import { useCallback, useEffect, useState } from "react"

export default function Contador(){
    const [valor, setValor] = useState<number>(0)
    const [delta, setDelta] = useState<number>(1)
    const [pot, setPot] = useState(0)
    useEffect(() => {
        setPot(valor*10)
    }, [valor])

    const calcularValorMulti10 = useCallback((valor: number) => {
        return valor*10
    }, [])

    useEffect(() => {
        const multi10 = calcularValorMulti10(valor)
        setPot(multi10)
    }, [valor, calcularValorMulti10])

    return(
        <div className="flex flex-col gap-5 items-center">
            <span className="text-xl">{valor}</span>
            <div className="flex gap-5">
                <button onClick={() => setValor(valor + delta)}>+</button>
                <button onClick={() => setValor(valorAtual => valorAtual + delta)}>-</button>
            </div>
            <input type="number" value={delta} onChange={e => setDelta(+e.target.value)} />
        </div>
    )
}