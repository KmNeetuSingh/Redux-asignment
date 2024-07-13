import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from '../redux/quizActions';

const Quiz = () => {
  const dispatch = useDispatch();
  const { quizzes, isLoading, error } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {quizzes.map((quiz) => (
          <div key={quiz.id}>
            <h2>{quiz.question}</h2>
            <ul>
              {quiz.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
