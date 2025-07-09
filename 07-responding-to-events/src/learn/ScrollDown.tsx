





function ScrollDown() {
  return (
    <div role="group" className="buttonGroup">
      <button 
      type="button" 
      className="scrollDown"
      aria-label="스크롤 다운"
      title="스크롤 다운"
      >
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
      <button 
      type="button" 
      className="scrollUp"
      aria-label="스크롤 업"
      title="스크롤 업"
      >
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
    </div>
  )
}
export default ScrollDown