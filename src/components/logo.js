import React from 'react'
import { useStyles } from '../styles';

export default function Logo(props) {
    const styles = useStyles();
  return (
    <img 
    src='/images/logo.png' 
    className={props.large ? styles.largeLogo : styles.logo}
    ></img>
  );
}
