import { useEffect, useState, useCallback } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])
    useEffect(() => {
        obterPersonagens()
    }, [])

    const obterPersonagens = useCallback(async () => {
        try{
            iniciarProcessamento()
            const res = await fetch('https://swapi.dev/api/people')
            const data = await res.json()
            setPersonagens(data.results)
        } finally {
            finalizarProcessamento()
            console.log('terminou')
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    return {
        personagens, processando
    }
}