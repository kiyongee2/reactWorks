import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    // <ColorContext.Provider value={{ color: 'red' }}>
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
    //</ColorContext.Provider>
  );
};

export default App;
