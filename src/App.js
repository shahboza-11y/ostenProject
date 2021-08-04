import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Container/Header';
import PageOne from './Container/PageOne/PageOne'
import Services from './Container/Services/Services';
function App() {
  return (
    <div className="App">
      <Header />
      <PageOne/>
      <Services/>
    </div>
  );
}

export default App;

