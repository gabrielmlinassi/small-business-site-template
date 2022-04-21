import { FC, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Recipe } from 'data'

type PrintableRecipeProps = {
  recipe: Recipe
}

const PrintableRecipe = ({ recipe }: PrintableRecipeProps) => {
  const recipeRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => recipeRef.current,
  })

  return (
    <div ref={recipeRef}>
      <div className="my-print-container bg-[#4d5d43] print:bg-white">
        <div className="mx-auto max-w-[350px]">
          <div className="text-center font-Belleza text-2xl text-white md:text-2.5xl print:text-[#3a3a3a]">
            Roasted Cauliflower Pitas with Zhug and Garlic Tahini
          </div>
          <div className="mt-2 text-center text-sm text-white md:mt-3 md:text-base print:text-[#3a3a3a]">
            1 hour (30 minute prep • 30 minute cook)
          </div>
          <div className="mt-6 text-center md:mt-8 print:hidden">
            <Button onClick={handlePrint}>Print recipe</Button>
          </div>
        </div>
        <div className="mt-12">
          <Label>Ingredients</Label>
          {/* 💥 this is a little trick to wrap the array of content into two columns if the content's
              height extends 400px. This will fail if the array is too long. In that case, I'd recommend 
              to refactor this code to be more flexible.
          */}
          <div className="mt-6 ml-4">
            <ul className="list-disc gap-3 md:flex md:max-h-[400px] md:flex-col md:flex-wrap print:flex print:max-h-[400px] print:flex-col print:flex-wrap print:gap-3">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="text-white print:text-black">
                  <span className="text-sm">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14">
          <Label>Instructions</Label>
          <div className="mt-6 ml-4">
            <ol className="list-decimal space-y-3 ">
              {recipe.instructions.map((instruction, idx) => (
                <li key={idx} className=" text-white print:text-black">
                  <span className="text-sm">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-14">
          <Label>Notes</Label>
          <div className="mt-6">
            <ul className="space-y-3">
              {recipe.notes.map((note, idx) => (
                <li key={idx} className="text-white print:text-black">
                  <p className="text-sm font-semibold">{note.title}</p>
                  <p className="text-sm">{note.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center print:hidden">
          <Button onClick={handlePrint}>Print recipe</Button>
        </div>
      </div>
    </div>
  )
}

const Button: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      <span className="bg-white px-12 py-3 font-Belleza text-lg text-[#4d5d43]">
        {children}
      </span>
    </button>
  )
}

const Label: FC = ({ children }) => {
  return (
    <div className="inline-flex bg-[#ECD684] px-5 py-1 font-Belleza text-xl text-[#4d5d43] md:text-2xl">
      {children}
    </div>
  )
}

export default PrintableRecipe
