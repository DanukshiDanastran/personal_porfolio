import './Loader.css'

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p className="loading-text">DD</p>
    </div>
  )
}

export default Loader