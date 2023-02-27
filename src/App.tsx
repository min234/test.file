import React, { useEffect, useState } from 'react';
import './App.css';
const data = [
  {
    id: 0,
    name: "Adam Me",
    address: "11-03,3233 California St",
    category: "Maketing"
  },
  {
    id: 1,
    name: "John Lee",
    address: "11-03,3233 Texas St",
    category: "Maketing"
  },
  {
    id: 2,
    name: "Chung Lee",
    address: "11-03,3233 Bac Kinh St",
    category: "Head of Department"
  },
  {
    id: 3,
    name: "Chung Lee Chang",
    address: "11-03,3288 Bac Kinh St",
    category: "Head of Department"
  },
  {
    id: 4,
    name: "Rick",
    address: "Seattle St",
    category: "Boss"
  },
  {
    id: 5,
    name: "EoRick",
    address: "A Ave 200 St",
  category: "Head of Department"
  },
  {
    id: 6,
    name: "EoRick",
    address: "A Ave 200 St",
    category: "Boss"
  },
  {
    id: 7,
    name: "Rick Chi",
    address: "A Ave 200 St",
    category: "Employee"
  },
  {
    id: 8,
    name: "BitOffice",
    address: "200 Texas, California",
    category: "Employee"
  },
  {
    id: 9,
    name: "Yee Ling",
  address: "200 Thuong Hai",
    category: "Employee"
  },
  {
    id: 10,
    name: "BitOffice",
    address: "200 Texas, California",
    category: "Employee"
  }
]

function App() {

  const [search,setSearch] = useState('')



console.log(search)

  const filterTitle =data.filter((p) => {
   
    return   p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.address.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
})
  const onChange = (e : any) => {
    setSearch(e.target.value)
}
  return (
    <div className="App">
      <div className="a">
        {data.map((e) => (
          <div className="id" key={e.id}>
            <div className='number'>{e.id}</div>
            <div className ='name'>{e.name}</div>
            <div className = 'address'>{e.address}</div>
            <div className = ' category'>{e. category}</div>
         
            </div>
        ))}
        
      </div>
   
      <input className='search' value={search} onChange={onChange} placeholder='작가명 작품명 입력 '></input>
      <div className="a">
        {filterTitle.map((e) => (
          <div className="id" key={e.id}>
            <div className='number'>{e.id}</div>
            <div className ='name'>{e.name}</div>
            <div className = 'address'>{e.address}</div>
            <div className = ' category'>{e. category}</div>
            </div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
