import React, { Component } from 'react'
import Data from '../data.json'
import HornedBeasts from './HornedBeasts'
import FilterSort from './FilterSort'

class Main extends Component {
    render() {
        return (
            <>
                <FilterSort
                    handleSubmit={this.props.handleSubmit}
                    handleSelect={this.props.handleSelect}
                />
                <div>
                    {
                        this.props.filterSort ?
                            <div>
                                {
                                    this.props.filterArray.map(i => {
                                        return < HornedBeasts 
                                        handleOpen={this.props.handleOpen} 
                                        image_url={i.image_url} 
                                        title={i.title} 
                                        description={i.description} 
                                        keyword={i.keyword} 
                                        horns={i.horns}
                                        getHandleOpen={this.gitHandleOpen} 
                                        />

                                    })
                                }


                            </div>
                            :
                            <div>
                                {
                                    Data.map(i => {
                                        return < HornedBeasts 
                                        handleOpen={this.props.handleOpen} 
                                        image_url={i.image_url} 
                                        title={i.title} 
                                        description={i.description} 
                                        keyword={i.keyword} 
                                        horns={i.horns} 
                                        getHandleOpen={this.gitHandleOpen} 
                                        />
                                    })
                                }
                            </div>

                    }
                </div>
            </>
        )
    }
}

export default Main
