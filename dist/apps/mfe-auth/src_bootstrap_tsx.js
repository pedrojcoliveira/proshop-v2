"use strict";
(self["webpackChunkmfeAuth"] = self["webpackChunkmfeAuth"] || []).push([["src_bootstrap_tsx"],{

/***/ 910
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: consume shared module (default) react@* (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(59);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(886);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@* (singleton) (fallback: ../../node_modules/react-router-dom/dist/index.js)
var dist_index_js_ = __webpack_require__(260);
// EXTERNAL MODULE: ../../node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(278);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 17 modules
var Form = __webpack_require__(476);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js + 1 modules
var Button = __webpack_require__(589);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(30);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(836);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Spinner.js
var Spinner = __webpack_require__(683);
// EXTERNAL MODULE: ../../node_modules/react/jsx-dev-runtime.js
var jsx_dev_runtime = __webpack_require__(978);
;// ./src/components/Loader.tsx
var _jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\mfe-auth\\src\\components\\Loader.tsx";


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
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const components_Loader = (Loader);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(533);
;// ./src/components/FormContainer.tsx
var FormContainer_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\mfe-auth\\src\\components\\FormContainer.tsx";


const FormContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Container["default"], {
    children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Row["default"], {
      className: "justify-content-md-center",
      children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Col["default"], {
        xs: 12,
        md: 6,
        children: children
      }, void 0, false, {
        fileName: FormContainer_jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: FormContainer_jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: FormContainer_jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const components_FormContainer = (FormContainer);
;// ./src/screens/LoginScreen.tsx
var LoginScreen_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\mfe-auth\\src\\screens\\LoginScreen.tsx";







const LoginScreen = () => {
  const [email, setEmail] = (0,index_js_.useState)('');
  const [password, setPassword] = (0,index_js_.useState)('');
  const [loading, setLoading] = (0,index_js_.useState)(false);
  const navigate = (0,dist_index_js_.useNavigate)();
  const {
    search
  } = (0,dist_index_js_.useLocation)();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';
  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Integrar com AuthContext via Module Federation
      console.log('Login:', {
        email,
        password
      });
      react_toastify_esm.toast.success('Login successful! (mock)');
      setTimeout(() => navigate(redirect), 1000);
    } catch (err) {
      react_toastify_esm.toast.error((err == null ? void 0 : err.message) || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(components_FormContainer, {
    children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)("h1", {
      children: "Sign In"
    }, void 0, false, {
      fileName: LoginScreen_jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"], {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Group, {
        className: "my-2",
        controlId: "email",
        children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Label, {
          children: "Email Address"
        }, void 0, false, {
          fileName: LoginScreen_jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Control, {
          type: "email",
          placeholder: "Enter email",
          value: email,
          onChange: e => setEmail(e.target.value),
          required: true
        }, void 0, false, {
          fileName: LoginScreen_jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: LoginScreen_jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Group, {
        className: "my-2",
        controlId: "password",
        children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Label, {
          children: "Password"
        }, void 0, false, {
          fileName: LoginScreen_jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Form["default"].Control, {
          type: "password",
          placeholder: "Enter password",
          value: password,
          onChange: e => setPassword(e.target.value),
          required: true
        }, void 0, false, {
          fileName: LoginScreen_jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: LoginScreen_jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Button["default"], {
        disabled: loading,
        type: "submit",
        variant: "primary",
        className: "mt-3",
        children: "Sign In"
      }, void 0, false, {
        fileName: LoginScreen_jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined), loading && /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(components_Loader, {}, void 0, false, {
        fileName: LoginScreen_jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: LoginScreen_jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Row["default"], {
      className: "py-3",
      children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(Col["default"], {
        children: ["New Customer?", ' ', /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_.Link, {
          to: redirect ? `/register?redirect=${redirect}` : '/register',
          children: "Register"
        }, void 0, false, {
          fileName: LoginScreen_jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: LoginScreen_jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: LoginScreen_jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: LoginScreen_jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ const screens_LoginScreen = (LoginScreen);
;// ./src/app/app.tsx
var app_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\mfe-auth\\src\\app\\app.tsx";




function App() {
  return /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(jsx_dev_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(react_toastify_esm.ToastContainer, {}, void 0, false, {
      fileName: app_jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_.Routes, {
      children: [/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_.Route, {
        path: "/login",
        element: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(screens_LoginScreen, {}, void 0, false, {
          fileName: app_jsxFileName,
          lineNumber: 10,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: app_jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_.Route, {
        path: "/",
        element: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(screens_LoginScreen, {}, void 0, false, {
          fileName: app_jsxFileName,
          lineNumber: 11,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: app_jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: app_jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
/* harmony default export */ const app = (App);
;// ./src/bootstrap.tsx
var bootstrap_jsxFileName = "C:\\isep\\Disserta\xE7\xE3o\\proshop-v2\\apps\\mfe-auth\\src\\bootstrap.tsx";





const root = client.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_dev_runtime.jsxDEV)(dist_index_js_.BrowserRouter, {
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

/***/ },

/***/ 886
(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(33);
if (false) // removed by dead control flow
{} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }

}]);
//# sourceMappingURL=src_bootstrap_tsx.js.map