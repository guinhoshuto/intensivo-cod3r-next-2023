interface GridProps{
    children: any
    cols: number
}

export default function Grid(props: GridProps){
    return(
        <div className={`grid gap-4 grid-cols-${props.cols} w-full`}>
            {props.children}
        </div>
    )
}