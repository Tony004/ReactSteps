import './App.css';

let App = () => (
        <div className="App">
            <Header />
            <Tech />
        </div>
);

let Tech = () => (
    <div>
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    </div>
);

let Header = () => (
        <div>
            <a>Home</a>
            <a>News</a>
            <a>Messages</a>
        </div>
);


export default App;
