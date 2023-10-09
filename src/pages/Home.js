import React from 'react'
import MainComponent from '../components/MainComponent'
import Row from '../components/RowComponent'
import requests from '../Requests'
const Home = () => {
  return (
    <div>
      <MainComponent/>
      <Row rowId="1" title="Upcoming" fetchURL={requests.requestUpcoming}/>
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular}/>
      <Row rowId="3" title="Trending" fetchURL={requests.requestTrending}/>
      <Row rowId="4" title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row rowId="5" title="Horror" fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home




// Commands to deploy our app
// -npm i  -g firebase-tools

// Firebase login

// -Firebase init 

// -Select - hosting -configure

//  -existing-build

// -Set to build folder (important)

// -yarn run build

// Firebase deploy

// Hosted at : https://movie-site-react-tailwind.web.app