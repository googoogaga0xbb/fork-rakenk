import React from 'react'
import CardPhoto from '../../../public/signalCard.svg'
import Image from 'next/image'
const SignalCard = () => {
  return (
    
    <Image src={CardPhoto}/>  // bu kısmın backgroundunu figmadan indiremedim direk hepsini indirdim :(
  )
}

export default SignalCard