// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const Penerima = ({route, navigation}) => {
//   const {itemId, otherParam} = route.params;
//   return (
//     <View>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//     </View>
//   );
// };

// export default Penerima;

// const styles = StyleSheet.create({});

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({name, email, bidang, onPress, onDelete, gambar}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://griyamu.com/mesin/gambar/profile/${gambar}`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descNama}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const OnlineCRUD = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  const jdfg = itemId;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [iduser, setIduser] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  // const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const data = {
    name,
    email,
    bidang,
    iduser,
  };

  const submit = () => {
    console.log('data before send: ', data);
    if (button === 'Simpan') {
      axios
        .post('https://griyamu.com/mesin/aw/tambah.php', data)
        .then((res) => {
          console.log('res: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
        });
    } else if (button === 'Update') {
      axios.post('https://griyamu.com/mesin/aw/edit.php', data).then((res) => {
        console.log('res update:', res);
        setName('');
        setEmail('');
        setBidang('');
        getData();
        setButton('Simpan');
      });
    }
  };

  const getData = () => {
    axios
      .get(`https://griyamu.com/mesin/aw/get.php?idusr=${jdfg}`)
      .then((res) => {
        console.log('res get data: ', res);
        setUsers(res.data);
      });
  };

  const selectItem = (item) => {
    console.log('selected item: ', item);
    // setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.ID);
    setIduser(item.ID);
    setButton('Update');
  };

  const deleteItem = (itemhapus) => {
    setIduser(itemhapus.ID);
    axios.post('https://griyamu.com/mesin/aw/hapus.php', data).then((res) => {
      console.log('res delete:', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Penerima {jdfg}</Text>
      <Text>Masukan Anggota</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />

      <View style={styles.line} />

      {users.map((user) => {
        return (
          <Item
            key={user.ID}
            gambar={user.bidang}
            name={user.name}
            email={user.email}
            bidang={user.ID}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Anda yakin akan menghapus user ini?', [
                {text: 'Tidak', onPress: () => console.log('button tidak')},
                {text: 'Ya', onPress: () => deleteItem(user)},
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default OnlineCRUD;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 18,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 20,
    flex: 1,
  },
  descNama: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
