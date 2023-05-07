interface TabelaProps{
    times: string[]
}

export default function Tabela(props: TabelaProps) {
    return(
        <ol>
            {props.times.map(t => 
               <li key={t}>{t}</li>
            )}
        </ol>
    )
}