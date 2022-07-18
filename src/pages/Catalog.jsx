import React from 'react';

import { useParams } from 'react-router';

import Pagination from '../components/Pagination';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/MoviesGrid';

const Catalog = () => {

    const { category } = useParams();

    return (
        <>
            <Pagination>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </Pagination>
           
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    );
}

export default Catalog;