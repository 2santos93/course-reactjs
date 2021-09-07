import { shallow } from 'enzyme';

import GifGridItem from '../../Components/GifGridItem';
describe('tests for GifGridItem', () => {
    const title = "This is a title";
    const url = "http://localhost";

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should render ok', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have an image and paragraph with their info', () => {

        const p = wrapper.find('p').text();
        const {src, alt, className} = wrapper.find('img').props();

        expect(p).toBe(title);
        expect(src).toBe(url);
        expect(alt).toBe(title);
        expect(className).toBe('card-image');

    });

});
