import { Theme, useTheme } from "@/hooks/use-theme";
import { useEffect } from "react";

import styles from "./header.module.css";

const Header = (): JSX.Element => {
  const { setTheme, isDarkTheme } = useTheme();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Chat MVP</h1>
      <p className={styles.description}>
        Chat MVP with wallet and crypto-currency
      </p>
      <button
        className={styles.themeButton}
        onClick={() => setTheme(isDarkTheme ? Theme.light : Theme.dark)}
      ></button>
    </header>
  );
};

export default Header;
