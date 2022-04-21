import ControlButton from './ControlButton'
import PageNum from './PageNum'

type PaginationProps = {
  prev: () => void
  next: () => void
  maxPage: number
  currentPage: number
  jump: (to: number) => void
}

const MAX_NUM_OF_PAGES = 4

export default function Pagination(props: PaginationProps) {
  const { prev, next, maxPage, currentPage, jump } = props

  const isFirst = currentPage === 1
  const isLast = maxPage === currentPage

  if (maxPage > MAX_NUM_OF_PAGES) {
    // returns split pagination like 1 2 3 4 ... 10
    return (
      <div className="flex justify-center space-x-1">
        <ControlButton direction="prev" disabled={isFirst} onClick={prev} />
        {Array.from({ length: MAX_NUM_OF_PAGES }, (_, i) => (
          <div key={i}>
            <PageNum active={currentPage === i + 1} onClick={() => jump(i + 1)}>
              {i + 1}
            </PageNum>
          </div>
        ))}
        <div className="inline-flex bg-transparent px-[15px] py-[6px] font-Belleza text-xl text-[#4D5D43]">
          ...
        </div>
        <PageNum active={maxPage === currentPage} onClick={() => jump(maxPage)}>
          {maxPage}
        </PageNum>
        <ControlButton direction="next" disabled={isLast} onClick={next} />
      </div>
    )
  }

  return (
    <div className="flex justify-center space-x-1">
      <ControlButton direction="prev" disabled={isFirst} onClick={prev} />
      {Array.from({ length: maxPage }, (_, k) => (
        <PageNum active={currentPage === k + 1} onClick={() => jump(k + 1)}>
          {k + 1}
        </PageNum>
      ))}
      <ControlButton direction="next" disabled={isLast} onClick={next} />
    </div>
  )
}
