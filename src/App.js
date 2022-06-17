import './App.css';

function Header () {
  return (
      <div>
        <div>
          < h1>Hello world</h1>
          </div>
      </div>
  )
}

function Footer() {
    return (
        <div>
            <h2>footer</h2>
        </div>
    )
}
function AboutUs() {
    return (
        <div>
            <h2>About US</h2>
        </div>
    )
}



function App() {
  return (
    <div className="Container">
      App js
        <Header/>
        <Footer/>
        <AboutUs/>
    </div>
  );
}

export default App;
