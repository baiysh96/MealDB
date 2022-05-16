import React from 'react';
import {Link} from "react-router-dom";

const BrowseNavigate = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(alphabet)
    return (
        <div>
         <div className="browse-buttons">
             {
                 alphabet.map((word,idx) => (
                     <Link to={`/browseinfo/${word}`} className="browse-btn" key={idx}>{word.toLocaleUpperCase()}<strong style={{marginLeft:"5px"}}>/</strong></Link>
                 ))
             }
         </div>

        </div>
    );
};

export default BrowseNavigate;