
import { Toaster } from "react-hot-toast";

const Layout = ({ children } : {children: React.ReactNode}) => {
    return (
        <div className=" bg-light_background/0 dark:bg-dark_background/0 pb-1" >
            {/* <Navbar/> */}
            <div className=" min-h-screen py-14" >{ children }</div>
            {/* <Footer /> */}
            <Toaster  />
        </div>
    );
};

export default Layout;