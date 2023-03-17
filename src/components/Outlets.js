import React, { useEffect } from 'react'
import { useState } from 'react'
import Outletcard from './Outletcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Outlets() {

    //create state
    const [alloutlet, setalloutlet] = useState([])

    //function to api call for datas inside json file
    const getoutletdata = async () => {
        await fetch('./outlet.json').then(data => {
            data.json().then(result => {
                setalloutlet(result.outlets)
            })
        })
    }

    useEffect(() => {
        getoutletdata()
    }, [])


    return (

        <Row>
            {
                alloutlet.map(item => (
                    <Outletcard data={item} />
                ))
            }
        </Row>
    )
}

export default Outlets