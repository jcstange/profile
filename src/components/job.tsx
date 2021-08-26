import React from 'react'
import { Colors } from '../Colors'
import '@fontsource/jetbrains-mono'
import useTypingEffect from '../hooks/typing'
import injectStyle from '../utils/injectStyle'

type JobProps = {
    job: Job
}

export const JobComponent : React.FC<JobProps> = ({ job }) => {
    
    const keyframesStyle = `
    @-webkit-keyframes spin {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
    }
    `;
    injectStyle(keyframesStyle)

    const styles = {
        item: {
            borderStyle: 'none',
            borderRadius: 5,
            backgroundColor: Colors.backgroundTransparentGray,
            padding: 15,
            marginBottom: 5,

        },
        name: {
            fontFamily: 'Jetbrains Mono',
            fontSize: 16,
            fontWeigth: 'bold',
            paddingTop: 10,
            marginBottom: 10,
            color: Colors.green
        },
        time: {
            fontFamily: 'Jetbrains Mono',
            fontSize: 12,
            fontWeigth: 'bold',
            marginBottom: 10
        },
        description: {
            fontFamily: 'Jetbrains Mono',
            fontSize: 16,
            fontWeigth: 'bold',
            marginBottom: 10
        },
        platform: {
            fontFamily: 'Jetbrains Mono',
            fontSize: 14,
            fontStyle: 'italic',
            marginBottom: 10
        },
        svg: {
            width: 32,
            height: 32,
            padding: 5,
            animation: `spin 3s linear infinite`
        }
    }

    function renderIcons() {
        return job.icons.map((i) => { 
            const image = require('../images/' + i)
            return <img src={image.default} style={styles.svg} alt="icon" /> 
        })
    }

    const name = useTypingEffect(job.name,200)
    const time = useTypingEffect(job.time,200)
    const description = useTypingEffect(job.description,10)
    const platform = useTypingEffect(job.platform,10)

    return (
        <div style={styles.item}>
            <div 
                style={styles.name}
                onClick={ () => window.open(job.link)}
            >&gt; {name}</div>
            {renderIcons()}
            <div style={styles.time}>...{time}...</div>
            <div style={styles.description}>{description}</div>
            <div style={styles.platform}>{platform}</div>
        </div>
    )
}