// import React, { useState } from 'react';

// const containerStyle = {
//   textAlign: 'center',
//   padding: '18%',
// };

// const darkTheme = {
//   backgroundColor: 'black',
//   color: 'white',
// };

// const lightTheme = {
//   backgroundColor: 'white',
//   color: 'black',
// };

// function ThemeChanger() {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div style={{ ...containerStyle, ...(isDarkMode ? darkTheme : lightTheme) }}>
//         <h1>Welcome To My Theme Switcher Page </h1>
//         <hr />
//       <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }

// export default ThemeChanger;
// src/components/Greeting.js

import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleGreet = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleGreet}>Greet</button>
    </div>
  );
};

export default Greeting;

