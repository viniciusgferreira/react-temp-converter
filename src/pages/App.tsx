import './App.css'
import List from '../components/Converter/List'
import styles from './App.module.scss'
import Title from '../components/Converter/Title'

function App() {
  return (
    <main className={styles.AppStyle}>
      <div>
        <Title />
        <List />
      </div>

    </main>
  )
}

export default App
