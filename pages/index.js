import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div id="homecontainer">
        <img className='logop' src="./pilotto.png" alt="pilotto logo" />
        <div className='buttonshome'>
          <Link href="/login"><button>Já sou cliente</button></Link>
          <Link href="/cadastro"><button >Quero ser cliente</button></Link>
        </div>
      </div>
    </>
  )
}
