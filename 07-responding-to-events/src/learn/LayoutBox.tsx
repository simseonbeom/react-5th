

interface Props {
  onClick: () => void;
  style: React.CSSProperties & {'--color'?:string}
}

function LayoutBox({onClick,style}:Props) {

  
  return (
    <div className="box" onClick={onClick} style={style}>LayoutBox</div>
  )
}
export default LayoutBox