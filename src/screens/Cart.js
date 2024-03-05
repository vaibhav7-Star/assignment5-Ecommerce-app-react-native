import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../../redux/Createslice";
import { colors } from "../../globals/global";
import Toast from 'react-native-toast-message';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.counter) 
  const handleRemove = (id) => {
    dispatch(Remove(id));
    showToast();
  };
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Removed from cart',
      visibilityTime: 3000,
    });
  };

  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <View style={styles.itemsContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image
              source={{uri: item.image}}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.removeButton}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color:colors.col2
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "45%",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
   
  },
  price: {
    fontSize: 14,
    color: "#808080",
    marginBottom: 5,
  },
  removeButton: {
    backgroundColor: colors.col2,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Cart;
