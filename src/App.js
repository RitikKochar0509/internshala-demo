import React from 'react';
import Carousel from "react-elastic-carousel";
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Internships from './Internships';
import Item from "./Item";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1300, itemsToShow: 2 },
  

];
function App() {
  const mysyle = {
    width:"100%"
  }
  return (
    <div className="App">

        <Header/>

        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://www.careerplanetinfotech.com/blog/wp-content/uploads/2017/09/Job-opportunities.jpg" alt="" /></Item>
          <Item><img src="https://thumbs.dreamstime.com/b/internship-checklist-concept-internship-colored-pencils-keywords-written-white-background-141126169.jpg" alt="" /></Item>
          <Item><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbcldzqLm4SwIJtGcdd_9AfiIqc9S9533uw&usqp=CAU" alt="" style = {mysyle}/></Item>
          <Item><img src="https://blog.internshala.com/wp-content/uploads/2020/10/Internshala-Training.jpg" alt="" /></Item>
          
        </Carousel>

        
                
        <Internships/>

        <Footer/>
    </div>
  );
}

export default App;
