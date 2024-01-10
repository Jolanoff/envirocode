import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (

        <div>
            <Navbar />

            <div className="min-h-screen bg-gray-100">
                <header className="bg-blue-600 text-white text-center py-6">
                    <h1 className="text-4xl font-bold">EnviroCode</h1>
                    <p className="text-xl mt-2">Dedicated to Water Quality Improvement</p>
                </header>

                {/* Services Section */}
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center">Onze Diensten</h2>
                        <div className="flex justify-around flex-wrap mt-8">
                            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
                                <h3 className="font-bold text-xl mb-2">Water Testen</h3>
                                <p>Enviro Code biedt geavanceerde water testdiensten voor grondige analyses. Onze precieze tests onthullen verschillende parameters en verontreinigingen.</p>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
                                <h3 className="font-bold text-xl mb-2">Product Leveren</h3>
                                <p>Ontvang hoogwaardige producten van Enviro Code, zoals innovatieve filtratiesystemen en waterzuiveringsmiddelen.</p>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
                                <h3 className="font-bold text-xl mb-2">Waterkwaliteit verbeteren</h3>
                                <p>Met passie en doelgerichte inspanningen ontwikkelt Enviro Code op maat gemaakte oplossingen om wereldwijd waterbronnen te herstellen en te beschermen.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="bg-gray-200 py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                        <h2 className="text-3xl font-bold text-center">Over ons</h2>
                        <p className="text-center mt-4 max-w-2xl mx-auto">
                        Enviro Code, opgericht door vijf gedreven studenten, zet zich in voor een schonere toekomst. Ons bedrijf is ontstaan met als hoofddoel het verbeteren van de waterkwaliteit. Gedreven door passie en innovatie streven we ernaar om positieve veranderingen teweeg te brengen. Samen werken we aan duurzame oplossingen die de wereld helpen om water schoner en gezonder te maken.
                        </p>
                        <button type="button" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lees meer</button>
                    </div>
                    
                </section>

                {/* Contact Section */}
                <section className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center">Vragen over ons product?</h2>
                        <div className="flex justify-center mt-8">
                            <div className="max-w-md bg-white p-6 rounded shadow-lg flex flex-col items-center">
                                <p>Of u nu nieuwsgierig bent naar functies, een gratis proefperiode. wij staan klaar om al uw vragen te beantwoorden.</p>
                                <button type="button" class="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Neem contact</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Home