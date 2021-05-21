import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Stories from '../Story/Stories';
import HeaderIndex from './HeaderIndex';

const DATA = [
  {
    id: 1,
    userName: 'beetles',
    imgURI: 'https://i.ytimg.com/vi/jo505ZyaCbA/maxresdefault.jpg',
    likeCounter: 245,
    caption: 'Yoo lets make this happen son!!!!',
  },
  {
    id: 2,
    userName: 'prodigy',
    imgURI:
      'https://media3.s-nbcnews.com/i/newscms/2017_25/2045946/170620-prodigy-mobb-deep-5-ew-426p_dcd77797c9f5e3b16119c1568bef03e9.JPG',
    likeCounter: 245,
    caption: 'Yoo lets make this happen son!!!!',
  },
  {
    id: 3,
    userName: 'Cristal',
    imgURI:
      'https://www.gourmetgiftbaskets.com/images/products/Champagne-Gift-Baskets/Louis-Roederer-Cristal-Champagne-2000-Gift-Box_large.jpg',
    likeCounter: 245,
    caption: 'Yoo lets make this happen son!!!!',
  },
  {
    id: 4,
    userName: 'PAC',
    imgURI:
      'https://myhero.com/images/guest/g233845/hero69487/g233845_u82984_2pac.jpg',
    likeCounter: 245,
    caption: 'Who da G.OA.T',
  },
  {
    id: 5,
    userName: 'Cole',
    imgURI:
      'https://www.biography.com/.image/t_share/MTQ3Mzg3MjY0ODg2OTA4NTk5/j_cole_photo_by_isaac_brekken_wireimage_getty_503069628.jpg',
    likeCounter: 245,
    caption: 'Money stops all bullshit!!!!',
  },
  {
    id: 6,
    userName: 'Say_so',
    imgURI:
      'https://images.unsplash.com/photo-1534412638304-22e2df166c61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    likeCounter: 245,
    caption: 'Evidently!!!!',
  },
  {
    id: 7,
    userName: '$getMoney____',
    imgURI:
      'https://i2.wp.com/septin911.com.ng/wp-content/uploads/2017/01/download-video-m-anifest-manifes.jpg?resize=500%2C281&ssl=1',
    likeCounter: 245,
    caption: 'Make some money dawg',
  },
  {
    id: 8,
    userName: 'b.i.g',
    imgURI:
      'https://www.artandobject.com/sites/default/files/styles/gallery_item/public/10395-barron-claiborne-notorious-big-kony-king-new-york-edited.jpg?itok=ciGGkT_2',
    likeCounter: 245,
    caption: 'Let the steam blow!!!!',
  },
  {
    id: 9,
    userName: 'internationalHov',
    imgURI:
      'https://static.highsnobiety.com/thumbor/5u1jEbOQRSTOoaUVHU0Oi2pLciY=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/10/23155359/jay-z-breaking-cannabis-industry-main.jpg',
    likeCounter: 245,
    caption: 'G check yourself son!!!!',
  },
  {
    id: 10,
    userName: 'nasir',
    imgURI:
      'https://static.billboard.com/files/media/nas-future-2018-billboard-1548-compressed.jpg',
    likeCounter: 245,
    caption: 'haha!!! G Stupid',
  },
];

<HeaderIndex />;
function IndexPost() {
  function renderPost({item}) {
    return (
      <HeaderIndex
        userName={item.userName}
        imgURI={item.imgURI}
        caption={item.caption}
        likeCounter={item.likeCounter}
      />
    );
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <FlatList
        ListHeaderComponent={Stories}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderPost}
      />
    </SafeAreaView>
  );
}

export default IndexPost;
