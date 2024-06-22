import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Table = ({data}) => {
    let Campaigns = data;
    let abc = [];
    let tableHead = [];
    for (let i in Campaigns[0]) {
        abc.push(i)
    }
    for (let j of abc) {
        tableHead.push(j.replace("_", " "))
    }
    let {page}=useParams();
    let user_editiong_route=useNavigate()
    let actionbutton=(id)=>{
        user_editiong_route("/admin-Dashboard/"+page+"/"+id)
        
    }
    return (
        <table className='w-[957px] lg:w-full'>
            <thead>
                <tr className=''>
                    {
                        tableHead.map((THead,indx)=>(
                            <th key={indx} className={`${indx===0?"text-left pl-4":"text-left"} pb-[13px] text-[#616161] font-semibold text-[14px] leading-[13px] `}>
                                {THead}
                            </th>
                        ))
                    }
                    {
                        page==="Website-Promotion"?
                        <th className={`text-left pb-[13px] text-[#616161] font-semibold text-[14px] leading-[13px] `}>
                            Action
                        </th>:
                        ""
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Campaigns?.map((compaign, indx) => {
                        return (
                            <tr key={indx} className='cursor-pointer group'>
                                {
                                    abc.map((val,valIndx)=>(
                                        <td className={`py-[9px] ${valIndx===0?"group-hover:rounded-bl-lg group-hover:rounded-tl-lg  pl-4  flex gap-[10px] items-center font-medium":valIndx===abc.length-1 && page!="Website-Promotion"?"group-hover:rounded-br-lg group-hover:rounded-tr-lg font-normal":"font-normal"} group-hover:bg-[#F9F9F9]  text-[13px] leading-[15.75px]`}>
                                            {
                                                valIndx===0?<span className='overflow-hidden rounded-full flex items-center justify-center font-semibold text-sm leading-4 align-middle bg-[#EDEDED] h-[35px] w-[35px]'>
                                                    <img src={compaign.User.profile} alt="userprofile" className='w-full h-full object-cover' />
                                                </span>:""
                                            }
                                            {
                                                val==="Status"?
                                                <span className={`flex gap-[7px] rounded-[15px] w-fit py-1 pl-1 pr-[11px] ${compaign[val]==="Successful"?"bg-[#CCF3C9] text-[#14A708] ":compaign[val]==="Pending"?"bg-[#FFF3BE] text-[#F9A000]":compaign[val]==="Failed"?"bg-[#FFDDDE] text-[#ED0006]":""}`} >
                                                    <span className={`${compaign[val]==="Successful"?"bg-[#14A708]":compaign[val]==="Pending"?"bg-[#F9A000] ":compaign[val]==="Failed"?"bg-[#ED0006]":""} w-[17px] h-[17px] rounded-full`}></span>
                                                    {compaign[val]}
                                                </span>:
                                                val==="Links"?
                                                <Link to={`/${compaign[abc[0]]}`}>{compaign[val]}</Link>:
                                                val==="User"?
                                                <>{compaign.User.email}</>:
                                                <>{compaign[val]}</>
                                            }
                                        </td>        
                                    ))
                                }
                                {
                                    page==="Website-Promotion"?
                                    <td className={`py-[9px] group-hover:rounded-br-lg group-hover:rounded-tr-lg  font-normal group-hover:bg-[#F9F9F9]  text-[13px] leading-[15.75px]`}>
                                        <button 
                                            onClick={()=>{
                                                actionbutton(compaign.User.id)
                                            }} 
                                            className='py-1 px-3 bg-[#E93439] text-[#FFFF] rounded-md'
                                        >
                                            Action
                                        </button>
                                    </td>:
                                    ""
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Table