import '../../App.css';
import About from "../../components/about/About";
import Title from "../../components/title/Title";

function MainPage() {

    return(
        <div>
            <About title="Some title"
                   body="Some body"
            />
            <Title text="Hello World!"/>
        </div>
    )
}


export default MainPage;