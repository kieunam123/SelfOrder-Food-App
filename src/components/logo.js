import React from 'react'
import { useStyles } from '../styles';

export default function Logo() {
    const styles = useStyles();
  return (
    <img src='/images/logo.png' className={styles.largeLogo}
    ></img>
  );
}
