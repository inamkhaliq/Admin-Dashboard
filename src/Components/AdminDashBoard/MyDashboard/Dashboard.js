import { Link } from 'react-router-dom'
import userprofile from '../../../Assets/userprofile.avif'
import Greendot from '../../../Assets/Greendot.svg'
import Tick from '../../../Assets/tick.svg'
import { useState } from 'react'

const Dashboard = () => {
    let fields=[
        {
            category:"Techlology",
            interests:["Vitrual Reality","Computers","Video Game","Applications","Augmented Reality",],
        },
        {
            category:"Creativity",
            interests:["Plants","Handy Crafts","Calligraphy","Crafts","Data","Good","Streaming",]
            
        },
        {
            category:"Social",
            interests:["Event Planing","Manage People","Education","Works","Moral","Society",]
        },
        {
            category:"Sport",
            interests:["Cricket","Hockey","Foot Ball","Socker","Gaming","Netflix","Information"]
        },
        {
            category:"Activities",
            interests:["Playing","Running","Morning Walk",,"Information Technology","Streaming"]
        },
    ]
    let bills=[
        {
            name:"Paint",
            status:"Paid",
        },
        {
            name:"House",
            status:"Not Paid",
        },
        {
            name:"Internet",
            status:"Paid",
        },
        {
            name:"Income Taz",
            status:"Paid",
        },
    ]
    let [selectedField,setSelectedField]=useState("Techlology")

    return (
        <section>
            <div className='pb-[55px] md:px-0 pt-[90px] px-5'>
                <div className='heading w-full '>
                    <h1 className="text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]">
                        My Profile
                    </h1>
                </div>
                <div className='work-Banch mt-[60px] md:w-[96.53%] w-full  shadow-lg py-8 pl-10 pr-6  bg-[#FFFFFF] rounded-[10px]'>
                    <div className='flex flex-wrap gap-5 lg:gap-[4%] justify-between'>
                        <div className=' lg:w-[48%] p'>
                            <div className='portfolio w-full py-5 px-6 rounded-2xl bg-[#fafbfc]'>
                                <div className='h-80 overflow-hidden'>
                                    <img className='w-full h-full  mix-blend-multiply' src={userprofile} alt="" />
                                </div>
                                <div className='pb-3 pt-6 flex justify-between items-start'>
                                    <span className='w-full text-lg font-semibold'>My Profile</span>
                                    <span className='w-full text-xs text-[#6b7280]'>hi! there this is Inam, As a full-stack developer specializing in both frontend and backend developmen
                                    </span>
                                </div>
                                <div className='py-6 flex justify-between items-end'>
                                    <input type="text" placeholder='Inam Khaliq' className='outline-none bg-transparent pb-2 w-2/4 mr-2 text-sm font-normal border-b border-[#6b7280]' />
                                    <input type="number" placeholder='+92 304 1708709' className='outline-none bg-transparent pb-2 w-2/4 mr-2 text-sm font-normal border-b border-[#6b7280]' />
                                </div>
                                <div className='py-6 flex justify-between items-end'>
                                    <span className='pb-2 w-full  text-sm font-normal border-b border-[#6b7280]'>InamKhaliq@gmail.com</span>
                                </div>
                                <div className='py-6 flex justify-between items-end'>
                                    <span className='w-full text-base font-semibold text-[#E93439]'>SMS alerts activation</span>
                                </div>
                                <div className=' flex justify-center '>
                                    <Link className='py-2 px-8 rounded-[40px] text-[#FAFAFA] bg-[#E93439]'>Save</Link>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-[48%] flex flex-wrap gap-9'>
                            <div className='card1 w-full  rounded-2xl bg-[#fafbfc]'>
                                <div className=' rounded-tl-2xl rounded-tr-2xl bg-[#df3e4352] py-5 px-6'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='text-lg font-semibold'>Pick your interests</h1>
                                        <span className='text-sm px-6 py-1 bg-slate-300 rounded-[40px]'>Edit</span>
                                    </div>
                                    <p className='text-lg font-medium text-white py-3 text-center w-3/5 m-auto'>Select from the interesrs below or the list your own</p>
                                    <div className='w-full flex flex-wrap justify-between '>
                                        {
                                            fields.map((field,indx)=>(
                                                <span 
                                                    key={indx}
                                                    onClick={(e)=>{
                                                        setSelectedField(e.target.innerText)
                                                    }}
                                                    className={`${selectedField.toLowerCase()===field.category.toLowerCase()?"text-[#E93439] border-b border-[#E93439]":"text-white"} text-xs hover:text-[#E93439] hover:border-b hover:border-[#E93439] cursor-pointer py-2 px-1  uppercase`}
                                                >
                                                    {field.category}
                                                </span>
                                            ))
                                        }
                                    </div>
                                    
                                </div>
                                <div className='fields flex flex-wrap gap-2 py-5 px-6'>
                                    {
                                        fields.find(fld=>fld.category.toLowerCase()===selectedField.toLowerCase()).interests.map((intrst,Iindx)=>(
                                            <span 
                                                key={Iindx}
                                                className='bg-gray-200 text-sm px-3 py-3 rounded-[40px]'
                                            >
                                                {intrst}
                                            </span>
                                        ))                                                                          
                                    }
                                </div>
                                <div className='w-full flex justify-end  py-5 px-6'>
                                    <Link className=' text-white bg-[#E93439] text-sm  px-3 py-3 rounded-[40px]'>
                                        Submit
                                    </Link>
                                </div>
                            </div>
                            <div className='card2 w-full  rounded-2xl bg-[#fafbfc]'>
                                <div className='flex border-b border-black justify-between items-center py-5 px-6'>
                                    <h1 className='text-lg font-semibold'>My Bills</h1>
                                    <span className='text-sm px-6 py-1 bg-slate-300 rounded-[40px]'>Edit</span>
                                </div>
                                <div className='bills py-5 px-6 '>
                                    <div className='relative p-4 border border-blue-400 rounded-md w-full'>
                                        <img className='absolute z-10 -top-[8px] -right-[8px]' src={Tick}/>
                                        <div className='font-semibold leading-5 text-[#343434] text-base  flex items-center justify-between'>
                                            <h4 className=''>Beginner</h4>
                                            <p>
                                                $10/
                                                <span className='text-sm font-normal text-slate-400'>month</span>
                                            </p>
                                        </div>
                                        <p className='mt-3 text-xs text-slate-400 font-normal'>36 days remaining</p>
                                        <div className='mt-6 gap-5 flex justify-center sm:justify-between flex-wrap'>
                                            <Link className='border rounded-lg py-2 px-2 text-blue-500'>Cancle Subscription</Link>
                                            <Link className='border rounded-lg py-2 px-2 text-blue-500'>Manage Subscription</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard