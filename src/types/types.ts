import { BLOG_CATEGORY, BLOG_TAGS, PROJECTS_TAGS, PROJECTS_TECHNOLOGIES, ROLE } from "./enums";
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

export interface User  {
    email : string,
    password : string,
    role : ROLE 
}

export type AuthType = {
    email : string,
    password : string,
}


export type InputType = {
    value : string,
    label : string,
    changeHandler : Function,
    type : string,
    name : string,
    placeholder: string,
    textarea: boolean,
    Voice ?: any,
    ResetVoice ?: Function
}


export interface Newsletter_User { 
    email: string,
    _id ?: string
}

export type adminLayoutProps ={
    children: React.ReactNode
    role: ROLE,
    email: string,
}


export interface FQ_Interface {
    question: string
    answer : string
    _id ?: string
}

export interface blog_Interface {
    title: string,
    sumery: string,
    createdAt: Date,
    tumbnail : string,
    content: string,
    tags: BLOG_TAGS[];     
    category: BLOG_CATEGORY; 
} 




type CustomText = {
  text: string;
};

type CustomElement = {
  type: "paragraph";
  children: CustomText[];
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}


export interface Project_interface { 
  name: string;
  sumery: string[];
  introduction : string;
  challenges : string[];
  solution : string;
  sorceCode_link : string;
  live_url ?: string;
  tags: PROJECTS_TAGS[];
  createDate : string;
  technologies: PROJECTS_TECHNOLOGIES[];
  tumbnail : string;
  gallery : string[];
  _id ?: string;
}