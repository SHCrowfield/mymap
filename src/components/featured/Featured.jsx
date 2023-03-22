import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://thetemplebarpub.com/wp-content/uploads/2022/12/IMG_0232-1.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://brewmook.files.wordpress.com/2014/06/wpid-014-the-tolbool-tavern-canongate-edinburgh-exterior.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Edinburgh</h1>
                <h2>222 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://live.staticflickr.com/3744/13742627943_16ef09a9c7_b.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>2342 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured