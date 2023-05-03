import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return (
        <div className={`
            flex
            justify-around
            items-center
            h-screen
        `}>
            <Circulo texto="A" />
            <Circulo texto="B" />
            <Circulo texto="C" quasePerfeito/>
        </div>
    )
}