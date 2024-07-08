import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ Icon, bgColor, to }) => (
  <Link
    to={to}
    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110`}
    style={{ backgroundColor: bgColor }}
  >
    <Icon />
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Shoppenheimer</h2>
            <p className="text-sm">
              Elevate your style with Shoppenheimer. We offer a curated selection of fashion and accessories for the modern shopper.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Facebook} bgColor="#3B5999" to="/facebook" />
              <SocialIcon Icon={Instagram} bgColor="#E4405F" to="/instagram" />
              <SocialIcon Icon={Twitter} bgColor="#55ACEE" to="/twitter" />
              <SocialIcon Icon={Pinterest} bgColor="#E60023" to="/pinterest" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Useful Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Cart", path: "/cart" },
                { name: "Men Fashion", path: "/category/men" },
                { name: "Women Fashion", path: "/category/women" },
                { name: "Accessories", path: "/category/accessories" },
                { name: "My Account", path: "/account" },
                { name: "Order Tracking", path: "/order-tracking" },
                { name: "Wishlist", path: "/wishlist" },
                { name: "Terms", path: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-indigo-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Room className="mr-2 text-indigo-600" />
                A-27B Chhatrashal Nagar, Malviya Nagar 302017
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-indigo-600" />
                +91 969 47 154
              </p>
              <Link to="/contact" className="flex items-center hover:text-indigo-600 transition-colors">
                <MailOutline className="mr-2 text-indigo-600" />
                contact@shoppenheimer.com
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Payment Methods</h3>
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment Methods" className="max-w-full h-auto" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm">
          © {new Date().getFullYear()} Shoppenheimer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;