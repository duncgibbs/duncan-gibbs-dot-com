import React from 'react';

import Navigation from '../../navigation/Navigation';

export default function About() {
    const randomThingsList = (): string[] => {
        let thingsIDo = [
            'I program things.',
            'I write.',
            'I take pictures.',
            'I make games.'
        ];

        for (let i = thingsIDo.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = thingsIDo[i];
            thingsIDo[i] = thingsIDo[j];
            thingsIDo[j] = temp;
        }

        return thingsIDo;
    };

    return (
        <div className='about-container'>
            <Navigation />
            <div className='section about'>
                <h1>About</h1>
                <p>
                    Hello. My name is Duncan Gibbs. I have no idea how you stumbled onto this site, and even less of an idea why you would read its About page, but welcome.
                </p>
                <p>
                    Honestly, as I type this out, I regret even making an "About" section. Here is a list of things I like doing - that this site contains, anyway - in a literally randomly ordered list:
                </p>
                <p>
                    {randomThingsList().join(" ")}
                </p>
                <p>
                    Mic drop?
                </p>
            </div>
            <div className='section contact'>
                <h1>Ways to Contact Me</h1>
                <div className='form'>
                    <h2>Email</h2>
                    <p>
                        <a target="_blank" href="mailto:duncgibbs@gmail.com">
                            duncgibbs@gmail.com
                        </a>
                    </p>
                </div>
                <div className='form'>
                    <h2>Twitter</h2>
                    <p>
                        <a target="_blank" href="https://twitter.com/duncgibbs">
                            @duncgibbs
                        </a>
                    </p>
                </div>
                <div className='form'>
                    <h2>LinkedIn</h2>
                    <p>
                        <a target="_blank" href="https://www.linkedin.com/in/duncan-gibbs-resume">
                            https://www.linkedin.com/in/duncan-gibbs-resume
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
