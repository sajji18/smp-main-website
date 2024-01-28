import styles from "./Footer.module.css";
import Image from "next/image";
import smpLogo from "@/images/SMP-Logo.png"
import iitrLogo from '@/images/IITR-Logo.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_main}>
                <div className={styles.footer_main_top}>
                    <div className={styles.footer_main_top_heading}>
                        <span className={styles.footer_main_top_heading_1}>SMP</span>
                        <span className={styles.footer_main_top_heading_2}>-IITR</span>
                    </div>
                    <div className={styles.footer_main_top_logo}>
                        <Image 
                            src={smpLogo}
                            width={52.8}
                            height={51.36}
                        />
                        <Image 
                            src={iitrLogo}
                            width={52.8}
                            height={52.8}
                        />
                    </div>
                </div>
                <div className={styles.footer_main_middle}>
                    <hr />
                </div>
                <div className={styles.footer_main_bottom}>
                    <table className={styles.footer_main_bottom_table}>
                        <thead >
                            <tr className={styles.footer_main_bottom_table_head_row}>
                                <td className={styles.footer_main_bottom_table_head_1}>Follow</td>
                                <td className={styles.footer_main_bottom_table_head_2}>Help</td>
                                <td className={styles.footer_main_bottom_table_head_3}>Visit</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.footer_main_bottom_table_row_1}>
                                <td className={styles.footer_main_bottom_table_row_1_option_1}>Facebook</td>
                                <td className={styles.footer_main_bottom_table_row_1_option_2}>Contact us</td>
                                <td>Office of DoSW</td>
                            </tr>
                            <tr className={styles.footer_main_bottom_table_row_2}>
                                <td className={styles.footer_main_bottom_table_row_2_option_1}>LinkedIn</td>
                                <td className={styles.footer_main_bottom_table_row_2_option_2}>Become a Mentor</td>
                                <td>
                                    Indian Institue of Technology Roorkee 
                                    <br /> 
                                    Roorkee, Haridwar District, Uttrakahand, India
                                    <br />
                                    Pin: 247667
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </footer>
    );
}

export default Footer;