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
            <Image src={img1} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img2} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img3} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img4} alt="" height={200} width={200}/>
          </div>
          <div>
          <Image src={img5} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img6} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img7} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img8} alt="" height={200} width={200}/>
          </div>
          <div className="image_wrapper">
          <Image src={img9} alt="" height={200} width={200}/>
          </div>
         
        </Marquee>
      </div>
        </div>
    );
};

export default Client;