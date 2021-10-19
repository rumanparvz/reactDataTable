import { Fragment } from "react/cjs/react.production.min"

function Childrow({data}){
  
    return(
      <Fragment> 
        {data.map((value)=>{
          return   <tr key={value.id}> 
             <td></td>
             <td>{value.Asset_Name}</td>
             <td>{value.Qty_Held}</td>
             <td>{value.Avg_Purchase_Price}</td>
             <td>{value.Amount_Invested}</td>
             <td>{value.CMP}</td>
             <td>{value.Current_Value}</td>
             <td>{value.Gain_Loss_Abs}</td>
             <td>{value.Gain_Loss}</td>
             <td>{value.Allocation_on_CMP}</td>
             <td>{value.Advised_Allocation}</td>
             <td>{value.Add_Reduce}</td>
             <td>{value.Comments}</td>
         </tr>
        })}
         
      </Fragment>
    )
}

export default Childrow