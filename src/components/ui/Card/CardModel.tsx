import './Card.scss'

const CardModel = (props:CardModeli) => {
  return (
    <div className='card'>
      <h5>{props.title}</h5>
      <span>{props.body}</span>
    </div>
  )
}

export default CardModel
