import React, {Component} from 'react';
import './homestay.css';

class HomeStay extends Component {
    handleClick = () => {
        this.props.selectHomestay(this.props.homestay);
    }
    render(){
        const judul = `${this.props.homestay.nama}`;
        const style = {
            backgroundImage: `url(${this.props.homestay.foto})`
        };
        const descriptions = `${this.props.homestay.deskripsi}`;
        const hargaHotel = `- Rp. ${this.props.homestay.harga} rb / day`;
    
        return (
            <div className="homestay" onClick={this.handleClick}>
                <div className="card shadow">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="homestay-foto" style={style}></div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                            <h6 className="card-title fs-6">{judul}</h6>
                            <p className="card-text"><small>{descriptions}</small></p>
                            <div className="float-end mt-4 txt-color">{hargaHotel}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="homestay-foto" style={style}></div>
                <h5>Coba</h5> */}
                {/* <div className="homestay-judul">{judul}</div> */}
            </div>
        )
    }
}

export default HomeStay;