import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, Pressable, Button } from 'react-native';
import axios from 'axios';
import Card from '../helper/card';
import { globalStyles } from '../styles/globalStyle'; // Import global styles

const ProductPage = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const renderItem = useMemo(() => ({ item }) => (
    <Pressable onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Card>
        <View style={globalStyles.productContainer}>
          <Image
            source={{ uri: item.thumbnail }}
            style={globalStyles.productImage}
          />
          <View style={globalStyles.productDetails}>
            <Text style={globalStyles.productTitle}>{item.title}</Text>
            <Text style={globalStyles.productPrice}>${item.price}</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  ), [navigation]);

  const retryFetch = () => {
    setLoading(true);
    setError(null);
    fetchProducts();
  };

  if (loading) {
    return (
      <View style={globalStyles.centeredContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.centeredContainer}>
        <Text style={globalStyles.errorText}>{error}</Text>
        <Button title="Retry" onPress={retryFetch} />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductPage;