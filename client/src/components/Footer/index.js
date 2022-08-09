// imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import font awesome componenet
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // import selected icons
import styles from './footer.module.css';
import { Typography } from '@mui/material';


function Footer() {
    return (
        <footer className={styles.footer}>
            <Typography
            variant='h6'
            color='textSecondary'
            >
            &copy; A Dish A Day 2022
            </Typography>
            <ul className={styles.list}>
                <li>
                    <a href="https://github.com/MNlegion/A-Dish-A-Day">
                    <FontAwesomeIcon icon={ faGithub } size="lg" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}




export default Footer;