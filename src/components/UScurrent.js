import React from 'react'

const UScurrent = (props) => {

    const formatDate = () => {
        let date = props.data.date
        console.log(date)
    //     let dateString = date.toString()
    //     let dateArray = []
    //     let month = dateString.slice(4,6)
    //     let day = dateString.slice(6,8)
    //     let year = dateString.slice(0,4)
    //     dateArray.push(month, day, year)
    //     let formattedDate = dateArray.join('/')
    //    return formattedDate
    }



        return(
            <div className="homeData">
                <h1>{formatDate()}</h1>
                <h1></h1>
            </div>
        )
    
}

export default UScurrent; 