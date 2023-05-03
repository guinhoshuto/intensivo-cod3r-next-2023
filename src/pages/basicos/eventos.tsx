import Evento from "@/components/basicos/Evento";

export default function PaginaEventos() {
    return (
        <button className={`
            flex 
            flex-wrap 
            gap-5 
            items-center 
            justify-center
        `}>
            <Evento />
        </button>
    )
}