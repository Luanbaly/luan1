import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
            src="/images/site/nuan.png" 
            alt="Hello World" 
            width={300} 
            height={300} 
            />
            </div>
        <h1>Hi, I'm Nuận</h1>
        <p>
            Toi se kiem 99999$ đô.
        </p>
    </section>
    );
}

export default Hero;