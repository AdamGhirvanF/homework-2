import logo from './logo.svg';
import NavbarComponent from './components/NavbarComponent';
import LargeCardComponent from './components/LargeCardComponent';
import SmallCardComponent from './components/SmallCardComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent/>
      </header>
      <body>
        <LargeCardComponent/>
        <div class="container mt-4">
          <h3 class="mb-3">Past Meetups</h3>
          <div class="row mb-5">
              <SmallCardComponent/>
              <SmallCardComponent/>
              <SmallCardComponent/>
          </div>
        </div>
        <FooterComponent/>
      </body>
    </div>
  );
}

export default App;
