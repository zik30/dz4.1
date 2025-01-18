import Description from "../../components/description/Description";
import style from "./mainPage.module.css"
import {clsx} from "clsx";

function MainPage(){
    return(
        <>
            <h2 className={clsx(style.title)}>Main Page</h2>
            <Description info={{title: "Title Main Page", description: "Description Main Page"}}/>
        </>
    )
}

export default MainPage