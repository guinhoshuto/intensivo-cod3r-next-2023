import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return (
        <div className={`
            flex
            justify-around
            items-center
            h-screen
        `}>
            <Circulo>1</Circulo>
            <Circulo>2</Circulo>
            <Circulo>3</Circulo>
        </div>
    )
}