import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout */
import PublicLayout from "./layouts/PublicLayout";

/* Public pages */
import Home from "./pages/Home";
import Contacts from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AllProducts from "./pages/product/AllProducts";
import Quote from "./pages/quote/Quote";
import Login from "./pages/login/Login";
import SearchResults from "./pages/search/SearchResults";
import CategoryPage from "./pages/category2/CategoryPage"; // ✅ Shop With Us page

/* Admin pages */
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/Admindashboard/AdminDashboard";
import ProductForm from "./admin/productform/ProductForm";
import CategoryForm from "./admin/Category/CategoryForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <Contacts />
            </PublicLayout>
          }
        />
        <Route
          path="/product/:slug"
          element={
            <PublicLayout>
              <ProductDetail />
            </PublicLayout>
          }
        />
        <Route
          path="/products"
          element={
            <PublicLayout>
              <AllProducts />
            </PublicLayout>
          }
        />
        <Route
          path="/search"
          element={
            <PublicLayout>
              <SearchResults />
            </PublicLayout>
          }
        />
        <Route
          path="/quote"
          element={
            <PublicLayout>
              <Quote />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        {/* ✅ Shop With Us route */}
        <Route
          path="/shop"
          element={
            <PublicLayout>
              <CategoryPage />
            </PublicLayout>
          }
        />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ProductForm />} />
          <Route path="products/:id" element={<ProductForm />} />
          <Route path="categories" element={<CategoryForm />} />
          <Route path="categories/:id" element={<CategoryForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
