import React from 'react'
import wallpaper from '../../assets/img/wallpaper.jpg'
import './Wallpaper.scss'

export default function Wallpaper() {
  return (
   <>
        <div className='position-fixed  d-flex top-0 bottom-0 end-0 start-0 Wallpaper-container '>
            <img src={wallpaper} alt="wallpaper" className='Wallpaper' />
        </div>
   </>
  )
}
