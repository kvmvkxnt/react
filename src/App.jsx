import './App.scss';

import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
    return (
        <section className='todo-app'>
            <div className="container">
                <h1 className="todo__title">todos</h1>
                <div className="todo-app__inner">
                    <Header isActive={true}/>
                    <Main />
                    <Footer />        
                </div>
            </div>
        </section>
    );
}

export default App;
