import { SiMongodb } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { PROJECTS_TECHNOLOGIES } from "@/types/enums";
import { PiPlaceholderBold } from "react-icons/pi";


const Tech_Icons: Record<keyof typeof PROJECTS_TECHNOLOGIES, JSX.Element> = {
    REACT : <IoLogoReact />,
    TS : <BiLogoTypescript />,
    NEXT : <RiNextjsLine />,
    REDUX : <SiRedux />,
    TAILWIND : <RiTailwindCssFill />,
    GRAGHQL : <GrGraphQl />,
    MUI : <SiMui />,
    EXPRESS : <SiExpress/>,
    SQL : <GrMysql/>,
    MONGODB : <SiMongodb />,
    NODE : <FaNodeJs />,
};


export const getTechIcon = (tech: string): JSX.Element => {
    const key = Object.keys(PROJECTS_TECHNOLOGIES).find(
        (key) => PROJECTS_TECHNOLOGIES[key as keyof typeof PROJECTS_TECHNOLOGIES] === tech
    );
    return key ? Tech_Icons[key as keyof typeof Tech_Icons] : <PiPlaceholderBold />;
};