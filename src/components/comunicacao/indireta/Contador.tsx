import { useState } from "react";
import Display from "./Display";
import Botoes from "./Botoes";

export default function Contador() {
    const [num, setNum] = useState<number>(0)
    function incrementar(n: number){
        setNum(num+n)
    }
    function decrementar(n: number){
        setNum(num-n)
    }

    return(
        <div>
            <Display valor={num} />
            <Botoes inc={incrementar} dec={decrementar}/>
        </div>    

    )
}