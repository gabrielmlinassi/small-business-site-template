import Layout from 'components/Layout'
import data from 'data'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

const Shop: NextPage = () => {
  return (
    <Layout>
      <div className="text-4xl flex h-[500px] items-center justify-center text-center font-bold text-[#3a3a3a]">
        Under development [slug]
      </div>
    </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = () => {
  const paths = data.catalog.map((item) => ({ params: { slug: item.slug } }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  return { props: { title: 'Shop - Round Hill Records' } }
}

export default Shop
