import Image from 'next/image';
import React from 'react'

interface ButtonProps {
    label: string;
    iconUrl?: string;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border
    ${props.backgroundColor ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}` : `bg-coral-red text-white border-coral-red `}}
     rounded-full ${props.fullWidth && `w-full`}`}>
        {props.label}
    {props.iconUrl && <Image 
    src={props.iconUrl}
    alt='arrow right icon'
    className='ml-2 rounded-full w-5 h-5'
    />}

        {/* img */}
    </button>
  )
}

export default Button
Button