import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
const Footer = () => {
  const socialclass =
    "w-[40px] h-[40px] rounded-full text-white flex items-center justify-center mr-5";
  return (
    <div className="flex">
      {/* left*/}
      <div className="flex flex-col p-5 w-1/3">
        <h1 className="font-bold text-3xl">Shoppenheimer</h1>
        <p className="my-5 mx-0">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex">
          <div className={socialclass} style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </div>
          <div className={socialclass} style={{ backgroundColor: "#E4405F" }}>
            <Instagram />
          </div>
          <div className={socialclass} style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className={socialclass} style={{ backgroundColor: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>

      {/*center */}
      <div className="w-1/3 p-5">
        <h3 className="font-semibold text-xl mb-[30px]">Useful Links</h3>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          <li className="w-1/2 mb-[10px]">Home</li>
          <li className="w-1/2 mb-[10px]">Cart</li>
          <li className="w-1/2 mb-[10px]">Men Fashion</li>
          <li className="w-1/2 mb-[10px]">Women Fashion</li>
          <li className="w-1/2 mb-[10px]">Accessories</li>
          <li className="w-1/2 mb-[10px]">My Account</li>
          <li className="w-1/2 mb-[10px]">Order Tracking</li>
          <li className="w-1/2 mb-[10px]">Wishlist</li>
          <li className="w-1/2 mb-[10px]">Terms</li>
        </ul>
      </div>

      {/*right */}
      <div className="w-1/3 p-5">
        <h1 className="font-bold mb-2 text-2xl">Contact</h1>
        <div className="mb-5 flex items-center">
          <Room style={{ marginRight: "10px" }} /> A-27B Chhatrashal
          Nagar,Malviya Nagar 302017
        </div>
        <div className="mb-5 flex items-center">
          <Phone style={{ marginRight: "10px" }} /> +91 969 47 154
        </div>
        <div className="mb-5 flex items-center">
          <MailOutline style={{ marginRight: "10px" }} /> contact@me.com
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" className="w-1/2" />
      </div>
    </div>
  );
};

export default Footer;
