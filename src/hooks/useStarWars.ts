import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])
    async function obterPersonagens() {
        try{
            iniciarProcessamento()
            const res = await fetch('https://swapi.dev/api/people')
            const data = await res.json()
            setPersonagens(data.results)
        } finally {
            finalizarProcessamento()
            console.log('terminou')
        }
    }

    return {
        personagens, obterPersonagens
    }
}