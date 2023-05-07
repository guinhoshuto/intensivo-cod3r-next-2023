import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import { useState } from "react"

interface CarrinhoProps{
    items: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps){
    const [items, setItems] = useState<ItemCarrinho[]>([])

    return(
        <div></div>
    )
}