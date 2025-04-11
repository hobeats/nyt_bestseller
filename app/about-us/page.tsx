import styles from "/app/styles/about.module.css";

export const metadata = {
  title: "About",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1>About us!</h1>
      <div>
        Welcome to the official explorer for The New York Times Best Seller list explorer.<br />
        We hope you enjoy your stay!
      </div>
    </div>
  );
}
