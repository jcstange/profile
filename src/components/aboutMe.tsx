
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import { JobComponent } from './job'
import { jobs } from '../data/jobs'
import { Animated } from 'react-animated-css'
import '@fontsource/roboto'

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
            fontFamily: 'Roboto',
            margin: 20,
            maxHeight: isMobile ? 'auto' : 960, //1000 - 20*2 padding
            overflowY: isMobile ? 'visible' as 'visible' : 'scroll' as 'scroll'
        },
        h1: {
            fontSize: '30',
        },
        p: {
            fontSize: '22',
        },
        li: {
            fontSize: '22',
            marginLeft: 30
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
            <h1 style= {styles.h1}>About me </h1>
            <p style={styles.p}>Senior Software Developer and Freelancer</p>
            <li style={styles.li}>Android</li>
            <li style={styles.li}>iOS</li>
            <li style={styles.li}>Flutter</li>
            <li style={styles.li}>React Native</li>
            <li style={styles.li}>React</li>
            <p style={styles.p}>...</p>
            <h1 style= {styles.h1}>Jobs</h1>
            {renderJobs()}
        </div>
    </div>

}