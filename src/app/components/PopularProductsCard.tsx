import Image from 'next/image';
import React from 'react'
import { star } from '../../../public/assets/icons';

interface PopularProductsCardProps {
    imgURL: string;
    price: string;
    name: string;
}


const PopularProductsCard = (props: PopularProductsCardProps) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={props.imgURL} alt={props.name} className='w-[280px] h-[280px]'/>
      <div className='mt-8 flex justify-start gap-2.5'>
        <Image src={star} alt='rating' width={24} height={24}/>
        <p className='font-montserrat text-xl leading-normal'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{props.name}</h3>
       <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{props.price}</p>
    </div>
  )
}

export default PopularProductsCard
