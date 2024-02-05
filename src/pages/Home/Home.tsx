import './Home.scss'

import { redirect } from 'react-router-dom';
import CardModel from '../../components/ui/Card/CardModel'
import axios from 'axios';
import { Spin } from 'antd';
import { useEffect, useState } from 'react'
const Home = () => {

  const [loading, setLoading] = useState(false);
  const [news, setNews ] = useState([]);
  const [auth, setAuth] = useState(true);

  // https://jsonplaceholder.typicode.com/todos/1

  interface setdata{
    _id: number,
    title: string,
  }

  useEffect(() => {
    const apiUrl = ' https://jsonplaceholder.typicode.com/todos';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setNews(allPersons);
      setLoading(true)
    });
  }, [setNews]);

  console.log(news)


  if(auth){
    return(
          <div className='zone_containner'>
        <h1>News</h1>
        <div className="main__cont">
        {loading? <div>not</div> : (<Spin />) }
        </div>
    </div>
    )
  }
  // else{
  //   return redirect("/auth");
  // }
  

}

export default Home
