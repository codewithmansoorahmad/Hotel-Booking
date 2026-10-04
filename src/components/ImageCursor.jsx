export default function ImageCursor({hotelDetails}){
 return   <div className="image-cursor">
    <div className="main-image">
        <img src={hotelDetails.image} alt="" />

    </div>
    <div className="images">
        {
            hotelDetails.images.map((item,index)=>{
             return   index==0?null:
                 <img src={item} alt="" key={index} />
            })
        }
    </div>

    </div>
}