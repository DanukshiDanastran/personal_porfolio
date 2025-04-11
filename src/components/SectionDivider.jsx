import './SectionDivider.css'

function SectionDivider({ title }) {
  return (
    <div className="section-divider">
      <div className="divider-line"></div>
      <h2 className="divider-title">{title}</h2>
      <div className="divider-line"></div>
    </div>
  )
}

export default SectionDivider