import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";





import AddQRCodePage from "./components/qrcode/AddQRCodePage";
import QRCodeListPage from "./components/qrcode/QRCodeListPage";
import ErrorPage from "./pages/ErrorPage"


import RouteScrollToTop from "./helper/RouteScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/' element={ <Navigate to="/create-qrcode" replace />} />
        <Route exact path='/create-qrcode' element={<AddQRCodePage />} />
        <Route exact path='/list-qrcodes' element={<QRCodeListPage />} />


        

        <Route exact path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
