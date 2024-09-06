import './App.css'
import star from './images/icon-star.svg'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import { useState } from 'react'

interface Question {
  id: number,
  title: string,
  answer: string
}

const questions: Question[] = [{
  id: 1,
  title: "What is Frontend Mentor, and how will it help me?",
  answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
}, {
  id: 2,
  title: "Is Frontend Mentor free?",
  answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
}, {
  id: 3,
  title: "Can I use Frontend Mentor projects in my portfolio?",
  answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
}, {
  id: 4,
  title: "How can I get help if I'm stuck on a challenge?",
  answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
}]


function Question(props: {question: Question, open: boolean, selectionChangeHandler: (idx: number | null) => void}) {
  const {question, open, selectionChangeHandler} = props;
  return (
    <div className='[&:not(:first-of-type)]:pt-4'>
      <div
        className='flex gap-2 justify-between items-center hover:text-fuchsia hover:cursor-pointer focus:text-fuchsia focus:cursor-pointer'
        onClick={() => {
          selectionChangeHandler(open ? null : question.id)
        }}
      >
        <h2 className='text-lg font-semibold leading-none'>{question.title}</h2>
        <button className='inline-block flex-shrink-0'>
          <img src={open ? minus : plus} alt='a plus icon' />
        </button>
      </div>
      {open &&
      <p className='text-grayishpurple mt-4 text-sm sm:text-lg'>
        {question.answer}
      </p>
      }
    </div>
  );
}


function App() {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(1);

  return (
    <>
      <div className='sm:w-[60%] row-start-2 xl:w-[42%] px-6 py-8 sm:p-10 bg-white rounded-xl mx-auto shadow-xl text-darkpurple'>
        <header className='flex gap-8 mb-4 sm:mb-10'>
          <img src={star} alt='a purple star' />
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide'>FAQs</h1>
        </header>
        <section className='space-y-6 question-container'>
          {questions.map(q => <Question
            key={q.id}
            open={selectedQuestionId == q.id}
            question={q}
            selectionChangeHandler={setSelectedQuestionId}
          />)}
        </section>
      </div>
    </>
  )
}

export default App
