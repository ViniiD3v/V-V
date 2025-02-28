import { Main } from "./views/main/main-content.jsx"
import { Dates } from "./views/date-cards/dates.jsx"
import { Carousel } from "./views/carousel/carousel.jsx"
import { Message } from "./views/message/message.jsx"
import "./App.css"


function App() {
  return(
    <section className="App">
      <Main />  
      <Dates />  
      <Carousel />  
      <Message />  
    </section>
  )
}

export default App
