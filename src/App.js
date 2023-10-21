import { Container } from 'react-bootstrap';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import Wallpaper from './Components/Wallpaper/Wallpaper';
import Weather from './Components/Weather/Weather';
import { store } from './App/store';
import { Provider } from 'react-redux' ;


function App() {
  return (
    <div className="App">
     <Provider  store={store}>
     <Container>
              <Wallpaper />
             <SearchBar />
              <Weather />
        </Container>
     </Provider>
    </div>

  );
}

export default App;
