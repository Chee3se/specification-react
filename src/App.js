import Navbar from "./Components/Navbar";
import Reveal from "./Components/Reveal";
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar className={"hidden"}/>
            <main className="no-scrollbar scroll-smooth snap-mandatory snap-y overflow-scroll h-screen flex flex-col">
                <div className="bg-gray-50 text-gray-700 snap-always snap-center scroll-pb-10">
                    <Reveal className={"h-screen w-screen pt-20 px-10"}>
                        <h1 className="text-6xl font-extrabold py-6">Kas ir prasības?</h1>
                        <p className="text-xl font-medium">Prasības ir dokumenti, kas apraksta, ko sistēmai ir jādara.</p>
                    </Reveal>
                </div>
                <div className="bg-cyan-400 text-cyan-900 snap-always snap-center py-10">
                    <Reveal type={"right"} className={"h-screen w-screen pt-20 mb-6 px-10"}>
                        <h1 className="text-6xl font-extrabold py-6">Kas ir prasību specifikācija?</h1>
                        <p className="text-xl font-medium">Prasību specifikācija ir dokuments, kas apraksta, ko sistēmai ir jādara.</p>
                    </Reveal>
                </div>
                <div className="bg-amber-400 text-yellow-900 snap-always snap-center scroll-pt-10">
                    <Reveal type={"pop"} className={"h-screen w-screen pt-20 px-10"}>
                        <h1 className="text-6xl font-extrabold py-6">Un ar ko viena atšķirās no otras?</h1>
                        <p className="text-xl font-medium">Prasības ir dokumenti, kas apraksta, ko sistēmai ir jādara. Prasību specifikācija ir dokuments, kas apraksta, ko sistēmai ir jādara.</p>
                    </Reveal>
                </div>
            </main>
        </div>
    );
}

export default App;