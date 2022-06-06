import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import { FCC } from "src/types/react";

import styles from "./layout.module.css";

const Layout: FCC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
