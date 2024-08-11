import React from 'react'
import ComContext from './comContext'

const ComState = (props) => {

    const state = {
        name:"Anukesh",
        place:"Mumbai"
    }

    return(
        <ComContext.Provider value={state}>
            {props.children}
        </ComContext.Provider>
    )

}

export default ComState;