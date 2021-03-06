import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ICONS
import SearchIcon from '../../assets/icons/search.svg';
import CameraIcon from '../../assets/icons/camera.svg';
import AddIcon from '../../assets/icons/add.svg';
import CategoryIcon from '../../assets/icons/category.svg';
import CompareIcon from '../../assets/icons/compare.svg';
import SaleIcon from '../../assets/icons/sale.svg';
import OffersIcon from '../../assets/icons/offers.svg';
import LoveIcon from '../../assets/icons/love.svg';

// ICON BOTTOM NAV
import HomeIcon from '../../assets/icons/house.svg';
import FeedIcon from '../../assets/icons/feed.svg';
import CartIcon from '../../assets/icons/cart.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import UserIcon from '../../assets/icons/user.svg';

const Menus = (menus) => {
  return (
    <View style={styles.isi_menus}>
      <View
        style={{
          width: 63,
          height: 63,
          borderRadius: 18,
          backgroundColor: menus.bgcolormenus,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {menus.icons}
      </View>
      <Text style={styles.text_icon_menus}>{menus.nama_menus}</Text>
    </View>
  );
};

const NewIsi = (newisi) => {
  return (
    <View style={styles.Newisi}>
      <View style={styles.box_img_new}>
        <LoveIcon width={23} height={23} style={styles.love_new} />
        <Image
          source={{
            uri: `${newisi.imageisi}`,
          }}
          style={styles.img_new}
        />
      </View>
      <View style={styles.box_j_isi_new}>
        <Text style={styles.j_isi_new}>{newisi.namaisi}</Text>
        <Text style={styles.c_isi_new}>{newisi.colorisi}</Text>
        <View style={styles.boxharganew}>
          <Text style={styles.dollar}>{newisi.hargaisi}</Text>
          <View style={styles.box_plusnew}>
            <AddIcon width={14} height={14} />
          </View>
        </View>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#874bff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.back_header}>
            <View style={styles.header}>
              <Text style={styles.judul}>SHOP</Text>
              <View style={styles.box_search}>
                <View style={styles.box_icon_search}>
                  <SearchIcon width={18} height={18} />
                </View>
                <TextInput placeholder="Search" style={styles.input_search} />
              </View>
              <View style={styles.box_camera}>
                <CameraIcon width={23} height={23} />
              </View>
            </View>
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Order')}>
            <View style={styles.list_top}>
              <Image
                source={{
                  uri:
                    'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/bbe2b2db-2afc-418b-9993-b878924fa2ea/air-max-2090-shoe-x9Tvhx.jpg',
                }}
                style={styles.img_list_top}
              />
              <View style={styles.desc_list_top}>
                <Text style={styles.t_intro_lt}>Introducings</Text>
                <Text style={styles.t_tipe_lt}>Air Max 2090</Text>
                <View style={styles.box_button_lt}>
                  <Text style={styles.text_button_lt}>Buy Now</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.menus}>
            <Menus
              bgcolormenus="#f0eafc"
              nama_menus="Category"
              icons={<CategoryIcon width={27} height={27} />}
            />
            <Menus
              bgcolormenus="#f3ecfc"
              nama_menus="Compare"
              icons={<CompareIcon width={28} height={28} />}
            />
            <Menus
              bgcolormenus="#f5e6f8"
              nama_menus="Sales event"
              icons={<SaleIcon width={28} height={28} />}
            />
            <Menus
              bgcolormenus="#fceeea"
              nama_menus="Offers"
              icons={<OffersIcon width={28} height={28} />}
            />
          </View>
          <View style={styles.new}>
            <View style={styles.head_new}>
              <Text style={styles.text_head_new}>New Arrivals</Text>
              <View style={styles.va_new}>
                <Text style={styles.text_va_new}>View All</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.box_isi_new}>
                <NewIsi
                  namaisi="Nike Air Max 90"
                  colorisi="5 Colors"
                  hargaisi="$150"
                  imageisi="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3d20be1-ae31-4a5f-9963-457457620297/air-max-90-shoe-gFtKdr.jpg"
                />
                <NewIsi
                  namaisi="Nike Air VaporMax"
                  colorisi="7 Colors"
                  hargaisi="$170"
                  imageisi="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6daed5a8-b6b8-4792-aac2-7e4b2ec145bd/air-vapormax-evo-shoe-mc10HF.jpg"
                />
                <NewIsi
                  namaisi="Nike Air Max Viva"
                  colorisi="3 Colors"
                  hargaisi="$165"
                  imageisi="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6b22eeb1-4101-4407-bd93-6e8416566d9d/air-max-viva-shoe-31Zblk.jpg"
                />
                <NewIsi
                  namaisi="Nike Air Max 270"
                  colorisi="3 Colors"
                  hargaisi="$130"
                  imageisi="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a544fa30-170f-4e56-8f3a-1ce21569c92f/air-max-270-older-shoe-tnlrnr.jpg"
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom_nav}>
        <View style={styles.isi_bottom_nav}>
          <HomeIcon width={23} height={23} />
          <Text style={styles.text_botnav_a}>Home</Text>
        </View>
        <View style={styles.isi_bottom_nav}>
          <FeedIcon width={23} height={23} />
          <Text style={styles.text_botnav}>Feed</Text>
        </View>
        <View style={styles.isi_bottom_nav}>
          <CartIcon width={23} height={23} />
          <Text style={styles.text_botnav}>Cart</Text>
        </View>
        <View style={styles.isi_bottom_nav}>
          <ChatIcon width={23} height={23} />
          <Text style={styles.text_botnav}>Message</Text>
        </View>
        <View style={styles.isi_bottom_nav}>
          <UserIcon width={23} height={23} />
          <Text style={styles.text_botnav}>User</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  back_header: {
    backgroundColor: '#874bff',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    marginHorizontal: 25,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  judul: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
  },
  box_search: {
    width: 170,
    height: 50,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 10,
    // flexDirection: 'row',
    justifyContent: 'center',
  },
  input_search: {
    paddingLeft: 43,
    paddingRight: 16,
    fontSize: 16,
  },
  box_icon_search: {
    position: 'absolute',
    marginLeft: 16,
  },
  box_camera: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list_top: {
    // height: 150,
    marginHorizontal: 25,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 25,
    marginTop: -90,
    padding: 20,
    flexDirection: 'row',
  },
  img_list_top: {
    width: 170,
    height: 110,
    borderRadius: 20,
  },
  desc_list_top: {
    // backgroundColor: 'red',
    flex: 1,
    marginLeft: 20,
  },
  t_intro_lt: {
    fontSize: 14,
    color: '#2c2c2c',
    fontWeight: '700',
  },
  t_tipe_lt: {
    fontSize: 18,
    color: '#2c2c2c',
    fontWeight: '700',
    marginTop: 5,
    flex: 1,
  },
  box_button_lt: {
    backgroundColor: '#2c2c2c',
    width: 85,
    height: 38,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_button_lt: {
    color: '#fff',
  },
  menus: {
    marginHorizontal: 25,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  isi_menus: {
    width: 65,
    alignItems: 'center',
  },
  text_icon_menus: {
    width: 80,
    // backgroundColor: 'blue',
    marginTop: 7,
    textAlign: 'center',
    fontSize: 14,
    color: '#2c2c2c',
  },
  new: {
    paddingVertical: 25,
    backgroundColor: '#f5f5f5',
    // flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  head_new: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_head_new: {
    fontSize: 19,
    color: '#2c2c2c',
    fontWeight: '700',
  },
  va_new: {
    backgroundColor: '#7f3eff',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },
  text_va_new: {
    color: '#fff',
    fontSize: 14,
  },
  box_isi_new: {
    marginHorizontal: 17,
    flexDirection: 'row',
    marginTop: 17,
  },
  Newisi: {
    width: 155,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 15,
    padding: 8,
  },
  box_img_new: {
    height: 140,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_new: {
    width: 135,
    height: 75,
  },
  box_j_isi_new: {
    margin: 5,
    marginTop: 7,
  },
  j_isi_new: {
    fontSize: 15,
    color: '#2c2c2c',
  },
  c_isi_new: {
    backgroundColor: '#f5f5f5',
    width: 63,
    paddingVertical: 3,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 12,
    color: '#707070',
    marginTop: 7,
  },
  boxharganew: {
    // backgroundColor: 'red',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dollar: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c2c2c',
  },
  box_plusnew: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  love_new: {
    position: 'absolute',
    zIndex: 1,
    top: 11,
    right: 11,
  },

  // BOTTOM NAV
  bottom_nav: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
  },
  isi_bottom_nav: {
    alignItems: 'center',
    flex: 1,
  },
  text_botnav_a: {
    color: '#7f3eff',
    fontSize: 12,
    marginTop: 5,
  },
  text_botnav: {
    color: '#858585',
    fontSize: 12,
    marginTop: 5,
  },
});
