import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bookingSeatAction} from '../../redux/actions/DatVeActions';


 class Seat extends Component {

renderSeat =()=> {
    return this.props.hangGhe.danhSachGhe.map((ghe, index)=> {
        let gheDaDatCss='';
        let disabled = false;
        if(ghe.daDat) {
            gheDaDatCss='gheDuocChon';
            disabled = true;
        }

        let gheDatCss ='';
        let indexGheDat = this.props.danhSachGheDat.findIndex(gheDat =>gheDat.soGhe === ghe.soGhe);
        if(indexGheDat !== -1) {
            gheDatCss ='gheDangChon';
        }

        return <button onClick ={()=> {
            this.props.datGhe(ghe)
        }} disabled={disabled} className={`ghe ${gheDaDatCss} ${gheDatCss}`} key={index}>
           {ghe.soGhe}
        </button>
    })
}

renderRowNum =() => {
    return this.props.hangGhe.danhSachGhe.map((hang,index) =>{
        return <button className='rowNumber'>
            {hang.soGhe}
        </button>
    })
}

renderHangGhe =() => {
    if(this.props.soHangGhe === 0) {
        return <div className='ml-4'>
            {this.props.hangGhe.hang} {this.renderRowNum()}
        </div>
    } else {
        return <div>
            {this.props.hangGhe.hang} {this.renderSeat()}
        </div>
    }
}

  render() {
    return (
      <div className='text-light text-left ml-5 mt-1' style={{fontSize:26}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        danhSachGheDat: state.BookingReducer.danhSachGheDat
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(bookingSeatAction(ghe))
        }
    }
}


export default connect (mapStateToProps,mapDispatchToProps) (Seat);