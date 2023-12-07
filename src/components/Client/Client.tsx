import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/one.png';
import img2 from '../../assets/two.png';
import img3 from '../../assets/three.png';
import img4 from '../../assets/four.png';
import img5 from '../../assets/five.png';
import img6 from '../../assets/six.png';
import img7 from '../../assets/seven.png';
import img8 from '../../assets/eight.png';
import img9 from '../../assets/nine.png';
import img10 from '../../assets/ten.png';
import Image from 'next/image';

const Client = () => {
    return (
        <div>
             <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <Image src={img1} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img2} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img3} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img4} alt="" layout='responsive'/>
          </div>
          <div>
          <Image src={img5} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img6} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img7} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img8} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img9} alt="" layout='responsive'/>
          </div>
          <div className="image_wrapper">
          <Image src={img10} alt="" layout='responsive'/>
          </div>
         
        </Marquee>
      </div>
        </div>
    );
};

export default Client;