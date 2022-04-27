import classes from './logo.module.css';

function Logo() {
    return <div 
    className={classes.logo}>HOME
    <image 
            src="/images/site/nuan.png" 
            alt="Hello World" 
            width={100} 
            height={100} 
            />
    </div>;
}

export default Logo;