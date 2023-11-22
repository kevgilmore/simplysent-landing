import { SliderButton  } from '@typeform/embed-react'
import ReactGA from 'react-ga4'

const Typeform = () => {
  const formId = "Pe3D5X40"

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
          category: 'User interaction',
          action: 'Typeform button pressed',
          label: formId,
        })
      }}
    >
      Subscribe Now
    </SliderButton>
  )
};

export default Typeform
