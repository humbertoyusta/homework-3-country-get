import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <Link href={"/"}>
                Go Home
            </Link>
        </div>
    );
}