import React from 'react'
import { Link } from 'react-router-dom'
// import PdfQueryForm from '../components/PdfQueryForm'
// import LlmForm from '../components/LlmForm'
import PdfQueryForm from '../components/PdfQueryForm'


const RagsAgent: React.FC = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white p-6 flex flex-col gap-4">
            <header className="py-6 bg-gray-800 shadow-lg mb-8">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-3xl font-bold text-yellow-500">PDF Playground</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
                            <li><Link to="playground" className="hover:text-yellow-500">Playground</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <PdfQueryForm/>
        </div>
    )
}

export default RagsAgent