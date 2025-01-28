"use client"

import Input from "@/elements/Input";
import { useState } from "react";
import toast from "react-hot-toast";

const Homepage = () => {

    const [ score , setScore ] = useState(0)
    const [ data , setData ] = useState({
        studyHoure : "",
        math : "",
        chemistry : "",
        physics : "",
        general: "",
    })



    const { studyHoure , math ,chemistry , physics  , general} = data

    const changeHandler = ( event: any ) => {
        const { name , value } = event.target
        setData({ ...data , [ name ] : value })
    }


    const Handler = () => {

        let totalScore = 0;
    
        // Math
        if (+math <= 30) totalScore += +math * 10;
        else if (+math <= 60) totalScore += 30 * 10 + (+math - 30) * 12;
        else totalScore += 30 * 10 + 30 * 12 + (+math - 60) * 14;
    
        // Chemistry
        if (+chemistry <= 30) totalScore += +chemistry * 6;
        else if (+chemistry <= 60) totalScore += 30 * 6 + (+chemistry - 30) * 8;
        else totalScore += 30 * 6 + 30 * 8 + (+chemistry - 60) * 10;
    
        // Physics
        if (+physics <= 30) totalScore += +physics * 8;
        else if (+physics <= 60) totalScore += 30 * 8 + (+physics - 30) * 11;
        else totalScore += 30 * 8 + 30 * 11 + (+physics - 60) * 13;
    
        // General
        if (+general <= 50) totalScore += +general * 5;
        else if (+general <= 100) totalScore += 50 * 5 + (+general - 50) * 7;
        else totalScore += 50 * 5 + 50 * 7 + (+general - 100) * 9;
    
        // Study Hours
         // Study Hours
    if (+studyHoure <= 300) {
        const studyPart = Math.floor(+studyHoure / 15);
        const studyRemainder = (+studyHoure % 15) * (100 / 15) / 100;
        totalScore += studyPart * 3.5 + studyRemainder * 3.5;
      } else {
        const firstPart = Math.floor(300 / 15);
        const extraHours = +studyHoure - 300;
        const extraPart = Math.floor(extraHours / 15);
        const extraRemainder = (extraHours % 15) * (100 / 15) / 100;
        totalScore += firstPart * 3.5 + extraPart * 5 + extraRemainder * 5;
      }
    
        // به‌روزرسانی state
        setScore(totalScore);
        toast.success(`Your score is ${totalScore}`);

        setData({
            studyHoure : "",
            math : "",
            chemistry : "",
            physics : "",
            general: "",
        })
        setScore(0)
      };
    

    return (
        <div className=' container flex flex-col  items-center justify-center -mt-5  ' >
            <div className="bg-light_background/2 px-10 py-9 rounded-2xl" >
                <h1 className=" font-bold mr-16 " >please enter your data:</h1>
                <div className="flex flex-col gap-y-3 mt-5" >
                <Input 
                        value={studyHoure}
                        name="studyHoure"
                        label="Study Houre:"
                        textarea={false}
                        placeholder="Enter study houre"
                        changeHandler={ changeHandler }
                        type="text"
                />
                <Input 
                        value={math}
                        name="math"
                        label="Math:"
                        textarea={false}
                        placeholder="Enter math"
                        changeHandler={ changeHandler }
                        type="text"
                />
                <Input 
                        value={chemistry}
                        name="chemistry"
                        label="Chemistry:"
                        textarea={false}
                        placeholder="Enter chemistry"
                        changeHandler={ changeHandler }
                        type="text"
                />
                <Input 
                        value={physics}
                        name="physics"
                        label="Physics:"
                        textarea={false}
                        placeholder="Enter physics"
                        changeHandler={ changeHandler }
                        type="text"
                />
                <Input 
                        value={general}
                        name="general"
                        label="General:"
                        textarea={false}
                        placeholder="Enter general"
                        changeHandler={ changeHandler }
                        type="text"
                />
                </div>
                <div className="flex items-center justify-center mt-4" >
                    <button onClick={Handler} className=" bg-plus-red-1 text-plus-red-4 hover:text-plus-red-1 hover:bg-plus-red-4 mt-2 rounded-lg px-3 py-2" >Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;