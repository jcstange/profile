
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import image from '../images/Group 14.png'
import '@fontsource/roboto'

type PictureProps = {
    parentStyle: CSSProperties 
}
export const PictureColumn : React.FC<PictureProps> = ({ parentStyle }) => {
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
            backgroundColor: Colors.backgroundTransparentGray,
            fontFamily: 'Roboto'
        },
        image:{
            display: 'flex',
            width: '100%',
            margin:0
        }
    }
    return <div style={parentStyle}>
        <div style={{ position: 'relative'}}>
            <img src={image} style={styles.image} alt='User image'/>
            <div style={styles.profession}>
                <p style={{fontSize: '5vh'}}>Software Developer</p>
                <p style={{fontSize: '3vh'}}>Based in Helsinki</p>
                <p style={{fontSize: '3vh'}}>Android, iOS, Flutter, React, React Native</p>
            </div>
        </div>
    </div>
}