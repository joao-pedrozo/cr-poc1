import { GetStaticProps, GetStaticPaths } from 'next'

import * as S from 'styles/productPage';
import api from 'services/api';

interface ProductPageProps {
    name: string;
}

export default function ProductPage({ name }: ProductPageProps){
    return (
        <S.Wrapper>
            <h1>{name}</h1>
        </S.Wrapper>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'daxas' } }
        ],
        fallback: false,
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
        {
            product: getProduct(slug: "${params.slug}", zipcode: "74630280") {
            id: productId
            name: productName
            description
            variations: variants {
                id
                name
                offers {
                id
                storeName
                price
                }
            }
            }
        }
    `

    const { data: { data } } = await api.post('/graphql', { query });

    return {
        props: {
            name: data.product.name,
        },
        revalidate: 60
    }
}