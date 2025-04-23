/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Images from '../../assets';
import {Input} from '../../components/input';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [userType, setUserType] = useState('client');
  const [editedArea, setEditedArea] = useState('');
  const [editedRooms, setEditedRooms] = useState('');
  const [editedPrice, setEditedPrice] = useState('');
  const [loading, setLoading] = useState(true);


  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        if (jsonValue != null) {
          const userData = JSON.parse(jsonValue);
          console.log('Loaded from AsyncStorage:', userData);
          setUserType(userData.type);
        }
      } catch (e) {
        console.error('Failed to load user data:', e);
      } finally {
        setLoading(false);
      }
    };
  
    loadUserData();
  }, []);
  

  const [data, setData] = useState([
    {
      id: 1,
      image: Images.appartment1,
      Area: 'Johar town',
      Rooms: '2 Rooms',
      Price: '12000k Rs /month',
    },
    {
      id: 2,
      image: Images.appartment2,
      Area: 'Iqbal town',
      Rooms: '3 Rooms',
      Price: '150000k Rs /month',
    },
    {
      id: 3,
      image: Images.appartment3,
      Area: 'Awan town',
      Rooms: '1 Rooms',
      Price: '95000k Rs /month',
    },
    {
      id: 4,
      image: Images.appartment4,
      Area: 'Gulberg',
      Rooms: '2 Rooms',
      Price: '180000k Rs /month',
    },
    {
      id: 5,
      image: Images.appartment5,
      Area: 'Suburbs',
      Rooms: '4 Rooms',
      Price: '210000k Rs /month',
    },
    {
      id: 6,
      image: Images.appartment6,
      Area: 'Gulberg',
      Rooms: '1 Rooms',
      Price: '100000k Rs /month',
    },
    {
      id: 7,
      image: Images.appartment7,
      Area: 'Iqbal town',
      Rooms: '3 Rooms',
      Price: '130000k Rs /month',
    },
    {
      id: 8,
      image: Images.appartment8,
      Area: 'Johar town',
      Rooms: '2 Rooms',
      Price: '110000k Rs /month',
    },
    {
      id: 9,
      image: Images.appartment9,
      Area: 'Awan town',
      Rooms: '3 Rooms',
      Price: '170000k Rs /month',
    },
    {
      id: 10,
      image: Images.appartment10,
      Area: 'Johar town',
      Rooms: '2 Rooms',
      Price: '160000k Rs /month',
    },
  ]);

  const openModal = item => {
    setSelectedItem(item);
    setEditedArea(item.Area);
    setEditedRooms(item.Rooms.toString());
    setEditedPrice(item.Price);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const saveChanges = () => {
    const updatedData = data.map(item =>
      item.id === selectedItem.id
        ? {
            ...item,
            Area: editedArea,
            Rooms: parseInt(editedRooms),
            Price: editedPrice,
          }
        : item,
    );
    setData(updatedData);
    closeModal();
  };

  const deleteItem = () => {
    const updatedData = data.filter(item => item.id !== selectedItem.id);
    setData(updatedData);
    closeModal();
  };

  const filteredData = data.filter(
    item =>
      item.Area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Price.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Rooms.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // const handleLogout = () => {
    const handleLogout = async () => {
      await AsyncStorage.removeItem('userData');
      await auth().signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'AuthStack', params: { screen: 'LogIn' } }],
      });
    };
    
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      );
    }
  return (
    
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          marginTop: '8%',
        }}>
        <Input
          leftIcon={true}
          img={Images.searchIcon}
          placeholder={'Search...'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredData}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedImage(item.image);
                  setImageModalVisible(true);
                }}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={item.image}
                />
              </TouchableOpacity>
              {userType === 'dealer' && (
                <TouchableOpacity
                  style={styles.menuButton}
                  onPress={() => openModal(item)}>
                  <Icon name="ellipsis-vertical" size={24} color="white" />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.info}>
              <Text style={styles.area}>{item.Area}</Text>
              <Text>{item.Rooms}</Text>
              <Text>{item.Price}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{padding: 16}}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          // backgroundColor: 'blue',
          marginBottom: '2%',
          height: 50,
        }}>
        <Text
          onPress={handleLogout}
          style={{
            justifyContent: 'center',
            // marginTop:'10%',
            fontSize: 15,
            color: 'red',
            fontWeight: '500',
            right: 20,
          }}>
          Logout
        </Text>
      </View>
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.input}
                value={editedArea}
                onChangeText={setEditedArea}
                placeholder="Area"
              />
              <TextInput
                style={styles.input}
                value={editedRooms}
                keyboardType="numeric"
                onChangeText={setEditedRooms}
                placeholder="Rooms"
              />
              <TextInput
                style={styles.input}
                value={editedPrice}
                onChangeText={setEditedPrice}
                placeholder="Price"
              />
              <Text style={styles.modalOption} onPress={saveChanges}>
                Save Changes
              </Text>
              <Text style={styles.modalOption} onPress={deleteItem}>
                Delete
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={{color: 'red', marginTop: 10}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={imageModalVisible}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.fullImageWrapper}
            onPress={() => setImageModalVisible(false)}>
            <Image
              source={selectedImage}
              style={styles.fullImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 12,
  },
  info: {
    padding: 10,
  },
  area: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  fullImageWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.4)',
  },
  fullImage: {
    width: '100%',
    height: '80%',
    // backgroundColor: 'red',
  },
});

export default Home;
