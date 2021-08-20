/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { CSSProperties } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { Dispatch, CombinedState } from 'redux'
import { increment, decrement } from './actions/actions'
import { MenuColumn } from './components/menu'
import { PictureColumn } from './components/picture'
import { AboutColumn } from './components/aboutMe'
import { Colors } from './Colors'
import image from './images/profile.png'

export const App : React.FC = () => {
    //const number: number = useAppSelector((state: CombinedState<{ incrementReducer: IncrementState}>) => state.incrementReducer.number)
    
    const styles = {
        app: {
            display: "flex",
            justifyContent: 'center',
            maxHeight: 1000,
            minWidth: 768,
            minHeight: 500,
            "@media (max-width: 1000px)": {
                display: 'inline'
            }
        },
        menuColumn: {
            width: '4em',
            borderStyle: 'none',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            backgroundColor: Colors.backgroundGray,
            justifyContent: 'center',
            "@media (max-width: 767px)": {
                backgroundColor: Colors.white,
            }
        },
        pictureColumn: {
            flex: 5,
            maxWidth: 600,
            maxHeight: 1000,
            //backgroundColor: Colors.white,
            //backgroundColor: Colors.backgroundGray,
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            alignContent: 'center',
            justifyContent: 'center'
        },
        aboutColumn: {
            flex: 8,
            maxWidth: 800,
            minWidth: 300,
            maxHeight: 1000,
            backgroundColor: Colors.backgroundGray,
            borderStyle: 'none',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
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
