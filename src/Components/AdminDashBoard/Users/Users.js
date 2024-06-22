import React from 'react'
import UsersTable from '../../Table/UsersTable'
import { useParams } from 'react-router-dom'
import EditUser from './EditUser'

const Users = () => {
    let Users_Data=[
        {
            id:1001,
            Name:"Bisma",
            Email:"Bisma@gmail.com",
            status:"Pending"
        },
        {
            id:1002,
            Name:"Rimsha",
            Email:"Rimsha@gmail.com",
            status:"Active"
        },
        {
            id:1003,
            Name:"Zarkash",
            Email:"Zaekash@gmail.com",
            status:"In Active"
        },
    ]
    let parms=useParams();
  return (
    <section>
        <div className='pb-[55px] md:px-0 pt-[90px] px-5'>
            <div className='heading w-full '>
                <h1 className="text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]">
                    Users
                </h1>
            </div>
            <div className='work-Banch mt-[60px] md:w-[96.53%] w-full  shadow-lg py-8 pl-10 pr-6  bg-[#FFFFFF] rounded-[10px]'>
                {
                    parms.page==="Users" && !parms.userid?
                    <div className='table-Content overflow-auto mt-[27px]'>
                        <UsersTable data={Users_Data} />
                    </div>
                    :
                    Users_Data.find(user=>user.id==parms.userid).id==parms.userid?
                    <EditUser data={Users_Data.find(user=>user.id==parms.userid)}/>:
                    ""
                }
            </div>
        </div>
    </section>
  )
}
export default Users