import styles from '../../../styles/join.module.css'
import Link from "next/link"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { zev: data }
  }
}
const Join = ({ zev }) => {
  return (
    <div>
      <h1>Members</h1>
      {zev.map(zev => (
        <Link href = {"/Components/join/" + zev.id}key={zev.id}>
          <a className = {styles.single}>
            <h3>{zev.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Join;