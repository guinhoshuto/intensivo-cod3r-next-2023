import ImagemAleatoria from "@/components/hooks/ImagensAleatoria";

export default function PaginaImagens(){
    return (
        <div className={`
            flex
            justify-center
            items-center
            h-screen
        `}>
            <ImagemAleatoria />
        </div>
    )
}