import React from 'react';

// Functional stateless react component
const Header = ({tagline}) => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>

        <h3 className="tagline">
            <span>{tagline}</span>
        </h3>
    </header>
)

//Regular React Componet

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The</span>
//                     </span>
//                     Day
//                 </h1>

//                 <h3 className="tagline">
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

export default Header;

