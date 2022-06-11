import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';

export default function News({searchText}) {

  const [searchResults, setSearchResults] = useState({
    articles: []
  });
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(searchText!=='') {
      setLoading(true);
      fetch(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=83680848794e4f628ced0d4353357116&page=${page}&pageSize=16`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(
            {
              articles: data.articles
            }
          )
          setTotal(data.totalResults);
          setLoading(false);
        })
        // console.log("Inside if of news");
        // console.log(searchResults.articles);
    }
    else{
      setLoading(true);
      fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=83680848794e4f628ced0d4353357116&page=${page}&pageSize=16`)
        .then(response=> response.json())
        .then(data => {
          setSearchResults(
            {
              articles: data.articles
            }
          )
          setTotal(data.totalResults);
          setLoading(false);
        })
        // console.log("Inside else of news");
        // console.log(searchResults.articles);
    }
  }, [searchText, page])

  const handlPrevClick = () =>{
    setPage(page-1);
  }

  const handlNextClick = () =>{
    setPage(page+1);
  }

  return (
      <div>
        {loading && <Spinner/>}
        <div className='container d-flex justify-content-end'>
          <button disabled={page<=1} onClick={handlPrevClick} className="btn btn-dark mt-3 mx-2">&larr; Previous page</button>
          <button disabled={Math.ceil(total/16)<(page+1)} onClick={handlNextClick} className="btn btn-dark mt-3 mx-2">More content &rarr;</button>
        </div>
        <div className='row'>
          
            {searchResults.articles.map((element) => {
            return  <div className='col-md-3' key={element.url}>
                      <Newsitem title={element.title?element.title:""} 
                      description={element.description?element.description:""} 
                      imageUrl={element.urlToImage?element.urlToImage:""} 
                      newsUrl={element.url?element.url:""} 
                      dateTime={element.publishedAt?element.publishedAt:''}
                      />
                    </div>
          })}
          
        </div>
      </div>
    );
}