"use client";
import { useState } from "react";
import courseList from "../../list/courseList";
import Card from "./components/Card";


const SelectionTile = () => {

  const [selectedIndex, setSelectedIndex] = useState(false);

  return (
    <div>

        {/* Card List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* Card */}
            {courseList.map(({icon, title, desc}, index) => (
                <Card
                    key={index}
                    icon={icon}
                    title={title}
                    desc={desc}
                    isSelected={index === selectedIndex}
                    onClick={() => { setSelectedIndex(index) }}
                />
            ))}

        </div>

    </div>
  )
}

export default SelectionTile