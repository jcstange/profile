
import React, { CSSProperties, useState } from 'react'
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
        }
    }

    const [ stackHover, setStackHover ] = useState<boolean>(false)
    const [ gitHover, setGitHover ] = useState<boolean>(false)
    const [ linkedInHover, setLinkedInHover ] = useState<boolean>(false)

    return <div style={parentStyle}>
        <div style={styles.links}>
            <Animated
                animationIn='rollIn'
                animationInDuration={1000}
                animationInDelay={1000}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <Button 
                    style={{...styles.button, backgroundColor: gitHover ? Colors.black : 'transparent'}}
                    onClick={() => window.open("https://github.com/jcstange")}
                    onMouseEnter={()=> setGitHover(true)}
                    onMouseLeave= {() => setGitHover(false)}>
                    <GitHub fill="white"/>
                </Button>
            </Animated>
            <Animated
                animationIn='rollIn'
                animationInDuration={1000}
                animationInDelay={500}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <Button 
                    style={{...styles.button, backgroundColor: linkedInHover ? Colors.black : 'transparent'}}
                    onClick={() => window.open("https://www.linkedin.com/in/joao-cesar-stange-0a159223/")}
                    onMouseEnter={()=> setLinkedInHover(true)}
                    onMouseLeave= {() => setLinkedInHover(false)}>
                    <LinkedIn 
                        fill="white"/>
                </Button>
            </Animated>
            <Animated
                animationIn='rollIn'
                animationInDuration={1000}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
                <Button 
                    style={{...styles.button, backgroundColor: stackHover ? Colors.black : 'transparent'}}
                    onClick={() => window.open("https://stackoverflow.com/users/7047737/j-stange")}
                    onMouseEnter={()=> setStackHover(true)}
                    onMouseLeave= {() => setStackHover(false)}>
                    <StackOverflow fill="white"/>
                </Button>
            </Animated>
        </div>
    </div>
}