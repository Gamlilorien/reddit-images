import React from 'react';
import {Row, Col} from 'reactstrap';
import './SortRow.css';

const SortRow = (props) => {
    const sortState = props.sort;
    //console.log(sortState);
    //const [sort, updateSort] = useState(props.sort);

    const sortEntries = (event) => {
      //console.log(event.target.getAttribute('value'))
      let newValue = event.target.getAttribute('value');
      props.onSortHandler(newValue);
    }

    return (
        <Row>
            <Col className="sort-col">
            <div className="float-end">
                <span value={sortState}>Sort by: </span>
                <span value="post" className={sortState === 'post'?"active":"not-active"} onClick={sortEntries}>Post |</span>
                <span value="ascending" className={sortState === 'ascending'?"active":"not-active"} onClick={sortEntries}> A-z |</span>
                <span value="descending" className={sortState === 'descending'?"active":"not-active"} onClick={sortEntries}> Z-a</span>
                </div>
            </Col>
      </Row>
    )
}

export default SortRow;