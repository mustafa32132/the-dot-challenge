function App() {
  function handelPlaceCircle(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {}

  return (
    <div className="h-[100vh]">
      <div onClick={handelPlaceCircle}></div>
    </div>
  )
}

export default App
