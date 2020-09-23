import React, { useEffect, useState } from 'react'
import { string } from 'yup';

function News (props) {
    console.log(props,'props')
    let data =[]
    let country = (props.country);
    console.log(country,'country in news ')
    const [newsData, setNewsData ] = useState([])
    const [newsDataArray, setNewsDataArray ] = useState([])
    console.log(props.country,'props.country')
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=159c0758c8de40f88c39b7d6a46c750d`)
        .then(response => response.json())
        .then(response =>{
            console.log(response,'news api response')
            setNewsData(Object.entries(response.articles))
            console.log(response.articles,'response.article inside use effect')
            // setNewsDataArray(Object.entries(newsData))
           
           
            
        })
    },[country])
    
    const newsContent = newsData.map((element,pos) =>{
        return(
            <div className='news-articles' key={pos} >
                
                <h2>{element[1].title}</h2>
                <span>{element[1].author}</span>
                <span>{element[1].publishedAt}</span>
                {/* <img src={element[1].url}></img> */}
                <p>{element[1].content}</p>
            </div>
            
            )
    }) 
        // newsData.forEach(element => {
   // console.log(element[1].description,'element')
   

    

    console.log((newsData[0]),'News data  at line 20')

    // newsData.forEach(element => {
    //     console.log(element[1].description,'element')
       
    // })
    
    console.log(newsDataArray,'news data array');
    {console.log(props,'props')}
    return (
        <div>
            <h1> here, you will see top headlines of a country  </h1>
           {newsContent }
        </div>
        
    )
}

export default News