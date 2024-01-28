import Navbar from "@/_components/common/Navbar/Navbar"
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <Navbar />
        </div>
    );
}

export default Header;