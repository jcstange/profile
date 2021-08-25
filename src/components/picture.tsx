
import React, { CSSProperties, useEffect, useState } from 'react'
import { Colors } from '../Colors'
import '@fontsource/jetbrains-mono'
import { Animated } from 'react-animated-css'

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

    const _profession: string = "Software Developer"
    const [ profession, setProfession ] = useState<string>("_")

    useEffect(()=> {if(profession==="_") typingEffect()})

    function typingEffect() {
        for(let i = 0; i<=_profession.length; i++) {
            sleep(150 * i).then(() => {
                console.log("sleeping")
                setProfession(_profession.substring(0,i) + "_")
            })
        }
    }

    function sleep(ms: number) {
        return new Promise<()=>undefined>((i) => setTimeout(i, ms))
    }

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
                    <p style={{fontSize: 16}}>Based in Helsinki</p>
                    <p style={{fontSize: 16}}>Android, iOS, Flutter, React, React Native</p>
                </div> 
        </div>
            </Animated>
    </div>
}