const Register = () => {
  return (
    <>
      <div
        id="background"
        className="fixed z-[-2] w-full h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.5,
        }}
      ></div>
      <div
        id="foreground"
        className="w-screen h-screen flex items-center justify-center "
      >
        <div className="fixed z-[-1] w-1/2 h-3/4 bg-black opacity-10 rounded-md"></div>
        <div className="w-1/2 h-3/4 rounded-md">
          <h1 className="w-full h-[15%] p-2 text-6xl flex justify-center items-start font-thin">
            REGISTER
          </h1>
          <div id="box" className="h-3/4 w-3/4 mx-auto my-auto">
            <form className="flex flex-col">
              <div className="flex flex-wrap">
                <input
                  className="flex-1 min-w-[40%] mt-5 mb-5 mx-1 p-[10px] rounded-sm"
                  placeholder="First Name"
                />
                <input
                  className="flex-1 min-w-[40%] mt-5 mb-5 mx-1 p-[10px] rounded-sm"
                  placeholder="Last Name"
                />
              </div>
              <input
                className="mt-5 mb-5 mx-1 p-[10px] rounded-sm"
                placeholder="e-mail"
              />
              <input
                className="mt-5 mb-5 mx-1 p-[10px] rounded-sm"
                placeholder="Password"
                type="password"
              />
              <input
                className="mt-5 mb-5 mx-1 p-[10px] rounded-sm"
                placeholder="Confirm Password"
                type="password"
              />
              <span className="text-[12px] my-5 ml-2">
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button className="mx-auto my-auto w-[60%] border-none py-[15px] px-5 bg-slate-500 text-white cursor-pointer rounded-sm">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
