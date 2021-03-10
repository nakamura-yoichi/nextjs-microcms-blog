import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <Link href="/">
                <h1>
                    <a>ブログだよ</a>
                </h1>
            </Link>
            <p>これはヘッダーコンポーネントだよ</p>
        </header>
    )
}

export default Header;