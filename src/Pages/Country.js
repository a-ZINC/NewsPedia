
import Generallayout from '../Components/Generallayout'
import {useLocation} from 'react-router-dom'

const Country = () => {
    const location=useLocation();
    const l=location.pathname.split('/');
    const country=l.at(l.indexOf('country')+1);
  return (
        
            <div><div>
              <h1>Country:</h1>
              <h1>{country}</h1>
            </div>
            <Generallayout></Generallayout></div>
  )
}

export default Country