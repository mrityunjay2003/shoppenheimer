import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
      <h1 className="text-6xl font-semibold mb-5">Newsletter</h1>
      <div className="text-2xl font-light mb-5">
        Get timely updates from your favourite products.
      </div>
      <div className="w-1/2 h-[40px] bg-white flex justify-between items-center border border-gray-600 border-solid">
        <input
          placeholder=" Your e-mail"
          className="border-none h-[38px] w-[812px] pl-4"
        />
        <div className="w-[32px] h-[32px] hover:bg-teal-200 rounded-full flex items-center justify-center ">
          <button className="ml-[2px]">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
