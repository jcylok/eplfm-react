import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="homesection">
            {/* <h2>
                This is the Home Page
            </h2> */}
            <div className="container2 ">
                <div className="inlineblock">
                    <h2><span className="super-title">E</span>nglish <span className="super-title">P</span>remier <span className="super-title">L</span>eague</h2>
                    <p className="super-title">Football Manager</p>
                    <p className="quote">"Aim for the sky and you'll reach the ceiling. Aim for the ceiling and you'll stay on the floor."</p>
                    <p className="bill">Bill Shankly - Liverpool F.C. Manager (1959–1974)</p>
                
                </div>
            </div>
            
        </section>
    );
};

export default Home;