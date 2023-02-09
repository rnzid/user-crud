import { useState } from "react"

export const useForm = (initialState={}) => {
  const [inputValues, setinputValues] = useState(initialState)


const resetForm = () => {
    setinputValues(initialState)
}


const handleInputChange = ({target})=>{
    setinputValues({...inputValues,
        [target.name]:target.value
    });
}
return{
    inputValues,
    handleInputChange,
    resetForm
}
}
