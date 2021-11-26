import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CallToAction = () => {
    return (
        <Link href="https://api.whatsapp.com/send?phone=573116703825">
          <a>
            <div className="fixed bottom-4 right-4 z-50">
              <Image src={'/whatsapp.png'} width="45" height="45" />
            </div>
          </a>
        </Link>
      )
}
