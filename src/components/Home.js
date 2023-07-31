// We'll need React Router's hook to navigate around
import { useNavigate } from "react-router-dom"

export default function Home() {
const navigate = useNavigate();
  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  const routeToShop = () => {
    navigate('/items-list')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        Shop now!
      </button>
    </div>
  )
}
