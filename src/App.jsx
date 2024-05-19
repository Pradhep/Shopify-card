import react,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Header from './Components/Header'


function App() {

  let data = [
    {
      id:"1",
      headenabler: true,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Special Item",
      starenabler:true,
      oprice:"$20.00",
      opriceneabler:true,
      nprice:"$18.00"
    }, 
    {
      id:"2",
      headenabler: true,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Sale Item",
      starenabler:false,
      oprice:"$50.00",
      opriceneabler:true,
      nprice:"$25.00"
    }, 
    {
      id:"3",
      headenabler: false,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Popular Item",
      starenabler:true,
      oprice:"$0.00",
      opriceneabler:false,
      nprice:"$40.00"
    }, 
    {
      id:"4",
      headenabler: true,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Sale Item",
      starenabler:false,
      oprice:"$50.00",
      opriceneabler:true,
      nprice:"$25.00"
    }, 
    {
      id:"5",
      headenabler: true,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Special Item",
      starenabler:true,
      oprice:"$20.00",
      opriceneabler:true,
      nprice:"$18.00"
    },
     {
      id:"6",
      headenabler: false,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Popular Item",
      starenabler:true,
      oprice:"$0.00",
      opriceneabler:false,
      nprice:"$40.00"
    },
    {
      id:"7",
      headenabler: true,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Special Item",
      starenabler:true,
      oprice:"$20.00",
      opriceneabler:true,
      nprice:"$18.00"
    },
     {
      id:"8",
      headenabler: false,
      imgurl: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      itemdesc:"Popular Item",
      starenabler:true,
      oprice:"$0.00",
      opriceneabler:false,
      nprice:"$40.00"
    }
    ]
      const [cart, setcart] = useState(0)

  return (
    <>
       <Navbar cart={cart}/>
       <Header />
       
        {/* <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   
                    {
                      data.map((e)=>{
                   return<> 
                   
                    <Card data ={e} setcart={setcart} key={e.id}/>
                    
                    </>
                  })
                  }
                
                </div>
            </div>
        </section>
        <Footer/>
       
        {/* <script src="js/scripts.js"></script> */}
    </>
  )
}

export default App
