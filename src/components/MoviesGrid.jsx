import React, {useState, useEffect, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tmdbApi, { category, movieType, tvType } from '../api/tmdbApi';
import '../css/App.css';
import Button, { OutlineButton } from './Button';
import MovieCard from './MovieCard';
import Input from './Input';
import { BsSearch } from "react-icons/bs";
 

const MoviesGrid = (props) => {

    const [items, setItems] = useState([]);
    const [page, setPage]   = useState(1);
    const [totalPage, setTotalPage]   = useState(0);
    const {keyword} = useParams();
    useEffect(() => {
        const getList = async() => { 
            let res = null;
            if(keyword === undefined){
                const params = {};
                switch(props.category){
                    case category.movie:
                        res = await tmdbApi.getMoviesList(movieType.upcoming, {params})
                        break;
                    default:
                        res = await tmdbApi.getTvList(tvType.popular, {params});
                }
            } else {
                    const params = {
                        query: keyword
                                     }
                    res = await tmdbApi.search(props.category, {params})
            }
            setItems(res.results);
            setTotalPage(res.total_pages);
        }
    getList();
    }, [props.category,keyword]);
    
    const loadMore = async () =>{
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            switch(props.category) {
                case category.movie:
                    response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, {params});
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search(props.category, {params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }
    
  return (

<>
    <div className="section mb-3">
        
        <MovieSearch category={props.category} keyword={keyword} items={items}/>
   
   
    </div>
    <div className="movie-grid">
      {
        items.map((item,id) =>{
          return   <MovieCard category={props.category} item={item} key={id} keyword={keyword}/>
        })
      }
    </div>
    {
        page < totalPage? (
            <div className="movie-grid__loadmore">
                <OutlineButton className="small" onClick={loadMore} >Load more!</OutlineButton>
            </div>
        ):null
    
    }
    
</>

  )
}



const MovieSearch = props => {

    const history = useNavigate();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>{<BsSearch />}</Button>
        </div>
    )
}

export default MoviesGrid;