import './GamingLibrary.css'
import { GamingCard, SectionHeader, SectionWrapper } from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibraryData'



const Gaming_Cards = GamingLibraryData.map(card => {
  return <GamingCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} downloaded={card.download} />
})

const GamingLibrary = () => {
  return (
    <SectionWrapper>
      <SectionHeader><em>Gaming</em> Library</SectionHeader>
      <div className="Gaming-Library-Cards">
        {Gaming_Cards}
      </div>
    </SectionWrapper>
  )
}

export default GamingLibrary
