import React from 'react';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        Готовые проекты
      </div>
      <div className="main">
        <div className="main__row">
          <div className="main__column">
            1й столбец
          </div>
          <div className="main__column">
            2й столбец
          </div>
          <div className="main__column">
            3й столбец
          </div>
        </div>
        <div className="main__row">
          2й ряд
        </div>
        <div className="main__row">
          3й ряд
        </div>
      </div>
      <div className="footer">
        Ссылки
      </div>
    </div>
  );
}

export default App;
