import React,{useState} from 'react'

function Card({data,setcart}) {
    
    let [toggle,settoggle]= useState(true)
  return <>
  <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{data.headenabler?"Sale":""}</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src={data.imgurl} alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{data.itemdesc}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className={data.starenabler?"bi-star-fill":""}></div>
                                        <div className={data.starenabler?"bi-star-fill":""}></div>
                                        <div className={data.starenabler?"bi-star-fill":""}></div>
                                        <div className={data.starenabler?"bi-star-fill":""}></div>
                                        <div className={data.starenabler?"bi-star-fill":""}></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{data.opriceneabler?data.oprice:""}</span>
                                    {data.nprice}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {

                                    toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        settoggle(curr=>!curr)
                                        setcart(Prev=>Prev+1)
                                    }}>Add to cart</button>:
                                    
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        settoggle(curr=>!curr)
                                        setcart(Prev=>Prev-1)
                                    }}>Remove from cart</button>
                                   
                                    }
                            </div>
                        </div>
                    </div>
    </div>
  </>
}

export default Card