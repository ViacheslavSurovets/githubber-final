import React from 'react';
import {Card} from 'antd';
import './UserItem.css'

const {Meta} = Card;

const UserItem = ({user: {login, avatar_url, html_url}}) => {

    return (
        <Card className="text-center"

            hoverable
              cover={<img alt='' src={avatar_url} style={{width: '80px', borderRadius: "50%", margin:"1em auto"}}/>}>
            <Meta title={login}/>


            <a href={html_url} className='btn btn-dark btn-sm my-1'>
                More
            </a>

            {login === 'ViacheslavSurovets' && <a
                href={mine_url}
                className='btn btn-white btn-keyframe'
                target='blank'>Give Offer</a>}

        </Card>
    );
};

const mine_url = 'https://www.linkedin.com/in/viacheslav-surovets-239a6b137';


export default UserItem;

