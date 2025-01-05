
import './App.css';

function Title() {
  return(
      <>
        <h3>TitleTitleTitleTitle</h3>
      </>
  )
}

function Header() {
  return(
      <>
        <h1>Hello my friends! I am Header</h1>
        <Title/>
      </>
  )
}

function Content() {
  return (
      <>
        <p>And I am useless text (Content)! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, tempore.</p>
        <Title/>
      </>
  )
}

function Footer() {
  return(
      <>
        <h2>And at last, I am Footer!</h2>
        <Title/>
      </>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
