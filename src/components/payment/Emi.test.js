import {mount} from 'enzyme'
import renderer from 'react-test-renderer';
import Emi from './Emi'

describe('emi cOMPONENT', () => {
    
    const wrapper = mount(<Emi />);

    it('Should Render Properly',()=>{
        const tree=renderer.create(<Emi/>).toJSON()
        expect(tree).toMatchSnapshot();

    })

    //can check all Input fields

    it('should render an email input tag', () => {
        expect(wrapper.find('input[name="emi"]').exists()).toBe(true);
    });

    it('check for class..',()=>{
        expect(wrapper.exists('.emi-selector')).toEqual(true)
    })

})