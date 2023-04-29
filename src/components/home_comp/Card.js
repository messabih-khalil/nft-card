import React from 'react';

import '../../static/css/card.css';
import { Footer } from './Footer';
import { Desc } from './Desc';
import { Image } from './Img';
export const Card = () => {
  return (
    <>
      <div className="card">
        {/* Image */}
        <Image></Image>

        {/* contetn */}

        <Desc></Desc>

        <hr />

        {/* Footer */}
        <Footer></Footer>
      </div>
    </>
  );
};
