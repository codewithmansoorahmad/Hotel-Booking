import { hotels } from "../JS service/AllHotelsCode";

export default function Images(){
    return <div className="images">
        {
            hotels.map((item)=>{
                return <div className="hotel" key={item.id} style={{display:"flex"}}>
                    <h1>{item.name}</h1>
                    <img src={item.image} height="300px" width="300px" alt="" />
                    {
                        item.images.map((img,index )=>{
                            return <div className="image" key={index}>
                                <img src={img} width="200px" height="200px" alt="" />
                            </div>
                        })
                    }
<br />
<hr />
<hr />
<hr />
                </div>
             
            })
        }
    </div>
}