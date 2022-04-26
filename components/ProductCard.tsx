import Link from 'next/link'
import Image from 'next/image'
import { Catalog } from 'data'

type PricingProps = {
  price: string
  discountedPrice?: string
}

const Pricing = ({ price, discountedPrice }: PricingProps) => {
  return discountedPrice ? (
    <>
      <span className="line-through">${price}</span>
      <span className="ml-2 font-bold text-[#4D5D43]">${discountedPrice}</span>
    </>
  ) : (
    <span>{price}</span>
  )
}

const ProductCard = ({ item }: { item: Catalog }) => {
  return (
    <Link key={item.slug} href={`/shop/${item.slug}`} passHref>
      <li className="flex aspect-square w-full flex-grow flex-col p-1 sm:w-auto">
        <div className="relative h-full w-full">
          <Image
            src={item.images[0]}
            alt="catalog product"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <div className="font-Belleza text-2xl">{item.name}</div>
          <div className="font-Poppins text-lg text-[#3A3A3A]">
            <Pricing
              price={item.price}
              discountedPrice={item.discounted_price}
            />
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ProductCard
