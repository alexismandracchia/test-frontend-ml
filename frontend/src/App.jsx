import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import BarSearch from './Components/BarSearch';
import '../node_modules/@drewbot/sass-flexbox-grid/public/sass-flexbox/main.css'

function App() {
  const search = (new URL(document.location)).searchParams.get('search') || '';
  console.log(search)

  return (
    <div className="App">
      <Router>
        <BarSearch search={search} />
        <Public search={search} />
      </Router>
    </div>
  );
}

export default App;
