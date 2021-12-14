import React from 'react';
import Service from '../service/Service';

const Main = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h2> I GROW BY HELPING PEOPLE IN NEED</h2>
            </div>
            <div>
            <div class="input-group mb-3 w-50 m-auto mt-4">
                <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            </div>
            <Service></Service>
        </div>
    );
};

export default Main;