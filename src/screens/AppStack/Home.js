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
import React, {useState} from 'react';
import Images from '../../assets';
import {Input} from '../../components/input';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [data, setData] = useState([
    {
      id: 1,
      image: Images.appartment1,
      Area: 'Downtown',
      Rooms: 2,
      Price: '$1200/mo',
    },
    {
      id: 2,
      image: Images.appartment2,
      Area: 'Midtown',
      Rooms: 3,
      Price: '$1500/mo',
    },
    {
      id: 3,
      image: Images.appartment3,
      Area: 'Uptown',
      Rooms: 1,
      Price: '$950/mo',
    },
    {
      id: 4,
      image: Images.appartment4,
      Area: 'Beachside',
      Rooms: 2,
      Price: '$1800/mo',
    },
    {
      id: 5,
      image: Images.appartment5,
      Area: 'Suburbs',
      Rooms: 4,
      Price: '$2100/mo',
    },
    {
      id: 6,
      image: Images.appartment6,
      Area: 'City Center',
      Rooms: 1,
      Price: '$1000/mo',
    },
    {
      id: 7,
      image: Images.appartment7,
      Area: 'Industrial Area',
      Rooms: 3,
      Price: '$1300/mo',
    },
    {
      id: 8,
      image: Images.appartment8,
      Area: 'Old Town',
      Rooms: 2,
      Price: '$1100/mo',
    },
    {
      id: 9,
      image: Images.appartment9,
      Area: 'River Side',
      Rooms: 3,
      Price: '$1700/mo',
    },
    {
      id: 10,
      image: Images.appartment10,
      Area: 'Hillside',
      Rooms: 2,
      Price: '$1600/mo',
    },
  ]);

  const [editedArea, setEditedArea] = useState('');
  const [editedRooms, setEditedRooms] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

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

  // Filter data based on search query
  const filteredData = data.filter(
    item =>
      item.Area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Price.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Rooms.toString().includes(searchQuery), // Convert Rooms to string for comparison
  );

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: '8%',
        }}>
        <Input
          leftIcon={true}
          img={Images.searchIcon}
          placeholder={'Search...'}
          focusview={true}
          value={searchQuery}
          onChangeText={setSearchQuery} // Update searchQuery on text change
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredData} // Use filtered data
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={item.image}
              />
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => openModal(item)}>
                <Icon name="ellipsis-vertical" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.info}>
              <Text style={styles.area}>{item.Area}</Text>
              <Text>{item.Rooms} Rooms</Text>
              <Text>{item.Price}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{padding: 16}}
      />

      {/* Modal */}
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
  details: {
    color: '#666',
    marginTop: 4,
  },
  price: {
    color: '#333',
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 50,
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
});

export default Home;
