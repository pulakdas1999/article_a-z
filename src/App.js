import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {useState} from 'react';

function App() {

  const [searchText, setSearchText] = useState('');
  
  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <div className='container'>
        <News searchText={searchText}/>
      </div>
    </>
  );
}

export default App;
