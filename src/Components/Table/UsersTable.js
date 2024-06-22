import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UsersTable = ({data}) => {
    let Users = data;
    let {page}=useParams();
    let edit_User=useNavigate();
    let actionClick=(u_id)=>{
        edit_User("/admin-Dashboard/"+page+"/"+u_id)
    }
    return (
        <table className='w-[957px] lg:w-full'>
            <thead>
                <tr className=''>
                    <th className='text-left pl-4  pb-[13px] text-[#616161] font-normal text-[11px] leading-[13px] '>User Name</th>
                    <th className='text-left  pb-[13px] text-[#616161] font-normal text-[11px] leading-[13px] '>Email</th>
                    <th className='text-left  pb-[13px] text-[#616161] font-normal text-[11px] leading-[13px] '>Status</th>
                    <th className='text-left  pb-[13px] text-[#616161] font-normal text-[11px] leading-[13px] '>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    Users?.map((user, indx) => {
                        return (
                            <tr  
                                key={indx} className='cursor-pointer group'
                                onClick={()=>{
                                    actionClick(user.id)
                                }}
                            >
                                <td className='group-hover:rounded-bl-lg group-hover:rounded-tl-lg  pl-4    py-[9px] group-hover:bg-[#F9F9F9] text-[13px] leading-[15.75px] font-normal '>{user.Name}</td>
                                <td className='    py-[9px] group-hover:bg-[#F9F9F9] text-[13px] leading-[15.75px] font-normal '>{user.Email}</td>
                                <td className='    py-[9px] group-hover:bg-[#F9F9F9] text-[13px] leading-[15.75px] font-normal '>
                                    <span className={`flex gap-[7px] rounded-[15px] w-fit py-1 pl-1 pr-[11px] ${user.status.toLowerCase()==="Active".toLowerCase()?"bg-[#CCF3C9] text-[#14A708] ":user.status.toLowerCase()==="Pending".toLowerCase()?"bg-[#FFF3BE] text-[#F9A000]":user.status.toLowerCase()==="in active".toLowerCase()?"bg-[#FFDDDE] text-[#ED0006]":""}`} >
                                        <span 
                                            className={`${user.status.toLowerCase()==="Active".toLowerCase()?"bg-[#14A708]":user.status.toLowerCase()==="Pending".toLowerCase()?"bg-[#F9A000] ":user.status.toLowerCase()==="in active".toLowerCase()?"bg-[#ED0006]":""} w-[17px] h-[17px] rounded-full`}
                                        ></span>
                                        {user.status}
                                    </span>
                                </td>
                                <td className='group-hover:rounded-br-lg group-hover:rounded-tr-lg  py-[9px] group-hover:bg-[#F9F9F9] text-[13px] leading-[15.75px] font-normal   '>
                                    <span className='py-1 px-2 rounded-3xl text-[#FAFAFA] bg-[#E93439] '>Action</span>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default UsersTable