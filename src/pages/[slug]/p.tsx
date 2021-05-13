import { GetStaticProps, GetStaticPaths } from 'next'

import * as S from '@/styles/productPage';
import api from '@/services/api';
import ProductHeader from '@/components/Product/Header';

interface ProductPageProps {
    name: string;
    indication: string;
    substance: string;
    factory: string;
    hasPrescriptionType: boolean;
    classification: string;
}

export default function ProductPage({ name, indication, factory, substance, hasPrescriptionType, classification }: ProductPageProps){
    return (
        <S.Wrapper>
            <ProductHeader 
            name={name} 
            whatIsItFor={indication} 
            factory={factory} 
            substance={substance} 
            hasPrescriptionType={hasPrescriptionType}
            classification={classification}
            />
            
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
                indication: productIndication
                factory: factoryName
                substance: substanceName
                prescriptionTypeName
                hasPrescriptionType
                productClassification
                variations: variants {
                  id
                  name
                  image
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
            indication: data.product.indication,
            factory: data.product.factory,
            substance: data.product.substance,
            hasPrescriptionType: data.product.hasPrescriptionType,
            classification: data.product.productClassification
        },
        revalidate: 60
    }
}