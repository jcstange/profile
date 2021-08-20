/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
//import { useAppDispatch, useAppSelector } from './hooks/hooks'
//import { Dispatch, CombinedState } from 'redux'
//import { increment, decrement } from './actions/actions'
import { MenuColumn } from './components/menu'
import { PictureColumn } from './components/picture'
import { AboutColumn } from './components/aboutMe'
import { Colors } from './Colors'
import image from './images/profile.png'
import useWindowDimensions from './hooks/windowDimension' 

export const App : React.FC = () => {
    //const number: number = useAppSelector((state: CombinedState<{ incrementReducer: IncrementState}>) => state.incrementReducer.number)

    const { width } = useWindowDimensions()
    const isMobile = width < 767

    const styles = {
        app: {
            display: 'flex',
            flexDirection: isMobile ? 'column' as 'column' : 'row' as 'row',
            justifyContent: 'center',
            maxHeight: isMobile ? 5000 : 1000,
            minWidth: 768,
            minHeight: 500,
        },
        menuColumn: {
            width: isMobile ? '98vw' : '4em',
            height: isMobile ? '4em' : 1000,
            borderStyle: 'none',
            borderTopLeftRadius: 5,
            borderTopRightRadius: isMobile ? 5 : 0,
            borderBottomLeftRadius: isMobile ? 0 : 5,
            backgroundColor: Colors.backgroundGray,
            justifyContent: 'center',
            alignItems: 'center'
        },
        pictureColumn: {
            maxWidth: isMobile ? '98vw' : 600,
            maxHeight: isMobile ? 700 : 1000,
            height: isMobile ? 700 : 1000,
            width: isMobile ? '98vw' : '33vw',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            alignContent: 'center',
            justifyContent: 'center'
        },
        aboutColumn: {
            flex: 8,
            maxWidth: 800,
            width: isMobile ? '98vw' : '..',
            maxHeight: 1000,
            backgroundColor: Colors.backgroundGray,
            borderStyle: 'none',
            borderTopRightRadius: isMobile ? 0 : 5,
            borderBottomLeftRadius: isMobile ? 5 : 0,
            borderBottomRightRadius: 5,
        },
    }

    //const dispatch: Dispatch<any> = useAppDispatch()

    return <div style={styles.app}>
            <MenuColumn parentStyle= {styles.menuColumn}  isMobile= {isMobile}/>
            <PictureColumn parentStyle={styles.pictureColumn} isMobile = {isMobile}/>
            <AboutColumn parentStyle={styles.aboutColumn} isMobile = {isMobile}/>
        </div>

}
