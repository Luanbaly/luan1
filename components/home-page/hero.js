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
            <a href="#" class="icon-search search-opener"></a>
            </div>
        <h1>Lý Bá Luận</h1>
        <p>
        Để Thành Công Được Phải Chăm Chỉ Người Thành Công Phải TỰ GIÁC 
        </p>
    </section>
    );
}

export default Hero;