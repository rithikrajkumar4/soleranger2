import React,{useEffect,useState} from 'react'
import ViewCard from '../Card/ViewCard'
import img1 from '../Assets/Carousel/carousel_img1.jpeg'
import Heading from '../modals/Heading/Heading'
import axios from 'axios' ;

function CardTray({product}) {
  
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
                {products.map((product) => (
                    <div className="col-lg-4 col-md-6 my-4" key={product._id}>
                        <ViewCard image={product.images.url}  product_name={product.name} brand_name={product.category} price={product.price} sizes={'UK4 UK5 UK6 UK7'} />
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