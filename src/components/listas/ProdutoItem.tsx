import Produto from "@/model/Produto"

interface ProdutoItemProps{
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps){
    return(
        <div>
            {props.produto.nome}
        </div>
    )
}