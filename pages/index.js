import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className ={styles.container}>
      <h1 className ={styles.title}>Home Page</h1>
      <p className ={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </p>
      <p className ={styles.text}>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
      </p>
      <Link href = "/Components/join">
        <a className ={styles.btn}>Become Member</a>
      </Link>
    </div>
  )
}
