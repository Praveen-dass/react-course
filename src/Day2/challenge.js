import React, { Component } from 'react';

// Class Component
class Car extends Component {
    render() {
        return (
            <div>
                <img
                    src="https://example.com/car-image.jpg"
                    alt="Car"
                    style={{ width: '200px', height: '150px' }}
                />
                <h2>Car Name: {this.props.carName}</h2>
            </div>
        );
    }
}

// Functional Component
const Location = ({ companyName, cityName }) => {
    return (
        <div>
            <h3>Company Name: {companyName}</h3>
            <p>City Name: {cityName}</p>
        </div>
    );
};

// App Component
const App = () => {
    const carData = {
        carName: 'Sample Car',
    };

    const locationData = {
        companyName: 'Sample Company',
        cityName: 'Sample City',
    };

    return (
        <div>
            <h1>React App</h1>
            <Car carName={carData.carName} />
            <Location {...locationData} />
        </div>
    );
};

export default App;
