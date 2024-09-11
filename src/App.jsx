import React from 'react';
import "./index.css";
import Accordion from './components/Accordion';
import { faqs } from './costant/data';

export default function App() {
  return (
    <div>
      {faqs.map((faq, s) => {
        const {title, text} = faq;
        return<Accordion title={title} text={text} num={s} key={title}/>
      })}
    </div>
  )
}
