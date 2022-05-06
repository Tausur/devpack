import styles from '../styles/Navbar.module'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt="" height="40" width="40" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>01234786</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href={'/'} passHref>
          <li className={styles.listItem}>HomePage</li>
        </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo.png' alt='' height={90} width={110} />
          <li className={styles.listItem}>Evets</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href={'/cart'} passHref className={styles.cartClick}>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='' height={30} width={30} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
