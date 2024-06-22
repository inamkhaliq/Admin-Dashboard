import React from 'react'
import { Link } from 'react-router-dom'

const EditWebPromotions = ({data}) => {
    console.log(data)
    return (
        <div>
            <h1 className='font-semibold text-[#E93439] leading-[29px] text-2xl text-left'>Answer the Questions</h1>
            <form action="" className='gap-[29px] flex flex-col flex-wrap mt-6'>
                <div className='w-full flex flex-col gap-[29px]'>
                    <div className='w-full text-left flex flex-col gap-[7px] '>
                        <label className=' font-normal text-[#000000] text-xl leading-6'>Your Website Link</label>
                        <input  type="text" value={data.Website_Link}  className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                    </div>
                    <div className='w-full text-left flex flex-col gap-[7px] '>
                        <label className=' font-normal text-[#000000] text-xl leading-6'>Your Website Nech</label>
                        <input type="text" value={data.Website_Nech} placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                    </div>
                    <div className='w-full text-left flex flex-col gap-[7px] '>
                        <label className=' font-normal text-[#000000] text-xl leading-6'>Your Target Audiance</label>
                        <input type="text" value={data.Target_Audiance} placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                    </div>
                    <div className='w-full text-left flex flex-col gap-[7px] '>
                        <label className=' font-normal text-[#000000] text-xl leading-6'>Purpose of Promotion</label>
                        <textarea type="text" value={data.Purpose} placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[110px] w-full rounded-md' />
                    </div>
                </div>
                <div className='w-full flex  gap-[18px]'>
                    <div className='text-right'>
                        <Link  className='shadow-lg  text-right py-3 px-[25px] cursor-pointer font-normal text-sm text-[#F7F7F7] bg-[#0069FF]  rounded-[40px]' >
                            Update
                        </Link>
                    </div>
                    <div className='text-right'>
                        <Link  className='shadow-lg shadow-[#cb584636] text-right py-3 px-[25px] cursor-pointer font-normal text-sm text-[#1A1A1A]  border border-[#1A1A1A] rounded-[40px]' >
                            Cancle
                        </Link>
                    </div>
                    <div className='text-right'>
                        <Link  className='shadow-lg shadow-[#cb584636] text-right py-3 px-[25px] cursor-pointer font-normal text-sm text-[#F7F7F7] bg-[#E93439] border border-[#C84545] rounded-[40px]'>
                            Delete
                        </Link>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default EditWebPromotions