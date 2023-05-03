export default function Circulo(props: any){
    return (
        <div className={`
            h-64
            w-64
            bg-cyan-500
            rounded-full
            flex
            justify-center
            items-center
        `}>
            {props.children}
        </div>
    )
}