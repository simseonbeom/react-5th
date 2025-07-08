import * as learnData from "@/data/learn";
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"




function JSX_Markup() {
  const { statusMessage, imageType } = learnData;
  
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage} />
      <ConditionalRendering imageType={imageType}/>
    </dl>
  )
}
export default JSX_Markup


// dl, dt, dd 