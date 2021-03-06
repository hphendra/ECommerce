import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoveIcon from '../../assets/icons/love.svg';
import ShareIcon from '../../assets/icons/share.svg';

const Order = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#874bff" />
      <ScrollView>
        <View style={styles.order}>
          <View style={styles.back_header} />
          <View style={styles.box_image}>
            <Image
              source={{
                uri:
                  'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bbe2b2db-2afc-418b-9993-b878924fa2ea/air-max-2090-shoe-x9Tvhx.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.j_image}>1/4</Text>
          </View>
          <View style={styles.detail}>
            <View style={styles.box_harga}>
              <View style={styles.box_harga_judul}>
                <Text style={styles.harga}>$150</Text>
              </View>
              <View style={styles.box_ls}>
                <LoveIcon width={23} height={23} />
              </View>
              <View style={styles.box_ls}>
                <ShareIcon width={23} height={23} />
              </View>
            </View>
            <Text style={styles.nama_brand}>Nike Air Max 2090</Text>
            <View style={styles.box_color}>
              <View style={styles.box_image_color}>
                <Image
                  source={{
                    uri:
                      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bbe2b2db-2afc-418b-9993-b878924fa2ea/air-max-2090-shoe-x9Tvhx.jpg',
                  }}
                  style={styles.image_color}
                />
              </View>
              <View style={styles.box_image_color}>
                <Image
                  source={{
                    uri:
                      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/14f8e01d-c78a-49f3-a393-22be8e9afe7d/air-max-2090-shoe-x9Tvhx.jpg',
                  }}
                  style={styles.image_color}
                />
              </View>
              <View style={styles.box_image_color}>
                <Image
                  source={{
                    uri:
                      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/62478fb1-cffb-44f5-afd1-cdcda039ff01/air-max-2090-shoe-x9Tvhx.jpg',
                  }}
                  style={styles.image_color}
                />
              </View>
            </View>
            <Text style={styles.j_all}>Select Size</Text>
            <View style={styles.box_isi_all}>
              <Text style={styles.isi_nomer}>6</Text>
              <Text style={styles.isi_nomer_a}>6.5</Text>
              <Text style={styles.isi_nomer}>7</Text>
              <Text style={styles.isi_nomer}>7.5</Text>
              <Text style={styles.isi_nomer}>8</Text>
              <Text style={styles.isi_nomer}>8.5</Text>
              <Text style={styles.isi_nomer}>9</Text>
              <Text style={styles.isi_nomer}>9.5</Text>
              <Text style={styles.isi_nomer}>10</Text>
              <Text style={styles.isi_nomer}>10.5</Text>
            </View>
            <Text style={styles.j_desc}>Description</Text>
            <Text style={styles.t_desc}>
              Bring the past into the future with the Nike Air Max 2090, a bold
              look inspired by the DNA of the iconic Air Max 90. Brand-new Nike
              Air cushioning underfoot adds unparalleled comfort while
              transparent mesh and vibrantly coloured textile on select
              colourways blend with timeless OG features for an edgy, modernised
              look.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.menu_bot}>
        <Text style={styles.add}>Add To Cart</Text>
        <Text style={styles.buy} onPress={() => navigation.navigate('Home')}>
          Buy Now
        </Text>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  order: {
    flex: 1,
    paddingBottom: 25,
  },
  back_header: {
    height: 220,
    backgroundColor: '#874bff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  box_image: {
    backgroundColor: '#f6f6f6',
    marginHorizontal: 25,
    marginTop: -180,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 60,
    borderRadius: 25,
  },
  image: {
    width: 300,
    height: 170,
  },
  j_image: {
    position: 'absolute',
    zIndex: 1,
    bottom: 13,
    right: 20,
    fontSize: 14,
    fontWeight: '700',
    color: '#808080',
  },
  detail: {
    marginHorizontal: 25,
  },
  box_harga: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  box_harga_judul: {
    flex: 1,
  },
  box_ls: {
    width: 45,
    height: 45,
    backgroundColor: '#f6f6f6',
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  harga: {
    fontSize: 23,
    color: '#2c2c2c',
    fontWeight: '700',
  },
  nama_brand: {
    fontSize: 19,
    fontWeight: '700',
    color: '#353535',
  },
  box_color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  box_image_color: {
    width: 105,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    paddingBottom: 12,
    paddingTop: 5,
    borderRadius: 10,
  },
  image_color: {
    width: 95,
    height: 65,
  },
  j_all: {
    fontSize: 16,
    marginTop: 25,
    fontWeight: '700',
    color: '#353535',
  },
  box_isi_all: {
    // height: 100,
    // backgroundColor: 'red',
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  isi_nomer: {
    width: 60,
    height: 55,
    // backgroundColor: 'red',
    textAlign: 'center',
    lineHeight: 55,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 17,
    fontWeight: '700',
    color: '#2c2c2c',
    marginBottom: 9,
  },
  isi_nomer_a: {
    width: 60,
    height: 55,
    backgroundColor: '#2c2c2c',
    textAlign: 'center',
    lineHeight: 55,
    borderWidth: 1.5,
    // borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  j_desc: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: '700',
    color: '#353535',
  },
  t_desc: {
    fontSize: 14,
    // fontWeight: '700',
    color: '#808080',
    marginTop: 13,
    lineHeight: 20,
  },
  menu_bot: {
    // backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  add: {
    width: '48%',
    backgroundColor: '#f6f6f6',
    height: 60,
    borderRadius: 13,
    color: '#2c2c2c',
    textAlign: 'center',
    lineHeight: 60,
    fontSize: 17,
    fontWeight: '700',
  },
  buy: {
    width: '48%',
    backgroundColor: '#874bff',
    height: 60,
    borderRadius: 13,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 60,
    fontSize: 17,
    fontWeight: '700',
  },
});
