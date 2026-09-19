import { Link } from 'react-router-dom'
import Container from '../container/Container'

function Navbar() {
    return (
        <div className="h-20 border-b   bg-pink-300  shadow-xl  flex justify-between items-center"  >
            <Container className='mx-auto'>
                <div className='flex justify-between items-center '>
                    <ul className='flex gap-2'>
                        <li>
                            <Link to="/" >خانه</Link>
                        </li>
                        <li>
                            <Link to="/Store" >فروشگاه</Link>
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