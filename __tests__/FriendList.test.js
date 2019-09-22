import React from 'react';
import FriendList from '../src/components/FriendList';
import renderer from 'react-test-renderer';

describe('FriendList', ()=>{
  it('render correctly', () => {
    const component = renderer.create(
      <FriendList
          friends = {[{name: "Michel", gender: 'M', starred: false}, {name: "Dominique", gender: 'F', starred: true}]}
          actions = {{starFriend:()=>{}}}
      />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});