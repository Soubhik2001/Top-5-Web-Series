
import React from 'react';
import ReactDOM from 'react-dom';
import Amazon from './Amazon';
import Card from './Cards';
import './index.css';
import Netflix from './Netflix';
import Sdata from './Sdata';

const favSeries='netflix';

const FavS=()=>{
if(favSeries==='netflix'){
    return(
        <Netflix/>
    );
}else{
    return(
        <Amazon/>
    );
}
}
function ncard(val,ind,arr){
    return(
        <Card
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
    );
}


ReactDOM.render(
    <>

        <h1 className='heading_style'>List of top 5 Netflix Series in 2022</h1>
        
        <FavS/>  
        
        
    </>

,document.getElementById("root")
);


