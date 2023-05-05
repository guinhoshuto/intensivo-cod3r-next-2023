interface IfProps {
    teste: boolean;
    children: any;
}

export default function IF(props: IfProps){
    if(props.teste){
        return props.children
    } else{
        return null
    }
}