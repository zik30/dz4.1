import Todo from "../../components/todo/Todo"
import style from "./todosPage.module.css"
import {clsx} from "clsx";

const array = ["todo 1", "todo 2", "todo 3"]

function TodosPage(){
    return(
        <>
            <ul className={clsx(style.list)}>
                {
                    array.map(elem =><li className={clsx(style.listItem)}>{<Todo info={elem}/>}</li>)
                }
            </ul>
        </>
    )
}

export default TodosPage