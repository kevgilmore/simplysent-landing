const FAQ = () => {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="md:w-5/6 sm:text-4xl text-4xl mb-4 font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <dl>
          <div className="py-6">
            <dt className="text-lg leading-6 font-medium text-zinc-900">
              Do I need to choose a new card every year?
            </dt>
            <dd className="mt-2 text-base text-zinc-500">
              No, that's our job! We'll send you a new card every year, so you don't have to worry about choosing a new card and you'll never receive the same card twice.
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-lg leading-6 font-medium text-zinc-900">
              Can I change the message inside the card?
            </dt>
            <dd className="mt-2 text-base text-zinc-500">
              Yes! Just send us an e-mail (find contact below) with the message you'd like to include in your card and we'll update your order.
              We're working on adding this feature to our website, please click here to vote for this feature.
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-lg leading-6 font-medium text-zinc-900">
              When do you send the cards?
            </dt>
            <dd className="mt-2 text-base text-zinc-500">
              We consider the distance to the recipients address so they receive the card the day before, or on the day. <br/>
              Mother's Day: 14th March <br/>
              Father's Day: 20th June
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-lg leading-6 font-medium text-zinc-900">
              Can I cancel my subscription?
            </dt>
            <dd className="mt-2 text-base text-zinc-500">
              Yes, we can offer a cancellation and refund for all unsent cards. Just send us an e-mail (find contact below) and we'll cancel your subscription.
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-lg leading-6 font-medium text-zinc-900">
              What style of cards are they i.e. funny, rude, etc?
            </dt>
            <dd className="mt-2 text-base text-zinc-500">
              We avoid rude and cheeky cards that may put people off. We focus on elegant and timeless designs that suit all Mothers and Fathers.
            </dd>
          </div>
        </dl>
      </section>
    )
}

export default FAQ