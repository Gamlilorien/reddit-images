import React from 'react';
import './EntryList.css';
import IconGroup from './IconGroup';
import Thumbnail from './Thumbnail';

const EntryList = (props) => {
    //We have to wrap our return statement in a div otherwise it will throw an error!
    return <div>
        {
            props.entries.map(entry => 
                <div className="row entry-row" key={entry.link}>
                    <div className="col-md-auto">
                        <Thumbnail entry={entry}/>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h3>{entry.title}</h3>
                        </div>
                        <IconGroup entry={entry} />
                    </div>
                </div>
            )
        }
        </div>
};

export default EntryList;