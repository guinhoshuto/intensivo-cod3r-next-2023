import Image from "next/image";

export default function Background(){
    return(
        <Image 
            src='https://source.unsplash.com/featured/' 
            fill 
            alt="bg" 
            className="-z-50"
            />
    )
}