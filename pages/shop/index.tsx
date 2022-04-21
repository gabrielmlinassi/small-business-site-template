import Layout from 'components/Layout'
import { NextPage } from 'next'

const Shop: NextPage = () => {
  return (
    <Layout>
      <div className="flex h-[500px] items-center justify-center text-center text-3xl font-bold text-[#3a3a3a]">
        Under development
      </div>
    </Layout>
  )
}

export const getStaticProps = () => {
  return { props: { title: 'Shop - Round Hill Records' } }
}

export default Shop
