import React from 'react';
import OutputScreenRow from './outputscreenrow';

interface OutputScreenProps {
  question: string | readonly string[] ;
  answer: string | readonly string[] ;
}

const OutputScreen: React.FC<OutputScreenProps> = ({ question, answer }) => {
  return (
    <div className="screen">
      <OutputScreenRow value={question} />
      <OutputScreenRow value={answer} />
    </div>
  );
};

export default OutputScreen;
