import axios from "axios"
import { useEffect,useState } from "react"
import Tablerow from "./Tablerow"

function Table(){
const [maindata, setMaindata] = useState([])
    useEffect(() => {
        Getdata()
        return () => {
         Getdata()
        }
    }, [])

    function Getdata(){
        axios.get('http://localhost:3000/maindata').then(res=>{
            // console.log(res.data)
            setMaindata(res.data)
        })

    }

    return (

        <div>
       
    <table className="width_100">
  <thead>
    <tr>
    <th> </th>
          <th>Assets Name</th>
          <th>Qty Held</th>
          <th>Avg Purchase Price</th>
          <th>Amount_Invested</th>
          <th>CMP</th>
          <th>Current Value</th>
          <th>Gain/Loss (Abs)</th>
          <th>Gain/Loss</th>
          <th>% Allocation on CMP</th>
          <th>% Advised Allocation</th>
          <th>Add/Reduce</th>
          <th>Comments</th>
    </tr>
   </thead>
   <tbody>
       
{
maindata.map((item)=>{
console.log(item.Cr)  
 
  return  <Tablerow key={item.id} Asset_Name={item.Asset_Name } Qty_Held={item.Qty_Held} Avg_Purchase_Price={item.Cr.reduce((accumulator, current) => accumulator + current.Avg_Purchase_Price, 0)} Amount_Invested={item.Amount_Invested} 
  CMP={item.CMP} Current_Value={item.Current_Value} Gain_Loss_Abs={item.Gain_Loss_Abs} Gain_Loss={item.Gain_Loss} Allocation_on_CMP={item.Allocation_on_CMP} Advised_Allocation={item.Advised_Allocation} Add_Reduce={item.Add_Reduce} Comments={item.Comments} Cr={item.Cr}
  />
})
}
       
      
  </tbody>
</table>
        </div>
    )
}

export default Table