"use client"
import Navbar from "@/_components/common/Navbar/Navbar"
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


const Header = () => {
    // const router = useRouter();
    const pathName = usePathname();
    const [isTransparent, setIsTransparent] = useState(true)
    const [hasSmoothScrolled, setHasSmoothScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const targetScrollPosition = Math.ceil(scrollPosition / viewportHeight) * viewportHeight;

            setIsTransparent(scrollPosition <= viewportHeight);

            if (!hasSmoothScrolled && scrollPosition % viewportHeight !== 0) {
                // If scrolling is not at a complete viewport height and smooth scroll hasn't happened yet
                setHasSmoothScrolled(true);

                window.scrollTo({
                    top: targetScrollPosition,
                    behavior: 'smooth',
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isTransparent, hasSmoothScrolled]);
    
    const isAboutUsPage = (pathName === '/about-us' || pathName === '/about-us/')

    return (
        <div 
            className={styles.header}
            style={{ backgroundColor: isTransparent ? (isAboutUsPage ? 'transparent' : 'white') : ('white'),
                color: isTransparent ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <Navbar />
        </div>
    );
}

export default Header;