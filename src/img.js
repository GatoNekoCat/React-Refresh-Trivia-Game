import React, {useEffect, useState } from 'react';
import './styles.css';

//Image will return an <img> with a relevant image link.
const Image = () => {
    //state
    const [curImage, setCurImage] = useState([0]);
    return(
    <img
        className='theDude fade-in'
        onClick={console.log(curImage + " " + setCurImage)}
        src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2118,x_41,y_0/f_auto,q_auto,w_1100/v1554931540/shape/mentalfloss/61708-gramercy_pictures.jpg"
        alt="I dig what you've done with the place Jackie"
    />
    )

}
export default Image;