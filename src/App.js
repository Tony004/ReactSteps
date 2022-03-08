import './App.css';

let App = () => (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://play-lh.googleusercontent.com/_eTXFGFfwhnz21lEwfTXEzT8mAZYFdVTWHQo0zgIJObCG0fccrl-HPVb0i8hDXI7YhQ=w512"/>
            </header>
            <nav className="nav">
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div className="mainImg">
                    <img src="https://scuffedentertainment.com/wp-content/uploads/2021/09/which-touhou-character-are-you.jpg" />
                </div>
                <div className="MyAva">
                    <img src="https://w7.pngwing.com/pngs/33/896/png-transparent-touhou-project-character-wikia-alice-margatroid-cirno-kokoro-human-video-game-flower.png" />
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
);


export default App;
