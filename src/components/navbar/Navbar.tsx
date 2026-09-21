import { Link } from 'react-router-dom'
import Container from '../container/Container'

function Navbar() {
    return (
        <div className="h-20 border-b   bg-pink-300  shadow-xl  flex justify-between items-center"  >
            <Container className='mx-auto'>
                <div className='flex justify-between items-center '>
                    <ul className='flex gap-4'>
                        <li>
                            <Link to="/" >خانه</Link>
                        </li>
                        <li>
                            <Link to="/Store" >فروشگاه</Link>
                        </li>
                        <li>
                            <a href="https://the-to-do-list-5z9e.vercel.app/">فهرست کارها</a>
                        </li>
                    
                    </ul>



                    <div>
                        
                        <button> سبدخرید</button>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Navbar