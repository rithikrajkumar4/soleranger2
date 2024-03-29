import React from 'react'
import './Map.css'

function Map() {
  return (
    <div className='home__map' id='location'>
        <div className="container-lg">
            <div className="row">
              <h1 className="text-5xl font-poppins font-bold py-4 pb-10 text-center uppercase md:text-6xl hover:underline">
                 store location 
              </h1>
              {/* <hr /> */}
                <div className="col-12 map__col" align='center'>
                    <iframe title='Store Loaction' 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6762275285855!2d77.25703131558998!3d28.549449982450664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c45e36801d%3A0x3c7e9785dacb79d9!2sKalkaji%20Mandir!5e0!3m2!1sen!2sin!4v1678048398463!5m2!1sen!2sin" className='home__mapElement' 
                      width="570" 
                      height="430"  
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Map 