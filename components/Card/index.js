import styles from './Card.module.css'

export default function Card({ title, desc, color1, color2 }) {
    const cardStyle = {
        backgroundImage: `linear-gradient(to bottom left, ${color1}, ${color2})`,
    };

    return (
        <main>
            <div className={styles.card} style={cardStyle}>
                <div className={styles.title}>{title}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
        </main>
    );
}
