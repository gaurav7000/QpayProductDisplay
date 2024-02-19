import React, { memo } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyle'; // Import global styles

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={globalStyles.container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: product.thumbnail }} style={globalStyles.image} />
      <Text style={globalStyles.title}>{product.title}</Text>
      <Text style={globalStyles.description}>{product.description}</Text>
      <Text style={globalStyles.price}>Price: ${product.price}</Text>
      <Text style={globalStyles.discount}>Discount Percentage: {product.discountPercentage}%</Text>
      <Text style={globalStyles.rating}>Rating: {product.rating}</Text>
      <Text style={globalStyles.stock}>Stock: {product.stock}</Text>
      <Text style={globalStyles.brand}>Brand: {product.brand}</Text>
      <Text style={globalStyles.category}>Category: {product.category}</Text>
      <Text style={globalStyles.imagesTitle}>Product Images:</Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <View style={globalStyles.imagesContainer}>
          {product.images.map((image, index) => (
            <React.Fragment key={index}>
              <Image source={{ uri: image }} style={{ width: 200, height: 200, resizeMode: 'contain', margin: 5 }} />
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default memo(ProductDetails);
