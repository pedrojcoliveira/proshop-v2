"use strict";
(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([["src_bootstrap_tsx"],{

/***/ 6509
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: consume shared module (default) react@* (singleton) (fallback: ../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(8674);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(1886);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@* (singleton) (fallback: ../../node_modules/react-router-dom/dist/index.js) (eager)
var dist_index_js_eager_ = __webpack_require__(5907);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(9692);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Navbar.js + 52 modules
var Navbar = __webpack_require__(7609);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Nav.js + 3 modules
var Nav = __webpack_require__(236);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Badge.js
var Badge = __webpack_require__(2264);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/NavDropdown.js + 75 modules
var NavDropdown = __webpack_require__(6905);
// EXTERNAL MODULE: ../../node_modules/react-icons/fa/index.mjs + 4 modules
var fa = __webpack_require__(131);
;// ./src/contexts/AuthContext.tsx

const AuthContext = /*#__PURE__*/(0,index_js_eager_.createContext)(undefined);
const useAuth = () => {
  const context = (0,index_js_eager_.useContext)(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
/* harmony default export */ const contexts_AuthContext = (AuthContext);
;// ./src/contexts/CartContext.tsx

const CartContext = /*#__PURE__*/(0,index_js_eager_.createContext)(undefined);
const useCart = () => {
  const context = (0,index_js_eager_.useContext)(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
/* harmony default export */ const contexts_CartContext = (CartContext);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Form.js + 15 modules
var Form = __webpack_require__(6271);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(2043);
// EXTERNAL MODULE: ../../node_modules/react/jsx-dev-runtime.js
var jsx_dev_runtime = __webpack_require__(6978);
;// ./src/components/SearchBox.tsx
var _jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\components\\SearchBox.tsx";




const SearchBox = () => {
  const navigate = (0,dist_index_js_eager_.useNavigate)();
  const [keyword, setKeyword] = (0,index_js_eager_.useState)('');
  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"], {
    onSubmit: submitHandler,
    className: "d-flex",
    children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Control, {
      type: "text",
      name: "q",
      onChange: e => setKeyword(e.target.value),
      value: keyword,
      placeholder: "Search Products...",
      className: "mr-sm-2 ml-sm-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Button["default"], {
      type: "submit",
      variant: "outline-success",
      className: "p-2 mx-2",
      children: "Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const components_SearchBox = (SearchBox);
;// ./src/assets/logo.png
const logo_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFyWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OSwgMjAyMi8wNi8xMy0xNzo0NjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMy0xN1QxMjo1ODoyMi0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDMtMTdUMTM6MDU6MDItMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDMtMTdUMTM6MDU6MDItMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczYTljZDQ2LTAwMjQtNmM0ZS05NDBiLTFkY2I5MWIyZGYzNiIgeG1wTU06RG9jdW1lbnRJRD0i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";
;// ./src/components/Header.tsx
var Header_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\components\\Header.tsx";








const Header = () => {
  const {
    userInfo,
    isAuthenticated,
    isAdmin,
    logout
  } = useAuth();
  const {
    cartItems
  } = useCart();
  const navigate = (0,dist_index_js_eager_.useNavigate)();
  const logoutHandler = () => {
    logout();
    navigate('/login');
  };
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("header", {
    children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Navbar["default"], {
      bg: "primary",
      variant: "dark",
      expand: "lg",
      collapseOnSelect: true,
      children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
        children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Navbar["default"].Brand, {
          as: dist_index_js_eager_.Link,
          to: "/",
          children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("img", {
            src: logo_namespaceObject,
            alt: "ProShop"
          }, void 0, false, {
            fileName: Header_jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), "ProShop"]
        }, void 0, true, {
          fileName: Header_jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Navbar["default"].Toggle, {
          "aria-controls": "basic-navbar-nav"
        }, void 0, false, {
          fileName: Header_jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Navbar["default"].Collapse, {
          id: "basic-navbar-nav",
          children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Nav["default"], {
            className: "ms-auto",
            children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(components_SearchBox, {}, void 0, false, {
              fileName: Header_jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Nav["default"].Link, {
              as: dist_index_js_eager_.Link,
              to: "/cart",
              children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(fa.FaShoppingCart, {}, void 0, false, {
                fileName: Header_jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, undefined), " Cart", cartItems.length > 0 && /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Badge["default"], {
                pill: true,
                bg: "success",
                style: {
                  marginLeft: '5px'
                },
                children: cartItems.reduce((a, c) => a + c.qty, 0)
              }, void 0, false, {
                fileName: Header_jsxFileName,
                lineNumber: 34,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: Header_jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), userInfo ? /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(jsx_dev_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"], {
                title: userInfo.name,
                id: "username",
                children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"].Item, {
                  as: dist_index_js_eager_.Link,
                  to: "/profile",
                  children: "Profile"
                }, void 0, false, {
                  fileName: Header_jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"].Item, {
                  onClick: logoutHandler,
                  children: "Logout"
                }, void 0, false, {
                  fileName: Header_jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: Header_jsxFileName,
                lineNumber: 41,
                columnNumber: 19
              }, undefined)
            }, void 0, false) : /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Nav["default"].Link, {
              as: dist_index_js_eager_.Link,
              to: "/login",
              children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(fa.FaUser, {}, void 0, false, {
                fileName: Header_jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }, undefined), " Sign In"]
            }, void 0, true, {
              fileName: Header_jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined), userInfo && userInfo.isAdmin && /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"], {
              title: "Admin",
              id: "adminmenu",
              children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"].Item, {
                as: dist_index_js_eager_.Link,
                to: "/admin/productlist",
                children: "Products"
              }, void 0, false, {
                fileName: Header_jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"].Item, {
                as: dist_index_js_eager_.Link,
                to: "/admin/orderlist",
                children: "Orders"
              }, void 0, false, {
                fileName: Header_jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(NavDropdown["default"].Item, {
                as: dist_index_js_eager_.Link,
                to: "/admin/userlist",
                children: "Users"
              }, void 0, false, {
                fileName: Header_jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: Header_jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: Header_jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: Header_jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: Header_jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: Header_jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: Header_jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(2843);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(5517);
;// ./src/components/Footer.tsx
var Footer_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\components\\Footer.tsx";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("footer", {
    children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
      children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Row["default"], {
        children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Col["default"], {
          className: "text-center py-3",
          children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("p", {
            children: ["ProShop \xA9 ", currentYear]
          }, void 0, true, {
            fileName: Footer_jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: Footer_jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: Footer_jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: Footer_jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: Footer_jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const components_Footer = (Footer);
;// ./src/contexts/AuthProvider.tsx
var AuthProvider_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\contexts\\AuthProvider.tsx";



const AuthProvider = ({
  children
}) => {
  var _userInfo$isAdmin;
  const [userInfo, setUserInfo] = (0,index_js_eager_.useState)(null);
  const [token, setToken] = (0,index_js_eager_.useState)(null);
  const [loading, setLoading] = (0,index_js_eager_.useState)(true);
  const [error, setError] = (0,index_js_eager_.useState)(null);

  // Load from localStorage on mount
  (0,index_js_eager_.useEffect)(() => {
    const storedUser = localStorage.getItem('userInfo');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUserInfo(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  // Persist to localStorage when user changes
  (0,index_js_eager_.useEffect)(() => {
    if (userInfo && token) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    }
  }, [userInfo, token]);
  const login = async credentials => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      const data = await response.json();
      setUserInfo(data.user);
      setToken(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const register = async data => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      const responseData = await response.json();
      setUserInfo(responseData.user);
      setToken(responseData.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    setUserInfo(null);
    setToken(null);
    setError(null);
  };
  const updateProfile = async data => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Replace with actual API call
      const response = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Update failed');
      }
      const updatedUser = await response.json();
      setUserInfo(updatedUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Update failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const clearError = () => {
    setError(null);
  };
  const value = {
    userInfo,
    token,
    isAuthenticated: !!userInfo,
    isAdmin: (_userInfo$isAdmin = userInfo == null ? void 0 : userInfo.isAdmin) != null ? _userInfo$isAdmin : false,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile,
    clearError
  };
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(contexts_AuthContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: AuthProvider_jsxFileName,
    lineNumber: 145,
    columnNumber: 10
  }, undefined);
};
/* harmony default export */ const contexts_AuthProvider = (AuthProvider);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9209);
;// ./src/contexts/CartProvider.tsx

var CartProvider_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\contexts\\CartProvider.tsx";



const CartProvider = ({
  children
}) => {
  const [cartItems, setCartItems] = (0,index_js_eager_.useState)([]);
  const [shippingAddress, setShippingAddress] = (0,index_js_eager_.useState)(null);
  const [paymentMethod, setPaymentMethod] = (0,index_js_eager_.useState)('');

  // Load from localStorage on mount
  (0,index_js_eager_.useEffect)(() => {
    const storedCart = localStorage.getItem('cartItems');
    const storedShipping = localStorage.getItem('shippingAddress');
    const storedPayment = localStorage.getItem('paymentMethod');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    if (storedShipping) {
      setShippingAddress(JSON.parse(storedShipping));
    }
    if (storedPayment) {
      setPaymentMethod(storedPayment);
    }
  }, []);

  // Persist to localStorage when cart changes
  (0,index_js_eager_.useEffect)(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  (0,index_js_eager_.useEffect)(() => {
    if (shippingAddress) {
      localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
    }
  }, [shippingAddress]);
  (0,index_js_eager_.useEffect)(() => {
    if (paymentMethod) {
      localStorage.setItem('paymentMethod', paymentMethod);
    }
  }, [paymentMethod]);
  const addToCart = item => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i._id === item._id);
      if (existingItem) {
        // Update quantity
        return prevItems.map(i => i._id === item._id ? (0,esm_extends["default"])({}, i, {
          qty: i.qty + item.qty
        }) : i);
      } else {
        // Add new item
        return [...prevItems, item];
      }
    });
  };
  const removeFromCart = productId => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems => prevItems.map(item => item._id === productId ? (0,esm_extends["default"])({}, item, {
      qty: quantity
    }) : item));
  };
  const clearCart = () => {
    setCartItems([]);
    setShippingAddress(null);
    setPaymentMethod('');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  // Computed values
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const itemsPrice = Number(subtotal.toFixed(2));
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = Number((0.15 * itemsPrice).toFixed(2));
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  const value = {
    cartItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal
  };
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(contexts_CartContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: CartProvider_jsxFileName,
    lineNumber: 115,
    columnNumber: 10
  }, undefined);
};
/* harmony default export */ const contexts_CartProvider = (CartProvider);
;// ./src/pages/HomePage.tsx
var HomePage_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\pages\\HomePage.tsx";


const HomePage = () => {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
    className: "my-3",
    children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("h1", {
      children: "Welcome to ProShop"
    }, void 0, false, {
      fileName: HomePage_jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("p", {
      children: "This is the Home page placeholder."
    }, void 0, false, {
      fileName: HomePage_jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("strong", {
        children: "Future:"
      }, void 0, false, {
        fileName: HomePage_jsxFileName,
        lineNumber: 8,
        columnNumber: 10
      }, undefined), " Will be replaced by mfe-catalog (Product Carousel + Product List)"]
    }, void 0, true, {
      fileName: HomePage_jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: HomePage_jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const pages_HomePage = (HomePage);
;// ./src/pages/ProfilePage.tsx
var ProfilePage_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\pages\\ProfilePage.tsx";


const ProfilePage = () => {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
    className: "my-3",
    children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("h1", {
      children: "Profile Page Placeholder"
    }, void 0, false, {
      fileName: ProfilePage_jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("strong", {
        children: "Future:"
      }, void 0, false, {
        fileName: ProfilePage_jsxFileName,
        lineNumber: 7,
        columnNumber: 10
      }, undefined), " Will be replaced by mfe-auth ProfileScreen"]
    }, void 0, true, {
      fileName: ProfilePage_jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: ProfilePage_jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const pages_ProfilePage = (ProfilePage);
;// ./src/pages/CartPage.tsx
var CartPage_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\pages\\CartPage.tsx";


const CartPage = () => {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
    className: "my-3",
    children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("h1", {
      children: "Cart Page Placeholder"
    }, void 0, false, {
      fileName: CartPage_jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("strong", {
        children: "Future:"
      }, void 0, false, {
        fileName: CartPage_jsxFileName,
        lineNumber: 7,
        columnNumber: 10
      }, undefined), " Will be replaced by mfe-checkout CartScreen"]
    }, void 0, true, {
      fileName: CartPage_jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: CartPage_jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const pages_CartPage = (CartPage);
// EXTERNAL MODULE: ../../node_modules/react-bootstrap/esm/Spinner.js
var Spinner = __webpack_require__(6110);
;// ./src/components/Loader.tsx
var Loader_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\components\\Loader.tsx";


const Loader = () => {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Spinner["default"], {
    animation: "border",
    role: "status",
    style: {
      width: '100px',
      height: '100px',
      margin: 'auto',
      display: 'block'
    }
  }, void 0, false, {
    fileName: Loader_jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const components_Loader = (Loader);
;// ./src/app/app.tsx
var app_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\app\\app.tsx";












const LoginScreen = /*#__PURE__*/(0,index_js_eager_.lazy)(() => __webpack_require__.e(/* import() */ "webpack_container_remote_mfeAuth_LoginScreen").then(__webpack_require__.t.bind(__webpack_require__, 6839, 23)));
function App() {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(AuthProvider, {
    children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(CartProvider, {
      children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("div", {
        style: {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(components_Header, {}, void 0, false, {
          fileName: app_jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("main", {
          style: {
            flex: 1
          },
          children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
            children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(index_js_eager_.Suspense, {
              fallback: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(components_Loader, {}, void 0, false, {
                fileName: app_jsxFileName,
                lineNumber: 24,
                columnNumber: 35
              }, this),
              children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_eager_.Routes, {
                children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_eager_.Route, {
                  path: "/",
                  element: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(pages_HomePage, {}, void 0, false, {
                    fileName: app_jsxFileName,
                    lineNumber: 26,
                    columnNumber: 44
                  }, this)
                }, void 0, false, {
                  fileName: app_jsxFileName,
                  lineNumber: 26,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_eager_.Route, {
                  path: "/login",
                  element: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(LoginScreen, {}, void 0, false, {
                    fileName: app_jsxFileName,
                    lineNumber: 27,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: app_jsxFileName,
                  lineNumber: 27,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_eager_.Route, {
                  path: "/profile",
                  element: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(pages_ProfilePage, {}, void 0, false, {
                    fileName: app_jsxFileName,
                    lineNumber: 28,
                    columnNumber: 51
                  }, this)
                }, void 0, false, {
                  fileName: app_jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_eager_.Route, {
                  path: "/cart",
                  element: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(pages_CartPage, {}, void 0, false, {
                    fileName: app_jsxFileName,
                    lineNumber: 29,
                    columnNumber: 48
                  }, this)
                }, void 0, false, {
                  fileName: app_jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: app_jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: app_jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: app_jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: app_jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(components_Footer, {}, void 0, false, {
          fileName: app_jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: app_jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: app_jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: app_jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
/* harmony default export */ const app = (App);
;// ./src/bootstrap.tsx
var bootstrap_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\shell\\src\\bootstrap.tsx";





const root = client.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(index_js_eager_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_eager_.BrowserRouter, {
    children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(app, {}, void 0, false, {
      fileName: bootstrap_jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: bootstrap_jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: bootstrap_jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined));

/***/ }

}]);
//# sourceMappingURL=src_bootstrap_tsx.js.map