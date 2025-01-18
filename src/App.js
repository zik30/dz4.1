import './App.css';
import TodosPage from "./pages/todosPage/TodosPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import MainPage from "./pages/mainPage/MainPage";


function App() {
  return (
    <div className="App">
        <MainPage/>
        <AboutPage/>
        <TodosPage/>
    </div>
  );
}

export default App;
