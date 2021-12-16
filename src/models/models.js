import User from './modelUser.js';
import Product from './modelProduct.js';
import CartProduct from './modelCartProduct.js';
import ProductPhoto from './modelProductPhoto.js';
import Token from './modelToken.js'

User.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(User, { through: CartProduct });

Product.hasMany(ProductPhoto);
ProductPhoto.belongsTo(Product);

Token.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(Token);