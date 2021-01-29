import { Component} from 'react'
import Link from 'next/link'
import database from '../config/fire-base'
import styles from '../styles/Home.module.css'

class Listing extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        database
            .ref('products')
            .once('value')
            .then((snap) => {
                this.setState({
                    products:snap.val()
                })
            })
    }

    renderProducts = () => {
        const products = this.state.products;
        if (products.length > 0) {
            return (products.map((list, index) => (
                <div className={styles.card} key={index}>
                    <img src={list.image} alt={list.name} width="200px" height="200px"/>
                    <p><Link href={`/product/${index}`}><a>{list.name}</a></Link></p>
                    <p>Price  {list.price}</p>
                    <p>Ratings {list.ratings}</p>
                </div>)))
        }
        return '..Before Hydration'
    }

    render() {
        return (
            <section className={styles.main}>
                <div className={styles.grid}>
                    {this.renderProducts()}
                    </div>
            </section>
        )
        
    }
}

export default Listing
