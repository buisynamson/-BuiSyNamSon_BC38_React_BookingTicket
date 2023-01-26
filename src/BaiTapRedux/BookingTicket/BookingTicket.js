import React, { Component } from "react";
import seatData from "../../Data/danhSachGhe.json";
import Seat from "./Seat";
import SeatInfo from "./SeatInfo";
import "./BookingTicket.css";

export default class BookingTicket extends Component {

  renderHangGhe = () => {
    return seatData.map((hangGhe, index) => {
      return <div key={index}>
          <Seat hangGhe={hangGhe} soHangGhe={index} />
        </div>
    });
  };

  render() {
    return (
      <div className="bookingTicket"
        style={{
          backgroundImage: "url('./bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="display-3 text-light">JAV CINEMA VIP</div>
                <div className="mt-3 text-light" style={{ fontSize: 25 }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                  {this.renderHangGhe()}
                </div>
              </div>

              <div className="col-4">
                <div className="text-light mt-4" style={{ fontSize: 30 }}>
                  DANH SÁCH GHẾ 
                </div>
                <SeatInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
