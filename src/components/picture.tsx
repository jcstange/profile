
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import '@fontsource/roboto'

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
            fontFamily: 'Roboto'
        },
    }

    return <div style={parentStyle}>
        <div style={{ 
            position: 'relative',
            height: '100%' 
        }}>
            <div style={styles.profession}>
                <p style={{fontSize: '22'}}>Software Developer</p>
                <p style={{fontSize: '16'}}>Based in Helsinki</p>
                <p style={{fontSize: '16'}}>Android, iOS, Flutter, React, React Native</p>
            </div> 
        </div>
    </div>
}