import {shallow} from 'enzyme';

import GifGrid from '../../Components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('test for GifGrid component', () => {
    const category = 'Dragon Ball';
    
    test('should render ok', () => {
        useFetchGifs.mockReturnValue({loading:true, gifs: []});
        const wrapper = shallow(<GifGrid category={category} />);
        const h2 = wrapper.find('h2');
        const GifGridItem = wrapper.find('GifGridItem');
        
        expect(wrapper).toMatchSnapshot();
        expect(h2.text()).toBe('Loading');
        expect(GifGridItem.exists()).toBe(false);
    });

    test('should show loading and not render the GifGridItem', () => {
        const gifs = [{id:'123', url:'http://localhost', title:'Hi im goku'}];
        
        useFetchGifs.mockReturnValue({loading:false, gifs});
        const wrapper = shallow(<GifGrid category={category} />);
        const GifGridItem = wrapper.find('GifGridItem');
        const h2 = wrapper.find('h2');

        expect(h2.exists()).toBe(false);
        expect(GifGridItem.exists()).toBe(true);
        expect(GifGridItem.length).toBe(gifs.length);

    });
    
})
