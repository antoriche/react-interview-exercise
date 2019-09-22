import React from 'react';
import FriendListItem from '../src/components/FriendListItem';
import renderer from 'react-test-renderer';

describe('FriendListItem', ()=>{
  it('render correctly', () => {
    const component = renderer.create(
      <FriendListItem
          id={0}
          name={"Michel"}
          gender={'M'}
          starred={false}
          starFriend={()=>{}}
      />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(JSON.stringify(tree).includes("fa-mars")).toBe(true);
    expect(JSON.stringify(tree).includes("fa-star-o")).toBe(true);
  });
  it('render gender', () => {
    const component = renderer.create(
      <FriendListItem
          id={0}
          name={"Michel"}
          gender={'F'}
          starred={false}
          starFriend={()=>{}}
      />,
    );
    
    let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    expect(JSON.stringify(tree).includes("fa-venus")).toBe(true);
  });
  it('render starred', () => {
    const component = renderer.create(
      <FriendListItem
          id={0}
          name={"Michel"}
          gender={'M'}
          starred={true}
          starFriend={()=>{}}
      />,
    );
    
    let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    expect(JSON.stringify(tree).includes("fa-star-o")).toBe(false);
  });
});