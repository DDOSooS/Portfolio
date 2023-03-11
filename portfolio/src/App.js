import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
  return (
    <>
    <Header/>
    <main className="mainContent">
      <Home/>
    </main>
    </>
  );
}

export default App;
