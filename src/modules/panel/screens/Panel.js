// libraries
import React from 'react';

// services
import db from '../../../db/questions.json';

const Panel = () => {
   return (
      <div className="panel">
         <h1>Control Panel</h1>

         <ul>
            {db.map((question) => {
               return (
                  <li>
                     <div>
                        <p>{question.text}</p>
                        <ul>
                           {question.options.map((option) => {
                              const key = Object.keys(option)[0];
                              const value = Object.values(option)[0];

                              return (
                                 <li style={{ color: question.correctOptions.includes(key) ? 'red' : 'black' }}>
                                    {key} : {value}
                                 </li>
                              );
                           })}
                        </ul>
                        <br />
                        <p>Win: ${question.win}</p>
                     </div>
                     <br />
                     <br />
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Panel;
