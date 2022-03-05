import './Main.scss';

function Main() {
    return (
        <main className='main'>
            <div className="todo_list">
                <ul className="todo_list__inner">
                    <li className="todo__item">
                        <label className="todo__checker">
                            <input type="checkbox" className='todo__checkbox visually-hidden' />    
                            <span className="todo__check"></span>
                        </label>
                        <p className="todo__task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam.</p>
                        <button className="todo__delete">×</button>
                    </li>
                    <li className="todo__item">
                        <label className="todo__checker">
                            <input type="checkbox" className='todo__checkbox visually-hidden' />    
                            <span className="todo__check"></span>
                        </label>
                        <p className="todo__task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam.</p>
                        <button className="todo__delete">×</button>
                    </li>
                    <li className="todo__item">
                        <label className="todo__checker">
                            <input type="checkbox" className='todo__checkbox visually-hidden'/>    
                            <span className="todo__check"></span>
                        </label>
                        <p className="todo__task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam.</p>
                        <button className="todo__delete">×</button>
                    </li>
                    <li className="todo__item">
                        <label className="todo__checker">
                            <input type="checkbox" className='todo__checkbox visually-hidden'/>    
                            <span className="todo__check"></span>
                        </label>
                        <p className="todo__task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nam.</p>
                        <button className="todo__delete">×</button>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main;