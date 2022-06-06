import React, { useState } from 'react';
import './EntryList.css';
import SortRow from './SortRow';
import IconGroup from './IconGroup';
import Thumbnail from './Thumbnail';

const EntryList = (props) => {

    const [sort, updateSort] = useState('post');

    const sortEntries = () => {
        const entries = props.entries;
        const sortBy = sort;

            //let sortedEntries;
            //use the spread operator to make a copy of the array
            //let unSorted = [...entries];

            if(sortBy === 'ascending') {
                entries.sort(function(a, b) {
                    let titleA = a.title.toUpperCase();
                    let titleB = b.title.toUpperCase();
                    if (titleA < titleB) {
                        return -1;
                    }
                    if (titleA > titleB) {
                        return 1
                    }
                    //else
                    return 0
                })
            } else if(sortBy === 'descending') {
                entries.sort(function(a, b) {
                    let titleA = a.title.toUpperCase();
                    let titleB = b.title.toUpperCase();
                    if (titleA > titleB) {
                        return -1;
                    }
                    if (titleA < titleB) {
                        return 1
                    }
                    //else
                    return 0
                })
            } else {
                //seems like posts are normally ordered by created timestamp code?
                //sortedEntries = unSorted;
                entries.sort((a, b) => b.created - a.created);
            }
        // console.log('pre sort:')
        // console.log(unSorted)
        // console.log('post sort:')
        // console.log(sortedEntries)
        //Now update the entries directly
    }
    //Sort our entries prior to rendering
    sortEntries();

    const updateSortHandler = sort => {
        updateSort(sort);
    };

    //We have to wrap our return statement in a div otherwise it will throw an error!
    return <div>
        <SortRow sort={sort} onSortHandler={updateSortHandler} />
        {
            props.entries.map(entry => 
                <div className="row entry-row" key={entry.created}>
                    <div className="col-md-auto">
                        <Thumbnail entry={entry}/>
                    </div>
                    <div className="col">
                        <div className="row">
                            <h3>{entry.title}</h3>
                        </div>
                        <IconGroup entry={entry} array={props.entries} />
                    </div>
                </div>
            )
        }
        </div>
};

export default EntryList;