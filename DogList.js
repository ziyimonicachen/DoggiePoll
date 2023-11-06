import React from 'react';
import bernese from './bernese_mountain_dog.jpg';
import golden from './golden_retriever.jpg';
import samoyed from './samoyed.jpg';
import './DogList.css';


const DogData = 
    [{name: 'Ruby', breed: 'Bernese Mountain Dog', image: <img src={bernese} alt="Bernese Mountain Dog" />}, 
    {name: 'Izzy', breed: 'Samoyed', image: <img src={samoyed} alt="Samoyed" />},
    {name: 'Cheerio', breed: 'Golden Retriever', image: <img src={golden} alt="Golden Retriever" />}]

function DogCard({name, breed, image}) {
    return(
        <div className='dog-card'>
            <h2>{name}</h2>
            <p>{breed}</p>
            {image}
        </div>
    );
}

function DogList() {
    return (
        <div className='dog-list'>
            {
                DogData.map((dog, index) => (
                    <DogCard
                        index={index}
                        name = {dog.name}
                        breed={dog.breed}
                        image={dog.image}
                    />
                ))
            }
        </div>
    );
}

export default DogList;