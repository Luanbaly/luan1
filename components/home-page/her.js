import Image from 'next/image';

import classes from './her.module.css';

function Her() {
    return (
        <section className={classes.her}>
        <div className={classes.image}>
            <Image 
            src="/images/site/nuan1.png" 
            alt="Hello World" 
            width={400} 
            height={400} 
            />
            </div>
    </section>
    );
}

export default Her;