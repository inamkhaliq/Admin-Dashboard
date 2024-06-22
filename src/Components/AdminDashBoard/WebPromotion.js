import React from 'react'
import Table from '../Table/Table'
import { useParams } from 'react-router-dom'
import EditWebPromotions from './WebPromotions/EditWebPromotions'

const WebPromotion = () => {
    let webPromotionData=[
        {
            User:{
                id:1,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:2,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:3,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:4,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:5,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:6,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:7,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:8,
                email:"test@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:9,
                email:"test9@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
        {
            User:{
                id:10,
                email:"test10@gmail.com",
                profile:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            Website_Link:"abc.com",
            Website_Nech:"promotion",
            Target_Audiance:"agegroup",
            Purpose:"views and traffic",
        },
    ]
    let parms=useParams()
  return (
    <section>
        <div className='pb-[55px] md:px-0 pt-[90px] px-5'>
            <div className='heading w-full '>
                <h1 className="text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]">
                    Recent Website Promotions
                </h1>
            </div>
            <div className='work-Banch mt-[60px] md:w-[96.53%] w-full  shadow-lg py-8 pl-10 pr-6  bg-[#FFFFFF] rounded-[10px]'>
                {
                    parms.page==="Website-Promotion" && !parms.userid?
                    <div className='table-Content overflow-auto mt-[27px]'>
                        <Table data={webPromotionData} />
                    </div>:
                    webPromotionData.find(obj=>obj.User.id==parms.userid).User.id==parms.userid?
                    <EditWebPromotions data={webPromotionData.find(obj=>obj.User.id==parms.userid)}/>:
                    ""

                }
            </div>
        </div>
    </section>
  )
}

export default WebPromotion