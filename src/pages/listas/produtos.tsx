import ProdutoItem from "@/components/listas/ProdutoItem";
import produtos from "@/constants/produtos";
import Produto from "@/model/Produto";

export default function PaginaProdutos(){
    const items = produtos
    function adicionarProduto(produto: Produto){

    }

    return (
        <div>
            {items.map(p => 
                <ProdutoItem key={p.id} produto={p} comprar={adicionarProduto}/>
            )}
        </div>
    )
}