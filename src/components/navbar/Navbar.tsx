import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../container/Container'

function Navbar() {
    return (
        <Container >
            <div className="h-20  shadow border-b bg-blue-50 flex justify-between items-center p-2 rounded-sm"  >
                <ul className='flex gap-2'>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/Store" >Store</Link>
                    </li>
                    <li>
                        <Link to="/" ></Link>
                    </li>
                    <li>
                        <Link to="/" ></Link>
                    </li>

                </ul>



                <div>
                    <button> سبد خرید</button>
                </div>
            </div>
        </Container>

    )
}

export default Navbar