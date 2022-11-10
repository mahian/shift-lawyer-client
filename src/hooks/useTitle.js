import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - shift-lawyer`;
    },[title])
}

export default useTitle;