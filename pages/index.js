import styles from '../styles/Home.module.css'

export default function Home(props) {
  const { posts } = props
  
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{posts.name}</a>
        </h1>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/hello')
  const posts = await res.json();
  return {
    props: {
      posts,
    }
  }
}
