'use client'
 
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  return (
    <div className="main-cover border center maslow">

      <div className="start-button" onClick={()=>{router.push('/test')}}>매슬로의 욕구 단계 테스트</div>
    </div>

  );
}
