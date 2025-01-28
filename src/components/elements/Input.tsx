
import { InputType } from "@/types/types";

const Input = ({ changeHandler , value, label , type , name , placeholder , textarea = false, Voice , ResetVoice  } : InputType) => {
    return (
        <div className="flex flex-col gap-y-2 " >
        <label className=" font-Nunito" >{ label }</label>
        {
            textarea ? 
                <textarea 
                value={ value }
                name={ name }  
                rows={5}
                onChange={ ( event ) => changeHandler( event ) }
                placeholder={ placeholder }
                className="px-4 md:px-3 py-3 rounded-xl text-sm mb-4 md:mb-0 ring-2 focus:outline-none focus:ring-primary-600 ring-secondary-200 dark:bg-Gray-200 dark:ring-0 dark:focus:ring-2 dark:text-Gray-500"  /> 
            : 
              type !== "file" ? 
                <input 
                type={ type }
                value={  value }
                name={ name }  
                onChange={ ( event ) => changeHandler( event ) }
                placeholder={ placeholder }
                className="px-4 md:px-3  py-3 rounded-xl text-sm mb-4 md:mb-0 ring-2 focus:outline-none focus:ring-primary-600 ring-secondary-200 dark:bg-Gray-200 dark:ring-0 dark:focus:ring-2 dark:text-Gray-500"  /> 
            :  <div className="mt-3">
                    <input 
                    type={ type }
                    id="fileInput"
                    name={ name }  
                    onChange={ ( event ) => changeHandler( event ) }
                    className=""
                    style={{ display: 'none' }} />
                    <label htmlFor="fileInput" className="" >
                        {Voice ? Voice.name : "انتخاب فایل"}
                    </label>
            </div>
        
            
        }
    </div>
    );
};

export default Input;