import { use } from "react"
import { ThemeContext } from "./ThemeProvider"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Theme = () => {
  const {mode, setMode} = use(ThemeContext)

  const handleButtonClick = () => {
    setMode(prevMode =>  prevMode === "Dark" ? "Light" : "Dark")
  }

  const getModeValue = () => {
    return  mode === "Dark" ? "Light" : "Dark";
  }

  const getModeIcon = () => {
    return  mode === "Dark" ? <MdOutlineLightMode className="m-[7px]"/> :
                              <MdDarkMode className="m-[7px]" />;
  }

  return (
    <main className={`text-[2rem] flex flex-col justify-center items-center gap-10 h-screen
          ${ mode == "Dark" ? "bg-[rgb(100,100,100)]" : "bg-white" }`} >
    <div>
      Dark Light Mode Website 🎭
    </div>
    <div>
      This project is made by Rajat Gangwar 😊
    </div>
      <button className="flex gap-[3px] text-[1.8rem] rounded-[25px] cursor-pointer order-3 w-100 p-4 text-center bg-green-300 hover:bg-stone-300 border-2 justify-center" onClick={handleButtonClick}>
          Switch To {getModeValue()} Mode {getModeIcon()}
      </button>
    </main>
  )
}

export default Theme