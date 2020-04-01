import React from 'react';
import Lottie from 'react-lottie';

export default function Animated({name, width, height}){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: name,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
      
    return (
        <Lottie 
            options={defaultOptions}
            height={height}
            width={width}
        />
    )
}