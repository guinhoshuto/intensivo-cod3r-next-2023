import Tabela from "@/components/listas/TabelaSerieA"

export default function PaginaListaBasica(){ 
    const lista = [
        'A', 'B', 'c1', 'd1', 'ba', 'xpto' 
    ]

    return(
        <div>
            <Tabela times={lista} />
        </div>
    ) }