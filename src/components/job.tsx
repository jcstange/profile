import React from 'react'
import { Colors } from '../Colors'
import '@fontsource/jetbrains-mono'
import { ReactComponent as Android } from '../images/android.svg'

type JobProps = {
    job: Job
}

export const JobComponent : React.FC<JobProps> = ({ job }) => {
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
            fontSize: 26,
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
            width: 24,
            height: 24
        }
    }

    return (
        <div style={styles.item}>
            <div style={styles.name}>&gt; {job.name}</div>
            <Android style={styles.svg} fill="white" />
            <div style={styles.time}>...{job.time}...</div>
            <div style={styles.description}>{job.description}</div>
            <div style={styles.platform}>{job.platform}</div>
        </div>
    )
}