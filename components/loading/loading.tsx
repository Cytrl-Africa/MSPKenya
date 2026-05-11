"use client";

import styles from "./loadingCube.module.scss";

export default function LoadingCube() {
  return (
    <div className={styles.scene}>
      <div className={styles.cubeWrapper}>
        <div className={styles.cube}>
          <div className={styles.cubeFaces}>
            <div className={`${styles.cubeFace} ${styles.shadow}`} />
            <div className={`${styles.cubeFace} ${styles.bottom}`} />
            <div className={`${styles.cubeFace} ${styles.top}`} />
            <div className={`${styles.cubeFace} ${styles.left}`} />
            <div className={`${styles.cubeFace} ${styles.right}`} />
            <div className={`${styles.cubeFace} ${styles.back}`} />
            <div className={`${styles.cubeFace} ${styles.front}`} />
          </div>
        </div>
      </div>
    </div>
  );
}