import React from "react";

function Cards() {
  const data = [
    {
      id: 1,
      title: "Enterprise Products",
      intro: "GST,E-Invocing,Max-ITC E-Way bill & more",
      button: "See Products",
    },
    {
      id: 2,
      title: "Budget 2023",
      intro: "Read about the Union Budget 2023 highlights",
      button: "Explore Now",
    },
    {
      id: 3,
      title: "ITR Filing",
      intro:
        "File ITR by yourself in minutes or get our experts to file for you",
      button: "See Products",
    },
  ];

  return (
    <>
      <div className="w-1/3 py-3 px-3 outline-none sm:w-full sm:px-0 sm:py-0 flex flex-wrap  justify-center mt-4">
        {data.map(({ id, title, intro, button }) => (
          <div
            className="promise-horizontal my-6 mx-4 sm:my-2 sm:mx-2 card-height hover-scale border-2 shadow-xl  rounded-[5px] w-[380px] cursor-pointer hover:scale-105 "
            key={id}
          >
            <div className="card bg-white p-3 border-radius-20">
              {/* <img
              src="https://assets1.cleartax-cdn.com/cleartax/images/1662628922_new_update_2.gif"
              height="30"
              width="155"
              alt=""
              class="notifyAlignment"
            /> */}
              <div className="card-face-one promise-icon-wrapper">
                <img
                  className=" mx-auto pt-8 h-[130px]"
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1644307634_clearone.png"
                />
              </div>
              <div className="card-face-one pb-6 text-center md:pb-2">
                <p className="text-[24px]  font-bold pb-4 sm:text-[30px] sm:pb-1">
                  {title}
                </p>
                <p className="h-24 text-[20px] text-gray-500 xl:h-auto md:w-full sm:w-full sm:h-10 ">
                  {intro}
                </p>
              </div>
              <div className="card-face-one text-center pt-2 text-blue-400 font-bold pb-4">
                {button} <span className="font-medium">&nbsp; →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
