import React from 'react'
import Navbar from '../components/Navbar'
import CompanyList from '../components/CompanyList'
import Footer from '../components/Footer'
import { useState } from 'react'

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

     const [filterIndustry, setFilterIndustry] = useState("All");
  return (
    <>
       <Navbar 
        onSearch={setSearchTerm} 
        onFilter={setFilterIndustry} 
      />
      <CompanyList searchTerm={searchTerm} filterIndustry={filterIndustry} />
    <Footer/>
    
    </>
  )
}
