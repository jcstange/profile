/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { Dispatch, CombinedState } from 'redux'
import { increment, decrement } from './actions/actions'
import { Button } from '@material-ui/core'
import image from './images/Group 14.png'
import './index.css'
import { fontFamily } from '@material-ui/system'
import { Menu } from '@material-ui/icons'


const Colors = {
    blue: '#0000FF',
    green: '#00FF00',
    red: '#FF0000',
}

export const App : React.FC = () => {
    //const number: number = useAppSelector((state: CombinedState<{ incrementReducer: IncrementState}>) => state.incrementReducer.number)
    
    const styles = {
        app: {
            display: "flex"
        },
        menuColumn: {
            width: '5%',
            backgroundColor: '#555555',
            justifyContent: 'center'
        },
        pictureColumn: {
            flex: 3,
            backgroundColor: '#555555',
        },
        aboutColumn: {
            flex: 8,
            backgroundColor: '#555555',
            padding: 20
        },
    }

    //const dispatch: Dispatch<any> = useAppDispatch()

    return <div style={styles.app}>
        <MenuColumn parentStyle= {styles.menuColumn} />
        <PictureColumn parentStyle={styles.pictureColumn}/>
        <AboutColumn parentStyle={styles.aboutColumn}/>
    </div>

}

type MenuProps = {
    parentStyle: CSSProperties 
}

export const MenuColumn : React.FC<MenuProps> = ({ parentStyle }) => {
    const styles = {
        button:{
            color:'#fff',
            padding: 20
        }
    }
    return <div style={parentStyle}>
        <Button style={styles.button}><Menu /></Button>
    </div>
}

type PictureProps = {
    parentStyle: CSSProperties 
}
export const PictureColumn : React.FC<PictureProps> = ({ parentStyle }) => {
    const styles  = {
        profession: {
            position: 'absolute' as 'absolute',
            textAlign: 'center' as 'center',
            color: '#EAEAEA',
            left: '20%',
            bottom: '8%',
            //tranlate: 'transform(-20%,-50%)',
            fontFamily: 'Roboto'
        },
        image:{
            margin:0
        }
    }
    return <div style={parentStyle}>
        <div style={{ position: 'relative'}}>
            <img src={image} style={styles.image} alt='User image'/>
            <div style={styles.profession}>
                <h3>Software Developer</h3>
                <h5>Based in Helsinki</h5>
                <h5>Android, iOS, Flutter, React, React Native</h5>
            </div>
        </div>
    </div>
}

type AboutProps = {
    parentStyle: CSSProperties 
}
export const AboutColumn : React.FC<AboutProps> = ({ parentStyle }) => {
    const styles  = {
        aboutme: {
            textAlign: 'left' as 'left',
            color: '#EAEAEA',
            fontFamily: 'Roboto'
        },
    }
    return <div style={ parentStyle }>
        <div style={styles.aboutme}>
            <h1>About me: </h1>
            <p>Senior Software Developer and Freelancer</p>
            <li style={{marginLeft: 30}}>Android</li>
            <li style={{marginLeft: 30}}>iOS</li>
            <li style={{marginLeft: 30}}>Flutter</li>
            <li style={{marginLeft: 30}}>React Native</li>
            <li style={{marginLeft: 30}}>React</li>
        </div>
    </div>

}