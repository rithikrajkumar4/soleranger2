import React,{useEffect,useState} from 'react'
import ViewCard from '../Card/ViewCard'
import img1 from '../Assets/Carousel/carousel_img1.jpeg'
import Heading from '../modals/Heading/Heading'
<<<<<<< HEAD
import './CardTray.css'
=======
>>>>>>> 1cb68dd1fc660736e5778201e8680f3a98feb9bf

import axios from 'axios' ;

function CardTray() {
  
    const [products,setProducts] =useState([]);
    const [isLoading,setIsLoading] = useState(true) ;

    useEffect(() =>{
        const fetchData = async () =>{
            const req = await axios.get('http://localhost:4000/api/v1/products') ;
            setProducts(req.data.product) ;
            setIsLoading(false) ;
            return req ;
        }
    
        fetchData() ;
    },[])
  
   return (
    <div className='cardTray container-lg'>
        { isLoading ?(
            <span> loading.... </span>
        ) :( <>
            <div className="row" align='center'>
                <Heading heading__name={"Products"} />
                {products.map((product) => (
                    <div className="col-lg-4 col-md-6 my-4" key={product._id}>
                        <ViewCard image={img1}  product_name={product.name} brand_name={product.category} price={product.price} />
                    </div>
                ))}
            </div>
         </>
        )}
    </div>
  )
}
<ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
export default CardTray