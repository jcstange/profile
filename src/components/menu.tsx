
import React, { CSSProperties } from 'react'
import { Colors } from '../Colors'
import { Menu, GitHub, LinkedIn } from '@material-ui/icons'
import { ReactComponent as StackOverflow } from './images/iconmonstr-stackoverflow-1.svg'
import { Button } from '@material-ui/core'


type MenuProps = {
    parentStyle: CSSProperties 
}

export const MenuColumn : React.FC<MenuProps> = ({ parentStyle }) => {
    const styles = {
        button:{
            color: Colors.white,
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