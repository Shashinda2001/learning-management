import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <p>&copy; {new Date().getFullYear()} LineNA. All rights reserved.</p>

        <div className='footer__links'>
            {["About", "Privacy Policy","Licensing", "Contact Us"].map((item)=>(

                <Link key={item} 
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className='footer__link'>
                {item} 
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Footer