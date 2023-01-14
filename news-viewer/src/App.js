import './App.css';
import { useCallback, useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  //라우터 적용
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  )

  /*const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );*/

  // const [data, setData] = useState(null) ;
  /*const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    });
  };*/
  /*const onClick = async () => {
    try{
      const response = await axios.get(
        //'https://jsonplaceholder.typicode.com/todos/1'
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=df000fd1bb72411499fb9f0b094b6cc2'
      );
      setData(response.data);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );*/
}

export default App;
