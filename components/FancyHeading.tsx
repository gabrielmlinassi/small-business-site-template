/**  */

import clsx from 'clsx'
import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type ContextProps = {
  height: number
  setHeight: React.Dispatch<React.SetStateAction<number>>
}

const Context = React.createContext<ContextProps>({
  height: 0,
  setHeight: () => {},
})

const Provider: FC = ({ children }) => {
  const [height, setHeight] = useState(0)
  return (
    <Context.Provider value={{ height, setHeight }}>
      {children}
    </Context.Provider>
  )
}

const FancyHeadingBase: FC<{ className?: string }> = (props) => {
  const { children, className } = props
  return (
    <Provider>
      <FancyHeadingRoot className={className}>{children}</FancyHeadingRoot>
    </Provider>
  )
}

const Title: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <span className="absolute left-0 top-1/3 font-Belleza text-3xl text-[#3a3a3a] md:text-5xl">
      <div className={className}>{children}</div>
    </span>
  )
}

const BackTitle: FC<{ className?: string; center?: boolean }> = (props) => {
  const { children, className, center = false } = props
  const ref = useRef<HTMLDivElement>(null)
  const { setHeight } = useContext(Context)

  const recalculateHeight = useCallback(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
    }
  }, [setHeight])

  useEffect(() => {
    recalculateHeight()
    window.addEventListener('resize', recalculateHeight)
    return () => window.removeEventListener('resize', recalculateHeight)
  }, [recalculateHeight])

  return (
    <span
      className={clsx(
        'absolute font-ValentineVibes text-[65px] leading-none text-[#3a3a3a] text-opacity-5 lg:text-[90px]',
        center ? 'left-0 right-0 text-center' : '-left-4'
      )}
    >
      <div ref={ref} className={className}>
        {children}
      </div>
    </span>
  )
}

/**
 * Requires at least backTitle to make sure it works properly.
 * If you need just a normal title, use the Heading component
 */
const FancyHeadingRoot: FC<{ className?: string }> = (props) => {
  const { children, className } = props
  const { height } = useContext(Context)

  return (
    <div
      style={{ height: `${height}px` }}
      className={clsx('relative', className)}
    >
      {children}
    </div>
  )
}

const FancyHeading = Object.assign(FancyHeadingBase, { Title, BackTitle })
export default FancyHeading
