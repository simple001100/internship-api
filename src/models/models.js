import User from './modelUser.js';
import Product from './modelProduct.js';
import CartProduct from './modelCartProduct.js';
import Token from './modelToken.js'

User.belongsToMany(Product, { through: CartProduct, foreignKey: 'cart_id' });
Product.belongsToMany(User, { through: CartProduct, foreignKey: 'product_id' });

Token.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Token);