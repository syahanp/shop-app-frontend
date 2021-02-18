import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

import products from 'products.json';
import { fromImageToUrl } from 'utils/url';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                products.map(x => (
                    <div className={styles.product} key={x.name}>
                        <Link href={`/products/${x.slug}`}>
                            <a>
                                <div className={styles.product__Row}>
                                    <div className={styles.product__ColImg}>
                                        <img src={fromImageToUrl(x.image)} alt=""/>
                                    </div>
                                    <div className={styles.product__Col}>
                                        {x.name} {x.price}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}