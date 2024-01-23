import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./items-slider_style.css"

export function ItemsSlider({ data}){
    const [itemIndex, setItemIndex] = useState(0);

    console.log(data.content);
    
    return <div className="items-slider">
     <h2>{data.mainTitle}</h2>   
    <div className="item-slide">
      <img src={data.content[itemIndex].iconUrl} />
       <p className="text-container">
                {data.content[itemIndex].title ?? ""}
                {data.content[itemIndex].upperTitle ?? ""}
                {data.content[itemIndex].content && <span>{data.content[itemIndex].content}</span>}
        </p>

      <div className="buttons-container">
        <button
          disabled={itemIndex === 0}
          onClick={() => setItemIndex(itemIndex - 1)}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          disabled={itemIndex === data.content.length - 1}
          onClick={() => setItemIndex(itemIndex + 1)}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  </div>
}