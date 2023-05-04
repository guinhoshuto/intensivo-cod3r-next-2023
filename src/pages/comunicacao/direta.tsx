import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="mb-10 text-5xl">Comunicação Direta</h1>
            <Avo nome="A" sobrenome="B"/>
        </div>
    )
}