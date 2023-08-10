import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/seasons',
    headers: {
        'X-RapidAPI-Key': '112dbd5ef6mshf304b91d17f3948p1b2dc4jsnab361f5b1275',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

const fetchData = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return 'error';
    }
}

const Players = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
        <div style={{ margin: "100px" }}>
            <div>
                Players from Team
                {id}
            </div>
            <button
                className="primaryBtn"
                onClick={() => {
                    navigate("/");
                }}
            >
                Go to Home
            </button>
        </div>
    );
};

export default Players;
