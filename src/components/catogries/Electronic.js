import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";


import axios from "axios";

const Electronic = () => {
  const [products, setProducts] = useState([]);


  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/category/electronics");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ScrollView>
    <View style={styles.container}>     
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image
            source={{uri: product.image}}
            style={styles.image}
          />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}$</Text>
        </View>  
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    height:'100%'
  },
  productContainer: {
    width: "45%",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "#808080",
  },
  addButton: {
    marginTop: 10,
    backgroundColor: "#00FF00",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Electronic;
