import { useEffect } from "react"

export const useTest = (load) => {

  useEffect(() => {
    console.log('me monte' +load);
    return () => {
      console.log('me desmonte'+ load);
    }
  }, [])

}
