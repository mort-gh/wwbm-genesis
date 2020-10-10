// libraries
import React from 'react';
import { Link } from 'react-router-dom';

// services
import route from '../../../routes/routes';

// images
import likeSvgPath from '../../../static/svgs/like.svg';

const Home = () => {
   return (
      <div className="home">
         <img className="home__img" src={likeSvgPath} alt="" />
         <div className="home__block">
            <h1 className="home__title">Who wants to be a millionaire?</h1>

            <Link to={route.Game} className="home__btn_link">
               <button className="btn home__btn" type="button">
                  <span className="btn-text">Start</span>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default Home;
