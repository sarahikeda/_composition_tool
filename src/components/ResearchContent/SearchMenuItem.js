import React from 'react';
import Icon from './../../assets/Icons/Icon';
import { ICONS } from './../../assets/Icons/icon.constants';
//import { Button } from 'reactstrap';

const SearchMenuItem = ({item}, props) => {
    return (
        <div className="mb-2 clearfix">
            <span className="float-left mr-2">
                <Icon icon={ICONS.STAR} size={14} color={item.following ? "#F5A623" : "#9B9B9B"} w={42} h={42} />
            </span>
            <span className="float-left mr-2" >
                <Icon icon={item.author ? ICONS.AUTHOR : ICONS.TOPIC} size={14} color="#FFF" />
            </span>
            <span className="float-left">{item.author ? item.name : item.sector}</span>
            {/* <Button className="float-right" outline color="primary" size="sm">follow</Button> */}
            <span className="float-right">{item.author ? item.sector : ''}</span>
        </div>
    )
}


export default SearchMenuItem