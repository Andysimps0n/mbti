'use client'
 
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  return (
    <div className="main-cover border">

      <div className="start-button" onClick={()=>{router.push('/test')}}></div>
    </div>

  );
}
