import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Route,Routes} from "react-router-dom"
import Product from "./pages/Product"
import Home from "./pages/Home"
import About from "./pages/About"
import Invalid from "./pages/Invalid"
import Collection from "./pages/collection"
import Courser from "./pages/Courser"
import CourseDetail from "./pages/CourseDetail"


function App() {


  return (
    <div className="h-screen w-full bg-black text-white">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<Courser/>} />
          <Route path="/courses/:id"  element={<CourseDetail/>} />
          <Route path="/product/collection" element={<Collection/>}/>
          <Route path="*" element = {<Invalid/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
