import type { InferGetStaticPropsType, NextPage } from 'next'
import { useState } from 'react'
import Layout from 'components/Layout'
import FancyHeading from 'components/FancyHeading'
import Pagination, { usePagination } from 'components/pagination'
import SearchBar from 'components/SearchBar'
import Recipes from 'components/Recipes'
import Filters from 'components/Filters'
import data from 'data'

type Page = {} & NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const RecipesPage: Page = ({ initialRecipes }) => {
  const [filtered, setFiltered] = useState(initialRecipes)
  const { currentData, ...paginationProps } = usePagination(filtered, 3)

  function handleSearch(term: string) {
    const filtered = data.recipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(term.toLowerCase())
    })
    setFiltered(filtered)
  }

  return (
    <Layout>
      <section className="my-container mt-10">
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="min-w-[200px]">
            <FancyHeading>
              <FancyHeading.Title>Recipes</FancyHeading.Title>
              <FancyHeading.BackTitle>Recipes</FancyHeading.BackTitle>
            </FancyHeading>
            <SearchBar onSearch={handleSearch} />
            <Filters />
          </div>
          <div className="mt-8 mb-28 max-w-[800px] space-y-10 md:mt-0 md:px-0">
            {currentData.length ? (
              <>
                <Recipes recipes={currentData} />
                <Pagination {...paginationProps} />
              </>
            ) : (
              <>No results found ;(</>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = () => {
  const recipes = data.recipes

  return {
    props: {
      title: 'Artists - Round Hill Records',
      initialRecipes: recipes,
    },
  }
}

export default RecipesPage
