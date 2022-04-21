import type { NextPage } from 'next'
import Layout from 'components/Layout'
import FancyHeading from 'components/FancyHeading'
import Image from 'next/image'

const About: NextPage = () => {
  return (
    <Layout>
      <section className="overflow-hidden">
        <div className="my-container flex flex-col px-0 md:flex-row">
          <div className="flex-shrink-0 px-6 md:w-1/2 md:py-12 lg:py-24 lg:pr-12">
            <FancyHeading>
              <FancyHeading.Title>About us</FancyHeading.Title>
              <FancyHeading.BackTitle>About us</FancyHeading.BackTitle>
            </FancyHeading>
            <p className="mt-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text.
            </p>
            <p className="mt-2">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words.
            </p>
          </div>
          <div className="relative mt-14 h-[275px] w-full flex-shrink-0 md:mt-0 md:h-auto">
            <Image
              src="/images/EVA00111.jpeg"
              layout="fill"
              objectFit="cover"
              alt="some description"
              priority
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" bg-[#4D5D43] md:mt-28">
        <div className="my-container flex flex-col px-0 md:flex-row-reverse">
          <div className="w-full flex-shrink-0 px-6 py-12 md:w-1/2 md:px-6 md:py-20 lg:py-36 lg:px-12">
            <p className="text-white">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words.
            </p>
            <p className="mt-3 text-white">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for lorem
              ipsum will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div className="relative h-[275px] w-full flex-shrink-0 bg-white md:h-auto">
            <Image
              src="/images/EVA00054.jpeg"
              layout="fill"
              objectFit="cover"
              alt="some description"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = () => {
  return { props: { title: 'About - Round Hill Records' } }
}

export default About
