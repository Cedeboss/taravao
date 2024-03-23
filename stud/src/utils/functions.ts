import { SetStateAction } from "react"


export const _counter = (data: number, setData: React.Dispatch<SetStateAction<number>>) => {
    setData(data + 1)
  }