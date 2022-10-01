import React from "react";
import { questionAnswerData } from "./../../data/questionData";
import { generateKey } from './../../utils/randomKey';

function Question(props) {
  let quantity = props.quantity || 4;
  if (quantity === 999) {
    quantity = questionAnswerData.length;
  }
  let questionAnswer = questionAnswerData.slice(0, quantity);

  let { className } = props;
  return (
    <div
      className={
        className
          ? className
          : "col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1"
      }
    >
      <div className="faq__accordion p-relative">
        <div className="accordion" id="accordionExample">
          {questionAnswer.map((qa, index) => {
            return (
              <div key={generateKey(qa.question)} className={`card ${index === 1 ? "accordion-item" : ""}`}>
                <div
                  className="card-header accordion-header"
                  id={`acc_${index}`}
                >
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_1${index}`}
                      aria-expanded="true"
                      aria-controls={`collapse_1${index}`}
                    >
                      {qa.question}
                    </button>
                  </h5>
                </div>

                <div
                  id={`collapse_1${index}`}
                  className="collapse"
                  aria-labelledby={`acc_${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="card-body accordion-body">
                    <p>{qa.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
