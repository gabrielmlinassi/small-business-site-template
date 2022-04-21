import Image from 'next/image'
import { Recipe } from 'data'
import Link from 'next/link'

type RecipesProps = {
  recipes: Recipe[]
}

export default function Recipes({ recipes }: RecipesProps) {
  return (
    <div className="space-y-10">
      {recipes.map((recipe, idx) => (
        <div key={`${recipe.slug}-${idx}`} className="text-[#3A3A3A]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <Link href={`/recipes/${recipe.slug}`} passHref>
              <div className="relative aspect-[3/2] cursor-pointer">
                <Image
                  src={recipe.thumbnail}
                  priority={idx <= 2}
                  layout="fill"
                  objectFit="cover"
                  alt="some description"
                />
              </div>
            </Link>
            <div>
              <div className="text-sm">{recipe.created_at}</div>
              <Link href={`/recipes/${recipe.slug}`} passHref>
                <div className="mt-2 cursor-pointer font-Belleza text-2xl">
                  {recipe.title}
                </div>
              </Link>
              <div className="mt-4 flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <div key={tag}>
                    <p className="bg-[#ECD684] px-3 py-1 text-xs uppercase">
                      #{tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
