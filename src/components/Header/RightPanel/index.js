import React from "react";
import { ChatApi } from "../../../assets/api/ChatApi";
import { MdClose } from "react-icons/md";

const RightPanel = () => {
  const openNav = () => {
    document.getElementById("rightPanel").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("rightPanel").style.width = "0";
  };

  return (
    <>
      <div className="chat_btn">
        <div className="card" onClick={openNav}>
          <img src="/images/chat.png" alt="Loading..." />
        </div>
      </div>
      <div className="RightPanel" id="rightPanel">
        <div className="chat pt-2">
          <div className="container-fluid close_section">
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <MdClose className="icon" onClick={closeNav} />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              {ChatApi.map((list) => {
                return (
                  <div className="col-12 chart_section">
                    <div className="card_list d-flex">
                      <div className="img_section">
                        <img
                          src={list.img1}
                          alt="Loading..."
                          className="img_people"
                        />
                        {list.img2 && (
                          <img
                            src="/images/Group.png"
                            alt="Loading..."
                            className="user_type"
                          />
                        )}
                      </div>
                      <div className="details_section">
                        <div className="NameTime d-flex align-items-center">
                          <div className="name pl-2">
                            <h1>{list.name}</h1>
                          </div>
                          <div className="time">
                            <p>{list.time}</p>
                          </div>
                        </div>
                        <div className="message_section mt-2 pl-2">
                          <div className="message_card">
                            <p>{list.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="search_section ">
            <div className="search_card d-flex align-items-center">
              <div className="search">
                <input type="text" name="search" autoComplete="off" />
                <img src="/images/Enjoy.png" alt="Loading..." />
              </div>
              <div className="send_icon pl-2">
                <img src="/images/send_icon.png" alt="Loading..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
