import React from 'react'

function SocialButton({icono}) {
  return (
    <div className='icon-container border border-black rounded-circle py-3 px-3'>
       <a href="#"><i className={icono}></i></a>
    </div>
  )
}

export default SocialButton