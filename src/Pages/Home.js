import React from 'react'
import Slide from '../homeComponents/Slide'
import Trend from '../homeComponents/Trend'
import Homecategory from '../homeComponents/Homecategory'
import Generallayout from '../Components/Generallayout'

const Home = () => {
  return (
          <>
            <Slide></Slide>
            <Trend/>
            <Homecategory></Homecategory>
            <Generallayout></Generallayout>
          </>
  )
}

export default Home