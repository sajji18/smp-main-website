"use client"
import smpLogo from "@/images/SMP-Logo.png"
import styles from "./Navbar.module.css";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    console.log(typeof window !== 'undefined');
    const router = useRouter();
    
    return (
        <div className={styles.navbar_main}>
            <div className={styles.navbar_main_left}>
                <div className={styles.img_holder_navbar}>
                    <Image
                        src={smpLogo}
                    />
                </div>
                <div className={styles.smp_heading_navbar}>
                    <Link href={"/"}><span>SMP</span>-IITR</Link> 
                </div>
            </div>
            <div className={styles.navbar_main_right}>
                <ul>
                    <li><Link href={"/freshers-section"}>Freshers Section</Link></li>
                    <li><Link href={"/mentors"}>Mentors</Link></li>
                    <li><Link href={"/blogs"}>Blogs</Link></li>
                    <li><Link href={"/events"}>Events</Link></li>
                </ul>
                <button onClick={() => router.push("/about-us")}>
                    About us
                </button>
            </div>
        </div>
    );
}

export default Navbar;
