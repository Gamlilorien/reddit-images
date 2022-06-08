import React from 'react';
import {Row, Col} from 'reactstrap';
import './SortRow.css';

const SortRow = (props) => {
    const sortState = props.sort;
    //console.log(sortState);
    //const [sort, updateSort] = useState(props.sort);

    const sortEntries = (event) => {
      //console.log(event.target.getAttribute('sortvalue'))
      let newValue = event.target.getAttribute('sortvalue');
      props.onSortHandler(newValue);
    }

    return (
        <Row sortvalue={sortState}>
            <Col className="sort-col">
            <div className="float-end">
                <span >Sort by: </span>
                <span sortvalue="post" className={sortState === 'post'?"active":"not-active"} onClick={sortEntries}>Post |</span>
                <span sortvalue="ascending" className={sortState === 'ascending'?"active":"not-active"} onClick={sortEntries}> A-z |</span>
                <span sortvalue="descending" className={sortState === 'descending'?"active":"not-active"} onClick={sortEntries}> Z-a</span>
                </div>
            </Col>
      </Row>
    )
}

export default SortRow;