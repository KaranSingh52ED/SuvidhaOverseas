import React from 'react';
import moduleData from './moduleData';
import ModuleComponent from './ModuleComponent';

const Module = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">IELTS Modules</h1>
            <p className="text-center mb-4">Updated on Dec 26, 2023, 05:24</p>
            {moduleData.map((module, index) => (
                <ModuleComponent key={index} module={module} />
            ))}
        </div>
    );
}
export default Module;
