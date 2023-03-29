import styles from './SideBar.module.css'

export default function SideBar() {
    return (
        <main>
            <div className={styles.sideBar}>
                <div className={styles.topContainer}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
            </div>
        </main>
    )
}