import aa from "./description.module.css"
import {clsx} from "clsx";

function Description({info}){
    return(
        <>
            <h3 className={clsx(aa.title)}>{info.title}</h3>
            <p className={clsx(aa.description)}>{info.description}</p>
        </>
    )
}

export default Description