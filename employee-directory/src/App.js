import React from 'react';
import './App.css';
import employees from './employees'



function App(props) {
 
  return  (
    <div className="App">
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" href="">Navbar</a>
    </nav>
      <div className="container">
        <div className="row">

          <table class="table">
            <thead>
              <h3>Employees</h3>
              <tr>
                <th scope="col">List Item</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">ID</th>
                <th scope="col">Position</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{employees()[0].First}</td>
                <td>{employees()[0].Last}</td>
                <td>#1458</td>
                <td>Chief Positivity Officer</td>
                <td>kworthy@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Kristian</td>
                <td>Worthy</td>
                <td>#1458</td>
                <td>Chief Positivity Officer</td>
                <td>kworthy@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>#1459</td>
                <td>Developer</td>
                <td>jacobthornton@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Somerville</td>
                <td>#1460</td>
                <td>Chief Financial Officer</td>
                <td>larrysomerville@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Lawrence</td>
                <td>Parthum</td>
                <td>#1461</td>
                <td>Chief Technology Officer</td>
                <td>macdaddy@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Soleman</td>
                <td>Sayeed</td>
                <td>#1462</td>
                <td>Chief Executive Officer</td>
                <td>solemansayeed@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Caleb</td>
                <td>Crum</td>
                <td>#1464</td>
                <td>Cyber Security Operations</td>
                <td>ccrum@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Ryan</td>
                <td>Somerville</td>
                <td>#1465</td>
                <td>Chief Company Culture Officer</td>
                <td>ryansomerville@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Andrew</td>
                <td>Lambropoulos</td>
                <td>#1466</td>
                <td>Development Operations</td>
                <td>alambro7@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Chuck</td>
                <td>Jeanne</td>
                <td>#1467</td>
                <td>Risk Management Lead</td>
                <td>cjeanne@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>George</td>
                <td>Kourakos</td>
                <td>#1468</td>
                <td>CVO</td>
                <td>gkourako@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  );
}

export default App;
