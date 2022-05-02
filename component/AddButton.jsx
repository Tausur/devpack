import styles from '../styles/Add.module.css'

const AddButton = ({setClose}) => {
  return (
    <div className={styles.mainAddButton} onClick={()=>setClose(false)}>
      Add new pizza
    </div>
  )
}

export default AddButton