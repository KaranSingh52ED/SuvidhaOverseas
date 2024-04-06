import React from 'react';
import ieltsContent from './ieltsContent'; // Importing content from JavaScript file


const speakingTest = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{ieltsContent.speakingTest.title}</h1>
      <p className="text-gray-600 mb-4">{ieltsContent.speakingTest.updated}</p>

      {ieltsContent.speakingTest.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          {section.topics && (
            <div className="mb-4">
              <p>Common Topics:</p>
              <ul className="list-disc list-inside">
                {section.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          )}

          {section.tasks && (
            <div className="mb-4">
              <h3 className="font-bold">Tasks:</h3>
              {section.tasks.map((task, i) => (
                <div key={i} className="mb-4">
                  <p><strong>{task.part}</strong> - {task.details}</p>
                  <p>{task.description}</p>
                </div>
              ))}
            </div>
          )}

          {section.scoring && (
            <div>
              <h3 className="font-bold">Scoring:</h3>
              {section.scoring.map((criteria, i) => (
                <div key={i} className="mb-4">
                  <p><strong>{criteria.criteria}</strong> - Range: {criteria.range}</p>
                  <p>{criteria.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default speakingTest;