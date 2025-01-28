export enum ROLE  {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
}


export enum ERROR {
    SERVER_ERROR = "There is error in server!",
    USER_EXIST = "This user already exists!",
    EMAIL_EXIST = "This email already exists!",
    CANT_FIND_USER = "This user cannot be found!",
    CANT_FIND_PROJECT = "This Project cannot be found!",
    CANT_FIND_FQ = "This question cannot be found!",
    INVALID_DATA = "please enter a valid data!",
    INVALID_EMAIL = "please enter a valid email!",
    WRONG_PASSWORD = "Email or password is incorrect!",
    PROBLEM = "There is a Problem!",
    NO_USER = "There is no user!",
    ACCESS_DENIED = "access denied!",
    LOGIN = "please login first",
    FQ_DONT_EXIST = "This F&Q does not exist!",
    PROJECT_DONT_EXIST = "This Project does not exist!",
    INVALID_TAGS = "Invalid tags format",
    INVALID_CATEGORY = "INVALID_CATEGORY",
    INVALID_FILE_TYPE = "Invalid file type"
}

export enum MESSAGE {
    NEW_USER = "User cteated successfully!",
    NEW_EMAIL = "Email added successfully!",
    NEW_BLOGS = "Blogs added successfully!",
    SEND_MESSAGE = "Your message has been sent!",
    USER_DELETE = "User deleted successfully!",
    PROJECT_DELETE = "Project deleted successfully!",
    FQ_DELETE = "Question deleted successfully!",
    FQ_EDIT = "Question edtited successfully!",
    PROJECT_EDIT = "Project edtited successfully!",
    NEW_FQ = "New F&Q added successfully!",
    NEW_PROJECT = "New Project added successfully!"
}

export enum BLOG_CATEGORY {
    JS = "JavaScript",
    TS = "TypeScript",
    HTML_CSS = "CSS & HTML",
    REACT = "React",
    NEXTJS = "Next.js",
    FRONTEND_TOOLS = "Frontend Tools",
    PERFORMANCE = "Performance Optimization",
    UIUX = "UI/UX Tips",
}


export enum BLOG_TAGS {
    Tutorial = "Tutorial",
    Tips = "Tips",
    BestPractices = "Best Practices",
    News = "News",
    Updates = "Updates",
}



export enum PROJECTS_TECHNOLOGIES {
    REACT = "React",
    TS = "TypeScript",
    NEXT = "Next.js",
    REDUX = "Redux",
    TAILWIND = "Tailwind",
    GRAGHQL = "GraphQL",
    MUI = "Material UI",
    EXPRESS = "Express",
    SQL = "SQL",
    MONGODB = "MongoDB",
    NODE = "Node.js",
}


export enum PROJECTS_TAGS {
    REACT = "React",
    TS = "TypeScript",
    NEXT = "Next.js",
    REDUX = "Redux",
    TAILWIND = "Tailwind",
    GRAGHQL = "GraphQL",
    MUI = "Material UI",
    EXPRESS = "Express",
    SQL = "SQL",
    MONGODB = "MongoDB",
    NODE = "Node.js",
    FRONT = "Front-end",
    BACK = "Back-end",
    RESPONSIVE = "Responsive",
    FULL = "Full-stack",
    PBUILD = "Pre-Build Backend",
    UI = "UI"
}