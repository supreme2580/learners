import Link from "next/link";

const login = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-[280px] sm:max-w-sm flex flex-col items-center space-y-3 p-4 border border-green-600 rounded-lg shadow-lg shadow-green-600">
          <h1 className="text-2xl sm:text-4xl text-white font-semibold">Welcome To Learners</h1>
          <h2 className="text-white sm:text-center">Login here to access your learners account to start learning and earning.</h2>
          <form className="flex flex-col w-full space-y-3">
            <p className="text-white text-left">Enter your email address</p>
            <input type="email" placeholder="e.g johndoe@gmail.com" className="p-3 placeholder-black rounded-md outline-none" />
            <p className="text-white text-left">Enter your password</p>
            <input type="password" placeholder="e.g grade123" className="p-3 placeholder-black rounded-md outline-none" />
            <button type="submit" className="text-white w-full bg-green-600 p-3 rounded-md">Login</button>
          </form>
          <p className="text-white">Do not have an account? <span className="text-green-600 font-semibold"><Link href="/"><a>Sign up here</a></Link></span></p>
        </div>
      </div>
      <div className="flex space-x-1 absolute bottom-0 w-full text-white mb-3 sm:mb-6 justify-center">
        <div className="hover:text-green-600"><Link href="/" className="hover:text-green-600"><a>About us</a></Link></div><div className="text-green-600">|</div>
        <div className="hover:text-green-600"><Link href="/" className="hover:text-green-600"><a>Support us</a></Link></div><div className="text-green-600">|</div>
        <div className="hover:text-green-600"><Link href="/" className="hover:text-green-600"><a>Report a problem</a></Link></div>
      </div>
    </div>
  )
}

export default login;