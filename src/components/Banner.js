import { PopupButton  } from '@typeform/embed-react'
import ReactGA from 'react-ga4'

const Banner = () => {
    const formId = "RCck1QEI"

    const buttonStyle = {
        fontSize: 16,
        border: 'none',
        paddingLeft: 10,
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'underline',
      }

    return (
        <div className="px-2 bg-gray-900 text-white">
  <div className=" text-center container py-2">
    <div className="flex flex-row justify-center">
      <span className="font-medium">
       Black Friday Offer Get x5 FREE Christmas Cards (NO Credit Card Required) {' '}
      </span>


      <PopupButton
      id={formId}
      size={60}
      style={buttonStyle}
      onReady={() => {
        ReactGA.event({
          category: 'Button Pressed',
          action: 'Typeform black friday',
          label: formId,
        })
      }}
    >
      START NOW
    </PopupButton>
    </div>
  </div>
</div>
    )
}

export default Banner