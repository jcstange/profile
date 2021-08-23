
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import { GitHub, LinkedIn } from '@material-ui/icons'
import { ReactComponent as StackOverflow } from '../images/stackoverflow.svg'
import { Button } from '@material-ui/core'
import { Animated } from 'react-animated-css'


type MenuProps = {
    parentStyle: CSSProperties,
    isMobile: boolean 
}

export const MenuColumn : React.FC<MenuProps> = ({ parentStyle, isMobile }) => {

    const styles = {
        button:{
            color: Colors.white,
            padding: 20
        },
        links: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: isMobile ? 'row' as 'row' : 'column' as 'column',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            verticalAlign: 'center',
            justifyContent: 'center',
        },
        fade : "@keyframes fade { 0%: { opacity: 0 }, 25%: { opacity: 0.25}, 50%: { opacity: 0.5},75%: { opacity: 0.75}, 100%: { opacity: 1 } }" 
    }
    

    return <div style={parentStyle}>
        <div style={styles.links}>
            <Animated
                animationIn='rollIn'
                animationInDuration={1000}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <Button 
                    style={styles.button}
                    onClick={() => window.open("https://github.com/jcstange")}>
                    <GitHub />
                </Button>
            </Animated>
            <Animated
                animationIn='rollIn'
                animationInDuration={1000}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <Button 
                    style={styles.button}
                    onClick={() => window.open("https://www.linkedin.com/in/joao-cesar-stange-0a159223/")}>
                    <LinkedIn />
                </Button>
            </Animated>
            <Animated
                animationIn='rollIn'
                animationInDuration={1000}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <Button 
                    style={{...styles.button, filter: 'invert(100%)'}}
                    onClick={() => window.open("https://stackoverflow.com/users/7047737/j-stange")}>
                    <StackOverflow />
                </Button>
            </Animated>
        </div>
    </div>
}