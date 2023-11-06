import './App.css';
import DogList from './components/DogList';
import Votes from './components/votes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Doggie contest</h1>
        <h3>Vote for who you think is the cutest dog!</h3>
        <DogList />
        <Votes />
      </header>
    </div>
  );
}

export default App;
