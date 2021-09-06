import React, { Component } from 'react'
import Data from '../data.json'
import HornedBeasts from './HornedBeasts'

class Main extends Component {
    render() {
        return (
            <div>
                {
                    Data.map(i=>{
                        return < HornedBeasts image_url = { i.image_url } title = {i.title} description = {i.description} keyword = {i.keyword} horns = {i.horns}/>
                    })
                }
            </div>
        )
    }
}

export default Main
