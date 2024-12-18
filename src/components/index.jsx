import data from "./data";
import { useState } from "react";
import'./styles.css';
export default function Accordian(){
    const [selectedItems,setSelectedItems]=useState([]);
    function handleMultipleSelection(getCurrentId){
        if(selectedItems.includes(getCurrentId)){
        setSelectedItems(selectedItems.filter(id=>id!==getCurrentId));
        }
        else{
            setSelectedItems([...selectedItems, getCurrentId])
        }
    }
    return <div className="wrapper">
        <div className="accordian">
            {
                data && data.length>0?(
                    data.map((dataItem)=>(
<div className="item">
<div onClick={()=>handleMultipleSelection(dataItem.id)} className="title">
    <h2>{dataItem.question}</h2>
    <span>{selectedItems.includes(dataItem.id)? "-":"+"}</span>
    </div>
    <div className="content">{
    selectedItems.includes(dataItem.id)?
        dataItem.answer:null}
    </div>
    </div>
                    )
                )
            ):(
                <div>
                    no data found
                    </div>
            )

            }
        </div>
    </div>
}