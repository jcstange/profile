
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import { JobComponent } from './job'
import { jobs } from '../data/jobs'
import { Animated } from 'react-animated-css'
import '@fontsource/jetbrains-mono'
import { ReactComponent as Apple } from '../images/apple.svg'
import { ReactComponent as Android } from '../images/android.svg'
import { ReactComponent as Flutter } from '../images/flutter.svg'
import { ReactComponent as React2 } from '../images/react.svg'
import { ReactComponent as Firebase } from '../images/firebase.svg'
import { data } from '../data/jobs'

type AboutProps = {
    parentStyle: CSSProperties,
    isMobile: boolean
}
export const AboutColumn : React.FC<AboutProps> = ({ parentStyle, isMobile }) => {

    const styles = {
        aboutme: {
            display: 'block',
            textAlign: 'left' as 'left',
            color: Colors.fontGray,
            margin: 20,
            maxHeight: isMobile ? 'auto' : 960, //1000 - 20*2 padding
            overflowY: isMobile ? 'visible' as 'visible' : 'scroll' as 'scroll'
        },
        h1: {
            fontSize: 30,
            fontFamily: 'Jetbrains Mono',
        },
        p: {
            fontSize: 22,
            fontFamily: 'Jetbrains Mono',
        },
        p2: {
            fontSize: 12,
            fontFamily: 'Jetbrains Mono',
            whiteSpace: 'pre-line' as 'pre-line'
        },
        svgs: {
            width: 24,
            height: 24,
            padding: 12
        } 
    }

    function renderJobs() {
        return jobs.map((i) => {
            const index = jobs.indexOf(i)
            const delay = 200 * index
            return <Animated
                animationIn='slideInUp'
                animationInDuration={1000}
                animationInDelay={delay}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <JobComponent job={i} />
            </Animated>
        })
    }
    
    return <div style={ parentStyle }>
        <div style={styles.aboutme}>
            <h1 style= {styles.h1}>{data.name}</h1>
            <p style={styles.p}>{data.aboutMeTitle}</p>
            <p style={styles.p2}>{data.aboutMeDescription}</p>
            <div style={{display:'flex'}}>
                <Android style={styles.svgs}/>
                <Flutter style={styles.svgs}/>
                <React2 style={styles.svgs}/>
                <Apple style={styles.svgs}/>
                <Firebase style={styles.svgs}/>
            </div>
            <h1 style= {styles.h1}>Projects</h1>
            {renderJobs()}
        </div>
    </div>

}