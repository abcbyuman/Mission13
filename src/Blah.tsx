import React from 'react';
import styles from './blah.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="container">
        <h1 className={styles.h1}>{props.saying}</h1>
      </div>
    </>
  );
}

export default TopBanner;
