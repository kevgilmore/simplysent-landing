import { SliderButton } from '@typeform/embed-react'
import ReactGA from 'react-ga4'
import { useDispatch } from 'react-redux'
import { changeHidePopup } from '../redux/counterSlice'

const Typeform = () => {
  const formId = "Pe3D5X40"

  const dispatch = useDispatch()

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: 10,
    border: 'none',
    background: '#521442',
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
    cursor: 'pointer',
  }

  return (
    <SliderButton
      id={formId}
      size={60}
      style={buttonStyle}
      onReady={() => {
        ReactGA.event({
          category: 'Button Pressed',
          action: 'Typeform',
          label: formId,
        })
      }}

      onClose={() => {
        dispatch(changeHidePopup(false))
      }}
    >
      Join Waiting List
    </SliderButton>
  )
};

export default Typeform
