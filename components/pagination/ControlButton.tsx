import clsx from 'clsx'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

type ControlButtonProps = {
  onClick: () => void
  disabled: boolean
  direction: 'prev' | 'next'
}

const ControlButton = (props: ControlButtonProps) => {
  const { onClick, disabled, direction } = props
  return (
    <button onClick={onClick}>
      <div
        className={clsx(
          'text-[#4d5d43]',
          disabled ? 'text-opacity-30' : 'text-opacity-100'
        )}
      >
        <span className="inline-flex h-9 items-center px-2">
          {direction === 'prev' && <ChevronLeftIcon className="h-5 w-5" />}
          {direction === 'next' && <ChevronRightIcon className="h-5 w-5" />}
        </span>
      </div>
    </button>
  )
}

export default ControlButton
