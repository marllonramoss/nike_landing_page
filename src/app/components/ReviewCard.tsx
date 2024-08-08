import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { star } from '../../../public/assets/icons';

interface ReviewCardProps {
    imgURL: any;
    customerName: string;
    rating: number;
    feedback: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <Image src={props.imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='mt-6 max-w-sm text-center info-text'>{props.feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <Image src={star} alt='customer' width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl font-montserrat text-slate-gray'>{props.rating}</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{props.customerName}</h3>
    </div>
  )
}

export default ReviewCard
