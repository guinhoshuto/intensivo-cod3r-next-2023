export default function Evento(){
    let count = 0
    function increment(){
        console.log(count++)
    }

    return (
        <div className={`
            bg-green-500
        `} onClick={increment}>
            Evento
        </div>
    )
}