import './MostPopular.css'
import { BoxCard, SectionHeader, SectionWrapper } from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'


const cards = MostPopularData.map(card => {
  return <BoxCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
})


const MostPopular = () => {
  return (
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <div className="most-popular-items">
        {cards}
      </div>
    </SectionWrapper>
  )
}

export default MostPopular
