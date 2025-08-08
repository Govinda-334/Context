
import image from './image/image.png'
function Card() {
  return (
 <div className='Card'>
    <img  src={image}className='Card-img'  alt='logo'></img>
    <h1 className='Card-title'>Avenger End Game</h1>
    <p className='Card-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde tenetur est consectetur omnis autem modi repudiandae dolor nam recusandae ad totam hic, quibusdam eum dolorem suscipit vitae quod ut? Veritatis ratione nostrum exercitationem nihil, enim hic, vitae non quo, nesciunt quas dolores. Nesciunt aspernatur vel aliquid, ducimus omnis id quam!</p>
 </div>
  )
}

export default Card