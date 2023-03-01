import React,{useEffect,useState} from 'react'
import axios from 'axios' ;
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import axios from 'axios' ;

function Product() {
  
    const [products,setProducts] = useState([]) ;
    const[isLoading,setIsLoading] = useState(true) ;
    const [num,setNum] = useState(1) ;


    const deleteProduct =  async (id) =>{
        await axios.delete(`http://localhost:4000/api/v1/admin/product/:${id}`)
         .then((res) =>{
            console.log('deleted',res) ;
         })
         .catch((err) => {
            console.log('error',err) ;
         })
    }

    useEffect(()=>{
        const fetchData = async () =>{
            const req = await axios.get('http://localhost:4000/api/v1/products') ;
            setProducts(req.data.product) ;
            setIsLoading(false) ;
            return req ;
        }
    
        fetchData() ;
    },[])
  
  return (
    <div>
        <div className="row">
            <div className="col-12">
                <h1>Products</h1>
                <hr />
            </div>
            {
                isLoading ? (
                    <span> .... isLoading </span>
                ):(
                    <table className="table table-success table-striped">
                    <thead>
                      <tr align='center'>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
                                    <tr key={product._id} align='center'> 
                                        <th scope="row">{num}</th>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.user}</td>
                                        <td className='product__tableAction'> 
                                            <EditIcon className='product__editIcon'/>
                                            <DeleteIcon className='product__deleteIcon'/>
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                  </table>
                )
            }
        </div>
    </div>
  )
}

export default Product


{/* <div classNameName="row">
{
    products.map((product) => (
        <div className="col-lg-4 col-6">
            <ProductCard name={product.name} brand__name='brand'/>
        </div>
    ))
}
</div> */}