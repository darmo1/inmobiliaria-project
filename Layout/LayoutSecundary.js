import { useRouter } from 'next/router';
import React from 'react'
import { BannerPromo } from '../components/BanerPromo';
import Title from '../components/Title'

const LayoutSecundary = (props) => {

    const arrayImage = [
        '/banner1.jpg',
        '/banner2.jpg',
        '/build.jpg',
      ]

    function imageRandom(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const { pathname } = useRouter();
    return (
        <div className='max-w-4xl mx-auto'>
            <Title pathname={pathname}  name={ props?.name || undefined }/> 
            {props.children}
             {/*  <BannerPromo image={arrayImage[imageRandom(0, arrayImage.length-1)]} />  */}
            { props?.showBanner 
                ? null 
                : null
            }
        </div>
    )
}

export default LayoutSecundary
