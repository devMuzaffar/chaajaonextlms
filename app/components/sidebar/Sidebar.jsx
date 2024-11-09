import { Button } from "@mui/material";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";



const Sidebar = () => {
  return (
    <div className="w-1/4 border-2 h-full border-white">

        {/* Red Sidebar */}
        <div className="bg-primary text-white rounded-xl">

            {/* Icon with hide button */}
            <div className="flex items-center justify-evenly h-24">
                {/* Icon */}
                <div className="flex items-center gap-3">
                    <img className="w-8" src="./logo.png" alt="" />
                    <img className="w-32" src="./logo-text.png" alt="" />
                </div>
                <MdOutlineMenuOpen className="cursor-pointer" size={24}/>
            </div>


            {/* Menu List */}
            <div>

                {/* Item 1 */}
                {[1,2,3].map((_, index) => (<div key={index} className="bg-secondary rounded-xl shadow-md flex items-center gap-3 px-3 py-2 mx-2 my-4">
                    <RiHome2Line size={28}/>
                    <p className="font-medium">Home</p>
                </div>))}

                <Button sx={{
                    padding: "8px 12px",
                    margin: " 12px 8px",
                    width: "100%",
                    borderRadius: "12px",
                    justifyContent: "start",
                    


                }} variant="contained" endIcon={<RiHome2Line size={28}/>}>
                Home
                </Button>


            </div>

        </div>

    </div>
  )
}

export default Sidebar