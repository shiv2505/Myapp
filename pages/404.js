import Link from "next/link";
import styles from "../styles/404.module.css"
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 1500)
    }, [])
    return (
        <div className="not-found">
            <h1 className={styles.title}>Oooops...404 Error</h1>
            <h2 className={styles.text}>This Page Cannot Be Found</h2>
            <p className={styles.text}> Please, Go Back To Previous
                <Link href="/"><a className={styles.btn}>HomePage</a></Link></p>
        </div>
    );
}

export default NotFound;