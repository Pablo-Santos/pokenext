import Image from "next/image"
import styles from '@/styles/About.module.css'

const about = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada velit quis velit placerat, eget ornare mauris consectetur. Morbi placerat placerat orci sit amet molestie. Quisque eget pulvinar mauris. Donec in sapien sollicitudin, pellentesque nulla nec, tempus leo. Nulla commodo eleifend quam, eget maximus diam tincidunt at.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
    </div>
  )
}

export default about