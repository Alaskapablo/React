import React from 'react';
import { Button } from 'reactstrap';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';

// class App extends React.Component{
//   render(){
//     return (
     
//     );
//   }
// }

function App (props){
  return (
    <div>
      <Headers/>
      <Article/>
      <Footer/>
      <Button color="danger">Danger!</Button>
    </div>
  );
};

export default App;
