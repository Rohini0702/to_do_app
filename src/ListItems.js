import React from "react";
import './ListItems.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontDownload } from "@material-ui/icons";
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
        
            return <div className ="list" key={item.key}>
                <p>
                    <input type="text" 
                    id="item.key" 
                    value={item.text}
                    onChange={
                        (e)=>{
                            props.setUpdate(e.target.value, item.key)
                        }

                    }
                    />
                    <span >
                    <DeleteIcon className='faicons' icon='DeleteIcon'onClick={() => props.deleteItem(item.key)
                    }/>
                    
                    </span>
                    </p>

            </div>
        
    
        })
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
            
            {listItems}
            </FlipMove>
            </div>


    )
}



export default ListItems;