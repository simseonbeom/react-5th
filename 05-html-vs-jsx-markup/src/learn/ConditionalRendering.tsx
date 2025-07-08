import reactImagePath from '@/assets/react.svg?url';




function ConditionalRendering({imageType}:{imageType:string}) {

  let iconPath = '';
  

  if(imageType === 'react'){
    iconPath = reactImagePath;
  }
  return (
    <>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          <img src={iconPath} alt="" />
          <p>{imageType}</p>
        </div>
      </dd>
    </>
  )
}
export default ConditionalRendering