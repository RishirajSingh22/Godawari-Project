import React from 'react'
import CapacitySnapshot from './snapshot1'
import styles from '../bussinessHomeComponent/Styles/snapshot.module.css'
import Snapshot2 from './snapshot2'
import ImageSection from './ImagesSection'


function Snapshot() {
  return (
    <div className={styles.snapshotSection}>
      <CapacitySnapshot/>
      <Snapshot2/>
      <ImageSection/>
    </div>
  )
}

export default Snapshot
