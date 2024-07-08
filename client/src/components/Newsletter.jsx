import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <section className="bg-[#f1eded] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Newsletter</h2>
        <p className="text-xl md:text-2xl font-light mb-8">
          Get timely updates from your favorite products.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            <Send className="mr-2" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;