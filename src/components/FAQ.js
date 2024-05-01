const FAQ = () => {
    return (
<section className="bg-white">
  <div className="mb-24 w-4/5 md:w-2/3 mx-auto">
    <div className=" text-center md:pt-16 md:mt-14">
      <h1 className="font-bold text-3xl md:text-5xl">
        Frequently Asked Questions
      </h1>
    </div>
    <div className="mt-16 text-lg">
      <div className="pb-12 flex flex-col space-y-6">
        <details
          className="mx-4  bg-white faqBoxShadow1 rounded-lg"
          open
        >
          <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-xl cursor-pointer">
          Do I need to choose a new card every year?
          </summary>
          <div>
            <p className="text-gray-600 text-base md:text-lg px-4 pb-6">
              {' '}No, that's our job! We'll send you a new card every year, so you don't have to worry about choosing a new card and you'll never receive the same card twice.
            </p>
          </div>
        </details>
        <details
          className="mx-4  bg-white faqBoxShadow1 rounded-lg"
          open
        >
          <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-xl cursor-pointer">
          Can I change the message inside the card?
          </summary>
          <div>
            <p className="text-gray-600 text-base md:text-lg px-4 pb-6">
              {' '}Yes! Just send us an e-mail (find contact below) with the message you'd like to include in your card and we'll update your order. We're working on adding this feature to our website, please click here to vote for this feature.
            </p>
          </div>
        </details>
        <details
          className="mx-4  bg-white faqBoxShadow1 rounded-lg"
          open
        >
          <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-xl cursor-pointer">
          When do you send the cards?
          </summary>
          <div>
            <p className="text-gray-600 text-base md:text-lg px-4 pb-6">
              {' '}We consider the distance to the recipients address so they receive the card the day before, or on the day.
              <br></br>
              Mother's Day: 14th March
              <br></br>
              Father's Day: 20th June
            </p>
          </div>
        </details>
        <details
          className="mx-4  bg-white faqBoxShadow1 rounded-lg"
          open
        >
          <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-xl cursor-pointer">
          Can I cancel my subscription?
          </summary>
          <div>
            <p className="text-gray-600 text-base md:text-lg px-4 pb-6">
            Yes, we can offer a cancellation and refund for all unsent cards. Just send us an e-mail (find contact below) and we'll cancel your subscription.
            </p>
          </div>
        </details>
        <details
          className="mx-4  bg-white faqBoxShadow1 rounded-lg"
          open
        >
          <summary className="font-bold text-[#0E004A] rounded-lg py-6 px-4 text-xl cursor-pointer">
          What style of cards are they i.e. funny, rude, etc?
          </summary>
          <div>
            <p className="text-gray-600 text-base md:text-lg px-4 pb-6">
            We avoid rude and cheeky cards that may put people off. We focus on elegant and timeless designs that suit all Mothers and Fathers.
            </p>
          </div>
        </details>
       
      </div>
    </div>
  </div>
</section>
    )
}

export default FAQ