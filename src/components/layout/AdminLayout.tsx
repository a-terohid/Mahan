import { adminLayoutProps } from "@/types/types";
import connectDB from "@/utils/connectDB";
import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";
import USER from "@/models/User";
import { BsPersonCircle } from "react-icons/bs"
import { ROLE } from "@/types/enums";
import Link from "next/link";

const AdminLayout = async ({ children , role , email }: adminLayoutProps ) => {

    return (
        <div className=' container flex flex-col lg:flex-row lg:gap-x-8 lg:gap-y-0 gap-y-6 mt-6 pb-10 ' >
            <div className='flex overflow-auto gap-x-2 lg:flex-col lg:gap-y-3 h-fit lg:w-fit text-text-dark lg:min-w-[248px] py-2 lg:py-4 lg:px-4 rounded-xl shadow-xl bg-light_background/1 dark:bg-dark_background/1' >
                <div className='lg:flex hidden flex-col items-center border-b-2 pb-3' >
                    <BsPersonCircle className=" text-4xl mb-2 " />
                    <p className=' mb-3' >{ email }</p>
                    { role == ROLE.ADMIN ? <p className=' px-2 font-bold bg-[#88d4ab] text-[#14746f] rounded-md'>admin</p> : null }
                    { role == ROLE.OWNER ? <p className=' px-2 font-bold bg-secondary-400 text-secondary-700 rounded-md' >owner</p> : null }
                </div>
                <Link className={ " w-fit px-3 py-1 rounded-lg text-sm hover:font-bold hover:text-secondary-300 lg:text-base flex gap-x-1 items-center whitespace-nowrap" } href="/admin-panel/Projects" >Projects</Link>
                <Link className={ " w-fit px-3 py-1 rounded-lg text-sm hover:font-bold hover:text-secondary-300 lg:text-base flex gap-x-1 items-center whitespace-nowrap" } href="/admin-panel/Newsletter-Users" >Newsletter Users</Link>
                <Link className={ " w-fit px-3 py-1 rounded-lg text-sm hover:font-bold hover:text-secondary-300 lg:text-base flex gap-x-1 items-center whitespace-nowrap" } href="/admin-panel/F&Q" >F&Q</Link>
            </div>
            <div className='w-full rounded-xl shadow-xl bg-light_background/1 dark:bg-dark_background/1 dark:bg-background-dark-5' >{ children }</div>
        </div>
    );
};

export default AdminLayout;