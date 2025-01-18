import Description from "../../components/description/Description";
import style from "./aboutPage.module.css"
import {clsx} from "clsx";

function AboutPage(){
    return(
        <>
            <h2 className={clsx(style.title)}>About Page</h2>
            <Description info={{title: "Title About Page", description: 'Description About Page'}}/>
        </>
    )
}
export default AboutPage