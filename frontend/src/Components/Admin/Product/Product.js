import React,{useEffect,useState} from 'react'
import axios from 'axios' ;
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
// import axios from 'axios' ;
import './Product.css'
import { useNavigate } from 'react-router-dom';

function Product() {
  
    const [products,setProducts] = useState([]) ;
    const[isLoading,setIsLoading] = useState(true) ;
    const navigate = useNavigate() ;
    const {user} = useSelector(state => state.user) ;

    const updateProduct = () =>{
        console.log(user) ;
    }

    const deleteProduct =  async (id) =>{
        console.log('clicked',id)
        await axios.delete(`http://localhost:4000/api/v1/admin/product/${id}`, { data: {user} ,headers: { "Authorization": "***" }} )
         .then((res) =>{
            console.log('deleted',res) ;
            window.location.reload(true)
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
        </div>
            <div className="row">
                <div className="col-12">
                    {
                        isLoading ? (
                            <span> .... isLoading </span>
                        ):(
                            <table className="table table-success table-striped">
                            <thead>
                            <tr align='center'>
                               
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
                                                <td>{product._id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.brand}</td>
                                                <td>{product.category}</td>
                                                <td>{product.price}</td>
                                                <td>{product.stock[0].key}</td>
                                                <td>{product.user}</td>
                                                <td className='product__tableAction'> 
                                                    <EditIcon className='product__editIcon' onClick={() => updateProduct()}/>
                                                    <DeleteIcon className='product__deleteIcon' onClick={()=>deleteProduct(product._id)}/>
                                                </td>
                                            </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        )
                    }
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="create__product" onClick={() => navigate('create-product')}> Create </button>
                </div>
            </div>

    </div>
  )
}

export default Product
