import logo from './logo.svg';
import NavbarComponent from './components/templates/NavbarComponent';
import LargeCardComponent from './components/templates/LargeCardComponent';
import SmallCardComponent from './components/templates/SmallCardComponent';
import FooterComponent from './components/templates/FooterComponent';
import FormLogin from './components/FormLoginComponent';
import PokemonComponent from './components/PokemonComponent';

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
          </div>
        </div>
        <FooterComponent/>
      </body>
    </div>
  );
}

export default App;
