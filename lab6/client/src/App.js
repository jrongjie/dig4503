import React from 'react';
import IdSearch from "./components/IdSearch";
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";

/*function App() {
  return (
    <div>
      <Reader/>
      <Creator/>
      <h2>Reporting</h2>
      <div id="reportingArea"></div>
  </div>
  );
}*/

class App extends React.Component {
  render(){
    return(
      <div>
        <IdSearch/>
        <NameSearch/>
        <ReportingArea/>
      </div>
    );
  }
}

export default App;
