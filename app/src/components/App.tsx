import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="app">
      <div className="header">
        Готовые проекты
      </div>
      <div className="main">
        <div className="main__row">
          <Card name="1я карточка" />
          <Card name="2я карточка" />
          <Card name="3я карточка" />
        </div>
        <div className="main__row">
          <Card name="4я карточка" />
          <Card name="5я карточка" />
          <Card name="6я карточка" />
        </div>
        <div className="main__row">
          <Card name="7я карточка" />
          <Card name="8я карточка" />
          <Card name="9я карточка" />
        </div>
      </div>
      <div className="footer">
        Ссылки
      </div>
    </div>
  );
}

export default App;
