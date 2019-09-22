import React from 'react';
import AddFriendInput from '../src/components/AddFriendInput';
import renderer from 'react-test-renderer';

describe('AddFriendInput', ()=>{
  it('render correctly', () => {
    const component = renderer.create(
      <AddFriendInput
          addFriend = {() => {}}
      />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('switch gender', () => {
    const component = renderer.create(
      <AddFriendInput
          addFriend = {() => {}}
      />,
    );

    component.getInstance().switchGender();
    
    let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    expect(JSON.stringify(tree).includes("fa-venus")).toBe(true);
  });

  it('call sumbit function', () => {
    const mockSubmit = jest.fn((name, gender) => {
      expect(name).toBe("Michel");
      expect(gender).toBe('M');
    });
    const component = renderer.create(
      <AddFriendInput
          addFriend = {mockSubmit}
      />,
    );

    component.getInstance().handleSubmit({
      target : {
        value : "Michel"
      },
      which: 13
    });
    
    let tree = component.toJSON();
    expect(mockSubmit.mock.calls.length).toBeGreaterThan(0);
  });
});