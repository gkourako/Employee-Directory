import React from 'react';
import './App.css';
import employees from './employees.json';



class App extends React.Component {

  state = {
    employeeList: employees,
    sortOrder: ""
  }
  handleSort = (whatToSort) => {
    console.log("this works")
    let newSort
    if (this.state.sortOrder !== "des") {
      newSort = this.state.employeeList.sort((a, b) => {
        return a[whatToSort] - b[whatToSort];
      }
      );
    }
    else {
      newSort = this.state.employeeList.sort((a, b) => {
        return b[whatToSort] - a[whatToSort];
      }
      )
    }
    console.log("tst")
    const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des"
    this.setState({ employeeList: newSort, sortOrder: newSortOrder })
  }
  newHandleSort = (whatToSort2) => {
    console.log("this works")
    const newSort = this.state.employeeList.sort((a, b) => {

      var nameA = a[whatToSort2].toUpperCase(); // ignore upper and lowercase
      var nameB = b[whatToSort2].toUpperCase(); // ignore upper and lowercase
      if (this.state.sortOrder !== "des") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      } else {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      }
    });
    const newSortOrder = this.state.sortOrder === "des" ? "asc" : "des"
    this.setState({ employeeList: newSort, sortOrder: newSortOrder })
  };

  render() {
    return (
      <div className="App" >
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand text-center" href="">Dyna Corp</a>
        </nav>
        < div className="container" >
          <div className="row">
            <table className="table">
              <thead>
                <h3>Employees</h3>
                <tr>
                  <th scope="col" onClick={() => this.handleSort("id")}>ID</th>
                  <th scope="col" onClick={() => this.newHandleSort("First")}>First</th>
                  <th scope="col" onClick={() => this.newHandleSort("Last")}>Last</th>
                  <th scope="col" onClick={() => this.newHandleSort("Position")}>Position</th>
                  <th scope="col" onClick={() => this.newHandleSort("email")}>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeList.map(employees => (

                  <tr key={employees.id}>

                    <th scope="row">{employees.id}</th>
                    <td>{employees.First}</td>
                    <td>{employees.Last}</td>
                    <td>{employees.Position}</td>
                    <td>{employees.email}</td>
                  </tr>
                ))}



              </tbody>
            </table>
          </div>
        </div >
      </div >

    );
  }
}

export default App;
