import React from 'react';
import {Card, Button} from 'antd';
import './UserItem.css'

const {Meta} = Card;

const UserItem = ({user: {login, avatar_url, html_url}}) => {

    return (
        <Card className="card"

              hoverable
              cover={<img alt='' src={avatar_url} style={{width: '80px', borderRadius: "50%", margin: "1em auto"}}/>}>
            <Meta title={login}/>

            <Button href={html_url} style={{background: "#ffac40", color: "white"}} className="card__button card__button_margin">More</Button>

            {login === 'ViacheslavSurovets' && <Button
                href={mine_url}
                className='
                card__button
                card__button_keyframe
                card__button_margin'
                target='blank'>Give Offer</Button>}

        </Card>
    );
};

const mine_url = 'https://www.linkedin.com/in/viacheslav-surovets-239a6b137';


export default UserItem;

