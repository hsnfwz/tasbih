// react
import { useState } from 'react';

// css
import styles from './Tasbih.module.css';


const Tasbih = () => {
  // const DEFAULT_POSITION = 50;
  // const POSITION_SHIFT = 2.5;

  // const [position, setPosition] = useState<number>(DEFAULT_POSITION);
  
  // const set = [];
  // const setOneLength = 34;
  // const setTwoLength = 33;
  // const setThreeLength = 33;

  // let i = 0;
  // while (i < setOneLength) {
  //   const circle = (<div className={styles.circleOne}></div>);
  //   set.push(circle);
  //   i++;
  // }

  // let j = 0;
  // while (j < setTwoLength) {
  //   const circle = (<div className={styles.circleTwo}></div>);
  //   set.push(circle);
  //   j++;
  // }

  // let k = 0;
  // while (k < setThreeLength) {
  //   const circle = (<div className={styles.circleThree}></div>);
  //   set.push(circle);
  //   k++;
  // }

  // const handleAction = () => {
  //   const newPosition = position - POSITION_SHIFT;
  //   setPosition(newPosition);
  // }

  // const handleReset = () => {
  //   const newPosition = DEFAULT_POSITION;
  //   setPosition(newPosition);
  // }

  const [count, setCount] = useState<number>(0);

  const handleAction = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const handleReset = () => {
    const newCount = 0;
    setCount(newCount);
  }

  return (
    <>
      {/* <div className={styles.outerContainer}>
        <div className={styles.innerContainer} style={{ left: `${position}%` }}>
          {set.map(circle => (
            <>
              { circle }
            </>
          ))}
        </div>
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <button className={styles.actionButton} onClick={handleAction}></button>
          <button className={styles.resetButton} onClick={handleReset}></button>
        </div>
      </div> */}
      <div className={styles.container}>
        <div className={styles.name}>
          <h1>Tasbih</h1>
        </div>
        <div className={styles.count}>
          <h1>{ count }</h1>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.resetButton} onClick={handleReset}></button>
          <button className={styles.actionButton} onClick={handleAction}></button>
        </div>
      </div>
    </>
  );
}

export default Tasbih;
