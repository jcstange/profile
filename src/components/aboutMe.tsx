
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import '@fontsource/roboto'

type AboutProps = {
    parentStyle: CSSProperties 
}
export const AboutColumn : React.FC<AboutProps> = ({ parentStyle }) => {
    const styles = {
        aboutme: {
            textAlign: 'left' as 'left',
            color: Colors.fontGray,
            fontFamily: 'Roboto',
            maxHeight: 810, // 850 - 20*2 padding
            overflowY: 'scroll' as 'scroll'
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
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
            <p style={styles.p}>...</p>
        </div>
    </div>

}