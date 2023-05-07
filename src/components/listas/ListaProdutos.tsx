import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutos{
    produtos:Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutos){
    return(
        <div>
            {props.produtos.map(p => <ProdutoItem key={p.id} produto={p} comprar={props.comprar}/>)}
        </div>
    )
}