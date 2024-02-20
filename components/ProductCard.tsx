import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
    img: string,
    title: string,
    desc: string,
    rating: number,
    price: string
}

const ProductCard: React.FC<propsType> = ({img, desc, price, rating, title}) => {
    const generateRating = (rating: number) => {
        switch (rating) {
          case 1:
            return (
              <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            );
          case 2:
            return (
              <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            );
          case 3:
            return (
              <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            );
          case 4:
            return (
              <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            );
          case 5:
            return (
              <div className="flex gap-1 text-[20px] text-[#FF9529]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            );
    
          default:
            return null;
        }
      };

    return (
        <div className='px-4 border border-orange-500 rounded-xl max-w-[400]'>
            <div>
                <Image className='w-full h-auto cursor-pointer' src={img} width={200} height={300} alt={title}/>
            </div>
            <div className='space-y-2 py-2'>
                <h2 className='text-orange-400 uppercase text-center font-bold'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                {generateRating(rating)}
                <div className='font-bold flex gap-4'>
                    Rs. {price}
                    <del className='text-red-600'>Rs. {parseInt(price) + 500}</del>
                </div>
            </div>
            
        </div>
    )
}

export default ProductCard
