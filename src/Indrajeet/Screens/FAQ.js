import React from "react";
import './FAQ.css'

function FAQ() {
  const faqs = [
    {
      question: " Which areas are considered the safest in Bhopal?",
      answer: [
        "Indrapuri",
        "Arera Colony",
        "Hoshangabad Road",
        "Above localities are some of the safest localities in Noida according to the past and present residents.",
      ],
    },
    {
      question: " Which areas are considered the safest in Bhopal?",
      answer: [
        "Indrapuri",
        "Arera Colony",
        "Hoshangabad Road",
        "Above localities are some of the safest localities in Noida according to the past and present residents.",
      ],
    },
  ];
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <span className="question">Q: ✅{faq.question}</span>
          <div className="answer">
            {Array.isArray(faq.answer) ? (
              <ol>
                {faq.answer.map((ans, idx) => (
                  <li key={idx}>{ans}</li>
                ))}
              </ol>
            ) : (
              <p>{faq.answer}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
