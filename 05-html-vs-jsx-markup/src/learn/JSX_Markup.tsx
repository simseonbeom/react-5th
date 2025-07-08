import * as learnData from "@/data/learn";
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"
import ConditionalDisplay from "./ConditionalDisplay";



function JSX_Markup() {
  const { statusMessage, imageType, isShowReactImage } = learnData;
  
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage} />
      <ConditionalRendering imageType={imageType}/>
      <ConditionalDisplay isShowImage={isShowReactImage}/>
    </dl>
  )
}
export default JSX_Markup


// dl, dt, dd 