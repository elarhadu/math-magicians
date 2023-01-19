import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Calculator from './components/Calculator';
import Home from './Pages/Home';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} exact />
//           {/* <Calculator /> */}
//         </Routes>
//       </Router>
//     );
//   }
// }

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Calculator /> */}
      </Routes>
    </Router>
  );
}
