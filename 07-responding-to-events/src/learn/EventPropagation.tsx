

function EventPropagation() {
  
  const handleClick = () => {
    console.log('click');
    
  }
  
  return (
    <details open>
      <summary>
        <b>이벤트 전파 & 기본 동작 방지</b>
      </summary>
      <div className="box" onClick={handleClick} style={styles.yellow}>box</div>
    </details>
  );
}

export default EventPropagation;

const styles = {
  cyan: { "--color": "var(--cyan)" },
  magenta: { "--color": "var(--magenta)" },
  yellow: { "--color": "var(--yellow)" },
};
