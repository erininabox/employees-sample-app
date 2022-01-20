import React, {useEffect, useState} from 'react';
// import AllEmployees from "./components/AllEmployees";
import AllEmployees from './components/AllEmployees';
import { makeServer } from './server';

 
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const App = () => {
  const [employees, setEmployees] = useState([]);
  
  
  const getEmployees = () => {
    fetch('/api/employees')
    .then((res) => res.json())
    .then((data) => setEmployees(data.employees))
    .catch((error) => console.log('Error fetching employees', error));
  }
  
  useEffect(() => {
    getEmployees();
  }, []);



  return (
    <div>
      <header>
        <h1>Employees</h1>
      </header>
      <main className='all-employees'>
        <AllEmployees employees={employees} />
      </main>
    </div>
  );
}

export default App;
