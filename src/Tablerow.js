import { Fragment,useState } from "react"
import Childrow from "./Childrow"

function Tablerow({Asset_Name,Qty_Held,Avg_Purchase_Price,Amount_Invested,CMP,Current_Value,Gain_Loss_Abs,Gain_Loss,Allocation_on_CMP,Advised_Allocation,Add_Reduce,Comments,Cr}){
 
     const [open, setOpen] = useState(false);
   //   console.log(Cr)

       function openchild(){
            if(open){
               setOpen(false)
            }else{
               setOpen(true)

            }
        }
         

    return(
        <Fragment>
               <tr className="bg_cl">
             <td onClick={()=>{openchild()}}>{open && '-' }{!open && '+'}</td>
             <td>{Asset_Name}</td>
             <td>{Qty_Held}</td>
             
             <td>{Avg_Purchase_Price}</td>
             <td>{Amount_Invested}</td>
             <td>{CMP}</td>
             <td>{Current_Value}</td>
             <td>{Gain_Loss_Abs}</td>
             <td>{Gain_Loss}</td>
             <td>{Allocation_on_CMP}</td>
             <td>{Advised_Allocation}</td>
             <td>{Add_Reduce}</td>
             <td>{Comments}</td>
           </tr>

         {open && <Childrow data= {Cr} />}

            </Fragment>
    )
}

export default Tablerow