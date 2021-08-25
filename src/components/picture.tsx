
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import '@fontsource/jetbrains-mono'
import { Animated } from 'react-animated-css'
import useTypingEffect from '../hooks/typing'

type PictureProps = {
    parentStyle: CSSProperties,
    isMobile: boolean 
}
export const PictureColumn : React.FC<PictureProps> = ({ parentStyle, isMobile }) => {

    const styles = {
        profession: {
            position: 'absolute' as 'absolute',
            textAlign: 'center' as 'center',
            color: '#fff',
            left: '5%',
            bottom: '4%',
            right: '5%',
            opacity: 0.7,
            padding: 20,
            borderStyle: 'none',
            borderRadius: 5,
            backgroundColor: Colors.backgroundTransparentGray,
            fontFamily: 'Jetbrains Mono'
        },
    }

    const profession = useTypingEffect("Software Developer",200)
    const location = useTypingEffect("Based in Helsinki",200)
    const expertise = useTypingEffect("Android, iOS, Flutter, React, React Native", 100)
    //const expertise = "Android, iOS, Flutter, React, React Native"

    return <div style={parentStyle}>
            <Animated
                style={{ 
                    position: 'relative',
                    height: '100%' 
                }}
                animationIn='slideInUp'
                animationInDuration={1000}
                animationOut='rollOut'
                animationOutDuration={5000}
                isVisible={true}>
        <div style={{ 
            position: 'relative',
            height: '100%' 
        }}>
                <div style={styles.profession}>
                    <p style={{fontSize: 22}}>{profession}</p>
                    <p style={{fontSize: 16}}>{location}</p>
                    <p style={{fontSize: 16}}>{expertise}</p>
                </div> 
        </div>
            </Animated>
    </div>
}