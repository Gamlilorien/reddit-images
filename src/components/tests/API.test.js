import axios from 'axios';
import API from '../../utils/API';

jest.mock('axios');

test('Check API calls', () => {

    const apiResponse = () => {
        return axios.get("https://www.reddit.com/r/Funnypics.json");
    }
    const test = apiResponse();
    const entries = API.getEntries();

    expect(test).toEqual(entries);
})