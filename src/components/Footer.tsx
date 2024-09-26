
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/background/constellation.svg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About DocuChat</h2>
            <p className="text-gray-300">
              FetchIt is a delivery service dedicated to bringing your products
              right to your doorstep with convenience and speed. We strive to
              ensure customer satisfaction with every order.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <p className="text-gray-300 mb-4">
              Stay connected with us through social platforms.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="text-white hover:text-blue-500 transition-colors" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="text-white hover:text-pink-500 transition-colors" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="text-white hover:text-green-500 transition-colors" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="text-white hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} FetchIt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
