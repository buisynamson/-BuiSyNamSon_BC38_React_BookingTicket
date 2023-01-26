import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelSeatAction } from "../../redux/actions/DatVeActions";

class SeatInfo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light mx-3" style={{ fontSize: "28px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"> </button>
          <span className="text-light mx-3" style={{ fontSize: "28px" }}>
            Ghế bạn chọn
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-light mx-3" style={{ fontSize: "28px" }}>
            Ghế trống
          </span>
        </div>

        <div className="mt-5">
          <table className="table table-bordered" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDat.map((gheDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDat.soGhe}</td>
                    <td>{gheDat.gia.toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatch(cancelSeatAction(gheDat.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td>Tổng tiền (tạm tính): </td>
                <td>
                  {this.props.danhSachGheDat
                    .reduce((tongTien, gheDat) => {
                      return (tongTien += gheDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDat: state.BookingReducer.danhSachGheDat,
  };
};

export default connect(mapStateToProps)(SeatInfo);
