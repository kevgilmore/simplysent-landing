import { Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <span className="text-2xl font-bold text-white tracking-tight font-display">
                        SimplySent
                    </span>
                    <p className="text-gray-400 text-sm max-w-xs text-center md:text-left font-sans">
                        The perfect gift, found in minutes. Making
                        thoughtfulness effortless through AI.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-6">
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-gray-500 hover:text-[#8B83F2] transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-[#8B83F2] transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-500 hover:text-[#8B83F2] transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:hello@simplysent.app"
                            className="text-gray-500 hover:text-[#8B83F2] transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400 font-sans">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Support
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-sans">
                <p>
                    © {new Date().getFullYear()} SimplySent. All rights
                    reserved.
                </p>
                <div className="flex gap-4">
                    <span>Built with ❤️ for better gifting.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
