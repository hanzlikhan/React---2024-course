import { useEffect } from "react"

const Navbar = ({color})=>{
    useEffect(()=>{
       alert("on every render it show")
    })
    useEffect(()=>{
      alert("render on the first render")
    },[])
    useEffect(()=>{
    },[color])
}
export default Navbar