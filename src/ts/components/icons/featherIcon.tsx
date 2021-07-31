import styles from "./featherIcon.module.scss";
import cn from "classnames";

export default function FeatherIcon({name, className}: FeatherIconProps){
    return (
        <svg className={cn({
            [styles.feather]: true,
            [className ?? ""]: !!className,
        })}>
             <use xlinkHref={`/feather-sprite.svg#${name}`}/>
        </svg>
    )
}

interface FeatherIconProps {
    name?: string
    className?: string
}