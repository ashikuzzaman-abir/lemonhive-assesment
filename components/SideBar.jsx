import { useState } from "react";
import Image from "next/image";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
// import { useEffect } from "react";

const initialMenu = [
  "Organizer",
  "Speakers",
  "Location",
  "Schedule",
  "Sponsors",
];
function SideBar() {
  const [menu, setMenu] = useState(initialMenu);
  const [active, setActive] = useState("Speakers");
  const handleDragEnd = (e) => {
    // console.log(e);
    if (!e.destination) {
      return;
    }
    if (e.destination.index === e.source.index) {
      return;
    }
    const temp = menu[e.source.index];
    setMenu((prev) => {
      const array = [...prev];
      array.splice(e.source.index, 1);
      array.splice(e.destination.index, 0, temp);
      return array;
    });
  };

  // useEffect(() => {
  //     console.log(menu)
  // },[menu]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {resetServerContext()}
      <Droppable droppableId="drop-box-1">
        {(provided) => (
          <div className="SideBar w-full sm:justify-center lg:justify-start pt-8 select-none cursor-pointer sm:w-full lg:w-[365px] ">
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {menu.map((item, i) => {
                return (
                  <Draggable key={i} draggableId={`draggable-${i}`} index={i}>
                    {(provider) => (
                      <div
                        {...provider.draggableProps}
                        ref={provider.innerRef}
                        onClick={() => setActive(item)}
                        className={`flex mx-auto lg:mx-0 items-center sm:w-[90vw] max-w-[365px] h-[72px] p-2 gap-11 rounded-lg mb-8 ${
                          item === active
                            ? " bg-chromeYellow custom-shadow"
                            : " bg-white border-solid border "
                        }`}
                      >
                        <div
                          {...provider.dragHandleProps}
                          className="p-[15px] rounded-lg bg-white"
                        >
                          <div className="relative w-[25px] h-[22px] ">
                            <Image
                              src="/assets/conference/Vector.svg"
                              layout="fill"
                              priority
                              alt={item}
                            />
                          </div>
                        </div>
                        <h3
                          className={`text-h3 font-bold ${
                            item === active ? " text-white" : "text-darkblue"
                          }`}
                        >
                          {item}
                        </h3>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default SideBar;
