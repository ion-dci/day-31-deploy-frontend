import styles from "./Results.module.css";

export function Results({ data }) {
  return (
    <div className={styles.container}>
      {data.map((guitar) => (
        <div className={styles.guitar}>
          <p className={styles.brand}>{guitar.brand}</p>
          <p className={styles.model}>{guitar.model}</p>
          <p className={styles.price}>€{guitar.price}</p>
          <p className={styles.color}>Color: {guitar.color}</p>
        </div>
      ))}
    </div>
  );
}
