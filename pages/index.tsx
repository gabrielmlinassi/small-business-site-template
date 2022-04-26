import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Layout from 'components/Layout'
import FancyHeading from 'components/FancyHeading'
import LinkButton from 'components/LinkButton'
import ProductCard from 'components/ProductCard'
import data from 'data'

type Page = NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const Home: Page = ({ catalog, socialMedia }) => {
  return (
    <Layout>
      {/* hero section */}
      <section className="overflow-hidden bg-[#4D5D43]">
        <div className="mx-auto flex max-w-[1376px] flex-col items-center md:flex-row">
          <div className="flex-shrink-0 px-6 py-10 md:w-[425px]">
            <h3 className="font-Belleza text-2xl text-white">
              A specialty food store, built to share our passion for cooking and
              designed to bring Simply Flavorful ways to inspire our customers
              every day.
            </h3>
            <LinkButton href="/shop" className="mt-4 text-[#ECD689]">
              View our products
            </LinkButton>
            <hr className="my-6" />
            <div className="flex items-center gap-6">
              <div className="inline-flex overflow-hidden rounded-full">
                <Image
                  src="/images/catalog/EVA00204.jpeg"
                  alt="some description"
                  priority
                  objectFit="cover"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <p className="text-white">Upcoming event • 03.21.2022</p>
                <p className="font-Belleza text-xl text-white">
                  Oil & Cheese Tasting
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full flex-shrink-0 md:h-[500px]">
            <Image
              src="/images/catalog/EVA00002.jpeg"
              priority
              alt="some description"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      {/* catalog section */}
      <section className="mx-auto mt-14 flex max-w-[1376px] flex-col items-start gap-6 px-6 lg:flex-row lg:items-center lg:gap-0 lg:px-0">
        <div className="max-w-[425px] lg:px-6">
          <FancyHeading>
            <FancyHeading.Title>Our Catalog</FancyHeading.Title>
            <FancyHeading.BackTitle className="sm:text-[80px]">
              Our Catalog
            </FancyHeading.BackTitle>
          </FancyHeading>
          <p className="mt-3">
            There are many variations of passages a a a a a a of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour.
          </p>
          <LinkButton href="/" className="mt-4 text-[#4D5D43]">
            View shop
          </LinkButton>
        </div>
        <div className="w-full lg:pr-6">
          <ul className="flex flex-col flex-wrap gap-4 sm:flex-row">
            {catalog.map((item) => (
              <ProductCard key={item.slug} item={item} />
            ))}
          </ul>
        </div>
      </section>
      {/* featured recipe section */}
      <section className="mt-28">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-[300px] w-full shrink-[1.25] md:h-[500px] lg:w-1/2">
            <Image
              src="/images/featured_recipe.jpeg"
              alt="catalog product"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex w-full items-center bg-[#4D5D43] py-12 lg:w-1/2">
            <div className="max-w-[575px] px-6 text-white lg:pl-16">
              <p className="text-sm">Featured Recipe</p>
              <h3 className="mt-2 font-Belleza text-2xl leading-7 md:mt-3 md:text-3xl">
                Parchment Baked Roasted Red Pepper Salmon
              </h3>
              <p className="mt-3 text-sm md:mt-4 md:text-base">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <p className="mt-3 text-sm md:text-base">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
              <LinkButton href="/" className="mt-4 text-[#ECD689] md:mt-6">
                Read more
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
      {/* social media section */}
      <section className="mb-24 mt-24 sm:mt-32 md:mt-40">
        <div className="my-container">
          <div className="relative">
            <div className="absolute left-0 right-0 -translate-y-[90%] text-center font-ValentineVibes text-[55px] leading-none text-[#3a3a3a] text-opacity-5 sm:text-[100px] md:text-[120px]">
              Social Media
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {socialMedia.map((socialMediaImageSrc) => (
                <div key={socialMediaImageSrc}>
                  <div className="relative aspect-square">
                    <Image
                      src={socialMediaImageSrc}
                      alt="catalog product"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = () => {
  const catalog = data.catalog.filter((_, i) => i <= 3)
  const socialMedia = data.social_media
  return { props: { catalog, socialMedia } }
}

export default Home
