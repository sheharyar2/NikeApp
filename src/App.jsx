import CustomerReviews from "./sections/CustomerReview"
import Hero from "./sections/Hero"
import Subscribe from "./sections/Subscribe"
import SpecialOffers from "./sections/SpecialOffers"
import Services from "./sections/Services"
import SuperQuality from "./sections/SuperQuality"
import Navbar from "./components/Navbar"
import PopularSections from "./sections/PopularSections"
import Footer from "./sections/Footer"


function App() {

  return (
 <main className="relative">
    <Navbar/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
     <PopularSections/>
    </section>
    <section className="padding">
     <SuperQuality/>
    </section>
    <section className="padding-x">
     <Services/>
    </section><section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
     <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
     <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8">
     <Footer/>
    </section>
 </main>
  )
}

export default App
