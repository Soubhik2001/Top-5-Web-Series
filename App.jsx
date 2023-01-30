
import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';

function ncard(val,ind,arr){
    return(
        <Card 
        key={val.id}
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.links}
        />
    );
}


React.DOM.render(
    <>

        <h1 className='heading_style'>List of top 5 Netflix Series in 2022</h1>
        {Sdata.map(ncard)};        
        
        
    </>

,document.getElementById("root")
);




export default App