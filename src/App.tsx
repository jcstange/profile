/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { Dispatch, CombinedState } from 'redux'
import { increment, decrement } from './actions/actions'
import { MenuColumn } from './components/menu'
import { PictureColumn } from './components/picture'
import { AboutColumn } from './components/aboutMe'
import { Colors } from './Colors'

export const App : React.FC = () => {
    //const number: number = useAppSelector((state: CombinedState<{ incrementReducer: IncrementState}>) => state.incrementReducer.number)
    
    const styles = {
        app: {
            display: "flex",
            overflowX: 'scroll' as 'scroll'
        },
        menuColumn: {
            width: '4em',
            backgroundColor: Colors.backgroundGray,
            justifyContent: 'center'
        },
        pictureColumn: {
            flex:7,
            backgroundColor: Colors.backgroundGray,
        },
        aboutColumn: {
            flex: 8,
            backgroundColor: Colors.backgroundGray,
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
