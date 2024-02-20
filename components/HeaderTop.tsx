import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const HeaderTop = () => {
  return (
    <div className="border-b border-orange-300 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <FaInstagram />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaGithub />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <FaLinkedin />
                    </div>
                </div>

                <div className="text-gray-500 text-[12px]">
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - RS.5000
                </div>

                <div className="flex gap-4">
                    <select
                    className="text-gray-500 text-[12px] w-[70px]"
                    name="currency"
                    id="currency"
                    >
                    <option value="NPR">NPR</option>
                    <option value="USD $">USD $</option>
                    <option value="INR">INR</option>
                    </select>

                    <select
                    className="text-gray-500 text-[12px] w-[80px]"
                    name="language"
                    id="language"
                    >
                    <option value="English">English</option>
                    <option value="French">French</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
