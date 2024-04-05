// ModuleComponent.js
import React from 'react';

const ModuleComponent = ({ module }) => {
    return (
        <div className="p-4 flex flex-wrap">
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
                <p><strong>Total Time: </strong>{module.totalTime}</p>
                <p><strong>Total Questions: </strong>{module.totalQuestions}</p>
                <div className="my-4">
                    {module.sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-semibold">{section.title}</h3>
                            <p>{section.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Tips for the IELTS {module.title} Test</h3>
                    <ul className="list-disc pl-6">
                        {module.tips && module.tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={module.Image} alt={module.title} className="w-3/4 shadow-2xl shadow-primary rounded-xl  h-72 z-2" />
            </div>
        </div>
    );
};

export default ModuleComponent;
