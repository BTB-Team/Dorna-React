
function GoldenHeading(props) {
  const align = props.align || 'center';
  return (
    <>
        <h2 className={`text-${align} text-accent text-3xl font-title leading-[33px] tracking-normal capitalize mb-md-custom`}>
         {props.text}
        </h2>
    </>
  )
}

export default GoldenHeading