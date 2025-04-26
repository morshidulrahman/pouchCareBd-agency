import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface ButtonProps {
  text: string
  href: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, href, className }) => {
  return (
    <Link href={href} className={`group flex items-center ${className ? className : ""}`}>
      <button className="bg-zinc-800/70 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-700/50 transition-colors capitalize cursor-pointer">
        {text}
      </button>
      <div className='bg-primary w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300'>
        <ArrowRight className='text-black -rotate-45 group-hover:rotate-0 transition-all duration-300 cursor-pointer'/>
      </div>
    </Link>
  )
}

export default Button