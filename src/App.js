import './App.css';
import Color from './components/Color/Color';

function App() {
  return (
    <div className="App">
      <Color
        text='blue'
        color='blue'
        textColor='#fff'
      />
      <Color
        text='green'
        color='green'
        textColor='#bbb'
      />
      <Color
        text='orange'
        color='orange'
        textColor='#000'
      />
    </div>
  );
}

export default App;
