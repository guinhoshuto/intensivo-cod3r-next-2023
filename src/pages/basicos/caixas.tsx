import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa(){
    return (
        <div className={`
            flex
            gap-7
            p-7
        `}>
            <Caixa>ABC</Caixa>
            <Caixa>DEF</Caixa>
            <Caixa>GHI</Caixa>
            <Caixa>JKL</Caixa>
        </div>
    )
}