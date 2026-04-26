import { type JSX } from 'react'

export default function Images(): JSX.Element {
  return (
    <div>
        <img src="https://plus.unsplash.com/premium_photo-1664391859117-39b8ac442b94?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Random Image 1" 
        style={{width: 100, height: 100}}
        />
        <br />
        <img src="Nature.avif" className="Nature" alt="Random Image 2" />
    </div>
  )
}

