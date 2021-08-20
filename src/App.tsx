/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { Dispatch, CombinedState } from 'redux'
import { increment, decrement } from './actions/actions'
import { Button } from '@material-ui/core'
import image from './images/Group 14.png'
import './index.css'
import { Menu, GitHub, LinkedIn } from '@material-ui/icons'
import { ReactComponent as StackOverflow } from './images/iconmonstr-stackoverflow-1.svg'
import '@fontsource/roboto'


const Colors = {
    blue: '#0000FF',
    green: '#00FF00',
    red: '#FF0000',
}

export const App : React.FC = () => {
    //const number: number = useAppSelector((state: CombinedState<{ incrementReducer: IncrementState}>) => state.incrementReducer.number)
    
    const styles = {
        app: {
            display: "flex",
            overflowX: 'scroll' as 'scroll'
        },
        menuColumn: {
            width: '4em',
            backgroundColor: '#555555',
            justifyContent: 'center'
        },
        pictureColumn: {
            flex:7,
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
        },
        links: {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column' as 'column',
            justifyContent: 'center',
        }
    }
    return <div style={parentStyle}>
        <Button style={styles.button}>
            <Menu /></Button>
        <div style={styles.links}>
            <Button 
                style={styles.button}
                onClick={() => window.open("https://github.com/jcstange")}>
                <GitHub />
            </Button>
            <Button 
                style={styles.button}
                onClick={() => window.open("https://www.linkedin.com/in/joao-cesar-stange-0a159223/")}>
                <LinkedIn />
            </Button>
            <Button 
                style={{...styles.button, filter: 'invert(100%)'}}
                onClick={() => window.open("https://stackoverflow.com/users/7047737/j-stange")}>
                <StackOverflow />
            </Button>
        </div>
    </div>
}

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
            backgroundColor:'#1a1a1a',
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

type AboutProps = {
    parentStyle: CSSProperties 
}
export const AboutColumn : React.FC<AboutProps> = ({ parentStyle }) => {
    const styles = {
        aboutme: {
            textAlign: 'left' as 'left',
            color: '#EAEAEA',
            fontFamily: 'Roboto',
            flexGrow: 1,
            overflowY: 'scroll' as 'scroll'
        },
        h1: {
            fontSize: '3vw',
        },
        p: {
            fontSize: '2.5vw',
        },
        li: {
            fontSize: '2vw',
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
        </div>
    </div>

}