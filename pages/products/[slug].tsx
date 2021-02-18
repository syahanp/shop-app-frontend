import React from 'react';
import styled from 'styled-components';
import products from 'products.json';
import { fromImageToUrl } from 'utils/url';
import Head from 'next/head';
const product = products[0]


const Product = () => {
    return (
        <>
            <Head>
                { product.meta_title && <title>{product.meta_title}</title> }
                { product.meta_description && <meta name="description" content={product.meta_description}></meta> }
            </Head>

            <Container>
                <img src={fromImageToUrl(product.image)} alt=""/>
                <h3>{product.name}</h3>
                <p>Rp. {product.price}</p>

                <p>
                    {product.content}
                </p>
            </Container>
        </>
    )
}

export default Product;

const Container = styled.div`
    
`
