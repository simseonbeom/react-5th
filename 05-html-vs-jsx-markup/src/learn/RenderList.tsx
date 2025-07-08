import { Fragment } from "react/jsx-runtime";



interface Props {
  reactLibrary: ReactLibrary;
  items:StatusMessageWithId[]
}


function RenderList({reactLibrary, items}:Props) {

  /* 객체의 리스트 렌더링 */


  const renderDefinitionList = (data:ReactLibrary) => {
    const definitionItem = Object.entries(data).map(([key,value])=> (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
    ))

    return <dl className="reactLibrary">{definitionItem}</dl>

  }



  return (
    <> 
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.
        </p>
        {renderDefinitionList(reactLibrary)}
      </dd>
    </>
  )
}



export default RenderList