import "./PropertyList.css"

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/43752/s960_Hotel_sign.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>456 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ixPdSl7.SV8A/v1/-1x-1.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://fishhotels-api.derbyhotels.com/storage/grehd/5e7870fc81f69d952e4deef0/m/hvr-fachada.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>785 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://www.travelandleisure.com/thmb/5R9bFSANt_omAnaJoF9_xSTOI4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-mexico-resort-hotel-Viceroy-Riviera-Maya-00-MXRESHOTWB21jpg-f32ab547d1d849369066e55312dc4440.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>678 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://static.dezeen.com/uploads/2021/01/niliaitta-cabin-studio-puisto-finland_dezeen_2364_sq3.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>444 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList