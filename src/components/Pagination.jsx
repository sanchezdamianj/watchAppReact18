import React from 'react';
import '../css/App.css';
import bg from '../assets/footer-bg.jpg';



const Pagination = props => {

  return (
    <div className="pagination" style={{ backgroundImage: `url(${bg})`}}>
        <h2>
        {props.children}
        </h2>
    </div>
  )
}


export default Pagination;