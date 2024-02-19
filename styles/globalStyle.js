import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const globalStyles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    fontSize: RFValue(16),
    fontFamily: 'Inter-Bold',
    color: 'red'
  },
  productContainer: {
    padding: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
  productImage: {
    width: RFPercentage(15),
    aspectRatio: 1,
    resizeMode: 'center',
  },
  productDetails: {
    flex: 1,
    marginLeft: RFValue(10),
  },
  productTitle: {
    fontSize: RFValue(18),
    fontFamily: 'Inter-Bold'
  },
  productPrice: {
    fontSize: RFValue(16),
    fontFamily: 'Inter-Regular',
    color: 'green'
  },
  container: {
    padding: RFValue(20),
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: RFValue(10),
    borderRadius: RFValue(25)
  },
  title: {
    fontSize: RFValue(22),
    fontFamily: 'Inter-Bold',
    marginBottom: RFValue(5),
  },
  description: {
    fontSize: RFValue(16),
    fontFamily: 'Inter-Regular',
    marginBottom: RFValue(10),
  },
  price: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
    fontFamily: 'Inter-Regular',
  },
  discount: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
    fontFamily: 'Inter-Regular',
  },
  rating: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
  },
  stock: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
    fontFamily: 'Inter-Regular',
  },
  brand: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
    fontFamily: 'Inter-Regular',
  },
  category: {
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
    fontFamily: 'Inter-Regular',
  },
  imagesTitle: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: RFValue(5),
    fontFamily: 'Inter-Bold',
  },
  imagesContainer: {
    flexDirection: 'row',
  },
});
