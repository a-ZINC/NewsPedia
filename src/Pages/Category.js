import React from 'react'
import {useLocation} from 'react-router-dom';
import Generallayout from '../Components/Generallayout';


const Category = () => {
  const location=useLocation();
  const l=location.pathname.split('/');
  const category=l.at(l.indexOf('category')+1);
  return (
      <div><div>
        <h1>Category:</h1>
        <h1>{category.toUpperCase()}</h1>
      </div>
      <Generallayout></Generallayout></div>
    
  )
}

export default Category