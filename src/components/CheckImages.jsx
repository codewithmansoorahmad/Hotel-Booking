import { hotels } from "../JS service/AllHotelsCode";

export default function Images(){
    return <div className="images">
        {
            hotels.map((item)=>{
                return <div className="hotel" key={item.id} style={{display:"flex"}}>
                    <h1>{item.name}</h1>
                    <img src={hotels.image} width="400px" alt="" />
                    {
                        item.images.map((img,index )=>{
                            return <div className="image" key={index}>
                                <img src={img} width="400px" alt="" />
                            </div>
                        })
                    }
<br />
<hr />
                </div>
             
            })
        }
    </div>
}