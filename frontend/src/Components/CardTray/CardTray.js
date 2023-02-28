import React from 'react'
import ViewCard from '../Card/ViewCard'
import img1 from '../Assets/Carousel/carousel_img1.jpeg'
import Heading from '../modals/Heading/Heading'

function CardTray({product}) {
  return (
    <div className='cardTray container-lg'>
        <Heading heading__name='PRODUCTS'/>
        <div className="row" align='center'>
            <div className="col-lg-4 col-md-6 my-4">
                <ViewCard image={img1}  product_name={product.name} brand_name='Brand' price={product.price} sizes={'UK4 UK5 UK6 UK7'}/>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
                <ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
                <ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
                <ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
                <ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
            </div>
            <div className="col-lg-4 col-md-6 my-4">
                <ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
            </div>
        </div>
    </div>
  )
}
<ViewCard image={img1}  product_name='Shoe Name' brand_name='Brand' price='14,000' sizes={'UK4 UK5 UK6 UK7'}/>
export default CardTray