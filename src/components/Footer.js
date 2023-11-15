const Footer = () => {
    return (
        <div className="my-12">
        <div className="mx-auto w-4/5 px-4 py-2 text-base text-gray-700">
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row flex-wrap items-center mx-auto container justify-center md:space-x-6 py-4">
            <a
                className="items-center gap-2"
                href="mailto:hello@simplysent.co"
                rel="noopener noreferrer"
            >
                <span className="hover:underline focus-visible:underline">
                Contact
                </span>
            </a>
            </div>
            <div className="mt-5">
            <div className="mx-auto md:w-4/5 px-4 py-2 text-center md:text-left">
                <div className="flex items-center py-2 text-sm text-gray-700">
                <span className="mx-auto">
                    Simplysent © Copyright 2023. All Rights Reserved{' '}
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;