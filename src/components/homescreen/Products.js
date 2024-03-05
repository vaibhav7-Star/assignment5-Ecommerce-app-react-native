
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import { colors } from "../../../globals/global";
import { FontAwesome } from '@expo/vector-icons';
import { Add } from "../../../redux/Createslice";
import { useDispatch } from "react-redux";
import axios from "axios";
import Toast from 'react-native-toast-message';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDescending, setSortDescending] = useState(false);

  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      const totalPagesCount = Math.ceil(res.data.length / 5);
      setTotalPages(totalPagesCount);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(Add(product));
    showToast(); 
  };

  //logic for pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    let currentProducts = products.slice(startIndex, endIndex);

//logic for searching product 
    if (searchTerm.trim() !== '') {
      currentProducts = currentProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortDescending) {
      currentProducts.sort((a, b) => b.price - a.price);
    }

    return currentProducts.map((product) => (
      <View key={product.id} style={styles.productContainer}>
        <Image
          source={{uri: product.image}}
          style={styles.image}
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}$</Text>
        <TouchableOpacity onPress={()=> handleAdd(product)} style = {{paddingLeft:120}}>
          <FontAwesome name="cart-plus" size={24} color={colors.col2} />
        </TouchableOpacity>
      </View>
    ));
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      visibilityTime: 3000,
    });
  };

  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
        />
        <TouchableOpacity style={{paddingLeft:20}} onPress={() => setSortDescending(!sortDescending)}>
          <FontAwesome name="sort" size={24} color={colors.col2} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {renderProducts()}   
          <View style={styles.pagination}>
            <TouchableOpacity onPress={prevPage}>
              <Text style={styles.paginationButton}>Previous</Text>
            </TouchableOpacity>
            <Text style={styles.paginationText}>{currentPage} / {totalPages}</Text>
            <TouchableOpacity onPress={nextPage}>
              <Text style={styles.paginationButton}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 5
  },
  productContainer: {
    width: "45%",
    height: 330,
    justifyContent:'center',
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
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 130,
    height: '100%'
  },
  paginationButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.text1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  searchInput: {
    width: "80%",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default Products;

