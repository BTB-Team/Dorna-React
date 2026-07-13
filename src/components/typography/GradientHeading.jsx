
function GradientHeading(props) {
  return (
    <>
        <h2 className="text-center text-heading font-title bg-gradient-to-r from-[#073835] to-[rgba(0,183,169,1)] bg-clip-text text-transparent   leading-[100%] tracking-normal capitalize text-heading mb-md-custom">
          {props.text}
        </h2>
    </>
  )
}

export default GradientHeading