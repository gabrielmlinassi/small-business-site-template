import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import Data, { Recipe } from 'data'
import Layout from 'components/Layout'
import Image from 'next/image'
import FancyHeading from 'components/FancyHeading'
import PrintableRecipe from 'components/PrintableRecipe'
import Comments from 'components/Comments'

interface IParams extends ParsedUrlQuery {
  slug: string
}

type Page = {} & NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const RecipePage: Page = ({ recipe }) => {
  return (
    <Layout>
      {/* hero */}
      <section className="relative h-[375px] md:h-[500px]">
        <Image
          src={recipe.cover}
          alt="some description"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 left-0 right-0 z-20 -translate-y-1/2 lg:top-auto lg:bottom-8 lg:translate-y-0">
          <div className="my-container">
            <div className="glassmorphism max-w-[525px] py-8 px-6 text-white md:px-8">
              <p className="text-sm">{recipe.created_at}</p>
              <div className="mt-2 sm:mt-3">
                <p className="font-Belleza text-2xl sm:text-2.5xl">
                  {recipe.title}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <div key={tag}>
                    <p className="bg-[#ECD684] px-3 py-1 text-xs uppercase text-[#3A3A3A] md:text-sm">
                      #{tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* recipe story */}
      <section className="mt-14 md:mt-28">
        <div className="my-small-container px-6">
          <p className="font-Belleza text-2xl">
            Street food inspired Roasted Cauliflower Pitas with Zhug and Garlic
            Tahini. Roasted crispy cauliflower stuffed inside fresh pitas with
            all the “extras”. Delicious herby green sauce, Zhug, garlic lemon
            tahini sauce, spicy mango harissa, and all of the desired toppings
            you love.This loaded pita is SO GOOD and makes for a fun, delicious,
            and different weeknight dinner. Serve each pita with homemade fries
            for a meal that everyone will truly love – and have fun eating too.
          </p>
          <p className="mt-4 text-sm md:text-base">
            Keeping Monday fun with some stuffed pitas! Pretty sure I said this
            when I made chicken gyros, but street food inspired recipes are so
            much fun. Especially in the late winter when you&apos;re searching
            for more color, more fun, and honestly.
          </p>
          <p className="mt-3 text-sm md:text-base">
            Actually, I just explained my current state of mine. So this is how
            I&apos;m feeling. In an effort to not get too bored, I&apos;m loving
            trying out some fun middle eastern-inspired recipes. These pitas are
            inspired by chicken shawarma, which you guys know we love around
            here, but made vegetarian, with cauliflower.
          </p>
          <p className="mt-3 text-sm md:text-base">
            Shawarma is one of the most popular middle eastern street foods
            you&apos;ll come across. As well as one of the most well-loved.
            Traditionally, Shawarma is made with roasted meat cut into thin
            slices. Originally lamb was used, but it&apos;s now often made with
            chicken, beef, or pork. The meat is seasoned with spices, marinated,
            and then roasted vertically, rotisserie-style. It&apos;s usually
            served inside a pita, or on a plate with hummus.
          </p>
          <p className="mt-3 text-sm md:text-base">
            The thing that&apos;s so incredible about shawarma is that when
            it&apos;s served up in a pita, it&apos;s also served with multiple
            toppings and sauces. I wanted to recreate that style of pita, but
            with roasted cauliflower!
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-[1376px] px-6 md:mt-12 md:px-0">
          <div className="relative aspect-[2/1] h-full w-full">
            <Image
              src="/images/recipes/180430_r31953.png"
              layout="fill"
              alt="some description"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="my-small-container mt-12 px-6">
          <FancyHeading>
            <FancyHeading.Title className="max-w-[400px]">
              Start with the roasted cauliflower
            </FancyHeading.Title>
            <FancyHeading.BackTitle className="max-w-[575px] text-[50px] lg:text-[80px]">
              Start with the roasted cauliflower
            </FancyHeading.BackTitle>
          </FancyHeading>
        </div>
        <div className="my-small-container mt-6 px-6 md:mt-16">
          <p>
            I kept it simple but loaded up on the spices. Lots of paprika,
            cumin, cardamom, turmeric, and then garlic and lemon too.
          </p>
          <p className="mt-3 text-sm md:text-base">
            Nothing fancy, but when roasted up with the cauliflower, it&apos;s
            such a delicious, hearty combination. Even some of my brothers
            (hello Kai and Red), really loved it! Creighton stuck with chicken,
            but I&apos;ve given up on changing his ways.
          </p>
          <p className="mt-3 text-sm md:text-base">
            Even some of my brothers (hello Kai and Red), really loved it!
            Creighton stuck with chicken, but I&apos;ve given up on changing his
            ways.
          </p>
        </div>
      </section>
      {/* printable recipe */}
      <section className="mt-10 md:mt-16">
        <PrintableRecipe recipe={recipe} />
      </section>
      {/* comments */}
      <section className="my-container mb-16 mt-14">
        <Comments recipe={recipe} />
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Data.recipes.map((recipe) => ({
    params: { slug: recipe.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const { slug } = params as IParams

  const recipe = Data.recipes.find((recipe) => recipe.slug == slug) as Recipe

  return { props: { title: `${''} - Round Hill Records`, recipe } }
}

export default RecipePage
