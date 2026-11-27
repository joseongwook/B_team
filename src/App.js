import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Topbanner from './layout/Topbanner';

function App() {
  return (
    <div className="App">
      <Topbanner/>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;