import React from 'react';
import Image from '../../../assets/Exams/Lets_listening.png';
const moduleData = [
    {
        Image: Image,
        title: "IELTS Listening",
        totalTime: "30 minutes",
        totalQuestions: 40,
        sections: [
            {
                title: "Section 1 - Conversation in Everyday Context",
                description: "In this section, you'll hear a conversation between two people...",
            },
            {
                title: "Section 2 - Monologue in Everyday Context",
                description: "Here, you'll listen to a single speaker providing information...",
            },
            {
                title: "Section 3 - Conversation in an Educational or Training Context",
                description: "This section usually involves a conversation between multiple speakers...",
            },
            {
                title: "Section 4 - Academic Lecture or Talk",
                description: "In this final section, you'll listen to a monologue on an academic topic...",
            }
        ],
        tips: [
            "Pay close attention to the recording and take notes while listening.",
            "Focus on keywords and phrases that will help you find the answers.",
            "Be prepared to hear different accents and speech speeds..."
        ]
    },
    {
        Image: Image,
        title: "IELTS Reading",
        totalTime: "60 minutes",
        totalQuestions: 40,
        sections: [
            {
                title: "Section 1",
                description: "This section includes a long, complex text often related to academic topics...",
            },
            {
                title: "Section 2",
                description: "Another lengthy passage, typically associated with work-related or general interest subjects...",
            },
            {
                title: "Section 3",
                description: "This section features a shorter, more complex text...",
            }
        ],
        tips: [
            "Allocate a specific amount of time for each section...",
            "The more you practise reading and answering questions...",
            "Use IELTS practice materials and sample tests to hone your reading skills..."
        ]
    },
    {
        Image: Image,
        title: "IELTS Speaking",
        totalTime: "11-14 minutes",
        totalQuestions: "Three parts",
        sections: [
            {
                title: "Part 1 (Introduction)",
                description: "This part begins with some general questions about you, your studies, your interests...",
            },
            {
                title: "Part 2 (Long Turn/ Cue Card)",
                description: "You'll receive a task card with a topic and some prompts in this section...",
            },
            {
                title: "Part 3 (Discussion)",
                description: "In the final part, the examiner will ask you more complex questions related to the topic...",
            }
        ],
        tips: [
            "Allocate a specific amount of time for each section...",
            "The more you practise reading and answering questions...",
            "Use IELTS practice materials and sample tests to hone your reading skills..."
        ]
    },
    {
        Image: Image,
        title: "IELTS Writing",
        totalTime: "60 minutes",
        totalQuestions: "Two tasks",
        sections: [
            {
                title: "Task 1",
                description: "In the first task, you'll see a graph, chart, table, diagram, letter or map...",
            },
            {
                title: "Task 2",
                description: "The second task is an essay. You'll be given a topic or a question...",
            }
        ],
        tips: [
            "Remember, you have limited time for each task...",
            "Make sure your writing is directly related to the task...",
            "The more you practise, the more confident you'll become..."
        ]
    }
];

export default moduleData;
