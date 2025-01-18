import bb from "./todo.module.css"
import {clsx} from "clsx";

function Todo({info}){
    return(
        <>
            <p className={clsx(bb.pgit)}>{info}</p>
        </>
    )
}

export default Todo