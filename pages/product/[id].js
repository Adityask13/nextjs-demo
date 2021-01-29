import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import database from '../../config/fire-base'
import styles from '../../styles/Home.module.css'

const product = () => {
    const router = useRouter()
    const { id } = router.query
    const [product, setProduct] = useState([])

    useEffect(() => {
        database
            .ref('products/'+ id)
            .once('value')
            .then((snap) => {
                setProduct(snap.val())
            })        
    }, [product])
    
    if (product) {
        return (
            <section className={styles.main}>
                <p>{product.name}</p>
                <div className={styles.card}>
                    <p><img src={product.image} alt={product.name} width="200px" height="200px" /></p>
                    <p>Price  {product.price}</p>
                    <p>Ratings {product.ratings}</p>
                </div>
            </section>
        )
    }
    return '..Before Hydration value'
   
}

export default product
