import React from 'react';
import {FlatList} from 'react-native';
import UserStory from './UserStory';

const DATA = [
  {
    id: 1,
    imageUri:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F15%2Fdrake-2000.jpg&q=85',
    userName: 'Drake',
  },
  {
    id: 2,
    imageUri:
      'https://www.thesun.co.uk/wp-content/uploads/2021/04/NINTCHDBPICT000624252654.jpg',
    userName: 'Floyd',
  },
  {
    id: 3,
    imageUri:
      'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F600c27603ffbb25d83b4c85c%2F0x0.jpg',
    userName: 'Conor',
  },
  {
    id: 4,
    imageUri:
      'https://pyxis.nymag.com/v1/imgs/1fc/d2d/baa8c2ba29eb3ab70e009c53944c717202-28-roxanne-shante-3.2x.h600.w512.jpg',
    userName: 'Shante',
  },
  {
    id: 5,
    imageUri:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babb7f1a7ea4342a948b79a%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D748%26cropX2%3D3075%26cropY1%3D1753%26cropY2%3D4082',
    userName: 'Warren',
  },
  {
    id: 6,
    imageUri:
      'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
    userName: 'Bill',
  },
];

function Stories() {
  function renderStories({item}) {
    return <UserStory imageUri={item.imageUri} userName={item.userName} />;
  }
  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={renderStories}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default Stories;
