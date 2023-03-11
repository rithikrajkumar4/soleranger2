import React from 'react'
import './Dashboard.css'
import {useSelector} from 'react-redux' ;

function Dashboard() {
  const {user} = useSelector(state => state.user) ;
  return (
    <div>
          <div className="row">
            <div className="col-12">
              {console.log(user)}
              <h1>Dashboard</h1>
              <hr />
            </div>
          </div>
    </div>
  )
}

export default Dashboard