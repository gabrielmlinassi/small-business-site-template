import Image from 'next/image'
import FancyHeading from 'components/FancyHeading'
import { Recipe } from 'data'

type CommentsProps = {
  recipe: Recipe
}

const Comments = ({ recipe }: CommentsProps) => {
  if (!recipe.comments?.length) {
    return null
  }

  const numOfComents = recipe.comments.length
  const title = `${numOfComents} ${numOfComents > 1 ? 'comments' : 'comment'}`

  return (
    <div className="my-small-container">
      <div>
        <FancyHeading>
          <FancyHeading.Title>{title}</FancyHeading.Title>
          <FancyHeading.BackTitle>{title}</FancyHeading.BackTitle>
        </FancyHeading>
      </div>
      <div className="mt-6 space-y-6 divide-y">
        {recipe.comments.map((comment, idx) => (
          <div key={idx} className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={comment.user.avatarUrl}
                  alt="some description"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <div className="font-Belleza">{comment.user.name}</div>
                <div className="text-xs">{comment.created_at}</div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {comment.content.map((content, idx) => (
                <p key={idx}>{content}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments
