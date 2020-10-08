// libraries
import React from 'react';
import { Link } from 'react-router-dom';

// services
import route from '../../../routes/routes';

const Home = () => {
   return (
      <div className="home">
         <img className="home__img" src="" alt="" />
         <h1 className="home__title">Who wants to be a millionaire?</h1>
         <Link to={route.Game}>
            <button className="btn home__btn" type="button">
               Start
            </button>
         </Link>
      </div>
   );
};

export default Home;
